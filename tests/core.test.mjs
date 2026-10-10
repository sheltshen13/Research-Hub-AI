import test from 'node:test';
import assert from 'node:assert/strict';
import {parseNumbers,summarize} from '../src/stats.js';
import {packZip,unpackZip,createBackup,inspectBackup,crc32} from '../src/backup.js';
import {lessons,matchMentorTopic} from '../src/content.js';
import {introGuidedSteps,guidedKeys,methodsGuidedSteps,guidedLessons} from '../src/guided.js';
import {execFileSync} from 'node:child_process';
import {readFile} from 'node:fs/promises';

test('descriptive statistics are correct for known fixture',()=>{
 const x=summarize([2,4,4,4,5,5,7,9]);
 assert.equal(x.n,8);assert.equal(x.mean,5);assert.equal(x.median,4.5);
 assert.ok(Math.abs(x.popStdDev-2)<1e-10);
 assert.ok(Math.abs(x.sampleStdDev-Math.sqrt(32/7))<1e-10);
});
test('single observation has no sample standard deviation',()=>{const x=summarize([7]);assert.equal(x.sampleStdDev,null);assert.equal(x.median,7);});
test('number parsing rejects malformed input',()=>{assert.deepEqual(parseNumbers(' 1,2\n3;4 '),[1,2,3,4]);assert.throws(()=>parseNumbers('1,abc,3'),/numbers only/);assert.throws(()=>parseNumbers(''),/one number/);});
test('offline academy has exactly six full lessons with valid quizzes',()=>{
 assert.equal(lessons.length,6);
 for(const l of lessons){assert.ok(l.paragraphs.length>=2);assert.ok(l.glossary.length>=2);assert.equal(l.quiz.length,l.id==='rf1'?5:l.id==='rf2'?6:2);for(const q of l.quiz)assert.ok(q.correct>=0&&q.correct<q.options.length);} 
 const intro=lessons.find(l=>l.id==='rf1'); assert.ok(intro.teachingBlocks.length>=6);assert.ok(intro.workedExample.steps.length>=6);assert.ok(intro.comparisons.length>=3);assert.ok(intro.practicePrompts.length>=3);assert.ok(intro.reflectionPrompt);
 const methods=lessons.find(l=>l.id==='rf2');assert.ok(methods.minutes>=35);assert.ok(methods.teachingBlocks.length>=6);assert.ok(methods.workedExample.steps.length>=5);assert.ok(methods.comparisons.length>=3);assert.ok(methods.glossary.length>=6);assert.ok(methods.reflectionPrompt);
});
test('mentor topic routing is explicit, not a fabricated AI answer',()=>{
 assert.equal(matchMentorTopic('How do I analyse my data?'),'analysis');
 assert.equal(matchMentorTopic('Where do I get ethics approval?'),'ethics');
 assert.equal(matchMentorTopic('What is the time?'),null);
});
test('ZIP writer and reader use valid CRC, detect corrupted archive',()=>{
 const z=packZip({'hello.txt':'hello world'}),files=unpackZip(z);
 assert.equal(new TextDecoder().decode(files['hello.txt']),'hello world');
 assert.equal(crc32(new TextEncoder().encode('123456789')),0xcbf43926);
 const tampered=z.slice();tampered[43]^=1;assert.throws(()=>unpackZip(tampered),/checksum/);
});
test('backup roundtrip validates integrity and expected project count',async()=>{
 const records=[{id:'profile',type:'profile',name:'Researcher'},{id:'proj-1',type:'project',title:'Test project',stage:1},{id:'a-1',type:'attempt',lessonId:'rf1',score:2,answers:[1,0]}];
 const zip=await createBackup(records);const result=await inspectBackup(zip);
 assert.deepEqual(result.records,records);assert.equal(result.projectCount,1);
 const modified=zip.slice();const marker=new TextEncoder().encode('research-hub-ai-backup');
 const start=modified.findIndex((_,i)=>marker.every((byte,j)=>modified[i+j]===byte));
 assert.ok(start>=0,'Expected a known marker in the ZIP payload');
 modified[start]^=1;
 await assert.rejects(()=>inspectBackup(modified),/checksum|integrity|damaged|unreadable|backup/i);
});
test('backup rejects unrecognized schema and duplicate ids safely',async()=>{
 const bad=[{id:'p',type:'project',title:'ok'},{id:'p',type:'project',title:'dup'}];
 const archive=await createBackup(bad);
 await assert.rejects(()=>inspectBackup(archive),/duplicate/);
});

test('expanded lesson notes survive the same verified ZIP backup as earlier quiz attempts',async()=>{
 const records=[
   {id:'profile',type:'profile',name:'Researcher 01'},
   {id:'attempt-old',type:'attempt',lessonId:'rf1',score:2,answers:[1,0],createdAt:'2026-10-10T00:00:00.000Z'},
   {id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',practice:'Study time and concentration: compare voluntary responses in a specified setting.',reflection:'I am learning not to confuse an opinion with evidence.',confidence:'practising'}
 ];
 const checked=await inspectBackup(await createBackup(records));
 assert.deepEqual(checked.records,records);
});
test('invalid or oversized lesson notes are rejected during backup import',async()=>{
 const note={id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',practice:'x'.repeat(8001),reflection:''};
 await assert.rejects(inspectBackup(await createBackup([note])),/malformed lesson notes/);
});
test('new Academy UI does not claim quiz success means mastery',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes("tag('Quiz passed')"));
 assert.ok(!app.includes("tag('Mastered')"));
 assert.ok(app.includes("data-field=\"practice\""));
 assert.ok(app.includes("data-field=\"reflection\""));
});

test('all browser JavaScript modules parse successfully',()=>{
 for(const path of ['src/app.js','src/content.js','src/guided.js','src/data.js','src/backup.js','src/stats.js']){
  assert.doesNotThrow(()=>execFileSync(process.execPath,['--check',new URL('../'+path,import.meta.url).pathname]));
 }
});

test('four guided research stages contain clear teaching, examples and valid mini checks',()=>{
 assert.deepEqual(guidedKeys,['guide_observation','guide_question','guide_evidence','guide_limitation']);
 assert.equal(new Set(guidedKeys).size,4);
 for(const step of introGuidedSteps){
   assert.ok(step.title.length>4);
   assert.ok(step.simple.length>25);
   assert.ok(step.example.length>25);
   assert.ok(step.prompt.length>25);
   assert.ok(step.hint.length>20);
   assert.ok(step.check.options.length>=3);
   assert.ok(step.check.correct>=0&&step.check.correct<step.check.options.length);
   assert.ok(step.check.explanation.length>35);
 }
});
test('new guided responses are backed up without changing the older practice answer',async()=>{
 const note={
  id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',
  practice:'My original response about students using AI is kept here.',
  reflection:'I understand some of the concepts.',
  confidence:'practising',
  guide_observation:'I noticed some classmates using AI to study.',
  guide_question:'How do students at one college describe AI usage for studying?',
  guide_evidence:'I could review published research.',
  guide_limitation:'Self-reported understanding might differ from learning outcomes.'
 };
 const records=[{id:'profile',type:'profile',name:'Researcher 01'},note];
 const restored=await inspectBackup(await createBackup(records));
 assert.deepEqual(restored.records,records);
});
test('guided writing import rejects invalid or oversized fields',async()=>{
 for(const wrong of [42,'x'.repeat(3001)]){
  const note={id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',practice:'',reflection:'',guide_question:wrong};
  await assert.rejects(inspectBackup(await createBackup([note])),/malformed guided practice/);
 }
});
test('Academy shows four-step guided learning and only passes current quiz format',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes("guidedPracticeView(saved,noteId,l.id)"));
 assert.ok(app.includes("case 'guided-step'"));
 assert.ok(app.includes("case 'guided-check'"));
 assert.ok(app.includes("case 'guided-summary'"));
 assert.ok(app.includes("data-field=\"practice\""));
 assert.ok(app.includes("x.answers.length===l.quiz.length"));
 assert.ok(app.includes("function renderGuidedSummary(root)"));
});

test('methods guided practice has four clear, distinct stages with accurate mini checks',()=>{
 assert.deepEqual(methodsGuidedSteps.map(step=>step.key),['method_qual','method_quant','method_mixed','method_choice']);
 assert.equal(guidedLessons.rf1.steps,introGuidedSteps);
 assert.equal(guidedLessons.rf2.steps,methodsGuidedSteps);
 assert.ok(guidedLessons.rf2.intro.includes('qualitative'));
 for(const step of methodsGuidedSteps){
  assert.ok(step.title.length>=10);
  assert.ok(step.simple.length>80);
  assert.ok(step.example.length>50);
  assert.ok(step.prompt.length>40);
  assert.ok(step.hint.length>50);
  assert.equal(step.check.options.length,3);
  assert.ok(step.check.correct>=0&&step.check.correct<3);
  assert.ok(step.check.explanation.length>70);
 }
});
test('Lesson 2 quiz includes mixed-methods integration, causation, and research ethics',()=>{
 const lesson=lessons.find(l=>l.id==='rf2');
 assert.equal(lesson.quiz.length,6);
 assert.ok(lesson.quiz.some(q=>/integrat/i.test(q.why)));
 assert.ok(lesson.quiz.some(q=>/causa/i.test(q.why)));
 assert.ok(lesson.quiz.some(q=>/ethic|permission|unauthor/i.test(q.why)));
 assert.equal(new Set(lesson.quiz.map(q=>q.correct)).size,3);
});
test('preserve original research answers while restoring new Lesson 2 guided notes and historical checks',async()=>{
 const records=[
  {id:'profile',type:'profile',name:'Researcher 01'},
  {id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',practice:'My original AI-learning response',reflection:'Research is systematic',confidence:'practising',guide_observation:'AI usage is common'},
  {id:'old-rf2',type:'attempt',lessonId:'rf2',score:2,answers:[0,1],createdAt:'2026-10-10T00:00:00.000Z'},
  {id:'lesson-note:rf2',type:'lesson-note',lessonId:'rf2',practice:'I need to compare methods',reflection:'Mixed methods integrates qualitative and quantitative evidence',confidence:'practising',method_qual:'How do students experience AI?',method_quant:'How many use it weekly?',method_mixed:'Link reported reasons with measured weekly use',method_choice:'Qualitative first, because I want to understand experiences'}
 ];
 const inspected=await inspectBackup(await createBackup(records));
 assert.deepEqual(inspected.records,records);
 assert.equal(inspected.records.find(r=>r.id==='lesson-note:rf1').practice,'My original AI-learning response');
});
test('backup rejects oversized and non-text Lesson 2 notes',async()=>{
 for(const field of ['method_qual','method_quant','method_mixed','method_choice']){
  for(const invalid of ['x'.repeat(3001),17]){
   const record={id:'lesson-note:rf2',type:'lesson-note',lessonId:'rf2',practice:'',reflection:'',[field]:invalid};
   await assert.rejects(inspectBackup(await createBackup([record])),/malformed guided practice/);
  }
 }
});
test('method guide reuses existing navigation, autosave and honest assessment history logic',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes('guidedLessons[lessonId]'));
 assert.ok(app.includes('guidedLessons[root.dataset.guidedLesson]'));
 assert.ok(app.includes("field.startsWith('method_')"));
 assert.ok(app.includes('Previous question wording and choices have changed.'));
 assert.ok(app.includes("x.answers.length===l.quiz.length"));
 assert.ok(app.includes('renderGuidedSummary(root)'));
});

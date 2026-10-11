import test from 'node:test';
import assert from 'node:assert/strict';
import {parseNumbers,summarize} from '../src/stats.js';
import {packZip,unpackZip,createBackup,inspectBackup,crc32} from '../src/backup.js';
import {lessons,matchMentorTopic} from '../src/content.js';
import {introGuidedSteps,guidedKeys,methodsGuidedSteps,evidenceGuidedSteps,ethicsGuidedSteps,qualityGuidedSteps,projectGuidedSteps,guidedLessons} from '../src/guided.js';
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
 for(const l of lessons){assert.ok(l.paragraphs.length>=2);assert.ok(l.glossary.length>=2);assert.equal(l.quiz.length,l.id==='rf1'?5:l.id==='rf2'?6:l.id==='rf3'?7:8);for(const q of l.quiz)assert.ok(q.correct>=0&&q.correct<q.options.length);} 
 const intro=lessons.find(l=>l.id==='rf1'); assert.ok(intro.teachingBlocks.length>=6);assert.ok(intro.workedExample.steps.length>=6);assert.ok(intro.comparisons.length>=3);assert.ok(intro.practicePrompts.length>=3);assert.ok(intro.reflectionPrompt);
 const methods=lessons.find(l=>l.id==='rf2');assert.ok(methods.minutes>=35);assert.ok(methods.teachingBlocks.length>=6);assert.ok(methods.workedExample.steps.length>=5);assert.ok(methods.comparisons.length>=3);assert.ok(methods.glossary.length>=6);assert.ok(methods.reflectionPrompt);
 const evidence=lessons.find(l=>l.id==='rf3');assert.ok(evidence.minutes>=40);assert.ok(evidence.teachingBlocks.length>=7);assert.ok(evidence.workedExample.steps.length>=5);assert.ok(evidence.comparisons.length>=4);assert.ok(evidence.glossary.length>=9);assert.ok(evidence.reflectionPrompt);
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


test('Lesson 3 evidence literacy is detailed and clearly distinguishes fact from fiction',()=>{
 const l=lessons.find(x=>x.id==='rf3');
 assert.equal(l.quiz.length,7);
 assert.ok(l.paragraphs.some(x=>/illustrative|invented|fictional/i.test(x)));
 assert.ok(l.workedExample.steps[0][1].includes('fictional'));
 assert.ok(l.teachingBlocks.some(x=>/primary/i.test(x.title)||x.paragraphs.some(p=>/primary/i.test(p))));
 assert.ok(l.teachingBlocks.some(x=>x.paragraphs.some(p=>/peer review/i.test(p))));
 assert.ok(l.teachingBlocks.some(x=>x.paragraphs.some(p=>/DOI/i.test(p))));
 assert.ok(l.teachingBlocks.some(x=>x.paragraphs.some(p=>/causation/i.test(p))));
 assert.ok(l.quiz.some(q=>/original source|original evidence|original publication/i.test(q.why)));
 assert.ok(l.quiz.some(q=>/systematic review/i.test(q.why)));
 assert.ok(l.quiz.some(q=>/peer review/i.test(q.why)));
 assert.ok(l.quiz.some(q=>/causation/i.test(q.why)));
 assert.equal(new Set(l.quiz.map(q=>q.correct)).size,3);
});

test('guided evidence exercises are distinct and give useful answers and feedback',()=>{
 assert.equal(guidedLessons.rf3.steps,evidenceGuidedSteps);
 assert.deepEqual(evidenceGuidedSteps.map(x=>x.key),['evidence_question','evidence_claim','evidence_source','evidence_limit']);
 for(const step of evidenceGuidedSteps){
  assert.ok(step.simple.length>70);
  assert.ok(step.example.length>60);
  assert.ok(step.prompt.length>40);
  assert.ok(step.hint.length>45);
  assert.ok(step.check.options.length>=3);
  assert.ok(Number.isInteger(step.check.correct));
  assert.ok(step.check.correct>=0&&step.check.correct<step.check.options.length);
  assert.ok(step.check.explanation.length>70);
 }
});

test('Lesson 3 autosaved answers and historic quizzes survive a verified backup',async()=>{
 const records=[
  {id:'profile',type:'profile',name:'Researcher 01'},
  {id:'lesson-note:rf1',type:'lesson-note',lessonId:'rf1',practice:'Earlier AI research idea',reflection:'Still learning',confidence:'practising',guide_question:'What do students think of AI?'},
  {id:'lesson-note:rf2',type:'lesson-note',lessonId:'rf2',practice:'Qualitative and quantitative',reflection:'Need more practice',method_choice:'Qualitative interviews may explain reported experiences.'},
  {id:'quiz-old-rf3',type:'attempt',lessonId:'rf3',score:2,answers:[1,1],createdAt:'2026-10-10T00:00:00Z'},
  {id:'lesson-note:rf3',type:'lesson-note',lessonId:'rf3',practice:'Check whether AI helps students',reflection:'Sources must be traceable',confidence:'practising',
   evidence_question:'How do students perceive AI explanations?',
   evidence_claim:'Some students report AI feels helpful, but learning is not measured.',
   evidence_source:'Look for original journal article, methods, identifiers and corrections.',
   evidence_limit:'Responses do not prove learning gains or causation.'}
 ];
 const result=await inspectBackup(await createBackup(records));
 assert.deepEqual(result.records,records);
});

test('Lesson 3 guided answers must be valid text and within the 3000-character limit',async()=>{
 for(const key of ['evidence_question','evidence_claim','evidence_source','evidence_limit']){
  for(const invalid of [12,'x'.repeat(3001)]){
    const item={id:'lesson-note:rf3',type:'lesson-note',lessonId:'rf3',practice:'',reflection:'',[key]:invalid};
    await assert.rejects(inspectBackup(await createBackup([item])),/malformed guided practice/);
  }
 }
});

test('Lesson 3 app reuses the safe, source-independent guided interface',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes("guidedPracticeView(saved,noteId,l.id)"));
 assert.ok(app.includes("guidedLessons[root.dataset.guidedLesson]"));
 assert.ok(app.includes("field.startsWith('evidence_')"));
 assert.ok(app.includes("x.answers.length===l.quiz.length"));
 assert.ok(app.includes('Previous question wording and choices have changed.'));
});


test('full six-lesson Research Fundamentals course has complete teaching, guided work and assessment',()=>{
 const expected=['rf1','rf2','rf3','rf4','rf5','rf6'];
 assert.deepEqual(lessons.map(l=>l.id),expected);
 const allKeys=[];
 for(const lesson of lessons){
  assert.ok(lesson.minutes>=35,'Study estimate too short: '+lesson.id);
  assert.ok(lesson.paragraphs.length>=3,'Missing substantial introduction: '+lesson.id);
  assert.ok(lesson.teachingBlocks.length>=6,'Missing detailed teaching sections: '+lesson.id);
  assert.ok(lesson.teachingBlocks.every(b=>b.title&&b.paragraphs.length>=2),'Missing teaching detail: '+lesson.id);
  assert.ok(lesson.glossary.length>=6,'Missing key terms: '+lesson.id);
  assert.ok(lesson.workedExample.steps.length>=5,'Missing worked investigation: '+lesson.id);
  assert.ok(lesson.comparisons.length>=3,'Missing common-mistake comparison: '+lesson.id);
  assert.ok(lesson.practicePrompts.length>=3,'Missing practice prompts: '+lesson.id);
  assert.ok(lesson.reflectionPrompt.length>50,'Missing reflection: '+lesson.id);
  assert.ok(lesson.objectives.length>=2,'Missing objectives: '+lesson.id);
  assert.ok(lesson.quiz.length>=5,'Quiz too shallow: '+lesson.id);
  for(const q of lesson.quiz){
   assert.ok(q.options.length>=3,'Question options missing: '+lesson.id);
   assert.ok(Number.isInteger(q.correct) && q.correct>=0 && q.correct<q.options.length,'Invalid correct choice: '+lesson.id);
   assert.ok(q.why.length>45,'Assessment needs a useful explanation: '+lesson.id);
  }
  const guide=guidedLessons[lesson.id];
  assert.ok(guide,'Missing a guided learning activity: '+lesson.id);
  assert.equal(guide.steps.length,4,'Expected four beginner stages: '+lesson.id);
  assert.ok(guide.title&&guide.intro&&guide.recapTitle);
  for(const st of guide.steps){
   assert.ok(st.simple.length>=75,'Unclear explanation: '+st.key);
   assert.ok(st.example.length>=50,'Missing practical example: '+st.key);
   assert.ok(st.prompt.length>=40,'Missing learner writing prompt: '+st.key);
   assert.ok(st.hint.length>=35,'Missing help text: '+st.key);
   assert.equal(st.check.options.length,3,'Mini check should have three options');
   assert.ok(Number.isInteger(st.check.correct)&&st.check.correct>=0&&st.check.correct<3);
   assert.ok(st.check.explanation.length>60,'Mini-check feedback too shallow: '+st.key);
   allKeys.push(st.key);
  }
 }
 assert.equal(allKeys.length,24);
 assert.equal(new Set(allKeys).size,allKeys.length,'Guided answer fields must be unique across lessons');
});

test('ethics lesson covers review, consent, privacy, integrity and platform limits',()=>{
 const l=lessons.find(x=>x.id==='rf4');
 const words=[...l.paragraphs,...l.teachingBlocks.flatMap(x=>x.paragraphs)].join(' ');
 for(const word of ['ethics','consent','confidentiality','approval','withdraw','AI','participants']){
  assert.ok(words.toLowerCase().includes(word.toLowerCase()),'Ethics concept missing: '+word);
 }
 assert.ok(/cannot grant an exemption|cannot grant.*ethics approval/i.test(words));
 assert.ok(/unencrypted/.test(words));
 assert.deepEqual(ethicsGuidedSteps.map(x=>x.key),['ethics_risk','ethics_consent','ethics_privacy','ethics_integrity']);
 assert.ok(l.quiz.some(q=>/review|approval/i.test(q.why)));
 assert.ok(l.quiz.some(q=>/student numbers|anonym/i.test(q.why)));
});

test('quality lesson teaches fit, bias, validity, causation and responsible transparency',()=>{
 const l=lessons.find(x=>x.id==='rf5');
 const words=[...l.paragraphs,...l.teachingBlocks.flatMap(x=>x.paragraphs)].join(' ').toLowerCase();
 for(const word of ['selection bias','measurement bias','confounding','reliability','validity','causation','reproducibility','replication']){
  assert.ok(words.includes(word),'Quality topic missing: '+word);
 }
 assert.deepEqual(qualityGuidedSteps.map(x=>x.key),['quality_design','quality_sampling','quality_bias','quality_conclusion']);
 assert.ok(l.quiz.some(q=>/qualitative/i.test(q.why)));
 assert.ok(l.quiz.some(q=>/sample|selection bias/.test(q.why)));
});

test('first-project capstone connects the whole course without inventing research results',()=>{
 const l=lessons.find(x=>x.id==='rf6');
 const words=[...l.paragraphs,...l.teachingBlocks.flatMap(x=>x.paragraphs)].join(' ').toLowerCase();
 for(const word of ['literature review','research question','objectives','evidence','ethics','milestone','limitations']){
  assert.ok(words.includes(word),'Project-planning topic missing: '+word);
 }
 assert.deepEqual(projectGuidedSteps.map(x=>x.key),['project_question','project_objectives','project_evidence','project_plan']);
 assert.ok(l.workedExample.steps.some(x=>/ethic/i.test(x[0])));
 assert.ok(l.quiz.some(q=>/non-accredited|knowledge checks/i.test(q.why)));
});

test('all six Foundation lesson notes and historical attempts survive old-format ZIP backups',async()=>{
 const records=[
  {id:'profile',type:'profile',name:'Researcher 01'},
  {id:'attempt-legacy',type:'attempt',lessonId:'rf4',score:2,answers:[1,1],createdAt:'2026-10-10T00:00:00.000Z'},
  ...lessons.map(l=>({
    id:'lesson-note:'+l.id,type:'lesson-note',lessonId:l.id,practice:'Personal practice for '+l.id,
    reflection:'Reflection for '+l.id,confidence:'practising',
    ...Object.fromEntries(guidedLessons[l.id].steps.map(step=>[step.key,'My answer for '+step.title]))
  }))
 ];
 const out=await inspectBackup(await createBackup(records));
 assert.deepEqual(out.records,records);
 assert.equal(out.count,8);
 assert.ok(out.records.some(x=>x.id==='attempt-legacy'));
});

test('malformed guided writing in each of the new Foundation lessons is rejected safely',async()=>{
 for(const id of ['rf4','rf5','rf6']){
  for(const step of guidedLessons[id].steps){
   for(const invalid of ['x'.repeat(3001),42]){
    const note={id:'lesson-note:'+id,type:'lesson-note',lessonId:id,practice:'',reflection:'',[step.key]:invalid};
    await assert.rejects(inspectBackup(await createBackup([note])),/malformed guided practice/);
   }
  }
 }
});

test('Academy UI has a complete course but does not misrepresent planned subjects or mastery',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes("tag('6 complete lessons')"));
 assert.ok(app.includes('The other')||app.includes('Future Academy subjects'));
 assert.ok(app.includes('Quiz passed'));
 assert.ok(!app.includes("tag('Mastered')"));
 for(const prefix of ['ethics_','quality_','project_']){
  assert.ok(app.includes("field.startsWith('"+prefix+"')"),'Missing autosave handling: '+prefix);
 }
 const sw=await readFile(new URL('../sw.js',import.meta.url),'utf8');
 assert.ok(sw.includes('research-hub-ai-0.2.0-core'));
});

test('course teaching materials are independently readable without AI APIs',()=>{
 const l4=lessons.find(l=>l.id==='rf4');
 const l5=lessons.find(l=>l.id==='rf5');
 const l6=lessons.find(l=>l.id==='rf6');
 assert.ok(l4.paragraphs.some(x=>/cannot grant/i.test(x)));
 assert.ok(l5.paragraphs.some(x=>/imaginary|teaching illustrations/i.test(x)));
 assert.ok(l6.paragraphs.some(x=>/fictional teaching proposal/i.test(x)));
 assert.ok(l6.teachingBlocks.some(x=>/multiple-choice pass/i.test(x.paragraphs.join(' '))));
});

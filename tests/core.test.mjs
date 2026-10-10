import test from 'node:test';
import assert from 'node:assert/strict';
import {parseNumbers,summarize} from '../src/stats.js';
import {packZip,unpackZip,createBackup,inspectBackup,crc32} from '../src/backup.js';
import {lessons,matchMentorTopic} from '../src/content.js';

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
 for(const l of lessons){assert.ok(l.paragraphs.length>=2);assert.ok(l.glossary.length>=2);assert.equal(l.quiz.length,l.id==='rf1'?5:2);for(const q of l.quiz)assert.ok(q.correct>=0&&q.correct<q.options.length);} 
 const intro=lessons.find(l=>l.id==='rf1'); assert.ok(intro.teachingBlocks.length>=6);assert.ok(intro.workedExample.steps.length>=6);assert.ok(intro.comparisons.length>=3);assert.ok(intro.practicePrompts.length>=3);assert.ok(intro.reflectionPrompt);
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
 const modified=zip.slice();const start=modified.indexOf(0x64);modified[start]^=1;await assert.rejects(()=>inspectBackup(modified));
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
 await assert.rejects(()=>inspectBackup(await createBackup([note])),/malformed lesson notes/);
});
test('new Academy UI does not claim quiz success means mastery',async()=>{
 const app=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
 assert.ok(app.includes("tag('Quiz passed')"));
 assert.ok(!app.includes("tag('Mastered')"));
 assert.ok(app.includes("data-field=\"practice\""));
 assert.ok(app.includes("data-field=\"reflection\""));
});

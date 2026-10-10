export const levels=[
  ['foundation','Foundation · new to research'],['developing','Developing · building research skills'],['independent','Independent · conducting research'],['advanced','Advanced · doctoral-level methods'],['professional','Professional · specialised research']
];
export const subjects=[
  'Research Fundamentals','Choosing a Research Topic','Research Questions and Objectives','Literature Review','Research Methodology','Ethics and Responsible Research','Sampling and Data Collection','Quantitative Analysis','Qualitative Analysis','Academic Writing and Referencing','Research Quality and Reproducibility','Publication and Communication'
];
export const stages=[
  ['Topic & Problem','Identify the problem and check feasibility.'],
  ['Literature Review','Find, verify and compare previous studies.'],
  ['Proposal & Methods','Plan questions, design and ethical requirements.'],
  ['Data Collection','Design appropriate instruments and collect responsibly.'],
  ['Data Analysis','Use checked methods and traceable calculations.'],
  ['Results & Discussion','Interpret evidence and communicate limitations.'],
  ['Research Writing','Write evidence-linked chapters or reports.'],
  ['Publication & Archive','Prepare dissemination and retain research outputs.']
];
export const lessons=[
  {
    id:'rf1',title:'What counts as research?',minutes:35,skill:'Understanding research',
    objectives:[
      'Explain what research means in your own words, using an everyday example.',
      'Describe the six main steps in a simple research investigation.',
      'Distinguish research from casual searching or collecting opinions.',
      'Identify a focused question, suitable evidence, and at least one limitation.'
    ],
    glossary:[
      ['Research','A planned, systematic investigation that uses appropriate evidence and methods to answer a question or develop understanding.'],
      ['Research question','A focused question that guides what the study will investigate.'],
      ['Evidence','Information relevant to a claim, such as observations, measurements, documents or interview accounts.'],
      ['Method','A procedure used to gather or analyse evidence.'],
      ['Bias','An influence that could systematically distort information or interpretation.'],
      ['Limitation','A reason the study cannot answer every question or support every possible conclusion.']
    ],
    paragraphs:[
      'Research begins with curiosity, but curiosity alone is not enough. Research is a planned investigation of a clear question using evidence gathered and examined in a way that other people can understand and critically assess.',
      'A researcher does not start by deciding what the answer must be. They remain open to evidence that supports, challenges or complicates their initial idea. Some studies measure numbers; others explore experiences, documents or behaviour.',
      'By the end of this lesson, you should be able to explain research to a friend without copying a definition. You do not need to memorise technical language.'
    ],
    teachingBlocks:[
      {title:'1. Curiosity becomes a question',paragraphs:[
        'Suppose you notice that some students miss morning lectures. “Why do students miss class?” is a starting curiosity. A research question narrows that curiosity so it can be investigated: “What reasons do first-year students at a particular college report for missing morning lectures during one semester?”',
        'The second question identifies who (first-year students), what (reported reasons), where (one college) and when (one semester). A precise question helps you decide which information is relevant.'
      ]},
      {title:'2. Evidence is more than an opinion',paragraphs:[
        'Saying “I think students miss class because they are lazy” is an opinion, not a finding. Evidence might include attendance records, voluntary anonymous surveys or interviews conducted with appropriate permissions. Each source can answer different questions.',
        'Evidence also has weaknesses. For example, students who choose to complete a survey might differ from students who do not. Researchers should consider whose views are missing.'
      ]},
      {title:'3. Choose a method that fits the question',paragraphs:[
        'A method explains how you will investigate. If you ask “What percentage of students miss three or more classes?”, attendance counts may be suitable. If you ask “How do students explain their absences?”, interviews may help.',
        'There is no single best method for every study. The question, available resources, ethics and type of evidence should guide the choice.'
      ]},
      {title:'4. Analyse before concluding',paragraphs:[
        'Collecting responses is not the finish line. Analysis means examining evidence systematically: calculating counts and patterns, comparing accounts, or organising recurring themes using a clear process.',
        'For instance, if a survey finds that many respondents mention long commuting times, that describes what those respondents reported. It does not prove that commuting caused every absence.'
      ]},
      {title:'5. Report the answer and its limits',paragraphs:[
        'A good research conclusion answers the actual question as far as the evidence allows. It also explains what remains uncertain, such as a small sample, missing participants or possible measurement problems.',
        'Research can be valuable even if the expected pattern is not found. Changing or hiding results to obtain a preferred conclusion would be poor research practice.'
      ]},
      {title:'6. Research must be ethical and transparent',paragraphs:[
        'If a study involves people, researchers may need informed consent, privacy safeguards and institutional ethics approval before collecting data. The rules depend on the setting and institution.',
        'Researchers should record what they really did and where information came from. Never invent interviews, observations, citations or statistics. This early app is for learning and non-sensitive projects, not identifiable participant records.'
      ]}
    ],
    workedExample:{
      title:'Worked example: Does a quieter study space help concentration?',
      steps:[
        ['Observation','You notice that you lose concentration in a noisy room.'],
        ['Question','Among volunteer classmates in a defined setting, how do reported concentration ratings differ between quiet and noisy study sessions?'],
        ['Plan','Choose an appropriate design, obtain required permissions, define concentration and decide how sessions will be compared.'],
        ['Collect','With proper consent, record the planned observations or ratings in a consistent way.'],
        ['Analyse','Summarise the ratings, inspect variation and consider other influences, such as sleep or task difficulty.'],
        ['Conclude','Report the observed difference and uncertainty. Avoid claiming that noise caused the difference unless the design supports causal inference.']
      ],
      takeaway:'Notice how every step connects to the question, and the conclusion does not claim more than the evidence supports.'
    },
    comparisons:[
      ['Finding an internet answer','Reading the first search result and repeating its conclusion','Checking multiple relevant sources, their evidence and how claims were obtained'],
      ['Starting from an assumption','Deciding that group study is always better, then asking only friends who agree','Asking a fair question and examining both supporting and conflicting evidence'],
      ['Presenting results','Reporting only the most favourable answers','Reporting findings, limitations and uncertainty']
    ],
    example:'Broad curiosity: “Is online learning good?” A better starting question: “What factors influence participation in remote learning among first-year university students in a defined setting?” It may still need refining after reviewing previous studies.',
    practice:'Think of something you have noticed in everyday life. Use the prompts below to turn it into a small, focused research question. This is a practice activity, not a formal study.',
    practicePrompts:[
      'Observation: What have you noticed or wondered about?',
      'Question: Who or what would you study, and in which setting?',
      'Evidence: What would you need to observe, measure or ask?',
      'Limitation: What could prevent a confident conclusion?'
    ],
    reflectionPrompt:'Explain research in your own words, and describe one difference between a personal opinion and a research finding. Which part still feels confusing?',
    quiz:[
      {q:'Which is the strongest description of research?',options:['Collecting facts that support my opinion','A systematic inquiry using appropriate evidence and methods','Searching for the first available answer'],correct:1,why:'Research is systematic and evidence-based. Researchers must remain open to findings that challenge their expectations.'},
      {q:'What makes a research question more useful?',options:['A clear focus and feasible scope','As broad a topic as possible','A guaranteed preferred answer'],correct:0,why:'Focused, feasible questions guide suitable methods and evidence collection.'},
      {q:'You believe group study always improves grades. What is the most research-minded first action?',options:['Ask only classmates who agree','Start advertising the conclusion','Write a fair question and examine existing evidence','Ignore information that challenges your view'],correct:2,why:'A research question should not assume its answer. Prior evidence and alternative explanations matter.'},
      {q:'You want to know what percentage of students regularly attend morning lectures. What evidence would be most directly relevant?',options:['A single student’s opinion about why others attend','A properly defined attendance count for the chosen group and time period','A quote saying mornings are unpleasant','Your own guess based on a few days'],correct:1,why:'A numerical proportion needs a clearly defined group, time period and reliable counts.'},
      {q:'Your voluntary survey found that 18 of 30 respondents reported long commuting times. Which conclusion is best?',options:['All students miss lectures because of commuting','Commuting has been proven to cause absence','The university should immediately change all timetables','18 of the 30 respondents reported long commutes; further evidence is needed before generalising or inferring cause'],correct:3,why:'Describe the sample accurately and acknowledge what the results cannot prove. Respondents may not represent everyone.'}
    ]
  },
  {id:'rf2',title:'Research types and approaches',minutes:14,skill:'Understanding methodologies',glossary:[['Qualitative','Research exploring experiences, meanings or processes using non-numerical material.'],['Quantitative','Research measuring variables or numerical patterns.'],['Mixed methods','A deliberate combination of qualitative and quantitative approaches.']],objectives:['Distinguish qualitative, quantitative and mixed methods.','Connect the method to the question.'],paragraphs:[
    'Qualitative research can investigate meanings and experiences through interviews, observations and documents. Quantitative research uses measurements and numbers to explore patterns, differences or associations. Mixed-methods research combines both approaches when that combination helps answer the question.',
    'No approach is automatically better. A research question about “how students experience online learning” differs from one asking “what proportion of students attend weekly?” A suitable design considers the question, ethics, data and resources.'
  ],example:'Understanding why learners avoid an online forum might involve interviews. Estimating the percentage who log in weekly might use usage data. Combining both can answer different aspects of a single problem.',practice:'Create one qualitative and one quantitative question about the same topic.',quiz:[{q:'Interviews about students’ experiences are usually associated with:',options:['Qualitative research','Only laboratory experiments','Automatic proof of causation'],correct:0,why:'Interviews can be used to investigate meanings and experiences; their analysis still requires a method.'},{q:'Which is a quantitative research question?',options:['How do learners describe isolation?','What percentage of learners attend each week?','Why do participants feel excluded?'],correct:1,why:'A percentage is a numerical measurement.'}]},
  {id:'rf3',title:'Questions, evidence and sources',minutes:12,skill:'Evaluating evidence',glossary:[['Primary source','Original records or material relevant to the inquiry.'],['Secondary source','A source interpreting or analysing existing material.'],['Peer review','A process in which specialists evaluate a manuscript before publication.']],objectives:['Evaluate whether a claim is supported.','Distinguish common source types.'],paragraphs:[
    'A claim is not reliable merely because it sounds convincing. Ask who produced the information, when, how the evidence was collected and whether alternative explanations are possible. A scholarly paper may be relevant without being high quality.',
    'Primary and secondary sources serve different purposes. An original interview transcript is primary material for that interview study; a review discussing many studies is secondary analysis. Peer review can help quality control but is not a guarantee of correctness.'
  ],example:'“Every student prefers online learning” is a sweeping claim. A trustworthy analysis would identify which students were studied, how preferences were measured and which uncertainties remain.',practice:'Pick a news or academic claim. Identify the source, sample, measurement and possible limitation.',quiz:[{q:'Which is the best way to evaluate a claim?',options:['Use it if it confirms my belief','Check its source, methods and supporting evidence','Assume peer-reviewed means error-free'],correct:1,why:'Evidence quality requires evaluating the origin, methods, scope and uncertainty.'},{q:'A systematic review is typically:',options:['A direct measurement from a new experiment','A structured synthesis of previous studies','Proof that all included studies are flawless'],correct:1,why:'A review synthesises existing research using defined methods.'}]},
  {id:'rf4',title:'Ethics and responsible research',minutes:15,skill:'Research ethics awareness',glossary:[['Informed consent','Voluntary agreement based on sufficient information.'],['Confidentiality','Appropriate protection of information from unauthorised disclosure.'],['Conflict of interest','A circumstance that might compromise or appear to compromise impartiality.']],objectives:['Recognise basic ethics responsibilities.','Identify when institutional guidance may be required.'],paragraphs:[
    'Research involving people may require ethics approval before recruitment or data collection. Researchers should consider consent, potential harm, fairness, confidentiality, data protection and participants’ right to withdraw where applicable.',
    'This educational app cannot issue ethics approval. Do not put identifiable participant records, sensitive interviews or protected health information into this early local prototype. University or organisational requirements take priority.'
  ],example:'Before interviewing students about stressful experiences, check approval requirements, prepare accessible participant information, consider emotional risks and plan secure data storage.',practice:'Write two possible harms and two mitigations for a hypothetical participant interview.',quiz:[{q:'When should a study seek required ethics approval?',options:['After all interviews are complete','Before relevant participant recruitment or data collection','Only if results will be published'],correct:1,why:'Institutional requirements often mandate approval before participant recruitment or collection.'},{q:'Does Research Hub AI provide formal ethics approval?',options:['Yes, by completing a quiz','No, consult the responsible institution or review board','Yes, when offline'],correct:1,why:'A teaching tool cannot replace institutional ethics review.'}]},
  {id:'rf5',title:'How to evaluate research quality',minutes:14,skill:'Critical appraisal',glossary:[['Bias','A systematic influence that may distort results or interpretation.'],['Limitation','A constraint on what can reasonably be concluded.'],['Reproducibility','The ability to obtain consistent results using documented procedures and materials, as applicable.']],objectives:['Identify limitations and avoid overclaiming.','Understand reproducibility and transparent reporting.'],paragraphs:[
    'A useful research report explains the question, study design, sampling, procedures, analysis and limitations. A large sample is not automatically representative, and an association does not by itself prove causation.',
    'Transparent documentation makes research easier to evaluate and, where appropriate, reproduce. Methods should describe what was actually done, and reports should never invent participants, measurements or citations.'
  ],example:'A survey of volunteers from one campus may reveal interesting patterns, but its findings should not automatically be generalised to all students in a country.',practice:'Think of one factor that could bias a survey on your campus and suggest a mitigation.',quiz:[{q:'A positive relationship between two variables proves:',options:['One causes the other','A pattern that may need further investigation','Every individual follows the pattern'],correct:1,why:'Correlation alone does not establish causality.'},{q:'A transparent study should describe:',options:['Only its positive results','Its methods, evidence and limitations','Only findings that support its hypothesis'],correct:1,why:'Transparent reporting includes methods, uncertainty and limitations.'}]},
  {id:'rf6',title:'From learning to a first project',minutes:16,skill:'Research planning',glossary:[['Feasibility','Whether a study is practical given time, access, resources and ethics.'],['Research objective','A concrete goal a study aims to achieve.'],['Research design','The overall plan connecting questions, evidence and analysis.']],objectives:['Describe the stages of a research project.','Draft a focused, feasible starting question.'],paragraphs:[
    'A useful starting workflow is: identify a problem, review existing knowledge, refine questions, choose methods, review ethical requirements, gather data, analyse it and communicate findings. The process is iterative; evidence may cause you to revise an earlier decision.',
    'Start small. Choose an interesting question that is answerable with resources and access you actually have. Record uncertainties honestly and ask a supervisor or ethics office when the situation requires specialist approval.'
  ],example:'Interest: rural education. Possible early question: “What barriers to attending optional online tutoring are reported by students at [defined institution] during [defined period]?” This is still a draft requiring literature review and feasibility checks.',practice:'Draft a tentative research topic and question, then save them in My Research. It is acceptable to revise them later.',quiz:[{q:'What should normally guide the choice of methodology?',options:['The researcher’s favourite software','The research question, evidence needs and ethics','The cheapest tool alone'],correct:1,why:'Research design must fit the question and relevant constraints.'},{q:'What if early evidence challenges your starting assumption?',options:['Hide the evidence','Re-examine and revise the question or interpretation','Invent supporting results'],correct:1,why:'Responsible research responds to evidence rather than protecting a preferred conclusion.'}]}
];
export const mentorTopics={
  question:{label:'Formulating a question',keys:['question','topic','objective','hypothesis','problem'],teach:'A research question identifies what you want to investigate. A focused question often specifies the phenomenon, population or setting, and what kind of answer you seek.',guide:'Begin by stating the issue. Then identify who or what you will study, what data you can access, and what is feasible. Draft a question and inspect its scope.',assist:'Open My Research, select a project and add a draft question. Your question is saved locally; it is not automatically validated as original.',tip:'Explain why: A clear question helps align the literature search, methods and analysis.'},
  methods:{label:'Choosing research methods',keys:['method','qualitative','quantitative','sampling','survey','interview','design'],teach:'Qualitative methods explore meanings or processes; quantitative methods examine numerical patterns; mixed methods combine compatible approaches when justified.',guide:'Write your question first. Decide whether you need accounts of experience, numeric measurement or both. Check ethics, sampling, resources and assumptions.',assist:'Use the methodology field in your selected project to record a candidate design and its rationale. A full decision assistant is planned for later releases.',tip:'Explain why: The question and available evidence must determine the research design.'},
  evidence:{label:'Evaluating evidence',keys:['literature','reference','citation','source','paper','research gap','evidence'],teach:'Compare relevant studies by aims, methods, sample, findings and limitations. A research gap is a carefully supported claim, not merely a topic that appears unusual.',guide:'Identify search terms; examine multiple credible sources; document inclusion decisions; compare them and note unresolved questions.',assist:'Use Research Library to record paper details and notes manually. This version does not verify references online or search journal databases.',tip:'Explain why: Source-grounding lets readers distinguish published evidence from your interpretation.'},
  ethics:{label:'Research ethics',keys:['ethic','privacy','consent','participant','confidential','approval'],teach:'Research ethics protects participants and supports responsible conduct. Consent, data handling, potential harm and institutional approval requirements all matter.',guide:'Identify whether your study involves people, personal data or sensitive topics. Check your institution’s ethics procedure before recruitment or data collection.',assist:'Avoid storing identifiable or restricted participant data in this prototype. The app cannot grant ethics approval.',tip:'Explain why: Research quality includes protection of people and responsible handling of evidence.'},
  analysis:{label:'Understanding analysis',keys:['data','analysis','statistics','mean','median','standard deviation','results'],teach:'Descriptive statistics summarise numbers. For example, the mean is the arithmetic average; the median is the middle sorted value.',guide:'Understand the variables and measurement scale, inspect missing values and outliers, then choose the method that matches your question and assumptions.',assist:'The Research Lab provides a transparent descriptive-statistics calculator for non-sensitive practice numbers.',tip:'Explain why: A reproducible calculation is stronger than an unsupported AI-generated statistic.'},
  writing:{label:'Writing research',keys:['writing','thesis','report','discussion','conclusion','abstract','draft'],teach:'Academic writing connects a claim to evidence and explains how the evidence supports it. A useful structure makes the question, method, results and limits clear.',guide:'Start with an outline that follows your research objectives, then draft evidence-linked sections. Distinguish observations from interpretations.',assist:'Open Writing Studio to work on a plain-text project draft. Autosave keeps the latest local copy; export a backup regularly.',tip:'Explain why: Transparent writing makes it possible for readers to evaluate your argument.'}
};
export function matchMentorTopic(message){
  const m=String(message||'').toLowerCase();
  let best=null,score=0;
  for(const [key,topic] of Object.entries(mentorTopics)){
    const s=topic.keys.reduce((a,word)=>a+(m.includes(word)?1:0),0);
    if(s>score){best=key;score=s;}
  }
  return best;
}

// Four beginner concepts, taught one at a time. Deterministic checks, no paid AI.
export const introGuidedSteps = [
  {
    key: 'guide_observation',
    title: 'Observation',
    simple: 'An observation is something you notice or wonder about. You are not proving anything yet.',
    example: 'You notice that many students use AI tools while studying.',
    prompt: 'What have you personally noticed? Start with “I noticed...” or “I wonder...”',
    hint: 'Describe what you saw or became curious about, without declaring it good or bad.',
    check: {
      question: 'Which statement is an observation rather than a proven conclusion?',
      options: ['AI definitely makes all students learn less.', 'I have noticed some students asking AI for help with studying.', 'Every student who uses AI becomes more successful.'],
      correct: 1,
      explanation: 'An observation describes something noticed. It does not claim a cause or make a statement about everyone.'
    }
  },
  {
    key: 'guide_question',
    title: 'Research question',
    simple: 'A research question says exactly what you want to find out. A good first draft identifies a group, issue and setting.',
    example: 'How do first-year university students describe the ways they use AI tools when studying?',
    prompt: 'What would you like to investigate? Who would you study, and in which setting?',
    hint: 'Try beginning with “How...?”, “What...?”, or “To what extent...?” and make your question small enough to investigate.',
    check: {
      question: 'Which question is more focused for a beginner research project?',
      options: ['Is all AI good or bad for everyone?', 'How do first-year students at one university describe AI use in their studies?', 'Why is technology important?'],
      correct: 1,
      explanation: 'The more focused question defines a population, topic and setting. Further refining may still be needed.'
    }
  },
  {
    key: 'guide_evidence',
    title: 'Evidence',
    simple: 'Evidence is relevant information you can examine to help answer the question—not merely an opinion supporting your guess.',
    example: 'Existing academic studies and, if ethically permitted, carefully designed student surveys or learning assessments could provide evidence.',
    prompt: 'What information or sources could help you investigate your question?',
    hint: 'Say where the information would come from. A paper, observation, interview or measurement can provide different kinds of evidence.',
    check: {
      question: 'Which is the strongest plan for gathering evidence about AI and learning?',
      options: ['Use only opinions that agree with me.', 'Review relevant academic studies and plan appropriate measurements or questions.', 'Assume that AI must be helpful because it is popular.'],
      correct: 1,
      explanation: 'A fair investigation considers appropriate, traceable evidence and does not select only supportive opinions.'
    }
  },
  {
    key: 'guide_limitation',
    title: 'Limitation',
    simple: 'A limitation is something that makes your answer less certain or limits whom it applies to.',
    example: 'Students might say AI helps them learn, but their opinions alone cannot prove that AI improved their actual understanding.',
    prompt: 'What might make your evidence incomplete, biased or insufficient for a firm conclusion?',
    hint: 'Think about missing participants, small samples, limited time, self-reported answers and factors you cannot measure.',
    check: {
      question: 'What is a reasonable limitation of an anonymous survey about AI use?',
      options: ['Every response must be accurate and representative.', 'Only students choosing to respond may be included, and perceptions might differ from actual learning.', 'If students say AI helps them, causation has been proved.'],
      correct: 1,
      explanation: 'Voluntary respondents may differ from others. Self-reported learning does not, on its own, establish real learning gains or causation.'
    }
  }
];

export const guidedKeys = introGuidedSteps.map(step => step.key);


// Lesson 2: practise choosing a research approach. Answers are local self-reflections,
// not research findings or machine-graded evidence of competence.
export const methodsGuidedSteps = [
  {
    key:'method_qual',title:'Qualitative: understand experiences',
    simple:'Qualitative research helps investigate how people describe experiences, meanings or processes. Your answer should ask for explanations rather than assume a preferred result.',
    example:'How do first-year students describe using AI when they struggle to understand a difficult topic?',
    prompt:'Write an open-ended research question about students’ experiences with AI and explain what kind of text or observations could help.',
    hint:'Try “How do students experience...?” or “What challenges do students describe...?”; interviews or written reflections require ethical planning.',
    check:{
      question:'Which question would invite useful qualitative explanations?',
      options:['What percentage used AI this week?','How do students describe their experiences of AI explanations?','Did exactly 60 students use AI?'],
      correct:1,
      explanation:'A question about descriptions and experiences fits qualitative inquiry. A proportion or a count is numeric evidence.'
    }
  },
  {
    key:'method_quant',title:'Quantitative: measure a pattern',
    simple:'Quantitative research answers questions using measurements and numbers. State what would be counted or measured and which students or timeframe the numbers represent.',
    example:'What proportion of first-year students at a defined university reports using AI for coursework at least once per week?',
    prompt:'Write a measurable question about AI and learning. What number, count, rating or score would you need?',
    hint:'A good quantitative question specifies a variable, a group, and perhaps a time period. An association is not necessarily a cause.',
    check:{
      question:'Which evidence best fits a study asking for the percentage of weekly AI users?',
      options:['A single student’s story about AI','A researcher’s belief that AI is common','A consistent count of weekly users from a defined student sample'],
      correct:2,
      explanation:'To estimate a percentage, researchers need a clear group and a reliable measure of weekly use.'
    }
  },
  {
    key:'method_mixed',title:'Mixed methods: connect two kinds of evidence',
    simple:'Mixed methods deliberately combine qualitative and quantitative evidence, then connect the findings so they contribute to one broader interpretation.',
    example:'Measure weekly AI use, interview some students about when and why they use AI, and compare themes with the numerical patterns.',
    prompt:'How would you combine a numerical measure with people’s explanations? Write how you would compare or connect the findings.',
    hint:'Name both types of evidence and the integration step: for example, use interviews to help explain a pattern measured in a survey.',
    check:{
      question:'Which plan genuinely integrates mixed-methods evidence?',
      options:['Conduct a survey and interviews but never relate the results','Compare measured AI-use patterns with interview themes to understand apparent differences','Use two identical numeric surveys and call the study mixed methods'],
      correct:1,
      explanation:'Mixed methods intentionally connect the qualitative and quantitative findings; merely collecting both is not sufficient.'
    }
  },
  {
    key:'method_choice',title:'Choose an approach you can justify',
    simple:'The best approach follows your question, the evidence you need, your time and skills, and ethics requirements. A small, well-done project can be better than an overambitious study.',
    example:'To learn about published evidence first, review relevant studies. For future interviews or surveys, obtain necessary permissions and use an appropriate design.',
    prompt:'For your own AI-and-learning question, which approach would you choose first? Explain why it fits your question and one limitation.',
    hint:'It is fine to choose one approach. Explain what it can answer, what it cannot prove and whether you have permission to gather new evidence.',
    check:{
      question:'Which reason best justifies selecting a research approach?',
      options:['It fits the question, available evidence, practical limits and ethics requirements','It has the most fashionable software tools','It guarantees the conclusion I already want'],
      correct:0,
      explanation:'The research question, quality of evidence, practical feasibility and ethical obligations should guide your design.'
    }
  }
];


// Lesson 3: building a question and evaluating evidence. These are teaching
// exercises; they do not search external databases or verify references.
export const evidenceGuidedSteps = [
  {
    key:'evidence_question',title:'Focus the research question',
    simple:'Start with a focused question. Identify who or what you are studying and the outcome or experience you want to understand.',
    example:'How do first-year students at one university describe using AI explanations while learning difficult topics?',
    prompt:'Write one research question about AI and learning. Who or what will you study, and what will you investigate?',
    hint:'Avoid “Does AI help everyone?” Name a specific group and aspect of learning. You can refine this question later.',
    check:{
      question:'Which question is easiest to investigate responsibly with a clear scope?',
      options:['Is all technology helpful?', 'How do first-year students in one program describe using AI to understand coursework?', 'Does AI always make people smarter?'],
      correct:1,
      explanation:'A focused question identifies a relevant group, phenomenon and setting. It does not assume the outcome.'
    }
  },
  {
    key:'evidence_claim',title:'Identify a claim and the evidence needed',
    simple:'A claim states something asserted to be true; evidence is information that could support or challenge it. Keep claims separate from what a study actually demonstrates.',
    example:'Claim: “AI improves learning.” You would first need to define “improves,” then look for evidence of learning outcomes rather than only opinions.',
    prompt:'Write one claim someone might make about your topic. Then explain what observation, measurement or document could test it.',
    hint:'For instance, self-reported satisfaction alone does not demonstrate increased learning scores.',
    check:{
      question:'Students say an AI tool feels helpful. What does that observation directly show?',
      options:['The surveyed students reported finding it helpful', 'The tool definitely increased every student’s grades', 'AI caused faster learning for all students'],
      correct:0,
      explanation:'Their reports can support a claim about perceived usefulness, not necessarily measured gains or causality.'
    }
  },
  {
    key:'evidence_source',title:'Check a source before trusting it',
    simple:'A traceable source has identifiable origin and methods. Verify a paper’s actual title, authors, date, DOI or URL; examine how findings were produced and whether there are corrections.',
    example:'An AI assistant suggests a study title. Before using it, locate the actual publication and compare its findings with the AI summary. If you cannot confirm it, label it unverified.',
    prompt:'Describe how you would verify an academic source and decide whether it is relevant and credible. Do not invent a reference.',
    hint:'Look for the original paper, methods, sample and limitations. Peer review is a useful signal, not a guarantee.',
    check:{
      question:'An AI-generated citation looks real but you cannot locate the original. What is the responsible action?',
      options:['Cite it anyway because it has a DOI-like string', 'Label it unverified and do not cite it as a real publication', 'Invent missing authors and publication details'],
      correct:1,
      explanation:'A plausible citation is not proof a study exists. Do not treat unverified bibliographic details as fact.'
    }
  },
  {
    key:'evidence_limit',title:'Record the conclusion and its limits',
    simple:'Separate what the evidence directly reports, your interpretation and what remains uncertain. Small or unrepresentative samples and nonexperimental designs may limit conclusions.',
    example:'A voluntary survey finds students who use AI report greater confidence. It does not, by itself, establish that AI caused better learning outcomes.',
    prompt:'Give a cautious conclusion for your proposed evidence, then name one weakness or alternative explanation.',
    hint:'Try: “This evidence could suggest…, but it does not prove… because…”',
    check:{
      question:'A small survey finds AI users report higher confidence. Which conclusion best respects the evidence?',
      options:['The survey proves AI causes higher grades', 'AI users everywhere are more intelligent', 'These respondents reported higher confidence; learning and causation need further evidence'],
      correct:2,
      explanation:'Confidence is self-reported and may not reflect measured understanding. Other factors may explain observed associations.'
    }
  }
];


// Lesson 4: ethical planning, not an ethics approval or exemption determination.
export const ethicsGuidedSteps = [
  {
    key:'ethics_risk',title:'Identify the people and risks',
    simple:'Before designing a study, think about who could be affected and what might go wrong. Harm includes more than physical injury: pressure, embarrassment, privacy breaches or unfair treatment may matter.',
    example:'Students interviewed about AI and coursework might worry their lecturer will learn about their answers or penalise them.',
    prompt:'For an imaginary interview study about AI use, identify two possible risks and a practical way to reduce each one.',
    hint:'Consider power differences, sensitive topics, identifiable details and who would see raw responses. This is a planning exercise, not a live study.',
    check:{
      question:'A lecturer recruits students whose grades they control. What should the research team consider?',
      options:['Students may feel pressured even when no one explicitly threatens them','They must be willing because the lecturer asked','The lecturer can publish named responses'],
      correct:0,
      explanation:'A power relationship can affect voluntary participation. An ethics-informed recruitment plan should minimise undue influence and protect students.'
    }
  },
  {
    key:'ethics_consent',title:'Plan review and informed consent',
    simple:'Applicable institutional ethics requirements must be checked before recruiting participants or collecting covered data. Consent should be understandable and genuinely voluntary, with realistic information about activities, risks and participant rights.',
    example:'A hypothetical participant information sheet explains the interview purpose, time, risks, researcher contact, confidentiality and any limits on withdrawal.',
    prompt:'What would you ask your institution about ethics review? What information should a participant receive before deciding?',
    hint:'Do not assume a small or online study is automatically exempt. An authorised reviewer must decide applicable requirements.',
    check:{
      question:'When should you seek required ethics approval for participant interviews?',
      options:['Only after submitting the final report','Before relevant participant recruitment or data collection','Only when a student complains'],
      correct:1,
      explanation:'Ethics review and approval, when required, must generally be settled before participant recruitment or collection. A teaching app cannot approve a study.'
    }
  },
  {
    key:'ethics_privacy',title:'Protect identities and information',
    simple:'Ask what information is actually needed and how it will be stored. Confidentiality protects information the researcher may know; anonymity means identities cannot reasonably be traced from the responses.',
    example:'Removing names from recordings may not make an interview anonymous because voices and distinctive details can identify people.',
    prompt:'Describe what participant information should be avoided, how access should be controlled and why removing names may be insufficient.',
    hint:'This prototype and its ZIP backups are not encrypted or suitable for sensitive identifiable research data. Use institution-approved storage.',
    check:{
      question:'You remove names but keep identifiable voice recordings. What is true?',
      options:['The recordings are necessarily anonymous','No privacy rules apply to audio','Identity may still be revealed, so approved confidentiality safeguards are needed'],
      correct:2,
      explanation:'Voices and contextual details can identify participants. Removing names is not, by itself, anonymisation.'
    }
  },
  {
    key:'ethics_integrity',title:'Make an honest research plan',
    simple:'Record what you actually did, verify citations and handle AI assistance transparently under relevant policies. Do not invent participant data, approval letters, sources or results.',
    example:'If an AI assistant suggests a citation, locate and verify the actual paper before including it. Report any required AI-use disclosure honestly.',
    prompt:'Explain two rules you will follow to protect research integrity and one situation where you would ask a supervisor for guidance.',
    hint:'Think about evidence verification, truthful reporting, handling AI outputs and requesting an amendment when a study plan changes.',
    check:{
      question:'Which action is responsible if an AI system produces a convincing but unverified research citation?',
      options:['Present it as a real source because it looks scholarly','Locate and verify the publication before citing, and follow applicable AI policies','Invent missing journal details'],
      correct:1,
      explanation:'AI-generated references can be inaccurate or fabricated. Source verification and truthful reporting are research integrity responsibilities.'
    }
  }
];

// Lesson 5: examine how the research question, evidence and conclusion align.
export const qualityGuidedSteps = [
  {
    key:'quality_design',title:'Start with the question and design',
    simple:'Decide whether the study asks about experiences, numerical patterns or effects, then check whether its actual methods could answer that question.',
    example:'If a study claims to measure learning gains but only asks whether students enjoyed an AI tutor, the measure does not directly test learning performance.',
    prompt:'Describe a research question and the type of design or measurement that could answer it. Identify one mismatch to avoid.',
    hint:'Ask “What is actually measured?” and “Does this evidence answer the question?” before evaluating a paper’s conclusion.',
    check:{
      question:'A study claims AI increases knowledge but measures only satisfaction. What is the main concern?',
      options:['The measured outcome may not be valid evidence of knowledge gain','Satisfaction automatically proves better learning','Any survey can establish causation'],
      correct:0,
      explanation:'Satisfaction and knowledge are different constructs. Reliability of satisfaction ratings cannot establish validity for learning gains.'
    }
  },
  {
    key:'quality_sampling',title:'Check the sample and its limits',
    simple:'Look at who was included and excluded. A large convenience sample can still be biased. Qualitative studies may use smaller purposefully selected groups to explore experiences, not to estimate population percentages.',
    example:'A voluntary AI-interest club survey could overrepresent enthusiastic users even if hundreds respond.',
    prompt:'Imagine a study of students using AI. Who was selected, who might be missing, and how would that affect generalisation?',
    hint:'Do not use “bigger sample is always better” as your only quality criterion; sampling must fit the study purpose.',
    check:{
      question:'A survey recruits 900 people only from an AI-fan club. What remains a concern?',
      options:['A large sample can never be biased','Selection bias may limit conclusions about all students','Every respondent represents everyone else'],
      correct:1,
      explanation:'Selection into an enthusiastic group may skew attitudes, regardless of sample size. Consider whom the study claims to represent.'
    }
  },
  {
    key:'quality_bias',title:'Look for bias and alternative explanations',
    simple:'Study how participants were recruited, how questions were worded, how outcomes were measured and which results were reported. Other factors can explain an association.',
    example:'AI users with high grades may also spend more time studying. Without a suitable design, the study cannot attribute grade differences solely to AI.',
    prompt:'Identify one possible bias or confounder in an AI-and-learning study and suggest a realistic step to address it.',
    hint:'Consider volunteer selection, leading survey language, prior knowledge and hidden differences between groups.',
    check:{
      question:'Frequent AI use and high grades occur together. What does that establish by itself?',
      options:['AI definitely caused higher grades','Every student benefits from AI','An association requiring investigation of confounding and design limits'],
      correct:2,
      explanation:'A correlation is not proof of causation. Prior achievement, motivation and other differences may influence both variables.'
    }
  },
  {
    key:'quality_conclusion',title:'Write a balanced evidence judgement',
    simple:'Explain what the evidence actually supports, one credible limitation and what additional study might help. Reproducible documentation matters, but private participant information should remain protected.',
    example:'In a hypothetical volunteer survey, respondents may report AI helps confidence; that cannot show actual learning improvements for every student.',
    prompt:'Write one cautious conclusion, one limitation and one useful next step for a study that interests you.',
    hint:'Try “The sample reported…, but it does not demonstrate… because…” and avoid absolute words that overstate the findings.',
    check:{
      question:'Which statement fits a volunteer survey of students’ self-reported AI confidence?',
      options:['All students learn faster because of AI','The surveyed respondents reported a pattern; learning effects and generalisation need further evidence','The survey proves a causal improvement in exam marks'],
      correct:1,
      explanation:'Balanced interpretation keeps the claim within what was measured and acknowledges sample, validity and causal limits.'
    }
  }
];

// Lesson 6: an introductory project proposal, not fabricated results.
export const projectGuidedSteps = [
  {
    key:'project_question',title:'Define a focused starting question',
    simple:'A project begins with an uncertainty worth investigating. A focused question defines the topic and limits, without presuming that the desired result is already known.',
    example:'Which measures do selected published studies use to investigate AI-assisted learning among university students?',
    prompt:'Write a tentative title and a single clear research question for a small project you could realistically begin.',
    hint:'If your topic is broad, choose one group, question, kind of source or learning outcome and say what is outside your scope.',
    check:{
      question:'Which is a feasible first research question?',
      options:['Does all AI help everyone everywhere?','Why is every technology always good?','What learning outcomes are measured in a defined set of published studies of AI and university students?'],
      correct:2,
      explanation:'A bounded question identifies the type of evidence to examine and can be refined through a literature review.'
    }
  },
  {
    key:'project_objectives',title:'Write two or three realistic objectives',
    simple:'Objectives are practical activities that help answer your question. They should be neutral and possible to complete, even if evidence challenges your initial opinion.',
    example:'Locate eligible studies, compare the definitions of learning outcomes and summarise the limitations of the evidence.',
    prompt:'Write two or three actions your project must complete to answer the question. Avoid promises to prove a preferred result.',
    hint:'Action words such as identify, describe, compare, examine and evaluate can help you write realistic objectives.',
    check:{
      question:'Which objective fits a literature-based project?',
      options:['Compare how eligible published studies measure learning','Invent interviews confirming AI is useful','Prove every student must use AI'],
      correct:0,
      explanation:'A literature study can analyse traceable published evidence and its methods without inventing new participant data.'
    }
  },
  {
    key:'project_evidence',title:'Plan sources, methods and analysis',
    simple:'For each objective, identify what real information you need, where it would come from and how you would examine it. Check ethics and access conditions before using data.',
    example:'Source: real academic studies. Method: record study question, sample, learning measures, findings and limitations, then compare them transparently.',
    prompt:'What sources or data would answer your question? How would you compare or analyse them, and what ethics or access rules apply?',
    hint:'If you lack participant access or required approval, you can start by critically reading accessible published literature.',
    check:{
      question:'What is a responsible evidence plan for a beginner without approval to recruit students?',
      options:['Run unapproved interviews secretly','Use traceable published sources for a scoped review, and seek guidance before any participant research','Generate hypothetical student responses and report them as real'],
      correct:1,
      explanation:'A literature-based exercise can be a feasible start, while participant activities require attention to institutional ethics and access rules.'
    }
  },
  {
    key:'project_plan',title:'Check feasibility and plan next steps',
    simple:'Set realistic milestones, list risks, protect data and decide what the finished project will actually deliver. A proposal is a plan; it must not present imagined findings as results.',
    example:'Milestones: refine topic, build verified source log, appraise evidence, draft comparison, review limitations and submit a transparent report.',
    prompt:'List your first three milestones, one likely obstacle, one mitigation and one limitation to discuss in your eventual report.',
    hint:'Consider time, access, skills, supervisor feedback, credible citations, backups and the difference between a proposal and completed study.',
    check:{
      question:'Which action shows responsible progress on a first project?',
      options:['Draft a plan, verify sources, document decisions and revise when evidence challenges assumptions','Declare successful results before analysing any evidence','Publish private participant records in a public repository'],
      correct:0,
      explanation:'Research planning should be transparent, evidence-responsive, feasible and protective of confidential information.'
    }
  }
];

export const guidedLessons = {
  rf1: {
    title:'Guided practice: four ideas, one at a time',
    intro:'Each idea has a simple explanation, an example about studying with AI, a space to write your answer, and a short understanding check. You can go back to any step. Your writing saves in this browser.',
    recapTitle:'Your four research ideas',
    steps:introGuidedSteps
  },
  rf2: {
    title:'Guided practice: explore three research approaches',
    intro:'Compare qualitative, quantitative and mixed methods on the same AI-and-learning topic, then justify a choice. Take one step at a time and save your own examples.',
    recapTitle:'Your research approach comparison',
    steps:methodsGuidedSteps
  },
  rf3: {
    title:'Guided practice: question, claim, source and conclusion',
    intro:'Examine one research topic in four stages. Refine the question, identify the claim, check possible evidence and write a cautious conclusion. Your notes save locally.',
    recapTitle:'Your evidence-checking notes',
    steps:evidenceGuidedSteps
  },
  rf4: {
    title:'Guided practice: plan ethical research',
    intro:'Identify possible harms, review and consent needs, privacy measures and research-integrity safeguards. These fictional exercises never authorise participant research.',
    recapTitle:'Your ethical research plan',
    steps:ethicsGuidedSteps
  },
  rf5: {
    title:'Guided practice: critically appraise a study',
    intro:'Examine a research question, sampling, bias and a fair conclusion. Your answers are saved locally and are not automatically graded as practical competence.',
    recapTitle:'Your study appraisal notes',
    steps:qualityGuidedSteps
  },
  rf6: {
    title:'Guided practice: plan your first project',
    intro:'Build a feasible proposal one part at a time: question, objectives, evidence plan and milestones. These are planning notes, not claims of completed research.',
    recapTitle:'Your first research project outline',
    steps:projectGuidedSteps
  }
};

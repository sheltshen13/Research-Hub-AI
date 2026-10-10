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
  }
};

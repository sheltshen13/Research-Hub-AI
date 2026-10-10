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

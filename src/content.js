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
  {
    id:'rf2',title:'Research types and approaches',minutes:40,skill:'Understanding methodologies',
    glossary:[
      ['Qualitative research','A research approach that investigates meanings, experiences, processes or contexts, often through interviews, observations and text.'],
      ['Quantitative research','A research approach that uses numerical measurements and statistical methods to describe patterns, estimate differences or explore relationships.'],
      ['Mixed-methods research','An intentional design that collects and integrates qualitative and quantitative evidence to answer a broader research question.'],
      ['Research design','The overall plan connecting a question to sampling, data collection, analysis and interpretation.'],
      ['Variable','A characteristic that can have different values, such as attendance rate or a score on a learning test.'],
      ['Thematic analysis','A structured approach to identifying and interpreting patterns of meaning within qualitative material.'],
      ['Integration','In mixed-methods work, bringing the two forms of evidence together to generate a joint interpretation.'],
      ['Causation','A claim that one factor makes another outcome happen; it requires an appropriate design and cannot be inferred from correlation alone.']
    ],
    objectives:[
      'Explain qualitative, quantitative and mixed-methods research in plain language.',
      'Give a suitable research question and type of evidence for each approach.',
      'Explain why mixed methods must integrate different types of evidence rather than simply collect both.',
      'Choose and justify a feasible research approach for a beginner project.',
      'Recognise that participant views, numerical correlations and study results have limitations.'
    ],
    paragraphs:[
      'Researchers do not select a method because a tool is fashionable. They start with the question they want to answer. Some questions ask about experiences and reasons; others ask how many, how often or whether two measured things are related.',
      'Three broad approaches are qualitative, quantitative and mixed methods. Each can be useful. None is automatically more scientific or superior, and the best choice depends on the question, ethical requirements, available evidence, skills and resources.',
      'This lesson compares all three using a familiar example: students using generative AI to learn. The point is not to decide in advance whether AI is good or bad, but to understand what each approach can and cannot show.'
    ],
    teachingBlocks:[
      {title:'1. Start from the question, not the software',paragraphs:[
        'Compare three questions: “How do students describe using AI to understand difficult topics?”; “What percentage of students use AI at least once a week?”; and “How can usage patterns and students’ experiences together explain AI use?” These questions require different evidence.',
        'The first asks about experiences, the second about numerical frequency and the third deliberately combines two kinds of evidence. You do not need to know statistics yet to recognise the difference.'
      ]},
      {title:'2. Qualitative research — understanding experiences and meaning',paragraphs:[
        'Qualitative research asks questions such as how people experience something, what it means to them and why a process unfolds in a particular context. A researcher might interview students, observe study behaviour with proper permission or analyse written reflections.',
        'A researcher usually examines the material systematically, for example by coding interview text and developing themes. One possible theme might be “AI makes explanations feel less intimidating,” while another might be “AI encourages copying without reflection.” Themes must be grounded in actual evidence, not invented examples.',
        'Qualitative findings provide rich detail about the studied people and settings. They should not automatically be treated as numerical estimates of what all students believe.'
      ]},
      {title:'3. Quantitative research — measuring patterns with numbers',paragraphs:[
        'Quantitative research uses defined measurements such as counts, proportions, test scores and time spent on learning. For example: “What percentage of sampled students use AI every week?” or “Is AI-use frequency associated with performance on a specified test?”',
        'Researchers might use a structured survey, existing attendance records or a carefully designed experiment. Statistical analysis can summarise the data and estimate differences or associations while accounting for uncertainty.',
        'Important: finding that frequent AI users have higher scores does not prove that using AI caused the scores. Motivation, prior knowledge, support and other factors may differ between groups.'
      ]},
      {title:'4. Mixed methods — combining and integrating evidence',paragraphs:[
        'Mixed-methods research intentionally brings quantitative and qualitative findings together. For example, a researcher could measure how frequently students use AI, interview selected students about their reasons, and compare the findings to understand patterns and experiences.',
        'Using a survey and interviews is not, by itself, enough to call a project rigorous mixed methods. The researcher should explain why both types are needed, how they will be analysed and how the results will be connected or compared in the interpretation.',
        'Mixed methods can provide a more rounded answer but requires additional time, design expertise and ethical planning. A focused single-method project may be more appropriate for a first study.'
      ]},
      {title:'5. A method is not the same as a question format',paragraphs:[
        'The method depends on how evidence is gathered and analysed. An interview can contain numeric questions; a survey can contain open-ended answers. “Interview equals qualitative” and “survey equals quantitative” are useful first approximations, not universal rules.',
        'For example, a survey question asking respondents to rate confidence from 1 to 5 generates numerical data. An open-text question asking them to describe frustration generates text suitable for qualitative analysis. Explain your actual analysis rather than relying only on the instrument label.'
      ]},
      {title:'6. Choosing a suitable design — five practical checks',paragraphs:[
        'First ask what you need to know. Next decide which evidence would answer it. Then check whether you can obtain that evidence ethically and lawfully. Consider who or what you will study and what analysis you can carry out correctly. Finally, identify the limits of the design.',
        'If you are just beginning, a small literature-based project can help you learn without collecting identifiable participant data. Studies involving people may require institutional ethics approval before recruitment or data collection.'
      ]},
      {title:'7. What each approach cannot automatically prove',paragraphs:[
        'Qualitative interviews can help explain students’ reported experiences, but do not on their own prove that AI improved test scores. Quantitative association can describe a pattern, but it does not automatically establish cause and effect. Mixed methods add context and comparisons, not a guarantee of causal certainty.',
        'In every approach, explain sampling, how evidence was obtained and analysed, what is uncertain, and which conclusions are justified. A well-argued limitation is a sign of responsible research, not a weakness to hide.'
      ]}
    ],
    example:'One topic, three questions: Qualitative — “How do new university students describe using AI to understand their coursework?” Quantitative — “What proportion of first-year students report using AI at least weekly?” Mixed methods — “How do measured AI-use patterns relate to students’ reported reasons and experiences?”',
    workedExample:{
      title:'Worked comparison: studying how students use AI',
      steps:[
        ['Shared starting topic','A group of students uses AI while preparing for classes. We do not know whether it benefits or hinders learning.'],
        ['Qualitative route','With suitable permissions, interview a purposively selected group about when and why they use AI. Analyse transcripts for patterns of meaning and acknowledge the context.'],
        ['Quantitative route','Define measures such as weekly AI use and a specified learning assessment. Use an appropriate sample and analyse the numbers, noting confounding and uncertainty.'],
        ['Mixed-methods route','Collect structured usage measurements and selected interviews, analyse each, then examine how interview themes explain or challenge the numerical patterns.'],
        ['Ethical planning','Before recruiting participants, check institutional approval, informed consent, privacy and appropriate storage. Do not put sensitive participant data into this prototype.'],
        ['Responsible conclusion','Report what the actual evidence demonstrates. Opinions about helpfulness do not automatically equal objectively improved learning, and a correlation does not establish causation.']
      ],
      takeaway:'Different research approaches produce different kinds of answers. Choose the approach that fits your question and show how each conclusion follows from actual evidence.'
    },
    comparisons:[
      ['Question about experiences','“How much does everyone benefit from AI?” is too vague to guide meaningful interviews.','Ask how a defined group describes AI use and analyse their experiences with a transparent method.'],
      ['Question about numbers','“Do students like AI?” is not yet a clearly measured variable.','Specify a measurable outcome such as proportion using AI weekly, define the sample and analyse numerical uncertainty.'],
      ['Claim about causation','“AI users scored higher, therefore AI caused improvement.”','Explore confounders and choose a design capable of supporting any causal claim; otherwise report an association.'],
      ['Combining methods','Interviewing one friend after a survey without connecting the findings.','Plan how qualitative explanations and numerical patterns will be integrated to address the same broader question.']
    ],
    practice:'Build three ways to research the same topic: one about experiences, one about numbers and one that meaningfully combines both. Use the guided activity, then explain which approach you would choose and why.',
    practicePrompts:[
      'Qualitative: What would you ask to understand someone’s experience?',
      'Quantitative: What number or measurement would help answer a different question?',
      'Mixed methods: How could the two kinds of evidence be connected?',
      'Choice: Which approach best matches your main question, time, access and ethical requirements?'
    ],
    reflectionPrompt:'Explain the difference between qualitative, quantitative and mixed-methods research in your own words. For your AI-and-learning idea, which would you choose first and why? What still confuses you?',
    quiz:[
      {q:'You want to understand why students feel confident or anxious when using AI. Which approach is most directly suited to exploring their experiences?',options:['Qualitative research with appropriate interviews or written reflections','Counting only how many students own smartphones','Assuming all students feel the same'],correct:0,why:'Exploring experiences and meanings is well suited to a qualitative approach, although the specific method still needs careful design.'},
      {q:'Which question is most clearly quantitative?',options:['How do students describe trusting AI responses?','What proportion of a defined student sample reports using AI each week?','Why do learners prefer some explanations?'],correct:1,why:'A proportion is a numerical quantity; the group, time period and measure must be clearly defined.'},
      {q:'What is a defining feature of a planned mixed-methods study?',options:['Using interviews and a survey without comparing their results','Replacing all measurements with personal opinions','Intentionally integrating qualitative and quantitative findings to answer a shared question'],correct:2,why:'Mixed-methods research requires a reason to use both forms of evidence and a clear plan for integrating qualitative and quantitative findings into a joint interpretation.'},
      {q:'A survey shows frequent AI users have higher test scores. Which interpretation is justified by this observation alone?',options:['AI definitely caused better learning','An association was observed, but other explanations and study limitations must be examined','The survey proves AI can never harm learning'],correct:1,why:'An association is not sufficient to establish causation; groups may differ for many reasons.'},
      {q:'You have little time, no ethics approval and no permission to collect student data. What is a sensible beginner starting point?',options:['Conduct interviews anyway because the project is small','Copy another researcher’s dataset and claim it is yours','Review relevant published studies and develop a feasible, ethical proposal without collecting participants’ data'],correct:2,why:'A literature-based starting task is feasible and avoids unauthorized participant research. Check the applicable rules before collecting new data.'},
      {q:'Which statement about surveys and interviews is most accurate?',options:['Every survey is quantitative and every interview is qualitative','Open-text survey answers can be analysed qualitatively, while numeric interview responses may be summarised quantitatively','One interview always represents the entire population'],correct:1,why:'Approach depends on the research question, evidence and analysis—not just whether the instrument is called a survey or interview.'}
    ]
  },
  {
    id:'rf3',title:'Questions, evidence and sources',minutes:45,skill:'Evaluating evidence',
    objectives:[
      'Turn a broad curiosity into a focused, answerable research question.',
      'Tell apart a claim, the evidence offered for it and what the evidence actually supports.',
      'Distinguish primary and secondary sources in relation to a particular research question.',
      'Use a repeatable checklist to assess relevance, credibility, methods, bias and uncertainty.',
      'Explain why peer review, high citation counts and AI-generated references do not guarantee reliability.',
      'Record enough information to trace a source while avoiding fabricated or unverified citations.'
    ],
    glossary:[
      ['Research question','A focused question that determines the evidence needed and the scope of an investigation.'],
      ['Claim','A statement that something is true; a research claim needs appropriately matched evidence.'],
      ['Evidence','Information that can support, contradict or qualify a claim when gathered and assessed appropriately.'],
      ['Primary source','Original evidence in relation to the question, such as a study reporting its own data or the original document being examined.'],
      ['Secondary source','A work that interprets, reviews or synthesises other sources. Its status depends on what you are investigating.'],
      ['Peer review','Evaluation by experts, often before publication; a quality-control step, not proof that findings are correct.'],
      ['Systematic review','A structured synthesis that uses explicit methods for searching, selecting and evaluating existing studies.'],
      ['Bias','A systematic influence that may distort data collection, interpretation or reported results.'],
      ['Confounding','When other factors help explain an apparent relationship, limiting a simple causal claim.'],
      ['Provenance','Information about where a source or dataset originated and how it can be traced.'],
      ['Retraction','A published notice that a paper should not be relied on as a valid research report; check its reason and context.']
    ],
    paragraphs:[
      'Research does not begin by collecting anything that mentions your topic. Begin with a clear question, then decide which kinds of evidence could answer it. A relevant source is not necessarily a reliable source, and a reliable study may not answer your exact question.',
      'When you read a statement such as “AI improves student learning,” ask: Which AI tool, which learners, which outcome, compared with what, over how long, and according to which evidence? These questions help transform a persuasive slogan into something you can investigate.',
      'This lesson teaches you to examine claims carefully, tell primary from secondary evidence, locate traceable sources and make fair conclusions. It uses illustrative teaching cases only: no invented examples should be treated as findings from a real study.'
    ],
    teachingBlocks:[
      {title:'1. Write an answerable question',paragraphs:[
        'Start with your curiosity: “Does AI make learning better?” That is too broad because different people, tools and learning outcomes are involved. Narrow it to a group and an outcome: “Among first-year students at a specified university, how is AI use related to performance on a defined learning assessment during one term?”',
        'For a qualitative project you might instead ask: “How do first-year students describe situations where an AI explanation helped or confused them?” Either can be suitable, but each needs different evidence. Question frameworks such as PICO can help for certain intervention questions; they are not compulsory for every field.'
      ]},
      {title:'2. Separate a claim from evidence and inference',paragraphs:[
        'A claim is what someone says is true. Evidence is the information presented to support or challenge it. An inference is the conclusion someone draws from that information. Ask whether the inference stays within what the evidence can justify.',
        'Imagine an invented classroom exercise in which 20 volunteers say AI makes revision easier. That might support a narrow statement about those volunteers’ reported experiences. It would not prove AI increased their examination results or benefited every student.',
        'Keep three labels in mind: what a source directly reports, what you infer from it, and what remains unknown. The app should never treat its own suggestions as independently verified facts.'
      ]},
      {title:'3. Primary and secondary sources are relative to the question',paragraphs:[
        'A journal article reporting researchers’ own interviews or measurements can be a primary source for a study of those findings. A systematic review combining many such studies is usually secondary evidence for the same question.',
        'However, if your research question investigates what reviews said about AI between certain years, the review papers themselves may be your primary research material. An original photograph, policy text, dataset or archived letter can also be primary material in the relevant inquiry.',
        'Neither “primary” nor “secondary” means automatically better. A well-conducted review may offer stronger overall evidence for some questions than a single small study, and a primary study may provide details a review cannot.'
      ]},
      {title:'4. Search and verify the actual source',paragraphs:[
        'Build a small list of useful search terms and synonyms before searching research catalogues, academic databases and open-access repositories. For example: “generative AI”, “student learning”, “university”, “assessment”, and related alternative terms.',
        'When you encounter a promising record, inspect the title, authors, year, publisher or journal, abstract, and—where available—the full text and DOI. Check whether the DOI resolves to the same work and whether the paper has a correction, expression of concern or retraction.',
        'Do not cite a paper solely because an AI assistant mentions it. AI can produce inaccurate or nonexistent titles, authors and identifiers. Research Hub AI does not automatically verify a citation in this offline lesson; you must inspect the actual source.'
      ]},
      {title:'5. Judge evidence quality with a practical checklist',paragraphs:[
        'Ask: Relevance—does the study examine my question? Origin—who produced it and can I trace it? Methods—who or what was studied and how? Analysis—do the results follow from the procedures? Bias—what may be missing, selected or influenced? Limits—can I generalise, and is cause and effect justified?',
        'For instance, a voluntary survey of 30 students might be informative about their opinions, but the respondents may not represent the university. A study can be peer reviewed and still have weak measurements or selection problems.',
        'Compare evidence from multiple independent sources when possible. Agreement helps, but repeated claims from copied articles are not independent confirmation.'
      ]},
      {title:'6. Read the numbers and language carefully',paragraphs:[
        'Notice the difference between “reported satisfaction,” “test score,” “difference,” “association” and “cause.” A change in confidence is not the same as a measured improvement in knowledge. Correlation alone cannot establish causation.',
        'Look for sample sizes, definitions of measures, uncertainty, comparison groups and what was not measured. Strong evidence for one group or setting may not apply to every learner or institution.',
        'Avoid dramatic absolute statements such as “always,” “never” and “proves” unless the evidence truly warrants them.'
      ]},
      {title:'7. Keep a traceable evidence record',paragraphs:[
        'Make a research note with the exact source title, author(s), date, identifier or link, the question it addresses, what the source actually found, how it was studied and its limitations. Add your own interpretation separately.',
        'A reference may be saved as unverified until you have inspected it. A citation manager can organise records, but even a formatted bibliography is only as trustworthy as the underlying sources.',
        'If using Research Hub AI’s manual Research Library, mark or describe uncertainty honestly. It does not access paywalled sources, verify references automatically, or replace institution-approved research data systems.'
      ]}
    ],
    example:'An online post claims “AI makes every student learn faster.” Before accepting it, ask who studied which students, what was measured, what the comparison was and whether the original source can be found. An opinion post is not sufficient evidence for a universal learning claim.',
    workedExample:{
      title:'Worked example: checking an AI-learning claim',
      steps:[
        ['Start with the claim','An imaginary blog post says: “AI doubles students’ understanding.” This is a fictional teaching claim, not a real published finding.'],
        ['Refine the question','What outcome counts as understanding, which group is being studied and what comparison is relevant?'],
        ['Trace the evidence','Look for an actual study: original author, date, journal or repository, full text and any credible identifier. If none is available, do not present the claim as verified.'],
        ['Read the methods','Check how participants were selected, what tasks were completed, how understanding was measured, and whether a suitable comparison was used.'],
        ['Evaluate the inference','Even a measured difference may have alternative explanations; a self-report about helpfulness is not the same as increased knowledge.'],
        ['Record responsibly','Write what the source directly reports, a possible interpretation, and at least one limitation. Never invent a citation or measurement.']
      ],
      takeaway:'Trace the original work, match the evidence to the exact claim and keep uncertain conclusions clearly labelled.'
    },
    comparisons:[
      ['Search-result summary','Copy the first summary or an AI-provided citation without opening the underlying source.','Find the original work, check bibliographic details, read its methods and verify that it says what the summary claims.'],
      ['Peer-review badge','Assume a peer-reviewed paper must be correct.','Treat peer review as one safeguard; still examine sampling, analysis, limitations, corrections and retractions.'],
      ['Primary versus secondary','Assume that primary always means best or that a review contains new participant measurements.','Ask what the question is, what the source directly provides and how transparently the evidence was gathered or synthesised.'],
      ['Strong conclusion','Say “AI causes higher grades” because two measures were associated.','State the observed relationship and consider other factors unless an appropriate causal design supports stronger claims.']
    ],
    practice:'Choose one claim about your research topic. Refine it to a focused question, trace where its supporting evidence might come from, and explain what the evidence would not establish. Use the four guided steps below.',
    practicePrompts:[
      'Question: Which learners, action or outcome will you investigate?',
      'Claim: What exactly is being asserted about your topic?',
      'Source: How will you check who produced the source and whether it supports that claim?',
      'Limit: What cannot reasonably be concluded from the available evidence?'
    ],
    reflectionPrompt:'Explain how you would decide whether an online claim about AI and learning is trustworthy. What is the difference between primary and secondary evidence for your particular question? What is still unclear?',
    quiz:[
      {q:'A website says “AI improves every student’s grades.” What should you do first?',options:['Repeat the statement because it sounds convincing','Check the original evidence, group, measurement and comparison','Reject all studies involving AI without reading them'],correct:1,why:'Start by tracing the original source, methods and scope. A broad claim needs appropriately matched evidence.'},
      {q:'Researchers publish an article reporting their own interviews with students. For an inquiry into those students’ experiences, that article is usually:',options:['Primary research evidence','A systematic review of dozens of other studies','Proof that all students share those experiences'],correct:0,why:'Original data reporting is commonly primary evidence for the question being studied; the results still have limits.'},
      {q:'What is a systematic review generally designed to do?',options:['Replace all original studies with opinions','Guarantee that every included result is accurate','Find, critically appraise and synthesise relevant previous studies using explicit methods'],correct:2,why:'A systematic review is a structured synthesis. Its trustworthiness depends on its methods and the quality of included evidence.'},
      {q:'A peer-reviewed study has a sample of 18 volunteers from one course. Which statement is most careful?',options:['Peer review proves the findings apply to every university','Peer review is useful but the sampling and other limitations still matter','The study must be fraudulent because the sample is small'],correct:1,why:'Peer review does not guarantee accuracy or generalisability. Evaluate sampling, analysis, uncertainty and the research purpose.'},
      {q:'An AI assistant supplies a promising paper title and DOI. What should you do before citing it?',options:['Verify the actual paper and DOI, examine its claims and check for corrections or retractions','Copy the citation because its formatting looks academic','Create the missing paper if the DOI does not resolve'],correct:0,why:'A plausible-looking citation is not verification. Confirm the original publication and accurately represent what it reports.'},
      {q:'A survey finds that students who use AI more often report greater confidence. What can it show by itself?',options:['AI definitely caused measurable learning improvements','Every AI user will perform better on exams','A relationship in the surveyed responses, not by itself proof of learning gains or cause'],correct:2,why:'Self-reported confidence is not necessarily actual learning. Association does not, on its own, establish causation.'},
      {q:'Which research note is most useful for future verification?',options:['“The source is good because many people shared it.”','Full source details, relevant findings, methods, limitations and a clearly labelled personal interpretation','Only a title with no way to locate or check the source'],correct:1,why:'Traceable bibliographic details, a precise evidence summary and separate inference make claims easier to verify.'}
    ]
  },
  {
    id:'rf4',title:'Ethics and responsible research',minutes:45,skill:'Research ethics awareness',
    objectives:[
      'Explain why respect, fairness, minimising harm and research integrity matter.',
      'Recognise when a project involving people may require review before recruitment or data collection.',
      'Describe informed consent, confidentiality and the limits of anonymity and withdrawal.',
      'Identify potential risks to participants, including privacy, power differences and distress.',
      'Prepare a basic ethics and data-protection plan for a hypothetical research idea.',
      'Distinguish responsible use of AI assistance from fabrication, plagiarism or unsupported citations.'
    ],
    glossary:[
      ['Research ethics','Principles and review processes that protect participants, communities and the integrity of research.'],
      ['Informed consent','A voluntary agreement based on understandable information about the activity, its risks and relevant participant rights.'],
      ['Ethics review','Consideration of an activity by a responsible institution, committee or authority under applicable requirements.'],
      ['Confidentiality','Protecting information from access or disclosure by unauthorised parties, even when the researcher knows the identity.'],
      ['Anonymity','A situation where a person cannot reasonably be identified from the collected information; removing names alone may not guarantee this.'],
      ['Voluntary participation','A choice made without improper pressure, coercion or undue influence.'],
      ['Risk mitigation','A practical step to reduce the likelihood or severity of a possible harm.'],
      ['Data minimisation','Collecting and keeping only information genuinely needed for the stated purpose.'],
      ['Conflict of interest','A personal, professional or financial interest that could compromise or appear to compromise research judgement.'],
      ['Research integrity','Honesty and accountability in designing, conducting, recording and reporting research.']
    ],
    paragraphs:[
      'Ethics is not merely an approval form. It is the ongoing responsibility to conduct research honestly, protect people, respect their choices and minimise foreseeable harm. Even a well-intended study can cause problems when questions are sensitive, identities are disclosed or participants feel pressured.',
      'Different universities, institutions, countries, disciplines and kinds of data have different rules. You must consult the responsible ethics office or equivalent authority before starting participant recruitment or data collection when review is required. Research Hub AI teaches the ideas; it cannot grant an exemption or issue ethics approval.',
      'We will use a hypothetical study of student experiences with AI. These examples are for learning, not permission to recruit classmates. Do not enter identifiable participant records, sensitive interviews, medical information or confidential research data into this prototype or its unencrypted backups.'
    ],
    teachingBlocks:[
      {title:'1. Ask who could be affected',paragraphs:[
        'Begin by listing who could be affected by the study, not only who answers a survey. Participants, classmates, teachers, institutions and communities may face direct or indirect consequences.',
        'For an AI-learning study, students may worry that negative comments about an instructor will affect their marks. Their grades and opinions may be sensitive in that setting. Consider whether recruiting through their teacher creates pressure.',
        'Respect for people includes allowing meaningful choices. Responsible research also considers fair selection, accessibility, cultural context, the likely benefits and burdens, and how findings might be misused.'
      ]},
      {title:'2. Understand ethics review before data collection',paragraphs:[
        'A student project involving interviews, surveys, experiments, observation or use of identifiable personal data may require institutional ethics review or approval before recruitment and collection. The responsible authority decides whether an exemption or expedited process applies; you should not decide that an activity is exempt merely because it seems harmless or is for class.',
        'If a project has no human participants—for example, a review of already published, public academic articles—the review requirements may differ. Copyright, privacy, licensing and institution-specific rules can still apply.',
        'Write down the study purpose, recruitment plan, methods, potential harms, data storage arrangements and intended use of findings before asking for guidance.'
      ]},
      {title:'3. Explain informed consent plainly',paragraphs:[
        'An information sheet should say who is conducting the research, what participation involves, approximate time, possible risks, potential benefits, how information will be used and stored, whom to contact, and what choices participants have under the approved protocol.',
        'A consent form or other authorised process does not make the study ethical by itself. People should understand the information and have a genuine opportunity to decline without inappropriate consequences.',
        'A participant’s right to withdraw may have limits once data are irreversibly anonymised or combined; explain any such limits accurately rather than promising something that cannot be fulfilled.'
      ]},
      {title:'4. Distinguish privacy, confidentiality and anonymity',paragraphs:[
        'Confidentiality means the research team may know an identity but has controls protecting that information. Anonymity means identities cannot reasonably be linked to responses; an anonymous survey should not quietly collect identifying accounts or device data.',
        'Names, student numbers, voices, small-group details and combinations of seemingly harmless facts can identify someone. Replacing names with codes is often pseudonymisation, not true anonymisation.',
        'Plan secure, approved storage, access restrictions, retention periods and careful reporting. A quote about a unique event may identify someone even if no name appears.'
      ]},
      {title:'5. Anticipate harm and reduce it',paragraphs:[
        'Possible harms include embarrassment, distress, a breach of privacy, coercion, discrimination or damage to reputation. Researchers should explain likely risks honestly and identify concrete mitigation steps, such as optional questions, appropriately trained staff, safe referral information and avoiding collection of unnecessary personal details.',
        'Imagine asking students to reveal suspected academic misconduct involving AI. This could create serious privacy and power issues. Changing the question, recruitment process or study design may be necessary; some projects should not go ahead without specialist oversight.',
        'Do not describe a study as having “no risk” simply because it is online. Evaluate risks in context, including who can access the data and how results may be reported.'
      ]},
      {title:'6. Use sources and AI assistance responsibly',paragraphs:[
        'Never fabricate participant responses, measurements, ethics approval letters, photographs, methods or citations. Do not change findings to match an expected outcome. Report conflicts of interest, limitations and deviations from the approved plan where required.',
        'Generative AI can help brainstorm wording or explain concepts, but may invent sources, produce biased summaries or reveal private information if sensitive text is shared. Follow your university’s policies on permitted AI use, disclosure, citation and handling of research material.',
        'If a tool produced a sentence or suggested a citation, you are still responsible for checking the underlying evidence and truthfully describing your own work.'
      ]},
      {title:'7. Ethics continues after approval',paragraphs:[
        'Treat an approved plan as the starting point for responsible conduct, not a shield against mistakes. Important changes to questions, risks, recruitment or data handling may require an amendment or fresh guidance before implementation.',
        'Plan what to do if someone asks to withdraw, expresses distress, reports a problem or discovers inaccurate information. Report incidents through the designated institutional processes.',
        'When writing the final report, protect identities and avoid exaggerating claims about groups who might be harmed by careless generalisation.'
      ]}
    ],
    example:'Hypothetical question: “How do first-year students experience pressure to use AI when preparing assignments?” Ethical planning would consider whether participants might fear being identified, who recruits them, how consent works, who sees raw responses and whether institutional approval is required.',
    workedExample:{
      title:'Worked example: planning a hypothetical student interview',
      steps:[
        ['Idea','Explore how a specified group experiences AI tools when learning difficult concepts. This is a teaching plan, not an approved live study.'],
        ['Review route','Ask the responsible university ethics office whether approval or an exemption decision is required before contacting students.'],
        ['Recruitment','Use a process that minimises pressure; avoid teachers directly recruiting students they grade unless the approved protocol addresses that relationship.'],
        ['Consent','Explain purpose, questions, time, risks, contact details and realistic withdrawal provisions in language participants understand.'],
        ['Data plan','Decide what information is truly necessary, who may access it, approved storage, retention and how quotations will be de-identified.'],
        ['Risks','Identify distress, power imbalance and accidental disclosure; describe specific mitigation and escalation procedures.'],
        ['Reporting','State what the approved methods and actual evidence support without inventing participants or exposing identifiable stories.']
      ],
      takeaway:'Ethical planning follows a study from its question to the treatment of people, information and final reporting; a teaching app cannot approve the plan.'
    },
    comparisons:[
      ['Ethics review','“It is only a class project, so approval cannot be needed.”','Ask the responsible authority what review applies before any covered participant recruitment or data collection.'],
      ['Consent','“A ticked box means every future use of the data is permitted.”','Explain the approved scope, rights, realistic withdrawal limits and planned handling of information.'],
      ['Anonymous versus confidential','“We removed names, so no one could possibly be identified.”','Consider identifiers in metadata, recordings and contextual details; apply appropriate controls.'],
      ['Research integrity','“An AI tool wrote a plausible citation, so I can use it.”','Find and check the real source, and comply with research and academic-integrity policies.']
    ],
    practice:'Prepare a hypothetical ethics plan for a study of student use of AI, using the guided exercise. Do not recruit anyone or collect private participant information in this practice.',
    practicePrompts:[
      'Risk: Who might be affected, and what harms could occur?',
      'Review: Who can determine whether the project needs formal approval?',
      'Consent and privacy: What would participants need to know, and what information should be protected?',
      'Integrity: How will you use evidence and AI assistance honestly?'
    ],
    reflectionPrompt:'In your own words, explain how consent, confidentiality, ethics review and research honesty connect. Which part of the ethical planning process would you need guidance on before a real study?',
    quiz:[
      {q:'You want to interview classmates about potentially sensitive AI use. What should you do before recruitment?',options:['Collect interviews first and seek approval afterward','Ask the responsible institution whether review or approval is required and prepare an ethical plan','Assume the project is exempt because participants are classmates'],correct:1,why:'Applicable institutional ethics requirements must be checked before covered recruitment or data collection. The app cannot determine exemptions.'},
      {q:'A survey removes names but keeps student numbers. Which description is most accurate?',options:['It may be confidential or pseudonymised, but it is not genuinely anonymous','It is necessarily anonymous because names are absent','It can be published without privacy checks'],correct:0,why:'Student numbers can identify participants. Removing names alone does not guarantee anonymity.'},
      {q:'What should a good participant information sheet explain?',options:['Only the hoped-for benefits','That participation is compulsory for anyone in the same class','Study activities, risks, handling of information, choices and relevant contact details'],correct:2,why:'Informed consent needs understandable information and a genuinely voluntary choice under the relevant approved process.'},
      {q:'A lecturer asks their students to join a study they will also grade. What is an important ethical concern?',options:['There is never any ethical problem','Students may feel pressured because of the lecturer’s authority, so recruitment requires careful planning','The lecturer can freely access every answer without a protocol'],correct:1,why:'Power differences may undermine genuinely voluntary participation even when no pressure is intended.'},
      {q:'Which action is responsible if an AI assistant suggests a convincing-looking research citation?',options:['Locate and verify the source and follow disclosure rules','Present the citation as confirmed because the tool sounded certain','Invent a DOI if the suggested one does not resolve'],correct:0,why:'AI outputs can contain nonexistent or inaccurate sources. Researchers must verify citations and follow institutional AI policies.'},
      {q:'An approved study changes its questions to cover a more sensitive topic. What is the appropriate approach?',options:['Change the questions silently to save time','Ignore the original approval conditions','Check whether an ethics amendment or new guidance is needed before introducing the change'],correct:2,why:'Changes to risks, procedures or data handling may require review or approval before implementation.'},
      {q:'What is a realistic explanation of participant withdrawal?',options:['Participants can always remove their answers from every published analysis forever','Explain the withdrawal process and any genuine limits once information has been irreversibly anonymised or combined','Do not mention withdrawal unless participants ask'],correct:1,why:'Participant information must accurately describe what can and cannot be withdrawn under the approved protocol.'},
      {q:'What should you do with confidential participant interviews in this early version of Research Hub AI?',options:['Store them in an unencrypted browser backup because the app is free','Upload them to a public GitHub repository','Use institution-approved systems instead; this prototype is not designed for sensitive identifiable data'],correct:2,why:'This prototype and its ZIP backups are not approved storage for identifiable or sensitive participant records.'}
    ]
  },
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

/* ============================================================
   Demystifying Research Methods — Concept list (course manual,
   appendix 7, pp. 15-52)
   ============================================================

   Extra naslagwerk. Alle 52 begrippen uit de conceptlijst, in het
   Engels, met uitleg, voorbeelden en valkuilen. De structurele
   dingen (LESSTOF-sleutel, tab-ids, veldnamen) blijven Nederlands:
   dat is bedrading, geen tekst.
   ============================================================ */

LESSTOF['demystifying-research-methods/conceptlist'] = [

  {
    id: 'voor', titel: 'Before you start',
    blokken: [
      { type: 'leerdoelen', items: [
        'Define all 52 concepts from the DRM concept list in your own words',
        'Tell apart the pairs that are routinely confused: data/information/fact, fundamental/applied, deductive/inductive, mixed/multi-method, reliability/validity, population/sample',
        'Classify a research question by type (exploratory, descriptive, defining, explanatory, comparative, evaluative, prescriptive, predictive)',
        'Identify the four components of an applied research design and check them against the demarcation checklist',
        'Name the five ethical principles and use them to spot research limitations',
        'Recognise the role of each variable type (independent, dependent, control, confounding, mediating, moderating) in a described study'
      ]},

      { type: 'uitleg', titel: 'What this reference is',
        tekst: 'This is appendix 7 of the DRM course manual, worked out as a lesson. The concept list is not background reading: it is **the** examinable core of this course. The manual says it in as many words, and quiz 1 is limited to part 1 of this list.\n\nThe list has three parts, and they map exactly onto the three blocks of the course:\n\n**Part 1 · Intro to Research Methods** (30 concepts) is tested in CT1 and again, harder, in CT3.\n**Part 2 · Understanding the problem** (14 concepts) is tested in CT2.\n**Part 3 · Planning your investigation** (18 concepts) is also tested in CT2, and in CT3.' },

      { type: 'waarschuwing', titel: 'Definitions in this course are not general definitions',
        tekst: 'The manual warns about this explicitly: research methods are used in many fields, so you will find slightly different definitions online and in other textbooks. For every assessment, **the definition in the course materials wins**, even where another source is arguably better.\n\nThat matters most for the pairs where a definition is a matter of house style rather than of truth: participant versus respondent, mixed-methods versus multi-method, and where exactly preliminary research stops and background research begins.' },

      { type: 'tabel', titel: 'How the list connects to the exams', toetsstof: true,
        kop: ['Part', 'Concepts', 'Quiz', 'Tested in'],
        rijen: [
          ['1 · Intro to Research Methods', '30', 'Quiz 1 (part 1 only)', 'CT1 (20 MCQ, 20%) and CT3'],
          ['2 · Understanding the problem', '14', 'Quiz 2', 'CT2 (6 MCQ + 4 open, 50%)'],
          ['3 · Planning your investigation', '18', 'Quiz 3', 'CT2 and CT3 (20 MCQ, 30%)']
        ],
        noot: 'The three quizzes are Pass/Fail on Brightspace and must all be passed, resits included. They are also the best available preview of the exam format.' },

      { type: 'slimmer', titel: 'How to use this page',
        tekst: 'Do not read the 52 entries end to end in one sitting. The Core material tab is split into one heading per concept, so use the heading bar at the top to work through eight or ten at a time and tick them off.\n\nCT1 asks you to **apply** concepts (75% of the questions), not to reproduce definitions. So for each entry, force yourself to invent one safety and security example of your own. If you cannot, you do not know the concept well enough yet.\n\nThe Flashcards tab is generated from the term blocks, so you get all 52 as term plus definition without doing anything extra.' }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [

      /* ---------------- PART 1 ---------------- */

      { type: 'tekst', titel: 'Part 1 · Intro to Research Methods',
        tekst: 'Thirty concepts about what research is, how it differs from everyday thinking, and the vocabulary you need before you can plan anything. This is the part quiz 1 covers, and the part CT1 leans on almost entirely.' },

      { type: 'tekst', titel: '1. Informal approach', toetsstof: true,
        tekst: 'Drawing conclusions from **observations in daily life**: what you happen to see, plus your own opinion, rather than standard research methods.\n\nIt is quick, easy and flexible, and for most everyday decisions that is exactly right. The weakness is structural, not accidental: it runs on your **personal frame of reference**, so it is wide open to bias and subjectivity. That is why a systematic approach is recommended whenever the stakes are high.\n\nRead: Verhoeven, 2019, p. 22 (online section 1.1).' },

      { type: 'voorbeeld',
        tekst: 'You want a study group for an exam. You ask the people you sit next to, post in the group chat, and watch who seems engaged. Fast, and it will probably work.\n\nBut you may only approach people you already know while they are bad study partners for you (different learning style, different grade ambition), and you may skip the shy student who knows the material best. That is bias doing its work.' },

      { type: 'slimmer', titel: 'The documentary test',
        tekst: 'The manual makes a point of this: most documentaries use an informal approach. Informal conversations with a handful of selected people giving personal opinions. Entertaining, and unacceptable as a basis for decisions that affect people\u2019s safety.\n\nWhenever you meet a claim, ask: what type of research is this based on?' },

      { type: 'tekst', titel: '2. Systematic approach', toetsstof: true,
        tekst: 'Observations **based on adequate research**, following standard research methods according to a fixed, methodological plan. The manual calls it an intentional set of organised activities designed to reach an objective.\n\nThe two words that carry the definition are *fixed* and *plan*. You decide in advance how you will measure, and then you do not change it halfway because the results are inconvenient. Essential in professional and high-stakes situations, where the conclusions need to be unbiased and reliable.' },

      { type: 'voorbeeld',
        tekst: 'You want to know how many students are aware of the emergency exits on campus. You build a structured survey: every student gets exactly the same clear, concise questions, in the same order, so nobody interprets them differently.\n\nThe standardisation is not bureaucracy. It is what makes the answers comparable.' },

      { type: 'tekst', titel: '3. Research', toetsstof: true,
        tekst: 'A systematic (as far as possible) approach involving an **organised investigation into a topic to establish facts and draw conclusions**. It rests on the **scientific method**: a cyclical process of observing, asking questions, conducting strict research, and sharing the results.\n\nIn applied research the cycle starts by identifying a need (making observations), establishing a theoretical foundation (understanding the *why* from existing research), developing a research question, and designing the study. **Those first steps are this course.** Collecting data, analysing it and reporting come in semester 2.' },

      { type: 'tabel', titel: 'The scientific method (Edmonds & Kennedy, 2017)', toetsstof: true,
        kop: ['Step', 'This course?'],
        rijen: [
          ['Identify a need', 'Yes'],
          ['Establish a theoretical foundation', 'Yes'],
          ['Formulate the research question', 'Yes'],
          ['Design the study', 'Yes'],
          ['Collect the data', 'Semester 2'],
          ['Analyse the data', 'Semester 2'],
          ['Report the results', 'Semester 2']
        ],
        noot: 'Figure 1 in the manual. Worth knowing in order: a CT question can hand you a step and ask what comes before or after it.' },

      { type: 'waarschuwing', titel: 'Investigation is not the same as research',
        tekst: 'An investigation is a formal inquiry or examination of a subject. Not every investigation uses proper research methods. For an investigation to count as **research**, it has to be based on the scientific method.\n\nThis is a classic MCQ trap: a case describes a thorough-sounding inquiry that never follows a method, and the right answer is that it is not research.' },

      { type: 'tekst', titel: '4. Fundamental research & theoretical application', toetsstof: true,
        tekst: 'Also called **pure** or **basic** research. Used to explore topics and to build or develop new **theories and hypotheses**. The aim is to produce and improve knowledge **for its own sake**, focusing on understanding basic principles.\n\nRead: Verhoeven, 2019, pp. 23-24 (online 1.2).' },

      { type: 'voorbeeld',
        tekst: 'A study of how risk management decisions are affected by cognitive biases such as the availability bias, using simulations with participants in a controlled laboratory setting.\n\nA project developing a new method to evaluate fear from measurements such as differences in facial temperature.' },

      { type: 'tekst', titel: '5. Applied research & practical application', toetsstof: true,
        tekst: 'Like fundamental research, it is conducted to acquire new knowledge. The difference is the aim: findings are **primarily aimed at resolving a specific, practical problem**.\n\nBecause of that, results are usually valid for a single situation or a limited number of situations with a similar context. Applied research often **follows on from** fundamental research: theory first, application after.\n\nSSMS is an applied sciences programme, so nearly everything you do here is applied research.' },

      { type: 'vergelijking', titel: 'Fundamental versus applied (figure 2)', toetsstof: true,
        links: { titel: 'Fundamental research', punten: [
          'Explores topics, develops theories and hypotheses',
          'Aimed at improving knowledge itself',
          'Focuses on understanding principles and mechanisms',
          'Broadly valid, not tied to one context'
        ]},
        rechts: { titel: 'Applied research', punten: [
          'Uses existing knowledge to address specific issues',
          'Focuses on solving practical problems',
          'Tests theories and concepts in real-world contexts',
          'Valid for one situation or similar contexts'
        ]} },

      { type: 'voorbeeld',
        tekst: 'Applied: a project on improving communication between the employees of a lab in Delft and their onsite safety officer.\n\nApplied: a project investigating the safety perception of refugees living in Rijswijk.\n\nNotice the pattern. A named place, a named group, a named practical problem. That specificity is the signature of applied research.' },

      { type: 'tekst', titel: '6. Research methods', toetsstof: true,
        tekst: 'The specific **procedures, strategies and techniques** used to systematically collect and analyse data, in both fundamental and applied research. They are the tools that let you uncover new information or build a better understanding.\n\nIn SSMS you will write a **methodology section** in your reports and thesis: which methods you used, and how you used them.' },

      { type: 'tekst', titel: '7. Research problem', toetsstof: true,
        tekst: 'A **statement about an area of concern, a knowledge gap, or a situation that needs improving**. It points out the need for an investigation and sets the boundaries of your topic.\n\nDeveloping it helps you understand what the problem is, how it affects society, how its elements interact, and what you as a researcher can realistically focus on. A well-defined research problem is the foundation for a focused, manageable objective and question.\n\nRead: van Tulder, 2018, pp. 88-90; Verhoeven, 2019, pp. 55-59 (online 3.1-3.2.1). Discussed in depth in lecture 3, practised in workshop 3.' },

      { type: 'voorbeeld',
        tekst: 'Schiphol is under pressure to strengthen security because the tactics of potential threats keep evolving. There is a pressing need to investigate vulnerabilities in existing airport security protocols in the light of new forms of contraband, cyber-physical risks and insider collusion.\n\nAdobe has experienced a series of data breaches, raising concerns about insider threats. A critical knowledge gap exists in large organisations around identifying, assessing and mitigating insider threats.' },

      { type: 'tekst', titel: '8. Research objective', toetsstof: true,
        tekst: 'A statement or two summarising **what you are trying to achieve**. Practical and action-oriented: a direction that keeps you focused on a clear goal. Sometimes called the research goal.\n\nIt is a key part of your **golden thread**, so it has to align with your research question(s). Use **SMART** (Specific, Measurable, Achievable, Relevant, Timely) when you write it.\n\nRead: Verhoeven, 2019, pp. 73-83 (online 3.2.3).' },

      { type: 'voorbeeld',
        tekst: '"By the end of this six-month project, this research aims to identify and evaluate at least three key vulnerabilities in the current security protocols at Schiphol Airport and to deliver a report with evidence-based recommendations for improvement. First, a survey will be conducted\u2026"\n\nCount what is in there: a deadline, a number, a named client, a deliverable, and the first key action. That is what earns the marks in CT2.' },

      { type: 'tekst', titel: '9. Research question', toetsstof: true,
        tekst: 'Also called the central or main question. The **single question your entire project is designed to answer**. It drives the research and should guide every decision you make, and your results should answer it directly.\n\nOne project, one central question. Not two, not a list.' },

      { type: 'voorbeeld',
        tekst: '"How can security at Schiphol Airport be improved to protect against new threats like cyber-physical risks?"\n\n"How can effective strategies for early detection and prevention of insider threats be developed at Adobe?"' },

      { type: 'tekst', titel: '10. Research sub-questions', toetsstof: true,
        tekst: 'Secondary questions that explore different aspects of the main question. They break a complex topic into smaller, manageable parts and give your research its structure.\n\nTwo rules: they must all be **related to** the main question, and they must stay **inside its limits**. In SSMS projects you normally use **3 to 5**; on the CT2 you are asked for exactly **two**.' },

      { type: 'voorbeeld',
        tekst: 'RQ: How can security at Schiphol Airport be improved to protect against new threats like cyber-physical risks?\n\nSQ1: What are the current security measures at Schiphol Airport against cyber-physical risks?\nSQ2: What specific measures against cyber-physical risks have been successful at other large international airports, which could be applied to Schiphol?\n\nSQ1 looks inward at the case, SQ2 looks outward for solutions. That pairing is a reliable template.' },

      { type: 'tekst', titel: '11. Research ethics', toetsstof: true,
        tekst: 'The ethical principles guiding all research. In safety and security your work usually involves people, so the standard is high. This course uses the **Netherlands Code of Conduct for Research Integrity (2018, pp. 13-14)** and its five core principles.' },

      { type: 'tabel', titel: 'The five principles', toetsstof: true,
        kop: ['Principle', 'What it demands'],
        rijen: [
          ['Honesty', 'Being truthful, using reliable data, citing properly, no plagiarism'],
          ['Scrupulousness', 'Using appropriate scientific methods and designing your research carefully'],
          ['Transparency', 'Being clear about your data, methods and results so the work is verifiable, and disclosing conflicts of interest, funding and external support'],
          ['Independence', 'Being guided by scientific considerations, not by funders, clients or commercial interests'],
          ['Responsibility', 'Doing research relevant to society, protecting participants from harm, obtaining informed consent']
        ],
        noot: 'Learn these five by name. Part 3 asks you to derive research limitations from them, so they come back in the open questions of CT2.' },

      { type: 'uitleg', titel: 'Independence, spelled out',
        tekst: 'Your **topic** and question may be guided by what society needs. Your **design and process** must not be. Funding conditions or sponsor agreements may never let the funder dictate or manipulate methods, influence findings, or suppress results.\n\nThe manual is honest that these are external pressures which are very hard to manage in practice.' },

      { type: 'voorbeeld',
        tekst: 'Plagiarism violates **Honesty**: copying directly, paraphrasing to disguise copying, or giving inaccurate citations. Citing a source so incompletely that nobody can trace it counts as plagiarism too.\n\nThe Stanford Prison Experiment (1971) violates **Responsibility**: the "guards" psychologically and physically harmed the "prisoners", who eventually harmed the guards back. The manual adds that it was unreliable as well: not replicable, and there is evidence both groups knew what result the researchers wanted and played along, which is social desirability bias.' },

      { type: 'tekst', titel: '12. Data', toetsstof: true,
        tekst: 'A collection of **raw facts** which on their own may have no purpose and require processing. Data points can be quantitative (numerical, statistical) or qualitative (descriptive: texts, images).\n\nData looks useless until it is organised and interpreted, which is exactly what turns it into information.' },

      { type: 'voorbeeld',
        tekst: '"2012, 1,127,900; 2022, 797,700" (Statista, 2023). Numbers with no story attached: data.\n\n"In 2021 the Dutch police scored 6.3 out of 10 on public trust" (Statista, 2023).' },

      { type: 'tekst', titel: '13. Information', toetsstof: true,
        tekst: 'The **result of processing** raw data: organising and interpreting it. Information is the perception of data, gained through analysis, which puts data points into a context that has meaning.\n\nSame numbers as above, now with meaning attached.' },

      { type: 'voorbeeld',
        tekst: '"Between 2012 and 2022 the number of registered crime cases in the Netherlands fell from 1,127,900 to 797,700."\n\n"The 6.3 out of 10 for trust in the police is a 0.4-point increase compared with 2012 and 2013."\n\nThe data did not change. The comparison and the context are what got added.' },

      { type: 'tekst', titel: '14. Fact (empirical evidence)', toetsstof: true,
        tekst: 'Information that is **demonstrably true** and can be proven through research methods such as observation or measurement. A factual claim is traceable to reliable evidence and open to checking.\n\nNot all facts are universal. Many are **time- and context-specific**, like recorded crime figures. Facts serve as empirical evidence supporting claims, generalisations and conclusions.' },

      { type: 'checklist', titel: 'Five tests for a fact', toetsstof: true,
        items: [
          'Can it be applied to all similar situations?',
          'Can it be verified by primary sources?',
          'Can it be observed?',
          'Can it be duplicated with the same results?',
          'Has it been historically recorded?'
        ]},

      { type: 'voorbeeld',
        tekst: '"Water boils at 100\u00b0C at sea level." Consistently observed, measured and duplicated under standard conditions.\n\n"The total number of registered crime cases in the Netherlands in 2022 was 797,700." Historical data verifiable through official sources. Still: check the original source where you can.' },

      { type: 'slimmer', titel: 'Data, information, fact in one line',
        tekst: 'Data is the scatter of dots. Information is the dots arranged into a chart with a label. A fact is the claim that survives checking.\n\nCT1 will describe one of the three and ask you to name it. The giveaway is whether interpretation has happened yet, and whether the claim has been verified.' },

      { type: 'tekst', titel: '15. Theory', toetsstof: true,
        tekst: 'In daily life a "theory" is assumed to be a guess. In research it is the opposite: a **logically consistent explanation** of a specific behaviour or set of events, based on known principles and **validated by empirical evidence**.\n\nA theory explains the process and tries to predict what happens in similar situations. Theories can change as more research is done.' },

      { type: 'voorbeeld',
        tekst: 'Critical theory (1930s, Marcuse, Horkheimer and others): a sociological perspective focused on understanding and challenging power dynamics and inequality. It analyses social structures, how power is unevenly distributed, and how that distribution maintains and reproduces inequality. It sets out to uncover and question the assumptions behind oppressive systems and social injustice.' },

      { type: 'tekst', titel: '16. Framework', toetsstof: true,
        tekst: 'A **structure, model or tool** used to investigate a research problem. It offers a specific, often step-by-step approach to analysing information or solving a problem.\n\nFrameworks are practical tools for working on complex issues; a framework often complements a theory, or is complemented by one.' },

      { type: 'voorbeeld',
        tekst: 'A **SWOT analysis** structures Strengths, Weaknesses, Opportunities and Threats, which helps challenge assumptions and uncover blind spots.\n\nA **risk matrix** structures probability against impact, so you can see which risks to address first.\n\nAnd the one you will use most in this course: the **6W problem analysis framework**.' },

      { type: 'tekst', titel: '17. Opinion', toetsstof: true,
        tekst: 'A **personal view or belief** about a topic, not necessarily based on or supported by empirical evidence.\n\nNote the "not necessarily". An opinion is not automatically wrong or unsupported; it simply is not evidence in itself.' },

      { type: 'voorbeeld',
        tekst: '"I believe safety and security are important for society." An opinion that could be supported with evidence.\n\n"I believe birds are not real but government surveillance drones." An opinion that is not.' },

      { type: 'tekst', titel: '18. Cognitive biases', toetsstof: true,
        tekst: 'A pattern of **systematic errors in thinking** resulting in a misperception of reality. They happen **unconsciously**, because of how our brains process information, and they make us vulnerable to manipulation.\n\nThis course focuses on five: **confirmation bias, availability heuristic, cognitive dissonance, social desirability, and the Dunning-Kruger effect**. The manual only works out two of them and says plainly that you have to research the other three yourself.' },

      { type: 'voorbeeld',
        tekst: '**Availability heuristic**: we judge how likely something is by how easily we remember examples of it. A vivid news report about a rare event makes it feel common. It also feeds our failure to notice all the evidence a debater is quietly leaving out when cherry-picking.\n\n**Social desirability bias**: people answer the way they think will be viewed favourably. Survey employees about compliance with security protocols and they will overstate it, because they know the "correct" answer. Anonymising all participant data reduces the effect.' },

      { type: 'tekst', titel: '19. Logical fallacies', toetsstof: true,
        tekst: '**Errors in reasoning** in how you make claims and construct arguments. Like cognitive biases they often happen unconsciously, but unlike biases they can also be committed **on purpose**, to persuade or mislead.\n\nThe ten this course focuses on: **anecdotal** (hasty generalisation), **appeal to authority**, **causal**, **cherry picking**, **ambiguity** (equivocation), **personal incredulity**, **burden of proof**, **slippery slope**, **strawman**, **ad hominem**.' },

      { type: 'voorbeeld',
        tekst: '**Anecdotal**: "I do not need a helmet. My father rode a motorcycle for decades without one and nothing happened." A single case used to dismiss statistics.\n\n**Personal incredulity**: "I do not understand how vaccines work, therefore vaccines do not work." Your inability to grasp something has no bearing on whether it is true.\n\n**Strawman**: someone argues for stricter environmental regulation and gets answered with "so you want to shut down all factories and destroy the economy?" That is not what was argued.' },

      { type: 'slimmer', titel: 'Bias or fallacy?',
        tekst: 'The clean split: a cognitive **bias** is an error in **perception**, in how your brain takes information in. A logical **fallacy** is an error in **reasoning**, in the argument you build out loud.\n\nAnd only fallacies can be deliberate.' },

      { type: 'tekst', titel: '20. Qualitative research', toetsstof: true,
        tekst: 'Gathering **non-numerical data** about lived experiences, emotions or behaviours, and the meanings people attach to them. It gives a deep understanding of complex concepts, social interactions or cultural phenomena.\n\nUseful for exploring **how** or **why** something happened, by interpreting events and describing actions, typically through interviews and literature reviews. It generates meaning through rich description.\n\n**The majority of research in SSMS is qualitative.**' },

      { type: 'tekst', titel: '21. Quantitative research', toetsstof: true,
        tekst: 'Gathering **numerical and statistical data** that can be ranked, measured or categorised through statistical analysis. Used to uncover patterns or relationships and to make generalisations.\n\nUseful for **how many, how much, how often, to what exact extent**, typically through surveys and questionnaires.' },

      { type: 'voorbeeld',
        tekst: 'Qualitative: to understand how crisis managers experience wildfire season, you conduct in-depth interviews and observations.\n\nQuantitative: a security company analyses data from 500 cyberattacks and finds that faster detection reduced breach severity by 25%.' },

      { type: 'tekst', titel: '22. Reading techniques', toetsstof: true,
        tekst: 'SSMS advises three, plus a fourth you will grow into. The manual\u2019s image: looking at a city map. **Skimming** is glancing at the whole map for the layout. **Scanning** is looking for one street name. **Detail reading** is tracing the exact route from A to B.\n\nIn practice you scan to decide whether a text has what you need, skim to get the overview (go for the spoilers: introductions and conclusions, first and last sentences), and then detail-read only the parts that turned out to matter.' },

      { type: 'tabel', titel: 'The four techniques', toetsstof: true,
        kop: ['Technique', 'Meaning', 'Use', 'Tips'],
        rijen: [
          ['Skimming', 'Reading quickly for a general overview', 'A rough idea of what the text is about', 'Headings; first and last sentences of paragraphs'],
          ['Scanning', 'Searching for specific information', 'Locating a fact, date or keyword', 'Tables, graphs, specific words such as names or places'],
          ['Detail reading', 'Reading a passage as carefully as you can', 'Understanding every detail', 'Every word; grammar and punctuation; linking words'],
          ['Critical reading', 'Analysing and evaluating the arguments and evidence', 'Going beyond locating and understanding information', 'Read a lot and practise; limit your AI use when interpreting texts']
        ],
        noot: 'More on these in the workshop 3 slides.' },

      { type: 'tekst', titel: '23. Deductive thinking', toetsstof: true,
        tekst: 'A systematic, **top-down** approach: start with a general theory or rule, move to a specific conclusion. If the general premises are true, the conclusion **must** also be true.\n\nStrongly associated with **quantitative** research, where a hypothesis derived from a theory is tested against large amounts of data.\n\n(A premise is a statement from which another follows as a conclusion.)' },

      { type: 'voorbeeld',
        tekst: 'Premise 1: all birds have wings. Premise 2: a crow is a bird. Conclusion: a crow has wings.\n\nPremise 1: all unencrypted network traffic is vulnerable to interception. Premise 2: the data sent to Server X is unencrypted. Conclusion: the data sent to Server X is vulnerable to interception.' },

      { type: 'tekst', titel: '24. Inductive thinking', toetsstof: true,
        tekst: 'A systematic, **bottom-up** approach: start with specific observations, move towards general patterns, conclusions or theories.\n\nThe generalised conclusion is **broader than the data backing it up**. So it is likely given the evidence, but not guaranteed to survive once more data appears. Used in exploratory research to generate hypotheses, and therefore it often comes **before** deductive research.' },

      { type: 'voorbeeld',
        tekst: 'Premise 1: a crow has wings. Premise 2: a crow is a bird. Conclusion: all birds have wings. Plausible, but crows alone cannot carry it.\n\nPremise 1: computer A in finance has ransomware, started by a fake invoice PDF. Premise 2: computer B in marketing has the same ransomware, same fake invoice. Conclusion: a phishing campaign using fake invoices is targeting our company. Logically sound given the data, and still possibly wrong: the infections could have separate origins that happened to coincide.' },

      { type: 'slimmer', titel: 'Which direction am I going?',
        tekst: 'Ask where the **certainty** sits. Deductive: if the premises hold, the conclusion is guaranteed, and you are narrowing down. Inductive: the conclusion is a bet on a pattern, and you are widening out.\n\nPair them with the method and you have the exam answer: deductive with quantitative and hypothesis testing, inductive with exploratory and hypothesis building.' },

      { type: 'tekst', titel: '25. Mixed-methods research', toetsstof: true,
        tekst: 'Combining **quantitative and qualitative** methods to gather and analyse data. This gives a more holistic understanding: statistical data plus deeper contextual insight.\n\nA typical shape: qualitative interviews first to develop a hypothesis, then a quantitative survey to test it on a larger population.' },

      { type: 'tekst', titel: '26. Multi-method research', toetsstof: true,
        tekst: 'Using **two or more methods from the same family**: either multiple qualitative methods, or multiple quantitative methods, in one study.\n\nThe manual\u2019s image: two different screwdrivers, a Phillips and a flathead, to build a cabinet. Multiple tools, same family. Used to understand a topic from several angles within one research paradigm.' },

      { type: 'vergelijking', titel: 'Mixed versus multi', toetsstof: true,
        links: { titel: 'Mixed-methods', tekst: 'Across the families: qualitative **and** quantitative.', punten: [
          'Survey on student perceptions plus interviews with security staff',
          'Interviews to build a hypothesis, then a survey to test it'
        ]},
        rechts: { titel: 'Multi-method', tekst: 'Within one family: two qualitative, or two quantitative.', punten: [
          'Interviews plus direct observation (both qualitative)',
          'A user satisfaction survey plus system log analysis (both quantitative)'
        ]} },

      { type: 'waarschuwing', titel: 'The word "multiple" is not the answer',
        tekst: 'Both use more than one method, so counting methods tells you nothing. The only question that decides it: **do the methods come from the same family or not?**\n\nThis is one of the most reliably confused pairs in part 1, so expect it on CT1.' },

      { type: 'tekst', titel: '27. Triangulation', toetsstof: true,
        tekst: 'Using **multiple viewpoints** to make findings more reliable, like looking at an object from different angles to see it more clearly. It lets researchers confirm findings by cross-verifying results through various standardised, systematic methods.\n\nTwo main types:\n\n**Data triangulation**: different **sources** of data. Interviewing students, teachers and parents about classroom safety.\n**Methodological triangulation**: different **methods** for the same problem. Surveys and observations of how safety is discussed in the classroom.' },

      { type: 'uitleg', titel: 'How it relates to mixed and multi',
        tekst: 'Mixed-methods research is one powerful way to achieve methodological triangulation. But it is not the only way: you can also triangulate with **multi-method** research using several qualitative methods, such as interviews plus focus groups.\n\nSo triangulation is the **goal** (more reliable findings), and mixed or multi-method are **routes** to it.' },

      { type: 'tekst', titel: '28. Holism', toetsstof: true,
        tekst: 'Understanding that a system is **more than the sum of its parts**. To understand it you must look at the whole picture and at the **connections between** the parts. This helps you manage a situation more comprehensively, by taking all related factors into account.' },

      { type: 'voorbeeld',
        tekst: 'Holistic workplace safety covers the physical (safety equipment, hazard identification), the emotional (work-life balance, conflict resolution) and the mental (stress management, mental health awareness).\n\nAn ecosystem is more than its living organisms: it includes soil, water and the interactions between everything. The manual\u2019s point is that safety and security topics work the same way, so keep an eye on the ecosystem your topic sits in.' },

      { type: 'tekst', titel: 'End of part 1',
        tekst: 'Those are the 30 concepts of part 1, the ones quiz 1 and CT1 are built on. The pairs to rehearse before you move on: informal/systematic, fundamental/applied, data/information/fact, theory/framework, bias/fallacy, qualitative/quantitative, deductive/inductive, mixed/multi-method.' },

      /* ---------------- PART 2 ---------------- */

      { type: 'tekst', titel: 'Part 2 · Understanding the problem',
        tekst: 'Fourteen concepts about the first real phase of a project: finding out what is actually going on, with which framework, using which sources. This is quiz 2 territory and it feeds directly into the CT2 open questions, where you analyse four short academic texts.' },

      { type: 'tekst', titel: '29. Research project', toetsstof: true,
        tekst: 'A **scientific effort to answer a research question within a limited time**, following a structured approach to achieve an observable result.\n\nA research project can be applied (solving a practical problem) or fundamental (developing theory), and can be qualitative, quantitative, mixed-methods or multi-method. Which approach you pick depends on your research goal.\n\nThe reasons behind projects range from answering a practical question by gathering information (exploratory or descriptive research, what applied sciences universities do) to theory testing or building (explanatory or predictive research, what fundamental research universities do).' },

      { type: 'uitleg', titel: 'Why this matters for your planning',
        tekst: 'All projects in SSMS count as research projects. This course prepares you for your **first project in semester 2** by practising the first steps of every research project: preliminary research, and developing an applied research design.' },

      { type: 'tekst', titel: '30. Preliminary research', toetsstof: true,
        tekst: 'The **initial phase** of any project, where you find basic information about your topic: **who, what, when, where**.\n\nIt also shows you the controversies attached to your topic, and whether enough sources exist to cover it properly. It is recommended to follow a framework, such as **6W**, so you get a rich overview rather than a scattered one.\n\nRead: van Tulder, 2018, pp. 88-90; Verhoeven, 2019, pp. 55-59 (online 3.1).' },

      { type: 'tekst', titel: '31. Background research', toetsstof: true,
        tekst: 'What follows preliminary research, once you have a solid research design (a clear objective, problem, central question and sub-questions): **extensive literature research**.\n\nYou do it to get familiar with what is already known about the problem, before collecting and analysing your own data. You will learn how in semester 2, in ART and Research Project.' },

      { type: 'vergelijking', titel: 'Preliminary versus background', toetsstof: true,
        links: { titel: 'Preliminary research', tekst: 'A quick check on the causes, affected areas and timeline of the 2020 California wildfires.', punten: [
          'Comes first, before the design exists',
          'Who, what, when, where',
          'Scopes the topic and checks source availability',
          'Framework-driven (6W)'
        ]},
        rechts: { titel: 'Background research', tekst: 'A deep dive into existing studies on wildfire management, climate factors and community impact.', punten: [
          'Comes after the design is solid',
          'Extensive literature research',
          'Builds depth before data collection',
          'Semester 2 material'
        ]} },

      { type: 'tekst', titel: '32. 6W / 5W1H problem analysis framework', toetsstof: true,
        tekst: 'A structured approach to analysing a problem from **six perspectives: what, why, where, who, when, and which (or how)**. Looking from these different angles gives you a comprehensive understanding of the problem. It is a **problem analysis** framework, not a data collection method.\n\nThis is the single most examined tool in the course: it carries 50% of CT2 together with the concepts and variables question.\n\nRead: van Tulder, 2018, pp. 88-90; Verhoeven, 2019, pp. 55-59 (online 3.1). Examples: any CT2 exercise answer key in the course.' },

      { type: 'tabel', titel: 'The six angles', toetsstof: true,
        kop: ['W', 'What it asks of your case'],
        rijen: [
          ['What', 'What exactly is the phenomenon or problem?'],
          ['Why', 'Why is it a problem, and for whom is it urgent?'],
          ['Where', 'In which place, organisation or context does it occur?'],
          ['Who', 'Who is involved, affected, or responsible? Who is the client?'],
          ['When', 'Since when, how often, and in what timeframe?'],
          ['Which / how', 'Which forms does it take, and how does it happen?']
        ],
        noot: 'On CT2 your 6W answers have to reappear in your research design. The demarcation checklist in part 3 asks explicitly whether your terminology aligns with your 6W answers.' },

      { type: 'tekst', titel: '33. Research proposal', toetsstof: true,
        tekst: 'A structured, formal document explaining **what** you plan to research (your design), **why** it is worth researching (relevance) and **how** you will conduct it (methodology).\n\nIn this course you practise the design part (problem, objective, question, sub-questions) and justifying its relevance. The full proposal comes later, for your thesis, where it has to be approved before you may start.' },

      { type: 'tekst', titel: '34. Case study', toetsstof: true,
        tekst: 'A **detailed investigation of a particular problem, person, group or event**. Zooming in on one piece of the puzzle to understand how it fits the bigger picture.\n\nResearchers collect detailed information, often from the subjects themselves through interviews or observations, to tell the story and draw lessons from that single example.' },

      { type: 'voorbeeld',
        tekst: 'Event organisers run a comprehensive security case study of a music festival to understand its challenges, such as crowd control and unauthorised entry.\n\nThe manual also points to a case study of the 2014 Sony hack, and asks you to spot the what, why, when, how, where and who in it. That is the 6W framework being applied to a case study, which is exactly the CT2 exercise.' },

      { type: 'tekst', titel: '35. Sources', toetsstof: true,
        tekst: 'Simply **where information comes from**. Sources can be articles, books, websites, videos, people or data that provide evidence for your ideas.\n\nNot all sources are equally reliable. They can be **primary or secondary**, and they fall into categories such as **white or grey** literature. Those are two separate distinctions, and a source has a position on both.' },

      { type: 'tekst', titel: '36. Citing (a source)', toetsstof: true,
        tekst: 'How you **give credit** to the sources you used. It shows you did proper research, justifies your arguments, and acknowledges the researchers who analysed your topic before you. Citing properly is central to being a responsible researcher and to avoiding plagiarism.\n\nSSMS uses **APA** style: author\u2019s last name and year of publication in the text.' },

      { type: 'vergelijking', titel: 'Two ways to cite', toetsstof: true,
        links: { titel: 'Narrative citation', tekst: 'The author\u2019s name is part of your sentence; the year follows in brackets.\n\nHardiman and Wong (2022) reported that on 1 July 2002 two aircraft crashed above \u00dcberlingen, Germany, causing 71 deaths.' },
        rechts: { titel: 'Parenthetical citation', tekst: 'Author and year both in brackets, at the end of the sentence or clause.\n\nA cost-benefit analysis identifies and evaluates the net benefits of different ways of achieving goals compared with their costs (Sassone & Schaffer, 1978).' } },

      { type: 'tekst', titel: '37. Primary sources', toetsstof: true,
        tekst: '**Raw data and first-hand evidence** that has not been interpreted by someone else.\n\nIncludes: interview transcripts, documented observations, raw statistical data, equipment logs, some (research-based) academic articles, and some (research-based) government reports.\n\nNote the "some". An academic article is primary when it reports the researchers\u2019 own study, and secondary when it reviews other people\u2019s work.' },

      { type: 'voorbeeld',
        tekst: 'For an accident investigation: security camera footage, equipment logs, direct interviews with eyewitnesses.\n\nFor a bank data breach: transcripts of interviews with the IT staff who discovered and responded to it, accounts from customers who spotted unusual activity, and data on login attempts and access.' },

      { type: 'tekst', titel: '38. Secondary sources', toetsstof: true,
        tekst: '**Second-hand information and interpretations of primary sources.** Textbooks, articles that explain, review, analyse or otherwise add value to previous research, histories, biographies.' },

      { type: 'voorbeeld',
        tekst: 'For a historical espionage case: textbooks and articles by historians who already analysed the original intelligence reports and witness testimonies (the primary sources).\n\nFor a national cyberthreat policy: academic articles, policy briefs and expert analyses are secondary; the government reports, legislative documents and incident data are primary.' },

      { type: 'tekst', titel: '39. White literature', toetsstof: true,
        tekst: 'An umbrella term for **traditionally published, peer-reviewed academic work**. Scholarly articles in academic journals, and books published by academic presses.\n\nThe manual adds a caveat worth remembering: **not all books are white literature.**\n\nThe name is historical: the traditionally published academic literature that was printed on white paper.' },

      { type: 'tekst', titel: '40. Academic articles', toetsstof: true,
        tekst: 'Formal texts, also called scholarly articles, studies or papers, **written by experts and published in academic journals after a rigorous peer-review process**. They share new knowledge.\n\nStandard structure: **abstract, introduction, methodology (including the applied research design), results, conclusion**, plus citations and references to earlier work.\n\nThe excerpts you get in preparation for CT2 are all parts of academic articles.' },

      { type: 'tekst', titel: '41. Peer-review', toetsstof: true,
        tekst: 'The formal process where **experts in the field** (as close as possible to the topic, that is, peers) evaluate a research paper before it can be published in an academic journal.\n\nThe author receives feedback and usually has to make corrections, sometimes over several rounds. It is the standard for quality control in scholarly publishing, and it can take **months or even a year**.' },

      { type: 'tekst', titel: '42. Grey literature', toetsstof: true,
        tekst: 'An umbrella term for materials and research produced by organisations **outside traditional academic publishing**: technical reports from government agencies, theses, conference proceedings, corporate reports.\n\nIt can be very valuable, but it does **not go through peer review**. It also tends to have fewer citations and references, abstracts may be missing or replaced by an executive summary, and the structure varies widely because it is not standardised.' },

      { type: 'tabel', titel: 'White versus grey (figure in the manual)', toetsstof: true,
        kop: ['White literature', 'Grey literature'],
        rijen: [
          ['Journal articles', 'Research reports, statistics, patents'],
          ['Books (academic presses)', 'Clinical trials, conference papers, policy documents'],
          ['News articles', 'Standards, maps, theses']
        ],
        noot: 'Things to consider about grey literature: it can offer more local information and alternative perspectives, it can be harder to find, it can be more current than formally published research, and its quality varies.' },

      { type: 'slimmer', titel: 'Two axes, not one',
        tekst: 'White/grey is about **how it was published** (peer-reviewed academic channel or not). Primary/secondary is about **how close it is to the raw evidence**.\n\nSo a government incident report is grey **and** primary. A textbook is white **and** secondary. An MCQ that offers you "primary, therefore white" is offering you a wrong answer.' },

      /* ---------------- PART 3 ---------------- */

      { type: 'tekst', titel: 'Part 3 · Planning your investigation',
        tekst: 'Eighteen concepts on building the design itself, plus the variable vocabulary. This is quiz 3, and together with part 2 it carries the CT2 open questions where you write a complete applied research design of about 250 words.' },

      { type: 'tekst', titel: '43. Applied research design (ARD)', toetsstof: true,
        tekst: 'The **strategic blueprint** for a research project aimed at solving a specific, practical problem. The manual\u2019s image: the route you plan in your GPS before a journey, so you know where you are going and how to get there.\n\nFour core components, which must be **perfectly aligned**:\n\n**Research problem** \u00b7 your starting point. The specific, real-world issue or knowledge gap.\n**Research objective** \u00b7 your destination. The concrete goal, deliverable or outcome.\n**Research question** \u00b7 the main route. The single overarching question.\n**Sub-questions** \u00b7 the step-by-step directions. Answering them all together answers the main question.' },

      { type: 'uitleg', titel: 'The golden thread',
        tekst: 'All four parts must be logically connected, forming a clear and consistent link through your whole project. The **questions must directly address the objective**, and the **objective must be a direct response to the problem**.\n\nA solid ARD is what lets you defend your research in front of supervisors, clients and other parties. On CT2, the golden thread is what the alignment marks are for: your question can be beautifully written and still lose points because it does not match the objective you wrote two lines above it.' },

      { type: 'tekst', titel: '44. Demarcation', toetsstof: true,
        tekst: 'Setting **clear boundaries** for your research so it is focused and manageable. A well-demarcated project clarifies your priorities from the start and keeps the investigation on track.\n\nIt happens **inside your ARD**: this is how you narrow a broad topic down into a specific project.' },

      { type: 'checklist', titel: 'The demarcation checklist for every statement and question in your ARD', toetsstof: true,
        items: [
          'Focused: only one specific safety/security phenomenon, the same one throughout the whole ARD',
          'Relevant: connects to society and to safety/security practice, and includes the specific context of the case study (as many 6W answers as relevant)',
          'Applied: focuses on practical application to a real-world problem, and states what you want to do (assess, decrease, compare)',
          'Clear: unambiguous language, terminology aligned with your 6W answers',
          'Unbiased: neutral language, does not lead the reader',
          'Ethical: considers the safety and dignity of everyone involved',
          'Feasible: realistically completable with the available time and sources',
          'Complex enough: requires actual research and analysis, more than a simple search',
          'Open-ended (questions): cannot be answered with yes or no',
          'Single-topic (questions): not double-barrelled, does not ask two things at once'
        ]},

      { type: 'voorbeeld',
        tekst: '"How can crowd crushes [SSMS phenomenon], such as the 2022 Halloween disaster in Seoul [case study detail], be prevented [applied perspective] during future South Korean celebrations [case study detail]?"\n\nFour labelled ingredients in one sentence. Use this as your template on CT2 and you cover most of the checklist automatically.' },

      { type: 'tekst', titel: '45. Types of research questions', toetsstof: true,
        tekst: 'In applied sciences the **type** of question you choose is crucial, because it defines the practical goal of the project. Your question decides whether you are trying to understand a problem, measure its effects, propose a solution, or predict an outcome.\n\nAll types can be used, but applied sciences rely most on **descriptive, evaluative and prescriptive** questions, because those focus on assessing current situations and recommending practical improvements.\n\nRead: Verhoeven, 2019, p. 78 (online 3.2.1).' },

      { type: 'tabel', titel: 'The eight types', toetsstof: true,
        kop: ['Type', 'Purpose', 'Example from the manual'],
        rijen: [
          ['Exploratory', 'Investigate a new or understudied topic, generate initial insights', 'How do Dutch university students perceive public safety in major train stations post-COVID-19?'],
          ['Descriptive', 'Give a detailed account of a known situation; nature, characteristics, functions', 'What are the current safety protocols for handling hazardous chemicals at the Philips High Tech Campus in Eindhoven?'],
          ['Defining', 'Establish a clear, precise meaning for a key concept', 'How can "cybersecurity resilience" be defined for Dutch SMEs in the context of increased remote working?'],
          ['Interpretive / explanatory', 'Understand the why: meaning, causes, how people make sense of experience', 'Why did phishing success rates differ between Finance and HR at the Dutch Ministry of Justice last fiscal year?'],
          ['Comparative', 'Analyse similarities and differences between cases, groups or situations', 'How do incident reporting procedures at Schiphol compare to those at the Port of Rotterdam?'],
          ['Evaluative', 'Assess effectiveness, impact, value or success against criteria', 'To what extent was the neighbourhood watch app effective in reducing reported bicycle thefts in the Schilderswijk in 2024?'],
          ['Prescriptive', 'Propose solutions or recommend future actions', 'What communication strategies should THUAS implement to increase cybersecurity awareness among first-year students?'],
          ['Predictive', 'Forecast future outcomes from current trends, often statistically', 'What is the likely impact of 5G adoption on real-time crowd monitoring at major public events in Amsterdam in the next 5 years?']
        ]},

      { type: 'slimmer', titel: 'Reading the verb',
        tekst: 'Most of the time the question type is visible in the opening words. "What are the current\u2026" is descriptive. "To what extent was\u2026 effective" is evaluative. "What should X implement" is prescriptive. "Why did\u2026" is explanatory. "How do A and B compare" is comparative.\n\nWatch out for the two that look alike: **evaluative** judges something that already happened against criteria, **predictive** forecasts something that has not happened yet.' },

      { type: 'tekst', titel: '46. Research limitations', toetsstof: true,
        tekst: 'Every project has limitations: **constraints or challenges that might affect the results**. They are an accepted part of research and must be disclosed in full transparency.\n\nSo you identify them, explain their **potential impact on your specific project**, and where possible describe how you will avoid, minimise or address them. If a limitation cannot be minimised, you must still be transparent about it.\n\nThis is worth 6 points of the CT2 open questions: two limitations at 1 point each, and 2 points per justification. The justification is worth twice the identification, so naming a limitation without explaining its impact throws away most of the marks.' },

      { type: 'tabel', titel: 'The six most common limitations', toetsstof: true,
        kop: ['#', 'Limitation'],
        rijen: [
          ['1', 'Data availability is scarce or insufficient'],
          ['2', 'Necessary data access is restricted'],
          ['3', 'The sample size is small'],
          ['4', 'The sample population is not representative of the larger population'],
          ['5', 'Time constraints: not enough time to conduct the research thoroughly'],
          ['6', 'Budget constraints, given the potential costs of the project']
        ],
        noot: 'And the manual pushes you further: look at the five ethical principles and derive more limitations from Honesty, Independence, Transparency, Responsibility and Scrupulousness.' },

      { type: 'voorbeeld',
        tekst: '**Data availability**: a study on the safety risks of a brand-new type of drone is limited by the lack of accident data, because the problem is recent or rare. Mitigation: supplement with data from similar drone types, or use simulation models.\n\n**Time**: a 5-month study evaluating a 5-month safety programme cannot see the full impact, which only shows after the programme ends. Mitigation: focus on short-term indicators, or compare with similar completed programmes elsewhere.\n\n**Ethics creating a sampling limitation**: a study of safety protocols in extreme work environments excludes high-risk groups (pregnant workers, people with pre-existing conditions) to protect them. That is the right call under Responsibility, and it creates sample population bias, because the findings cannot be generalised to the excluded groups.' },

      { type: 'tekst', titel: '47. Generalisability', toetsstof: true,
        tekst: 'How well the findings from your specific study can be applied to a **broader context**, beyond the conditions of the research. Can the results be applied to the larger population, another country, similar situations, and to what extent?\n\nIdeally research aims for high generalisability, so you should try to make findings as relevant to other groups and situations as possible. But not all findings are equally generalisable: it depends heavily on the design, especially the **representativeness of the sample**.' },

      { type: 'voorbeeld',
        tekst: 'Security checks are found effective at Schiphol. Generalisability asks whether that finding also applies to Rotterdam The Hague Airport or Eindhoven Airport, given their similarities and differences.\n\nA retail chain audits security at one store. To check generalisability it runs similar audits at several locations in different regions. If the measures hold across store settings, with a representative sample and a large enough sample size, the chain can reasonably apply the practices across the whole chain.' },

      { type: 'tekst', titel: '48. Participant versus respondent', toetsstof: true,
        tekst: 'Both terms refer to people providing data, and they are sometimes used interchangeably. Being precise clarifies your method.\n\n**Respondent**: someone who answers specific, often **closed-ended** questions, as in a survey. Input usually feeds **quantitative** analysis.\n**Participant**: someone who **actively takes part** in the research process, in interviews, focus groups, experiments or ethnographic observation. Input usually feeds **qualitative** analysis.' },

      { type: 'voorbeeld',
        tekst: 'In an online security project, users of a banking platform are **respondents** to a questionnaire on login behaviour, password practices and responses to security prompts. Some of them are then invited to become **participants** in a qualitative follow-up interview about their impressions of online security.\n\nSame people, different role, because the method changed.' },

      { type: 'tekst', titel: '49. Population versus sample population', toetsstof: true,
        tekst: '**Population** (or target population) is the general group the study is about: the larger group you want to draw conclusions about.\n\n**Sample population** is the smaller, more manageable group you actually study, selected to be representative of that population, so you only have to collect data from a portion of it.\n\nIn statistical or generalisable studies a **large sample size** is critical, because the larger the sample, the higher the likelihood of a representative distribution. In practice researchers often have to work with less: only a few people are available, or have the expert knowledge, or the method (interviews) is too time-consuming. Aim for as representative as possible, and where practical limits force a smaller or weaker sample, **that becomes a research limitation**.' },

      { type: 'waarschuwing', titel: 'Vulnerable populations',
        tekst: 'When your research involves groups considered vulnerable (children, refugees, victims of crime, people with cognitive impairments, marginalised populations), extra ethical care is required:\n\n**Truly informed consent**, being as transparent as possible including about risks they take by participating.\n**Rigorous anonymity**: anonymise all data, safeguard identifiable sensitive data behind 2FA and encryption.\n**Minimising harm and burden**: political or social discrimination, time spent, emotional harm, financial costs.\n\nYour design and ethical review must explicitly address how you safeguard their wellbeing and how the research benefits them.' },

      { type: 'voorbeeld',
        tekst: 'Population: students and staff at all primary schools in The Hague. Sample population: students and staff at one primary school in The Hague. If that school is representative, findings on evacuation preparedness can be generalised to similar primary schools in the city.' },

      { type: 'tekst', titel: '50. Representative versus unrepresentative sample', toetsstof: true,
        tekst: 'A **representative** sample is one whose key variables and characteristics closely match those of the target population: similar proportions of age, gender, income and so on. Findings can usually be generalised.\n\nAn **unrepresentative** sample does not accurately reflect the population, so findings **cannot** be generalised to it. It shows **sample bias**: **overrepresentation** when a group appears disproportionately compared with its actual presence in the population, **underrepresentation** when a group is missing or insufficiently present.\n\nYou can still take limited insights from unrepresentative data, as long as you are transparent about the lack of representativeness.' },

      { type: 'voorbeeld',
        tekst: 'A study of cybersecurity awareness among users of the platform "Talkers" recruits participants through a post on the platform. Very active users are overrepresented, less active users underrepresented, and the findings would overestimate awareness, because active users are probably more aware. The fix: also reach out by email, and actively select participants across user segments (activity level, age, location).\n\nFor public opinion on neighbourhood policing in one neighbourhood of The Hague, the sample must include diverse backgrounds: income, education, employment, age, religion, ethnic background. Only then can the findings support policy decisions for the whole neighbourhood.' },

      { type: 'tekst', titel: '51. Independent versus dependent variables', toetsstof: true,
        tekst: 'A **variable** is a characteristic or aspect that can be measured, manipulated or counted. Age, political beliefs, gender, education level, income, exposure to an intervention. Essentially anything that can vary between people or situations, or for one person or situation over time.\n\n**Independent variable (IV)**: the one you change during your research. Also called the manipulated, input or **cause** variable.\n**Dependent variable (DV)**: the one you measure. Also called the responding, output or **effect** variable. Its value changes depending on the value of the IV(s).' },

      { type: 'voorbeeld',
        tekst: 'In a manufacturing plant safety study, the DV is the **frequency of safety incidents per month**. The IV is **safety training provided** (0 hours versus 10 hours). The researchers want to know whether more training reduces incidents.\n\nThis one example runs through the next four concepts in the manual, so keep it in mind.' },

      { type: 'tekst', titel: '52. Control variables', toetsstof: true,
        tekst: 'Also called the **constant** variable. When you test whether A causes B, you must make sure nothing else interferes. Control variables are kept **unchanged** throughout the study, so you can be sure the DV is not being affected by them.\n\nIf you do not intentionally control these, you cannot be sure your results are valid.' },

      { type: 'voorbeeld',
        tekst: 'Same plant study. A control variable is personal protective equipment. Give everyone the same PPE and you can attribute changes to the training.\n\nIf one group has better helmets than the other, you will never know whether the lower accident rate came from your training or from the helmets.' },

      { type: 'tekst', titel: '53. Confounding variables', toetsstof: true,
        tekst: 'An **external, often hidden** factor that affects **both** the independent and the dependent variable, without you being aware of it. It distorts the cause-and-effect relationship and leads to misleading conclusions, because you cannot tell whether the effect came from your IV or from the confounder.\n\nThe difference from a control variable is awareness: a control variable is one you spotted and held constant. A confounding variable is one you did not spot.' },

      { type: 'voorbeeld',
        tekst: 'Same plant study. A new manager is hired who is very strict. That manager makes people take the training (IV) **and** forces them to be safer (DV) regardless of the training. You conclude the training worked brilliantly; mostly it was the manager.' },

      { type: 'tekst', titel: '54. Mediating variables', toetsstof: true,
        tekst: 'Also called intermediary or intervening. It shows that the connection between IV and DV is **not direct**, but runs **via** another variable in between. A stepping stone that explains **how** or **why** the relationship happens.' },

      { type: 'voorbeeld',
        tekst: 'Safety training provided (IV) leads to **better safety practices** (mediator), which in turn reduce the frequency of safety incidents (DV).\n\nThe training works **through** the practices.' },

      { type: 'tekst', titel: '55. Moderating variables', toetsstof: true,
        tekst: 'Also called interfering. It affects the **strength or direction** of the relationship between IV and DV, making the effect more or less substantial. It explains **for whom** or **under what conditions** the relationship holds, and why the cause-effect link is strong for one group and weak for another.' },

      { type: 'voorbeeld',
        tekst: 'Employee experience level. Training drastically reduces accidents for newly hired employees but has almost no effect on veterans who already know it. So teams with many new hires see a bigger drop than teams full of veterans.\n\nExperience level does not sit between training and incidents. It turns the effect up or down.' },

      { type: 'slimmer', titel: 'The four non-obvious variables in one question each',
        tekst: '**Control**: did I hold it constant on purpose? \n**Confounding**: is it secretly driving both sides?\n**Mediating**: does the effect travel through it? (IV \u2192 M \u2192 DV)\n**Moderating**: does it make the effect stronger or weaker for some group? (M pointing at the arrow)\n\nMediator sits **on** the arrow; moderator points **at** the arrow. That picture is figure 7 in the manual, and it is the fastest way to answer these MCQs.' },

      { type: 'tekst', titel: '56. Relationships between variables', toetsstof: true,
        tekst: 'Understanding relationships between variables helps predict what could happen and reflect on why things happened. **Correlation** is a statistical analysis measuring the degree of relationship between variables in a sample.\n\nBut two variables moving together does not mean one caused the other. If IV "A" correlates with DV "B", there are four possibilities:\n\n**(1) A causes B** \u00b7 a causal relationship, if there is proof that a change in A and nothing else directly creates a change in B. This usually needs a strictly controlled experiment.\n**(2) B causes A** \u00b7 reverse causality.\n**(3) A confounding variable C causes both** \u00b7 A and B are not directly related.\n**(4) No relationship at all** \u00b7 a coincidence, known as a **spurious correlation**.' },

      { type: 'voorbeeld',
        tekst: '**(1) Causal**: a fire department systematically improves response times (IV) while keeping equipment and team size constant (control variables) and observes a consistent 25% reduction in property damage (DV). Controlled for other factors, so they can claim causation.\n\n**(2) Reverse**: "firefighters cause damage", because more of them turn up at more damaged buildings. Actually the severity of the fire causes both the damage and the dispatcher sending more firefighters. The arrow points backwards.\n\n**(3) Confounded**: ice cream sales at the station correlate with brush fires. Summer heat is driving both.\n\n**(4) Spurious**: the fire chief\u2019s age and the national price of water both rose steadily over 20 years. Time and inflation. Pure coincidence.' },

      { type: 'tekst', titel: '57. Hypothesis', toetsstof: true,
        tekst: 'A formal **statement or prediction of what the researcher expects to find**. Your general assumptions, which give your research a direction to start from and which can change a lot along the way.\n\nTwo requirements: it must be **testable** (verifiable through research), and it must try to predict a **causal relationship between variables** ("if I do X, then Y will happen").\n\nYour hypothesis is the **predicted answer** to your research question.' },

      { type: 'voorbeeld',
        tekst: 'RQ: to what extent does the implementation of the new safety training programme lead to a reduction in workplace accidents?\nHypothesis: the implementation of the new safety training programme, focused on PPE use, is causally linked to the observed reduction in workplace accidents.\n\nRQ: what is the effect of increased password complexity requirements on the number of unauthorised access attempts?\nHypothesis: if the platform requires more complex passwords, there will be a significant decrease in successful unauthorised access attempts.' },

      { type: 'tekst', titel: '58. Reliability', toetsstof: true,
        tekst: '**Reliability is about consistency.** The degree to which a study, measure, method or variable produces the **same results** when applied to similar scenarios over and over.\n\nAsk: does it measure in a consistent and stable way? A reliable instrument gives similar results when repeated with similar groups.\n\nReliability is a **prerequisite for validity**. If your tool is broken, it cannot give you the correct answer.' },

      { type: 'voorbeeld',
        tekst: 'Non-research: a fire alarm is reliable if it sounds every single time the button is pressed. Press it 10 times and get 6 rings and it is unreliable; you cannot depend on it in an emergency.\n\nResearch: an annual HR satisfaction survey that produces consistent results on "perceived safety" year after year, assuming actual safety has not changed, is reliable. That lets HR track real trends rather than random noise.' },

      { type: 'tekst', titel: '59. Validity', toetsstof: true,
        tekst: '**Validity is about accuracy.** The degree to which a study, measure or method accurately reflects the concept the researcher is trying to measure. Ask: does it measure what it is supposed to measure?\n\nA method can be reliable and still not valid: consistently measuring the wrong thing.\n\n**External validity**: how far the results are generalisable or transferable beyond the setting of the study. Can it be applied in the real world, in other relevant contexts (do findings from The Hague also hold for Leiden)?\n**Internal validity**: the rigour with which the study was conducted. A solid design, methods carefully followed, clear decisions about what was and was not measured, and alternative explanations for causal relationships taken into account.' },

      { type: 'voorbeeld',
        tekst: '**External**: an emergency response training programme for first responders in one urban area. If its effectiveness generalises to other urban areas, populations or times, external validity is high.\n\n**Internal**: a cybersecurity team investigating a breach proves a specific malware caused it and rules out human error and insider threats (confounding variables). High internal validity: high accuracy within its own context, which comes from controlling variables and avoiding confounders.' },

      { type: 'slimmer', titel: 'Reliable but not valid',
        tekst: 'A bathroom scale that always reads 4 kg too heavy is perfectly reliable and completely invalid. Same result every time, wrong result every time.\n\nThe reverse cannot happen, which is why reliability is called a prerequisite: an instrument that gives you a different answer each time cannot be accurately measuring anything.' },

      { type: 'tekst', titel: '60. Conceptual framework and conceptual model', toetsstof: true,
        tekst: 'You start with a vague topic, like "accidents". Before you can measure it you must pin down its meaning. That starts with **concepts**: the abstract ideas you want to study.\n\nTo make concepts usable you **demarcate** them: draw a boundary and state exactly what the concept means in your research. You often lean on **pre-existing theories** to do that, since they already worked out the boundaries, which saves a lot of time. Then you break the concept down into **variables** (the aspects that can vary) and **indicators** (the concrete things you can count or measure).\n\n**Conceptual framework** = the script. The written theoretical argument that links your variables together and explains **why** you believe A affects B.\n**Conceptual model** = the map. A simplified visual diagram: boxes for variables, arrows for relationships. **The direction of the arrows matters immensely**, because they tell the story of what leads to what.' },

      { type: 'voorbeeld',
        tekst: 'You want to study why accidents happen in a factory. You choose **Accident Theory**, which holds that accidents are caused by a combination of unsafe conditions, unsafe acts and management failures. So the concept "accidents" breaks into three variables.\n\n**Unsafe conditions** (indicators: slippery floors, faulty equipment, missing safety signs) create an environment where accidents can occur.\n**Unsafe acts** (indicators: workers skipping PPE, ignoring safety rules, operating machinery untrained) can lead to accidents directly.\n**Management failures** (no safety training, equipment, supervision) do not cause accidents directly, but poor management produces a messy factory and untrained workers, which then combine and amplify each other.\n\nThe manual sets you a puzzle: find the **six relationships** between the variables in that model. Tip from the manual: each connection between concepts counts as a different relationship.' },

      { type: 'tekst', titel: 'End of the concept list',
        tekst: 'That is all 52 entries of appendix 7. Move to Applying it for the exercises, and to Check yourself for the quiz.' },

      /* ---------------- begrippen voor flashcards ---------------- */

      { type: 'begrippen', titel: 'Part 1 terms', items: [
        { begrip: 'Informal approach', definitie: 'Drawing conclusions from everyday observations and personal opinion rather than standard research methods; quick and flexible, but vulnerable to bias.' },
        { begrip: 'Systematic approach', definitie: 'Observations based on adequate research, following standard methods according to a fixed methodological plan; essential in high-stakes situations.' },
        { begrip: 'Research', definitie: 'A systematic, organised investigation into a topic to establish facts and draw conclusions, based on the scientific method.' },
        { begrip: 'Fundamental research', definitie: 'Pure or basic research that explores topics and develops theories and hypotheses, aimed at improving knowledge for its own sake.' },
        { begrip: 'Applied research', definitie: 'Research aimed at resolving a specific, practical problem; results are usually valid for one situation or similar contexts.' },
        { begrip: 'Research methods', definitie: 'The specific procedures, strategies and techniques used to systematically collect and analyse data.' },
        { begrip: 'Research problem', definitie: 'A statement about an area of concern, knowledge gap or situation needing improvement; it points out the need for investigation and sets boundaries.' },
        { begrip: 'Research objective', definitie: 'A practical, action-oriented statement of what you aim to achieve, aligned with the research question; use SMART.' },
        { begrip: 'Research question', definitie: 'The single central question the whole project is designed to answer.' },
        { begrip: 'Research sub-questions', definitie: 'Secondary questions that break the main question into manageable parts and stay within its limits; usually 3-5 in SSMS.' },
        { begrip: 'Research ethics', definitie: 'The ethical principles guiding research; in this course the five from the Netherlands Code of Conduct: honesty, scrupulousness, transparency, independence, responsibility.' },
        { begrip: 'Data', definitie: 'A collection of raw facts, quantitative or qualitative, that require processing before they mean anything.' },
        { begrip: 'Information', definitie: 'The result of organising and interpreting raw data, putting data points into a meaningful context.' },
        { begrip: 'Fact (empirical evidence)', definitie: 'Information that is demonstrably true and provable through observation or measurement; traceable to reliable evidence and open to checking.' },
        { begrip: 'Theory', definitie: 'A logically consistent explanation of a behaviour or set of events, based on known principles and validated by empirical evidence.' },
        { begrip: 'Framework', definitie: 'A structure, model or tool offering a step-by-step approach to analysing information or solving a problem, e.g. SWOT, risk matrix, 6W.' },
        { begrip: 'Opinion', definitie: 'A personal view or belief about a topic, not necessarily based on or supported by empirical evidence.' },
        { begrip: 'Cognitive biases', definitie: 'Unconscious systematic errors in thinking that cause a misperception of reality; five key ones in this course, including availability heuristic and social desirability.' },
        { begrip: 'Logical fallacies', definitie: 'Errors in reasoning in how claims and arguments are constructed; unlike biases they can be deliberate. Ten key ones in this course.' },
        { begrip: 'Qualitative research', definitie: 'Gathering non-numerical data about experiences, emotions and meanings; explores how and why, through interviews and literature reviews.' },
        { begrip: 'Quantitative research', definitie: 'Gathering numerical and statistical data to uncover patterns and make generalisations; answers how many, how much, how often.' },
        { begrip: 'Reading techniques', definitie: 'Skimming (overview), scanning (specific information), detail reading (every word) and critical reading (analysing arguments and evidence).' },
        { begrip: 'Deductive thinking', definitie: 'Top-down reasoning from a general theory to a specific conclusion; if the premises are true the conclusion must be. Associated with quantitative research.' },
        { begrip: 'Inductive thinking', definitie: 'Bottom-up reasoning from specific observations to general patterns; the conclusion is broader than the evidence and not guaranteed. Used in exploratory research.' },
        { begrip: 'Mixed-methods research', definitie: 'Combining qualitative and quantitative methods in one study for a more holistic understanding.' },
        { begrip: 'Multi-method research', definitie: 'Using two or more methods from the same family (all qualitative or all quantitative) in one study.' },
        { begrip: 'Triangulation', definitie: 'Using multiple viewpoints to make findings more reliable; data triangulation uses different sources, methodological triangulation different methods.' },
        { begrip: 'Holism', definitie: 'Understanding that a system is more than the sum of its parts, so you must look at the whole and at the connections between the parts.' }
      ]},

      { type: 'begrippen', titel: 'Part 2 terms', items: [
        { begrip: 'Research project', definitie: 'A scientific effort to answer a research question within a limited time, following a structured approach to achieve an observable result.' },
        { begrip: 'Preliminary research', definitie: 'The initial phase finding basic information (who, what, when, where), checking controversies and source availability; often using the 6W framework.' },
        { begrip: 'Background research', definitie: 'Extensive literature research conducted after the design is solid, to get familiar with what is already known before collecting your own data.' },
        { begrip: '6W problem analysis framework', definitie: 'A framework analysing a problem from six angles: what, why, where, who, when and which/how.' },
        { begrip: 'Research proposal', definitie: 'A formal document explaining what you plan to research, why it is worth researching, and how you will conduct it.' },
        { begrip: 'Case study', definitie: 'A detailed investigation of one particular problem, person, group or event, to draw lessons from that single example.' },
        { begrip: 'Sources', definitie: 'Where information comes from; can be primary or secondary, and white or grey literature. Not all are equally reliable.' },
        { begrip: 'Citing', definitie: 'Giving credit to the sources you used, in SSMS using APA style; narrative or parenthetical. Avoids plagiarism and justifies your arguments.' },
        { begrip: 'Primary sources', definitie: 'Raw data and first-hand evidence not interpreted by someone else: transcripts, observations, raw statistics, equipment logs.' },
        { begrip: 'Secondary sources', definitie: 'Second-hand information and interpretations of primary sources: textbooks, reviews, analyses, histories, biographies.' },
        { begrip: 'White literature', definitie: 'Traditionally published, peer-reviewed academic work: scholarly journal articles and academic press books.' },
        { begrip: 'Academic articles', definitie: 'Formal texts by experts published in academic journals after peer review, structured as abstract, introduction, methodology, results, conclusion.' },
        { begrip: 'Peer-review', definitie: 'The formal process where experts in the field evaluate a paper before publication; the quality control standard of scholarly publishing.' },
        { begrip: 'Grey literature', definitie: 'Material produced outside traditional academic publishing (government reports, theses, conference proceedings, corporate reports); not peer-reviewed.' }
      ]},

      { type: 'begrippen', titel: 'Part 3 terms', items: [
        { begrip: 'Applied research design (ARD)', definitie: 'The blueprint of an applied project: research problem, objective, question and sub-questions, all logically aligned in a golden thread.' },
        { begrip: 'Demarcation', definitie: 'Setting clear boundaries for your research so it is focused and manageable; checked against the SSMS checklist (focused, relevant, applied, clear, unbiased, ethical, feasible, complex, open-ended, single-topic).' },
        { begrip: 'Types of research questions', definitie: 'Exploratory, descriptive, defining, interpretive/explanatory, comparative, evaluative, prescriptive and predictive; applied sciences lean on descriptive, evaluative and prescriptive.' },
        { begrip: 'Research limitations', definitie: 'Constraints that may affect results, to be identified, justified and where possible mitigated; commonly data availability, data access, sample size, representativeness, time and budget.' },
        { begrip: 'Generalisability', definitie: 'How far findings can be applied beyond the specific study; depends heavily on the representativeness of the sample.' },
        { begrip: 'Participant vs respondent', definitie: 'A respondent answers closed questions such as a survey (quantitative); a participant actively takes part in interviews, focus groups or observation (qualitative).' },
        { begrip: 'Population vs sample population', definitie: 'The population is the whole target group you want conclusions about; the sample population is the smaller group you actually study, ideally representative of it.' },
        { begrip: 'Representative vs unrepresentative sample', definitie: 'A representative sample matches the key characteristics of the population and allows generalisation; an unrepresentative one shows sample bias through over- or underrepresentation.' },
        { begrip: 'Independent variable', definitie: 'The variable you change or manipulate; the cause or input variable.' },
        { begrip: 'Dependent variable', definitie: 'The variable you measure; the effect or output variable, whose value changes with the independent variable.' },
        { begrip: 'Control variable', definitie: 'A variable deliberately kept constant so it cannot affect the dependent variable; without it your results are not valid.' },
        { begrip: 'Confounding variable', definitie: 'A hidden external factor affecting both the independent and dependent variable, distorting the cause-and-effect relationship.' },
        { begrip: 'Mediating variable', definitie: 'An intermediary through which the independent variable affects the dependent variable; explains how or why the relationship happens.' },
        { begrip: 'Moderating variable', definitie: 'A variable affecting the strength or direction of the IV-DV relationship; explains for whom or under what conditions it holds.' },
        { begrip: 'Relationships between variables', definitie: 'Correlation is not causation: A may cause B, B may cause A, a confounder C may cause both, or the correlation may be spurious coincidence.' },
        { begrip: 'Hypothesis', definitie: 'A testable formal prediction of what you expect to find, predicting a causal relationship between variables; the predicted answer to your research question.' },
        { begrip: 'Reliability', definitie: 'Consistency: the degree to which a measure produces the same results in similar scenarios over time. A prerequisite for validity.' },
        { begrip: 'Validity', definitie: 'Accuracy: whether a measure reflects what it is supposed to measure. External validity concerns generalisability, internal validity the rigour of the study.' },
        { begrip: 'Conceptual framework', definitie: 'The written theoretical argument linking your demarcated concepts, variables and indicators, explaining why A affects B.' },
        { begrip: 'Conceptual model', definitie: 'The visual diagram of that framework: boxes for variables, arrows for relationships, with the direction of the arrows carrying the meaning.' }
      ]}
    ]
  },

  {
    id: 'toepassen', titel: 'Applying it',
    blokken: [
      { type: 'uitleg', titel: 'How to use these',
        tekst: 'CT1 is 75% application, and the CT2 open questions are entirely application. So these exercises make you use the concepts on cases rather than repeat definitions. Write your answer first, then open the model answer.' },

      { type: 'oefening', id: 'drm-cl-oef-1', niveau: 'basis',
        vraag: 'A municipality states: "Last year 412 bicycles were reported stolen at Zaandam station. That is 18% more than the year before, which suggests the new bike shed is not working." Label each part of that statement as data, information or fact, and say which part is none of the three.',
        antwoord: '**Data**: the raw figure 412, and the underlying yearly totals. On their own they are raw facts requiring processing.\n\n**Information**: "18% more than the year before". That is the result of organising and interpreting the data points, putting them into a meaningful context.\n\n**Fact**: both the 412 and the 18% qualify, provided they are traceable to reliable registration figures and open to checking. Note they are time- and context-specific facts, not universal ones.\n\n**None of the three**: "which suggests the new bike shed is not working". That is a conclusion, and as stated it is closer to an **opinion**: no evidence rules out other explanations (more bikes parked, better reporting, a displacement effect). Treating it as a fact would be a causal fallacy.' },

      { type: 'oefening', id: 'drm-cl-oef-2', niveau: 'basis',
        vraag: 'For each of the following, say whether it is fundamental or applied research, and justify it in one sentence.\n\n(a) A laboratory study of how sleep deprivation affects risk perception in general.\n(b) A study for the Port of Rotterdam into why night-shift security guards miss more alarms.\n(c) Developing a new statistical model for measuring social cohesion.\n(d) An evaluation of the camera surveillance policy in the Schilderswijk.',
        antwoord: '(a) **Fundamental**. It aims to improve knowledge about a general mechanism, with no specific client or practical problem attached.\n\n(b) **Applied**. A named organisation, a specific practical problem, and results primarily valid for that context.\n\n(c) **Fundamental**. It develops a method and improves knowledge itself, comparable to the manual\u2019s facial-temperature fear-measurement example.\n\n(d) **Applied**. It evaluates a real policy in a named place with the aim of practical recommendations.\n\nNotice the tell in (b) and (d): a named place and a named client. That is almost always the signature of applied research.' },

      { type: 'oefening', id: 'drm-cl-oef-3', niveau: 'basis',
        vraag: 'A researcher studies fare evasion on Amsterdam trams. She rides fifteen tram lines and observes behaviour (qualitative), and she interviews twelve conductors (qualitative). A colleague says: "So you are doing mixed-methods research." Is he right? What is the correct term, and what would make it mixed-methods?',
        antwoord: 'No, he is wrong. Both observation and interviews are **qualitative** methods, so they come from the same family. This is **multi-method** research.\n\nIt would become **mixed-methods** if she added a quantitative method, for instance a large-scale passenger survey or an analysis of ticket-check data from the transport company.\n\nEither way she is achieving **methodological triangulation**, because the manual is explicit that you can triangulate with multi-method research too, not only with mixed-methods.' },

      { type: 'oefening', id: 'drm-cl-oef-4', niveau: 'gevorderd',
        vraag: 'A study wants to know whether body-worn cameras reduce aggression against ambulance staff. Cameras are issued to crews in one region; aggression incidents are counted per month. Identify a plausible independent, dependent, control, confounding, mediating and moderating variable for this study.',
        antwoord: '**Independent**: whether the crew wears a body-worn camera (yes/no, or hours of use). That is what is being manipulated.\n\n**Dependent**: the number of registered aggression incidents per month. That is what is measured.\n\n**Control**: shift type and time of day, held constant across the compared groups, since night shifts carry more aggression regardless of cameras. Also crew size.\n\n**Confounding**: a simultaneous public information campaign about aggression against emergency workers. It could raise camera acceptance **and** lower aggression, so you would credit the cameras for both.\n\n**Mediating**: patient awareness of being filmed. Cameras \u2192 awareness of being recorded \u2192 fewer incidents. The effect travels through it.\n\n**Moderating**: whether the incident involves alcohol or drug use. Cameras may deter a sober bystander and have no effect at all on someone intoxicated, so it makes the effect stronger or weaker for different groups.\n\nCheck yourself with the picture: the mediator sits **on** the arrow between IV and DV; the moderator points **at** that arrow.' },

      { type: 'oefening', id: 'drm-cl-oef-5', niveau: 'gevorderd',
        vraag: 'Classify each question by type, and say whether it passes the demarcation checklist. If not, name the failing criterion and rewrite it.\n\n(a) Is the camera surveillance in Zaandam city centre effective?\n(b) How can shoplifting be prevented?\n(c) What are the current evacuation procedures at Amsterdam Central Station, and should they be changed?\n(d) Why do so many careless young men cause traffic accidents in The Hague?',
        antwoord: '(a) **Evaluative**, and it fails **open-ended**: it can be answered with yes or no. Rewrite: "To what extent has camera surveillance in Zaandam city centre reduced reported violent incidents since its introduction in 2024?"\n\n(b) **Prescriptive**, and it fails **focused** and **relevant**: no case, no context, no client, no 6W content. Rewrite: "What loss-prevention measures should independent supermarkets in Zaandam implement to reduce shoplifting during evening opening hours?"\n\n(c) A mix of **descriptive** and **prescriptive**, and it fails **single-topic**: it is double-barrelled. Split it. The description becomes a sub-question and the prescription becomes the central question, or the other way around.\n\n(d) **Explanatory**, and it fails **unbiased**: "careless young men" prejudges the cause and leads the reader. It also assumes the premise ("so many") without evidence. Rewrite: "Which factors contribute to the involvement of drivers aged 18 to 24 in road traffic accidents in The Hague?"' },

      { type: 'oefening', id: 'drm-cl-oef-6', niveau: 'gevorderd',
        vraag: 'A student proposes: "I will interview five members of my own football club about their sense of safety in Zaandam, and use the results to advise the municipality on safety policy for the whole town." Identify at least three research limitations and justify the impact of each, in the way CT2 asks for.',
        antwoord: '**Sample size (5)**. Five respondents cannot support conclusions about a town, so any pattern found could easily be coincidence rather than a real trend. Impact: the advice would rest on findings that are not reproducible.\n\n**Representativeness**. A football club overrepresents a narrow slice: likely a specific age range, gender balance and neighbourhood, and people who leave the house in the evening. Impact: perceptions of groups who feel least safe (older residents, people avoiding public space) are systematically underrepresented, so the advice risks being wrong precisely for the people who need it most.\n\n**Generalisability**, following from the two above. Findings from an unrepresentative sample of five cannot be generalised to the target population of all Zaandam residents. Impact: the municipality would be basing town-wide policy on a group it cannot claim to be typical.\n\n**Independence and bias (ethics)**. The student knows the respondents personally, which invites social desirability bias: they will answer what they think their teammate wants to hear. Impact: the data itself becomes less trustworthy, not just the sample.\n\nHow to mitigate: recruit across neighbourhoods, ages and activity levels; increase the sample; anonymise responses; and be transparent about whatever remains unresolved. If it cannot be fixed, you still disclose it.' },

      { type: 'oefening', id: 'drm-cl-oef-7', niveau: 'gevorderd',
        vraag: 'Write a complete applied research design in the CT2 format for this scenario: a housing corporation in Zaandam reports a sharp rise in fire incidents in its high-rise blocks, mostly in flats occupied by elderly residents living alone. It wants to know how to reduce this in the coming year. Include an objective with key actions, one central question, two sub-questions, and two limitations.',
        antwoord: 'This is a model, not the only right answer. Check yours against the rubric rather than against this wording.\n\n**Objective** (approx. 60 words, 2-3 key actions, each starting with an action verb): "Within six months this research aims to deliver the housing corporation an evidence-based set of at least four fire-prevention measures for high-rise flats occupied by elderly residents living alone. To do so, it will **identify** the most common causes of the recent incidents from the corporation\u2019s incident records, **analyse** the fire-safety behaviour and needs of the residents concerned, and **compare** measures that have proven effective at comparable Dutch housing corporations."\n\n**Central question** (15-30 words, one topic, open-ended): "How can the housing corporation reduce fire incidents in its Zaandam high-rise blocks among elderly residents living alone within the coming year?"\n\n**Sub-question 1**: "What are the most common causes of the fire incidents recorded in the corporation\u2019s Zaandam high-rise blocks over the past three years?"\n**Sub-question 2**: "Which fire-prevention measures aimed at elderly residents living alone have proven effective at comparable Dutch housing corporations, and to what extent are they applicable here?"\n\n**Limitation 1 \u00b7 data access.** Incident records and resident details are personal data held by the corporation and the fire service, so access may be restricted or heavily anonymised. Impact: causes may only be reconstructable at an aggregate level, which weakens the link between a specific cause and a specific measure.\n\n**Limitation 2 \u00b7 vulnerable population and sample bias.** Elderly residents living alone are a vulnerable group, so consent and burden must be handled carefully, and the residents willing and able to be interviewed are likely the more mobile and socially connected ones. Impact: the residents at greatest risk are precisely the ones least likely to appear in the sample, which limits generalisability of the behavioural findings.\n\nNotice how each limitation names **what** and then **why it matters for this design**. The justification is worth twice the identification.' }
    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Twelve questions across the three parts',
        vragen: [
          { vraag: 'A researcher interviews eight crisis managers and also runs three focus groups. Which term fits?',
            opties: ['Mixed-methods research', 'Multi-method research', 'Triangulation is impossible here', 'Quantitative research'],
            juist: 1,
            uitleg: 'Interviews and focus groups are both qualitative, so this is multi-method. It still achieves methodological triangulation: the manual says explicitly you can triangulate within one family.' },

          { vraag: '"In 2022, 797,700 crime cases were registered in the Netherlands, down from 1,127,900 in 2012." What is this?',
            opties: ['Data', 'Information', 'Opinion', 'Theory'],
            juist: 1,
            uitleg: 'The raw numbers are data. Put into a comparison over time with meaning attached, they are information. They also happen to be facts, since they are verifiable, but of the four options offered, information is the one that describes the processing that has taken place.' },

          { vraag: 'A study starts with the theory that social control reduces vandalism, derives a hypothesis, and tests it on 900 survey responses. Which reasoning is this, and which type of research does it fit?',
            opties: ['Inductive, qualitative', 'Deductive, quantitative', 'Inductive, quantitative', 'Deductive, qualitative'],
            juist: 1,
            uitleg: 'Theory first, then hypothesis, then testing with large amounts of data: top-down, so deductive, and strongly associated with quantitative research.' },

          { vraag: 'A government agency publishes a technical incident report with its own raw measurement data. How do you classify it?',
            opties: ['White and secondary', 'Grey and primary', 'White and primary', 'Grey and secondary'],
            juist: 1,
            uitleg: 'It is outside traditional peer-reviewed academic publishing, so grey. It contains first-hand raw evidence, so primary. White/grey and primary/secondary are two separate axes.' },

          { vraag: 'Which of these is the clearest violation of the principle of Independence?',
            opties: ['Failing to cite a source properly', 'A funder\u2019s contract allowing it to block publication of unfavourable results', 'Not protecting participants from psychological harm', 'Choosing an inappropriate research method'],
            juist: 1,
            uitleg: 'Independence means your process is guided by scientific considerations, not external ones. A funder able to suppress results is the textbook breach. Citation is Honesty, harm is Responsibility, method choice is Scrupulousness.' },

          { vraag: '"To what extent did the 2024 stewarding programme reduce incidents at Zaandam football matches?" Which question type is this?',
            opties: ['Descriptive', 'Predictive', 'Evaluative', 'Prescriptive'],
            juist: 2,
            uitleg: 'It assesses the effectiveness of something that already happened against criteria. "To what extent was X effective" is the standard evaluative phrasing. Predictive would forecast something not yet observed.' },

          { vraag: 'A survey instrument gives almost identical results every time it is repeated with similar groups, but the questions actually measure how much people trust the police rather than how safe they feel. What is true?',
            opties: ['Reliable and valid', 'Reliable but not valid', 'Valid but not reliable', 'Neither reliable nor valid'],
            juist: 1,
            uitleg: 'Consistency is reliability, and it is there. Accuracy is validity, and it is not: the instrument consistently measures the wrong concept. Reliability is a prerequisite for validity, not a guarantee of it.' },

          { vraag: 'Training reduces workplace accidents because it first changes daily safety practices, which then reduce incidents. "Safety practices" is a:',
            opties: ['Control variable', 'Confounding variable', 'Mediating variable', 'Moderating variable'],
            juist: 2,
            uitleg: 'The effect travels through it: IV to mediator to DV. A moderator would instead make the effect stronger or weaker for a particular group.' },

          { vraag: 'Which sequence is correct?',
            opties: ['Background research, then preliminary research, then the research design', 'Preliminary research, then the research design, then background research', 'The research design, then preliminary research, then background research', 'Preliminary and background research happen simultaneously, before the design'],
            juist: 1,
            uitleg: 'Preliminary research scopes the topic (who, what, when, where) and feeds the design. Extensive background literature research follows once the design is solid, and in this programme that is semester 2 material.' },

          { vraag: 'Participants for a study on cybersecurity awareness sign up through a post on the platform being studied. What is the main problem?',
            opties: ['The sample is too large to analyse', 'Active users are overrepresented, so results are not generalisable', 'It breaches the principle of Scrupulousness', 'It makes the study qualitative rather than quantitative'],
            juist: 1,
            uitleg: 'Self-selection through the platform overrepresents very active users and underrepresents inactive ones, which is sample bias. Awareness would be overestimated, and the findings cannot be generalised to all users.' },

          { vraag: 'Ice cream sales at a station correlate with the number of brush fires. Which possibility does this illustrate?',
            opties: ['A causes B', 'B causes A (reverse causality)', 'A confounding variable C causes both', 'A spurious correlation with no relationship at all'],
            juist: 2,
            uitleg: 'Summer heat drives both ice cream sales and brush fires. A and B are statistically related with no direct link. A spurious correlation would be a pure coincidence like the fire chief\u2019s age and the price of water.' },

          { vraag: 'Which pair correctly describes the conceptual framework and the conceptual model?',
            opties: ['The framework is the visual diagram; the model is the written argument', 'The framework is the written argument linking variables; the model is the visual diagram of it', 'They are two words for the same thing', 'The framework is the theory itself; the model is the hypothesis'],
            juist: 1,
            uitleg: 'The manual\u2019s image: the framework is the script, the model is the map. Boxes for variables, arrows for relationships, and the direction of the arrows carries the meaning.' }
        ]},

      { type: 'checklist', titel: 'Before the quizzes and CT1, can you do this?', items: [
        'Define all 52 concepts without looking',
        'Give one safety and security example of your own for each concept in part 1',
        'Tell apart data, information, fact and opinion in a single paragraph of text',
        'Explain the difference between mixed-methods and multi-method in one sentence',
        'Name the five ethical principles and match a breach to each',
        'Apply the 6W framework to a case text and write out the six answers',
        'Distinguish primary/secondary from white/grey on both axes at once',
        'Write an ARD with all four components and check it against the demarcation checklist',
        'Classify any research question by type',
        'Identify all six variable types in a described study',
        'Name two limitations for any design and justify their impact',
        'Explain why reliability is a prerequisite for validity'
      ]},

      { type: 'bronnen', titel: 'Where this comes from', items: [
        { apa: 'Carinhas, J., & Lindhout, I. (2026). Demystifying Research Methods course manual (SSMS-1RM1-25), appendix 7: Concept list, pp. 15-52. The Hague University of Applied Sciences.' },
        { apa: 'Verhoeven, N. (2019). Doing research: The hows and whys of applied research. Boom. Sections 1.1, 1.2, 3.1-3.4 and 8.1.1.' },
        { apa: 'van Tulder, R. (2018). Getting all the motives right, pp. 80-81 and 88-90.' },
        { apa: 'KNAW, NFU, NWO, TO2, Vereniging Hogescholen, & VSNU (2018). Netherlands Code of Conduct for Research Integrity, pp. 13-14.' },
        { apa: 'Edmonds, W. A., & Kennedy, T. D. (2017). A primer of the scientific method and relevant components (figure 1).' }
      ]}
    ]
  }
];

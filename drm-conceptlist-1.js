/* ============================================================
   Demystifying Research Methods — Concept list, part 1 · Intro to Research Methods
   Course manual appendix 7 (pp. 15-30)
   ============================================================

   Deel 1 van drie. De conceptlijst staat opgesplitst in drie
   lessen onder 'Extra naslagwerken', in dezelfde volgorde als de
   manual. Structurele dingen (LESSTOF-sleutel, tab-ids, veldnamen)
   blijven Nederlands: dat is bedrading, geen tekst.
   ============================================================ */

LESSTOF['demystifying-research-methods/conceptlist-1'] = [

  {
    id: 'voor', titel: 'Before you start',
    blokken: [
      { type: 'leerdoelen', items: [
        'Define the 28 concepts of part 1 in your own words',
        'Tell apart the pairs that are routinely confused: informal/systematic, fundamental/applied, data/information/fact, theory/framework, bias/fallacy, deductive/inductive, mixed/multi-method',
        'Give one safety and security example of your own for every concept',
        'Name the five ethical principles and match a breach to each',
        'Recognise the four reading techniques and say when you would use which'
      ]},

      { type: 'uitleg', titel: 'What this is',
        tekst: 'Part 1 of the DRM concept list (appendix 7 of the course manual), worked out as a lesson. The concept list is not background reading: it is **the** examinable core of this course.\n\nThis part covers what research is, how it differs from everyday thinking, and the vocabulary you need before you can plan anything. **Quiz 1 is limited to exactly these concepts**, and CT1 leans on them almost entirely. They come back, harder, in CT3.' },

      { type: 'waarschuwing', titel: 'Definitions in this course are not general definitions',
        tekst: 'The manual warns about this explicitly: research methods are used in many fields, so you will find slightly different definitions online and in other textbooks. For every assessment, **the definition in the course materials wins**, even where another source is arguably better.' },

      { type: 'tabel', titel: 'Where part 1 sits', toetsstof: true,
        kop: ['Part', 'Concepts', 'Quiz', 'Tested in'],
        rijen: [
          ['1 \u00b7 Intro to Research Methods', '28', 'Quiz 1 (this part only)', 'CT1 (20 MCQ, 20%) and CT3'],
          ['2 \u00b7 Understanding the problem', '14', 'Quiz 2', 'CT2 (50%)'],
          ['3 \u00b7 Planning your investigation', '20', 'Quiz 3', 'CT2 and CT3 (30%)']
        ]},

      { type: 'slimmer', titel: 'How to use this page',
        tekst: 'CT1 asks you to **apply** concepts (75% of the questions), not to reproduce definitions. So for each entry, force yourself to invent one safety and security example of your own. If you cannot, you do not know the concept well enough yet.\n\nUse the heading bar at the top of Core material to work through eight or ten concepts at a time and tick them off. The Flashcards tab is generated automatically from the term block at the end.' }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [

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

    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Six questions on part 1',
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

          { vraag: 'Which of these is the clearest violation of the principle of Independence?',
            opties: ['Failing to cite a source properly', 'A funder\u2019s contract allowing it to block publication of unfavourable results', 'Not protecting participants from psychological harm', 'Choosing an inappropriate research method'],
            juist: 1,
            uitleg: 'Independence means your process is guided by scientific considerations, not external ones. A funder able to suppress results is the textbook breach. Citation is Honesty, harm is Responsibility, method choice is Scrupulousness.' },

          { vraag: 'A documentary interviews six people affected by a policy and concludes the policy has failed. Which approach is this?',
            opties: ['Systematic, because it uses interviews', 'Informal, because it relies on selected personal opinions without a methodological plan', 'Applied research, because it concerns a real policy', 'Qualitative research, therefore valid'],
            juist: 1,
            uitleg: 'The manual makes exactly this point about documentaries. Informal talks with a few selected people giving personal opinions is an informal approach, however professional it looks, and it is not acceptable where safety is at stake.' },

          { vraag: 'Which statement about a theory is correct in the research sense of the word?',
            opties: ['It is an educated guess awaiting proof', 'It is a logically consistent explanation validated by empirical evidence, which can change as more research is done', 'It is a step-by-step tool for analysing a problem', 'It is the predicted answer to a research question'],
            juist: 1,
            uitleg: 'A guess is the everyday sense. A step-by-step tool is a framework. The predicted answer to a research question is a hypothesis.' },

        ]},

      { type: 'checklist', titel: 'Before quiz 1 and CT1, can you do this?', items: [
        'Define all 28 concepts of part 1 without looking',
        'Give one safety and security example of your own for each',
        'Tell apart data, information, fact and opinion in a single paragraph of text',
        'Explain the difference between mixed-methods and multi-method in one sentence',
        'Say why an investigation is not automatically research',
        'Name the five ethical principles and match a breach to each',
        'Explain what makes an approach systematic rather than informal',
        'Pair deductive with quantitative and inductive with exploratory, and say why',
        'Distinguish a cognitive bias from a logical fallacy',
        'Name the four reading techniques and when you use each'
      ]},

      { type: 'bronnen', titel: 'Where this comes from', items: [
        { apa: 'Carinhas, J., & Lindhout, I. (2026). Demystifying Research Methods course manual (SSMS-1RM1-25), appendix 7: Concept list. The Hague University of Applied Sciences.' },
        { apa: 'Verhoeven, N. (2019). Doing research: The hows and whys of applied research. Boom. Sections 1.1, 1.2, 3.1-3.4 and 8.1.1.' },
        { apa: 'van Tulder, R. (2018). Getting all the motives right, pp. 80-81 and 88-90.' },
        { apa: 'KNAW, NFU, NWO, TO2, Vereniging Hogescholen, & VSNU (2018). Netherlands Code of Conduct for Research Integrity, pp. 13-14.' },
        { apa: 'Edmonds, W. A., & Kennedy, T. D. (2017). A primer of the scientific method and relevant components (figure 1).' }
      ]}
    ]
  }
];

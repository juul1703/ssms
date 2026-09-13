/* ============================================================
   Demystifying Research Methods — Concept list, part 3 · Planning your investigation
   Course manual appendix 7 (pp. 37-52)
   ============================================================

   Deel 3 van drie. De conceptlijst staat opgesplitst in drie
   lessen onder 'Extra naslagwerken', in dezelfde volgorde als de
   manual. Structurele dingen (LESSTOF-sleutel, tab-ids, veldnamen)
   blijven Nederlands: dat is bedrading, geen tekst.
   ============================================================ */

LESSTOF['demystifying-research-methods/conceptlist-3'] = [

  {
    id: 'voor', titel: 'Before you start',
    blokken: [
      { type: 'leerdoelen', items: [
        'Define the 20 concepts of part 3 in your own words',
        'Name the four components of an applied research design and explain the golden thread',
        'Check any statement or question against the ten-point demarcation checklist',
        'Classify a research question by type (exploratory, descriptive, defining, explanatory, comparative, evaluative, prescriptive, predictive)',
        'Name two research limitations for a design and justify their impact',
        'Identify the role of each variable type in a described study, and tell correlation from causation',
        'Explain why reliability is a prerequisite for validity'
      ]},

      { type: 'uitleg', titel: 'What this is',
        tekst: 'Part 3 of the DRM concept list. Twenty concepts on building the design itself, plus the variable vocabulary.\n\nThis is **quiz 3**, and together with part 2 it carries the **CT2 open questions**, where you write a complete applied research design of about 250 words. It is also the biggest single block of **CT3**, which is 60% evaluating and 20% analysing.' },

      { type: 'tabel', titel: 'What the CT2 open questions are worth', toetsstof: true,
        kop: ['Component', 'Points', 'Where it comes from'],
        rijen: [
          ['Research objective, with 2-3 key actions (~60 words)', '5', 'Applied research design'],
          ['One central research question (15-30 words)', '7', 'Demarcation, question types'],
          ['Two sub-questions (30-50 words)', '7', 'Demarcation'],
          ['Two research limitations (~80 words)', '6', 'Research limitations, ethics, sampling']
        ],
        noot: 'Note the split inside the limitations: 1 point per limitation identified, 2 points per justification. Naming a limitation without explaining its impact throws away two thirds of the marks.' },

      { type: 'waarschuwing', titel: 'Base your answers on the provided texts',
        tekst: 'For the applied research design in CT2 you must base your answers **only** on the information in the four provided texts.\n\nThe one exception the manual allows: your **justifications of the limitations** may use logical arguments that go beyond the texts, as long as they are relevant to your design.' }
    ]
  },

  {
    id: 'kern', titel: 'Core material',
    blokken: [

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
        antwoord: 'This is a model, not the only right answer. Check yours against the rubric rather than against this wording.\n\n**Objective** (approx. 60 words, 2-3 key actions, each starting with an action verb): "Within six months this research aims to deliver the housing corporation an evidence-based set of at least four fire-prevention measures for high-rise flats occupied by elderly residents living alone. To do so, it will **identify** the most common causes of the recent incidents from the corporation\u2019s incident records, **analyse** the fire-safety behaviour and needs of the residents concerned, and **compare** measures that have proven effective at comparable Dutch housing corporations."\n\n**Central question** (15-30 words, one topic, open-ended): "How can the housing corporation reduce fire incidents in its Zaandam high-rise blocks among elderly residents living alone within the coming year?"\n\n**Sub-question 1**: "What are the most common causes of the fire incidents recorded in the corporation\u2019s Zaandam high-rise blocks over the past three years?"\n**Sub-question 2**: "Which fire-prevention measures aimed at elderly residents living alone have proven effective at comparable Dutch housing corporations, and to what extent are they applicable here?"\n\n**Limitation 1 \u00b7 data access.** Incident records and resident details are personal data held by the corporation and the fire service, so access may be restricted or heavily anonymised. Impact: causes may only be reconstructable at an aggregate level, which weakens the link between a specific cause and a specific measure.\n\n**Limitation 2 \u00b7 vulnerable population and sample bias.** Elderly residents living alone are a vulnerable group, so consent and burden must be handled carefully, and the residents willing and able to be interviewed are likely the more mobile and socially connected ones. Impact: the residents at greatest risk are precisely the ones least likely to appear in the sample, which limits generalisability of the behavioural findings.\n\nNotice how each limitation names **what** and then **why it matters for this design**. The justification is worth twice the identification.' },

    ]
  },

  {
    id: 'checken', titel: 'Check yourself',
    blokken: [
      { type: 'quiz', titel: 'Six questions on part 3',
        vragen: [
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
            uitleg: 'The manual\u2019s image: the framework is the script, the model is the map. Boxes for variables, arrows for relationships, and the direction of the arrows carries the meaning.' },

        ]},

      { type: 'checklist', titel: 'Before quiz 3, CT2 and CT3, can you do this?', items: [
        'Name the four ARD components and explain the golden thread between them',
        'Run any question past all ten demarcation criteria',
        'Classify any research question by type',
        'Identify all six variable types in a described study',
        'Explain the difference between a mediator and a moderator using the arrow picture',
        'Name the four possible reasons behind a correlation',
        'Name two limitations for any design and justify their impact',
        'Explain why reliability is a prerequisite for validity',
        'Say what makes a sample representative and what happens when it is not',
        'Write a complete ARD of about 250 words within the CT2 word limits'
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

/* ============================================================
   Intro to Safety & Security: "To remember" tabbladen (recap)
   Per les de echte kernprincipes op een rij. Wordt met
   voegRecapToe() (lesstof.js) direct na de laatste kernstof-tab
   ingevoegd. Moet dus na de lesbestanden en voor vakken.js laden.
   ============================================================ */

voegRecapToe("intro-to-safety-security/slides-1", {
  "id": "recap",
  "titel": "To remember",
  "blokken": [
    {
      "type": "tekst",
      "tekst": "The core ideas of the opening lecture on one page. The details are in Core material (still in Dutch); this tab gives you the English terms you will need in the exam."
    },
    {
      "type": "tekst",
      "titel": "The three worlds of SSMS",
      "tekst": "The programme sits where three worlds meet that in practice are often kept apart:\n**Public safety**: police, fire service, ambulance, municipalities; government is responsible for citizens' safety.\n**Industrial safety / corporate security**: companies, production processes, employees, business continuity (including SHEQ: safety, health, environment, quality).\n**International security**: security and intelligence services, the military, international organisations and NGOs, consultancies and think tanks.\n\nA cyberattack on the power grid is all three at once. That is why the programme trains people who can see across the boundaries."
    },
    {
      "type": "vergelijking",
      "titel": "The core distinction: human intentionality",
      "links": {
        "titel": "Safety management",
        "tekst": "Countering natural disasters, accidents, human error and similar events. No malicious adversary.",
        "punten": [
          "Causes: natural forces, technical failure, human error",
          "The threat does not adapt to your measures",
          "Culture of openness: reporting incidents makes the system safer",
          "Statistics work well: accidents follow patterns",
          "Example: a fire alarm, a machine safety procedure"
        ]
      },
      "rechts": {
        "titel": "Security management",
        "tekst": "Countering deliberate adversaries. A malicious adversary is present.",
        "punten": [
          "Causes: intent, crime, sabotage, attacks",
          "The threat does adapt to your measures",
          "Culture of confidentiality: sharing information can increase vulnerability",
          "Statistics work poorly: the adversary changes methods",
          "Example: access control, staff screening"
        ]
      }
    },
    {
      "type": "tabel",
      "titel": "Four definitions to know by heart",
      "kop": [
        "Term",
        "Definition (in short)"
      ],
      "rijen": [
        [
          "Physical safety",
          "The degree to which people are protected, and feel protected, against injury from accidents and disasters of non-human origin"
        ],
        [
          "Industrial safety",
          "Preventing or reducing threats to a company, its employees or its environment from natural risks and risks of production processes"
        ],
        [
          "Security (corporate, international, regional, physical, cyber, ...)",
          "Preventing or reducing the deliberate infliction of harm on citizens, employees, and public and private assets"
        ],
        [
          "Public security",
          "The degree to which people are protected, and feel protected, against injury from crime, offences and intimidation by other people"
        ],
        [
          "What the four have in common",
          "Risk"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "Objective and subjective safety",
      "tekst": "Note the words **\"and feel protected\"** in two of the definitions. Safety has an **objective** side (how much actually happens) and a **subjective** side (how safe people feel), and the two often diverge: crime can fall while feelings of insecurity rise. A measure can work on one and not the other."
    },
    {
      "type": "tekst",
      "titel": "Risk, old and modern",
      "tekst": "**Risk is uncertainty about a possible negative outcome (of a decision)**, often expressed as **probability times impact**. Without uncertainty there is no risk.\n\n**\"Old\" risks** were natural, small-scale and unequally distributed (a failed harvest hit some and not others). **\"Modern\" risks** are man-made and technological (nuclear power, cyberattacks, climate change), large-scale and politicised, and, according to **Ulrich Beck** (risk society), more equally distributed: \"poverty is hierarchical, smog is democratic\". That last claim is the most disputed one: the poor still tend to be more exposed."
    },
    {
      "type": "tabel",
      "titel": "What the professional does: the four core tasks",
      "kop": [
        "Task",
        "In practice"
      ],
      "rijen": [
        [
          "1. Identify, analyse and assess risk situations",
          "Risk analysis"
        ],
        [
          "2. Design and recommend feasible interventions",
          "Plans, policy, regulation, strategy; feasible, not just technically perfect"
        ],
        [
          "3. Implement and coordinate interventions",
          "Carrying out tactics and methods, deploying instruments, based on information"
        ],
        [
          "4. Evaluate interventions and solutions",
          "Did it work? The step most often skipped in practice; it feeds a new analysis in task 1"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "Insecurities and connecting the dots",
      "tekst": "The professional deals with uncertainties around **people, systems, technology, beliefs and culture**, and more: the field is not technical but **sociotechnical**. Risks are connected: the lecture's climate example (Ljungqvist, 2017) shows a chain from **climate change** to **agricultural output** and **food supply**, and from there along three tracks: social unrest and armed conflict; migration (climate refugees); and food shortages, famine and epidemics, all feeding back into population. Seeing those chains is the SSMS skill."
    },
    {
      "type": "hardop",
      "titel": "Say it out loud",
      "tekst": "Can you do these without looking?",
      "stappen": [
        "Name the three worlds of SSMS and give one example where they meet.",
        "Explain the difference between safety and security with the word \"intentionality\".",
        "Explain why \"and feel protected\" matters.",
        "Explain Beck’s claim about modern risks, and why it is disputed."
      ]
    }
  ]
});

voegRecapToe("intro-to-safety-security/h1", {
  "id": "recap",
  "titel": "To remember",
  "blokken": [
    {
      "type": "tekst",
      "titel": "H1 Bringing safety and security together",
      "tekst": "The core ideas of chapter 1 (Pettersen Gould & Bieder) and chapter 2 (Blokland & Reniers) on one page. The details are in the two Core material tabs.\n\n**The sentence the book rests on:** the safer and more secure our organisations become, the **more** safety we demand of them. Every improvement moves the bar, because each remaining incident becomes bigger news."
    },
    {
      "type": "tabel",
      "titel": "Two different histories",
      "kop": [
        "",
        "Safety",
        "Security"
      ],
      "rijen": [
        [
          "Origin",
          "Hazardous technologies and industries (energy, chemicals, transport, water, healthcare); in policy, regulation and management",
          "State security: protection against foreign states; civil industry only relevant for military defence"
        ],
        [
          "Turning points",
          "From the 1980s: accidents caused by societal and organisational developments. Turner, Man-made Disasters (1978); Perrow, Normal Accidents (interactive complexity plus tight coupling)",
          "Late 1980s: attention turns to societies’ own vulnerability. Until 2001 security was a small part of the scope. After 9/11: free-floating dread, new policy, new agencies (the TSA)"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "The interface after 9/11",
      "tekst": "The growing emphasis on security created an interface with safety in hazardous industries, with **four consequences**:\n**1.** a new category of threats to understand;\n**2.** new collaborations and domains;\n**3.** doubt about the effectiveness of existing protection;\n**4.** interactions that are far from obvious, **especially in normal situations**: safety and security practices can even work against each other (Pettersen & Bjørnskau, 2015).\n\nEveryday collisions: an emergency exit (safety: always open from inside; security: no one slipping out unseen), reporting (safety: no blame; security: traceable to persons), publishing (safety: open reports; security: confidentiality).\n\nA third movement: hazards and threats are increasingly seen as **systemic risks**, and under neoliberal deregulation, privatisation and outsourcing, direct rules give way to **risk management**."
    },
    {
      "type": "tabel",
      "titel": "Two ways to distinguish safety from security",
      "kop": [
        "",
        "Axis 1: intentionality",
        "Axis 2: origin and effect"
      ],
      "rijen": [
        [
          "Core question",
          "Did someone do it on purpose?",
          "In which direction does the harm go?"
        ],
        [
          "Safety",
          "Hazards, non-intentional and accidental risks",
          "The system does not harm the environment"
        ],
        [
          "Security",
          "Malicious threats, intentional risks",
          "The environment does not harm the system"
        ],
        [
          "Refinement",
          "",
          "SEMA adds a third direction: the system harming itself"
        ],
        [
          "Weak spot",
          "Intent is often only known afterwards",
          "Insiders sit inside the system boundary"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "Why defining is so hard, and why people must decide anyway",
      "tekst": "Two causes: **language** (Dutch has one word, \"veiligheid\", for both) and **different scientific traditions**. The two axes can give **different answers** for the same case (an ex-employee opening a valve: intentional, so security; the system harms the river, so safety). That is the grey area the book is about.\n\nScience and technology often **widen** the gap (at airports, screeners and safety staff have different training, technology and rules). Yet **ordinary workers**, managers and officers must make decisions **before** anyone has settled whether something is safety or security.\n\n**Three vantage points** in the book: **conceptual** (Blokland & Reniers, Jore), **technical and methodological** (Leveson, Wipf, Bongiovanni), **management and practice** (Brooks & Coole, La Porte, Schulman, Boustras). Each is \"right\" from its own vantage point."
    },
    {
      "type": "tekst",
      "titel": "Limits, questions and four tensions",
      "tekst": "**Limits**: accidents and attacks will happen; there are always more ways a complex system can fail than work (Schulman). Both sciences are young, and many requirements come from policy rather than research: **compliance is not the same as being safe**.\n\n**Three questions** passed on to you: what is safe and secure **enough**? What do new demands mean for **people**? **Who gains** and who gets the strain (La Porte)?\n\n**Four tensions:**\n**1. Merge or keep separate**: no proven answer.\n**2. Regulators get security tasks without a knowledge base** (EASA).\n**3. Transparency collides**: safety learns through openness, security needs confidentiality.\n**4. Research is lopsided**: mostly engineering, little on management in practice."
    },
    {
      "type": "hardop",
      "titel": "Say it out loud (chapter 1)",
      "tekst": "Can you do these without looking?",
      "stappen": [
        "State the book’s opening paradox and explain why it happens.",
        "Explain the two axes and apply both to the ex-employee who opens a valve.",
        "Name the four tensions from chapter 1."
      ]
    }
  ]
});

voegRecapToe("intro-to-safety-security/h2", {
  "id": "recap",
  "titel": "To remember",
  "blokken": [
    {
      "type": "tekst",
      "tekst": "**Two misconceptions** the chapter rejects: that risk and safety are opposites (only partly true), and that safety and security are entirely separate fields. There is **no shared semantic basis**: many definitions of safety, almost none of its opposite (Table 2.1 shows how often each term is used). Precise definitions give standardisation, better communication and unambiguous knowledge-sharing."
    },
    {
      "type": "tabel",
      "titel": "The definitions, all built on ISO 31000",
      "kop": [
        "Term",
        "Definition"
      ],
      "rijen": [
        [
          "Risk (ISO 31000)",
          "The effect of uncertainty on objectives"
        ],
        [
          "Objectives",
          "Everything, tangible or intangible, that individuals, organisations or society want, pursue or already have and want to keep; conscious or tacit"
        ],
        [
          "Safety",
          "The condition in which the likelihood of negative effects on objectives is low"
        ],
        [
          "Security",
          "The condition in which the likelihood of intentional negative effects on objectives is low"
        ],
        [
          "Unsecurity",
          "The condition in which the alignment of objectives is low and the likelihood of intentional negative effects on objectives is high (two conditions)"
        ],
        [
          "Unsafety / unsecurity",
          "The authors’ words for the opposites; \"insecurity\" is avoided because it means lack of self-confidence"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "How risk and safety connect",
      "tekst": "For risk to exist you need three elements: **objectives**, **effects** that can touch them, and **uncertainty**. Safety mainly concerns objectives and effects.\n\n**The fundamental difference**: risk is about an **uncertain future** state; safety is about **actual** conditions. Positive effects increase safety, negative effects increase unsafety.\n\n**Quality of perception**: risk, safety and security are **constructs in people's minds**, because people have different objectives and value them differently. **Constraints**: risk levels that must not be exceeded while pursuing objectives.\n\n**Safety-I and Safety-II**: from a pure loss perspective (preventing things going wrong) to also looking at excellent performance (things going right)."
    },
    {
      "type": "tabel",
      "titel": "The three levels of distinction between safety and security",
      "kop": [
        "Level",
        "Safety",
        "Security",
        "Consequence"
      ],
      "rijen": [
        [
          "Effects",
          "Unintentional, accidental",
          "Intentional",
          "Security is a subset of safety; use the word security only for intentional effects"
        ],
        [
          "Objectives",
          "Objectives of one party",
          "At least two parties with non-aligned objectives (more than 90 degrees apart)",
          "Detecting the conflict of objectives is the core task"
        ],
        [
          "Uncertainty",
          "Events repeat, statistics work",
          "The adversary keeps renewing tactics",
          "Other tools, such as game theory (Wipf, chapter 4)"
        ]
      ]
    },
    {
      "type": "waarschuwing",
      "titel": "Three traps",
      "tekst": "**1.** Risk is not the opposite of safety.\n**2.** \"Intentional\" refers to the **effect on objectives**, not to the act itself.\n**3.** Unsecurity is not just \"no security\": it requires low alignment **and** a high likelihood of intentional harm."
    },
    {
      "type": "hardop",
      "titel": "Say it out loud (chapter 2)",
      "tekst": "Can you do these without looking?",
      "stappen": [
        "Give the ISO definition of risk, and Blokland and Reniers’ definitions of safety and security.",
        "Explain the three levels of distinction, including the 90-degree criterion.",
        "Explain what \"objectives\" covers, and why tacit objectives matter."
      ]
    }
  ]
});

voegRecapToe("intro-to-safety-security/h3", {
  "id": "recap",
  "titel": "To remember",
  "blokken": [
    {
      "type": "tekst",
      "titel": "H3 Leveson: two sides of the same coin",
      "tekst": "The core ideas of chapter 3 (Leveson) and chapter 5 (Jore) on one page. The details are in the two Core material tabs.\n\n**Leveson's starting point**: there is no right or wrong definition, only the one you choose, and a narrow definition limits both the overlap between safety and security and the solutions."
    },
    {
      "type": "tabel",
      "titel": "The definitions to know by heart",
      "kop": [
        "Term",
        "Definition"
      ],
      "rijen": [
        [
          "Safety",
          "Freedom from accidents (losses)"
        ],
        [
          "Accident / mishap",
          "Any undesired or unplanned event that results in a loss, as defined by the stakeholders"
        ],
        [
          "Hazard",
          "A system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss. A state of the system, not of the environment: the mountain is not the hazard, flying too close to it is"
        ],
        [
          "Vulnerability",
          "The security equivalent of a hazard; in Leveson’s view essentially the same thing"
        ],
        [
          "Hazard analysis",
          "Identifying the causal scenarios of hazards; security only adds a few extra scenarios"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "Safety is not reliability, and security is more than information",
      "tekst": "Since software entered critical systems (from about **1980**), design errors can no longer be removed before use. Two counter-intuitive claims: components can be **perfectly reliable** and accidents still happen; the system can be **unreliable** and still safe. So preventing failures does not equal preventing losses.\n\nSecurity focuses too narrowly on **information**. Losses of **mission assurance** (power production, a space mission) matter just as much.\n\n**Intentionality** differs, but matters little for the **solution** when the consequences are the same. **Stuxnet**: loss = damaged centrifuges; hazard = spinning too fast; constraint = never above maximum speed; unsafe control action = \"increase speed\" at maximum; cause = the controller wrongly believed the speed was lower, whether by error or by attack. The best control is the same either way: a mechanical interlock or an analogue tachometer."
    },
    {
      "type": "tabel",
      "titel": "STAMP, CAST and STPA",
      "kop": [
        "Name",
        "What it is",
        "Used for"
      ],
      "rijen": [
        [
          "Chain-of-events / Swiss cheese model",
          "The traditional view: failures cause failures until a loss occurs",
          "Leveson says it is no longer enough"
        ],
        [
          "STAMP",
          "A model: safety and security as a dynamic control problem, enforcing constraints on components and their interactions",
          "The theory underneath"
        ],
        [
          "CAST",
          "A tool built on STAMP",
          "Analysing losses that have already happened"
        ],
        [
          "STPA",
          "A tool built on STAMP",
          "Analysing losses that have not yet happened"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "How STPA handles security",
      "tekst": "Step 1: identify **unsafe control actions** in four columns: not providing it, providing it, too early / too late / wrong order, stopped too soon or applied too long (the aircraft braking system example). Step 2: find the scenarios that lead to them. **Only then** does security enter: ask how feedback and information could be **injected, spoofed, tampered with, intercepted or leaked** by an adversary. People are treated like hardware and software.\n\n**Leveson's conclusion**: safety and security can be handled with one integrated process if (1) safety analysis goes beyond reliability, (2) security goes beyond information and keeping intruders out, and (3) the field shifts from chain-of-events models to **systems theory**. Comparisons (around a hundred) favour this approach."
    },
    {
      "type": "hardop",
      "titel": "Say it out loud (chapter 3)",
      "tekst": "Can you do these without looking?",
      "stappen": [
        "Give Leveson’s definitions of safety, accident and hazard, and explain why the mountain is not the hazard.",
        "Walk through Stuxnet in Leveson’s five steps.",
        "Explain the difference between STAMP, CAST and STPA."
      ]
    }
  ]
});

voegRecapToe("intro-to-safety-security/h5", {
  "id": "recap",
  "titel": "To remember",
  "blokken": [
    {
      "type": "tekst",
      "tekst": "**Chapter 5 (Jore)** asks whether \"security culture\" is an adequate concept.\n\n**In Amenas, 16 January 2013**: 32 terrorists attacked an Algerian gas facility with almost 800 workers; a four-day siege; **40 people from 10 countries** killed, five from Statoil. Statoil's investigation named a lacking **security culture** as an explanation and as the solution. Jore asks: how **adequate** is the concept, how does it relate to **safety culture**, and are they a **duality** or separate?"
    },
    {
      "type": "tekst",
      "titel": "The distinction: malicious intent",
      "tekst": "**Not intentionality but malicious intent** distinguishes security from safety, because intent and even crime also occur in safety (deliberately skipping goggles, drug use). Security means an actor who **genuinely wants to cause harm**.\n\nTwo features make security different: threats are often **external** and beyond what an organisation can fully know, and they are **not directly tied to profit and production**. And security events are rare, so a culture gets little feedback to learn from."
    },
    {
      "type": "tabel",
      "titel": "Gerring’s eight criteria applied to security culture",
      "kop": [
        "Criteria",
        "Score",
        "Why"
      ],
      "rijen": [
        [
          "Familiarity, resonance",
          "High",
          "Leans on the established concept of safety culture (first used after Chernobyl, 1986)"
        ],
        [
          "Parsimony, coherence, differentiation, depth",
          "Low",
          "Thin literature; one culture cannot cover phishing, sabotage and armed attack; hardly distinguishable from safety and organisational culture"
        ],
        [
          "Theoretical and field utility",
          "Mixed",
          "The security field lacks theory; Norwegian companies use the term as a label without changing how they organise security"
        ]
      ]
    },
    {
      "type": "tekst",
      "titel": "What does not transfer, and the conclusion",
      "tekst": "Safety culture rests on **trust and openness**; security presupposes an **adversary**. So three safety ideas do not transfer easily: **just culture** (no-blame reporting assumes nobody meant harm), **everyone committed** (does that mean suspicion of colleagues?), and **weak signals** (strategic attackers hide their plans).\n\n**Four conclusions**: the concept is **needed** (aim for resilience and security mindfulness); it is **poorly demarcated**, but so is safety culture; in practice it is a **duality**; and it will grow **more important** with digitalisation.\n\n**Jore's formula**: security and safety culture should be **understood separately, but not treated as separate in practice**."
    },
    {
      "type": "hardop",
      "titel": "Say it out loud (chapter 5)",
      "tekst": "Can you do these without looking?",
      "stappen": [
        "Explain why Jore uses malicious intent rather than intentionality.",
        "Explain why just culture and weak signals do not simply transfer to security.",
        "Give Jore’s formula and explain both halves of it."
      ]
    }
  ]
});


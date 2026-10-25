/* ============================================================
   Intro to Safety & Security, mid-term review (sessie 1-8)
   ============================================================
   Nieuw in v146. Samenvatting van alle mid-term-stof, opgebouwd uit
   de gecontroleerde sessielessen (v141-v146) en de slides 1-6.
   De oefentoets (Applying it, Check yourself) volgt in v147.
   ============================================================ */

LESSTOF['intro-to-safety-security/midterm'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Conceptualise the domains of safety and security addressed in SSMS (course goal 1)",
          "Explain the relevance of stakeholder approaches to safety and security management (course goal 2)",
          "Summarise the structure and main ideas of the SSMS programme (course goal 3)",
          "Explain how elements of risk management and resilience apply to international safety and security (course goal 4)",
          "Link the sessions: intent, openness against secrecy, merge or separate, definitions, people"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this lesson is",
        "tekst": "**The mid-term exam is on Tuesday 10 November 2026**, a written Remindo exam. The course manual says the material is **all course literature and lecture slides**; the slide in session 1 says it references principles, concepts and topics from the course.\n\nThis lesson puts sessions 1 to 8 on one page per session, followed by the threads that connect them. The detail stays in the session lessons: if a point here is new to you, go back to that session.\n\n**Not in this lesson yet:** session 7 (guest lecture) and the recap lecture of session 8, because their slides are not in the app. Add your own notes from those sessions."
      },
      {
        "type": "waarschuwing",
        "tekst": "**1.** Not intent but **malicious** intent separates security from safety (Jore); a worker who skips a rule on purpose is still safety.\n**2.** Security is a **subset** of safety in Blokland and Reniers, not its opposite.\n**3.** When a question asks **who** said something, check the chapter: the slides and the book attribute two lines differently (see section 5).",
        "titel": "Three things the exam can catch you on"
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material",
    "blokken": [
      {
        "type": "tekst",
        "titel": "Session 1: the field and the programme",
        "toetsstof": true,
        "tekst": "The question that carries the whole course: **what do all these kinds of safety and security have in common?** The lecture's one-word answer: **risk**.\n\n**The three worlds of SSMS**, with SSMS in the middle: **public safety** (police, fire brigade, rescue teams, local government, welfare organisations), **industrial safety / corporate security** (corporations, SHEQ departments) and **international security** (security agencies, intelligence services, the military, IGOs and NGOs, consultancy firms, think tanks).\n\n**The key distinction is human intentionality.** Safety management counters natural disasters, accidents and human error; security management counters intentional adversaries, deliberate activities and crime.\n\n**Four types of safety and security** are defined on the slides: physical safety, industrial safety, security, and public security. Two of them, physical safety and public security, contain the words **\"and feel protected\"**: next to the objective side there is a subjective side."
      },
      {
        "type": "tabel",
        "kop": [
          "",
          "\"Old\" risks",
          "\"Modern\" risks"
        ],
        "rijen": [
          [
            "Origin",
            "Natural, god-given",
            "Man-made, technological"
          ],
          [
            "Scale",
            "Small-scale",
            "Large-scale, politicisation"
          ],
          [
            "Distribution",
            "Unequally distributed",
            "Equally distributed"
          ]
        ],
        "noot": "Risk on the slide: uncertainty about a potentially negative outcome (of a decision), probability times impact. The third row is the contested one (Beck, and the criticism of him)."
      },
      {
        "type": "tekst",
        "tekst": "**The four core tasks** of the safety and security professional are the structure of the degree: **identify, analyse and assess** risk situations; **design and recommend** interventions; **implement and coordinate** them; **evaluate** them. The cycle then closes."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety and security work happens in three worlds: the street, the company and the world stage. What links them is risk. Safety is about things that go wrong by accident, security about people who want harm. And the job always has the same four steps: find the risk, plan the fix, carry it out, check whether it worked."
      },
      {
        "type": "tekst",
        "titel": "Session 2: interventions and key concepts (chapters 1 and 2)",
        "toetsstof": true,
        "tekst": "**The paradox the book rests on (ch. 1):** the safer and more secure our organisations become, the **more** we demand of them. Every remaining incident becomes bigger news.\n\n**Two histories.** Safety grew from hazardous technologies and industries; from the 1980s accidents were explained by organisational and societal developments (Turner, *Man-made Disasters*, 1978; Perrow, *Normal Accidents*). Security started as **state security**; attention turned to societies' own vulnerability from the late 1980s, and after **9/11** came free-floating dread, new policy and new agencies (the TSA).\n\n**The interface after 9/11** had four consequences: a new category of threats; new collaborations and domains; doubt about the effectiveness of existing protection; and interactions that are far from obvious, **especially in normal situations**, where safety and security practices can work against each other (the emergency exit, reporting, publishing)."
      },
      {
        "type": "tabel",
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
            "Non-intentional, accidental risks",
            "The system does not harm the environment"
          ],
          [
            "Security",
            "Malicious threats, intentional risks",
            "The environment does not harm the system"
          ],
          [
            "Weak spot",
            "Intent is often only known afterwards",
            "Insiders sit inside the system boundary"
          ]
        ],
        "noot": "The two axes can give different answers for the same case: an ex-employee who opens a valve is intentional (security), but the system harms the river (safety). That grey area is what the book is about."
      },
      {
        "type": "tekst",
        "tekst": "**Chapter 2 (Blokland and Reniers)** builds everything on ISO 31000. **Risk** is the effect of uncertainty on objectives. **Safety** is the condition in which the likelihood of negative effects on objectives is low; **security** is the condition in which the likelihood of **intentional** negative effects on objectives is low. So security is a **subset of safety**.\n\nRisk needs three elements: **objectives, effects and uncertainty**. Risk is about an **uncertain future** state; safety is about **actual** conditions. The three levels of distinction: **effects** (unintentional against intentional), **objectives** (one party against at least two parties whose objectives are more than **90 degrees** apart) and **uncertainty** (events repeat and statistics work, against an adversary who keeps renewing tactics).\n\n**The lecture (session 2)** added: semantic questions (what words mean) against ontological questions (what must exist for risk, safety or security to exist); **objectives come first**; the **campus example** (wet stairs: safety; arson: security; same objective, different nature of the effect); and four moves from concepts to management: identify objectives, identify risk sources, consider effects, set constraints."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Three traps from chapter 2**\n\n**1.** Risk is not the opposite of safety.\n**2.** \"Intentional\" refers to the **effect on objectives**, not to the act itself.\n**3.** Unsecurity is not just \"no security\": it needs low alignment of objectives **and** a high likelihood of intentional harm."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nThe safer we get, the more we expect. Safety and security grew up apart and met after 9/11. You can tell them apart by asking \"was it on purpose?\" or \"which way does the harm go?\", but the two questions do not always agree. Chapter 2 starts from what people want to protect: risk is uncertainty about those goals, and security is the part of safety where someone wants to hurt them."
      },
      {
        "type": "tekst",
        "titel": "Session 3: communication matters",
        "toetsstof": true,
        "tekst": "The thesis in one line: **technical systems fail less often than the communication between the people running them.**\n\n**Definitions are not neutral** (Leveson): how you define safety shapes what you look for. The evidence on the slide: about **3.45 million** Google Scholar hits for \"safety\" against **8,800** for \"unsafety\" (Blokland and Reniers, ch. 2)."
      },
      {
        "type": "tabel",
        "kop": [
          "Link",
          "What happens",
          "What communication does"
        ],
        "rijen": [
          [
            "Proaction",
            "Removing structural causes",
            "Spatial and policy decisions; who is consulted"
          ],
          [
            "Prevention",
            "Lowering chance and consequences",
            "Public awareness, risk assessment, early warning"
          ],
          [
            "Preparation",
            "Being ready for what you could not prevent",
            "Emergency plans, training, exercises"
          ],
          [
            "Repression",
            "Acting during the incident",
            "Situation assessment, orders, evacuation messages"
          ],
          [
            "Recovery",
            "Restoring and learning",
            "Damage assessment, compensation, revising plans"
          ]
        ]
      },
      {
        "type": "tekst",
        "tekst": "**Risk communication** is for people not currently in danger, with time for nuance and dialogue; its purpose is **increasing preparedness**. **Crisis communication** is for people in the middle of the event, under time pressure with incomplete information; it needs one voice, one clear instruction and speed.\n\n**Lasswell**, in the risk communication version (Rahman and Munadi, 2019): who, says what, in which channel, to whom, with what effect.\n\n**Five intervention challenges:** stress and uncertainty; discrepancies in working style; type of personnel and level of professionalism; different concepts of time; language and jargon. **Nine quality criteria for information:** accurate, concise, believable, complete, clear, valid, objective, redundant, up to date.\n\n**The security paradox:** safety runs on openness (near-misses, weak signals), security runs on containment (so adversaries cannot map defences). The case in point is the hardened cockpit door and **Germanwings 9525**.\n\n**Three cases:** **Avianca 52** (1990), mitigated speech: the fuel state was reported, the emergency never declared. **Korean Air 801** (1997), steep hierarchy: warnings given as hints. **Manila** (2010), information without control and failure along the whole chain."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nMost disasters are not caused by broken machines but by people who did not understand each other. Before a crisis you explain calmly and repeat; during a crisis you give one short, clear order. And there is a catch: safety wants everyone to talk openly, security wants to keep things secret."
      },
      {
        "type": "tekst",
        "titel": "Session 4: stakeholders, actors and culture (chapters 3 and 5)",
        "toetsstof": true,
        "tekst": "**Leveson (ch. 3): two sides of the same coin.** There is no right or wrong definition, only the one you choose, and a narrow definition limits the overlap and the solutions. **Safety** is freedom from accidents (losses). A **hazard** is a system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss; a **vulnerability** is in her view essentially the same thing.\n\n**Safety is not reliability**: components can be perfectly reliable and accidents still happen, and an unreliable system can still be safe. Security, for its part, focuses too narrowly on **information**; losses of **mission assurance** matter just as much.\n\n**Stuxnet:** whether the controller wrongly believed the speed was lower by error or by attack, the best control is the same: a mechanical interlock or an analogue tachometer. Intent differs, but matters little for the solution when the consequences are the same.\n\n**STAMP** is the model (safety and security as a control problem); **CAST** analyses losses that have happened, **STPA** losses that have not yet happened. In STPA, security enters **after** the unsafe control actions and their scenarios are found: how could an adversary inject, spoof, tamper with, intercept or leak feedback and information?"
      },
      {
        "type": "tekst",
        "tekst": "**Jore (ch. 5): security culture.** The case is **In Amenas** (16 January 2013): 32 terrorists attacked an Algerian gas facility with almost 800 workers; 40 people from 10 countries were killed, five of them from Statoil. Statoil's investigation named a lacking security culture.\n\nJore's distinction is **malicious intent**, not intentionality: a worker who deliberately skips goggles acts intentionally, but that is still safety. Judged on **Gerring's eight criteria**, security culture scores high on familiarity and resonance, low on parsimony, coherence, differentiation and depth, and mixed on utility.\n\nThree safety ideas do not transfer easily: **just culture**, **everyone committed** (does that mean suspicion of colleagues?) and **weak signals** (attackers hide their plans). Her conclusion: security and safety culture should be **understood separately, but in practical reality not treated as distinct**."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nLeveson says: whether a machine breaks by accident or by attack, you protect it with the same kind of control, so analyse safety and security together. Jore looks at culture: borrowing \"safety culture\" for security is tempting, but it does not fit neatly, because openness and trust clash with an enemy who hides."
      },
      {
        "type": "tekst",
        "titel": "Session 5: managing safety and security",
        "toetsstof": true,
        "tekst": "The lecture used the whole book. **Three positions** in the debate: **one coin** (Leveson, ch. 3: same losses, same controls, one analysis); **two diverging professions** (Brooks and Coole, ch. 7; the editors, ch. 11); and **count the players** (Wipf, ch. 4: with zero or one player it is safety, with two or more it is security and game theory applies).\n\n**La Porte's matrix (ch. 8, Fig. 8.1)** places organisations by how strong their safety and their security are: nuclear power operations and Navy carriers (both strong); NASA and the electricity grid (safety strong, security needs work); intelligence IT, military units and weapons labs (security strong, safety needs work); hospitals and local and regional government (both need work). His questions: who got there first (path dependence), who gets resources and power, and expect surprise.\n\n**Four take-aways:** definitions shape solutions; analyse together, organise carefully; management means holding tensions; zoom out."
      },
      {
        "type": "waarschuwing",
        "tekst": "**Watch out: two attributions.** \"In safety we trust, in security we distrust\" is on the slide with Brooks and Coole, but in the book it is the editors' heading (Bieder and Pettersen Gould, ch. 11, 11.2.3). And \"statistics work for accidents, an adversary keeps inventing new tactics\" is on the slide with Wipf, but in the book it is Blokland and Reniers (ch. 2). If a question asks who wrote it, go with the book."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nThere are three ways to see the relationship: one thing, two separate jobs, or a question of whether someone is playing against you. Organisations usually started with one of the two, and that first one shapes how the other is added."
      },
      {
        "type": "tekst",
        "titel": "Session 6: resilience (chapters 7 and 9)",
        "toetsstof": true,
        "tekst": "**Brooks and Coole (ch. 7)** compare the **bodies of knowledge** of safety (as occupational health and safety) and security (as corporate security). Neither is yet a full profession; security is fragmented and segmented. They synthesise **five** security categories and **six** safety categories. The two **align** on risk management, controls, management and professional practice, and are **polar** on hazards against threats, technologies and underlying theories.\n\nA **hazard** exposes someone to injury or loss; a **threat** is the purposive intent and capability of an adversary. Both use ISO 31000, the same process with a different object. The similarities exist **only at an abstract level**; merging dilutes understanding, and **life safety takes precedence over security requirements**. Three forces will increase the divergence: greater societal risk aversion, higher expectations of professions, and both professions striving for professional status."
      },
      {
        "type": "tekst",
        "tekst": "**Schulman (ch. 9)** opens with a utility CEO who said that good safety management takes care of security too: a **convenient untruth**. High reliability organisations (HROs) preclude catastrophic events **deterministically**, by managing **precursors**; security can never meet that standard, because hostile strategy targets vulnerabilities and uses protections against you.\n\n**Germanwings 9525** is his example of **reciprocal vulnerability**: the hardened cockpit door kept intruders out and protected the attacker already inside. Other points: **design-based vulnerability** (the internet) lies beyond any single organisation; symbolic targets make even failed attacks work; and a known vulnerability analysis becomes a map for the attacker.\n\n**Four tensions:** anticipation against resilience to the unexpected; lateral communication against restricted information; accessibility against hardening (guns, gates and guards); fast inter-organisational emergency coordination against security frameworks. **What overlaps:** the management of representational error and the attitude behind it, including taking \"I find myself in uncharted territory\" seriously, and emergency response. Integration demands **higher resolution reliability**."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety experts and security experts learn different things, so their jobs are drifting apart, even though they look alike from far away. Schulman shows why one safety system does not automatically protect you against attackers: accidents do not think back, attackers do. What they can share is a sharp, questioning attitude."
      },
      {
        "type": "waarschuwing",
        "tekst": "Session 7 is a guest lecture (Tales from the field, an alumnus) with **mandatory attendance**, and it has no assigned reading. There are no slides of it in this app. The exam covers all course literature and lecture slides, so add your own notes from this session here when you have them.",
        "titel": "Session 7: guest lecture"
      },
      {
        "type": "tekst",
        "titel": "Session 8: the workplace (chapter 10)",
        "toetsstof": true,
        "tekst": "**Boustras (ch. 10)**: safety increasingly depends on security, and the two meet **at the level of the individual employee**. Incidents have direct and visible effects (injury, death) and slow, invisible ones (psychosocial problems). **9/11 as a safety problem:** more than 40,000 first responders and rescue workers were exposed to toxic dust, at least four deaths have been linked to it, and hundreds of firefighters retired early.\n\nAttacks damage employees' **trust** that their employer can keep them safe. Cyberattacks cascade through **systems of systems**, with four interdependencies: digital, physical, geographical, logical.\n\n**Two routes to social exclusion:** radicalisation (perceived discrimination and bullying, where the employee's perception is what counts) and the financial crisis (unemployment and insecurity leading to psychosocial problems and political radicalisation). Social exclusion is the connecting factor, but **not yet empirically proven**. Boustras proposes **worker participation**, copying the legally binding health and safety committees to build a security culture. The final difference: in safety the legal duty is on the employer (personalised); in security the state provides the backbone."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nAttacks do not only hurt the building, they hurt the people who work there, sometimes years later. Boustras thinks feeling excluded could lead both to accidents and to radicalisation, but he admits it is not proven yet."
      },
      {
        "type": "tekst",
        "titel": "The threads through the whole course",
        "toetsstof": true,
        "tekst": "Exam questions can link sessions. Five threads come back again and again.\n\n**1. Intent.** Session 1 calls human intentionality the key distinction. Chapter 2 sharpens it to intentional **effects on objectives**, Jore (ch. 5) to **malicious** intent, and Wipf to the number of players. Leveson (ch. 3) adds that intent matters little for the solution when the loss is the same.\n\n**2. Openness against secrecy.** Chapter 1 names it as a tension; session 3 calls it the security paradox; Jore shows that just culture and weak signals do not transfer easily; Schulman makes it one of his four tensions. Germanwings 9525 appears in session 3 and in chapter 9.\n\n**3. Merge or keep separate.** Chapter 1 says there is no proven answer. Leveson argues for one integrated process; Brooks and Coole predict divergence; Jore says understand separately but do not treat as separate in practice; Schulman says separation creates the risk that nobody notices when one mission undermines the other.\n\n**4. Definitions shape solutions.** Leveson's starting point, the Google Scholar figures in session 3, and the first take-away of session 5.\n\n**5. People.** The four core tasks of session 1, communication in session 3, culture in chapter 5, reliability professionals in chapter 9, and the individual worker in chapter 10."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nThe same few questions run through every session: was it on purpose, should you share or hide information, should safety and security be one job or two, and how much do words and definitions steer what you do?"
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Human intentionality",
            "definitie": "The key distinction in session 1: safety counters accidents, natural forces and human error; security counters intentional adversaries and crime."
          },
          {
            "begrip": "Risk (ISO 31000)",
            "definitie": "The effect of uncertainty on objectives. Session 1 gives it as uncertainty about a potentially negative outcome, probability times impact."
          },
          {
            "begrip": "Security (Blokland and Reniers)",
            "definitie": "The condition in which the likelihood of intentional negative effects on objectives is low; a subset of safety."
          },
          {
            "begrip": "Unsecurity",
            "definitie": "Low alignment of objectives and a high likelihood of intentional negative effects. Both conditions are needed."
          },
          {
            "begrip": "Safety chain",
            "definitie": "Proaction, prevention, preparation, repression, recovery."
          },
          {
            "begrip": "Security paradox",
            "definitie": "Safety runs on openness, security on containment. The case in point is the hardened cockpit door and Germanwings 9525."
          },
          {
            "begrip": "Hazard (Leveson)",
            "definitie": "A system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss."
          },
          {
            "begrip": "STPA",
            "definitie": "Leveson's tool, built on STAMP, for analysing losses that have not yet happened. CAST analyses losses that have happened."
          },
          {
            "begrip": "Malicious intent",
            "definitie": "Jore's criterion for security: an actor who genuinely wants to cause harm."
          },
          {
            "begrip": "Security culture",
            "definitie": "Jore: needed but poorly demarcated; understand it separately from safety culture, but do not treat them as separate in practice."
          },
          {
            "begrip": "Path dependence",
            "definitie": "La Porte: whichever function came first shapes how the other is added."
          },
          {
            "begrip": "Body of knowledge",
            "definitie": "Brooks and Coole's test of a profession: systematic, logically related, predictive knowledge."
          },
          {
            "begrip": "Threat (Brooks and Coole)",
            "definitie": "The purposive intent and capability of an adversary. A hazard exposes someone to injury or loss."
          },
          {
            "begrip": "Convenient untruth",
            "definitie": "Schulman's verdict on the claim that good safety management takes care of security too."
          },
          {
            "begrip": "Reciprocal vulnerability",
            "definitie": "A protection against one threat creates a vulnerability to another. Example: the Germanwings cockpit door."
          },
          {
            "begrip": "Precursor",
            "definitie": "A condition that could lead to a precluded event. HROs manage them to keep catastrophes from happening."
          },
          {
            "begrip": "System of systems",
            "definitie": "Boustras: interconnected infrastructures in which one failure cascades into others."
          },
          {
            "begrip": "Social exclusion",
            "definitie": "Boustras's connecting factor between safety and security incidents; not yet empirically proven."
          }
        ]
      }
    ]
  },
  {
    "id": "recap",
    "titel": "To remember",
    "blokken": [
      {
        "type": "tabel",
        "kop": [
          "Who",
          "Chapter",
          "The idea to remember"
        ],
        "rijen": [
          [
            "Pettersen Gould and Bieder",
            "1",
            "The safer we get, the more we demand; two axes (intent, direction of harm); four tensions"
          ],
          [
            "Blokland and Reniers",
            "2",
            "Risk as the effect of uncertainty on objectives; security as a subset of safety; three levels"
          ],
          [
            "Leveson",
            "3",
            "One coin: same losses, same controls; safety is not reliability; STAMP, CAST, STPA; Stuxnet"
          ],
          [
            "Wipf",
            "4",
            "Count the players: zero or one is safety, two or more is security and game theory"
          ],
          [
            "Jore",
            "5",
            "Malicious intent; In Amenas; security culture attractive but slippery; a duality in practice"
          ],
          [
            "Brooks and Coole",
            "7",
            "Two diverging professions; alike only at the abstract level; life safety first"
          ],
          [
            "La Porte",
            "8",
            "Who got there first? Path dependence; the matrix; expect surprise"
          ],
          [
            "Schulman",
            "9",
            "A convenient untruth; HROs and precursors; Germanwings; four tensions"
          ],
          [
            "Boustras",
            "10",
            "The individual worker; 9/11 first responders; systems of systems; social exclusion"
          ],
          [
            "Bieder and Pettersen Gould",
            "11",
            "\"In safety we trust, in security we distrust\" (11.2.3)"
          ]
        ],
        "titel": "Who says what"
      },
      {
        "type": "tabel",
        "kop": [
          "List",
          "Items"
        ],
        "rijen": [
          [
            "Three worlds",
            "Public safety; industrial safety / corporate security; international security"
          ],
          [
            "Four core tasks",
            "Identify, analyse and assess; design and recommend; implement and coordinate; evaluate"
          ],
          [
            "Old against modern risk",
            "Natural / man-made; small / large-scale; unequally / equally distributed"
          ],
          [
            "Three elements of risk",
            "Objectives, effects, uncertainty"
          ],
          [
            "Safety chain",
            "Proaction, prevention, preparation, repression, recovery"
          ],
          [
            "Lasswell",
            "Who, says what, in which channel, to whom, with what effect"
          ],
          [
            "STPA: how an adversary affects information",
            "Inject, spoof, tamper with, intercept, leak"
          ],
          [
            "Schulman's four tensions",
            "Anticipation / resilience; open / restricted information; accessibility / hardening; emergency coordination / security frameworks"
          ],
          [
            "Four take-aways (session 5)",
            "Definitions shape solutions; analyse together, organise carefully; management means holding tensions; zoom out"
          ]
        ],
        "titel": "The lists"
      },
      {
        "type": "tabel",
        "kop": [
          "Case",
          "Year",
          "What it shows"
        ],
        "rijen": [
          [
            "9/11",
            "2001",
            "Turning point for security; later a safety problem for 40,000+ first responders (ch. 10)"
          ],
          [
            "Avianca 52",
            "1990",
            "Mitigated speech"
          ],
          [
            "Korean Air 801",
            "1997",
            "Steep hierarchy"
          ],
          [
            "Manila hostage crisis",
            "2010",
            "Information without control, failure along the whole chain"
          ],
          [
            "In Amenas",
            "2013",
            "32 attackers, almost 800 workers, 40 dead from 10 countries; security culture"
          ],
          [
            "Stuxnet",
            "",
            "Same control whether by error or attack"
          ],
          [
            "Germanwings 9525",
            "2015",
            "Security paradox (session 3) and reciprocal vulnerability (ch. 9); March 2015 on the slide of session 5"
          ]
        ],
        "titel": "Cases and numbers"
      },
      {
        "type": "hardop",
        "titel": "Say it out loud",
        "tekst": "Can you do these without looking?",
        "stappen": [
          "Explain the difference between safety and security in three ways: session 1, chapter 2 and Jore.",
          "Give two places in the course where openness and secrecy collide, and one case.",
          "Give the three positions on merging or separating, with an author for each.",
          "Walk a case of your choice along the safety chain.",
          "Explain why Schulman calls the CEO's claim a convenient untruth."
        ]
      }
    ]
  },
  {
    "id": "overview",
    "titel": "Quick recap",
    "blokken": [
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety is about accidents, security about people who want harm. The course keeps asking how the two fit together: one job or two, share or hide, and who decides what is safe enough."
      },
      {
        "type": "tekst",
        "titel": "Sessions 1 to 3",
        "tekst": "**Session 1:** three worlds, human intentionality, risk, four core tasks. **Session 2:** the safer we get, the more we demand; two axes; risk as the effect of uncertainty on objectives, security as a subset of safety. **Session 3:** the safety chain, risk against crisis communication, Lasswell, the security paradox and three cases."
      },
      {
        "type": "tekst",
        "titel": "Sessions 4 to 6",
        "tekst": "**Session 4:** Leveson's one coin (safety is not reliability, STPA, Stuxnet) and Jore's security culture (malicious intent, In Amenas, a duality in practice). **Session 5:** three positions, La Porte's matrix, four take-aways. **Session 6:** Brooks and Coole's diverging professions and Schulman's HROs, convenient untruth and four tensions."
      },
      {
        "type": "tekst",
        "titel": "Session 8 and the threads",
        "tekst": "**Session 8:** Boustras: the two meet at the individual worker, 9/11 first responders, systems of systems, social exclusion as an unproven hinge. **Threads:** intent, openness against secrecy, merge or separate, definitions shape solutions, people."
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Bieder, C., & Pettersen Gould, K. (Eds.) (2020). The coupling of safety and security: Exploring interrelations in theory and practice. Springer."
          },
          {
            "apa": "Corr, J., & Gomez Llata, E. (2026). Introduction to Safety & Security, sessions 1 to 6 [Lecture slides]. SSMS, The Hague University of Applied Sciences."
          }
        ]
      }
    ]
  }
];

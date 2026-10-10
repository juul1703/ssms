/* ============================================================
   Intro to Safety & Security, sessie 5
   Managing Safety & Security (Jonathan Corr, 7 oktober 2026)
   ============================================================

   Nieuw in v115, uit de slides en de sprekersnotities. Geen leeswerk
   vooraf; het college gebruikt het hele boek (Bieder en Pettersen
   Gould, 2020). Met "In plain words"-kaders en hover-begrippen.
   ============================================================ */

LESSTOF['intro-to-safety-security/college-5'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Define safety and security, and explain why definitions shape solutions",
          "Tell safety and security apart by intent (malicious, not merely intentional) and by the direction of harm",
          "Use the ISO 31000 definition of risk and explain why security is a subset of safety in the broadest sense",
          "Explain the debate: one coin (Leveson), two diverging professions (Brooks and Coole), or a matter of counting players (Wipf)",
          "Spot management tensions between safety and security (Schulman, Jore, La Porte) and apply them to a real case",
          "Explain how workers, users and society shape safety and security (Boustras, Bongiovanni, the editors)"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this session was",
        "tekst": "**Lecture 5: Managing Safety & Security** (Jonathan Corr, 7 October 2026). No reading beforehand, but the lecture is built on the whole book, **Bieder and Pettersen Gould (2020), *The Coupling of Safety and Security***: it brings together the chapters you read (1, 2, 3, 5, 7, 9, 10) and several you did not (4, 6, 8, 11). \"The authors generally do not agree with each other. My aim today is that you leave knowing **why** they disagree, and **which side** you find more convincing.\"\n\nThis lesson follows the lecture's five parts and uses the slides **and the lecturer's speaker notes**, which contain most of the explanation."
      },
      {
        "type": "waarschuwing",
        "titel": "The exam-style question the lecturer gave",
        "tekst": "\"**Should an organisation merge its safety and security functions, or keep them apart?** Use at least **two chapters**, and say **which definition** you are working with.\" Section 6 of Core material ends with a model plan for this answer; Applying it has the full exercise."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "**1. The To remember tab (10 minutes):** the six lenses and the four take-aways. **2. Sections 1 and 2 (20 minutes):** the definitions and the three positions. **3. Section 6 (10 minutes):** Copenhagen and the exam question. **4. The quiz (10 minutes). 5. Sections 3 to 5 (30 minutes).**"
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material",
    "blokken": [
      {
        "type": "tekst",
        "titel": "1. Concepts: what safety and security mean",
        "toetsstof": true,
        "tekst": "**The opening case: a closed airport.** On **22 September 2025**, Copenhagen Airport, the busiest in the Nordic region, closed to take-offs and landings for nearly **four hours** after police saw **two or three large drones** near the airport; dozens of flights were diverted. Oslo Airport closed for about three hours the same night after a separate sighting. The lecturer's first question: **safety problem, security problem, or both?** Some students wanted to know **who** flew the drones (a question about **intent**); others focused on aircraft and passengers at risk (a question about **harm**, whoever causes it). Both were already using the distinctions of this session.\n\n**Two histories, one intersection.**\n**Safety line**: in the 1970s and 1980s accidents came to be explained as **organisational failures** (Turner, Perrow), not as bad luck or bad individuals. After **Chernobyl (1986)** \"**safety culture**\" entered the vocabulary.\n**Security line**: until about **1989**, security meant **the state defending itself against other states**; civilian industry only mattered for military capability. After the Cold War, attention shifted to sabotage and terrorism, and **9/11 (2001)** put malicious attacks on every hazardous site's agenda (the US created the Transportation Security Administration in November 2001).\n**Today**: both are framed as **systemic risks** and **shared societal responsibilities**. \"Two professions grew up separately, on different sciences. Now they share the same hazardous sites.\"\n\n**Two ways to tell them apart:**\n**1. Intent.** Safety deals with **hazards, accidents and non-intentional risks**; security with **malicious threats**: intentional harm by an adversary. Careful: it is **malicious** intent, not intent alone. A worker who deliberately skips a rule has intent, but not malice: that is still safety.\n**2. [[Direction of harm]].** **Safety: harm flows out of the system** (a chemical plant must not poison its neighbourhood). **Security: harm flows into the system** (someone, outside or inside, attacking the plant).\n\n**Language.** English has two words; in Dutch **veiligheid**, German *Sicherheit* and French *sécurité* one word does much of the work for both. That is one reason the authors say defining the terms is harder than it looks.\n\n**A shared language: risk.** The ISO 31000 definition: **risk is the effect of uncertainty on objectives**, with three ingredients: **objectives** (what people, organisations or societies want, need or want to keep), **effects** (what could help or harm them) and **uncertainty** (how likely, and how sure are we?). Then:\n**Safety**: a low likelihood of **negative** effects on objectives.\n**Security**: a low likelihood of **intentional** negative effects on objectives.\nSo **security is a subset of safety in the broadest sense** (Blokland and Reniers, ch. 2). This lets managers use **one framework, risk management**, for both. The trap: the words \"safe\" and \"secure\" suggest **absolute freedom from risk**, which risk science never promises; most risks come from activities we want or need.\n\n**Security needs an opponent.** Picture objectives as arrows. In **safety**, everyone's arrows point the same way: nobody wants the accident. In **security**, at least two parties' objectives **conflict** (more than 90 degrees apart): one side achieving its aim damages the other. Consequence: safety can learn from **statistics**, because accidents repeat; an adversary keeps **inventing new tactics**, so past data is a weaker guide. That is why **game theory** enters security analysis (Wipf, ch. 4)."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety is about accidents: things going wrong without anyone wanting it. Security is about attacks: someone wanting to cause harm. A second way to see it: in safety, the danger comes out of the system and hurts the world around it; in security, the danger comes from outside (or inside) and hurts the system. Both can be described as risk, so managers can use one way of thinking about them. But security has an opponent who keeps changing tactics, which makes the past a poor guide."
      },
      {
        "type": "tabel",
        "titel": "Activity 1: safety, security, both, or can’t tell yet?",
        "kop": [
          "Scenario",
          "Answer",
          "Why"
        ],
        "rijen": [
          [
            "A. A tired operator leaves a valve open at a chemical plant",
            "Safety",
            "A classic accident: no intent"
          ],
          [
            "B. An attacker feeds false sensor readings, so the operator closes the wrong valve",
            "Security",
            "Malicious intent; yet the operator’s mistake looks identical to A"
          ],
          [
            "C. A faulty update to a security product crashes airline, hospital and bank systems worldwide (CrowdStrike, July 2024)",
            "Safety (by the intent test)",
            "Nobody attacked anyone, although it happened inside the cybersecurity world"
          ],
          [
            "D. A pilot’s GPS position jumps over the Baltic; nobody knows yet if it is accidental or deliberate",
            "Can’t tell yet",
            "The pilot cannot tell either: unintentional interference or deliberate jamming"
          ],
          [
            "E. A worker skips a safety rule to save time",
            "Safety",
            "Intentional, but not malicious"
          ]
        ],
        "noot": "From the lecturer’s debrief. \"If your pair disagreed, good. That disagreement is the semantic debate that Blokland and Reniers warn about.\""
      },
      {
        "type": "tekst",
        "titel": "2. One coin, or two professions? Three positions",
        "toetsstof": true,
        "tekst": "**Position 1: one coin, two sides (Leveson, ch. 3).** Her title is her argument. Definitions are not right or wrong, only useful or not. **Safety is freedom from accidents (losses)**, as defined by stakeholders, **whatever the cause**: so security is already included. A **hazard** (a system state that can lead to loss) has a security twin: a **[[vulnerability|Vulnerability]]**.\n\n**Stuxnet in Leveson's terms**: the **loss** is damaged centrifuges; the **hazard/vulnerability** is that they spin too fast; the **constraint** is \"never above maximum speed\"; the **controls** are a mechanical limiter or an analogue RPM gauge. Those controls work **whether the wrong command came from a bug, a mistake or a worm**. For Leveson, intent only **adds causal scenarios**; it needs no different method.\n\n**From failure chains to control.** \"**[[Reliability is not safety]]**\": every part can work as specified and the system can still fail. Older tools (fault trees, HAZOP) saw accidents as chains of component failures. **STAMP** treats safety as a **control problem** and **STPA** is the method: a **controller** (human or software) sends **control actions** to a **controlled process** and receives **feedback**; hazards arise when actions or feedback are wrong. Example: the autobrake never fires on landing because touchdown is not detected (wet runway, failed sensor). **To add security, ask one extra question: how could an adversary spoof, delay, block or tamper with that feedback?** Same analysis, more causal paths: \"one extra question, not a new method\".\n\n**Read it critically**: the book warns against \"**defining the problems based on our solutions**\". If everything is a control problem, safety's toolbox fits by construction.\n\n**Position 2: [[diverging professions|Diverging professions]] (Brooks and Coole, ch. 7; Bieder and Pettersen Gould, ch. 11).** Comparing the bodies of knowledge of **occupational health and safety** and **corporate security**, they converge only at the **abstract** level: both aim at **social wellbeing** through risk control. Below that, they differ:"
      },
      {
        "type": "tabel",
        "kop": [
          "",
          "Safety (occupational health and safety)",
          "Security (corporate security)"
        ],
        "rijen": [
          [
            "Risk comes from",
            "Hazards: accidents, ill health",
            "Threats: adversaries with intent"
          ],
          [
            "Core theory",
            "Accidents, human error, health impacts",
            "Crime and crime prevention"
          ],
          [
            "Typical controls",
            "People, procedures, compliance",
            "Harden, detect, delay, respond"
          ],
          [
            "Knowledge base",
            "Clearer, with accredited courses",
            "Fragmented, still forming"
          ],
          [
            "Information",
            "Share openly to learn",
            "Restrict to deny the attacker"
          ],
          [
            "Legal duty",
            "Falls on the employer by law (Boustras, ch. 10)",
            "The state provides the backbone"
          ]
        ],
        "noot": "\"In safety we trust, in security we distrust.\" The insider problem: the same employee is trusted for safety and potentially distrusted as a threat. Professions will diverge further as each seeks recognition."
      },
      {
        "type": "tekst",
        "tekst": "**Position 3: count the players (Wipf, ch. 4).** **Zero or one player: safety**: nature and machines do not react to your strategy, so statistics and optimisation work. **Two or more players: security**: an opponent with their own objectives and strategy, so **game theory** applies. Safety and security become different subsets of **one game-theoretic framework**, differing in the number of players.\n\n**Wipf's case: attacking satellite navigation** for helicopter emergency medical flights in bad weather:\n**Jamming** (blocking the signal): about **€1,000**, low knowledge, **easy** to detect.\n**Meaconing** (re-broadcasting a delayed signal): about **€10,000**, medium knowledge, hard to detect.\n**Spoofing** (sending convincing false signals): about **€100,000**, high knowledge, hard to detect.\nThe **attacker's trade-off**: more power means more impact, and more risk of being detected.\n\n**The theory meets 2026.** Wipf (2020) expected such attacks to stay rare, since attackers need the shared channel too. \"Reality moved.\" Since **2022**, EASA and the FAA report a notable rise in **GNSS jamming and spoofing** near conflict zones (the Baltic, Eastern Europe, the Black Sea, the Mediterranean, the Middle East). On **26 March 2026** EASA and EUROCONTROL published a joint action plan; on **3 July 2026** EASA issued **Revision 4** of its Safety Information Bulletin (phraseology, training, ATC capacity). Notice that the **safety** regulator is handling a partly **security** problem. **Spoofing is worse than jamming**: the receiver keeps working, with a believable but false position. And **pilots must respond the same way whether interference is accidental or deliberate**: Leveson's point in practice."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nThere are three ways to look at it. Leveson says safety and security are one thing: whatever the cause, you prevent the same damage with the same controls. Brooks and Coole say they are two different jobs: different knowledge, different tools, and opposite habits about sharing information. Wipf says: count the players. If no one is working against you, it is safety; if someone is, it is security, and you need to think like a chess player."
      },
      {
        "type": "tekst",
        "titel": "3. Managing the tension",
        "toetsstof": true,
        "tekst": "**When a fix creates a hole (Schulman, ch. 9).** After 9/11, cockpit doors were **reinforced** against intruders: a sensible security fix. In **March 2015**, the co-pilot of **Germanwings 9525** used the same door to lock the pilot out and deliberately crashed the aircraft. A measure against external attackers shielded an **insider**. Three lessons:\n1. **Vulnerabilities become strategic targets**: every fix can create a new weakness.\n2. **The insider**: trusted for safety, a possible threat for security.\n3. **Hardening can clash with access** and with the collaboration that emergency response needs.\nCompare a safety fix: when you repair a valve, the valve does not adapt; a smart opponent does. That is why managing the two is **not simply additive**.\n\n**In Amenas, January 2013 (Jore, ch. 5).** **32** heavily armed attackers struck the gas facility in the Algerian desert, with about **800** workers present; a **four-day** siege; **40** people killed from **10** countries, including **five Statoil** employees: the largest terrorist attack in the history of the oil and gas industry. Statoil's investigation found a security risk management system, but recommended strengthening capability and culture, and **building a [[security culture|Security culture]], distinct from safety culture**. The lecturer's point: an incident can turn an **academic concept into a management instrument** almost overnight.\n\n**Can you have a \"security culture\"?** Judged with **Gerring's criteria** (familiarity, resonance, parsimony, coherence, differentiation, depth, theoretical and field utility):\n**Attractive**: familiar (safety culture is well known, from Chernobyl); it makes security **a shared responsibility, not just a guard's job**; it fits security science's turn to awareness, mindfulness and resilience.\n**Slippery**: hard to **differentiate** from safety culture (borrowed definitions); mostly studied for **information security**, not terrorism or sabotage; **just culture** and openness sit awkwardly with a malicious actor; **suspicion of colleagues** versus the **trust** safety culture needs.\nJore's conclusion: **keep them conceptually separate, but do not manage them as separate in practice.**\n\n**High reliability: allies or rivals? (Schulman, ch. 9).** A utility CEO said that good safety management would take care of security too; Schulman calls this \"**a convenient untruth**\". The lens is **[[high-reliability organisations|High-reliability organisation]]** (nuclear plants, air traffic control, grid operators).\n**Where they reinforce**: **error hunting** (questioning your picture of the system); **[[precursors|Precursors]]** (weak signals, uneasy operators); \"**reliability professionals**\" who speak up and can stop work; a mindset that **expects surprise**.\n**Where they collide**: **failure versus [[vulnerability|Vulnerability]]** (nature does not learn, an adversary does); **lateral communication versus need-to-know**; **risk assessments can double as target lists**; **hardening versus open access**; and attackers **hide their own precursors**.\n\n**Who got there first? (La Porte, ch. 8).** A matrix of whether safety and security are well established:"
      },
      {
        "type": "tabel",
        "kop": [
          "",
          "Security well in place",
          "Security needs improvement"
        ],
        "rijen": [
          [
            "**Safety well in place**",
            "Both in place: nuclear power operations, Navy carriers",
            "Safety strong, security needs work: NASA, the electricity grid"
          ],
          [
            "**Safety needs improvement**",
            "Security strong, safety needs work: intelligence IT, military units, weapons labs",
            "Both need work: hospitals, local and regional government"
          ]
        ],
        "noot": "US examples from La Porte, ch. 8, Fig. 8.1."
      },
      {
        "type": "tekst",
        "tekst": "**La Porte's questions:** **Who got there first?** **Path dependence**: whichever function was established first sets the terms for the second. If politicians demand more of the missing one, **who gets resources and power**? Do the two cooperate or resent each other? His humble advice: **expect surprise**, expect people on the ground to develop informal rules for switching between safety mode and security mode, and **do not thin watchfulness for efficiency** (\"[[efficient thinness|Efficient thinness]]\").\n\n**Activity 2** (debrief): safety and security now **compete within organisations for attention, resources and power**; introducing a new function changes the balance of voice between the old ones, and its form depends on which came first. Typical tensions: **locked doors versus fire exits**; **sharing incident data versus protecting vulnerability details**; **two budgets for the same money**; security and safety staff who do not know each other."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety and security can work against each other. A strong cockpit door keeps attackers out, but can also lock a pilot out. Safety likes openness and trust; security likes secrecy and some suspicion. Some things help both, like people who speak up when something feels wrong. And in each organisation, whichever came first, safety or security, usually decides how the other is added."
      },
      {
        "type": "tekst",
        "titel": "4. People and society",
        "toetsstof": true,
        "tekst": "**Workers (Boustras, ch. 10).** The workplace is where safety and security meet. Attacks leave **psychosocial scars** (stress, trauma) and **shake trust in the employer's duty** to keep people safe. Cyberattacks **cascade** through \"**[[systems of systems|Systems of systems]]**\", from one infrastructure to others. And **radicalisation and social exclusion** may be a shared root of safety and security incidents, but this is **exploratory, not proven**: \"that is the kind of caution I want in your essays.\"\n\n**Users (Bongiovanni, ch. 6).** Safety and security as \"**[[eternal killjoys|Eternal killjoys]]**\": costs without visible value. His answer is **design thinking**: start from the **user's experience**. Two personas at airport screening: **Alfred, 64**, risk-averse, accepts screening for safety's sake; **Wendy, 41**, flies weekly and sees it as lost time. **Same screening, two experiences.** Honest caveat: the model has **not yet been tested** in an airport.\n\n**Society (chapters 1 and 11).** **What is safe and secure enough? And who decides?**\n**Safer, so we demand more**: the safer institutions become, the more we expect of them (the **risk-society** idea).\n**Perception swings**: risks are **amplified** after attacks and disasters (standards tighten) and **attenuated** for new technologies with big short-term benefits, such as mobile digital communication (standards relax).\n**Responsibility is spread**: trust in institutions has fallen while **privatisation and outsourcing** share duties across many actors.\n**Brussels Airport, 2016**: the crisis team struggled to reach the crisis room because site security was a government responsibility. Who is responsible for what in a crisis is not a detail."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety and security are about people. Workers can be hurt and lose trust after an attack. Travellers experience the same security check very differently: for one it feels safe, for another it is wasted time. And society keeps asking for more safety the safer things get, while responsibility is spread over many organisations, which can cause confusion in a crisis."
      },
      {
        "type": "tekst",
        "titel": "5. Back to Copenhagen: the toolkit",
        "toetsstof": true,
        "tekst": "The lecture ends by applying **six lenses** to the drone case:"
      },
      {
        "type": "tabel",
        "kop": [
          "Lens",
          "Question to ask",
          "Applied to Copenhagen"
        ],
        "rijen": [
          [
            "Blokland and Reniers: objectives",
            "Whose objectives conflict? Who is the opponent?",
            "An unknown actor seems to want disruption and fear; the airport wants continuity and safe operation"
          ],
          [
            "Leveson: constraints",
            "What must never happen, whoever causes it?",
            "No aircraft in conflict with unidentified drones"
          ],
          [
            "Brooks and Coole: professions",
            "Who owns it?",
            "Airport operators, police, air traffic control, possibly the military: each with its own body of knowledge"
          ],
          [
            "Schulman: collisions",
            "What must be shared, and what withheld?",
            "The police had to restrict what they knew during the investigation"
          ],
          [
            "La Porte: path",
            "Which regime came first, and who ramps up?",
            "An airport grew up around safety; security is being ramped up"
          ],
          [
            "Bieder and Pettersen Gould: scale",
            "What lies beyond the airport’s control?",
            "A possible hybrid strategy beyond the airport’s control"
          ]
        ]
      },
      {
        "type": "tekst",
        "tekst": "**What was known (September 2025):** police **did not shoot the drones down** because of the risk to passengers, aircraft and nearby fuel depots: **a safety judgement inside a security response**. The operator was described as capable, and a **hybrid attack** was not ruled out; the Danish prime minister called it **the most serious attack on Danish infrastructure to date**. (The slides note that later findings on attribution should be checked.)\n\n**Four take-aways:**\n1. **Definitions shape solutions**: intent, [[direction of harm|Direction of harm]] or objectives; your definition decides which tools fit.\n2. **Analyse together, organise carefully**: shared scenarios work (Leveson), but professions, premises and legal duties differ (Brooks and Coole, the editors).\n3. **Management means holding tensions**, not eliminating them: trust versus secrecy, competition for resources and power, path dependence, preparing for surprise.\n4. **Zoom out**: vulnerabilities sit beyond the organisation, and society's expectations keep rising.\n\n\"If you remember only these four, you can write a decent essay.\"\n\n**Going deeper** (books cited in the reading): Leveson, *Engineering a Safer World*; Perrow, *Normal Accidents*; Hollnagel, *Safety-I and Safety-II*; and the EASA Safety Information Bulletin on GNSS interference as a live case."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nTo analyse a real case, ask six questions: who wants what, what must never happen, which professions are involved, what must be shared or kept secret, which came first, and what lies outside the organisation's control. Then remember four things: definitions decide the solution; analyse together but organise carefully; managing means living with tensions; and look beyond the organisation."
      },
      {
        "type": "checklist",
        "titel": "Summary",
        "toetsstof": true,
        "items": [
          "Safety and security grew up separately (organisational accidents and Chernobyl; state security and 9/11) and now share the same sites.",
          "Tell them apart by malicious intent and by the direction of harm; ISO 31000 makes security a subset of safety in the broadest sense; security needs an adapting opponent.",
          "Three positions: one coin (Leveson, STAMP and STPA), diverging professions (Brooks and Coole), count the players (Wipf, game theory; GNSS jamming, meaconing, spoofing).",
          "Tensions: fixes create holes (Germanwings), security culture is attractive but slippery (Jore, In Amenas), HROs reinforce and collide (Schulman), path dependence (La Porte).",
          "People: workers (Boustras), users (Bongiovanni), and society: what is safe and secure enough, and who decides?",
          "Six lenses and four take-aways; exam question: merge or keep apart?"
        ]
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Malicious intent",
            "definitie": "Intentional harm by an adversary; the mark of security. A worker who deliberately skips a rule has intent but not malice: that is safety."
          },
          {
            "begrip": "Direction of harm",
            "definitie": "Safety: harm flows out of the system into its environment. Security: harm flows into the system from outside or inside."
          },
          {
            "begrip": "Risk (ISO 31000)",
            "definitie": "The effect of uncertainty on objectives: objectives, effects and uncertainty."
          },
          {
            "begrip": "Safety (Blokland and Reniers)",
            "definitie": "A condition in which the likelihood of negative effects on objectives is low."
          },
          {
            "begrip": "Security (Blokland and Reniers)",
            "definitie": "A condition in which the likelihood of intentional negative effects on objectives is low; a subset of safety in the broadest sense."
          },
          {
            "begrip": "Safety (Leveson)",
            "definitie": "Freedom from accidents (losses), as defined by stakeholders, whatever the cause."
          },
          {
            "begrip": "Vulnerability",
            "definitie": "The security twin of a hazard: a system state or condition that can open a path to loss."
          },
          {
            "begrip": "STAMP and STPA",
            "definitie": "Leveson’s model treating safety as a control problem (STAMP) and its analysis method (STPA): controllers, control actions, controlled processes and feedback."
          },
          {
            "begrip": "Reliability is not safety",
            "definitie": "Every component can work as specified and the system can still fail."
          },
          {
            "begrip": "Diverging professions",
            "definitie": "Brooks and Coole: occupational health and safety and corporate security converge only at the abstract level of social wellbeing, and differ in theory, controls, knowledge and information habits."
          },
          {
            "begrip": "Counting the players",
            "definitie": "Wipf: with zero or one player it is safety (statistics work); with two or more it is security (game theory applies)."
          },
          {
            "begrip": "Jamming, meaconing, spoofing",
            "definitie": "Attacks on satellite navigation: blocking the signal (cheap, easy to detect), re-broadcasting a delayed signal, or sending convincing false signals (expensive, hard to detect)."
          },
          {
            "begrip": "Insider problem",
            "definitie": "The same employee is trusted for safety and potentially distrusted as a security threat (Germanwings 9525)."
          },
          {
            "begrip": "Security culture",
            "definitie": "A culture that makes security a shared responsibility; attractive but slippery as a concept. Jore: separate in theory, not in management."
          },
          {
            "begrip": "High-reliability organisation",
            "definitie": "An organisation, such as a nuclear plant or air traffic control, that prevents catastrophic failure through redundancy, procedures and a culture of hunting for precursors."
          },
          {
            "begrip": "Precursors",
            "definitie": "Weak signals that something may go wrong; both safety and security depend on them, but attackers hide their own."
          },
          {
            "begrip": "Path dependence (La Porte)",
            "definitie": "Whichever function, safety or security, was established first sets the terms for the second."
          },
          {
            "begrip": "Efficient thinness",
            "definitie": "La Porte’s warning against thinning watchfulness for the sake of efficiency."
          },
          {
            "begrip": "Eternal killjoys",
            "definitie": "Safety and security seen as costs without visible value; Bongiovanni answers with design thinking from the user’s experience."
          },
          {
            "begrip": "Systems of systems",
            "definitie": "Boustras: interconnected infrastructures through which a cyberattack can cascade."
          },
          {
            "begrip": "Two ways to tell safety and security apart (list)",
            "definitie": "1. Intent: accidents versus malicious threats. 2. Direction of harm: out of the system (safety) or into it (security)."
          },
          {
            "begrip": "Three positions in the debate (list)",
            "definitie": "1. One coin (Leveson): same losses, same controls, intent adds scenarios. 2. Diverging professions (Brooks and Coole): different theories, controls, knowledge, information habits. 3. Count the players (Wipf): nature versus an opponent; game theory."
          },
          {
            "begrip": "Three lessons from Germanwings (list)",
            "definitie": "1. Vulnerabilities become strategic targets. 2. The insider is trusted for safety, a possible threat for security. 3. Hardening can clash with access and collaboration."
          },
          {
            "begrip": "HROs: reinforce and collide (list)",
            "definitie": "Reinforce: error hunting, precursors, reliability professionals, expecting surprise. Collide: failure versus vulnerability, lateral communication versus need-to-know, risk assessments as target lists, hardening versus access."
          },
          {
            "begrip": "Six lenses for a case (list)",
            "definitie": "1. Objectives: who is the opponent? 2. Constraints: what must never happen? 3. Professions: who owns it? 4. Collisions: what to share or withhold? 5. Path: which came first? 6. Scale: what lies beyond control?"
          },
          {
            "begrip": "Four take-aways of lecture 5 (list)",
            "definitie": "1. Definitions shape solutions. 2. Analyse together, organise carefully. 3. Management means holding tensions. 4. Zoom out."
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
        "titel": "The book’s chapters in one line each",
        "kop": [
          "Chapter",
          "Author",
          "One-line idea"
        ],
        "rijen": [
          [
            "1 and 11",
            "Bieder and Pettersen Gould",
            "What is safe and secure enough, and who decides? Two professions, shared sites"
          ],
          [
            "2",
            "Blokland and Reniers",
            "Risk as the effect of uncertainty on objectives; security as a subset of safety"
          ],
          [
            "3",
            "Leveson",
            "One coin: same losses, same controls; STAMP and STPA"
          ],
          [
            "4",
            "Wipf",
            "Count the players: game theory; jamming, meaconing, spoofing"
          ],
          [
            "5",
            "Jore",
            "Security culture: attractive but slippery; In Amenas"
          ],
          [
            "6",
            "Bongiovanni",
            "Users: eternal killjoys, design thinking, Alfred and Wendy"
          ],
          [
            "7",
            "Brooks and Coole",
            "Diverging professions; \"in safety we trust, in security we distrust\""
          ],
          [
            "8",
            "La Porte",
            "Who got there first? Path dependence; expect surprise"
          ],
          [
            "9",
            "Schulman",
            "HROs: allies and rivals; Germanwings; \"a convenient untruth\""
          ],
          [
            "10",
            "Boustras",
            "Workers: psychosocial scars, systems of systems, legal duty on the employer"
          ]
        ]
      },
      {
        "type": "tekst",
        "titel": "Four take-aways",
        "tekst": "**1.** Definitions shape solutions. **2.** Analyse together, organise carefully. **3.** Management means holding tensions. **4.** Zoom out."
      },
      {
        "type": "hardop",
        "titel": "Say it out loud",
        "tekst": "Can you do these without looking?",
        "stappen": [
          "Give the two ways to tell safety from security, and why a rule-skipping worker is still safety.",
          "Explain Leveson’s Stuxnet example.",
          "Name three differences between the safety and security professions.",
          "Explain why spoofing is worse than jamming.",
          "Apply three of the six lenses to the Copenhagen drones."
        ]
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "oefening",
        "id": "intro-c5-oef-1",
        "niveau": "basis",
        "vraag": "**Activity 2 from the lecture.** Choose Schiphol, a hospital, your university or a municipality. (a) Place it in La Porte’s matrix. (b) Which came first, safety or security? (c) Name one likely tension if the missing function is ramped up, and one workable compromise.",
        "antwoord": "**Example: a hospital.** (a) La Porte places hospitals in \"**both need work**\", although safety (patient safety, fire, hygiene) is usually more developed. (b) **Safety came first**: hospitals grew up around patient safety, with openness and incident reporting. (c) **Tension**: ramping up security against **ransomware** means restricting access to systems and data, while doctors and nurses need **fast access** in emergencies; or locking doors against intruders versus **fire exits** and visitors. **Compromise**: role-based access with an emergency override that is logged and reviewed afterwards; or doors that lock from outside but open freely from inside. The general lesson: the new function has to fit the culture of the one that came first (path dependence)."
      },
      {
        "type": "oefening",
        "id": "intro-c5-oef-2",
        "niveau": "gevorderd",
        "vraag": "**Discuss (from the lecture):** a pilot’s GPS signal is disrupted over the Baltic. Does it matter whether the interference is deliberate, to the pilot, to the airline, and to the state?",
        "antwoord": "**To the pilot: hardly.** Following **Leveson**, the immediate control response is the same: switch to other navigation sources, follow the procedures in EASA’s bulletin, inform air traffic control. The constraint \"never trust a false position\" holds whatever the cause.\n\n**To the airline: partly.** For training, route planning, reporting and insurance it helps to know whether interference is a recurring deliberate pattern in certain regions (Wipf: an adapting opponent makes past data a weaker guide).\n\n**To the state: very much.** Attribution decides the response: investigation, diplomacy, sanctions or military measures. That is the security side: an opponent with objectives that conflict with yours.\n\n**Conclusion:** analyse together, organise carefully: the same analysis, different responsibilities at different levels."
      },
      {
        "type": "oefening",
        "id": "intro-c5-oef-3",
        "niveau": "gevorderd",
        "vraag": "**The lecturer’s exam-style question:** \"Should an organisation merge its safety and security functions, or keep them apart?\" Write a plan for a 400-word answer that uses at least two chapters and states which definition you work with.",
        "antwoord": "**A plan that would score well:**\n\n**1. Definition (state it):** for example Blokland and Reniers: security as a subset of safety (intentional negative effects on objectives); or Leveson: safety as freedom from losses whatever the cause. Say that your definition influences your answer (\"definitions shape solutions\").\n\n**2. Arguments for merging:** Leveson (ch. 3): the same losses and constraints, one analysis (STPA) with extra causal scenarios; shared precursors and reliability professionals (Schulman, ch. 9); one risk-management framework (ch. 2).\n\n**3. Arguments for keeping apart:** Brooks and Coole (ch. 7): different bodies of knowledge, controls and professions; \"in safety we trust, in security we distrust\"; the insider problem; information sharing versus need-to-know (Schulman); different legal duties (Boustras, ch. 10).\n\n**4. Your position, nuanced:** for example Jore’s line: **analyse and coordinate together, but keep distinct expertise** (\"separate in theory, not managed as separate in practice\"). Add La Porte: the answer depends on which function came first.\n\n**5. A short example:** Germanwings (a security fix creating a safety hole) or Copenhagen (a safety judgement inside a security response).\n\n**6. One cautious sentence:** some claims are exploratory (Boustras on radicalisation; Bongiovanni’s untested model)."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Twelve questions on lecture 5",
        "vragen": [
          {
            "vraag": "A worker deliberately skips a safety rule to save time. This is:",
            "opties": [
              "Security, because it is intentional",
              "Safety: intentional but not malicious",
              "Neither",
              "A security culture problem only"
            ],
            "juist": 1,
            "uitleg": "The intent test is about malicious intent."
          },
          {
            "vraag": "In which case does harm flow INTO the system?",
            "opties": [
              "A chemical plant leaks into a river",
              "An attacker sabotages the plant",
              "A factory’s noise disturbs neighbours",
              "Emissions from a power plant"
            ],
            "juist": 1,
            "uitleg": "Security: harm flows into the system; safety: out of it."
          },
          {
            "vraag": "ISO 31000 defines risk as:",
            "opties": [
              "Probability times impact",
              "The effect of uncertainty on objectives",
              "Any intentional threat",
              "The absence of safety"
            ],
            "juist": 1,
            "uitleg": "Objectives, effects and uncertainty."
          },
          {
            "vraag": "In Blokland and Reniers’ framing, security is:",
            "opties": [
              "The opposite of safety",
              "A subset of safety in the broadest sense",
              "Larger than safety",
              "Unrelated to risk"
            ],
            "juist": 1,
            "uitleg": "Safety covers all negative effects; security the intentional ones."
          },
          {
            "vraag": "In Leveson’s Stuxnet example, which control works whatever the cause?",
            "opties": [
              "Firewalls only",
              "A mechanical speed limiter",
              "Background checks",
              "Encryption"
            ],
            "juist": 1,
            "uitleg": "Or an analogue RPM gauge: same controls for a bug, a mistake or a worm."
          },
          {
            "vraag": "To add security to an STPA analysis, Leveson adds:",
            "opties": [
              "A separate method",
              "One extra question: how could an adversary spoof, delay, block or tamper with feedback?",
              "Game theory",
              "A security culture survey"
            ],
            "juist": 1,
            "uitleg": "\"One extra question, not a new method.\""
          },
          {
            "vraag": "\"In safety we trust, in security we distrust\" belongs to the position:",
            "opties": [
              "One coin",
              "Diverging professions",
              "Count the players",
              "Big Governance"
            ],
            "juist": 1,
            "uitleg": "Brooks and Coole, ch. 7."
          },
          {
            "vraag": "According to Wipf, which GNSS attack is cheapest and easiest to detect?",
            "opties": [
              "Spoofing",
              "Meaconing",
              "Jamming",
              "Hacking"
            ],
            "juist": 2,
            "uitleg": "About €1,000; spoofing costs about €100,000 and is hard to detect."
          },
          {
            "vraag": "Germanwings 9525 illustrates:",
            "opties": [
              "A security fix that created a new hole for an insider",
              "A successful security culture",
              "Jamming",
              "Path dependence"
            ],
            "juist": 0,
            "uitleg": "The reinforced cockpit door shielded the co-pilot."
          },
          {
            "vraag": "Jore’s conclusion on security culture:",
            "opties": [
              "Merge it fully with safety culture",
              "Keep them conceptually separate, but do not manage them as separate in practice",
              "Abandon the concept",
              "Only use it for information security"
            ],
            "juist": 1,
            "uitleg": "Attractive but slippery; separate in theory."
          },
          {
            "vraag": "Schulman calls \"good safety management takes care of security too\":",
            "opties": [
              "A useful principle",
              "A convenient untruth",
              "La Porte’s law",
              "Path dependence"
            ],
            "juist": 1,
            "uitleg": "Safety and security reinforce in places but collide in others."
          },
          {
            "vraag": "Why did police not shoot down the Copenhagen drones?",
            "opties": [
              "They were too high",
              "Risk to passengers, aircraft and fuel depots: a safety judgement inside a security response",
              "They were friendly drones",
              "The airport forbade it"
            ],
            "juist": 1,
            "uitleg": "The lecture’s example of the two logics meeting."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Corr, J. (2026). Managing safety & security [Lecture slides, 7 October]. Introduction to Safety & Security, SSMS, The Hague University of Applied Sciences."
          },
          {
            "apa": "Bieder, C., & Pettersen Gould, K. (Eds.) (2020). The coupling of safety and security: Exploring interrelations in theory and practice. Springer."
          },
          {
            "apa": "EASA (2026). Safety Information Bulletin 2022-02 Rev. 4 on GNSS interference (3 July 2026); EASA and EUROCONTROL joint action plan (26 March 2026)."
          }
        ]
      }
    ]
  }
];

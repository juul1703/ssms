/* ============================================================
   Intro to Safety & Security, mid-term review (sessie 1-8)
   ============================================================
   Nieuw in v146, oefentoets in v147. Samenvatting van alle mid-term-stof, opgebouwd uit
   de gecontroleerde sessielessen (v141-v146) en de slides 1-6.
   ============================================================ */

LESSTOF['intro-to-safety-security/midterm'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          {
            "doel": "Conceptualise the domains of safety and security addressed in SSMS (course goal 1)",
            "uitleg": "Start with the three worlds (public safety; industrial safety and corporate security; international security) and the key distinction, human intentionality. Then sharpen it with chapter 2 (intentional effects on objectives) and Jore (malicious intent). See sections 1, 2 and 4."
          },
          {
            "doel": "Explain the relevance of stakeholder approaches to safety and security management (course goal 2)",
            "uitleg": "Use session 4 (stakeholders, actors and culture): Jore's security culture and In Amenas. Add communication with stakeholders from session 3 (trust, participation) and the workers of chapter 10. One concrete case per point."
          },
          {
            "doel": "Summarise the structure and main ideas of the SSMS programme (course goal 3)",
            "uitleg": "The three worlds with SSMS in the middle, and the four core tasks that structure the degree: identify, analyse and assess; design and recommend; implement and coordinate; evaluate. See section 1."
          },
          {
            "doel": "Explain how elements of risk management and resilience apply to international safety and security (course goal 4)",
            "uitleg": "Risk as the effect of uncertainty on objectives (ISO 31000), the safety chain, and session 6 on resilience: Brooks and Coole's bodies of knowledge and Schulman's HROs, precursors and higher resolution reliability. Use an international case such as In Amenas or 9/11."
          },
          {
            "doel": "Link the sessions: intent, openness against secrecy, merge or separate, definitions, people",
            "uitleg": "Take each thread from section 9 and name two sessions or authors in which it appears. For example openness against secrecy: the security paradox (session 3), just culture (Jore) and the four tensions (Schulman), with Germanwings 9525 as the shared case."
          }
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this lesson is",
        "tekst": "**The mid-term exam is on Tuesday 10 November 2026**, a written Remindo exam. The course manual says the material is **all course literature and lecture slides**; the slide in session 1 says it references principles, concepts and topics from the course.\n\nThis lesson puts sessions 1 to 8 together: per session a dense academic summary of all key concepts, followed by the full story of that session in plain language (the same text as its Quick recap), and at the end the threads that connect the sessions. For the full detail, go to the session lessons.\n\n**Not in this lesson yet:** session 7 (guest lecture) and the recap lecture of session 8, because their slides are not in the app. Add your own notes from those sessions."
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
        "type": "uitleg",
        "tekst": "**The full story of the lecture, in plain language** (the same text as the Quick recap of session 1)"
      },
      {
        "type": "tekst",
        "tekst": "**Why this lecture matters more than it looks**\n\nLecture 1 looks like a warm-up: who your lecturers are (Jonathan Corr and Enrique Gomez Llata Cazares), how the course works, how you are tested. But the second half lays the foundation for everything after it. One of the course goals is that you can **explain the structure and main ideas of the SSMS programme**, so this lecture is exam material in itself.\n\nThe practical part: the mid-term and the end-term each count for 50 per cent. The slide says the end-term is an **individual presentation** (the manual calls it an oral assessment), so practise saying things out loud, not just recognising them."
      },
      {
        "type": "tekst",
        "tekst": "**Three worlds, one programme**\n\nSSMS covers **three worlds** of safety and security, with SSMS in the middle of the diagram:\n- **Public safety**: police, fire brigade and rescue teams, local government, welfare organisations. Question: how do we protect citizens in public space?\n- **Industrial safety / corporate security**: corporations and their SHEQ departments (safety, health, environment and quality). Question: how do we protect processes, staff, assets and continuity?\n- **International security**: security agencies, intelligence services, the military, IGOs and NGOs, consultancy firms, think tanks. Question: who threatens whom between states?\n\nThe question that carries the whole course: **what do all these kinds of safety and security have in common?** The lecture's one-word answer comes a few slides later: **risk**."
      },
      {
        "type": "tekst",
        "tekst": "**The one difference that matters most: intent**\n\nThe key distinction between safety and security is **human intentionality**:\n- **Safety management** deals with natural disasters, accidents and human error: nobody wants it to go wrong.\n- **Security management** deals with intentional adversaries, deliberate activities and crime: someone wants it to go wrong, and adapts to your measures.\n\nThat has big consequences. In safety, **openness** helps: reporting near-misses makes the system safer, and statistics work because accidents follow patterns. In security, **confidentiality** matters, because sharing your weaknesses helps the attacker, and statistics work only partly, because attackers change their methods. A fire alarm is a safety measure; access control and staff screening are security measures.\n\nThis idea comes back in almost every chapter of the book, so learn it well. Later sessions sharpen it: chapter 2 talks about intentional **effects on objectives**, Jore (chapter 5) about **malicious** intent."
      },
      {
        "type": "tekst",
        "tekst": "**Four definitions, and three words you must not miss**\n\nThe slides give four definitions, word for word:\n- **Physical safety**: the extent to which people are protected **and feel protected** against personal harm caused by accidents and against calamities of non-human origin.\n- **Industrial safety**: the prevention or reduction of threats to a business, its employees or environment due to natural risks (such as flooding) and risks connected with production processes or logistics.\n- **Security** (corporate, international, regional, physical, cyber and more): the prevention or reduction of **malicious** infliction of damage on citizens, employees, and public and private assets.\n- **Public security**: the extent to which people are protected **and feel protected** against personal harm due to crime, offences and harassment by other people.\n\nNotice **\"and feel protected\"** in physical safety and public security. There is an **objective** side (are you actually safe?) and a **subjective** side (do you feel safe?). The two can differ: crime figures can fall while people feel less safe. A professional has to work on both.\n\nWhat do all four have in common? **Risk.**"
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nSSMS spans three worlds: public safety, industrial safety and corporate security, and international security. What links them is risk. Safety is about things going wrong by accident, security about someone wanting harm. Four definitions to learn word for word, and two of them include feeling protected as well as being protected."
      },
      {
        "type": "tekst",
        "tekst": "**Risk, old and new**\n\n**Risk** on the slide: uncertainty about a potentially negative outcome (of a decision), or in a formula: **probability x impact**.\n\nThe slide compares \"old\" and \"modern\" risks in a three-row table:\n- **Origin**: old risks are natural, \"god-given\" (earthquakes, failed harvests, disease); modern risks are **man-made and technological** (nuclear power, cyberattacks, climate change).\n- **Scale**: old risks are small-scale and local; modern risks are **large-scale**, and they become **political**.\n- **Distribution**: old risks were unequally distributed, hitting one and sparing another; modern risks are said to be **equally distributed**.\n\nThat third row is the contested one. The lesson links it to Beck's risk society (\"poverty is hierarchical, smog is democratic\"), with the criticism that rich people can still protect themselves much better. Beck is not on the slides in the Project, so treat that link as unchecked."
      },
      {
        "type": "tekst",
        "tekst": "**What a safety and security professional does**\n\nThe slide gives **four core tasks**, which are also the structure of the whole degree:\n1. **Identify, analyse and assess** risk situations: risk analyses.\n2. **Design and recommend** feasible interventions: plans, policies, regulations, strategies.\n3. **Implement and coordinate** those interventions: tactics, methods and tools, based on information.\n4. **Evaluate** the interventions and solutions: were they effective?\n\nThen the cycle closes: what you learn in the evaluation feeds the next analysis.\n\nAnd you do all of that while dealing with \"insecurities\" in **people, systems, technology, beliefs, culture and much more**. The technology is rarely the hardest part; the people around it usually are."
      },
      {
        "type": "tekst",
        "tekst": "**Connecting the dots**\n\nThe lecture closes its content with a diagram from **Ljungqvist (2017)** on the human and societal dimensions of past climate change. In the lesson's description, it shows a chain: climate change affects agricultural productivity, then the food supply, and from there it runs to social unrest and armed conflict, to migration, and to food shortage, poor health and epidemics, with the tracks linked to each other. (The diagram is an image, so its details are not in the Project text of the slides.)\n\nWhy is that in a safety and security lecture? It is the illustration of **connecting the dots**: a climate phenomenon can end, through a chain of steps, in an armed conflict. If you only look at the start or the end of the chain, you do not understand what is happening. That is exactly why SSMS puts three worlds together."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nRisk is uncertainty about a negative outcome, probability times impact. Modern risks are man-made, large-scale and political, and whether they are equally spread is contested. The professional analyses, designs, implements and evaluates, and has to connect the dots between worlds, as the climate chain shows."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 6 things**\n\n1. The three worlds: public safety; industrial safety and corporate security; international security.\n2. The key distinction: human intentionality; safety is about accidents and error, security about intentional adversaries.\n3. The four definitions word for word; \"and feel protected\" in physical safety and public security.\n4. What they share: risk, uncertainty about a potentially negative outcome, probability x impact.\n5. Old against modern risks: natural or man-made, small or large-scale, unequally or equally distributed (the contested one).\n6. The four core tasks: identify, analyse and assess; design and recommend; implement and coordinate; evaluate. And connecting the dots (Ljungqvist)."
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
        "type": "uitleg",
        "tekst": "**The full story of chapter 1, in plain language** (the same text as the Quick recap of session 2)"
      },
      {
        "type": "tekst",
        "tekst": "**The paradox the whole book rests on**\n\nStart with a strange fact: **the safer and more secure our organisations become, the more we demand of them.** You would expect people to relax when things get safer. The opposite happens. Every improvement moves the bar, because every remaining incident now stands out and becomes bigger news.\n\nThink of flying: it has never been safer, yet one crash dominates the news for weeks. That is why safety and security work is never \"done\"."
      },
      {
        "type": "tekst",
        "tekst": "**Two fields with different histories**\n\nSafety and security grew up apart, which is why they still speak different languages.\n\n**Safety** comes from **hazardous technologies and industries**: energy, chemicals, transport, water, healthcare. It lived in regulation and management. From the **1980s** researchers started to see accidents not as bad luck or one person's mistake, but as the result of **organisational and societal** developments. Two classics: Turner's *Man-made Disasters* (1978) and Perrow's *Normal Accidents*, which says that systems with **interactive complexity** and **tight coupling** will sooner or later have accidents.\n\n**Security** started as **state security**: protecting a country against other states. Civil industry only mattered for military defence. From the late 1980s attention turned to how **vulnerable** societies themselves are. Until 2001 security was a small part of the picture. Then came **9/11**: \"free-floating dread\", new policies and new agencies (like the TSA for airport security in the US)."
      },
      {
        "type": "tekst",
        "tekst": "**When the two met: the interface after 9/11**\n\nAfter 9/11, security moved into the world of hazardous industries, where safety already ruled. That created an **interface** with **four consequences**:\n\n1. a **new category of threats** to understand;\n2. **new collaborations** and domains;\n3. **doubt** about whether existing protection still works;\n4. interactions that are **far from obvious**, especially in **normal** situations, not just in a crisis. Safety and security practices can even work **against** each other (Pettersen and Bjørnskau, 2015).\n\nEveryday collisions you can picture:\n- **The emergency exit**: safety wants it always open from the inside so people can escape; security wants nobody slipping out (or in) unseen.\n- **Reporting**: safety wants no blame, so people dare to report mistakes; security wants reports traceable to persons.\n- **Publishing**: safety wants open reports so others learn; security wants confidentiality so attackers do not learn.\n\nOn top of that, hazards and threats are increasingly seen as **systemic risks**, connected to global events. And with deregulation, privatisation and outsourcing, detailed rules give way to **risk management**: organisations must manage risks themselves."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nThe safer we get, the more we expect. Safety grew from dangerous industries, security from protecting the state; after 9/11 they collided, with new threats, new partners, doubts about old protection, and everyday clashes like the emergency exit, reporting and publishing."
      },
      {
        "type": "tekst",
        "tekst": "**Two ways to tell safety from security**\n\nHow do you know whether something is a safety or a security issue? The book gives **two axes**:\n\n**Axis 1: intentionality.** Did someone do it **on purpose**? Accidents, hazards and errors are **safety**; malicious, intentional threats are **security**. Weak spot: intent is often only known **afterwards**.\n\n**Axis 2: origin and effect.** In which **direction** does the harm go? In **safety** the system must not harm its environment (a chemical plant leaking into a river). In **security** the environment must not harm the system (an attacker breaking in). Weak spot: **insiders** sit inside the system boundary. The SEMA framework adds a third direction: the system harming **itself**.\n\nThe tricky part: the two axes can give **different answers** for the same case. A disgruntled ex-employee deliberately opens a valve and chemicals flow into a river. On purpose? Yes, so security. Which way does the harm go? From the system into its environment, so safety. **That grey area is exactly what the book is about.**"
      },
      {
        "type": "tekst",
        "tekst": "**Why defining is so hard, and why people must decide anyway**\n\nTwo reasons the definitions stay fuzzy:\n- **Language**: many languages have a single word for safety and security, unlike English (the book). The slide of session 5 names them: Dutch \"veiligheid\", German \"Sicherheit\", French \"sécurité\".\n- **Different scientific traditions**: engineers, criminologists and management scholars each look differently.\n\nScience and technology often **widen** the gap: at airports, screening staff and safety staff have different training, different technology and different rules. Yet **ordinary workers**, managers and officers have to act **before** anyone has decided whether something is safety or security.\n\nThe book looks at the question from **three vantage points**:\n- **conceptual**: Blokland and Reniers (chapter 2), Jore (chapter 5);\n- **technical and methodological**: Leveson (chapter 3), Wipf (chapter 4), Bongiovanni (chapter 6);\n- **management and practice**: Brooks and Coole (7), La Porte (8), Schulman (9), Boustras (10).\nEach is \"right\" from its own point of view."
      },
      {
        "type": "tekst",
        "tekst": "**Limits, open questions and four tensions**\n\n**Limits**: accidents and attacks will keep happening; there are always more ways a complex system can fail than work (Schulman). Both fields are young as sciences, and many requirements are legal or economic and come more from policy than from research. So **compliance is not the same as being safe**.\n\n**Three questions** the book hands to you: What is safe and secure **enough**? What do new demands mean for **people**? **Who gains** and who gets the strain (La Porte)?\n\n**Four tensions** to learn:\n1. **Merge or keep separate?** There is no proven answer.\n2. **Regulators** get security tasks without a knowledge base for them (the EASA example).\n3. **Transparency** collides: safety learns through openness, security needs confidentiality.\n4. **Research is lopsided**: mostly engineering, little on how management works in practice."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nYou can split safety and security by intent or by the direction of harm, but the two tests can disagree, as with the ex-employee and the valve. Language and different sciences keep definitions fuzzy, while practitioners must act anyway. The book has three vantage points, three open questions and four tensions."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. The paradox: the safer we become, the more we demand.\n2. Safety comes from hazardous industries (Turner, Perrow), security from state security; 9/11 brought them together.\n3. The interface has four consequences; everyday collisions: emergency exit, reporting, publishing.\n4. Two axes: intentionality and the direction of harm; they can disagree (the ex-employee and the valve).\n5. Definitions stay fuzzy because of language and different traditions, but people must decide anyway; three vantage points in the book.\n6. Compliance is not the same as being safe; three questions: safe enough, people, who gains.\n7. Four tensions: merge or separate, regulators without a knowledge base, transparency, lopsided research."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 2, in plain language** (the same text as the Quick recap of session 2)"
      },
      {
        "type": "tekst",
        "tekst": "**Why bother with definitions at all?**\n\nChapter 2 starts with a complaint: safety and security science has **no shared basis** for its words. There are many definitions of safety and almost none of its opposite. Table 2.1 shows it with Google Scholar hits: about 3.45 million for \"safety\" against 8,800 for \"unsafety\".\n\nWhy does that matter? Precise definitions give three things: **standardisation**, **better communication** and **unambiguous sharing of knowledge**. The authors borrow a comparison: you can only combine results from different experiments if there are standards, just as parts from different manufacturers only fit together with manufacturing standards.\n\nThe chapter also rejects **two misconceptions**: that risk and safety are simply opposites, and that safety and security are entirely separate fields.\n\nThe lecture adds a distinction with its own slide: **semantic** questions (what do the words mean, so that we communicate clearly?) against **ontological** questions (what must actually exist for risk, safety or security to exist at all?)."
      },
      {
        "type": "tekst",
        "tekst": "**Everything starts with objectives**\n\nThe whole chapter is built on one definition from the international standard **ISO 31000**: **risk is the effect of uncertainty on objectives**. Learn it word for word.\n\nSo the first question is always: **what are we trying to achieve or protect?** The lecture repeats that question at the end. **Objectives** are everything that individuals, organisations or society want, need or pursue. Four pairs show how wide that is:\n- tangible and intangible (a building, a reputation);\n- individual, organisational and societal;\n- still to be achieved and already achieved (things you have and want to keep);\n- conscious and unconscious. Your own health is an objective you never wrote down, which is why risk can exist without anyone formulating a goal.\n\nFor risk to exist you need **three elements at once**: **objectives**, **effects** that can touch those objectives, and **uncertainty**. Remove one and there is no risk."
      },
      {
        "type": "tekst",
        "tekst": "**Risk is not the same as safety**\n\nThe fundamental difference: **risk** is about an **uncertain future** state; **safety** is about **actual** conditions now. Positive effects increase safety, negative effects increase unsafety.\n\nThe authors' definitions:\n- **Safety**: the condition in which the likelihood of negative effects on objectives is **low**.\n- **Security**: the condition in which the likelihood of **intentional** negative effects on objectives is low.\n\nSo **security is a subset of safety**: every intentional negative effect is also a negative effect. That is a surprising move, because in everyday language people treat them as two separate things.\n\nTwo more ideas: risk, safety and security are **constructs in people's minds** (the **quality of perception**), because people have different objectives and value them differently. And **constraints** are the limits that must not be exceeded while you pursue your objectives. The chapter also mentions the shift from **Safety-I** (only preventing things going wrong) to **Safety-II** (also the condition of excellent performance in achieving objectives)."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nThe field lacks shared words, and precise definitions help you standardise, communicate and share knowledge. Everything starts with objectives: risk is the effect of uncertainty on objectives, and needs objectives, effects and uncertainty together. Safety is low likelihood of negative effects, security low likelihood of intentional negative effects, so security is a subset of safety."
      },
      {
        "type": "tekst",
        "tekst": "**Three levels where safety and security differ**\n\nBlokland and Reniers compare safety and security on three levels:\n\n1. **Effects**: in safety they are **unintentional**, in security **intentional**. Use the word security only for intentional effects.\n2. **Objectives**: safety concerns the objectives of **one** party; security involves **at least two parties** whose objectives clash. Picture objectives as **arrows**: if two arrows point the same way they are aligned; once they are **more than 90 degrees** apart, one party's success harms the other. In security management the core task is to **discover** that clash.\n3. **Uncertainty**: in safety events **repeat**, so statistics work; in security the adversary keeps inventing **new tactics**, so you need other tools such as **game theory** (Wipf, chapter 4).\n\nFrom that, the opposite of security: **unsecurity** is the condition in which the alignment of objectives is **low** and the likelihood of intentional negative effects is **high**. Both conditions are needed. The authors avoid \"insecurity\", because in everyday English that means a lack of self-confidence."
      },
      {
        "type": "tekst",
        "tekst": "**The campus example and four moves to management**\n\nThe lecture's exam-shaped example: a campus with one objective, **students and staff able to study and work without serious harm or disruption**.\n- Wet stairs lead to a fall: an **unintentional** effect, so **safety**.\n- Someone sets the building on fire on purpose: an **intentional** effect, so **security**.\nSame protected objective, different **nature of the negative effect**.\n\nAnd one step the chapter does not spell out, from concepts to management in **four moves**:\n1. identify the **objectives**;\n2. identify the **risk sources**;\n3. consider the **effects**;\n4. set **constraints**, the limits that must not be exceeded."
      },
      {
        "type": "tekst",
        "tekst": "**Three traps**\n\n1. **Risk is not the opposite of safety.** They are different kinds of things: one is about an uncertain future, the other about actual conditions.\n2. **\"Intentional\" refers to the effect on objectives, not to the act.** A cleaner who props open a fire door does it on purpose but does not intend harm; a burglar who walks in does. Only the burglar makes it security.\n3. **Unsecurity is not just \"no security\".** It needs low alignment of objectives **and** a high likelihood of intentional harm."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nSafety and security differ in effects (intentional or not), objectives (one party or clashing parties, more than 90 degrees apart) and uncertainty (statistics or an adapting opponent). The campus example: same objective, different nature of the effect. From concepts to management: objectives, risk sources, effects, constraints."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. No shared semantic basis; definitions give standardisation, communication and knowledge-sharing; semantic against ontological questions.\n2. ISO 31000: risk is the effect of uncertainty on objectives.\n3. Objectives cover everything wanted or already had, conscious or unconscious; risk needs objectives, effects and uncertainty.\n4. Risk is about an uncertain future, safety about actual conditions.\n5. Safety: low likelihood of negative effects; security: low likelihood of intentional negative effects, so a subset of safety.\n6. Three levels: effects, objectives (the 90-degree criterion), uncertainty (game theory); unsecurity needs two conditions.\n7. The campus example, the four moves to management, and the three traps."
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
        "type": "uitleg",
        "tekst": "**The full story of the lecture, in plain language** (the same text as the Quick recap of session 3)"
      },
      {
        "type": "tekst",
        "tekst": "**The big claim: it is the talking that fails**\n\nThe whole session in one line: **technical systems fail less often than the communication between the people running them.** Planes, control rooms and police operations usually go wrong not because a machine breaks, but because people misunderstand each other, do not dare to speak up, or share the wrong information.\n\nIt starts with words. **Definitions are not neutral**: how you define safety decides what counts as a problem worth talking about (the slide attributes this to Leveson, chapter 3). The evidence on the slide: about **3.45 million** Google Scholar hits for \"safety\" against **8,800** for \"unsafety\" (Blokland and Reniers, chapter 2). The lecturer's criticism: the field keeps reopening this semantic debate instead of settling it, but definitions still matter, because without them you cannot compare organisations, incidents or years."
      },
      {
        "type": "tekst",
        "tekst": "**The safety chain: the backbone of the lecture**\n\nThe lecture organises everything along the **safety chain**, five links in a fixed order. For each link, know what happens and what communication does there:\n\n1. **Proaction**: removing the structural causes of insecurity. Communication: spatial and policy decisions, and who gets consulted.\n2. **Prevention**: lowering the chance and the consequences of an incident. Communication: public awareness, risk assessment, early warning.\n3. **Preparation**: being ready for what you could not prevent. Communication: emergency plans, training, simulation exercises.\n4. **Repression**: acting during the incident. Communication: situation assessment, orders, evacuation messages.\n5. **Recovery**: restoring and learning. Communication: damage assessment, compensation, revising the plans.\n\nExpect an exam question that asks you to walk an incident along these five links, as the lecture does with the Manila case."
      },
      {
        "type": "tekst",
        "tekst": "**Two kinds of communication**\n\n**Risk communication** is for people who are **not** in danger right now. There is time for nuance, dialogue and repetition, and the aim is **increasing preparedness**. It sits in the early links: proaction, prevention, preparation.\n\n**Crisis communication** is for people **in the middle** of the event: time pressure, incomplete information, media everywhere. It needs **one voice, one clear instruction and speed**. Careful: the lecturer draws it as the **widest** arrow on the chain, active before, during and long after the crisis, with its core in the acute phase (repression). The third mode, **evaluation**, runs from repression to recovery.\n\nThe model to use is **Lasswell**, in the risk communication version (Rahman and Munadi, 2019): **who** says **what**, in **which channel**, to **whom**, with **what effect**, where the effect is increasing preparedness. Example: a municipality (who) warns about floods (what) via a text message and a local radio station (channel) to residents of a low-lying street (whom), so that they prepare an emergency kit (effect)."
      },
      {
        "type": "tekst",
        "tekst": "**Five challenges and nine quality criteria**\n\nIn a multi-agency operation (police, fire brigade, ambulance, municipality together) five things make communication hard:\n1. **stress and uncertainty**;\n2. **discrepancies in working style**;\n3. **type of personnel and level of professionalism**;\n4. **different concepts of time**: \"now\" means seconds to a medical team, something else to an investigator or a municipality;\n5. **language and jargon**, which affects the **quality of perception** (chapter 2): if people define words differently, they see different situations.\n\nInformation in an intervention must be of high quality. The **nine criteria**: accurate, concise, believable, complete, clear, valid, objective, **redundant**, up to date. Redundant sounds odd, but it means a critical fact reaches command through **more than one route**, so one broken link does not blind the operation. The lecturer's question: which two are hardest to meet at the same time? Complete and up to date."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nMost disasters are communication failures. Words matter because definitions decide what counts as a problem. The safety chain runs from proaction to recovery, with a communication task in every link. Risk communication prepares people calmly; crisis communication gives one clear order fast. Lasswell structures a message; five challenges and nine criteria decide whether it works."
      },
      {
        "type": "tekst",
        "tekst": "**The security paradox**\n\nHere safety and security collide. **Safety** runs on **openness**: sharing near-misses and weak signals so everyone learns (compare chapter 9). **Security** runs on **containment**: keeping information hidden so adversaries cannot map your defences.\n\nThe case in point is the **cockpit door**. After 9/11 cockpit doors were hardened to keep intruders out. In **Germanwings 9525** (March 2015) a co-pilot used that same door to lock the captain out. One measure, two missions, opposite effects.\n\nThe slide asks a discussion question: **where might a need-to-know culture undermine a speak-up culture?** A question the lecturer puts on a slide is a question that can come back."
      },
      {
        "type": "tekst",
        "tekst": "**Three cases, three lessons**\n\nThe lecture groups the cases under three headings rather than telling them as stories.\n\n**Avianca 52 (1990): broken lateral communication.** A flight from Colombia to New York circled over a backed-up airport and ran out of fuel. The crew told air traffic control they were \"running out of fuel\", but never declared an emergency, and accepted another detour. The information was sent; the message never arrived. That is **mitigated speech**: softening a message out of politeness or deference until its content disappears.\n\n**Korean Air 801 (1997): steep hierarchy.** On the way to Guam in bad weather, the captain had committed to a visual landing. The first officer and the flight engineer both warned him, but only as **hints** (\"the weather radar has helped us a lot\"). In a steep hierarchy you do not contradict the captain. The plane flew into high ground.\n\n**Manila (2010): information without control.** A dismissed police officer, Rolando Mendoza, took 15 Hong Kong tourists hostage on a bus to get his job back. After a 10-hour standoff and a 90-minute gunfight, nine people died, including Mendoza. The lecture walks it along the chain: no clear chain of command (**proaction**), poor crowd control and an underestimated situation (**repression**), a live, unfiltered broadcast the hostage-taker could watch himself (**information without control**), and afterwards harassment, travel advisories, job losses and diplomatic damage (**recovery**)."
      },
      {
        "type": "tekst",
        "tekst": "**What to take away**\n\nThe lecture ends with four points:\n1. **Trustworthiness**: people judge messages on how trustworthy the sender is, and openly sharing information builds trust. (Note the tension with the security paradox.)\n2. **Skills in practice**: listening, interviewing, recognising, acknowledging, asking questions, negotiating.\n3. **Information gathering on the ground** is crucial. Example from the lecture: **Ushahidi**, a platform for crowdsourced crisis information. The slide only names it; the background (built during the post-election violence in Kenya, 2007-2008, people reporting incidents by text message that were mapped in near real time) is general knowledge.\n4. **Participation**: involve stakeholders when you plan, implement and assess."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nSafety wants openness, security wants secrecy, and the Germanwings cockpit door shows how one measure can serve one mission and hurt the other. Avianca shows mitigated speech, Korean Air a steep hierarchy, Manila information without control along the whole chain. The fix: trust, practical skills, information from the ground, and participation."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 8 things**\n\n1. Technical systems fail less often than communication between people.\n2. Definitions are not neutral (Leveson); 3.45 million against 8,800 Google Scholar hits.\n3. The safety chain: proaction, prevention, preparation, repression, recovery, each with a communication task.\n4. Risk communication (not in danger, preparedness) against crisis communication (in the event, one voice, speed; the widest arrow).\n5. Lasswell: who, says what, in which channel, to whom, with what effect (Rahman and Munadi, 2019).\n6. Five intervention challenges; nine quality criteria, including redundant.\n7. The security paradox: openness against containment; the Germanwings cockpit door; need-to-know against speak-up.\n8. Avianca 52 (mitigated speech), Korean Air 801 (hierarchy), Manila (information without control); the four conclusions."
      },
      {
        "type": "tekst",
        "titel": "Session 4: stakeholders, actors and culture (chapters 3 and 5)",
        "toetsstof": true,
        "tekst": "**Leveson (ch. 3): two sides of the same coin.** There is no right or wrong definition, only the one you choose, and a narrow definition limits the overlap and the solutions. **Safety** is freedom from accidents (losses). A **hazard** is a system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss; a **vulnerability** is in her view essentially the same thing.\n\n**Safety is not reliability**: components can be perfectly reliable and accidents still happen, and an unreliable system can still be safe. Security, for its part, focuses too narrowly on **information**; losses of **mission assurance** matter just as much.\n\n**Stuxnet:** whether the controller wrongly believed the speed was lower by error or by attack, the best control is the same: a mechanical interlock or an analogue tachometer. Intent differs, but matters little for the solution when the consequences are the same.\n\n**STAMP** is the model (safety and security as a control problem); **CAST** analyses losses that have happened, **STPA** losses that have not yet happened. In STPA, security enters **after** the unsafe control actions and their scenarios are found: how could an adversary inject, spoof, tamper with, intercept or leak feedback and information?"
      },
      {
        "type": "tekst",
        "tekst": "**Jore (ch. 5): security culture.** The case is **In Amenas** (16 January 2013): 32 terrorists attacked an Algerian oil facility with almost 800 workers; 40 people from 10 countries were killed, five of them from Statoil. Statoil's investigation named a lacking security culture.\n\nJore's distinction is **malicious intent**, not intentionality: a worker who deliberately skips goggles acts intentionally, but that is still safety. Judged on **Gerring's eight criteria**, security culture scores high on familiarity and resonance, low on parsimony, coherence, differentiation and depth, and mixed on utility.\n\nThree safety ideas do not transfer easily: **just culture**, **everyone committed** (does that mean suspicion of colleagues?) and **weak signals** (attackers hide their plans). Her conclusion: security and safety culture should be **understood separately, but in practical reality not treated as distinct**."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nLeveson says: whether a machine breaks by accident or by attack, you protect it with the same kind of control, so analyse safety and security together. Jore looks at culture: borrowing \"safety culture\" for security is tempting, but it does not fit neatly, because openness and trust clash with an enemy who hides."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 3, in plain language** (the same text as the Quick recap of session 4)"
      },
      {
        "type": "tekst",
        "tekst": "**Two sides of the same coin?**\n\nLecture 4 starts with a question: are safety and security **two sides of the same coin**? Nancy Leveson, an engineer, says: largely yes, if you define them well.\n\nHer starting point: **there is no right or wrong definition, only the one you choose to use**. And the choice matters. A **narrow** definition (safety is about machines, security is about information) splits the two fields and limits the solutions you can see. An **inclusive** definition shows how much they overlap. Even within safety, engineers, social scientists and different industries define it differently."
      },
      {
        "type": "tekst",
        "tekst": "**The definitions to know**\n\nLearn these four word for word:\n- **Safety**: freedom from accidents (losses).\n- **Accident** or mishap: any undesired or unplanned event that results in a loss, as defined by the stakeholders. A loss can be injury or death, damage, pollution, a lost mission or reputational harm.\n- **Hazard**: a system state or set of conditions that, together with worst-case environmental conditions, will lead to a loss.\n- **Hazard analysis**: identifying the causal scenarios of hazards.\n\nThe important twist: a hazard is a state of the **system**, not of the environment. Her example: **the mountain is not the hazard; flying too close to it is**. Why? Because designers and operators can only control what is inside the system: you cannot move the mountain, but you can keep the plane away from it.\n\nAnd security? A **vulnerability** is, in Leveson's view, essentially the same thing as a hazard. Security just adds a few extra causal scenarios: someone doing it on purpose."
      },
      {
        "type": "tekst",
        "tekst": "**Safety is not reliability**\n\nThis sounds strange, but it is the core of the chapter. Since software entered critical systems (from about 1980), design errors can no longer all be removed before use. Two claims follow:\n- Components can be **perfectly reliable** and an accident can still happen: every part does exactly what it was designed to do, but the combination is dangerous.\n- Components, even the whole system, can be **unreliable** and the system can still be **safe**.\n\nSo preventing failures is not the same as preventing losses. The old way of thinking, a **chain of events** or the **Swiss cheese model** (failures lining up until something goes wrong), is no longer enough for complex systems.\n\nSecurity has a similar blind spot: it focuses too narrowly on **information** and keeping intruders out. But important losses have nothing to do with information, such as **mission assurance**: keeping a power plant producing or a space mission on track. And keeping people out has proved almost impossible for systems connected to the outside world."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nThere is no right definition, only a useful one, and narrow definitions hide the overlap. Safety is freedom from losses; a hazard is a state of the system, not the mountain but flying too close to it. Safety is not reliability, and security is more than protecting information."
      },
      {
        "type": "tekst",
        "tekst": "**Stuxnet: does intent matter?**\n\nLeveson's favourite example is **Stuxnet**, the attack on Iranian centrifuges. Walk the chain:\n- **Loss**: damaged centrifuges.\n- **Hazard**: the centrifuges spinning too fast.\n- **Constraint**: never spin above the maximum speed.\n- **Unsafe control action**: the controller gives the command \"increase speed\" while the centrifuge is already at its maximum.\n- **Cause**: the controller wrongly believes the speed is lower than it is.\n\nWas that wrong belief caused by an error or by an attack? Leveson's point: **it hardly matters for the solution**. The best control is the same either way: a **mechanical interlock** or an **analogue tachometer** that cannot be fooled by software. Intent differs, but when the consequences are the same, the protection can be the same."
      },
      {
        "type": "tekst",
        "tekst": "**STAMP, CAST and STPA**\n\nLeveson's alternative to the chain-of-events view is **systems theory**:\n- **STAMP** is the **model**: safety and security as a dynamic **control problem**, enforcing constraints on components and their interactions.\n- **CAST** is a **tool** built on STAMP for analysing losses that **have already happened**.\n- **STPA** is a **tool** built on STAMP for analysing losses that **have not yet happened**.\n\nDo not mix them up: STAMP is not a method and STPA is not a model.\n\n**How STPA works**, with the aircraft braking system example. Step 1: find the **unsafe control actions** in four columns: not providing the action, providing it, providing it too early, too late or in the wrong order, and stopping too soon or applying it too long. Step 2: find the **scenarios** that lead to them. Only **then** does security come in: how could an adversary **inject, spoof, tamper with, intercept or leak** feedback and information? For the brakes: an attacker spoofs the wheel-speed feedback, or delays it with a denial-of-service attack. STPA treats people the same way it treats hardware and software."
      },
      {
        "type": "tekst",
        "tekst": "**Leveson's conclusion**\n\nSafety and security can be handled with **one integrated process**, on three conditions:\n1. safety analysis goes **beyond reliability**;\n2. security goes **beyond information** and keeping intruders out;\n3. the field shifts from chain-of-events models to **systems theory**.\n\nShe adds that in the comparisons done so far (a hundred or so), the system-theoretic and integrated approaches have proven superior. Keep that claim with her name: other authors in the book (Brooks and Coole, Schulman) are much more sceptical about integration."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nStuxnet shows that whether a wrong belief comes from error or attack, the best control is the same. STAMP is the model, CAST looks back, STPA looks ahead and adds security only after the unsafe control actions are found. Leveson's conclusion: one integrated process is possible if safety goes beyond reliability, security beyond information, and the field adopts systems theory."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. No right or wrong definitions, only useful ones; narrow definitions limit overlap and solutions.\n2. Safety: freedom from losses. Accident: an undesired event resulting in a loss. Hazard: a system state that, with worst-case conditions, leads to a loss.\n3. The mountain is not the hazard; flying too close to it is. A vulnerability is essentially a hazard.\n4. Safety is not reliability; security is more than information (mission assurance).\n5. Stuxnet: same control (mechanical interlock, analogue tachometer) whether by error or attack.\n6. STAMP (model), CAST (past losses), STPA (future losses); security enters STPA after the unsafe control actions: inject, spoof, tamper, intercept, leak.\n7. One integrated process on three conditions; systems theory instead of chain-of-events."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 5, in plain language** (the same text as the Quick recap of session 4)"
      },
      {
        "type": "tekst",
        "tekst": "**It starts in the desert: In Amenas**\n\nOn **16 January 2013**, 32 heavily armed terrorists attacked an Algerian oil facility at **In Amenas**, where almost 800 people were working. Many were taken hostage; the siege lasted four days. **40 people from 10 countries** were killed, five of them employees of the Norwegian company **Statoil**. It was the largest terrorist attack in the history of the oil and gas industry.\n\nStatoil's investigation came to a striking conclusion: the company lacked a strong **security culture**. That term did two jobs at once: it **explained** what had gone wrong, and it was the **solution** for the future. Sune Jore asks whether one concept, which nobody had properly defined, can carry that much."
      },
      {
        "type": "tekst",
        "tekst": "**What makes something security: malicious intent**\n\nLecture 1 said the difference between safety and security is intent. Jore sharpens that: it is not intentionality but **malicious intent**. Why? Because intent, and even crime, also happen in safety: a worker who deliberately does not wear goggles, or drug use at work. That is on purpose, but it is still a safety matter. Security begins where someone **genuinely wants to cause harm**.\n\nTwo more things make security different: threats often come from **outside** and are hard for the organisation to know about, and they are **not directly tied to profit and production**. And an attack is an event of **extremely low probability**, so Jore asks whether \"culture\" can work for it in the same way as in safety.\n\nThe Statoil report described a strong security culture with **five features**: hands-on security leadership with access to top management; high ambitions, with security as a discipline **separate** from safety; enough capacity and competence; a **holistic** approach as part of core processes; and transparent, active risk management. Notice the tension between \"separate\" and \"holistic\": that is the book's whole question in one list."
      },
      {
        "type": "tekst",
        "tekst": "**Is security culture a good concept? Gerring's test**\n\nTo judge the concept, Jore uses **Gerring's eight criteria** for a good concept: familiarity, resonance, parsimony, coherence, differentiation, depth, theoretical utility and field utility. The verdict:\n- **High** on **familiarity and resonance**: it leans on the well-known idea of safety culture, first used after Chernobyl (1986), so people immediately feel they understand it.\n- **Low** on **parsimony, coherence, differentiation and depth**: the literature is thin; one \"culture\" cannot cover phishing, sabotage and an armed attack at once; and it is hard to tell apart from safety culture and organisational culture.\n- **Mixed** on **utility**: the security field lacks theory, and a Norwegian study found companies using the term as a label without really changing how they organise security.\n\nThe lecture lists **four attractions** of the idea anyway: shared awareness, weak signals, mindfulness and resilience. That is why it is so tempting."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nIn Amenas made security culture famous, as both the explanation and the solution. Jore says security is about malicious intent, not just intent. On Gerring's criteria the concept sounds familiar but is vague, overlapping and thin, even though its promises are attractive."
      },
      {
        "type": "tekst",
        "tekst": "**What does not transfer from safety**\n\nSafety culture is built on **trust and openness**. Security assumes there is an **adversary**. So three popular safety ideas do not simply carry over:\n- **Just culture**: no-blame reporting assumes nobody meant harm. What does a just culture mean when the attacker has malicious intent? It also limits openness outside trusted communities.\n- **Everyone committed**: in safety everyone watches out for everyone. In security, does that mean being **suspicious of your colleagues**?\n- **Weak signals**: safety learns from small warning signs. But strategic attackers **hide** their plans, so the signals are weak on purpose.\n\nThe lecture puts it simply: safety culture cannot just be copied, because openness collides with confidentiality, and the concept has problems of overlap, boundaries and measurement."
      },
      {
        "type": "tekst",
        "tekst": "**Jore's conclusion**\n\nDespite all the objections, Jore keeps the concept. **Four conclusions**:\n1. It is **needed**: in complex, volatile environments like In Amenas, clear warnings rarely come, so organisations must aim for **resilience against multiple threats** and a collective security mindfulness.\n2. It is **poorly demarcated**, but so is safety culture, and that concept is still widely used.\n3. In practice it is a **duality**: the same people, routines and organisation carry both.\n4. It will become **more important** with digitalisation.\n\nAnd her formula, which you should be able to reproduce: security and safety culture should be **understood separately, but in practical reality should not be treated as distinct**.\n\nThe lecture's final question for the whole session: **when should safety and security be integrated, and when should they remain distinct?** Leveson (chapter 3) leans towards integration; Jore says understand them apart but manage them together."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nJust culture, everyone committed and weak signals do not transfer easily, because security has an enemy. Jore still keeps security culture: it is needed, as vague as safety culture, a duality in practice and growing with digitalisation. Understand them separately, but do not treat them as separate in practice."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. In Amenas, 16 January 2013: 32 attackers, almost 800 workers, 40 dead from 10 countries, five from Statoil; security culture as explanation and solution.\n2. Malicious intent, not intentionality, separates security from safety.\n3. Statoil's five features of a strong security culture; the tension between separate and holistic.\n4. Gerring's eight criteria: high on familiarity and resonance, low on parsimony, coherence, differentiation and depth, mixed on utility.\n5. Four attractions: shared awareness, weak signals, mindfulness, resilience.\n6. What does not transfer: just culture, everyone committed, weak signals.\n7. Four conclusions and the formula: understand separately, do not treat as separate in practice."
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
        "type": "uitleg",
        "tekst": "**The full story of the lecture, in plain language** (the same text as the Quick recap of session 5)"
      },
      {
        "type": "tekst",
        "tekst": "**A closed airport: safety, security or both?**\n\nThe lecture opens with a real case. On **22 September 2025** Copenhagen Airport closed to take-offs and landings for **about four hours**, because two or three large drones were flying near the airport. Oslo Airport closed the same night for about three hours after a separate sighting.\n\nThe question: **is this a safety problem, a security problem, or both?** The lecture answers it in layers, using the whole book.\n\n**Two ways to tell them apart:**\n- **Intent**: security needs **malicious** intent; a worker who deliberately skips a rule is still safety (Jore).\n- **Direction of harm**: in safety the system harms its surroundings; in security outsiders (or insiders) harm the system.\n\n**One language for both**: with ISO 31000 both are **risk**, the effect of uncertainty on objectives, and security is a subset of safety (Blokland and Reniers). But security has an **opponent who adapts**, so the past is a weaker guide.\n\nActivity 1 makes this concrete: a pilot's GPS position jumps over the Baltic, and nobody knows yet whether it is accidental or deliberate. What do you do before you know?"
      },
      {
        "type": "tekst",
        "tekst": "**Three positions in the debate**\n\n**1. One coin** (Leveson, chapter 3): the same losses, the same controls, whatever the cause. Her Stuxnet example: whether the controller was fooled by error or attack, a mechanical interlock is the best control. One analysis, STAMP and STPA.\n\n**2. Two diverging professions** (Brooks and Coole, chapter 7, with the editors, chapter 11): different bodies of knowledge, different controls, different practice, and opposite habits about information. Their slide carries the line \"in safety we trust, in security we distrust\"; in the book that line is the editors' heading (11.2.3).\n\n**3. Count the players** (Wipf, chapter 4): with zero or one player it is safety; with two or more it is security, and then **game theory** applies. The slide also puts the statistics point here, though in the book it is Blokland and Reniers.\n\nWipf's case is satellite navigation (GNSS). Three attacks, each more expensive and harder to spot:\n- **Jamming** (around €1,000, low knowledge): blocks the signal, easy to detect.\n- **Meaconing** (around €10,000, medium knowledge): rebroadcasts a delayed real signal, hard to detect.\n- **Spoofing** (around €100,000, high knowledge): sends a fake signal, hard to detect.\n**Spoofing is worse than jamming**: the receiver keeps working, with a believable but false position. The attacker's trade-off: more power means more impact, and more risk of being detected. In 2026 EASA reported a notable rise in GNSS jamming and spoofing near conflict zones and updated its Safety Information Bulletin (phraseology, training, air traffic control capacity)."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nThe Copenhagen drones raise the question: safety, security or both? Tell them apart by malicious intent or by the direction of harm; describe both as risk. Three positions: one coin (Leveson), two professions (Brooks and Coole), count the players (Wipf). GNSS shows the attacker's trade-off: spoofing is worse than jamming."
      },
      {
        "type": "tekst",
        "tekst": "**Where safety and security collide**\n\n**Schulman** (chapter 9): HROs make both stronger, but the two can also collide. The reinforced cockpit door, a security fix after 9/11, let the **Germanwings** co-pilot lock the captain out in March 2015.\n\n**Jore** (chapter 5): security culture is attractive but slippery, and **In Amenas** shows why companies reach for it.\n\n**La Porte** (chapter 8) places organisations in a **matrix** by how strong their safety and their security are:\n- **Both strong**: nuclear power operations, Navy carriers.\n- **Safety strong, security needs work**: NASA, the electricity grid.\n- **Security strong, safety needs work**: intelligence IT, military units, weapons labs.\n- **Both need work**: hospitals, local and regional government.\n\nHis questions: **who got there first?** (path dependence shapes the tension); if politicians demand more of the missing one, **who gets resources and power?**; and **expect surprise**: do not thin watchfulness for efficiency.\n\nActivity 2 asks you to place an organisation yourself (Schiphol, a hospital, the university, a municipality), say which came first, and name one tension and one workable compromise."
      },
      {
        "type": "tekst",
        "tekst": "**People inside the system**\n\n**Workers** (Boustras, chapter 10): attacks leave **psychosocial scars** and shake trust in the employer's duty to keep people safe; cyberattacks cascade through **systems of systems**; and the link between radicalisation and exclusion is **exploratory, not proven**.\n\n**Users** (Bongiovanni, chapter 6): safety and security are \"**eternal killjoys**\": they cost money without visible value for the user. His answer is **design thinking**: start from the user's experience. The slide's personas: **Alfred, 64**, risk-averse, accepts screening for safety's sake; **Wendy, 41**, flies every week and sees screening as lost time. Same screening, two experiences. (The slide adds that his model is yet to be tested in an airport.)\n\n**Society** (Bieder and Pettersen Gould, chapters 1 and 11): perception swings, amplified after attacks and disasters and weakened for new technologies with big benefits. And responsibility is spread: trust in institutions has fallen while privatisation and outsourcing share duties across many actors. Brussels Airport in 2016: the crisis team struggled to reach the crisis room, and site security was a government responsibility."
      },
      {
        "type": "tekst",
        "tekst": "**Back to Copenhagen: the toolkit**\n\nThe lecture ends by applying **six lenses** to the drones, one per author:\n- **Blokland and Reniers (objectives)**: whose objectives conflict, and who is the opponent?\n- **Leveson (constraints)**: what must never happen, whoever causes it?\n- **Brooks and Coole (professions)**: airport, police, air traffic control, military: who owns it?\n- **Schulman (collisions)**: what must be shared, and what withheld?\n- **La Porte (path)**: which regime came first, and who ramps up?\n- **Bieder and Pettersen Gould (scale)**: what lies beyond the airport's control?\n\nWhat we know from the news on the slide: police did **not** shoot the drones down because of the risk to passengers, aircraft and fuel depots (a safety judgement inside a security response); the operator was described as capable and a hybrid attack was not ruled out; the Danish prime minister called it the most serious attack on Danish infrastructure to date.\n\n**Four take-aways**:\n1. **Definitions shape solutions**: intent, direction of harm or objectives; your definition decides which tools fit.\n2. **Analyse together, organise carefully**: shared scenarios work, but professions, premises and legal duties differ.\n3. **Management means holding tensions**.\n4. **Zoom out**.\n\nThe lesson also mentions a likely exam question in the lecturer's words: merge them, or keep them apart? *(Unchecked: the lecturer's spoken words are not on the slides in the Project.)*"
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nSafety and security collide (Germanwings) and organisations sit in La Porte's matrix depending on what came first. Workers, users and society each experience safety and security differently. Six lenses, one per author, turn the Copenhagen case into an analysis, and four take-aways sum up the course."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. Copenhagen, 22 September 2025: safety, security or both?\n2. Two ways to distinguish: malicious intent and the direction of harm; ISO 31000 risk for both.\n3. Three positions: one coin (Leveson), two professions (Brooks and Coole, editors), count the players (Wipf).\n4. Jamming, meaconing, spoofing: spoofing is worst; the attacker's trade-off.\n5. Germanwings, In Amenas, and La Porte's matrix with path dependence.\n6. Workers (Boustras), users (Bongiovanni: eternal killjoys, Alfred and Wendy), society (perception, spread responsibility).\n7. Six lenses and four take-aways."
      },
      {
        "type": "tekst",
        "titel": "Session 6: resilience (chapters 7 and 9)",
        "toetsstof": true,
        "tekst": "**Brooks and Coole (ch. 7)** compare the **bodies of knowledge** of safety (as occupational health and safety) and security (as corporate security). Neither is yet a full profession; security is fragmented and segmented. They synthesise **five** security categories and **six** safety categories. The two **align** on risk management, controls, management and professional practice, and are **polar** on hazards against threats, technologies and underlying theories.\n\nA **hazard** exposes someone to injury or loss; a **threat** is the purposive intent and capability of an adversary. Both use ISO 31000, the same process with a different object. The similarities exist **only at an abstract level**; merging dilutes understanding, and **life safety takes precedence over security requirements**. Three forces will increase the divergence: greater societal risk aversion, higher expectations of professions, and both professions striving for professional status."
      },
      {
        "type": "tekst",
        "tekst": "**Schulman (ch. 9)** opens with a utility CEO who said that good safety management takes care of security too: a **convenient untruth**. High reliability organisations (HROs) preclude catastrophic events **deterministically**, by managing **precursors**; security can never meet that standard, because hostile strategy targets vulnerabilities and uses protections against you.\n\n**Germanwings 9525** is his example of **reciprocal vulnerability**: the hardened cockpit door kept intruders out and protected the attacker already inside. Other points: **design-based vulnerability** (the internet) lies beyond any single organisation; symbolic targets make even failed attacks work; and a known vulnerability analysis becomes a map for the attacker.\n\n**Four tensions:** anticipation against resilience to the unexpected; lateral communication against restricted information; accessibility against hardening (guns, gates and guards); fast inter-organisational emergency coordination against security frameworks. **What overlaps:** the management of representational error and the attitude behind it, including taking \"I find myself in uncharted territory\" seriously; the focus on precursors, which is limited in security because perpetrators hide them; and emergency response. Integration demands **higher resolution reliability**."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety experts and security experts learn different things, so their jobs are drifting apart, even though they look alike from far away. Schulman shows why one safety system does not automatically protect you against attackers: accidents do not think back, attackers do. What they can share is a sharp, questioning attitude."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 7, in plain language** (the same text as the Quick recap of session 6)"
      },
      {
        "type": "tekst",
        "tekst": "**The question: are safety and security two different jobs?**\n\nEarlier chapters looked at safety and security as ideas (Blokland and Reniers, Jore), methods (Leveson, Wipf) and user experiences (Bongiovanni). Brooks and Coole look at the **people who do the work**. Their research question: **do the knowledge categories of safety and security science show that the professions are diverging?**\n\nWhy look at knowledge? Because a **body of knowledge** is the primary characteristic of a profession: academic knowledge underpins and legitimises professional work (Abbott, 1988). It is systematic, logically structured and predictive.\n\nTo keep it manageable, they compare safety as **occupational health and safety (OHS)**, bounded by the workplace and by law, with security as **corporate security**, a deliberate narrowing, because security runs all the way from national security to community security."
      },
      {
        "type": "tekst",
        "tekst": "**What makes a profession**\n\nAn occupation becomes a profession when it has five things:\n- agreed and enforced **codes of conduct**;\n- **education standards** (accredited, recognised training);\n- **professional development** (keeping your competence up to date);\n- a **college of peers** who hold each other to the standard;\n- a distinct, formal **body of knowledge**, the most important one.\n\nTheir finding: **neither** security nor safety has yet achieved designated professional status. Security lacks a defined body of knowledge; in Jore's words, the field is fragmented and segmented. Safety is called an emerging profession that is not yet well defined. Be careful: the book does not say safety is \"further along\"; that is an easy mistake."
      },
      {
        "type": "tekst",
        "tekst": "**Two bodies of knowledge**\n\n**Security** has several knowledge models: ASIS (2009, 18 categories), Brooks (2009, 13 categories, taken from 104 university courses), the Enterprise Security Competency Model (2015) and Coole and colleagues (2017), who borrow the medical structure **diagnosis, inference, treatment**. Brooks and Coole combine them into **five categories**: threats and risks; control; security management; technical and behavioural discipline; professional practice.\n\n**Safety** has the SIA Model of OHS Practice (2012), which describes a way of working rather than content, and the INSHPO Capability Framework (2017). Combined into **six categories**: hazards and risks; control; safety and health management; role and function; technical and behavioural discipline; management science.\n\nAt first sight they look alike. But look at the very first word: **threats** against **hazards**."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nBrooks and Coole compare the knowledge behind the two jobs, because a body of knowledge is what makes a profession. Neither safety nor security is a full profession yet. Security's knowledge comes in five categories, safety's in six, and the first word already differs: threats against hazards."
      },
      {
        "type": "tekst",
        "tekst": "**Where they align and where they split**\n\n**Alignment on four points**: risk management, controls, management and professional practice. The authors add that these are generic capabilities expected in every profession, so they do not prove much.\n\n**Polarity on three points**: **hazards against threats**, **technologies**, and **underlying theories**.\n- A **hazard** is a danger that exposes someone to injury or loss, with accidental drivers. A **threat** is the purposive intent and capability of an adversary, with malicious drivers.\n- Both use **ISO 31000**: the same process, but filled in with a different object.\n- Safety's theories are about the workplace, health effects and non-malicious accidents; security's about **crime and crime prevention** (criminology).\n- Controls differ too: safety is people-oriented (human error and compliance); security hardens buildings to **deter and delay**, uses technology to **detect** and personnel to **respond**.\n\n**Legislation** looks like common ground but is a separate difference: in their Australian example, safety law requires a suitably qualified adviser; security has almost no legislation on professional practice, apart from a police licence in parts of the sector. And safety is **self-bounding** (the workplace), while security runs on a continuum from national to community level."
      },
      {
        "type": "tekst",
        "tekst": "**The conclusion**\n\nSimilarities exist **only at an abstract level**; in practice the differences are explicit. **Merging** the two into one practice only **dilutes** their understanding and boundaries. The one place where they meet is **life safety**: \"life safety systems take precedence over security requirements\" (Smith and Brooks).\n\nThree forces will make the divergence **bigger**: greater societal **risk aversion**, higher **expectations** of professions, and both professions **striving for professional status**.\n\nHow to read it (our nuance, not the authors'): it is a prediction about professions, \"do not merge\" is not the same as \"do not cooperate\", and the shared ground is exactly what an SSMS degree builds on. Set it against the rest of the book: Leveson argues for one analysis, Wipf for one solution space, Bongiovanni for one user experience, while Brooks and Coole show the professions moving apart."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nThe two jobs agree on generic things (risk management, controls, management, practice) and split on hazards against threats, technologies and theories, with different laws and boundaries. Similarities are only abstract, merging dilutes, life safety comes first, and three forces will widen the gap."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. Research question: do the knowledge categories show professional divergence? Answered through bodies of knowledge.\n2. Five characteristics of a profession; the body of knowledge is the primary one.\n3. Neither security nor safety is a full profession yet.\n4. Security: five categories (ASIS, Brooks, Coole); safety: six (SIA, INSHPO).\n5. Alignment on four generic points; polarity on hazards against threats, technologies, theories; legislation and boundedness differ.\n6. Hazard: danger exposing someone to loss; threat: the purposive intent and capability of an adversary.\n7. Conclusion: alike only abstractly, merging dilutes, life safety takes precedence, three forces widen the divergence."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 9, in plain language** (the same text as the Quick recap of session 6)"
      },
      {
        "type": "tekst",
        "tekst": "**A convenient untruth**\n\nSchulman opens with a quote from the CEO of a major utility: **\"If we're doing a good job of safety management that should take care of security too.\"** Schulman calls it a **convenient untruth**. He does not explain the \"convenient\" part (the obvious reading is that it would save a second programme), but the whole chapter shows why it is untrue.\n\nHis question: **can one management framework carry both missions?** He answers in three steps: how safety is managed in a **high reliability organisation**, why security collides with that on four points, and what still overlaps."
      },
      {
        "type": "tekst",
        "tekst": "**How a high reliability organisation works**\n\n**High reliability organisations (HROs)** run technical systems that can fail catastrophically: nuclear power plants, air traffic control, electricity grids. Their standard: catastrophic failures are **precluded deterministically**. There is a list of **precluded events** that must never happen, whatever the probability. A small chance is not acceptable. A nuclear plant that shuts down when in doubt is doing the right thing.\n\nThe classic formula: **low input variance plus low process variance gives low output variance**. The irony: this does not mean rigid sameness, but managing fluctuations within safe **bandwidths**, and staying out of dangerous or unstudied conditions.\n\nThe key tool: **precursors**, conditions that could lead to a precluded event, found by reasoning backwards from what must never happen. They can be technical, or organisational: a backlog of unresolved problems, unusual noise or silence, a movement into unstudied conditions. **Precursor resilience** means pulling back out of those conditions quickly, instead of waiting for the accident.\n\nOther ingredients: **lateral communication** between departments to keep the whole system in view; a culture that manages to the worst case, rewards imagination, spreads responsibility and gives people the **authority to stop**; and **reliability professionals** at every level, who blend formal and practical knowledge, see the system as bigger than their own job, and are **not defined by diplomas**. The enemies are complacency and hubris, and reliability is **perishable**: attention and trust must be renewed all the time."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nThe CEO's claim that safety takes care of security is a convenient untruth. HROs preclude catastrophes deterministically, keep variation within bandwidths, manage precursors, talk sideways, and rely on reliability professionals with the authority to stop."
      },
      {
        "type": "tekst",
        "tekst": "**Why security is different**\n\n**Failure is not vulnerability.** Managing the risk of failure is different from managing vulnerability to people who want to destroy. Hostile strategy **targets your weak spots** and can use your own protections against you. So security can never reach the deterministic standard of HRO safety.\n\n**Germanwings 9525** is the example to know. The cockpit door, hardened after 9/11 to keep intruders out, protected the co-pilot who was already inside and locked out the captain. That is **reciprocal vulnerability**: a protection against one threat creates a vulnerability to another.\n\n**Design-based vulnerability**: exposure we build ourselves, like homes in forest areas exposed to wildfires. The internet is the extreme case: it can be attacked from anywhere, at any scale, and every new connected device adds to it. That lies **beyond the reach of any single organisation**, so it calls for regulation at the level of society.\n\nTwo more problems: **symbolic targets** make even failed attacks work, so preclusion is impossible; and the **risk of risk assessment**: a known vulnerability analysis can become a map for the attacker, pointing to targets, even the ones marked low risk. In security, failure is part of a **learning system**: the adversary learns from it."
      },
      {
        "type": "tabel",
        "kop": [
          "Safety management wants",
          "Security management wants"
        ],
        "rijen": [
          [
            "Anticipation and prior analysis",
            "Adaptability and resilience to the unexpected"
          ],
          [
            "Lateral communication and open information",
            "Restricted information, to prevent counter-learning"
          ],
          [
            "Accessibility for cooperation and inspection",
            "Hardening: guns, gates and guards"
          ],
          [
            "Rapid inter-organisational emergency coordination",
            "Security frameworks around access and information"
          ]
        ],
        "noot": "Learn the four pairs: they are a classic exam question."
      },
      {
        "type": "tekst",
        "tekst": "**What overlaps, and Schulman's conclusion**\n\n**What does not overlap**: the deterministic standard, the object of analysis (failure against vulnerability) and open communication. **Precursors** sit in between: Schulman says the focus on precursor conditions and indicators is important to **both** missions (recognising precursors to terror attacks is already part of security management), but in security it is limited, because perpetrators hide or falsify exactly those signals.\n\n**What does overlap**: the management of **representational error** (misjudgements, wrong specifications and misunderstandings about the systems you manage) and the attitude that goes with it: questioning assumptions, accepting surprise, fending off complacency, recognising patterns, and taking it seriously when someone says \"I find myself in uncharted territory\" or \"I'm not comfortable taking this action\". The consequences overlap too, and so does **emergency response**, with the caveat that first responders can themselves be targets.\n\nIntegration demands **higher resolution reliability**: a broader scope, a longer time horizon and more distributed participation. Teams of reliability professionals can act as first responders for both missions; Schulman's example is the air traffic controllers on 9/11.\n\nHis conclusion: integration does not make the tensions go away. But keeping the missions **separate** creates a specific risk: nobody notices when one mission undermines the other. A shared framework built on sensitivity to error can catch exactly that precursor."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nSecurity faces an adversary who targets weak spots and can turn protections around (Germanwings: reciprocal vulnerability); the internet is design-based vulnerability beyond any single organisation. Four tensions separate the missions. What overlaps is the management of representational error, the questioning attitude, precursors (limited in security) and emergency response. Integration needs higher resolution reliability, and separation risks missing one mission undermining the other."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 8 things**\n\n1. The CEO's claim is a convenient untruth.\n2. HROs preclude catastrophic events deterministically, whatever the probability.\n3. Low input plus low process variance gives low output variance; the irony of bandwidths.\n4. Precursors, precursor resilience, lateral communication, reliability professionals; reliability is perishable.\n5. Failure is not vulnerability; Germanwings 9525 and reciprocal vulnerability.\n6. Design-based vulnerability (the internet), symbolic targets, the risk of risk assessment.\n7. The four tensions.\n8. Overlap in representational error, attitude, precursors (limited in security) and emergency response; higher resolution reliability; separation risks missing one mission undermining the other."
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
        "tekst": "**Boustras (ch. 10)**: safety increasingly depends on security, and the two meet **at the level of the individual employee**. Incidents have direct and visible effects (injury, death) and slow, invisible ones (psychosocial problems). **9/11 as a safety problem:** more than 40,000 first responders and rescue workers were exposed to toxic dust, at least four deaths are linked to upper respiratory problems, and hundreds of firefighters retired because of health effects.\n\nAttacks damage employees' **trust** that their employer can keep them safe. Cyberattacks cascade through **systems of systems**, with four interdependencies: digital, physical, geographical, logical.\n\n**Two routes to social exclusion:** radicalisation (perceived discrimination and bullying, where the employee's perception is what counts) and the financial crisis (unemployment and insecurity leading to psychosocial problems and political radicalisation). Social exclusion is the connecting factor, but **not yet empirically proven**. Boustras proposes **worker participation**, copying the legally binding health and safety committees to build a security culture. The final difference: in safety the legal duty is on the employer (personalised); in security the state provides the backbone."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nAttacks do not only hurt the building, they hurt the people who work there, sometimes years later. Boustras thinks feeling excluded could lead both to accidents and to radicalisation, but he admits it is not proven yet."
      },
      {
        "type": "uitleg",
        "tekst": "**The full story of chapter 10, in plain language** (the same text as the Quick recap of session 8)"
      },
      {
        "type": "tekst",
        "tekst": "**The big idea: safety and security meet at your desk**\n\nSo far the book was about big things: nuclear plants, airports, professions, whole organisations. Boustras brings it back to where most people actually work: an office, a school, a hospital, a factory floor. His claim: **workplace safety increasingly depends on security**, and the two meet at the level of the **individual employee**.\n\nWhy now? Since about 2000 there have been many security incidents: big attacks (Paris, Brussels, Nice, London, Madrid) and smaller ones (knife attacks, lone wolves). Rare events of the early 2000s, like 9/11, 7/7 in London and Atocha in Madrid, are becoming more \"usual\". Add radicalisation, cyberattacks and the fear of a dirty bomb, and the workplace sits in a complicated security environment. What these threats have in common: **they are driven by the human factor**.\n\nBoustras links this to **Ulrich Beck's risk society** (remember the Society course): new social conditions (cyber threats, radicalisation, the economic crisis) bring safety and security closer together. He calls his approach **exploratory**: it opens a field rather than proving it."
      },
      {
        "type": "tekst",
        "tekst": "**What an attack does to a workplace**\n\nSecurity incidents hit work in two ways:\n- **Direct and visible**: injuries and deaths, an immediate stop to daily work.\n- **Slow and invisible**: **psychosocial problems** such as PTSD, depression and stress-related illness, with costs for people and organisations.\n\nThe clearest example is **9/11**. The collapse of the Twin Towers released a toxic cloud with **asbestos**. More than **40,000 first responders** and relief workers were exposed, with short- and long-term health effects: at least four deaths have been linked to upper respiratory problems, and hundreds of firefighters retired because of health effects. A security incident became a long-term **occupational safety** problem: asbestos, respiratory illness and health-related retirement are classic OHS themes.\n\nTerrorists often choose **emblematic employers and workplaces** to get media attention. Attacks also damage something less visible: employees' **trust** that their employer can keep them safe. And **personal preparedness is still low**: even in countries that have suffered attacks, less than half of the population has taken preparatory measures. Society tends to **gloss over** incidents soon after they happen, which is why Boustras sees a need for a **security culture**, comparable to safety culture.\n\nOrganisations already react: security now appears in **risk assessments**, and low-risk firms such as offices increasingly try to combine the duties of the safety officer and the security officer."
      },
      {
        "type": "tekst",
        "tekst": "**Cyber: one failure, many victims**\n\nModern workplaces depend on digital systems, and those systems depend on each other. Boustras calls this a **system of systems**: one failure can **cascade** into others. There are **four kinds of interdependency** (from Rinaldi and colleagues):\n- **Digital**: system A sends data to system B. If A fails, B is flying blind.\n- **Physical**: system A supplies a product to B. No electricity, no pumping station.\n- **Geographical**: A and B happen to be in the same place. One fire in a tunnel hits power, fibre and water at once.\n- **Logical**: A and B are connected through human behaviour or markets. The lesson's example: the payment system fails, people start hoarding, and the supermarket chain grinds to a halt.\n\nSo a cyberattack on one company can suddenly become a safety problem at a workplace that had nothing to do with it."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 1 in one breath**\n\nSafety now depends on security, and they meet at the individual worker. Attacks hurt people directly and, slowly, psychologically; 9/11 became a long-term safety problem for the first responders. Trust and preparedness suffer, and cyberattacks spread through systems of systems via digital, physical, geographical and logical links."
      },
      {
        "type": "tekst",
        "tekst": "**Radicalisation: when the workplace becomes part of the story**\n\nBoustras walks through the reasoning step by step.\n\n1. Reports from captured terrorists (allegedly) mention **discrimination**, especially religious or political, and the **bullying** that follows from it, as motives.\n2. **Religion at work** becomes the battleground: discrimination can be formal or informal, through religious jokes, exclusion on religious grounds or belittling someone's beliefs.\n3. That can create an environment in which **personal grievance and a willingness to take revenge** grow.\n4. The sharpest point: **perceived discrimination** matters most. Whether the discrimination is widespread or hidden, and whatever its intensity, **what counts is how the employee experiences it**. Verkuyten names discrimination as a leading factor towards radicalisation.\n5. Bullying and discrimination therefore have **double effects**: on the workplace (absenteeism, with social and economic costs) and on the victim (psychosocial problems).\n\nBoustras is careful: this is a **possible** route, not a proven one. And what he proposes at the end is **worker participation**: the legally binding health and safety committees could be copied to build a security culture, with training, risk assessment and policies that fit both."
      },
      {
        "type": "tekst",
        "tekst": "**The financial crisis: the second route**\n\nThe economic crisis that started in **2008** with the collapse of Lehman Brothers hit Southern Europe hardest, and for some countries it became a social crisis too. Unemployment, temporary and undeclared work, lower wages and insecurity grew. The result: more **psychosocial problems** at work (anxiety, bullying, mobbing, depression), which in turn lead to more **occupational accidents**. Workplace safety systems and inspectorates also fell victim to **austerity**.\n\nThe core reasoning: insecurity and despair lead to **social exclusion**, and historically financial crises also bring **political radicalisation** and the rise of extremist parties.\n\nSo both routes, radicalisation and the financial crisis, end at the same point: **social exclusion** as the connecting factor between safety-related and security-related incidents. But Boustras admits it himself: without empirical analysis these causal links are **not established**."
      },
      {
        "type": "tekst",
        "tekst": "**The final difference**\n\nThe chapter ends with one sharp contrast you should be able to reproduce:\n- In **safety**, there is a **legal requirement** on the owner or manager: responsibility is **personalised**, it lands on the employer.\n- In **security**, that is not the case: **the state authorities provide the backbone**.\n\nThat difference has consequences for **strategic priorities** and for the **incentives** organisations have. An employer can be held personally responsible for an unsafe workplace, but much less for a terrorist attack."
      },
      {
        "type": "slimmer",
        "tekst": "**Part 2 in one breath**\n\nPerceived discrimination and bullying may push employees towards radicalisation; the 2008 crisis brought insecurity, psychosocial problems and political extremism. Both routes meet in social exclusion, which is not yet proven. Boustras proposes worker participation, and ends with the key difference: safety duties lie with the employer, security rests on the state."
      },
      {
        "type": "uitleg",
        "tekst": "**If you only remember 7 things**\n\n1. Safety increasingly depends on security; they meet at the level of the individual employee; the approach is exploratory.\n2. Effects of incidents: direct and visible against slow and invisible (psychosocial).\n3. 9/11 as a safety problem: more than 40,000 first responders, asbestos, at least four deaths, health-related retirements.\n4. Emblematic targets, damaged trust, low personal preparedness, the need for a security culture.\n5. Systems of systems and four interdependencies: digital, physical, geographical, logical.\n6. Two routes to social exclusion: radicalisation (perceived discrimination) and the financial crisis; not empirically proven; worker participation as the proposal.\n7. Final difference: safety duty on the employer (personalised), security backed by the state."
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
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "oefening",
        "id": "intro-mid-oef-1",
        "niveau": "gevorderd",
        "vraag": "**Case: a city festival.** A city organises a three-day music festival. Its objective: visitors and staff can enjoy and work at the festival without serious harm or disruption.\n\n(a) Give one safety risk and one security risk, and explain the difference with Blokland and Reniers (ch. 2).\n(b) Apply the two axes of chapter 1 to a deliberate act of your choice that ends up harming the area around the festival.\n(c) Name for two links of the safety chain what communication should do there.",
        "antwoord": "**(a)** Any pair works if the reasoning is right. Safety: a crowd crush at an exit that is too narrow. Security: someone deliberately starting a fire. Both touch the **same objective**; what differs is the nature of the negative effect: unintentional against **intentional**. That is the campus logic of session 2, and why Blokland and Reniers call security a **subset** of safety.\n\n**(b)** For example: someone deliberately dumps waste from the festival into the river. Axis 1 (intentionality): on purpose, so **security**. Axis 2 (direction of harm): the system harms its environment, so **safety**. The axes disagree, which is exactly the grey area chapter 1 describes.\n\n**(c)** For example: **prevention**: public awareness and early warning, such as clear information on exits and weather; **repression**: situation assessment, orders and evacuation messages, with one voice and one clear instruction. Other links also count, if you name what communication does there (session 3)."
      },
      {
        "type": "oefening",
        "id": "intro-mid-oef-2",
        "niveau": "gevorderd",
        "vraag": "**Germanwings 9525 across the course.** The case appears in session 3 and in chapter 9.\n\n(a) Explain how session 3 uses it, and how Schulman uses it.\n(b) What does the case say about the claim that good safety management takes care of security too?\n(c) Which other author's point about openness and secrecy fits the case, and why?",
        "antwoord": "**(a)** Session 3 uses it for the **security paradox**: safety runs on openness, security on containment, and the cockpit doors hardened after 9/11 also locked out crewmates. Schulman uses it for **reciprocal vulnerability**: the hardened door protected against intruders and protected the attacker already inside.\n\n**(b)** Schulman calls that claim a **convenient untruth**. Germanwings shows why: a security measure created a new vulnerability, and hostile strategy can use your own protections against you. Separating the missions creates the risk that nobody notices when one undermines the other.\n\n**(c)** For example the editors (ch. 11, 11.2.3): \"in safety we trust, in security we distrust\": the same employee is trusted for safety and potentially a threat for security. Or Jore (ch. 5): a security culture where everyone is committed raises the question whether that means suspicion of colleagues."
      },
      {
        "type": "oefening",
        "id": "intro-mid-oef-3",
        "niveau": "gevorderd",
        "vraag": "**After an attack on a production site.** Armed attackers take hostages at an oil and gas site abroad. Afterwards, the company's report says a lacking security culture explains what happened, and that a stronger security culture is the solution.\n\n(a) Which real case is this based on, and what does Jore think of the concept of security culture?\n(b) What does Boustras say the company should expect among its employees in the months and years afterwards?\n(c) What does Boustras propose for workers' role in security?",
        "antwoord": "**(a)** **In Amenas** (16 January 2013): 32 terrorists, almost 800 workers, 40 people from 10 countries killed, five from Statoil. Statoil's report used security culture both as an explanation and as the solution. Jore finds the concept **needed but poorly demarcated**: on Gerring's criteria it scores high on familiarity and resonance but low on parsimony, coherence, differentiation and depth. Safety ideas such as just culture and weak signals do not transfer easily, because security has an adversary. Her conclusion: understand security and safety culture separately, but do not treat them as distinct in practice.\n\n**(b)** Direct effects (injury, death) and slow, invisible ones: **psychosocial problems** that can show long afterwards, and damaged **trust** that the employer can keep them safe (ch. 10).\n\n**(c)** **Worker participation**: the legally binding health and safety committees could be replicated to build a security culture, with training, risk assessment and policies typical for both. He adds a difference: in safety the legal duty is on the employer, in security the state provides the backbone."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Practice exam: twenty questions across sessions 1 to 8",
        "vragen": [
          {
            "vraag": "A hacker remotely makes a water treatment plant release untreated water into a lake. How do the two axes of chapter 1 classify this?",
            "opties": [
              "Both axes say security",
              "Both axes say safety",
              "Intentionality says security; the direction of harm says safety, because the system harms its environment",
              "Intentionality says safety; the direction of harm says security"
            ],
            "juist": 2,
            "uitleg": "Axis 1 asks whether it was done on purpose (yes: security). Axis 2 asks which way the harm goes: here the system harms the environment, which is the safety direction. The two axes can disagree; that grey area is what the book is about (ch. 1)."
          },
          {
            "vraag": "Two parties' objectives are 120 degrees apart and the likelihood of intentional negative effects on objectives is high. Which term do Blokland and Reniers use specifically for this condition?",
            "opties": [
              "Unsecurity",
              "Security",
              "Safety",
              "Unsafety"
            ],
            "juist": 0,
            "uitleg": "Unsecurity needs both conditions: low alignment of objectives (more than 90 degrees apart) and a high likelihood of intentional negative effects (ch. 2)."
          },
          {
            "vraag": "A cleaner props open a fire door to air a room, and a burglar walks in and steals laptops. Why is the burglary a security matter for Blokland and Reniers?",
            "opties": [
              "Because the cleaner acted on purpose",
              "Because the open door is a hazard",
              "Because two separate acts were intentional",
              "Because the burglar intends a negative effect on the organisation's objectives"
            ],
            "juist": 3,
            "uitleg": "\"Intentional\" in their definition refers to the effect on objectives, not to the act itself. The cleaner acted on purpose but did not intend harm; the burglar does (ch. 2, the second trap)."
          },
          {
            "vraag": "A ship sails close to a reef in calm weather. Following Leveson's definition, what is the hazard?",
            "opties": [
              "The reef",
              "The ship being too close to the reef",
              "A possible storm",
              "The captain's fatigue"
            ],
            "juist": 1,
            "uitleg": "A hazard is a system state, not a feature of the environment: the mountain is not the hazard, flying too close to it is (Leveson, ch. 3). The reef is the environment; the storm is the worst-case environmental condition."
          },
          {
            "vraag": "After a cyberattack stopped the cranes in a container port, the port wants to analyse what went wrong. Which of Leveson's tools fits?",
            "opties": [
              "STPA",
              "CAST",
              "STAMP",
              "The Swiss cheese model"
            ],
            "juist": 1,
            "uitleg": "CAST is the tool built on STAMP for losses that have already happened; STPA is for losses that have not yet happened; STAMP is the model underneath (ch. 3)."
          },
          {
            "vraag": "Leveson argues that in Stuxnet the best control is the same whether the error was accidental or an attack. Which point from Schulman (ch. 9) most limits how far you can generalise that?",
            "opties": [
              "HROs preclude catastrophic events deterministically",
              "Lateral communication keeps the system focus",
              "Reliability professionals are not defined by diplomas",
              "Hostile strategy targets vulnerabilities and can use your protections against you"
            ],
            "juist": 3,
            "uitleg": "An accident does not react to your control; an adversary does. Schulman's Germanwings example shows a protection being used against you (reciprocal vulnerability). The other options describe how HROs manage safety, not why security differs."
          },
          {
            "vraag": "In Wipf's approach, why is a storm a safety problem and a ransomware gang a security problem?",
            "opties": [
              "A storm does not react to your strategy, while the gang is a second player who does, so game theory applies",
              "A storm is less likely than an attack",
              "The gang's intent is only known afterwards",
              "A storm only causes physical damage"
            ],
            "juist": 0,
            "uitleg": "Wipf counts the players: with zero or one player it is safety, with two or more it is security, and then game theory enters (ch. 4, as presented in session 5)."
          },
          {
            "vraag": "Which two authors both make the point that warning signs work less well in security because an attacker keeps them hidden?",
            "opties": [
              "Leveson and Wipf",
              "Brooks and Coole and La Porte",
              "Jore and Schulman",
              "Blokland and Reniers and Boustras"
            ],
            "juist": 2,
            "uitleg": "Jore: learning from weak signals is problematic when perpetrators are strategic and do not reveal their plans (ch. 5). Schulman: a perpetrator will try to keep precursor actions and information secret (ch. 9)."
          },
          {
            "vraag": "Which of the following is NOT an example from the course of safety's openness clashing with security's secrecy?",
            "opties": [
              "Just culture, which assumes nobody meant harm (Jore)",
              "Publishing research results (ch. 1)",
              "Lateral communication against restricted information (Schulman)",
              "Lasswell's five elements of communication"
            ],
            "juist": 3,
            "uitleg": "Lasswell's model (session 3) describes how communication works, not a clash. The other three are all forms of the openness-secrecy tension that runs through the course."
          },
          {
            "vraag": "A municipality publishes its full vulnerability analysis of its bridges online, to be transparent. Which concept from Schulman describes the risk?",
            "opties": [
              "A convenient untruth",
              "The risk of risk assessment: a known vulnerability analysis can guide an attacker",
              "Design-based vulnerability",
              "Precursor resilience"
            ],
            "juist": 1,
            "uitleg": "Schulman warns about the risks of risk assessments themselves: if known, a vulnerability assessment can point hostile action to targets, including those assessed as low risk (ch. 9)."
          },
          {
            "vraag": "A chemical plant wants inspectors and emergency services to have easy access to the site, while its security manager wants fences and badge control. Which of Schulman's four tensions is this?",
            "opties": [
              "Accessibility against hardening",
              "Lateral communication against restricted information",
              "Anticipation against resilience",
              "Emergency coordination against security frameworks"
            ],
            "juist": 0,
            "uitleg": "Safety management wants accessibility for cooperation and inspection; security management wants hardening: guns, gates and guards (ch. 9)."
          },
          {
            "vraag": "A company merges its safety and security departments into one department under one manager. Which authors would warn that merging dilutes understanding and boundaries?",
            "opties": [
              "Leveson",
              "Wipf",
              "Brooks and Coole",
              "Boustras"
            ],
            "juist": 2,
            "uitleg": "Brooks and Coole conclude that merging the two professions into a single practice only dilutes understanding and boundaries (ch. 7). Leveson argues the opposite for analysis."
          },
          {
            "vraag": "An SSMS student argues that one degree can prepare for both safety and security work. Which finding of Brooks and Coole supports her best?",
            "opties": [
              "Both are bounded by the workplace",
              "Both rest on the same underlying theories",
              "Both follow ISO 31000 and align on risk management, controls, management and professional practice",
              "Both have the same legislation"
            ],
            "juist": 2,
            "uitleg": "Brooks and Coole find alignment on four points and polarity on three (hazards against threats, technologies, underlying theories). Legislation and boundedness differ (ch. 7)."
          },
          {
            "vraag": "Which statement about legal duties fits both Brooks and Coole (ch. 7) and Boustras (ch. 10)?",
            "opties": [
              "Safety comes with a clearer legal duty at the level of the organisation than security",
              "Security has more legislation than safety",
              "Both fields are regulated in the same way",
              "Neither field has legal duties"
            ],
            "juist": 0,
            "uitleg": "Brooks and Coole: safety has explicit legislation (in their Australian example), security almost none apart from a licence in parts of the industry. Boustras: in safety the legal duty is on the employer, in security the state provides the backbone."
          },
          {
            "vraag": "La Porte places a military unit with strong security but frequent training accidents in which group?",
            "opties": [
              "Both strong, with nuclear power operations",
              "Safety strong, security needs work, with NASA",
              "Both need work, with hospitals",
              "Security strong, safety needs work, with weapons labs and intelligence IT"
            ],
            "juist": 3,
            "uitleg": "In Fig. 8.1, military units sit with intelligence IT and weapons labs: security strong, safety needs work (ch. 8, session 5)."
          },
          {
            "vraag": "Months after a terrorist attack at a train station, several station staff suffer from anxiety and stay home. Boustras would see this as:",
            "opties": [
              "A security problem only",
              "A slow and invisible safety effect of a security incident",
              "An effect of the financial crisis",
              "A cascading failure in a system of systems"
            ],
            "juist": 1,
            "uitleg": "Security incidents have direct, visible effects and slow, invisible ones such as psychosocial problems; this is where safety and security meet at the level of the individual worker (ch. 10)."
          },
          {
            "vraag": "A city texts residents of one street: \"Leave your homes now, there is a gas leak.\" Which link of the safety chain and which kind of communication is this?",
            "opties": [
              "Repression, crisis communication",
              "Prevention, risk communication",
              "Preparation, risk communication",
              "Recovery, crisis communication"
            ],
            "juist": 0,
            "uitleg": "Repression is acting during the incident, with evacuation messages. People in the middle of the event need crisis communication: one voice, one clear instruction, speed (session 3)."
          },
          {
            "vraag": "After a flood-awareness campaign, the municipality checks whether more households now keep an emergency kit. Which element of Lasswell's model does it measure?",
            "opties": [
              "Who",
              "In which channel",
              "To whom",
              "With what effect"
            ],
            "juist": 3,
            "uitleg": "In the risk communication version (Rahman and Munadi, 2019) the effect is increasing preparedness (session 3)."
          },
          {
            "vraag": "At a joint exercise, police officers talk about \"the hot zone\" and hospital staff do not know what they mean. Which of the five intervention challenges is this?",
            "opties": [
              "Stress and uncertainty",
              "Language and jargon",
              "Different concepts of time",
              "Type of personnel and level of professionalism"
            ],
            "juist": 1,
            "uitleg": "Language and jargon is one of the five intervention challenges, and it affects the quality of perception (session 3)."
          },
          {
            "vraag": "An adviser measures whether new lighting on a campus has reduced incidents. Which of the four core tasks from session 1 is this?",
            "opties": [
              "Identify, analyse and assess",
              "Design and recommend",
              "Evaluate",
              "Implement and coordinate"
            ],
            "juist": 2,
            "uitleg": "Evaluating interventions asks whether they were effective. It is the fourth task, after which the cycle closes (session 1)."
          }
        ]
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

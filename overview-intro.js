/* ============================================================
   Intro to Safety & Security: Quick recap-tabbladen (overview)
   Per les het hele college of hoofdstuk als luchtig verhaal, met
   "If you only remember ...". Wordt met voegOverviewToe() (lesstof.js)
   direct na To remember ingevoegd. Moet dus na de lesbestanden en
   recap-intro.js laden, en voor vakken.js.
   v141: sessie 1 (college-1), sessie 2 (h1, h2), sessie 3 (college-3).
   v142: sessie 4 (h3, h5), sessie 5 (college-5), sessie 8 (h10).
   (Sessie 6, h7 en h9, heeft de Quick recap in het eigen lesbestand.)
   ============================================================ */

voegOverviewToe("intro-to-safety-security/college-1", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nLecture 1 as one easy story, in a few minutes."
    },
    {
      "type": "tekst",
      "titel": "What is SSMS even about?",
      "tekst": "SSMS sits where **three worlds** meet that usually work apart: **public safety** (police, fire service, ambulance, municipalities), **industrial safety and corporate security** (companies, SHEQ departments) and **international security** (intelligence services, the military, IGOs and NGOs, think tanks). One big incident often touches all three at once. The lecture puts SSMS right in the middle of that diagram, and learning objective 3 says you must be able to explain your own programme, so this is exam stuff."
    },
    {
      "type": "tekst",
      "titel": "Safety or security? Ask: was it on purpose?",
      "tekst": "The key difference is **human intentionality**. **Safety** protects against things nobody wants: natural forces, technical failure, human error. **Security** protects against people who **mean** to do harm: crime, sabotage, attacks. That changes everything: in security there is an **adversary** who adapts to your measures, so statistics only partly work, and sharing information can make you more vulnerable. In safety, openness and reporting make the system safer.\n\nThere are **four kinds**: physical safety, industrial safety, security and public security. Two of the definitions include **‘and feel protected’**: the difference between being safe (objective) and feeling safe (subjective)."
    },
    {
      "type": "tekst",
      "titel": "Risk is the common denominator",
      "tekst": "What do all four have in common? One word: **risk**. Risk is uncertainty about a possible bad outcome of a decision, often **probability times impact**. And risk changed character: **old risks** were natural, small-scale and unequally spread; **modern risks** are man-made, large-scale and (according to Beck) equally spread. That last one is contested: the poor still get hit harder."
    },
    {
      "type": "tekst",
      "titel": "What a professional actually does",
      "tekst": "Four core tasks, in a cycle: **analyse** the risks, **design and recommend** measures, **implement and coordinate** them, and **evaluate** whether they work, which takes you back to analysing. Your daily work is dealing with uncertainties around people, systems and organisations, and **connecting the dots**: turning small bits of information into one picture.\n\nThe end-term is an individual presentation, so practise saying all of this out loud."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 5 things**\n\n1. The three worlds of SSMS: public safety, industrial safety and corporate security, international security.\n2. Safety versus security = human intentionality.\n3. The four definitions, and ‘and feel protected’ (objective versus subjective).\n4. Risk = uncertainty about a negative outcome (probability times impact); old versus modern risks.\n5. The four core tasks: analyse, design and recommend, implement and coordinate, evaluate."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h1", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 1 of the book (Pettersen Gould and Bieder) as one story you can read on the bus. Lecture 2 covers chapters 1 and 2 together; chapter 2 has its own Quick recap. Everything here is also in the Core material, in full academic mode."
    },
    {
      "type": "tekst",
      "titel": "The paradox the whole book rests on",
      "tekst": "Start with a strange fact: **the safer and more secure our organisations become, the more we demand of them.** You would expect people to relax when things get safer. The opposite happens. Every improvement moves the bar, because every remaining incident now stands out and becomes bigger news.\n\nThink of flying: it has never been safer, yet one crash dominates the news for weeks. That is why safety and security work is never \"done\"."
    },
    {
      "type": "tekst",
      "titel": "Two fields with different histories",
      "tekst": "Safety and security grew up apart, which is why they still speak different languages.\n\n**Safety** comes from **hazardous technologies and industries**: energy, chemicals, transport, water, healthcare. It lived in regulation and management. From the **1980s** researchers started to see accidents not as bad luck or one person's mistake, but as the result of **organisational and societal** developments. Two classics: Turner's *Man-made Disasters* (1978) and Perrow's *Normal Accidents*, which says that systems with **interactive complexity** and **tight coupling** will sooner or later have accidents.\n\n**Security** started as **state security**: protecting a country against other states. Civil industry only mattered for military defence. From the late 1980s attention turned to how **vulnerable** societies themselves are. Until 2001 security was a small part of the picture. Then came **9/11**: \"free-floating dread\", new policies and new agencies (like the TSA for airport security in the US)."
    },
    {
      "type": "tekst",
      "titel": "When the two met: the interface after 9/11",
      "tekst": "After 9/11, security moved into the world of hazardous industries, where safety already ruled. That created an **interface** with **four consequences**:\n\n1. a **new category of threats** to understand;\n2. **new collaborations** and domains;\n3. **doubt** about whether existing protection still works;\n4. interactions that are **far from obvious**, especially in **normal** situations, not just in a crisis. Safety and security practices can even work **against** each other (Pettersen and Bjørnskau, 2015).\n\nEveryday collisions you can picture:\n- **The emergency exit**: safety wants it always open from the inside so people can escape; security wants nobody slipping out (or in) unseen.\n- **Reporting**: safety wants no blame, so people dare to report mistakes; security wants reports traceable to persons.\n- **Publishing**: safety wants open reports so others learn; security wants confidentiality so attackers do not learn.\n\nOn top of that, hazards and threats are increasingly seen as **systemic risks**, connected to global events. And with deregulation, privatisation and outsourcing, detailed rules give way to **risk management**: organisations must manage risks themselves."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 1 in one breath**\n\nThe safer we get, the more we expect. Safety grew from dangerous industries, security from protecting the state; after 9/11 they collided, with new threats, new partners, doubts about old protection, and everyday clashes like the emergency exit, reporting and publishing."
    },
    {
      "type": "tekst",
      "titel": "Two ways to tell safety from security",
      "tekst": "How do you know whether something is a safety or a security issue? The book gives **two axes**:\n\n**Axis 1: intentionality.** Did someone do it **on purpose**? Accidents, hazards and errors are **safety**; malicious, intentional threats are **security**. Weak spot: intent is often only known **afterwards**.\n\n**Axis 2: origin and effect.** In which **direction** does the harm go? In **safety** the system must not harm its environment (a chemical plant leaking into a river). In **security** the environment must not harm the system (an attacker breaking in). Weak spot: **insiders** sit inside the system boundary. The SEMA framework adds a third direction: the system harming **itself**.\n\nThe tricky part: the two axes can give **different answers** for the same case. A disgruntled ex-employee deliberately opens a valve and chemicals flow into a river. On purpose? Yes, so security. Which way does the harm go? From the system into its environment, so safety. **That grey area is exactly what the book is about.**"
    },
    {
      "type": "tekst",
      "titel": "Why defining is so hard, and why people must decide anyway",
      "tekst": "Two reasons the definitions stay fuzzy:\n- **Language**: many languages have a single word for safety and security, unlike English (the book). The slide of session 5 names them: Dutch \"veiligheid\", German \"Sicherheit\", French \"sécurité\".\n- **Different scientific traditions**: engineers, criminologists and management scholars each look differently.\n\nScience and technology often **widen** the gap: at airports, screening staff and safety staff have different training, different technology and different rules. Yet **ordinary workers**, managers and officers have to act **before** anyone has decided whether something is safety or security.\n\nThe book looks at the question from **three vantage points**:\n- **conceptual**: Blokland and Reniers (chapter 2), Jore (chapter 5);\n- **technical and methodological**: Leveson (chapter 3), Wipf (chapter 4), Bongiovanni (chapter 6);\n- **management and practice**: Brooks and Coole (7), La Porte (8), Schulman (9), Boustras (10).\nEach is \"right\" from its own point of view."
    },
    {
      "type": "tekst",
      "titel": "Limits, open questions and four tensions",
      "tekst": "**Limits**: accidents and attacks will keep happening; there are always more ways a complex system can fail than work (Schulman). Both fields are young as sciences, and many requirements are legal or economic and come more from policy than from research. So **compliance is not the same as being safe**.\n\n**Three questions** the book hands to you: What is safe and secure **enough**? What do new demands mean for **people**? **Who gains** and who gets the strain (La Porte)?\n\n**Four tensions** to learn:\n1. **Merge or keep separate?** There is no proven answer.\n2. **Regulators** get security tasks without a knowledge base for them (the EASA example).\n3. **Transparency** collides: safety learns through openness, security needs confidentiality.\n4. **Research is lopsided**: mostly engineering, little on how management works in practice."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 2 in one breath**\n\nYou can split safety and security by intent or by the direction of harm, but the two tests can disagree, as with the ex-employee and the valve. Language and different sciences keep definitions fuzzy, while practitioners must act anyway. The book has three vantage points, three open questions and four tensions."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 7 things**\n\n1. The paradox: the safer we become, the more we demand.\n2. Safety comes from hazardous industries (Turner, Perrow), security from state security; 9/11 brought them together.\n3. The interface has four consequences; everyday collisions: emergency exit, reporting, publishing.\n4. Two axes: intentionality and the direction of harm; they can disagree (the ex-employee and the valve).\n5. Definitions stay fuzzy because of language and different traditions, but people must decide anyway; three vantage points in the book.\n6. Compliance is not the same as being safe; three questions: safe enough, people, who gains.\n7. Four tensions: merge or separate, regulators without a knowledge base, transparency, lopsided research."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h2", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 2 (Blokland and Reniers) and the key-concepts part of lecture 2 as one story. Everything here is also in the Core material, in full academic mode."
    },
    {
      "type": "tekst",
      "titel": "Why bother with definitions at all?",
      "tekst": "Chapter 2 starts with a complaint: safety and security science has **no shared basis** for its words. There are many definitions of safety and almost none of its opposite. Table 2.1 shows it with Google Scholar hits: about 3.45 million for \"safety\" against 8,800 for \"unsafety\".\n\nWhy does that matter? Precise definitions give three things: **standardisation**, **better communication** and **unambiguous sharing of knowledge**. The authors borrow a comparison: you can only combine results from different experiments if there are standards, just as parts from different manufacturers only fit together with manufacturing standards.\n\nThe chapter also rejects **two misconceptions**: that risk and safety are simply opposites, and that safety and security are entirely separate fields.\n\nThe lecture adds a distinction with its own slide: **semantic** questions (what do the words mean, so that we communicate clearly?) against **ontological** questions (what must actually exist for risk, safety or security to exist at all?)."
    },
    {
      "type": "tekst",
      "titel": "Everything starts with objectives",
      "tekst": "The whole chapter is built on one definition from the international standard **ISO 31000**: **risk is the effect of uncertainty on objectives**. Learn it word for word.\n\nSo the first question is always: **what are we trying to achieve or protect?** The lecture repeats that question at the end. **Objectives** are everything that individuals, organisations or society want, need or pursue. Four pairs show how wide that is:\n- tangible and intangible (a building, a reputation);\n- individual, organisational and societal;\n- still to be achieved and already achieved (things you have and want to keep);\n- conscious and unconscious. Your own health is an objective you never wrote down, which is why risk can exist without anyone formulating a goal.\n\nFor risk to exist you need **three elements at once**: **objectives**, **effects** that can touch those objectives, and **uncertainty**. Remove one and there is no risk."
    },
    {
      "type": "tekst",
      "titel": "Risk is not the same as safety",
      "tekst": "The fundamental difference: **risk** is about an **uncertain future** state; **safety** is about **actual** conditions now. Positive effects increase safety, negative effects increase unsafety.\n\nThe authors' definitions:\n- **Safety**: the condition in which the likelihood of negative effects on objectives is **low**.\n- **Security**: the condition in which the likelihood of **intentional** negative effects on objectives is low.\n\nSo **security is a subset of safety**: every intentional negative effect is also a negative effect. That is a surprising move, because in everyday language people treat them as two separate things.\n\nTwo more ideas: risk, safety and security are **constructs in people's minds** (the **quality of perception**), because people have different objectives and value them differently. And **constraints** are the limits that must not be exceeded while you pursue your objectives. The chapter also mentions the shift from **Safety-I** (only preventing things going wrong) to **Safety-II** (also the condition of excellent performance in achieving objectives)."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 1 in one breath**\n\nThe field lacks shared words, and precise definitions help you standardise, communicate and share knowledge. Everything starts with objectives: risk is the effect of uncertainty on objectives, and needs objectives, effects and uncertainty together. Safety is low likelihood of negative effects, security low likelihood of intentional negative effects, so security is a subset of safety."
    },
    {
      "type": "tekst",
      "titel": "Three levels where safety and security differ",
      "tekst": "Blokland and Reniers compare safety and security on three levels:\n\n1. **Effects**: in safety they are **unintentional**, in security **intentional**. Use the word security only for intentional effects.\n2. **Objectives**: safety concerns the objectives of **one** party; security involves **at least two parties** whose objectives clash. Picture objectives as **arrows**: if two arrows point the same way they are aligned; once they are **more than 90 degrees** apart, one party's success harms the other. In security management the core task is to **discover** that clash.\n3. **Uncertainty**: in safety events **repeat**, so statistics work; in security the adversary keeps inventing **new tactics**, so you need other tools such as **game theory** (Wipf, chapter 4).\n\nFrom that, the opposite of security: **unsecurity** is the condition in which the alignment of objectives is **low** and the likelihood of intentional negative effects is **high**. Both conditions are needed. The authors avoid \"insecurity\", because in everyday English that means a lack of self-confidence."
    },
    {
      "type": "tekst",
      "titel": "The campus example and four moves to management",
      "tekst": "The lecture's exam-shaped example: a campus with one objective, **students and staff able to study and work without serious harm or disruption**.\n- Wet stairs lead to a fall: an **unintentional** effect, so **safety**.\n- Someone sets the building on fire on purpose: an **intentional** effect, so **security**.\nSame protected objective, different **nature of the negative effect**.\n\nAnd one step the chapter does not spell out, from concepts to management in **four moves**:\n1. identify the **objectives**;\n2. identify the **risk sources**;\n3. consider the **effects**;\n4. set **constraints**, the limits that must not be exceeded."
    },
    {
      "type": "tekst",
      "titel": "Three traps",
      "tekst": "1. **Risk is not the opposite of safety.** They are different kinds of things: one is about an uncertain future, the other about actual conditions.\n2. **\"Intentional\" refers to the effect on objectives, not to the act.** A cleaner who props open a fire door does it on purpose but does not intend harm; a burglar who walks in does. Only the burglar makes it security.\n3. **Unsecurity is not just \"no security\".** It needs low alignment of objectives **and** a high likelihood of intentional harm."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 2 in one breath**\n\nSafety and security differ in effects (intentional or not), objectives (one party or clashing parties, more than 90 degrees apart) and uncertainty (statistics or an adapting opponent). The campus example: same objective, different nature of the effect. From concepts to management: objectives, risk sources, effects, constraints."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 7 things**\n\n1. No shared semantic basis; definitions give standardisation, communication and knowledge-sharing; semantic against ontological questions.\n2. ISO 31000: risk is the effect of uncertainty on objectives.\n3. Objectives cover everything wanted or already had, conscious or unconscious; risk needs objectives, effects and uncertainty.\n4. Risk is about an uncertain future, safety about actual conditions.\n5. Safety: low likelihood of negative effects; security: low likelihood of intentional negative effects, so a subset of safety.\n6. Three levels: effects, objectives (the 90-degree criterion), uncertainty (game theory); unsecurity needs two conditions.\n7. The campus example, the four moves to management, and the three traps."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/college-3", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nLecture 3 (Communication matters) as one story you can read on the bus. Everything here is also in the Core material, in full academic mode."
    },
    {
      "type": "tekst",
      "titel": "The big claim: it is the talking that fails",
      "tekst": "The whole session in one line: **technical systems fail less often than the communication between the people running them.** Planes, control rooms and police operations usually go wrong not because a machine breaks, but because people misunderstand each other, do not dare to speak up, or share the wrong information.\n\nIt starts with words. **Definitions are not neutral**: how you define safety decides what counts as a problem worth talking about (the slide attributes this to Leveson, chapter 3). The evidence on the slide: about **3.45 million** Google Scholar hits for \"safety\" against **8,800** for \"unsafety\" (Blokland and Reniers, chapter 2). The lecturer's criticism: the field keeps reopening this semantic debate instead of settling it, but definitions still matter, because without them you cannot compare organisations, incidents or years."
    },
    {
      "type": "tekst",
      "titel": "The safety chain: the backbone of the lecture",
      "tekst": "The lecture organises everything along the **safety chain**, five links in a fixed order. For each link, know what happens and what communication does there:\n\n1. **Proaction**: removing the structural causes of insecurity. Communication: spatial and policy decisions, and who gets consulted.\n2. **Prevention**: lowering the chance and the consequences of an incident. Communication: public awareness, risk assessment, early warning.\n3. **Preparation**: being ready for what you could not prevent. Communication: emergency plans, training, simulation exercises.\n4. **Repression**: acting during the incident. Communication: situation assessment, orders, evacuation messages.\n5. **Recovery**: restoring and learning. Communication: damage assessment, compensation, revising the plans.\n\nExpect an exam question that asks you to walk an incident along these five links, as the lecture does with the Manila case."
    },
    {
      "type": "tekst",
      "titel": "Two kinds of communication",
      "tekst": "**Risk communication** is for people who are **not** in danger right now. There is time for nuance, dialogue and repetition, and the aim is **increasing preparedness**. It sits in the early links: proaction, prevention, preparation.\n\n**Crisis communication** is for people **in the middle** of the event: time pressure, incomplete information, media everywhere. It needs **one voice, one clear instruction and speed**. Careful: the lecturer draws it as the **widest** arrow on the chain, active before, during and long after the crisis, with its core in the acute phase (repression). The third mode, **evaluation**, runs from repression to recovery.\n\nThe model to use is **Lasswell**, in the risk communication version (Rahman and Munadi, 2019): **who** says **what**, in **which channel**, to **whom**, with **what effect**, where the effect is increasing preparedness. Example: a municipality (who) warns about floods (what) via a text message and a local radio station (channel) to residents of a low-lying street (whom), so that they prepare an emergency kit (effect)."
    },
    {
      "type": "tekst",
      "titel": "Five challenges and nine quality criteria",
      "tekst": "In a multi-agency operation (police, fire brigade, ambulance, municipality together) five things make communication hard:\n1. **stress and uncertainty**;\n2. **discrepancies in working style**;\n3. **type of personnel and level of professionalism**;\n4. **different concepts of time**: \"now\" means seconds to a medical team, something else to an investigator or a municipality;\n5. **language and jargon**, which affects the **quality of perception** (chapter 2): if people define words differently, they see different situations.\n\nInformation in an intervention must be of high quality. The **nine criteria**: accurate, concise, believable, complete, clear, valid, objective, **redundant**, up to date. Redundant sounds odd, but it means a critical fact reaches command through **more than one route**, so one broken link does not blind the operation. The lecturer's question: which two are hardest to meet at the same time? Complete and up to date."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 1 in one breath**\n\nMost disasters are communication failures. Words matter because definitions decide what counts as a problem. The safety chain runs from proaction to recovery, with a communication task in every link. Risk communication prepares people calmly; crisis communication gives one clear order fast. Lasswell structures a message; five challenges and nine criteria decide whether it works."
    },
    {
      "type": "tekst",
      "titel": "The security paradox",
      "tekst": "Here safety and security collide. **Safety** runs on **openness**: sharing near-misses and weak signals so everyone learns (compare chapter 9). **Security** runs on **containment**: keeping information hidden so adversaries cannot map your defences.\n\nThe case in point is the **cockpit door**. After 9/11 cockpit doors were hardened to keep intruders out. In **Germanwings 9525** (March 2015) a co-pilot used that same door to lock the captain out. One measure, two missions, opposite effects.\n\nThe slide asks a discussion question: **where might a need-to-know culture undermine a speak-up culture?** A question the lecturer puts on a slide is a question that can come back."
    },
    {
      "type": "tekst",
      "titel": "Three cases, three lessons",
      "tekst": "The lecture groups the cases under three headings rather than telling them as stories.\n\n**Avianca 52 (1990): broken lateral communication.** A flight from Colombia to New York circled over a backed-up airport and ran out of fuel. The crew told air traffic control they were \"running out of fuel\", but never declared an emergency, and accepted another detour. The information was sent; the message never arrived. That is **mitigated speech**: softening a message out of politeness or deference until its content disappears.\n\n**Korean Air 801 (1997): steep hierarchy.** On the way to Guam in bad weather, the captain had committed to a visual landing. The first officer and the flight engineer both warned him, but only as **hints** (\"the weather radar has helped us a lot\"). In a steep hierarchy you do not contradict the captain. The plane flew into high ground.\n\n**Manila (2010): information without control.** A dismissed police officer, Rolando Mendoza, took 15 Hong Kong tourists hostage on a bus to get his job back. After a 10-hour standoff and a 90-minute gunfight, nine people died, including Mendoza. The lecture walks it along the chain: no clear chain of command (**proaction**), poor crowd control and an underestimated situation (**repression**), a live, unfiltered broadcast the hostage-taker could watch himself (**information without control**), and afterwards harassment, travel advisories, job losses and diplomatic damage (**recovery**)."
    },
    {
      "type": "tekst",
      "titel": "What to take away",
      "tekst": "The lecture ends with four points:\n1. **Trustworthiness**: people judge messages on how trustworthy the sender is, and openly sharing information builds trust. (Note the tension with the security paradox.)\n2. **Skills in practice**: listening, interviewing, recognising, acknowledging, asking questions, negotiating.\n3. **Information gathering on the ground** is crucial. Example from the lecture: **Ushahidi**, a platform for crowdsourced crisis information. The slide only names it; the background (built during the post-election violence in Kenya, 2007-2008, people reporting incidents by text message that were mapped in near real time) is general knowledge.\n4. **Participation**: involve stakeholders when you plan, implement and assess."
    },
    {
      "type": "slimmer",
      "tekst": "**Part 2 in one breath**\n\nSafety wants openness, security wants secrecy, and the Germanwings cockpit door shows how one measure can serve one mission and hurt the other. Avianca shows mitigated speech, Korean Air a steep hierarchy, Manila information without control along the whole chain. The fix: trust, practical skills, information from the ground, and participation."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 8 things**\n\n1. Technical systems fail less often than communication between people.\n2. Definitions are not neutral (Leveson); 3.45 million against 8,800 Google Scholar hits.\n3. The safety chain: proaction, prevention, preparation, repression, recovery, each with a communication task.\n4. Risk communication (not in danger, preparedness) against crisis communication (in the event, one voice, speed; the widest arrow).\n5. Lasswell: who, says what, in which channel, to whom, with what effect (Rahman and Munadi, 2019).\n6. Five intervention challenges; nine quality criteria, including redundant.\n7. The security paradox: openness against containment; the Germanwings cockpit door; need-to-know against speak-up.\n8. Avianca 52 (mitigated speech), Korean Air 801 (hierarchy), Manila (information without control); the four conclusions."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h3", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 3 (Leveson) as one easy story, in a few minutes."
    },
    {
      "type": "tekst",
      "titel": "One coin, two sides",
      "tekst": "Leveson’s big claim: safety and security are **two sides of the same coin**. It starts with definitions: there is no right or wrong one, only the one you choose, and a **narrow** definition hides the overlap and limits your solutions. Her definitions: **safety** is freedom from **accidents (losses)**, whatever the cause. An **accident** is any unplanned event that leads to a loss the stakeholders care about. A **hazard** is a **state of the system** that, together with bad conditions, leads to a loss: the mountain isn’t the hazard, flying too close to it is. In security the same thing is called a **vulnerability**."
    },
    {
      "type": "tekst",
      "titel": "Two myths she busts",
      "tekst": "**Safety is not reliability.** Since software entered critical systems (around 1980), you can’t test every design error away. Every part can work perfectly and you still get an accident, and an unreliable system can still be safe. So preventing failures is not the same as preventing losses.\n\n**Security is not just about information.** Losing **mission assurance** (a power plant that stops producing, a space mission that fails) matters just as much as leaked data."
    },
    {
      "type": "tekst",
      "titel": "Stuxnet and the systems view",
      "tekst": "Intent differs, but it barely matters for the **solution** when the loss is the same. **Stuxnet**: the loss is damaged centrifuges, the hazard is spinning too fast, the constraint is ‘never above max speed’, the unsafe control action is ‘speed up’ at max, and the cause is a controller that wrongly thought the speed was lower, by mistake or by attack. Same fix either way: a mechanical interlock.\n\nInstead of the old **chain of events** (dominoes, Swiss cheese), Leveson uses **systems theory**: accidents are a **control problem**. **STAMP** is the model; **CAST** analyses losses that already happened; **STPA** analyses losses that haven’t happened yet. STPA first finds unsafe control actions and their scenarios, and only then asks how an attacker could inject, spoof, tamper with, intercept or leak information. Her conclusion: one integrated process can handle both."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 4 things**\n\n1. Safety = freedom from losses; a hazard is a system state (≈ vulnerability).\n2. Safety is not reliability; security is more than information (mission assurance).\n3. Stuxnet: same loss, same control, whatever the intent.\n4. Systems theory instead of chains: STAMP (model), CAST (past losses), STPA (future losses)."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h5", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 5 (Jore) and lecture 4 as one easy story."
    },
    {
      "type": "tekst",
      "titel": "In Amenas",
      "tekst": "On **16 January 2013**, 32 terrorists attacked the **In Amenas** oil facility in Algeria, with almost 800 workers on site. After a four-day siege, **40 people from 10 countries** were dead, five of them from **Statoil**. Statoil’s investigation said a lacking **security culture** was part of the explanation and building one was the solution. Jore asks: is that even a good concept?"
    },
    {
      "type": "tekst",
      "titel": "Malicious intent, not just intent",
      "tekst": "Jore draws the line at **malicious intent**, not intentionality. Why? Because intent also exists in safety: a worker who deliberately skips their goggles is still a safety issue. Security means someone who **really wants to cause harm**. Security threats are also often **external**, not tied to profit and production. And an attack is an event of **extremely low probability**, so Jore asks whether culture can be applied to it in the same way as in safety."
    },
    {
      "type": "tekst",
      "titel": "Testing the concept",
      "tekst": "Jore uses **Gerring’s eight criteria** for a good concept. **Familiarity and resonance: high**, because it leans on the well-known idea of safety culture (used since Chernobyl, 1986). **Parsimony, coherence, differentiation and depth: low**: thin literature, one culture can’t cover phishing, sabotage and armed attacks, and it’s hard to tell apart from safety or organisational culture. **Theoretical and field utility: mixed**: the security field has little theory, and companies use the label without changing how they work.\n\nSome safety ideas don’t transfer: **just culture** assumes nobody meant harm, ‘**everyone committed**’ could turn into suspicion of colleagues, and **weak signals** are hidden on purpose by smart attackers."
    },
    {
      "type": "tekst",
      "titel": "The verdict",
      "tekst": "Four conclusions: the concept is **needed**; it’s **poorly demarcated** (but so is safety culture); in practice it’s a **duality** with safety culture; and it’ll matter **more** with digitalisation. Jore’s formula: **understand them separately, but don’t treat them as separate in practice**.\n\nThe lecture (session 4) framed chapters 3 and 5 together: ‘two sides of the same coin?’ Inclusive definitions show the overlap, a hazard is roughly a vulnerability, and the big question is **when to integrate and when to keep things apart**."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 4 things**\n\n1. In Amenas 2013: 40 dead, and ‘security culture’ named as the cause and the cure.\n2. Malicious intent, not intentionality, separates security from safety.\n3. Gerring’s criteria: familiarity high, depth low, utility mixed.\n4. Understand separately, don’t treat separately in practice."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/college-5", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nLecture 5, Managing safety and security, as one easy story. This lecture pulls the whole book together, so it’s great revision."
    },
    {
      "type": "tekst",
      "titel": "Copenhagen, and the first question",
      "tekst": "In September 2025 Copenhagen Airport closed for almost four hours because of large drones nearby. Safety problem, security problem, or both? The lecture’s answer comes in layers. Two ways to tell them apart: **malicious intent** (someone wants harm) and the **direction of harm** (does the system harm its surroundings, or do outsiders harm the system?). With ISO 31000 you can describe both as **risk**, but security has an **opponent who adapts**, so the past is a weak guide. Fun detail: police didn’t shoot the drones down because of the risk to passengers and fuel depots, a **safety judgement inside a security response**."
    },
    {
      "type": "tekst",
      "titel": "Three positions",
      "tekst": "**One coin** (Leveson): same losses, same controls, whatever the cause; STAMP and STPA. **Two professions** (Brooks and Coole): different knowledge, different tools, and opposite habits about sharing (‘in safety we trust, in security we distrust’, on their slide; in the book that line is the editors’, ch. 11). **Count the players** (Wipf): no opponent means safety, an opponent means security, and then you need **game theory**. GNSS example: **jamming** blocks the signal, **meaconing** rebroadcasts a delayed signal, **spoofing** fakes it, and spoofing is worst because you don’t notice."
    },
    {
      "type": "tekst",
      "titel": "Tensions and people",
      "tekst": "Fixes can create holes: the reinforced cockpit door let the **Germanwings** co-pilot lock the pilot out (Schulman). Security culture is attractive but slippery (Jore, In Amenas). HROs make both stronger but they can also collide, and whichever came first in an organisation shapes how the other gets added (**path dependence**, La Porte).\n\nIt’s also about people: **workers** get psychosocial scars and lose trust (Boustras), **users** experience the same check very differently (Bongiovanni), and **society** keeps asking what is safe and secure enough, and who decides."
    },
    {
      "type": "tekst",
      "titel": "The toolkit",
      "tekst": "Six lenses for any case: who wants what, what must never happen, which professions are involved, what must be shared or kept secret, who came first, and what’s outside the organisation’s control. Four take-aways: **definitions shape solutions**, **analyse together but organise carefully**, **management means holding tensions**, and **zoom out**. Likely exam question: merge them, or keep them apart? *(The lecturer's spoken words, not on the slides in the Project: unchecked.)*"
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 5 things**\n\n1. Two distinctions: malicious intent, and the direction of harm.\n2. Three positions: one coin (Leveson), two professions (Brooks and Coole), count the players (Wipf).\n3. Jamming, meaconing, spoofing: spoofing is worst.\n4. Germanwings: a security fix that created a new hole.\n5. Six lenses and four take-aways."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h10", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 10 (Boustras) as one easy story, in a few minutes."
    },
    {
      "type": "tekst",
      "titel": "Where safety and security meet: the worker",
      "tekst": "Boustras’ claim: workplace safety increasingly depends on **security**, and the two meet at the level of the **individual employee**. Attacks like 9/11, 7/7 and Madrid are becoming more ‘ordinary’, and they hit workplaces in two ways: **direct and visible** (injury, death) and **slow and invisible** (psychosocial problems like PTSD and depression).\n\nPerfect example: after **9/11** a toxic cloud with asbestos covered the area, and the more than **40,000 first responders** and relief workers suffered short- and long-term effects: at least four deaths are linked to upper respiratory problems, and hundreds of firefighters retired because of health effects. A security incident became a long-term **safety** problem."
    },
    {
      "type": "tekst",
      "titel": "Organisations, trust and cyber",
      "tekst": "Organisations now include security in their **risk assessments**, and low-risk firms such as offices increasingly try to combine the duties of the safety and the security officer. Attacks also damage something less visible: employees’ **trust** that their employer can keep them safe.\n\nCyberattacks spread through ‘**systems of systems**’: one failure cascades into other infrastructures. Remember the **four interdependencies**: digital, physical, geographical and logical."
    },
    {
      "type": "tekst",
      "titel": "Radicalisation, the crisis and the final point",
      "tekst": "**Radicalisation** at work is a new risk. **Perceived** discrimination and bullying may be a route, but that is not proven. At the end Boustras proposes **worker participation**: copy the legally binding health and safety committees to build a security culture. The **2008 financial crisis** brought unemployment, insecurity and psychosocial problems, which can lead to extreme behaviour. The hinge: **social exclusion** may be the common route to both safety and security incidents, but that’s **not empirically proven yet**.\n\nThe final difference: for safety the **legal duty lies with the employer** (personal), while for security the **state** is the backbone. That has consequences for strategic priorities and incentives."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 4 things**\n\n1. Safety and security meet at the level of the individual worker.\n2. Effects: direct and visible versus slow and invisible (9/11 first responders).\n3. Cyber: systems of systems and four interdependencies (digital, physical, geographical, logical).\n4. Safety duty on the employer, security on the state; social exclusion as a possible (unproven) common route."
    }
  ]
});


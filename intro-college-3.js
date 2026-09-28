/* ============================================================
   Intro to Safety & Security, sessie 3
   Communication Matters & the significance of Information
   Uitgewerkt uit de collegeslides van Jonathan Corr en Julie's
   aantekeningen, met de haakjes naar H2 (Blokland & Reniers),
   H3 (Leveson) en H9 (Schulman).
   ============================================================ */

LESSTOF['intro-to-safety-security/college-3'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Name the five links of the safety chain and say what information and communication do in each",
          "Explain why definitions matter, and why the field keeps reopening the debate instead of settling it",
          "Name the five intervention challenges and give an example of each in a multi-agency operation",
          "List the nine quality criteria for information in an intervention",
          "Explain the security paradox and illustrate it with the hardened cockpit door",
          "Distinguish risk communication from crisis communication, and place both on the safety chain",
          "Apply Lasswell’s model to a risk communication case, with all five elements",
          "Explain what the three cases (Avianca 52, Korean Air 801, Manila) reveal about lateral communication, hierarchy and control over information",
          "Name the four points of the conclusion on trust, skills, information gathering and participation"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this session is",
        "tekst": "Session 3 is the lecture **Communication Matters and the significance of information**, given by Jonathan Corr. There is no separate chapter in Bieder for it: this page is built from the lecture and from the book chapters it leans on, which are chapter 2 (Blokland & Reniers on definitions), chapter 3 (Leveson) and chapter 9 (Schulman).\n\nThe session has a simple spine. Safety and security work is done through **interventions**, interventions run on **information**, information moves through **communication**, and communication is where most of it goes wrong. The three aviation and hostage cases at the end are there to make that last point stick."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "In this order, and stop when you run out of time.\n\n**1. The To remember tab (10 minutes).** The safety chain, the five challenges, the nine information criteria, the security paradox and Lasswell on one page.\n\n**2. Section 3.5 and 3.8 in Core material (15 minutes).** The security paradox and the three cases. These are the parts the lecturer spends the most time on and the parts that connect to the rest of the course.\n\n**3. The exercises in Applying it (30 minutes).** Especially the Lasswell exercise and the one on the Manila case, because they ask you to apply rather than to recall.\n\n**4. The quiz in Check yourself (10 minutes).**\n\nOnly after that is it worth reading the whole of Core material from the top."
      },
      {
        "type": "waarschuwing",
        "titel": "One figure on the slides does not add up",
        "tekst": "The slide \"What the examples reveal\" says the three cases cost **167, 228 and 9** lives.\n\n**228** is right for **Korean Air 801** (228 of the 254 people on board died) and **9** is right for **Manila** (eight hostages and the hostage-taker).\n\n**167** does not match **Avianca 52**. That crash killed **73** of the 158 people on board. The figure 167 is the death toll of the Piper Alpha platform fire, which is a standard case in safety science, so the two have probably been mixed up somewhere.\n\nLearn the lesson of the case rather than the number, and if a figure shows up in an exam question, it will be the one the lecturer uses."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material",
    "blokken": [
      {
        "type": "tekst",
        "titel": "3.1 The safety chain: five options for intervention",
        "toetsstof": true,
        "tekst": "The lecture opens with the field you will work in, drawn as a chain of five links. Know the order, because the rest of the session is organised by it.\n\n**Proaction.** Taking away the structural causes of insecurity before anything exists to protect: not building in a flood plain, designing a district so it can be policed.\n**Prevention.** Reducing the chance that a specific incident happens, and limiting its consequences in advance: public awareness, risk assessment and management, conceptual design, early warning.\n**Preparation.** Making sure that if it does happen, you are ready: infrastructure development, emergency planning, training, simulation exercises.\n**Repression.** Acting during the incident: rescue operations, firefighting, evacuation, humanitarian aid.\n**Recovery.** Everything after: damage assessment, compensation, reconstruction, and revision of the plans.\n\n**The point of the slide is not the chain itself but what runs through it.** Every single link is made of **information and communication**. Early warning is communication. Training is communication. Evacuation is communication. Damage assessment is information gathering, and the revision of plans is feeding that information back into proaction.\n\nYour own note from the lecture puts it in one line: information and communication is key **here**, with an arrow pointing at the whole cycle rather than at one link."
      },
      {
        "type": "tekst",
        "titel": "3.2 Why definitions matter",
        "toetsstof": true,
        "tekst": "Chapter 2 of the book argued this from the inside of the discipline; the lecture argues it from the practice.\n\n**The words mean different things across disciplines.** There is no single agreed vocabulary for safety, security and risk. An engineer, a criminologist, a policy adviser and a police commander can use \"risk\" in one meeting and mean four different things.\n\n**Precise, shared definitions enable standardisation and comparison.** Without them you cannot compare two organisations, two incidents or two years, because you are not measuring the same thing.\n\n**But the field keeps reopening the semantic debate instead of agreeing on terms.** That is a criticism, not a description: the lecturer is pointing out that a discipline that spends thirty years redefining its core words is not standing still by accident.\n\n**Definitions are not neutral.** This is the sharpest claim on the slide, and it comes from Leveson in chapter 3: **how you define a term decides what counts as a problem worth talking about.** Define safety as the absence of accidents and workplace stress is not a safety problem. Define security as protection against outsiders and the insider disappears from view.\n\n**The evidence that the vocabulary is lopsided:** Blokland and Reniers counted the hits in Google Scholar. Roughly **3.45 million** for \"safety\", about **8,800** for \"unsafety\". We have a rich language for the desirable condition and almost none for its opposite, which is exactly why chapter 2 had to coin its own terms."
      },
      {
        "type": "uitleg",
        "tekst": "**Why this is more than an academic complaint**\n\n**Own explanation.** In a multi-agency operation the definitions are not on a slide, they are in the radio traffic. If \"secure the area\" means \"make it safe to enter\" to the fire service and \"prevent anyone from entering\" to the police, both act correctly on their own definition and the operation fails.\n\nThat is the practical version of the point, and it is also the bridge to the next section: the first of the five intervention challenges is about exactly this."
      },
      {
        "type": "tekst",
        "titel": "3.3 Intervention challenges",
        "toetsstof": true,
        "tekst": "Five challenges when organisations have to work together in an intervention. Your lecture notes list the same five, and they are the sort of list an exam question builds on.\n\n**1. Dealing with stress and uncertainty.** The situation is unclear and the pressure is high, which is when people fall back on their own routines instead of the shared plan.\n\n**2. Discrepancies in the style and manner of working.** Operational and practical differences: how a decision is taken, how an order is given, how strictly a procedure is followed.\n\n**3. Type of personnel, and different levels of professionalism and experience.** Different sensitivities and different training. A volunteer, a conscript, a career officer and a private contractor bring different assumptions to the same scene.\n\n**4. Differing understanding and concepts of time.** Different priorities in how time is used. To a medical team \"now\" means seconds; to an investigating officer it may mean before the evidence degrades; to a municipality it may mean this week.\n\n**5. Use of language, and the negative impact of unclear communication.** Jargon, and different definitions and interpretations, which the lecturer links to the **quality of perception**: the gap between what is really happening and what the people involved believe is happening.\n\nThat last term is worth noticing. It comes straight from chapter 2, where Blokland and Reniers argue that risk, safety and security are **constructs in people's minds**, so improving the quality of perception is part of managing them."
      },
      {
        "type": "tekst",
        "titel": "3.4 The information hurdle",
        "toetsstof": true,
        "tekst": "Interventions need information, and not just any information. The slide gives **nine quality criteria**: information must be **accurate, concise, believable, complete, clear, valid, objective, redundant and up to date**.\n\n**Redundant** is the one that looks out of place and is not. In ordinary writing redundancy is a fault; in an intervention it is a safeguard. If the same critical fact reaches the command post through two independent routes, a single broken link does not blind the operation.\n\n**Why it is called a hurdle.** The lecture then lists what stands between you and that quality:\n- **Systems may be too inflexible** and subject to **legal limitations**, so the information exists but may not be shared.\n- **Information unreliability**: what comes in is incomplete, out of date or simply wrong.\n- **Vulnerability of communication structures**: the network itself can fail or be attacked.\n- **Time pressure.**\n- **Different actors with different agendas**, so what is shared is shaped by what each party wants the others to know.\n\n**Situation assessment** is the reason all this matters: it is the basis for decision-making and for collaboration. Two agencies with different pictures of the same situation cannot coordinate, however good their intentions.\n\n**The example: Ushahidi.** The lecture points at data collection in humanitarian emergencies, where the classic methods are surveys and surveillance. Ushahidi is the platform first built during the 2007 to 2008 post-election violence in Kenya that let ordinary people report incidents by text message and mapped them in near real time. It is the standard example of **crowdsourced crisis information**: fast and wide, but with reliability and verification as its weak point, which is exactly the trade-off the nine criteria describe."
      },
      {
        "type": "tekst",
        "titel": "3.5 The security paradox",
        "toetsstof": true,
        "tekst": "This is the heart of the lecture, and it is the same tension you met in chapter 1 and chapter 9.\n\n**Safety science runs on openness.** It improves by sharing near-misses and weak signals across departments, which is Schulman's argument in chapter 9: precursors are only useful if people report them and others get to hear about them.\n\n**Security runs on the opposite logic.** It contains information, so that adversaries cannot map vulnerabilities or defences. What safety calls learning, security calls leaking.\n\n**The paradox in one question**, and this is how your own notes phrase it: **when do you keep it to yourself, and when do you tell?**\n\n**The case in point: the cockpit door.** After 9/11 cockpit doors were hardened so that no one could force their way in. On **Germanwings flight 9525** a suicidal co-pilot used that same door to seal himself in while the captain was out of the cockpit. A security measure created a safety vulnerability. You saw this in chapter 9 under the name **reciprocal vulnerability**; here it serves as the illustration of the paradox.\n\n**The discussion question from the slide**, which is a fair exam question in disguise: **where might a \"need-to-know\" security culture quietly undermine the \"speak-up\" culture that safety depends on?** Think of incident reporting that becomes traceable to a person, of classified vulnerability assessments that the maintenance team may not read, and of a just culture that cannot survive contact with an investigation into intent."
      },
      {
        "type": "tekst",
        "titel": "3.6 Risk communication and crisis communication",
        "toetsstof": true,
        "tekst": "The lecture puts the two kinds of communication on the safety chain, and that placement is the whole point.\n\n**Risk communication** runs **before** the crisis: across proaction, prevention and preparation. Its audience is a public or a workforce that is not currently in danger, its purpose is **increasing preparedness**, and it has time on its side.\n\n**Crisis communication** runs **during and after**: repression and recovery. Its audience is in the middle of the event, its purpose is to direct behaviour and reduce harm, and it works under time pressure, with incomplete information and with the media already present.\n\nBetween the two sits **evaluation**, which closes the loop: what you learn in recovery feeds the risk communication of the next cycle.\n\n**Why the distinction matters in practice.** The two are often done by the same department with the same tools and the same tone, and that is a mistake. Risk communication can afford nuance, repetition and dialogue. Crisis communication needs a single clear instruction, one voice, and speed. Confusing the two produces either panic-inducing warnings or unusable crisis messages."
      },
      {
        "type": "tekst",
        "titel": "3.7 Lasswell’s communication model",
        "toetsstof": true,
        "tekst": "**Harold Lasswell (1948)** described communication with five questions, and the lecture uses the version applied to **risk communication** by Rahman and Munadi (2019).\n\n**Who?** The **communicator**, the resource person. In risk communication: the authority, the expert, the spokesperson. Their credibility is part of the message.\n**Says what?** The **message**: the content, the risk itself. What is the hazard, how likely, how serious, what should people do.\n**In which channel?** The **medium**: the channels used. Radio, text alert, public meeting, social media, a leaflet through the door.\n**To whom?** The **receiver**: the target audience. Residents, employees, a specific neighbourhood, a language group.\n**With what effect?** In this application, **increasing preparedness**. Not \"people were informed\" but \"people are more able to act\".\n\n**Two things to notice.** First, the model is **linear**: sender to receiver, with no feedback loop, which is the standard criticism of it. In a real emergency the receiver talks back, to the authority and to each other, and the model does not capture that. Second, the last question is the one most organisations skip. If you cannot say what effect you intended, you cannot tell whether the communication worked."
      },
      {
        "type": "tekst",
        "titel": "3.8 Three cases of mis(sed)communication",
        "toetsstof": true,
        "tekst": "**Case 1: Avianca 52, 1990.** A flight from Colombia to New York JFK, delayed by a backed-up airport, circled while waiting for landing clearance and ran out of fuel. The exchange on the slide is the point:\n\nThe captain tells the first officer to advise air traffic control that they have no fuel. The first officer reports that they are climbing and maintaining three thousand feet, **and** that they are running out of fuel. Control replies that they will take the aircraft fifteen miles northeast and then turn it back onto the approach, and asks whether that is acceptable **given the fuel**. The first officer answers that he guesses so, and thanks the controller.\n\nThe urgency never arrives. There is no declared emergency, no \"mayday\", no \"we cannot accept fifteen miles\". The information was transmitted and the message was not. Gladwell (*Outliers*) uses it as the classic case of **mitigated speech**: softening a message out of deference until the content disappears.\n\n**Case 2: Korean Air 801, 1997.** A flight from Korea to Guam in bad weather. The captain had committed to a visual landing, which requires seeing the runway. The first officer asks whether it rains more in this area; the captain says nothing. The flight engineer says the weather radar has helped them a lot; the captain agrees that it is very useful.\n\nBoth crew members are warning their captain, and both do it as a **hint**. In a steep cockpit hierarchy a subordinate does not contradict the captain, so the warning is wrapped until it can be heard as small talk. The aircraft flew into high ground.\n\n**Case 3: Manila bus hostage-taking, 23 August 2010.** A dismissed Filipino police officer, Rolando Mendoza, 55, took fifteen Hong Kong tourists hostage on a tour bus, demanding his job back. After ten hours of negotiation the police smashed windows, fired shots and used tear gas; a ninety-minute gunfight followed. Nine people died, including Mendoza.\n\nThe lecture breaks the failure down along the safety chain:\n- **Failed proaction:** the chain of command was not well defined, so there was no clear crisis leadership.\n- **Failed repression:** the hostage situation was not taken seriously enough, and crowd control at the scene was poor.\n- **Information without control:** the whole standoff went out as a live, unfiltered feed to local and international media, which the hostage-taker could watch on the bus television.\n- **Failed recovery:** in the aftermath there was discrimination against and harassment of Filipinos in Hong Kong and China, Chinese authorities issued a travel advisory, Filipinos lost overseas jobs through cancelled contracts, and diplomatic ties weakened.\n\n**What the three reveal**, in the lecturer's own three headings:\n**Broken lateral communication.** Avianca: the plea was buried in polite, indirect phrasing, so the urgency never reached the controller. Korean Air: a steep hierarchy discouraged direct warnings.\n**Information without control.** Manila: live feeds reached the hostage-taker before crisis command could manage the message.\n**The cost of getting it wrong.** Lives, in all three.\n\nAnd the line to remember, because it is the thesis of the whole session: **technical systems fail less often than the communication between the people running them.**"
      },
      {
        "type": "uitleg",
        "tekst": "**How this connects to the rest of the course**\n\n**Own explanation.** Three threads from this session run through the whole programme.\n\n**Lateral communication** is Schulman's term from chapter 9: communication sideways, between departments and between ranks. Avianca and Korean Air are what happens when it is blocked by politeness or by hierarchy, and chapter 9 says it is one of the four points where safety and security management collide, because security wants information contained.\n\n**Information without control** is the media side of the same problem, and it returns in Professional Skills as channel choice: who speaks, through which channel, and what the channel itself communicates.\n\n**The failure along the chain** in Manila is a model answer shape. When you analyse an incident, walk the chain (proaction, prevention, preparation, repression, recovery) and ask what failed in each link. That structure alone turns a description into an analysis."
      },
      {
        "type": "tekst",
        "titel": "3.9 Conclusion: four things that make communication work",
        "toetsstof": true,
        "tekst": "The lecture closes with four points, each with its own consequence.\n\n**1. Messages are judged on trustworthiness.** The more the relevant stakeholders know about your efforts to **openly share** information, the more they trust you. Note the tension with the security paradox: this is an argument for openness, made in a lecture that has just explained why security contains information.\n\n**2. Demonstrate your communication skills through practice.** The list is worth knowing because it is a list of verbs, not qualities: **listening, interviewing, recognising, acknowledging, asking questions, and negotiating**.\n\n**3. Information gathering on the ground is crucial.** It creates a thorough picture of conditions, expectations, aspirations, wishes, resources, preferences and the incentives of the actors involved. You cannot communicate usefully with a population you have not listened to.\n\n**4. Ensure participation.** Consult stakeholders when you plan, implement and assess, and involve them in decision-making where that is reasonable and beneficial. This is the step that turns communication from broadcasting into a two-way process, which is also the answer to the criticism of Lasswell's linear model."
      },
      {
        "type": "begrippen",
        "titel": "Key terms from session 3",
        "items": [
          {
            "begrip": "The safety chain (list)",
            "definitie": "1. Proaction: removing the structural causes of insecurity. 2. Prevention: reducing the chance of a specific incident and limiting its consequences in advance, through awareness, risk assessment, conceptual design and early warning. 3. Preparation: infrastructure, emergency planning, training and simulation exercises. 4. Repression: acting during the incident, with rescue, firefighting, evacuation and humanitarian aid. 5. Recovery: damage assessment, compensation, reconstruction and revision of the plans. Every link runs on information and communication."
          },
          {
            "begrip": "Proaction",
            "definitie": "The first link: taking away the structural causes of insecurity before there is anything to protect, for example by not building in a flood plain."
          },
          {
            "begrip": "Prevention",
            "definitie": "Reducing the likelihood of a specific incident and limiting its consequences in advance: public awareness, risk assessment and management, conceptual design, early warning."
          },
          {
            "begrip": "Preparation",
            "definitie": "Being ready for the incident you could not prevent: infrastructure development, emergency planning, training and simulation exercises."
          },
          {
            "begrip": "Repression",
            "definitie": "Acting during the incident: rescue operations, firefighting, evacuation, humanitarian aid."
          },
          {
            "begrip": "Recovery",
            "definitie": "Everything after the incident: damage assessment, compensation, reconstruction, and revision of the plans, which feeds back into proaction."
          },
          {
            "begrip": "Why definitions matter (list)",
            "definitie": "1. The words mean different things across disciplines; there is no agreed vocabulary. 2. Precise shared definitions enable standardisation and comparison. 3. The field keeps reopening semantic debates instead of settling them. 4. Definitions are not neutral: how you define a term decides what counts as a problem worth talking about (Leveson). 5. The vocabulary is lopsided: about 3.45 million Google Scholar hits for \"safety\" against roughly 8,800 for \"unsafety\" (Blokland & Reniers)."
          },
          {
            "begrip": "Definitions are not neutral",
            "definitie": "Leveson’s point, used in this lecture: the definition you adopt decides what counts as a problem. A narrow definition of safety removes whole categories of harm from view before any analysis starts."
          },
          {
            "begrip": "Intervention challenges (list)",
            "definitie": "1. Stress and uncertainty. 2. Discrepancies in style and manner of working, operational and practical. 3. Type of personnel and different levels of professionalism and experience, with different sensitivities and training. 4. Differing understandings and concepts of time, so different priorities in how time is used. 5. Use of language and unclear communication, including jargon and different definitions, which affects the quality of perception."
          },
          {
            "begrip": "Quality of perception",
            "definitie": "The gap between what is actually happening and what the people involved believe is happening. From chapter 2: risk, safety and security are constructs in people’s minds, so narrowing that gap is part of managing them."
          },
          {
            "begrip": "The nine quality criteria for information (list)",
            "definitie": "Information in an intervention must be 1. accurate, 2. concise, 3. believable, 4. complete, 5. clear, 6. valid, 7. objective, 8. redundant and 9. up to date. Redundant is deliberate: a critical fact should reach command through more than one route."
          },
          {
            "begrip": "The information hurdle (list)",
            "definitie": "What stands between you and usable information: 1. systems that are too inflexible, and legal limitations on sharing. 2. Unreliable information. 3. Vulnerable communication structures. 4. Time pressure. 5. Different actors with different agendas. Situation assessment suffers, and without a shared situation picture agencies cannot coordinate."
          },
          {
            "begrip": "Situation assessment",
            "definitie": "Building a picture of what is happening, as the basis for decision-making and collaboration. Two agencies with different pictures of the same event cannot coordinate, however willing they are."
          },
          {
            "begrip": "Ushahidi",
            "definitie": "A crowdsourced crisis mapping platform, first used during the post-election violence in Kenya in 2007 and 2008, in which the public reports incidents by text message and the reports are mapped in near real time. The lecture’s example of data collection in humanitarian emergencies: fast and wide, weaker on verification."
          },
          {
            "begrip": "The security paradox",
            "definitie": "Safety science runs on openness, sharing near-misses and weak signals; security runs on containment, so adversaries cannot map vulnerabilities. The practical question is when you keep information to yourself and when you share it."
          },
          {
            "begrip": "The cockpit door case",
            "definitie": "Cockpit doors hardened after 9/11 also locked out the crew. On Germanwings flight 9525 a suicidal co-pilot used that door to seal himself in. The security measure produced a safety vulnerability; chapter 9 calls this reciprocal vulnerability."
          },
          {
            "begrip": "Need to know versus speak up",
            "definitie": "The cultural version of the security paradox: a need-to-know security culture can quietly undermine the speak-up culture that safety depends on, for example when incident reports become traceable to individuals."
          },
          {
            "begrip": "Risk communication",
            "definitie": "Communication before the crisis, across proaction, prevention and preparation, aimed at increasing preparedness in an audience that is not currently in danger. It can afford nuance, repetition and dialogue."
          },
          {
            "begrip": "Crisis communication",
            "definitie": "Communication during and after the incident, in repression and recovery, aimed at directing behaviour and reducing harm under time pressure and with incomplete information. It needs one voice, one clear instruction and speed."
          },
          {
            "begrip": "Lasswell’s model (list)",
            "definitie": "1. Who? The communicator or resource person. 2. Says what? The message: the content, the risk. 3. In which channel? The medium. 4. To whom? The receiver, the target audience. 5. With what effect? In risk communication: increasing preparedness. Criticism: the model is linear and has no feedback loop."
          },
          {
            "begrip": "Mitigated speech",
            "definitie": "Softening a message out of deference to rank or politeness until the urgency disappears. The Avianca 52 case is the standard example: the crew reported running out of fuel without ever declaring an emergency."
          },
          {
            "begrip": "Avianca 52 (1990)",
            "definitie": "A flight from Colombia to New York ran out of fuel while circling. The crew reported the fuel state but never declared an emergency, and the controller offered a fifteen-mile extension that the first officer accepted with a thank-you. Information transmitted, message not received."
          },
          {
            "begrip": "Korean Air 801 (1997)",
            "definitie": "A flight to Guam in bad weather, with the captain committed to a visual landing. The first officer and the flight engineer both warned him in the form of hints, because a steep cockpit hierarchy discouraged contradiction. The aircraft flew into high ground; 228 people died."
          },
          {
            "begrip": "Manila bus hostage-taking (2010)",
            "definitie": "A dismissed police officer took fifteen Hong Kong tourists hostage in Manila. Failures along the whole chain: no clear chain of command (proaction), the situation not taken seriously and poor crowd control (repression), an unfiltered live media feed the hostage-taker could watch (information without control), and lasting harassment, travel advisories, job losses and diplomatic damage (recovery). Nine died."
          },
          {
            "begrip": "Information without control",
            "definitie": "A situation in which accurate information circulates faster than the organisation that should be managing it, as in Manila, where live coverage reached the hostage-taker before crisis command could shape the message."
          },
          {
            "begrip": "Broken lateral communication",
            "definitie": "Communication sideways or upwards that fails because of politeness, hierarchy or containment. Avianca and Korean Air are the aviation examples; chapter 9 names it as one of the four tensions between safety and security management."
          },
          {
            "begrip": "The four points of the conclusion (list)",
            "definitie": "1. Messages are judged on trustworthiness, and openness about your efforts to share builds it. 2. Demonstrate communication skills in practice: listening, interviewing, recognising, acknowledging, asking questions, negotiating. 3. Information gathering on the ground is crucial: it builds a picture of conditions, expectations, aspirations, wishes, resources, preferences and incentives. 4. Ensure participation by consulting stakeholders when you plan, implement and assess, and involving them in decisions where reasonable."
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
        "type": "tekst",
        "tekst": "The core of session 3 on one page. The thesis in one line: **technical systems fail less often than the communication between the people running them.**"
      },
      {
        "type": "uitleg",
        "titel": "What the lecturer emphasised",
        "tekst": "**The safety chain is the organising device of the whole lecture**, and the Manila case is analysed link by link along it. Expect to have to do the same with another incident.\n\n**The security paradox gets its own slide with a discussion question**: where might a need-to-know culture undermine a speak-up culture? A question a lecturer puts on a slide is a question that can come back.\n\n**Definitions are not neutral** is attributed to Leveson, and the Google Scholar figures (3.45 million against 8,800) are given as evidence. Two named sources, two numbers: exam material.\n\n**Lasswell is given in the risk communication version** (Rahman & Munadi, 2019), where the effect is specifically **increasing preparedness**.\n\n**The three cases are grouped under three headings**, not told as three stories: broken lateral communication, information without control, and the cost of getting it wrong."
      },
      {
        "type": "tabel",
        "titel": "The safety chain, and what information does in each link",
        "kop": [
          "Link",
          "What happens",
          "Information and communication"
        ],
        "rijen": [
          [
            "Proaction",
            "Removing structural causes of insecurity",
            "Spatial and policy decisions; who is consulted"
          ],
          [
            "Prevention",
            "Lowering the chance and the consequences of an incident",
            "Public awareness, risk assessment, early warning"
          ],
          [
            "Preparation",
            "Being ready for what you could not prevent",
            "Emergency plans, training, simulation exercises"
          ],
          [
            "Repression",
            "Acting during the incident",
            "Situation assessment, orders, evacuation messages"
          ],
          [
            "Recovery",
            "Restoring and learning",
            "Damage assessment, compensation, revision of plans"
          ]
        ]
      },
      {
        "type": "tabel",
        "titel": "The two kinds of communication",
        "kop": [
          "",
          "Risk communication",
          "Crisis communication"
        ],
        "rijen": [
          [
            "Where on the chain",
            "Proaction, prevention, preparation",
            "Repression and recovery"
          ],
          [
            "Audience",
            "Not currently in danger",
            "In the middle of the event"
          ],
          [
            "Purpose",
            "Increasing preparedness",
            "Directing behaviour, reducing harm"
          ],
          [
            "Conditions",
            "Time, room for nuance and dialogue",
            "Time pressure, incomplete information, media present"
          ],
          [
            "What it needs",
            "Repetition, two-way contact",
            "One voice, one clear instruction, speed"
          ]
        ]
      },
      {
        "type": "tekst",
        "titel": "The four lists to know",
        "tekst": "**Five intervention challenges:** stress and uncertainty; discrepancies in working style; type of personnel and level of professionalism; different concepts of time; language and jargon, which affects the quality of perception.\n\n**Nine quality criteria for information:** accurate, concise, believable, complete, clear, valid, objective, **redundant**, up to date.\n\n**Lasswell:** who, says what, in which channel, to whom, with what effect (increasing preparedness).\n\n**The conclusion:** trustworthiness through openness; skills in practice (listening, interviewing, recognising, acknowledging, asking questions, negotiating); information gathering on the ground; participation of stakeholders."
      },
      {
        "type": "tekst",
        "titel": "The security paradox and the three cases",
        "tekst": "**The paradox:** safety runs on openness (near-misses, weak signals, chapter 9), security runs on containment (so adversaries cannot map defences). The case in point is the hardened cockpit door and **Germanwings 9525**.\n\n**Avianca 52 (1990):** mitigated speech. The fuel state was reported, the emergency was never declared.\n**Korean Air 801 (1997):** steep hierarchy. Two crew members warned the captain in hints.\n**Manila (2010):** information without control, and failure along the whole chain: no clear command (proaction), poor crowd control and an underestimated situation (repression), a live unfiltered feed the hostage-taker could watch, and harassment, travel advisories, job losses and diplomatic damage afterwards (recovery)."
      },
      {
        "type": "hardop",
        "titel": "Say it out loud",
        "tekst": "Can you do these without looking?",
        "stappen": [
          "Name the five links of the chain in order, and what communication does in each.",
          "Explain why definitions are not neutral, with the Leveson point and the Google Scholar figures.",
          "Name the five intervention challenges and the nine information criteria.",
          "Explain the security paradox and illustrate it with the cockpit door.",
          "Apply Lasswell to a flood warning for a neighbourhood, all five elements.",
          "Analyse the Manila case along the chain, and say what the three cases have in common."
        ]
      }
    ]
  },
  {
    "id": "toepassen",
    "titel": "Applying it",
    "blokken": [
      {
        "type": "stappen",
        "titel": "Analysing an incident on communication, in seven steps",
        "items": [
          {
            "titel": "Place the incident on the chain.",
            "tekst": "Which link were the actors in when it went wrong: proaction, prevention, preparation, repression or recovery? Most incidents fail in more than one."
          },
          {
            "titel": "Per link, ask what information was needed and whether it arrived.",
            "tekst": "Not whether it existed. Information that exists in one organisation and never reaches the other is the normal failure mode."
          },
          {
            "titel": "Run the nine criteria over the information that did arrive.",
            "tekst": "Accurate, concise, believable, complete, clear, valid, objective, redundant, up to date. Usually two or three fail at once."
          },
          {
            "titel": "Look for mitigated speech and hierarchy.",
            "tekst": "Was the warning given as a hint, a question or a polite suggestion? Who was the message going up against?"
          },
          {
            "titel": "Check who else had the information.",
            "tekst": "Media, bystanders, the perpetrator. Information without control changes what command can still do."
          },
          {
            "titel": "Apply Lasswell to the public messages.",
            "tekst": "Who spoke, what did they say, through which channel, to whom, and with what intended effect? Name the element that was missing."
          },
          {
            "titel": "Separate the technical failure from the communication failure.",
            "tekst": "State plainly which part of the harm came from the system and which from the people communicating about it. That is the thesis of this session, and it is what an analysis has to test rather than assume."
          }
        ]
      },
      {
        "type": "oefening",
        "id": "iss3-oef-1",
        "niveau": "basis",
        "vraag": "Name the five links of the safety chain in order, and for each one give a concrete safety or security measure at a university campus, plus the information or communication that measure depends on.",
        "antwoord": "**1. Proaction.** Measure: siting and designing the building so that crowds can leave quickly and sightlines are open, and not placing a chemistry lab above a lecture hall. Depends on: spatial and policy decisions taken years earlier, and on who was consulted at the design stage.\n\n**2. Prevention.** Measure: access control on lab doors, a maintenance regime for the sprinkler system, an awareness campaign about tailgating. Depends on: risk assessment, and on the awareness message actually reaching students rather than being a poster nobody reads.\n\n**3. Preparation.** Measure: an evacuation plan with marshals per floor, twice-yearly drills, a mass notification system tested in advance. Depends on: training, simulation exercises, and up-to-date contact and floor-occupancy data.\n\n**4. Repression.** Measure: the evacuation itself, the emergency services entering, first aid. Depends on: situation assessment and clear orders, and on the alarm being interpretable (what do people actually do when they hear it?).\n\n**5. Recovery.** Measure: counselling, repairs, resuming teaching, the investigation. Depends on: damage assessment, and on feeding what you learn back into the plans, which closes the loop to proaction.\n\n**The point of the exercise:** every link fails on information rather than on hardware. The sprinkler is fine; nobody logged that it was not serviced. The plan is fine; the marshals were never trained. That is the lecture's thesis in practice."
      },
      {
        "type": "oefening",
        "id": "iss3-oef-2",
        "niveau": "basis",
        "vraag": "Apply Lasswell's model, all five elements, to a warning for residents living near a chemical plant that has just had a leak. Then name two weaknesses of the model itself in this situation.",
        "antwoord": "**Who?** The safety region or the mayor, not the company. In a crisis the credibility of the communicator is part of the message, and a message from the party that caused the incident is discounted.\n\n**Says what?** The instruction, first and unambiguous: stay indoors, close windows and doors, switch off mechanical ventilation. Then the minimum context: what happened, what substance, what the risk is, when the next update comes.\n\n**In which channel?** Several at once, because reach and speed differ: a cell broadcast or siren for immediate reach, radio and the regional broadcaster, the safety region's website and social media, and a phone line for questions. Language versions where the area requires it.\n\n**To whom?** The residents in a defined area, with the vulnerable groups named separately: care homes, schools, people who do not read Dutch, people who were outdoors.\n\n**With what effect?** Increasing preparedness and compliance: people indoors with windows shut within ten minutes, and not driving towards the plant to look.\n\n**Two weaknesses of the model here.**\nFirst, it is **linear and has no feedback loop**. In a real leak the residents talk back immediately, on social media and to each other, and rumours move faster than the official channel. A model that stops at \"with what effect\" has no place to put that.\nSecond, it treats the **channel as neutral**, while the choice of channel is itself a message: a siren says danger now, a tweet says routine, and a press conference with the mayor says this is serious enough for the highest authority in the region. You saw the same point in Professional Skills as \"the medium is the message\"."
      },
      {
        "type": "oefening",
        "id": "iss3-oef-3",
        "niveau": "gevorderd",
        "vraag": "Take the Manila bus hostage-taking and analyse it link by link along the safety chain. Then say which single change would most likely have reduced the harm, and defend that choice.",
        "antwoord": "**Proaction.** The chain of command was not well defined, so there was no clear crisis leadership. That is a structural condition set long before 23 August 2010: who commands a hostage situation, who may authorise an assault, and how the national police and the city relate to each other. Nothing about the day itself could repair it.\n\n**Prevention.** A dismissed officer with a grievance and continued access to weapons is a foreseeable risk, and the grievance procedure that left him without a route to appeal is part of the prevention failure.\n\n**Preparation.** The assault itself showed the gap: smashing windows, shots and tear gas across ninety minutes is not the performance of a trained and rehearsed team. Preparation also covers media arrangements, and there were none.\n\n**Repression.** The situation was not taken seriously enough and crowd control at the scene was poor, so bystanders and media occupied the ground the operation needed. Alongside that sits the **information without control** problem: an unfiltered live feed went to local and international outlets, and the hostage-taker could watch it on the bus television, which means the police lost the ability to control what he knew about their movements and about his family.\n\n**Recovery.** The harm continued after the last shot: discrimination and harassment of Filipinos in Hong Kong and China, a Chinese travel advisory, Filipino workers losing jobs through cancelled contracts, and weakened diplomatic ties. Recovery failed as a communication task, not as a reconstruction task.\n\n**The single change.** The strongest candidate is **controlling the information environment during the standoff**: a media line at a distance, an agreed embargo on live footage of police movements, and one spokesperson. That is defensible because it is the failure that directly fed the perpetrator's decisions during the ninety minutes in which people died, and because it was achievable on the day, unlike the chain of command, which needed to have been fixed years earlier.\n\n**The counter-argument you should acknowledge:** the assault itself was the immediate cause of most of the deaths, so better trained repression might have saved more lives than better media control. A good answer names this and says why it still chooses the information environment, for example because a trained unit cannot compensate for an adversary watching the operation live."
      },
      {
        "type": "oefening",
        "id": "iss3-oef-4",
        "niveau": "gevorderd",
        "vraag": "The security paradox in your own organisation. Take a hypothetical security department that has introduced a rule that all vulnerability assessments are classified and shared strictly on a need-to-know basis. Name four ways this could undermine the safety side, and propose a design that keeps both.",
        "antwoord": "**Four ways it undermines safety.**\n\n**1. The people who have to act cannot see the finding.** A maintenance team that may not read the assessment cannot fix what it names. Security has protected the document and left the vulnerability in place.\n\n**2. Reporting dries up.** If everything to do with vulnerabilities is classified, staff learn that reporting a weak signal starts a formal, traceable process. Chapter 9 calls weak signals and precursors the basis of reliability; a just culture cannot survive if every report is treated as a security matter.\n\n**3. Lateral communication breaks.** Departments stop hearing what other departments found, which is exactly the tension chapter 9 names: security restricts information, safety depends on sharing it sideways.\n\n**4. The organisation loses its own situation picture.** With knowledge fragmented into compartments, nobody holds the whole, so the interaction between two separately known weaknesses is invisible. That is how a reciprocal vulnerability such as the cockpit door survives review.\n\n**A design that keeps both.** Split the material rather than the culture.\n- **Findings** (what is wrong and who must act) go to the people who have to act, in plain language and without the attack scenarios.\n- **Scenarios and target rankings** (how it could be exploited, which target is most attractive) stay restricted, because that is what an adversary would want.\n- **Reporting stays open and non-punitive** by default, with a separate, explicit route for anything that suggests intent, so that ordinary reports do not get pulled into an investigation.\n- **One role holds both pictures**: a person or small team cleared for the restricted material who also sits in the safety meetings, so the reciprocal vulnerabilities can still be seen by someone.\n\n**The honest conclusion**, and the lecture invites it: this reduces the conflict, it does not remove it. The question on the slide, when do you keep it to yourself and when do you tell, has no general answer, only a defensible decision per case."
      },
      {
        "type": "oefening",
        "id": "iss3-oef-5",
        "niveau": "gevorderd",
        "vraag": "Avianca 52 and Korean Air 801 are both about a warning that did not land. Compare the two mechanisms, and explain what an organisation can change about each. Then apply the comparison to a security officer who notices something wrong during a VIP visit.",
        "antwoord": "**The mechanisms differ.**\n\nIn **Avianca 52** the problem is **mitigated speech across an organisational boundary and a language**: the crew softened the message to a controller they did not know, in a second language, inside a system where \"we are running out of fuel\" is a routine phrase and \"mayday fuel\" is a legal declaration with consequences. The information was transmitted; the urgency was stripped off it.\n\nIn **Korean Air 801** the problem is **hierarchy inside the cockpit**. The first officer and the flight engineer both knew, and both chose a form (a question about the rain, a compliment about the radar) that let the captain ignore it without losing face. The message was mitigated for the sake of rank.\n\n**What an organisation can change.**\nFor the Avianca mechanism: fixed phraseology with defined consequences, so that the severity does not depend on tone. Training in which people practise saying the hard sentence, and a norm that the receiver asks a closing question (\"do you need to declare an emergency?\") rather than offering an option.\nFor the Korean Air mechanism: crew resource management, which is exactly what aviation built after these crashes. Flattened authority in the moment, a duty to speak, agreed escalation phrases, and a superior whose job it is to invite contradiction.\n\n**The security officer at a VIP visit.** Both mechanisms are present at once: a junior officer, a senior protection detail, a client, and a guest who must not be inconvenienced. The Avianca risk is that the observation is passed on as a remark (\"there is someone at the rear door who does not seem to belong\"). The Korean Air risk is that the officer does not address the detail leader at all, or wraps it as a question.\n\nWhat helps is the same two things: an **agreed phrase** that means stop and cannot be softened, and a leader who has made it explicit beforehand that interrupting is expected and never penalised. That is the speak-up culture from the security paradox slide, and it is also what chapter 9 means by giving people the authority to stop."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Fourteen questions on session 3",
        "vragen": [
          {
            "vraag": "What is the correct order of the safety chain?",
            "opties": [
              "Prevention, proaction, preparation, repression, recovery",
              "Proaction, prevention, preparation, repression, recovery",
              "Preparation, proaction, prevention, recovery, repression",
              "Proaction, preparation, prevention, repression, recovery"
            ],
            "juist": 1,
            "uitleg": "Proaction removes structural causes; prevention lowers the chance of a specific incident. Recovery feeds back into proaction, which is why it is drawn as a cycle."
          },
          {
            "vraag": "Early warning belongs to which link?",
            "opties": [
              "Proaction",
              "Prevention",
              "Repression",
              "Recovery"
            ],
            "juist": 1,
            "uitleg": "Together with public awareness, risk assessment and conceptual design. Repression is acting during the incident."
          },
          {
            "vraag": "Why does the lecture say definitions are not neutral?",
            "opties": [
              "Because every discipline should use its own definition",
              "Because the definition you adopt decides what counts as a problem worth talking about",
              "Because definitions change over time",
              "Because there are more publications about safety than about unsafety"
            ],
            "juist": 1,
            "uitleg": "The point is from Leveson. The last option is the evidence that the vocabulary is lopsided, not the reason definitions matter."
          },
          {
            "vraag": "Which figures does the lecture give for Google Scholar?",
            "opties": [
              "About 8,800 for safety and 3.45 million for unsafety",
              "About 3.45 million for safety and 8,800 for unsafety",
              "About 1 million for both",
              "About 100,000 for safety and 100 for unsafety"
            ],
            "juist": 1,
            "uitleg": "From Blokland and Reniers in chapter 2: a rich language for the desirable condition, almost none for its opposite."
          },
          {
            "vraag": "Which is NOT one of the five intervention challenges?",
            "opties": [
              "Stress and uncertainty",
              "Different concepts of time",
              "Lack of budget",
              "Use of language and jargon"
            ],
            "juist": 2,
            "uitleg": "The fifth is discrepancies in style and manner of working, and the third is type of personnel and level of professionalism. Budget is not on the list."
          },
          {
            "vraag": "Why is \"redundant\" one of the nine quality criteria for information?",
            "opties": [
              "Because repeating a message makes it more believable",
              "Because a critical fact should reach command through more than one route, so a single broken link does not blind the operation",
              "Because redundant information is easier to store",
              "It is a mistake on the slide"
            ],
            "juist": 1,
            "uitleg": "In ordinary writing redundancy is a fault; in an intervention it is a safeguard."
          },
          {
            "vraag": "What is the security paradox?",
            "opties": [
              "Security measures always create new vulnerabilities",
              "Safety science runs on openness while security runs on containing information",
              "Security is more expensive than safety",
              "Security professionals distrust safety professionals"
            ],
            "juist": 1,
            "uitleg": "Option one describes reciprocal vulnerability, which is the illustration used, not the paradox itself."
          },
          {
            "vraag": "The hardened cockpit door and Germanwings 9525 are used to show that:",
            "opties": [
              "Pilots should be screened more carefully",
              "A security measure can create a safety vulnerability",
              "Cockpit doors should never be locked",
              "Safety always takes precedence over security"
            ],
            "juist": 1,
            "uitleg": "Chapter 9 calls it reciprocal vulnerability: protection against intruders became protection for the attacker already inside."
          },
          {
            "vraag": "Where on the chain does risk communication sit?",
            "opties": [
              "Repression and recovery",
              "Proaction, prevention and preparation",
              "Only in preparation",
              "Throughout, it is the same as crisis communication"
            ],
            "juist": 1,
            "uitleg": "Crisis communication is the one in repression and recovery. Its purpose is directing behaviour under time pressure; risk communication aims at increasing preparedness."
          },
          {
            "vraag": "In Lasswell’s model applied to risk communication, what is the fifth element?",
            "opties": [
              "Through which channel",
              "With what effect: increasing preparedness",
              "With what budget",
              "For how long"
            ],
            "juist": 1,
            "uitleg": "Who, says what, in which channel, to whom, with what effect. The last one is the one organisations most often skip."
          },
          {
            "vraag": "What is the standard criticism of Lasswell’s model?",
            "opties": [
              "It has too many elements",
              "It is linear and has no feedback loop",
              "It ignores the message",
              "It only works for mass media"
            ],
            "juist": 1,
            "uitleg": "In a real emergency the receiver talks back, to the authority and to others, and the model has nowhere to put that."
          },
          {
            "vraag": "What went wrong in the Avianca 52 case?",
            "opties": [
              "The radio failed",
              "The fuel state was reported, but the urgency was softened and no emergency was declared",
              "The controller ignored a mayday call",
              "The crew did not know how much fuel they had"
            ],
            "juist": 1,
            "uitleg": "Mitigated speech: information transmitted, message not received. The first officer even thanked the controller for the fifteen-mile extension."
          },
          {
            "vraag": "What does Korean Air 801 illustrate?",
            "opties": [
              "Poor maintenance",
              "A steep hierarchy in which warnings are given as hints",
              "Bad weather radar",
              "Information without control"
            ],
            "juist": 1,
            "uitleg": "Both the first officer and the flight engineer warned the captain in a form he could ignore without losing face."
          },
          {
            "vraag": "Which failure in Manila is described as \"information without control\"?",
            "opties": [
              "The police had no information about the hostage-taker",
              "An unfiltered live media feed reached the hostage-taker before crisis command could manage the message",
              "The negotiators were not informed of the plan",
              "The media were not told anything"
            ],
            "juist": 1,
            "uitleg": "The standoff was broadcast live, and Mendoza could watch it on the bus television."
          }
        ]
      },
      {
        "type": "checklist",
        "titel": "Can you do this before the midterm?",
        "tekst": "The midterm on 10 November covers the concepts and topics of the course, so this session counts alongside the chapters.",
        "items": [
          {
            "doel": "Name the five links of the chain and place measures in them",
            "uitleg": "Proaction, prevention, preparation, repression, recovery, drawn as a cycle."
          },
          {
            "doel": "Explain why definitions matter, including Leveson and the Google Scholar figures",
            "uitleg": "Definitions are not neutral: they decide what counts as a problem."
          },
          {
            "doel": "Reproduce the five intervention challenges and the nine information criteria",
            "uitleg": "Both are list questions; learn them as lists."
          },
          {
            "doel": "Explain the security paradox with its case in point",
            "uitleg": "Openness against containment; the cockpit door and Germanwings 9525."
          },
          {
            "doel": "Distinguish risk from crisis communication and place both on the chain",
            "uitleg": "Before against during and after; preparedness against directing behaviour."
          },
          {
            "doel": "Apply Lasswell with all five elements and name its weakness",
            "uitleg": "Who, what, which channel, whom, what effect; linear, no feedback."
          },
          {
            "doel": "Use the three cases as evidence rather than as anecdotes",
            "uitleg": "Mitigated speech, hierarchy, information without control."
          },
          {
            "doel": "Give the four points of the conclusion",
            "uitleg": "Trustworthiness, skills in practice, information gathering on the ground, participation."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Corr, J. M. (2026). Session 3: Communication matters and the significance of information [Lecture slides]. Intro to Safety and Security, The Hague University of Applied Sciences."
          },
          {
            "apa": "Blokland, P., & Reniers, G. (2020). An ontological and semantic foundation for safety and security science. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 21-35). Springer."
          },
          {
            "apa": "Leveson, N. (2020). A systems approach to safety and security. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 37-45). Springer."
          },
          {
            "apa": "Schulman, P. R. (2020). Safety and security: Managerial tensions and synergies. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 87-95). Springer."
          },
          {
            "apa": "Lasswell, H. D. (1948). The structure and function of communication in society. In L. Bryson (Ed.), The communication of ideas (pp. 37-51). Harper & Row."
          },
          {
            "apa": "Rahman, A., & Munadi, K. (2019). Communicating risk in enhancing disaster preparedness: A pragmatic example of disaster risk communication approach from the case of Smong story. IOP Conference Series: Earth and Environmental Science, 273."
          },
          {
            "apa": "Gladwell, M. (2008). Outliers: The story of success. Little, Brown and Company."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "Where this comes back",
        "tekst": "The security paradox returns in chapter 9 (Schulman) as one of the four tensions between safety and security management, and the choice of channel and messenger returns in Professional Skills session 2 as \"the medium is the message\".",
        "punten": [
          "Chapter 9: lateral communication, precursors and the four tensions",
          "Chapter 5: why just culture and weak signals do not transfer to security",
          "Professional Skills: channel choice when the news is bad"
        ]
      }
    ]
  }
];

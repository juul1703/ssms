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
      "tekst": "**What this tab is**\n\nChapter 1 as one easy story, in a few minutes."
    },
    {
      "type": "tekst",
      "titel": "The paradox the whole book starts from",
      "tekst": "The safer and more secure organisations become, the **more** we expect from them. Every improvement raises the bar, because every incident that is left becomes bigger news. That’s why safety and security never feel ‘done’."
    },
    {
      "type": "tekst",
      "titel": "Two fields with two histories",
      "tekst": "They grew up separately. **Safety** came from hazardous industries (energy, chemicals, transport, healthcare) and big accidents: think **Turner** (*Man-made Disasters*, 1978) and **Perrow** (*Normal Accidents*: interactive complexity plus tight coupling). **Security** came from protecting the **state** against foreign enemies; for companies it barely mattered until **9/11** changed everything (new fears, new policy, new agencies like the TSA).\n\nAfter 9/11 the two started to overlap in hazardous industries, with **four consequences**: a new category of threats, new collaborations, doubt about whether existing protection works, and interactions that aren’t obvious, especially in normal day-to-day work. Example: an emergency exit must open from the inside (safety) but nobody should slip out unseen (security)."
    },
    {
      "type": "tekst",
      "titel": "Why defining it is so hard",
      "tekst": "Two reasons: **language** (Dutch has one word, ‘veiligheid’, for both) and **different scientific traditions**. The book gives **two ways** to tell them apart: (1) **was it intentional?** and (2) **which direction does the harm go?** (safety: the system doesn’t harm its environment; security: the environment doesn’t harm the system). They can disagree: an ex-employee opening a valve is intentional (security) but the system harms the river (safety). That grey zone is what the book is about. And in real life, workers have to act **before** anyone decided which box it fits in."
    },
    {
      "type": "tekst",
      "titel": "Limits and tensions",
      "tekst": "Technology and rules can’t make anything 100% safe: there are always more ways for a complex system to fail than to work (Schulman), and **compliance is not the same as being safe**. The chapter leaves you with three questions (what is safe **enough**, what does it mean for **people**, **who gains** and who gets the strain?) and **four tensions**: merge or keep separate, regulators getting security tasks without the knowledge, openness versus confidentiality, and research that is mostly engineering."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 4 things**\n\n1. The paradox: safer organisations, higher expectations.\n2. Two histories: safety from industry and accidents (Turner, Perrow), security from the state; 9/11 brought them together, with four consequences.\n3. Two ways to distinguish them: intent, and the direction of harm; they can disagree.\n4. The four tensions."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/h2", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nChapter 2 (Blokland & Reniers) and lecture 2 as one easy story."
    },
    {
      "type": "tekst",
      "titel": "Two myths to drop",
      "tekst": "Myth 1: **risk and safety are opposites**. Only partly true. Myth 2: **safety and security are totally different fields**. Also wrong. Part of the mess: there’s no shared vocabulary, with loads of definitions of safety and almost none of its opposite. Precise definitions help you communicate and share knowledge without confusion."
    },
    {
      "type": "tekst",
      "titel": "Everything starts with objectives",
      "tekst": "The definitions are all built on **ISO 31000**: **risk is the effect of uncertainty on objectives**. **Objectives** are everything people or organisations want, pursue or already have and want to keep, consciously or not. Then:\n- **Safety**: the chance of **negative effects** on objectives is **low**.\n- **Security**: the chance of **intentional** negative effects on objectives is **low**.\n- **Unsecurity**: objectives are **not aligned** *and* the chance of intentional harm is **high** (two conditions). The authors avoid ‘insecurity’ because that means lacking self-confidence.\n\nRisk needs three things: **objectives, effects and uncertainty**. Risk is about an **uncertain future**; safety is about the **actual** situation now. And all of this lives partly in people’s heads, because people value objectives differently."
    },
    {
      "type": "tekst",
      "titel": "Three levels to tell safety and security apart",
      "tekst": "**Effects**: unintentional is safety, intentional is security, so security is a **subset** of safety. **Objectives**: in security there are at least **two parties whose objectives clash** (more than 90 degrees apart), so spotting that conflict is the core job. **Uncertainty**: safety events repeat so statistics work; in security the adversary keeps changing tactics, so you need other tools like game theory.\n\nThe lecture’s exam-shaped example: one objective on campus (study and work without serious harm). Wet stairs and a fall: unintentional, so **safety**. Deliberate arson: intentional, so **security**. Same objective, different kind of effect."
    },
    {
      "type": "tekst",
      "titel": "What the lecture added",
      "tekst": "**Semantic** questions (what do the words mean?) versus **ontological** ones (what has to exist for risk to exist at all?). Objectives come first: always ask what you are trying to protect. And from concepts to management in four moves: **identify objectives, identify risk sources, consider effects, set constraints** (limits you must not cross). Plus the shift from **Safety-I** (prevent things going wrong) to **Safety-II** (also the condition of excellent performance in achieving objectives, Hollnagel)."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 5 things**\n\n1. Risk = the effect of uncertainty on objectives (ISO 31000); three elements: objectives, effects, uncertainty.\n2. Safety = low chance of negative effects; security = low chance of intentional negative effects.\n3. Three levels: effects, objectives (the 90-degree clash), uncertainty.\n4. ‘Intentional’ is about the effect on objectives; unsecurity needs two conditions.\n5. The campus example: same objective, different nature of the effect."
    }
  ]
});

voegOverviewToe("intro-to-safety-security/college-3", {
  "id": "overview",
  "titel": "Quick recap",
  "blokken": [
    {
      "type": "slimmer",
      "tekst": "**What this tab is**\n\nLecture 3, Communication matters, as one easy story."
    },
    {
      "type": "tekst",
      "titel": "The big idea",
      "tekst": "Technical systems fail **less often** than the communication between the people running them. That’s the whole lecture in one line."
    },
    {
      "type": "tekst",
      "titel": "The safety chain",
      "tekst": "Five links in a **closed loop** (not a straight line: recovery feeds the next round of prevention): **proaction** (remove the causes), **prevention** (lower the chance and the damage), **preparation** (be ready for what you couldn’t prevent), **repression** (act during the incident) and **recovery** (restore and learn). Communication matters in every link: from who gets consulted on spatial plans, to evacuation messages, to compensation afterwards. The lecturer analyses the **Manila** case link by link, so expect to do the same with another incident."
    },
    {
      "type": "tekst",
      "titel": "Why working together goes wrong",
      "tekst": "**Definitions are not neutral** (Leveson): the same word means something else in each field, and the Google Scholar numbers prove how lopsided the research is. When organisations team up in a crisis they hit **five challenges**: stress and uncertainty, different working styles, different kinds of personnel and professionalism, different ideas of time, and language and jargon.\n\nGood decisions need good information, and the lecture lists **nine criteria**: accurate, concise, believable, complete, clear, valid, objective, **redundant** and up to date. In a crisis a lot of that is missing.\n\nThen the **security paradox**: safety runs on **openness** (share near-misses and weak signals), security runs on **containment** (don’t let adversaries map your defences). The hardened cockpit door and **Germanwings 9525** show how that can backfire."
    },
    {
      "type": "tekst",
      "titel": "Talking before and during a crisis",
      "tekst": "The lecture lays **three modes** over the chain. **Risk communication** comes **before** (proaction, prevention, preparation): people aren’t in danger yet, you have time for nuance and dialogue, and the goal is **preparedness**. **Crisis communication** is the **widest arrow**: active before, during and long after the crisis; in the acute phase it’s time pressure, incomplete info and media everywhere, so you need one voice and one clear instruction, fast. **Evaluation** runs from repression to recovery and looks back at what happened (and who’s accountable). Mixing up these registers is a failure in itself. **Lasswell** helps you build a message: **who** says **what**, through **which channel**, to **whom**, with **what effect** (here: increasing preparedness)."
    },
    {
      "type": "tekst",
      "titel": "Three cases, three lessons",
      "tekst": "**Avianca 52** (1990): the crew mentioned the low fuel but never declared an emergency (mitigated speech). **Korean Air 801** (1997): a steep hierarchy, so the crew only hinted at their worries to the captain. **Manila** (2010): information without control, failing along the whole chain, including a live feed the hostage-taker could watch. What makes communication work: **trust through openness**, practical skills (listening, asking, negotiating), info from the ground, and involving stakeholders."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 5 things**\n\n1. The safety chain: proaction, prevention, preparation, repression, recovery.\n2. Five intervention challenges and nine information criteria.\n3. The security paradox: openness versus containment (the cockpit door).\n4. Three modes on the chain: risk communication (before), crisis communication (widest: before, during, long after), evaluation (repression to recovery); Lasswell’s five questions.\n5. Avianca, Korean Air, Manila: mitigated speech, hierarchy, information without control."
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
      "tekst": "Six lenses for any case: who wants what, what must never happen, which professions are involved, what must be shared or kept secret, who came first, and what’s outside the organisation’s control. Four take-aways: **definitions shape solutions**, **analyse together but organise carefully**, **management means holding tensions**, and **zoom out**. Likely exam question: merge them, or keep them apart?"
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


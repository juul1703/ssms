/* ============================================================
   Intro to Safety & Security: Quick recap-tabbladen (overview)
   Per les het hele college of hoofdstuk als luchtig verhaal, met
   "If you only remember ...". Wordt met voegOverviewToe() (lesstof.js)
   direct na To remember ingevoegd. Moet dus na de lesbestanden en
   recap-intro.js laden, en voor vakken.js.
   v141: sessie 1 (college-1), sessie 2 (h1, h2), sessie 3 (college-3).
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
      "tekst": "**Semantic** questions (what do the words mean?) versus **ontological** ones (what has to exist for risk to exist at all?). Objectives come first: always ask what you are trying to protect. And from concepts to management in four moves: **identify objectives, identify risk sources, consider effects, set constraints** (limits you must not cross). Plus the shift from **Safety-I** (prevent things going wrong) to **Safety-II** (also learn from things going right)."
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
      "tekst": "Five links, in order: **proaction** (remove the causes), **prevention** (lower the chance and the damage), **preparation** (be ready for what you couldn’t prevent), **repression** (act during the incident) and **recovery** (restore and learn). Communication matters in every link: from who gets consulted on spatial plans, to evacuation messages, to compensation afterwards. The lecturer analyses the **Manila** case link by link, so expect to do the same with another incident."
    },
    {
      "type": "tekst",
      "titel": "Why working together goes wrong",
      "tekst": "**Definitions are not neutral** (Leveson): the same word means something else in each field, and the Google Scholar numbers prove how lopsided the research is. When organisations team up in a crisis they hit **five challenges**: stress and uncertainty, different working styles, different kinds of personnel and professionalism, different ideas of time, and language and jargon.\n\nGood decisions need good information, and the lecture lists **nine criteria**: accurate, concise, believable, complete, clear, valid, objective, **redundant** and up to date. In a crisis a lot of that is missing.\n\nThen the **security paradox**: safety runs on **openness** (share near-misses and weak signals), security runs on **containment** (don’t let adversaries map your defences). The hardened cockpit door and **Germanwings 9525** show how that can backfire."
    },
    {
      "type": "tekst",
      "titel": "Talking before and during a crisis",
      "tekst": "**Risk communication** happens **before**: people aren’t in danger yet, you have time for nuance and dialogue, and the goal is **preparedness**. **Crisis communication** happens **during and after**: time pressure, incomplete info, media everywhere, so you need one voice and one clear instruction, fast. **Lasswell** helps you build a message: **who** says **what**, through **which channel**, to **whom**, with **what effect** (here: increasing preparedness)."
    },
    {
      "type": "tekst",
      "titel": "Three cases, three lessons",
      "tekst": "**Avianca 52** (1990): the crew mentioned the low fuel but never declared an emergency (mitigated speech). **Korean Air 801** (1997): a steep hierarchy, so the crew only hinted at their worries to the captain. **Manila** (2010): information without control, failing along the whole chain, including a live feed the hostage-taker could watch. What makes communication work: **trust through openness**, practical skills (listening, asking, negotiating), info from the ground, and involving stakeholders."
    },
    {
      "type": "uitleg",
      "tekst": "**If you only remember 5 things**\n\n1. The safety chain: proaction, prevention, preparation, repression, recovery.\n2. Five intervention challenges and nine information criteria.\n3. The security paradox: openness versus containment (the cockpit door).\n4. Risk communication (before) versus crisis communication (during and after); Lasswell’s five questions.\n5. Avianca, Korean Air, Manila: mitigated speech, hierarchy, information without control."
    }
  ]
});


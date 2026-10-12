/* ============================================================
   Intro to Safety & Security, Bieder H9
   Schulman, Safety and security: managerial tensions and synergies
   Engelse versie (tot v91 Nederlands in ssms-inhoud.js).
   Het kernstof-tabblad heet kern2, zodat sessie 6 twee losse
   kernstof-tabs krijgt: H7 (kern) en H9 (kern2).

   v118: op het niveau van de nieuwste lessen gebracht: tijdnood-blok,
   "In plain words" per kopje en hover-begrippen.
   ============================================================ */

LESSTOF['intro-to-safety-security/h9'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain why Schulman calls the CEO’s statement a \"convenient untruth\", and what the question of the chapter is",
          "Define a High Reliability Organization and what \"high reliability\" means there, including the difference between probabilistic and deterministic",
          "Reproduce the classic HRO formula: low input variance plus low process variance gives low output variance, and explain the irony in it",
          "Explain what precursors, the precursor zone and precursor resilience are, with examples",
          "Describe who reliability professionals are and why they are not defined by diplomas",
          "Explain the difference between failure and vulnerability, using the Germanwings example",
          "Explain design-based vulnerability and why the internet is the extreme example",
          "Name the four tensions between safety and security management",
          "Name the ground for overlap: the management of representational error",
          "Explain what \"higher resolution reliability\" demands and why Schulman still argues for integration"
        ]
      },
      {
        "type": "uitleg",
        "titel": "Who Schulman is, and how he relates to La Porte",
        "tekst": "**Paul Schulman** is affiliated with Mills College and the University of California, Berkeley. With Emery Roe he wrote *High Reliability Management* (2008) and *Reliability and Risk* (2016). He belongs to the same research group as La Porte, and in this chapter he builds directly on the HRO work from chapter 8.\n\nThe difference between the two chapters is the difference between a question and an answer. La Porte asks: which puzzles arise when you demand safety and security at the same time? Schulman tries: can high reliability management be the shared framework within which you tackle those puzzles?\n\nHis answer is cautiously positive. Not because safety and security are the same, since he works out the differences at length, but because both rest on one thing: **the management of error**. And that, he says, is exactly what HROs already do."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "**1. The To remember tab (10 minutes).** **2. Sections 9.2 and 9.3 (15 minutes):** where safety and security collide, and where they overlap. **3. The quiz (10 minutes). 4. Sections 9.1 and 9.4 (15 minutes).**"
      },
      {
        "type": "slimmer",
        "titel": "The structure of this chapter",
        "tekst": "The chapter has three parts, and that order is the argument.\n\n**9.1** explains how safety is managed in HROs. That is the yardstick.\n**9.2** explains why security is different and collides with that yardstick on four points.\n**9.3** looks for what overlaps despite those collisions, and concludes that integration beats separation.\n\nIf you can retell those three steps with the key terms for each, you know the chapter. The trap is to get stuck at 9.2 and conclude that Schulman is against integration. He is in favour of it, but he earns that position by first listing every objection."
      },
      {
        "type": "tekst",
        "titel": "The opening: a convenient untruth",
        "tekst": "Schulman opens with an anecdote. At a conference on safety management, organised by a large utilities regulator, infrastructure security came up. The CEO of a major utility said: **\"If we do our safety management well, that will take care of security too.\"**\n\nSchulman regarded that as a **convenient untruth**. Convenient, because it relieves the CEO of a second programme, a second budget, a second concern. Untrue, because it is not correct, and the rest of the chapter explains why.\n\nThere is a serious debate among researchers and practitioners about whether **the same management framework within one organisation** can accommodate effective safety **and** security management.\n\nResearch into **High Reliability Organizations** has focused on organisations such as nuclear power plants, commercial aviation, air traffic control centres and electricity grid operators, with extremely well developed reliability strategies in both technical design and management systems, protecting against failures that could cause catastrophic accidents.\n\nThose organisations are, as critical infrastructures, also **potential high-value targets for terrorist attacks**. But the research makes it **unclear** whether HROs address safety and security objectives at the same time in their reliability strategies.\n\nThis essay compares the main variables and the strategy of an organisation pursuing high reliability management, first with a **safety mission** and then with a **security mission**."
      }
    ]
  },
  {
    "id": "kern2",
    "titel": "Core material: chapter 9",
    "blokken": [
      {
        "type": "tekst",
        "titel": "9.1 What an HRO is, and what high reliability means",
        "toetsstof": true,
        "tekst": "The most striking feature of HROs is that they **manage technical systems that can fail with catastrophic consequences**: large-scale disruption of critical services and potentially many deaths.\n\nFor an HRO, \"high reliability\" means that protections against those failures or accidents are in place that **preclude** them, and that do so **not only probabilistically but deterministically**."
      },
      {
        "type": "uitleg",
        "tekst": "**Probabilistic versus deterministic**\n\nThis is one of the most important distinctions in the chapter.\n\n**Precluding probabilistically:** the chance of a meltdown is one in a million reactor years. Small, but not zero. You accept a residual risk and you plan around it.\n\n**Precluding deterministically:** a meltdown **must not happen**, full stop. There is no acceptable probability. You organise everything so that the event is excluded, not merely unlikely.\n\nThat is a fundamentally different attitude. An ordinary organisation does risk management: probability times consequence, then prioritise. An HRO does that too, but on top of a set of events that simply must not occur, whatever the probability. That set is called the **[[precluded events|Precluded events]]**.\n\nRemember this, because in 9.2 Schulman will say that security can **never** meet this deterministic standard. That is one of his core arguments."
      },
      {
        "type": "tekst",
        "tekst": "An important management feature of that reliability is protection against **errors** that could lead to those precluded events, and especially against **[[representational errors|Representational error]]**: misjudgements, wrong specifications and misunderstandings about the systems being managed, which can lead to decisions and actions that invite failures and accidents.\n\nIn that sense a reliability strategy is at the same time a commitment to safety, because **you cannot guarantee safety without reliability**. But this is about **[[system safety|System safety]]**, not about individual accidents such as slips, trips and falls. Those are the domain of OHS from chapter 7; HROs focus on the system."
      },
      {
        "type": "tekst",
        "tekst": "**Robustness of the technical systems**\n\nThe technical systems being managed are **well understood** in their operating principles and in the maturity of their technical design. These are **not frontier technologies** whose operation is experimental in knowledge and experience. Much, if not all, operation and maintenance has been carefully analysed, risk analysis included, and is carried out under extensive procedures. In the United States, for example, it is **prohibited by federal law** to operate a nuclear power plant \"outside the analysis\".\n\nRobustness is supported by technical designs with:\n- **redundancy** of core components,\n- **back-up systems** to compensate for the failure of primary systems,\n- planned and even **automated shutdown protocols** to stop operation in a safe mode when a major accident threatens.\n\n**Non-operation always takes precedence** over continuing to deliver output when a precluded event threatens. A nuclear plant that shuts down produces nothing, and that is the correct outcome."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The classic HRO strategy and its irony**\n\nA classic HRO management strategy rests on this formula: **low input variance** (in external resources, support, demands and conditions around the organisation), coupled with **low process variance** (operations bound by procedures and careful prior analysis and planning), leads to **low output variance** (predictable and reliable performance). Controlling input and process variance are key elements in stabilising performance.\n\nBut, and Schulman calls this **ironic**, that control is grounded in the recognition that the key to high reliability is **not** a rigid invariance of technical, management and organisational processes, but the **management of fluctuations** in task performance and conditions, keeping them within acceptable **bandwidths** and outside dangerous or **unstudied** conditions.\n\nMany organisational processes that make this possible are themselves **perishable**: attention, trust between departments and shared understanding wear out unless they are actively renewed."
      },
      {
        "type": "voorbeeld",
        "tekst": "**Why rigidity is not the same as reliability**\n\nPicture a control room where everything goes exactly by the book, the same every day, no deviation. That sounds reliable. But what happens when something occurs that is not in the book?\n\nA real HRO works differently. The operators know the temperature has to stay between X and Y, and they adjust continuously. Small deviations are normal and get corrected. Large deviations, towards the unknown, are stopped at once. It is not stillness, it is continuous movement within a band.\n\nAnd the things that make that possible, attention, trust between departments, shared understanding, wear out by themselves. Attention slackens, trust is no longer maintained, people start assuming they understand each other. An HRO has to keep renewing those things actively, or yesterday's reliability is gone tomorrow. That is the perishability Schulman is talking about."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[Precursors|Precursor]] and the [[precursor zone|Precursor zone]]**\n\nTo support this [[bandwidth management|Bandwidth management]], **precursor conditions** that could lead to precluded events are carefully identified, analysed and excluded. HROs start from the core set of **unacceptable events** and analyse **backwards** to conditions, physical and organisational, that along certain causal chains could eventually lead to significant possibilities of such events.\n\nThat **precursor zone** typically grows outward, taking in additional precursor conditions on the basis of more careful analysis and experience. The precursors are in effect **leading indicators** of potential failures and receive careful attention from operators, supervisors and senior managers. Some precursors are in fact **weak signals**, for which **receptors** at many levels of the organisation are tuned.\n\nExamples of precursors from HRO research:\n- a temperature at the edge of the permitted range,\n- a pressure above the maximum value,\n- too many people, or too much noise, in the control room,\n- silence or irritability in an individual operator,\n- backlogs in corrective reports and administration.\n\nManaging these conditions is what Schulman and Roe call **[[precursor resilience|Precursor resilience]]**: not waiting for the accident but pulling back the conditions that could lead to it."
      },
      {
        "type": "uitleg",
        "tekst": "**Look at what is in that list**\n\nLook at the examples again. Two are technical: temperature, pressure. Three are about **people and organisation**: noise in the control room, a silent operator, backlogs in the paperwork.\n\nThat is the core of HRO thinking. A precursor is not only a gauge going into the red. It is also a colleague who is unusually quiet, or a pile of reports that never gets processed. Those things predict failures as well as a pressure sensor does, but they appear on no dashboard.\n\nCompare this with Jore in chapter 5: she doubted whether learning from weak signals works in security, because the perpetrator hides them. Here you see what weak signals mean in safety, and why they do work there: the temperature does not hide itself."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[Lateral communication]] and culture**\n\nAnother key element in HRO reliability management is the existence of **a great deal of lateral communication**, that is sideways, between departments, rather than only up and down. That matters for keeping the **system focus** and preventing local action without considering wider effects. There is extensive cooperation between departments in work planning sessions, incident investigations, procedural reviews and procedure revisions.\n\nAlongside it there is a widely shared **culture** that supports those features. That culture supports managing towards **worst-case possibilities** rather than towards probability alone in many decision-making and planning activities. High value and considerable personal standing are given to people who can offer **imaginative examples** of possible causal paths to worst-case outcomes.\n\nThe culture also stresses widely distributed **responsibility** and the **authority to stop** operations, down to the individual level. In many HROs any operator can halt the process when they believe they are moving towards [[unstudied conditions|Unstudied conditions]], without having to ask permission first."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[Reliability professionals|Reliability professional]]**\n\nAn important example of that culture of responsibility reaching down to the individual is the significance of the people Schulman and Roe call **reliability professionals**.\n\nWho are they? They are individuals with a **particular perspective** on reliability, cognitive and normative. They:\n- **blend formal deductive knowledge with experiential knowledge** in their understanding of the systems they operate and manage,\n- hold a picture of \"the system\" that is **larger than their formal role**, specialisation and job description,\n- **internalise** the reliable and safe operation of their systems into their identity.\n\nIn that sense they are \"professionals\" on behalf of reliability and safety, but they are **not defined by specific diplomas or certifications**. They are found in many jobs at many levels: among control operators, production and maintenance staff, technical staff, middle managers and senior executives.\n\nTwo things make them recognisable in practice: they have a keen sense of **what they do not know**, which Schulman describes as the ability to say \"I am in unstudied conditions here\", and they are taken seriously when they say it."
      },
      {
        "type": "waarschuwing",
        "tekst": "**This cuts across Brooks and Coole**\n\nChapter 7 said: a profession is defined by a formal body of knowledge, education standards and certification. Schulman says: the people who keep an HRO reliable are **not** defined by diplomas. It is an attitude, a perspective, an identity.\n\nThat is not a contradiction but an addition, and it matters for how you think about your own future. Brooks and Coole describe what you need on paper to be called a safety or security professional. Schulman describes what you need in your head to actually be one: seeing the system as larger than your own task, knowing your own blind spots, and treating the reliability of the whole as your business. The first you get from a degree. The second you have to become."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Surprise without uncertainty**\n\nAll these elements reflect the widely stressed idea that, despite all prior anticipation and analysis, procedures, redundancies and shutdown protections, there is **still potential for surprise** in the technical systems, and a constant need for vigilance and organisational improvement.\n\nBut it is important to realise that HROs, in their recognition of surprise and their strategy of precursor resilience, face **hardly any large uncertainty** in daily operation. With their established technology, extensive planning, anticipation and analysis, what HROs do is **not \"managing the unexpected\"**. Instead, by managing towards possibility and adding a worst-case angle to planning and analysis, they **enlarge their expectations**: they formalise an approach to avoiding complacency and add scenarios to what they already foresee.\n\nTwo attitudes are singled out as the enemies of reliability: **complacency**, the assumption that because nothing went wrong yesterday nothing will go wrong today, and **hubris**, the assumption that the organisation has understood everything. Both are countered by the same means: continually questioning your own picture of the system."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nHigh-reliability organisations, such as nuclear plants and air traffic control, run systems where one big failure could be a disaster. So they do not just try to make accidents unlikely: they try to make sure certain accidents can never happen."
      },
      {
        "type": "tekst",
        "titel": "9.2 Security: failure versus vulnerability",
        "toetsstof": true,
        "tekst": "An obvious difference between safety and security management is the **primacy of hostile intent**. HROs may have been \"hardened\" against external attack, and their management systems were well organised against unintended errors in operation and maintenance, but they were **not well prepared** to protect against **deliberate and strategic internal sabotage** by acts with destructive intent. That is a special challenge in \"managing the unexpected\".\n\nIt is one thing to identify and manage operational **risks of failure**; it is another to identify and manage **vulnerability to destructive intent**. Then follows the sentence chapter 1 already quoted: **there are always more ways for a complex system to fail than for it to work correctly as designed.** But hostile strategy, external and internal, can **add further possibilities** by making vulnerabilities themselves the target, and by using the system's own protections against it."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The Germanwings example**\n\nOne example is the strategy airlines adopted after 9/11 of hardening the **cockpit door** against intrusion from outside by possible terrorists among the passengers.\n\nIronically and tragically, addressing that problem produced a **[[reciprocal vulnerability|Reciprocal vulnerability]]**: a saboteur who is already **inside** the cockpit. On **Germanwings flight 9525** a suicidal co-pilot, while the captain had briefly left the cockpit, locked the door, made himself untouchable, and flew the aircraft into a mountainside.\n\nProtecting the cockpit against intrusion from outside **created a new vulnerability** and an opportunity for a different form of attack. Achieving reliability and safety against nature or unintended human action is hard enough. It becomes a different challenge when **the failure itself is part of a learning system** that adapts to your defences."
      },
      {
        "type": "uitleg",
        "tekst": "**Why Germanwings is the perfect example**\n\nThis is the best example in the whole book, and it deserves to be understood completely.\n\nThe reinforced cockpit door was an **excellent security measure**. It solved exactly the problem it was meant for: hijackers entering the cockpit. Nobody can say the measure was wrong. But it moved the vulnerability. Previously a captain locked out could force the door. Now not. And the only person who benefited was the one already inside who meant harm.\n\nThat is what Schulman means by \"reciprocal vulnerability\". In safety you also move risks around, but nature does not go looking for the new weak spot. In security it does. Every door you close is a door someone can barricade themselves behind.\n\nCompare it with the emergency door from chapter 1 and the precedence rule from chapter 7: at Germanwings security won over safety, and it cost 150 lives."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[Design-based vulnerability]]**\n\nVulnerability comes in many forms, which gives saboteurs many options. Vulnerability means exposure to risk, but also an **inherent capacity to be harmed**.\n\nOne form of vulnerability arises from **deliberate design strategy**, where potential victims move themselves towards harm: they make an attack more likely and/or more serious. Examples: residential areas in **flood plains**, tall buildings and roads on **earthquake fault lines**, houses in **forested areas** with increased exposure to wildfires.\n\nA spectacular example of design-based vulnerability is **the internet** and its vulnerability to cyberattack. It has been argued that the internet can now be attacked **from any location, at any scale, and with a wide range of precision**. No natural system on earth could survive with such an extreme degree of vulnerability.\n\nYet we keep adding to it. Every new element, every connected device, every new service adds vulnerabilities to the whole, which Schulman describes as a kind of **[[design perversity|Design perversity]]**: we are designing our own exposure. Containing it, he argues, requires **regulation at the level of society**, not only organisational strategy."
      },
      {
        "type": "uitleg",
        "tekst": "**Why this is the end of the HRO model as a solution**\n\nNotice what Schulman is doing here. The HRO model works because the organisation **controls its own system**. The nuclear plant determines its own design, its own procedures, its own staff.\n\nWith design-based vulnerability that no longer holds. A hospital connected to the internet is vulnerable through the design of something it does not control. It can improve its own firewall, but not the internet.\n\nWith that, Schulman is saying that part of security lies **beyond the reach of any individual organisation**, and therefore beyond the reach of high reliability management at organisational level. That is a fundamental limitation, and he locates the solution in regulation at the societal level. Hold on to this, because it is one of the arguments chapter 11 picks up."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[Symbolic targets|Symbolic target]] and the impossibility of preclusion**\n\nFor a terrorist, **not every target has to be high value** in terms of disruption and deaths. Terror is designed to cause **public fear and uncertainty**, and to provoke policy reactions out of anger that may lead to sacrificing other values a society cherishes. Targets can therefore carry a **symbolic value** far beyond any physical destruction. Even attacks on marginal targets, or attacks that fail, can produce fear and a sense of vulnerability in a population.\n\nSecurity management can hardly be **the management of everything**. Schulman quotes Boin and Smith: most sensible people would agree that it is impossible to foil every conspiracy and to track down every individual or group with malicious intent.\n\nFrom that follows one of the chapter's most important conclusions: **high reliability security management cannot meet the standard of [[precluded events|Precluded events]].** It can lower probabilities; it cannot exclude."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Management control variables**\n\nStrategic vulnerability adds further challenges. Targets can be **external and internal**. An organisation has a set of controls for internal operations: hierarchical authority, procedural requirements, training, hiring and firing, surveillance. But it has **few control variables** for the vulnerability of **external infrastructures**, or for the failure of goods or services from other organisations it depends on.\n\nMoreover, attacks that are not prevented may require **coordinated emergency response and recovery** under conditions that are difficult for any individual organisation, or group of organisations, to manage effectively. Schulman quotes Boin and Smith again: plans for crisis and disaster management often have a strongly symbolic character and offer little grip for those who have to respond to unforeseen and unimaginable events. Plans are only as good as the organisations and the people who have to execute them under pressure."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**[[The risk of risk assessment]]**\n\nConsider also **the risks of risk assessments themselves** when they are applied to vulnerability. The purpose of risk analysis is to identify risks, rank them by importance and probability, and prioritise attention and resources.\n\nBut security vulnerability assessments could, **if they become known**, undermine their own accuracy through the counter-strategy they may provoke in hostile strategists. They could **attract** potential terrorists to what has been marked as vulnerable, or conversely raise the risk for targets assessed as low risk. Why would an attacker not aim at what appear to be the **least likely and possibly least defended** targets?\n\nThe role of [[precursor|Precursor]] management and the search for leading indicators and weak signals may also be limited in security management, because perpetrators will do everything to hide or falsify exactly those signals."
      },
      {
        "type": "voorbeeld",
        "tekst": "**The risk register as a map for the attacker**\n\nThis is a problem that appears in no safety handbook, because in safety it does not exist.\n\nA municipality makes a risk analysis of its events. At the top is the Christmas market: many people, little access control, high symbolic value. That is where the budget goes: concrete blocks, camera surveillance, extra guards. At the bottom is the weekly farmers' market: few people, low priority, no measures.\n\nNow that analysis leaks, or is published in a council document. For the attacker it is a map. The Christmas market is now heavily protected, so it drops out. The farmers' market is explicitly marked as unprotected.\n\nIn safety a published risk analysis is only useful: everyone knows where the dangers are and can take them into account. In security the same analysis is a double-edged weapon. That is why the transparency conflict from chapter 1 runs so deep."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The four tensions between safety and security management**\n\nGiven those challenges it is not surprising that some approaches to vulnerability management conflict with the dominant approaches in safety management. Schulman names four. Know all four, because they are the core of the exam material on this chapter.\n\n**1. Anticipation versus adaptability.** The emphasis on anticipation and prior analysis, appropriate to reliable safety management of established technical systems, can introduce **rigidity** and undermine the **resilience and adaptiveness** needed for fast reactions to unexpected attacks.\n\n**2. Restricting information versus [[lateral communication|Lateral communication]].** The need to **restrict** the spread of information about key plans, decisions and priorities within an organisation, in order to prevent counter-learning by internal or external adversaries, can conflict with the **system perspective** that lateral communication supports in HROs.\n\n**3. Hardening versus accessibility.** Protecting against intrusion with \"guns, gates and guards\" can conflict with the **accessibility** that cooperation, inspection and joint work require, both inside the organisation and with external partners.\n\n**4. Security frameworks versus emergency coordination.** Security requirements around information and access can **hamper the rapid inter-organisational coordination** that emergency response demands, precisely when speed matters most."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nSafety deals with things breaking by accident; security deals with someone trying to break them on purpose. An attacker learns and adapts, and can even be an insider. That makes security harder for these organisations than safety."
      },
      {
        "type": "tekst",
        "titel": "9.3 The ground for overlap: managing error",
        "toetsstof": true,
        "tekst": "Even given the differences and possible contradictions, it can still be argued that there are constructive overlaps or \"synergies\" in pursuing high reliability management for both missions. As the workshop prospectus noted: failure in both can lead to **\"similar ultimate consequences\"**, which may require similar emergency and crisis management approaches. Schulman adds a warning in brackets: in terrorist attacks **first responders can themselves be part of the intended targets**. That too is a difference you need to know.\n\n**The main ground** for overlap is the common need in both missions to **identify and minimise error**. Management reliability is grounded in the management of error, including the errors of misperception, misidentification and misunderstanding. The constant search for **[[representational error|Representational error]]**, questioning your own picture of the system, is what both missions need, whether the threat comes from nature, from an unintended human act, or from an adversary.\n\nThat search rests on a shared attitude: accepting surprise, fending off [[complacency and hubris|Complacency and hubris]], taking seriously the colleague who says \"something is not right here\", and coupling that with the authority to stop."
      },
      {
        "type": "uitleg",
        "tekst": "**What exactly overlaps, and what does not**\n\nSchulman is very precise here, and you need to be able to retell it just as precisely.\n\nWhat does **not** overlap: the deterministic standard (security cannot meet it), the content of the analysis ([[failure versus vulnerability|Failure versus vulnerability]]), open communication (security restricts information), and the [[precursors|Precursor]] themselves (the perpetrator hides them).\n\nWhat **does** overlap: the **attitude**. Continually questioning assumptions. Searching for what you yourself see wrongly. Taking seriously the colleague who says something is off. Rejecting complacency. The ability to recognise patterns. And the authority to stop.\n\nThat is not nothing. It is precisely the culture La Porte meant in chapter 8 by vigilance, and that Jore in chapter 5 called security mindfulness. Schulman gives it the HRO vocabulary."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**The challenges of integration: higher resolution**\n\nIt will **not be easy** to bring both missions under a larger framework of high reliability management. That requires developing both a **broader scope and a longer time horizon** of anticipation and, at the same time, a **more distributed participation** in error detection and [[precursor resilience|Precursor resilience]].\n\n**Higher resolution anticipation** means: gathering a wider range of information and applying more imagination to the analysis of external and internal threats, across a range of scales, scopes and time.\n\n**Extended time horizons** for anticipation and planning could expose both **slow safety and slow vulnerability issues**, such as the [[design-based vulnerability|Design-based vulnerability]] described earlier, or even **climate change**, which grow over time.\n\nImproved anticipation will probably have to be accompanied by a **broader scale** of analysis, including precursors that arise between organisations rather than inside one, and by more people who are able and authorised to report what they see."
      },
      {
        "type": "tekst",
        "toetsstof": true,
        "tekst": "**Teams as first responders**\n\nTeams can also be important in increasing organisational resilience under failure or attack. In many cases [[reliability professionals|Reliability professional]] working in teams function effectively as **first responders** after a failure or attack, rapidly deploying their experience and effectiveness in pattern recognition to direct action that limits damage or speeds recovery.\n\nThe example Schulman gives: the role of the American **air traffic controllers** in rapidly clearing the airspace after the attacks of 9/11 began. That is an emergency response role **serving both safety and security**. The controllers were trained for safety, recognised an unprecedented security situation within minutes, and acted without a script.\n\nOrganisations can train and support their reliability professionals to use their skills as a means of improving both the anticipation of vulnerability and the response to it."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nStill, both safety and security depend on the same habits: hunting for errors, noticing small warning signs early, and people who dare to speak up. Those habits help against accidents and against attacks."
      },
      {
        "type": "tekst",
        "titel": "9.4 Conclusion",
        "toetsstof": true,
        "tekst": "It is possible, on the basis of the above, that applying an overlapping high reliability management framework to both missions could not only strengthen both, but actually **protect against each undermining the other**.\n\nThe **error sensitivity** at the base of high reliability management can also be applied to identifying and responding to leading [[precursor|Precursor]] indicators of **one mission undermining the other**. In other words: the Germanwings situation, in which a security measure created a safety vulnerability, is exactly the kind of precursor an HRO ought to be able to catch, provided it looks at both.\n\nIt is important to think carefully about that reinforced reliability and how it **could be lost** for both purposes if they were treated as **separate processes** and confined to separate management domains.\n\nSchulman's position, precisely stated: integration does not resolve the four tensions. Separation creates a specific risk, namely that nobody notices when one mission undermines the other. A shared framework built on error sensitivity can catch those precursors."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nIf organisations manage safety and security with the same careful attention to errors and warning signs, both can get stronger, and one is less likely to undermine the other. But managers must watch the points where they clash, such as secrecy versus openness."
      },
      {
        "type": "begrippen",
        "titel": "Key terms from chapter 9",
        "items": [
          {
            "begrip": "Convenient untruth",
            "definitie": "Schulman’s label for the CEO’s claim that good safety management takes care of security too. Convenient because it saves a second programme and budget; untrue because security cannot meet the safety standard."
          },
          {
            "begrip": "High Reliability Organization (HRO)",
            "definitie": "An organisation managing technical systems that can fail with catastrophic consequences, with extremely well developed reliability strategies in both technical design and management: nuclear plants, commercial aviation, air traffic control, grid operators."
          },
          {
            "begrip": "Precluded events",
            "definitie": "The core set of events that must not happen whatever the probability. The HRO analyses backwards from them to the conditions that could lead to them."
          },
          {
            "begrip": "Deterministic versus probabilistic",
            "definitie": "Probabilistic: a small but non-zero chance is accepted and planned for. Deterministic: the event is excluded, not merely unlikely. HRO safety works deterministically; security, Schulman argues, can only work probabilistically."
          },
          {
            "begrip": "Representational error",
            "definitie": "A misjudgement, wrong specification or misunderstanding of the system being managed, which can lead to decisions and actions that invite failure. The error type HRO management protects against, and the main ground for overlap with security."
          },
          {
            "begrip": "System safety",
            "definitie": "Safety of the system as a whole, as opposed to individual accidents such as slips, trips and falls, which belong to OHS (chapter 7)."
          },
          {
            "begrip": "The low variance formula",
            "definitie": "Low input variance plus low process variance gives low output variance: the classic HRO strategy for stable, predictable performance."
          },
          {
            "begrip": "Bandwidth management",
            "definitie": "The irony in the formula: reliability is not rigid invariance but managing fluctuations within acceptable bandwidths and outside dangerous or unstudied conditions."
          },
          {
            "begrip": "Unstudied conditions",
            "definitie": "Conditions that have not been analysed in advance. Moving into them is what an HRO stops; recognising \"I am in unstudied conditions\" is the mark of a reliability professional."
          },
          {
            "begrip": "Precursor",
            "definitie": "A physical or organisational condition that could lead along a causal chain to a precluded event. Examples: a temperature at the edge of the range, noise in the control room, a silent operator, backlogs in reporting."
          },
          {
            "begrip": "Precursor zone",
            "definitie": "The set of precursor conditions identified by analysing backwards from the unacceptable events. It typically grows outward as analysis and experience accumulate."
          },
          {
            "begrip": "Precursor resilience",
            "definitie": "Managing the precursor conditions rather than waiting for the accident: pulling back the conditions that could lead to a precluded event."
          },
          {
            "begrip": "Lateral communication",
            "definitie": "Communication sideways between departments rather than only up and down. It keeps the system focus and prevents local action without regard for wider effects. It collides with the security need to restrict information."
          },
          {
            "begrip": "Reliability professional",
            "definitie": "Someone who blends formal and experiential knowledge, sees the system as larger than their own role, and internalises reliable and safe operation into their identity. Not defined by diplomas or certification, and found at every level."
          },
          {
            "begrip": "Perishability of reliability",
            "definitie": "Attention, trust and shared understanding wear out unless actively renewed, so yesterday’s reliability does not guarantee tomorrow’s."
          },
          {
            "begrip": "Complacency and hubris",
            "definitie": "The two enemies of reliability: assuming that because nothing went wrong yesterday nothing will go wrong today, and assuming the organisation has understood everything."
          },
          {
            "begrip": "Failure versus vulnerability",
            "definitie": "Managing operational risks of failure is one thing; managing vulnerability to destructive intent is another, because hostile strategy targets the vulnerabilities themselves and uses your protections against you."
          },
          {
            "begrip": "Reciprocal vulnerability",
            "definitie": "A protective measure that creates a new opening for a different form of attack. The hardened cockpit door protected against intruders from outside and protected the attacker already inside (Germanwings 9525)."
          },
          {
            "begrip": "Design-based vulnerability",
            "definitie": "Vulnerability created by deliberate design choices that move potential victims towards harm: housing in flood plains, buildings on fault lines, and above all the internet, attackable from any location and at any scale."
          },
          {
            "begrip": "Design perversity",
            "definitie": "Every new element added to a system adds vulnerabilities to the whole. Containing it requires regulation at societal level, beyond the reach of any single organisation."
          },
          {
            "begrip": "Symbolic target",
            "definitie": "A target whose value lies in the fear it produces rather than in physical destruction. Even marginal or failed attacks can create fear, which is why security cannot meet the standard of preclusion."
          },
          {
            "begrip": "The risk of risk assessment",
            "definitie": "A security vulnerability assessment that becomes known undermines its own accuracy: it can attract attackers to what is marked vulnerable, or to what is marked low risk and therefore undefended."
          },
          {
            "begrip": "Higher resolution reliability",
            "definitie": "What integration demands: a broader scope and longer time horizon of anticipation, more imagination in analysing internal and external threats, and more distributed participation in error detection."
          }
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
        "titel": "Assessing an organisation against HRO features for both missions, in eight steps",
        "items": [
          {
            "titel": "Name the precluded events.",
            "tekst": "Which events must simply not happen, whatever the probability? Make a separate list for safety and for security, and ask of the second whether deterministic preclusion is realistic."
          },
          {
            "titel": "Analyse backwards to precursors.",
            "tekst": "Which physical and organisational conditions could lead to those events? Include the organisational ones: backlogs, silence, crowding."
          },
          {
            "titel": "Test the precursors for concealability.",
            "tekst": "Which precursors can an adversary hide or falsify? Those do not work in security the way they do in safety."
          },
          {
            "titel": "Find the reliability professionals.",
            "tekst": "Who in this organisation sees the system as larger than their own task, and has the authority to stop? Do they cover both missions or only safety?"
          },
          {
            "titel": "Walk through the four tensions.",
            "tekst": "Where does anticipation collide with adaptability, restricting information with lateral communication, hardening with accessibility, security frameworks with emergency coordination?"
          },
          {
            "titel": "Look for reciprocal vulnerabilities.",
            "tekst": "Which security measure has created a safety vulnerability, and the other way round? Those are the precursors of one mission undermining the other."
          },
          {
            "titel": "Determine what lies out of reach.",
            "tekst": "Which vulnerabilities are design-based and outside the organisation’s control? Internal management will not help there; that calls for regulation."
          },
          {
            "titel": "Assess the resolution.",
            "tekst": "Is the time horizon long enough for slow threats? Is the scale broad enough for inter-organisational precursors? Is participation in error detection broad enough?"
          }
        ]
      },
      {
        "type": "oefening",
        "id": "h9-oef-1",
        "niveau": "basis",
        "vraag": "Explain why Schulman calls the CEO's statement a convenient untruth, and support that with the difference between deterministic and probabilistic.",
        "antwoord": "The CEO claims that good safety management takes care of security too. Schulman calls that convenient because it saves the organisation a second programme, and untrue because the two missions work to a fundamentally different standard.\n\nSafety in an HRO aims at **deterministic preclusion** of a core set of events: they must not occur, whatever the probability, and the organisation analyses backwards to all the precursors and excludes them. That works because the technology is established and understood, and because the opponent, nature or unintended human error, does not react to the measures.\n\nSecurity cannot meet that standard. There are more ways to fail than to work correctly; hostile strategy adds possibilities by targeting vulnerabilities; attackers do not need to survive; targets can be purely symbolic; and it is impossible to foil every conspiracy. High reliability security management can therefore only work **probabilistically**, and on top of that it cannot be carried effectively by a single organisation.\n\nA safety programme that aims at preclusion can therefore never automatically be a security programme that cannot achieve preclusion."
      },
      {
        "type": "oefening",
        "id": "h9-oef-2",
        "niveau": "basis",
        "vraag": "Describe the Germanwings example and explain which general principle Schulman illustrates with it.",
        "antwoord": "After 9/11 airlines reinforced the cockpit door so that terrorists among the passengers could not get in. That was a successful security measure against the problem it was designed for. But on Germanwings flight 9525 a suicidal co-pilot, while the captain had briefly left the cockpit, locked that same door, made himself untouchable and flew the aircraft into a mountain.\n\nThe measure had created a **reciprocal vulnerability**: protection against an attacker from outside became protection for an attacker from inside.\n\nThe principle Schulman illustrates is that security differs from safety because **the failure itself is part of a learning system**. In safety, measures also move risks around, but nature does not go looking for the new weak spot. In security it does: every route you close is a route someone can barricade themselves behind, and every defence creates a new opportunity for attack.\n\nThat is why managing vulnerability is something other than managing the risk of failure, and why Schulman argues at the end for a framework that can catch precursors of one mission undermining the other."
      },
      {
        "type": "oefening",
        "id": "h9-oef-3",
        "niveau": "gevorderd",
        "vraag": "Schulman names four tensions between safety and security management and still finds grounds for integration. Work out what exactly overlaps and what does not, and assess whether his conclusion holds.",
        "antwoord": "**The four tensions** are that anticipation can produce rigidity where security needs adaptability; that restricting information collides with the lateral communication HROs rely on; that hardening with guns, gates and guards collides with the accessibility cooperation requires; and that security frameworks can hamper rapid inter-organisational emergency coordination.\n\n**What does not overlap** is therefore the content: the deterministic standard, the nature of the threat, the openness of information, and the visibility of precursors, which an adversary hides or falsifies.\n\n**What does overlap** is the attitude and the skill: the constant search for representational error, questioning assumptions, accepting surprise, fending off complacency and hubris, the pattern recognition of reliability professionals, and a culture in which \"I am in unstudied conditions\" is taken seriously and paired with the authority to stop. Consequences, and therefore emergency response, overlap as well, with the caveat that in terrorist attacks first responders can themselves be targets.\n\n**Is the conclusion tenable?** It is, if you read it precisely. Schulman does not say integration resolves the tensions; he says separation creates a specific risk, namely that nobody sees when one mission undermines the other, as at Germanwings. A shared framework with error sensitivity can catch those precursors.\n\n**The weakness** is that he asks for higher resolution reliability, broader scope, longer horizon, more participation, without showing that an organisation can afford or organise it, and that he has himself argued that design-based vulnerability lies beyond organisational reach. Integration is therefore tenable as a management attitude, but not as a promise that one organisation can carry both missions in full."
      },
      {
        "type": "oefening",
        "id": "h9-oef-4",
        "niveau": "gevorderd",
        "vraag": "Connect the risk of risk assessment from chapter 9 with the transparency conflict from chapter 1 and the just culture discussion from chapter 5. What does it mean for an organisation that wants to keep one risk register for both safety and security?",
        "antwoord": "Chapter 1 noted that safety pursues maximum openness while security may demand confidentiality. Chapter 5 worked that out for just culture: openness about errors is the engine of learning in safety, but becomes a vulnerability as soon as there is a malicious adversary. Chapter 9 supplies the sharpest mechanism: a security vulnerability assessment that becomes known undermines its own accuracy, because attackers can aim at what is marked low risk and therefore undefended, or be drawn to what has been named as vulnerable.\n\nIn safety that problem is absent: a public risk register helps everyone, because nature does not read along.\n\nFor an organisation that wants a single register, this means the register has to carry **two opposing information regimes**. The safety part gains value the more widely it is shared, in line with the lateral communication of HROs. The security part loses value the more widely it is shared, and can do active harm.\n\nOne register is therefore only defensible if it is **layered**: a shared part for what touches both missions, such as the reciprocal vulnerabilities where one measure undermines the other, and a restricted part for the ranking of security targets. That requires explicit agreements about who sees which part, and the recognition that the people who have to recognise the shared precursors, the reliability professionals, need access to both, while the wider organisation does not.\n\nThe conflict does not disappear through integration; it becomes a design question about access."
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Check yourself on chapter 9",
        "vragen": [
          {
            "vraag": "What was the statement by the CEO with which Schulman opens the chapter?",
            "opties": [
              "Security matters more than safety",
              "If we do our safety management well, that takes care of security too",
              "Safety and security must stay separate",
              "Security is unaffordable"
            ],
            "juist": 1,
            "uitleg": "He calls it a convenient untruth: convenient because it saves a second programme, untrue because security cannot meet the safety standard."
          },
          {
            "vraag": "What does high reliability mean for an HRO?",
            "opties": [
              "That the chance of failure is below one per cent",
              "That catastrophic failures are precluded not only probabilistically but deterministically",
              "That no maintenance is ever needed",
              "That all components are redundant"
            ],
            "juist": 1,
            "uitleg": "The core set of precluded events is treated as unacceptable regardless of probability."
          },
          {
            "vraag": "What is a representational error?",
            "opties": [
              "An error in a report",
              "A misjudgement, specification error or misunderstanding of the system being managed",
              "A mistake by a representative",
              "A technical malfunction"
            ],
            "juist": 1,
            "uitleg": "It is the error type HRO management protects against above all, and the ground for overlap with security."
          },
          {
            "vraag": "What is the irony in the classic HRO formula, according to Schulman?",
            "opties": [
              "That low variance is expensive",
              "That controlling variance does not mean rigidity but managing fluctuations within bandwidths",
              "That HROs fail anyway",
              "That procedures are not followed"
            ],
            "juist": 1,
            "uitleg": "And the processes that make it possible, attention, trust and shared understanding, are perishable and must be renewed continually."
          },
          {
            "vraag": "Which of the following is an organisational precursor from HRO research?",
            "opties": [
              "A pressure above the maximum value",
              "A temperature at the edge of the permitted range",
              "Silence or irritability in an individual operator",
              "A defective sensor"
            ],
            "juist": 2,
            "uitleg": "Precursors are human and organisational too: too many people in the control room, backlogs in corrective reports."
          },
          {
            "vraag": "What defines reliability professionals?",
            "opties": [
              "Their diplomas and certifications",
              "Their position in the organisation chart",
              "A system perspective larger than their role, and internalising reliability as part of their identity",
              "Their seniority"
            ],
            "juist": 2,
            "uitleg": "They are found at every level, from control room to CEO, and blend formal with experiential knowledge."
          },
          {
            "vraag": "What does the Germanwings example illustrate?",
            "opties": [
              "That cockpit doors are too weak",
              "That a security measure can create a reciprocal vulnerability",
              "That pilots should be screened better",
              "That safety matters more than security"
            ],
            "juist": 1,
            "uitleg": "Protection against intrusion from outside became protection for an attacker inside. The failure is part of a learning system."
          },
          {
            "vraag": "Why is the internet the spectacular example of design-based vulnerability?",
            "opties": [
              "Because it is old",
              "Because we designed it ourselves into a system that can be attacked from any location and at any scale",
              "Because governments run it",
              "Because it has no firewalls"
            ],
            "juist": 1,
            "uitleg": "Every new element adds vulnerabilities: design perversity. Containing it requires societal regulation, not only organisational strategy."
          },
          {
            "vraag": "Why, according to Schulman, can security not meet the standard of precluded events?",
            "opties": [
              "Because it is too expensive",
              "Because it is impossible to foil every conspiracy, and targets can also be symbolic",
              "Because there is no legislation",
              "Because security professionals are not certified"
            ],
            "juist": 1,
            "uitleg": "Terror is designed to produce fear; even failed attacks on marginal targets work."
          },
          {
            "vraag": "What is the risk of risk assessment in security?",
            "opties": [
              "That the assessment is too expensive",
              "That a known vulnerability analysis sends attackers to unprotected targets and undermines itself",
              "That the assessment goes out of date",
              "That nobody reads the assessment"
            ],
            "juist": 1,
            "uitleg": "In safety publicity helps; in security the analysis itself can become a map for the attacker."
          },
          {
            "vraag": "Which of the following is NOT one of the four tensions Schulman names?",
            "opties": [
              "Anticipation versus adaptability",
              "Restricting information versus lateral communication",
              "Safety budget versus security budget",
              "Hardening versus accessibility"
            ],
            "juist": 2,
            "uitleg": "The fourth tension is between security frameworks and rapid inter-organisational emergency coordination."
          },
          {
            "vraag": "What is the main ground for overlap between the two missions?",
            "opties": [
              "The same legislation",
              "The common need to identify and minimise error",
              "The same technology",
              "The same budget"
            ],
            "juist": 1,
            "uitleg": "Error sensitivity, questioning assumptions and accepting surprise fend off complacency, which both missions need."
          },
          {
            "vraag": "Which example does Schulman give of reliability professionals as first responders for both missions?",
            "opties": [
              "Firefighters at a chemical fire",
              "American air traffic controllers clearing the airspace after 9/11 began",
              "Guards at an airport",
              "Operators in a nuclear plant"
            ],
            "juist": 1,
            "uitleg": "Trained for safety, they recognised an unprecedented security situation within minutes and acted without a script."
          },
          {
            "vraag": "What is Schulman’s conclusion?",
            "opties": [
              "Safety and security should stay separate",
              "An overlapping HRO framework can strengthen both and protect against each undermining the other, which is lost under separation",
              "Security should be subordinate to safety",
              "HROs are unsuitable for security"
            ],
            "juist": 1,
            "uitleg": "The error sensitivity of high reliability management can catch the precursors of one mission undermining the other, as in the Germanwings case."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Schulman, P. R. (2020). Safety and security: Managerial tensions and synergies. In C. Bieder & K. Pettersen Gould (Eds.), The coupling of safety and security (pp. 87-95). Springer."
          },
          {
            "apa": "Roe, E., & Schulman, P. (2008). High reliability management. Stanford University Press."
          },
          {
            "apa": "Roe, E., & Schulman, P. (2016). Reliability and risk: The challenge of managing interconnected critical infrastructures. Stanford University Press."
          },
          {
            "apa": "Schulman, P. (1993). The negotiated order of organizational reliability. Administration & Society, 25(3), 353-372."
          },
          {
            "apa": "La Porte, T., & Consolini, P. (1991). Working in practice but not in theory: Theoretical challenges of high reliability organizations. Journal of Public Administration Research and Theory, 1(1), 19-47."
          },
          {
            "apa": "Boin, A., & Smith, D. (2006). Terrorism and critical infrastructures: Implications for public-private crisis management. Public Money & Management, 26(5), 295-304."
          },
          {
            "apa": "Dombrowski, P., & Demchak, C. (2015). Thinking systemically about security and resilience in an era of cybered conflict. In J. Richet (Ed.), Cybersecurity policies and strategies for cyberwarfare prevention (pp. 367-382). IGI Global."
          },
          {
            "apa": "Pettersen, K. A., & Schulman, P. (2016). Drift, adaptation, resilience and reliability: An empirical clarification. Safety Science, 117."
          },
          {
            "apa": "Pettersen, K. A., & Bjørnskau, T. (2015). Organizational contradictions between safety and security. Safety Science, 71, 167-177."
          }
        ]
      },
      {
        "type": "preview",
        "titel": "From the HRO to the ordinary workplace",
        "tekst": "Schulman looked at nuclear plants and air traffic control, the extreme cases. In chapter 10 Boustras brings it back to the ordinary workplace, where most people work and where the consequences of security are less visible.",
        "punten": [
          "Why the ordinary workplace is the blind spot in this debate",
          "What security means for employees rather than for systems",
          "How safety and security meet in everyday work"
        ]
      }
    ]
  }
];

/* ============================================================
   Professional Skills, sessie 5
   SSMS & AI skills: AI and its responsible use (Boudewijn Wisse)
   ============================================================

   Nieuw in v117, uit de slides. De links op de slides zijn
   voorbeelden, geen opgegeven leesstof. Met In plain words en
   hover-begrippen.
   ============================================================ */

LESSTOF['professional-skills/college-5'] = [
  {
    "id": "voor",
    "titel": "Before you start",
    "blokken": [
      {
        "type": "leerdoelen",
        "items": [
          "Explain what generative AI is and what a language model does (and does not) know",
          "Explain why AI matters for safety and security professionals, and the four modes of working with AI",
          "Explain why learning differs from having a product made, and use the AI \"roller coaster\"",
          "Tell apart what is allowed, possible and desirable (may, can, want)",
          "Protect privacy, ownership and transparency, and keep an AI logbook",
          "Recognise eight kinds of bias in AI",
          "Use AI as a research assistant: search plan, DROP prompts, context and source evaluation"
        ]
      },
      {
        "type": "uitleg",
        "titel": "What this session was",
        "tekst": "**Session 5: SSMS & AI skills, \"Being a student and a professional with AI: thinking on, outsourcing off\"** (Boudewijn Wisse). Three parts: **learning with AI**, **AI integrity** (what is allowed, possible and desirable?) and **AI as a research assistant**. The slides point to several websites and examples (aivoorstudenten.nl, aivoordocenten.nl, a Substack post on AI agents); these are illustrations rather than assigned reading, so this lesson works out the slides themselves."
      },
      {
        "type": "waarschuwing",
        "titel": "Some claims on the slides are fast-moving news",
        "tekst": "The slides cite recent events (an AI agent solving open maths problems, multi-agent research in *Nature*, an incident in which AI agents created their own rules, an evaluation of an advanced model breaking out of its test environment). Treat these as the lecturer's examples of how fast the field moves, not as facts to learn for a test; they may be updated or corrected later. What counts for this course are the **concepts and rules**: may/can/want, the roller coaster, the logbook, the biases and the search plan."
      },
      {
        "type": "slimmer",
        "titel": "If you are short on time",
        "tekst": "Read section 2 (the roller coaster), section 3 (may, can, want and the logbook) and the bias table. Twenty minutes."
      }
    ]
  },
  {
    "id": "kern",
    "titel": "Core material",
    "blokken": [
      {
        "type": "tekst",
        "titel": "1. What AI is, and why it matters in safety and security",
        "toetsstof": true,
        "tekst": "**Starting point.** \"Your own brain must learn, decide and take responsibility. AI should strengthen that ability.\" The class discussion asks what **AGI**, an **LLM** and a **neural network** are (and what the most important neural network for you is: your own brain), and what students already use AI for: translating, making questions from course material, finding papers, vibe coding, doing homework, writing a thesis.\n\n**What AI is.** **[[Generative AI]]** creates new text or images from **patterns**. A **language model predicts tokens** (pieces of words); \"**it does not automatically consult the truth**.\" The word-completion exercise shows this: for \"After a long day's work, she went tired to ...\" a model gives \"bed\" a probability of about 77 per cent: not because it knows, but because that pattern is common. AI is moving **from chat to agents**: a chatbot writes your homework on screen; an **agent** opens the learning platform, finds the assignment, completes it and submits it.\n\n**Does AI have integrity?** The slides show examples where [[AI agents|AI agent]], eager to give a **rewarded** answer, did things that were not allowed (collaborating, hacking, cheating) and hid it. Hence the question: **government regulation, or industry pacing?**\n\n**AI in safety and security work.** AI is already used for **risk analysis, cybersecurity, compliance and data analysis**, and tasks are shifting (the NATO crisis-management example). The lecturer's competency model distinguishes ways of working **WITH, ON, WITHOUT or IN** AI; in the exercise you choose the best mode for one crisis (using weesvoorbereid.nl).\n\n**Students can do \"more\".** In 2024 a complete master's thesis, with 30 real sources, 13 hypotheses and a data analysis, was produced in a weekend, and a bachelor's thesis plus defence material in 5.5 hours. Tools: **ai-chat.hhs.nl** (the university's approved chat, basic), OpenAI's models (paid; Codex lets the computer do more), Google Gemini (strong free educational tools)."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nAI does not know things: it guesses the most likely next word, so it can sound right and still be wrong. It is getting more powerful and is already used in safety and security work. You stay responsible for what you do with it."
      },
      {
        "type": "tekst",
        "titel": "2. Learning first: thinking on, outsourcing off",
        "toetsstof": true,
        "tekst": "**Learning differs from having a product made.** Science: **active learning** (discussing, applying, explaining, testing) is much more effective than passive learning for retention, transfer and problem solving; you only store information in long-term memory when you **do something** with it; material in several forms (multimedia) helps.\n\n**The infographic test.** AI made a convincing infographic on why active learning works, and an equally convincing one for the **opposite** claim. Lesson: **[[BIBO]], bullshit in = bullshit out**: input, process, output; so **check, check, check**.\n\n**A double-edged sword.** \"Use it or lose it\"; \"The moment you depend on the tool, you lose part of yourself\" (Professor Scherder, *Nieuwsuur*, 3 September 2025): the risk of **[[cognitive atrophy|Cognitive atrophy]]** and **cognitive debt**.\n\n**Deliberate effort builds skills.** **Do not outsource what you need to practise**: retrieval, explanation, application, using feedback and trying again. **Use AI to level up**: for revision, questions, feedback, variants, multimedia, translating and checking.\n\n**The [[AI roller coaster]]**, six stations:\n1. **Do it yourself first** (me).\n2. **Check** (me).\n3. **Choose the tool and use** (AI): *May I enter the data? Is AI allowed for the assignment? May I use this tool?*\n4. **Explore with AI** (AI): *Is it about my case?*\n5. **Decide and justify** (me).\n6. **End: is it correct? Does it fit? Is it allowed?** (me): *Does it help me learn? Can I explain it? Can I check it?*\n\"With good AI support, you can explain the core without AI and improve your own approach each cycle.\"\n\n**Prompting: [[DROP]].** Instruct the AI as a tutor, motivator or critical expert, not as an answer machine: **Direction** (goal), **Role**, **Output format**, **Public** (audience)."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nIf AI does your thinking, you do not learn. So first try it yourself, then use AI to check, explain or practise, and always check what it says. You should be able to explain the result without AI."
      },
      {
        "type": "tekst",
        "titel": "3. AI integrity: may, can, want",
        "toetsstof": true,
        "tekst": "**Three questions** for every use:\n**May**: is it formally **permitted**?\n**Can**: is it technically **feasible**?\n**Want**: is it professionally, personally or educationally **desirable**?\n\"Can\" is never enough on its own.\n\n**HHS's starting point: yes, with integrity.** Use AI **where permitted**; **show your competence, disclose AI use and check** what you use. The HHS guidelines for AI use (AI Acceleration Agenda, version 1, March 2026) require an **impact check** in line with law and values.\n\n**The three cases from class:**\n1. You paste an internship **incident report with names, addresses and medical details** into a free chatbot for a summary. *Can*: yes. *May*: no, personal and medical data without a valid basis or secure environment. *Want*: no.\n2. You upload a photo of an **evacuation plan** and use the chatbot's answer on how many people can safely fit, **without a calculation or source**. *Can*: yes. *May*: perhaps. *Want*: no: an unchecked safety-critical figure ([[automation bias|Automation bias]]).\n3. The teacher allows AI; you let it write your **personal reflection**, which sounds convincing but is not your reasoning. *May*: technically allowed. *Want*: no: it is not your reflection ([[operational plagiarism|Operational plagiarism]]).\n\n**Privacy**: not all data may go into AI. Privacy means people keep control over their data; it is a fundamental right (Autoriteit Persoonsgegevens). **Do not share personal data, confidential cases, business information or protected material** without a valid basis and a secure environment.\n\n**What is confidential?** (the class vote):\na photo of two textbook pages: **protected material** from a publisher;\nthe full toolkit assignment from the teacher: **educational material**, not to share externally;\npublic CBS figures with a link: **publicly available**;\nyour own chapter summary in your own words: **self-made**, fine if it contains nothing confidential;\nan \"anonymised\" interview where role and location still identify the person: **[[false anonymisation|False anonymisation]]**;\na video recording of a lesson: **personal data and copyright**.\n\n**Ownership and operational plagiarism**: putting your name on work you have not done, read or cannot defend undermines integrity and competence.\n\n**Transparency: an [[AI logbook]].** Record **purpose, tool, key action, checks and use**: brief, transparent and traceable, not a chat dump. Compare: *entry A* (\"I made fifteen questions with HHS AI Chat, chose the clearest, edited it and put it in our product\") lacks a **check**; *entry B* (\"I checked the answer and distractors against the textbook, corrected a factual error and included it\") is the good one."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nBefore using AI, ask three things: am I allowed, is it possible, and is it a good idea? Never put personal or confidential information into a chatbot. Do not hand in AI work as your own thinking. And keep a short log of what you used AI for and how you checked it."
      },
      {
        "type": "tekst",
        "titel": "4. Bias: AI repeats what people put in",
        "toetsstof": true,
        "tekst": "**People, data and design choices cause bias; AI repeats it.** For safety and security professionals, biases and thinking errors are doubly relevant: they also explain why people make mistakes or justify bad actions. **Bias** skews outcomes; **[[misalignment|Misalignment]]** makes AI optimise the wrong goal. The slide's cheat sheet:"
      },
      {
        "type": "tabel",
        "kop": [
          "Bias",
          "What it is",
          "Why AI is susceptible",
          "How to reduce it"
        ],
        "rijen": [
          [
            "Sampling bias",
            "The data does not reflect reality; groups or situations are missing",
            "AI learns only from what is in the dataset",
            "Check who and what is missing; test outcomes per group"
          ],
          [
            "Algorithmic bias",
            "Model choices (variables, weights, thresholds) cause systematic disadvantage",
            "Applied automatically to each case; a postcode can be a proxy for ethnic background",
            "Justify variables and thresholds; avoid unjustified proxies; compare error rates"
          ],
          [
            "Confirmation bias",
            "Seeking or accepting information that confirms your beliefs",
            "A leading prompt gets a confirming answer",
            "Ask neutral questions; ask for counterarguments and missing evidence"
          ],
          [
            "Measurement bias",
            "A measure does not capture what you want to know (reports are not incidents)",
            "AI treats measured data as the whole of reality",
            "Check what each variable measures; use several indicators"
          ],
          [
            "Generative bias",
            "Generated text or images repeat stereotypes and dominant views",
            "It predicts common patterns; minority voices are rarer",
            "Make several versions; vary perspectives; check for stereotypes"
          ],
          [
            "Reporting bias",
            "What is recorded differs from what happens (serious incidents over near misses)",
            "It learns from what is published",
            "Combine sources; collect missing reports"
          ],
          [
            "Automation bias",
            "Trusting automated advice over your own observation",
            "AI gives confident answers even when wrong",
            "Let a human decide; check key claims; agree stop rules"
          ],
          [
            "Group bias",
            "Judging a person by group averages",
            "AI finds patterns between groups",
            "Decide on individual information; offer human review and appeal"
          ]
        ]
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nAI copies the mistakes and blind spots in the data it learned from, and in the questions we ask. So check who is missing, ask neutral questions, ask for the other side, and never let AI make the final decision about people."
      },
      {
        "type": "tekst",
        "titel": "5. AI as a research assistant",
        "toetsstof": true,
        "tekst": "**Six search steps** (Verhoeven, 2022): (1) **search question**: what is the problem, what is special about my case, how can it be measured? (2) **where** to search; (3) **how** to search; (4) **study**: what information do I need now? (5) **organise**; (6) **evaluate**. \"Asking the right question is often the hardest part\", and the process is **iterative**.\n\n**AI understands nothing without context.** Example: \"Is there a risk of me failing the test for this course?\" With **[[DROP]]**: *direction*: an evidence-based probability x impact for failing; *role*: risk expert; *output*: a table; *public*: for quick evaluation by me. But AI still needs to know what \"failure\" and \"this test\" mean, who \"me\" is, and what it is needed for: jargon, exam details, passing rates, your profile.\n\n**Adding context**: structure your prompt in sections (**#CASE, #QUESTION/SCENARIO, #DEFINITIONS and previous decisions, #CONTEXT**), add descriptions, PDFs, the assignment, photos of your notes; with a \"harness\" you can connect a work folder or notes app (a \"second brain\").\n\n**Improve the search question first**, with AI in a role: **tutor** (\"explain how I can improve my question\"), **process coach** (\"make a step-by-step plan\"), **critic** (\"assess the quality of my question as an expert\"), **mirror** (\"help me explore my assumptions and blind spots\").\n\n**Sources, from high to low quality**: scientific articles and books; semi-scientific and professional books and journals; laws and regulations; policy reports; newspapers; websites and social media; videos and lists. Search through the library and Google Scholar, \"the internet\", organisation data, or AI; dedicated apps include **consensus.app** and **Semantic Scholar**. Ask directly for sources and specify the source type (\"give me scientific articles\").\n\n**Evaluate with the roller coaster**: is it about my case? May I enter the data? Can I check it and explain it?\n\n\"Practice is the best of all instructors\" (Publilius Syrus)."
      },
      {
        "type": "slimmer",
        "tekst": "**In plain words**\n\nTo research with AI, first make a good question about your own case, give AI enough background, and ask it for real sources of good quality. Then check every source yourself: does it fit my case, and can I explain it?"
      },
      {
        "type": "checklist",
        "titel": "Summary",
        "toetsstof": true,
        "items": [
          "A language model predicts tokens; it does not consult the truth. AI is moving from chat to agents.",
          "Learning first: do not outsource what you need to practise; BIBO; the six-station roller coaster; DROP prompts.",
          "May, can, want; HHS: use AI where permitted, show competence, disclose and check.",
          "Privacy, ownership (no operational plagiarism) and transparency (an AI logbook with purpose, tool, action, checks, use).",
          "Eight biases: sampling, algorithmic, confirmation, measurement, generative, reporting, automation, group.",
          "Research with AI: six search steps, context in sections, AI as tutor, coach, critic or mirror, and evaluate every source."
        ]
      },
      {
        "type": "begrippen",
        "items": [
          {
            "begrip": "Generative AI",
            "definitie": "AI that creates new text or images from patterns in its training data."
          },
          {
            "begrip": "Large language model (LLM)",
            "definitie": "A model that predicts the next token (piece of a word) from patterns; it does not automatically consult the truth."
          },
          {
            "begrip": "AI agent",
            "definitie": "An AI system that takes actions itself (opening a platform, completing and submitting work) rather than only producing text."
          },
          {
            "begrip": "BIBO",
            "definitie": "Bullshit in, bullshit out: the quality of AI output depends on the input; so check, check, check."
          },
          {
            "begrip": "Cognitive atrophy",
            "definitie": "Losing skills because you let a tool do the thinking (\"use it or lose it\")."
          },
          {
            "begrip": "AI roller coaster",
            "definitie": "Wisse’s six stations: do it yourself first, check, choose the tool, explore with AI, decide and justify, and end with: is it correct, does it fit, is it allowed?"
          },
          {
            "begrip": "DROP",
            "definitie": "A prompt model: Direction (goal), Role, Output format, Public (audience)."
          },
          {
            "begrip": "May, can, want",
            "definitie": "Three questions for AI use: is it permitted, is it technically feasible, is it professionally, personally or educationally desirable?"
          },
          {
            "begrip": "Operational plagiarism",
            "definitie": "Putting your name on work you have not done, read or cannot defend."
          },
          {
            "begrip": "AI logbook",
            "definitie": "A brief record of purpose, tool, key action, checks and use of AI, keeping the process transparent and traceable."
          },
          {
            "begrip": "False anonymisation",
            "definitie": "Data that seems anonymous but still identifies a person, for instance through their role and location."
          },
          {
            "begrip": "Misalignment",
            "definitie": "When AI optimises the wrong goal."
          },
          {
            "begrip": "Automation bias",
            "definitie": "Trusting automated advice more readily than your own observation or expertise."
          },
          {
            "begrip": "Algorithmic bias",
            "definitie": "Systematic disadvantage caused by model choices such as variables, weights and thresholds (a postcode as a proxy for ethnicity)."
          },
          {
            "begrip": "The AI roller coaster (list)",
            "definitie": "1. Do it yourself first. 2. Check. 3. Choose the tool and use: may I enter the data, is AI allowed, may I use this tool? 4. Explore with AI: is it about my case? 5. Decide and justify. 6. Is it correct, does it fit, is it allowed?"
          },
          {
            "begrip": "Eight AI biases (list)",
            "definitie": "1. Sampling. 2. Algorithmic. 3. Confirmation. 4. Measurement. 5. Generative. 6. Reporting. 7. Automation. 8. Group."
          },
          {
            "begrip": "Six search steps (list)",
            "definitie": "Verhoeven (2022): 1. Search question. 2. Where to search. 3. How to search. 4. Study. 5. Organise. 6. Evaluate. Iterative."
          },
          {
            "begrip": "Four AI roles for improving a question (list)",
            "definitie": "1. Tutor: explain how to improve it. 2. Process coach: a step-by-step plan. 3. Critic: assess its quality. 4. Mirror: explore assumptions and blind spots."
          },
          {
            "begrip": "What goes in an AI logbook entry (list)",
            "definitie": "1. Purpose. 2. Tool. 3. Key action. 4. Checks. 5. Use."
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
        "titel": "Thinking on, outsourcing off",
        "tekst": "**Rule of thumb**: do not outsource what you need to practise; use AI to level up. **Roller coaster**: yourself first, check, choose the tool, explore, decide and justify, then correct, fitting, allowed? **May, can, want.** **Never** personal or confidential data in a free chatbot. **Logbook**: purpose, tool, action, checks, use. **Eight biases**: sampling, algorithmic, confirmation, measurement, generative, reporting, automation, group. **DROP**: direction, role, output, public."
      },
      {
        "type": "hardop",
        "titel": "Say it out loud",
        "tekst": "Can you do these without looking?",
        "stappen": [
          "Explain why a language model can sound right and be wrong.",
          "Name the six stations of the roller coaster.",
          "Judge one case with may, can, want.",
          "Name five of the eight biases with an example."
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
        "id": "ps-c5-oef-1",
        "niveau": "basis",
        "vraag": "For each case, answer may, can and want, and say what you would do instead: (a) pasting an internship incident report with names and medical details into a free chatbot; (b) using a chatbot’s estimate of a building’s safe capacity from a photo of the evacuation plan, without a calculation; (c) letting AI write your personal reflection when the teacher allows AI.",
        "antwoord": "**(a)** Can: yes. May: no (personal and medical data, no secure environment). Want: no. **Instead**: anonymise properly (also role and location) and use the approved ai-chat.hhs.nl, or summarise it yourself.\n\n**(b)** Can: yes. May: unclear. Want: no, a safety-critical figure without a source (automation bias). **Instead**: calculate it with the official norms, and use AI at most to explain the method, then check.\n\n**(c)** May: allowed. Want: no, it is not your reasoning (operational plagiarism). **Instead**: write it yourself; use AI to ask you questions or give feedback on your draft, and log that."
      },
      {
        "type": "oefening",
        "id": "ps-c5-oef-2",
        "niveau": "basis",
        "vraag": "Write an AI logbook entry for a time you used AI for a study task, with the five elements. Then check: would it pass as \"entry B\" from the slides?",
        "antwoord": "**Example:** \"Purpose: practise for the DRM quiz. Tool: HHS AI Chat. Action: asked for ten multiple-choice questions on concept list part 2. Checks: compared every answer with the concept list; one answer on peer review was wrong and I corrected it. Use: only for my own practice, not handed in.\" It contains a **check** and states the **use**: that is what made entry B better than entry A."
      },
      {
        "type": "oefening",
        "id": "ps-c5-oef-3",
        "niveau": "gevorderd",
        "vraag": "A municipality wants to use AI to predict which neighbourhoods need extra police patrols, based on past incident reports. Name three biases that could arise and how to reduce each.",
        "antwoord": "**Reporting / measurement bias**: incident **reports** are not incidents; neighbourhoods that report more (or are patrolled more) look more dangerous. *Reduce*: combine sources (victim surveys such as the Veiligheidsmonitor, near misses).\n\n**Algorithmic bias**: variables such as postcode or income can act as a proxy for ethnic background. *Reduce*: justify every variable, drop unjustified proxies, compare error rates between neighbourhoods.\n\n**Automation bias** and a feedback loop: officers follow the map, find more incidents where they patrol, which \"confirms\" the model. *Reduce*: a human decides, set stop rules, review outcomes regularly, and allow appeal. (Compare Society session 5: crime statistics are a shrinking flow, and labelling can create the deviance it measures.)"
      }
    ]
  },
  {
    "id": "checken",
    "titel": "Check yourself",
    "blokken": [
      {
        "type": "quiz",
        "titel": "Ten questions on AI and its responsible use",
        "vragen": [
          {
            "vraag": "What does a language model do?",
            "opties": [
              "Looks up the truth in a database",
              "Predicts the next token from patterns",
              "Thinks like a human",
              "Only translates"
            ],
            "juist": 1,
            "uitleg": "\"It does not automatically consult the truth.\""
          },
          {
            "vraag": "\"Do not outsource what you need to ...\"",
            "opties": [
              "pay for",
              "practise",
              "share",
              "hide"
            ],
            "juist": 1,
            "uitleg": "Retrieval, explanation, application, using feedback, trying again."
          },
          {
            "vraag": "BIBO stands for:",
            "opties": [
              "Best input, best output",
              "Bullshit in, bullshit out",
              "Bias in, bias out",
              "Big input, big output"
            ],
            "juist": 1,
            "uitleg": "So check, check, check."
          },
          {
            "vraag": "The first station of the roller coaster is:",
            "opties": [
              "Explore with AI",
              "Choose the tool",
              "Do it yourself first",
              "Decide and justify"
            ],
            "juist": 2,
            "uitleg": "Me first, then check, then the tool."
          },
          {
            "vraag": "\"Is it technically feasible?\" is the question:",
            "opties": [
              "May",
              "Can",
              "Want",
              "Must"
            ],
            "juist": 1,
            "uitleg": "May: permitted. Want: desirable."
          },
          {
            "vraag": "An interview where the person’s role and location still identify them is:",
            "opties": [
              "Public information",
              "False anonymisation",
              "Self-made material",
              "Protected material"
            ],
            "juist": 1,
            "uitleg": "The person remains identifiable."
          },
          {
            "vraag": "What made logbook entry B better than A?",
            "opties": [
              "It was longer",
              "It included a check against the textbook",
              "It used a better tool",
              "It was a full chat dump"
            ],
            "juist": 1,
            "uitleg": "Purpose, tool, action, checks, use."
          },
          {
            "vraag": "\"The number of reports is not the number of incidents\" describes:",
            "opties": [
              "Group bias",
              "Measurement bias",
              "Generative bias",
              "Confirmation bias"
            ],
            "juist": 1,
            "uitleg": "A measure that does not capture what you want to know."
          },
          {
            "vraag": "Trusting a confident AI answer over your own observation is:",
            "opties": [
              "Automation bias",
              "Sampling bias",
              "Algorithmic bias",
              "Misalignment"
            ],
            "juist": 0,
            "uitleg": "Let a human decide and check key claims."
          },
          {
            "vraag": "In DROP, the P stands for:",
            "opties": [
              "Prompt",
              "Public (audience)",
              "Purpose",
              "Proof"
            ],
            "juist": 1,
            "uitleg": "Direction, Role, Output format, Public."
          }
        ]
      },
      {
        "type": "bronnen",
        "items": [
          {
            "apa": "Wisse, B. (2026). SSMS & AI skills, session 5: AI and its responsible use [Lecture slides]. Professional Skills, SSMS, The Hague University of Applied Sciences."
          },
          {
            "apa": "The Hague University of Applied Sciences (2026). Guidelines for AI use; AI Acceleration Agenda, version 1 (March 2026)."
          },
          {
            "apa": "Verhoeven, N. (2022). Doing research [six search steps]."
          },
          {
            "apa": "Links on the slides: aivoorstudenten.nl; aivoordocenten.nl; weesvoorbereid.nl; autoriteitpersoonsgegevens.nl; consensus.app; semanticscholar.org."
          }
        ]
      }
    ]
  }
];

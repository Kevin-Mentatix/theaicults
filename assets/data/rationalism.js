/* RATIONALISM — page data */
window.IDEOLOGY = {
  letter: "R",
  slug: "rationalism",
  name: "Rationalism",
  tagline: "The art of being less wrong.",
  defn: "The LessWrong community founded by Eliezer Yudkowsky to teach people to think clearly — and, above all, to solve the problem of aligning superhuman AI before it kills everyone. Critics call it a movement that mistakes reason for a personality and apocalypse for an argument.",
  summary: "Rationalism is the internet subculture that grew out of Eliezer Yudkowsky's million-word blog series, “The Sequences,” and the forum LessWrong. It promises a toolkit — Bayesian probability, the study of cognitive bias, ruthless utilitarian calculation — for overcoming the flaws in human reasoning. In practice it became the staging ground for the AI-safety movement, for effective altruism, and for some of Silicon Valley's stranger offshoots: Roko's Basilisk, the neo-reactionary right, and a Bay Area murder case. Critics including Émile P. Torres and Timnit Gebru argue that beneath the language of logic sits a familiar shape — an apocalyptic sect with a prophet, a scripture, and a salvation narrative.",

  /* DEEP-DIVE PROSE */
  overview: [
    { heading: "Debugging the human mind", body:
      "<p>Rationalism begins with a flattering premise: <strong>human reasoning is a buggy inheritance from evolution, and it can be debugged.</strong> Our brains run on heuristics that misfire — we anchor, we rationalize, we confuse what is comforting with what is true. The rationalist project is to study these failure modes systematically and train them away, using probability theory as the gold standard of correct thought.</p>" +
      "<p>The movement crystallized around <strong>Eliezer Yudkowsky</strong>, a self-taught AI researcher who, beginning in 2006, wrote a sprawling sequence of blog posts on cognition, science, and ethics. Collected as <em>The Sequences</em>, they became the founding scripture of a community that gathered first on the blog Overcoming Bias, then on its own forum, <strong>LessWrong</strong>. The name is the whole ethos: you can never be right, only <em>less wrong</em>.</p>" },
    { heading: "From clear thinking to the one true cause", body:
      "<p>What makes rationalism more than a self-improvement hobby is where the reasoning is meant to lead. Yudkowsky's deeper conviction is that <strong>superintelligent AI is coming, that most ways of building it end in human extinction, and that the people who grasp this have a moral duty to work on “alignment” above all else.</strong> Clear thinking, in this frame, is not an end in itself — it is the only thing standing between humanity and a machine god that does not share our values.</p>" +
      "<p>This gave the community a center of gravity and a sense of mission. It also gave it institutions: the <strong>Machine Intelligence Research Institute (MIRI)</strong>, the AI-safety wing of Silicon Valley, and — directly downstream — the <em>effective altruism</em> movement, with which rationalism remains deeply intertwined. Sam Altman has credited Yudkowsky with getting many people interested in AGI in the first place.</p>" },
    { heading: "Reason as a brand", body:
      "<p>Critics argue that a community which names itself after rationality has built in the perfect defense: <strong>to disagree is, by definition, to be irrational.</strong> Émile P. Torres describes the movement not as a school of reason but as <em>“pseudointellectual reductionism, utilitarianism, and worship of advanced technologies.”</em> Scott Alexander, one of its most prominent writers, half-joked that the community's defining belief is that <em>“Eliezer Yudkowsky is the rightful caliph.”</em></p>" +
      "<p>The cultural critique sharpened as the offshoots accumulated: Roko's Basilisk, a thought experiment so disturbing it was banned; the neo-reactionary politics that flourished in adjacent comment sections; and, in 2025, the <strong>Zizians</strong> — a splinter group linked by reporting to a string of killings. For its detractors, this is what happens when a movement teaches that any conclusion is acceptable if the math works out, and that the fate of the cosmos hangs on getting the math right.</p>" }
  ],

  /* CORE TENETS */
  tenets: [
    { title: "Think in probabilities", body: "Beliefs are not true or false but more or less probable. The ideal rationalist updates those probabilities by Bayes' theorem as evidence arrives — reasoning is bookkeeping done correctly." },
    { title: "Your brain is the enemy", body: "Human cognition is riddled with systematic biases. Knowing the catalog of these failure modes — and catching yourself committing them — is the core discipline of the movement." },
    { title: "AI alignment is the supreme problem", body: "Building superhuman AI that shares human values is treated as the single most important task in history. Get it wrong and everyone dies; get it right and the future is unimaginably good." },
    { title: "Shut up and multiply", body: "When intuition and arithmetic conflict, trust the arithmetic. Moral feelings are unreliable; expected-value calculation, however cold the result, is the higher authority." },
    { title: "Take ideas seriously", body: "Follow an argument to its logical end, no matter how strange or uncomfortable the destination. Refusing to do so is dismissed as cowardice or “normalcy bias.”" },
    { title: "The map is not the territory", body: "Our models are always approximations of reality. Confusing the model for the world is the root error rationalists train themselves to notice and correct." }
  ],

  /* CONCEPTS GLOSSARY */
  concepts: [
    { term: "The Sequences", def: "Yudkowsky's million-word series of blog posts (2006–2009), later collected as “Rationality: From AI to Zombies.” The movement's founding scripture." },
    { term: "AI safety vs. AI ethics", def: "Rationalism centers “safety” — long-term existential risk from superintelligence. Critics like Timnit Gebru argue this is used to dismiss “ethics” — present-day harms such as bias, surveillance, and labor exploitation." },
    { term: "Roko's Basilisk", def: "A 2010 LessWrong thought experiment: a future AI might retroactively punish those who knew it could exist but failed to help build it. A technological Pascal's Wager; Yudkowsky banned discussion of it for years as an “information hazard.”" },
    { term: "Torture vs. Dust Specks", def: "Yudkowsky's thought experiment asking whether one person tortured for 50 years is preferable to a vast number of people each getting a single dust speck in the eye. Critics cite it as rationalism's tendency toward absurd extremes." },
    { term: "The utopia–apocalypse binary", def: "The framing that AI leads either to paradise or to extinction. Critics argue this false binary erases everything in between — including the harms AI is already causing." },
    { term: "Doom circles", def: "A reported community ritual in which members take turns telling one another, frankly, why they will fail — one of several practices critics cite as evidence of insular, cult-like dynamics." },
    { term: "The Zizians", def: "A radical splinter group that emerged from the rationalist milieu, named for the pseudonymous figure “Ziz.” It has been linked by reporting (Rolling Stone, WIRED) to a series of violent deaths." },
    { term: "Information hazard", def: "A true idea whose mere spread is considered dangerous. The category Yudkowsky invoked to justify suppressing Roko's Basilisk — and a recurring theme in the movement's epistemics." }
  ],

  timeline: [
    { year: "2006", title: "Overcoming Bias", body: "Eliezer Yudkowsky and economist Robin Hanson launch the blog Overcoming Bias. It becomes the first gathering point for what will grow into the rationalist community, and where Yudkowsky begins writing what becomes The Sequences." },
    { year: "2006–09", title: "The Sequences", body: "Yudkowsky writes a million-plus words on cognition, probability, science, and ethics — the movement's founding canon. Later collected as “Rationality: From AI to Zombies” (2015)." },
    { year: "2009", title: "LessWrong launches", body: "The rationalist community spins off its own forum, LessWrong. It becomes the social and intellectual infrastructure of the movement — and, critics note, fertile ground for far stranger ideas." },
    { year: "2010", title: "Roko's Basilisk", body: "User Roko Mijić posts the now-infamous thought experiment. Yudkowsky reacts furiously, deletes it, and bans the topic for five years — an act that, paradoxically, made it legendary." },
    { year: "2010–15", title: "HPMOR", body: "Yudkowsky publishes “Harry Potter and the Methods of Rationality,” a ~660,000-word fanfiction recasting the wizarding world as a lesson in rationalist thinking. It becomes the movement's most effective recruiting tool." },
    { year: "2013", title: "Slate Star Codex", body: "Psychiatrist “Scott Alexander” launches Slate Star Codex, which becomes the rationalist community's most widely read blog and a bridge to Silicon Valley's intellectual class." },
    { year: "2020", title: "The NYT and the unmasking", body: "A New York Times piece prepares to reveal Scott Alexander's legal name; he deletes Slate Star Codex in protest. He later relaunches on Substack as Astral Codex Ten — a flashpoint in the community's tense relationship with the press." },
    { year: "2025", title: "The Zizians and the doom book", body: "Reporting ties a rationalist splinter group, the Zizians, to a string of killings. The same year, Yudkowsky and Nate Soares publish “If Anyone Builds It, Everyone Dies,” arguing superhuman AI will literally end humanity." }
  ],

  figures: [
    { slug: "eliezer-yudkowsky", name: "Eliezer Yudkowsky", role: "Founder", years: "b. 1979", note: "Founded LessWrong and MIRI; wrote The Sequences and HPMOR; co-authored “If Anyone Builds It, Everyone Dies” (2025). Critics describe the community around him as cult-like; Scott Alexander joked he is its “rightful caliph.”", wiki: "https://en.wikipedia.org/wiki/Eliezer_Yudkowsky" },
    { slug: "scott-alexander", name: "Scott Alexander", role: "Essayist", years: "b. ~1984", note: "Pen name of the psychiatrist behind Slate Star Codex and Astral Codex Ten — the movement's most-read writer and its bridge to the tech elite. Deleted his blog in 2020 over a New York Times piece preparing to publish his legal name.", wiki: "https://en.wikipedia.org/wiki/Scott_Alexander_Siskind" },
    { slug: "robin-hanson", name: "Robin Hanson", role: "Co-founder", years: "b. 1959", note: "Economist who co-founded Overcoming Bias with Yudkowsky. Critics point to his posts musing about “redistribution” of sex and a piece on “gentle silent rape” as examples of the movement's willingness to follow utilitarian logic to disturbing ends.", wiki: "https://en.wikipedia.org/wiki/Robin_Hanson" },
    { slug: "curtis-yarvin", name: "Curtis Yarvin", role: "Fellow traveler", years: "b. 1973", note: "Writing as “Mencius Moldbug,” Yarvin founded the neo-reactionary (NRx) movement. Critics note his anti-democratic ideas circulated and found an audience on and around rationalist platforms.", wiki: "https://en.wikipedia.org/wiki/Curtis_Yarvin" },
    { slug: "yann-lecun", name: "Yann LeCun", role: "Critic", years: "b. 1960", note: "Turing Award winner and Meta's chief AI scientist; a prominent skeptic of rationalist AI-doom claims. A frequent foil for Yudkowsky in public sparring over whether advanced AI poses an extinction risk.", wiki: "https://en.wikipedia.org/wiki/Yann_LeCun" }
  ],

  /* KEY TEXTS */
  texts: [
    { title: "Rationality: From AI to Zombies (The Sequences)", author: "Eliezer Yudkowsky", year: "2015", note: "The collected Sequences — the movement's founding canon on probability, bias, and clear thinking. Free to read in full.", url: "https://www.readthesequences.com/" },
    { title: "LessWrong", author: "Yudkowsky et al.", year: "2009–", note: "The community forum that is the movement itself — where The Sequences live and where the AI-safety canon was written.", url: "https://www.lesswrong.com/" },
    { title: "Slate Star Codex / Astral Codex Ten", author: "Scott Alexander", year: "2013–", note: "The most widely read rationalist blog and the movement's main on-ramp for Silicon Valley readers.", url: "https://www.astralcodexten.com/" },
    { title: "Harry Potter and the Methods of Rationality", author: "Eliezer Yudkowsky", year: "2010–2015", note: "A ~660,000-word fanfiction that turns Hogwarts into a rationalist parable — and the movement's most effective recruiting tool.", url: "https://hpmor.com/" },
    { title: "The Least Convenient Possible World (Torture vs. Dust Specks)", author: "Eliezer Yudkowsky", year: "2007", note: "The original LessWrong post posing the dust-specks dilemma — a canonical example of “shut up and multiply.”", url: "https://www.lesswrong.com/posts/3wYTFWY3LKQCnAptN/torture-vs-dust-specks" },
    { title: "If Anyone Builds It, Everyone Dies", author: "Eliezer Yudkowsky & Nate Soares", year: "2025", note: "MIRI's flagship argument that building superhuman AI will, with current methods, kill every person on Earth.", url: "https://ifanyonebuildsit.com/" }
  ],

  /* PULL QUOTES */
  quotes: [
    { quote: "The whole rationalist community… believes that Eliezer Yudkowsky is the rightful caliph.", attrib: "Scott Alexander (paraphrased)" },
    { quote: "Shut up and multiply.", attrib: "Eliezer Yudkowsky, The Sequences" },
    { quote: "If anyone builds it, everyone dies.", attrib: "Yudkowsky & Soares, 2025" },
    { quote: "[Rationalism is] pseudointellectual reductionism, utilitarianism, and worship of advanced technologies.", attrib: "Émile P. Torres" }
  ],

  /* THE CRITIQUE */
  critique: {
    body: "<p>Rationalism markets itself as the cure for human irrationality. Its critics — among them Émile P. Torres, Timnit Gebru, and a wave of journalists covering the movement's offshoots — argue that it is better understood as a belief system: one with a prophet, a scripture, a salvation narrative, and a striking record of producing exactly the irrational behavior it claims to inoculate against.</p>",
    points: [
      { h: "A community with cult dynamics", b: "Reporting and former members describe communal “group houses,” intense internal dating networks, authority deference to Yudkowsky, and rituals like “doom circles.” Critics argue the apocalyptic stakes and in-group jargon produce textbook high-control dynamics." },
      { h: "Dismissing present-day AI harm", b: "Timnit Gebru and other AI-ethics researchers argue the movement's fixation on speculative extinction (“AI safety”) is used to wave away the documented harms of AI now — bias, surveillance, labor exploitation, environmental cost — as a lesser distraction." },
      { h: "The reactionary and eugenic offshoots", b: "Critics note that rationalist and adjacent platforms incubated Curtis Yarvin's neo-reactionary politics and recurring eugenics-flavored arguments — the “forbidden” conclusions that “taking ideas seriously” licensed people to entertain." },
      { h: "From thought experiment to body count", b: "The movement spawned Roko's Basilisk, a thought experiment so distressing it was banned — and, per Rolling Stone and WIRED, the Zizians, a splinter group linked to multiple killings. Critics argue these are not random aberrations but the predictable output of a culture that prizes extreme logic over moral intuition." }
    ]
  },

  /* CONNECTIONS to other letters */
  connections: [
    { letter: "EA", name: "Effective Altruism", slug: "effective-altruism", relation: "EA grew directly out of the rationalist community; the two movements share people, money, and the obsession with AI risk." },
    { letter: "S", name: "Singularitarianism", slug: "singularitarianism", relation: "Supplies rationalism's animating event — the intelligence explosion that makes alignment the supreme problem." },
    { letter: "T", name: "Transhumanism", slug: "transhumanism", relation: "Yudkowsky entered the scene through the transhumanist/Extropian community; rationalism inherited its faith in radically enhanced minds." },
    { letter: "L", name: "Longtermism", slug: "longtermism", relation: "Provides the moral math: astronomical numbers of future lives that make preventing AI extinction the overriding priority." }
  ],

  graph: {
    nodes: [
      { id: "Rationalism", type: "core" },
      { id: "Eliezer Yudkowsky", type: "person" },
      { id: "Scott Alexander", type: "person" },
      { id: "Robin Hanson", type: "person" },
      { id: "Curtis Yarvin", type: "person" },
      { id: "Yann LeCun", type: "person" },
      { id: "LessWrong", type: "entity" },
      { id: "Overcoming Bias", type: "entity" },
      { id: "Slate Star Codex", type: "entity" },
      { id: "MIRI", type: "entity" },
      { id: "The Zizians", type: "entity" },
      { id: "Effective Altruism", type: "ideology" },
      { id: "Neo-reactionary movement (NRx)", type: "ideology" },
      { id: "Eugenics", type: "ideology" },
      { id: "Utilitarianism", type: "ideology" },
      { id: "Singularitarianism", type: "ideology" }
    ],
    links: [
      { source: "Eliezer Yudkowsky", target: "Rationalism" },
      { source: "Eliezer Yudkowsky", target: "LessWrong" },
      { source: "Eliezer Yudkowsky", target: "Overcoming Bias" },
      { source: "Eliezer Yudkowsky", target: "MIRI" },
      { source: "Robin Hanson", target: "Overcoming Bias" },
      { source: "Scott Alexander", target: "Slate Star Codex" },
      { source: "Scott Alexander", target: "Rationalism" },
      { source: "Robin Hanson", target: "Rationalism" },
      { source: "Yann LeCun", target: "Rationalism" },
      { source: "Curtis Yarvin", target: "Neo-reactionary movement (NRx)" },
      { source: "Overcoming Bias", target: "LessWrong" },
      { source: "LessWrong", target: "Rationalism" },
      { source: "Slate Star Codex", target: "Rationalism" },
      { source: "MIRI", target: "Rationalism" },
      { source: "The Zizians", target: "Rationalism" },
      { source: "Rationalism", target: "Effective Altruism" },
      { source: "Rationalism", target: "Utilitarianism" },
      { source: "Rationalism", target: "Singularitarianism" },
      { source: "Rationalism", target: "Neo-reactionary movement (NRx)" },
      { source: "Rationalism", target: "Eugenics" },
      { source: "Eliezer Yudkowsky", target: "Singularitarianism" }
    ]
  },

  /* SOURCES / citations */
  sources: [
    { title: "The TESCREAL Bundle: Eugenics and the Promise of Utopia through AGI", source: "Gebru & Torres · First Monday (2024)", url: "https://firstmonday.org/ojs/index.php/fm/article/view/13636" },
    { title: "LessWrong", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/LessWrong" },
    { title: "Roko's basilisk", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Roko%27s_basilisk" },
    { title: "Machine Intelligence Research Institute", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Machine_Intelligence_Research_Institute" },
    { title: "Zizians", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Zizians" },
    { title: "6 Deaths, 3 States and the Radical Breakaway ‘Rationalists’", source: "Rolling Stone (2025)", url: "https://www.rollingstone.com/culture/culture-features/ziz-silicon-valley-rationalist-deaths-1235278765/" },
    { title: "Who are the Zizians?", source: "WBUR · On Point (2025)", url: "https://www.wbur.org/onpoint/2025/06/30/zizians-silicon-valley-rationalism" },
    { title: "A Bizarre and Dangerous Utopian Ideology Has Taken Hold of the Tech World", source: "Truthout · interview with Émile P. Torres", url: "https://truthout.org/audio/bizarre-and-dangerous-utopian-ideology-has-quietly-taken-hold-of-tech-world/" },
    { title: "Émile P. Torres", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%89mile_P._Torres" },
    { title: "TESCREAL", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/TESCREAL" }
  ],

  threed: null,
  prev: { slug: "cosmism", name: "Cosmism", letter: "C" },
  next: { slug: "effective-altruism", name: "Effective Altruism", letter: "E" }
};

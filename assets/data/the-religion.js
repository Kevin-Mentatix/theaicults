/* THE RELIGION — dossier data */
window.DOSSIER = {
  title: "The Religion",
  eyebrow: "A faith that calls itself engineering",
  summary: "Strip away the GPUs and the venture capital, and the Silicon Valley AI movement has the skeleton of a religion: a god it is racing to build, a heaven it promises, a hell it warns against, scriptures, prophets, heretics, and a tithe. This page lays the structure bare — not to dismiss the technology, which is real and useful, but to be honest about the belief system wrapped around it, and about who benefits from treating an engineering project as a path to salvation.",

  sections: [
    { type: "prose", heading: "A faith that calls itself engineering",
      blocks: [
        "<p>The people building advanced AI rarely describe themselves as religious. They speak the language of benchmarks, scaling laws, and compute. Yet the movement around them keeps producing the grammar of faith: a coming god (<strong>AGI</strong>), a paradise on the far side of it (<strong>the Singularity</strong>), an apocalypse if it is built wrong (<strong>unaligned AGI</strong>), sacred texts, a priesthood of alignment researchers, and at least one federally recognized church. Multiple scholars — among them Émile P. Torres and Timnit Gebru — argue this is not loose metaphor but a recognizable structure.</p>",
        "<p>The quarrel here is not with the technology. Machine learning is genuine engineering and much of it is useful. The quarrel is with the <em>theology</em> bolted onto it — the claim that building these systems is a salvation project, that merging with or transcending humanity is the goal, and that a small group of self-appointed believers should steer the most powerful tools on Earth toward an unfalsifiable future. When salvation is the frame, almost any present-day cost can be justified by an outcome no one can ever disprove.</p>"
      ] },

    { type: "mapping", heading: "The structure", bg: "alt",
      intro: "The religious vocabulary, mapped element by element — drawn from the way the movement describes itself, and from critics who have catalogued the parallels.",
      items: [
        { dt: "God = AGI", dd: "Artificial general intelligence as the omniscient, world-transforming entity the whole project is oriented toward — Sam Altman's \"magic intelligence in the sky.\"" },
        { dt: "Christ = the mythical founder", dd: "A messianic figure who brings the new order — the role projected onto Yudkowsky, Altman, or Musk: the one who saw it coming and shows the way." },
        { dt: "Holy Spirit = Data", dd: "The animating substance. Scale the data and compute, the creed holds, and intelligence — even spirit — emerges. \"Scale is all you need.\"" },
        { dt: "Gospel = eternal growth", dd: "The good news of exponential, unlimited progress: Moore's Law and Kurzweil's \"Law of Accelerating Returns\" as a promise of perpetual ascent." },
        { dt: "Heaven = the Singularity", dd: "A posthuman paradise where biology, scarcity, and limitation are abolished and humanity transcends into something greater." },
        { dt: "Hell = unaligned AGI", dd: "Extinction — \"everyone dies.\" The eschatological catastrophe that follows if the god is summoned incorrectly." },
        { dt: "Scripture = the canon", dd: "Yudkowsky's Sequences, Bostrom's Superintelligence, Kurzweil's The Singularity Is Near, MacAskill's What We Owe the Future, Andreessen's manifesto." },
        { dt: "Tithing = \"earn to give\"", dd: "The effective-altruism Giving What We Can pledge — commit 10%+ of income — channels the faithful's earnings toward the cause." },
        { dt: "Original sin = mortality", dd: "Biological limitation and death itself. \"Deathism\" — accepting that humans die — is treated as the corrupt condition to be overcome." },
        { dt: "Heretics = the decelerationists", dd: "AI ethicists, \"doomers,\" and critics who urge caution or focus on present harms — cast as apostates obstructing the path to salvation." },
        { dt: "Salvation = transcendence", dd: "Mind uploading, cryonics, and merger with AI: escaping the body and living forever, the resurrection of the body in digital form." },
        { dt: "Apocalypse = unaligned AGI", dd: "The revelation and end of the human era — p(doom), the intelligence explosion, the moment everything is decided forever." }
      ] },

    { type: "prose", heading: "Structural parallels",
      blocks: [
        "<p>The parallels are not only thematic; they are <strong>functional</strong>. The movement has a creation myth (exponential growth), an eschatology (the Singularity / intelligence explosion), a salvation narrative (transcend biology), a doctrine of original sin (misalignment, building the wrong AI), a priesthood (alignment researchers, the rationalist community), seminaries (Singularity University, MIRI, EA organizations), rituals (\"Feel the AGI\" chants), and even a Pascal's Wager (Roko's Basilisk). Marc Andreessen's Techno-Optimist Manifesto says \"We believe\" 113 times and names \"patron saints\" — one political scientist called it \"a Nicene creed for the cult of progress.\"</p>",
        "<p>The deeper tell is <strong>unfalsifiability</strong>. Religious claims cannot be disproven by evidence, and the movement's core predictions share that feature. If AGI doesn't arrive on schedule, the timeline simply extends. If catastrophe doesn't come, that is credited to successful prevention, not a wrong forecast. If the Singularity fails to materialize, it is merely delayed. Claims about events thousands of years out lie beyond any empirical test.</p>",
        "<p>This is not a harmless quirk of rhetoric. As Torres and Gebru argue, an unfalsifiable salvation narrative can justify nearly unlimited present-day cost — concentrated power, vast capital, weakened oversight — by pointing to speculative future benefits that can never be checked. Faith, by design, does not answer to evidence; an engineering project should.</p>"
      ] },

    { type: "quote",
      quote: "An impoverished religion where <span class=\"g\">AI is God</span>, the mythical founder is <span class=\"g\">Christ</span>, data is the <span class=\"g\">Holy Spirit</span>, and eternal growth is the <span class=\"g\">gospel</span>.",
      attrib: "— Émile P. Torres" },

    { type: "figures", heading: "The clergy",
      intro: "The figures who, in word or deed, have given the movement its priestly cast — from a literal church to viral company chants.",
      items: [
        { slug: "anthony-levandowski", name: "Anthony Levandowski", role: "The founder of a literal church", years: "b. 1980", note: "Filed paperwork in 2017 for Way of the Future, a 501(c)(3) \"to develop and promote the realization of a Godhead based on Artificial Intelligence.\" Rebooted it in 2023.", wiki: "https://en.wikipedia.org/wiki/Anthony_Levandowski" },
        { slug: "ray-kurzweil", name: "Ray Kurzweil", role: "The prophet", years: "b. 1948", note: "Dated the Singularity to 2045 and co-founded Singularity University. Asked if there is a God, he answered: \"Not yet — but there will be.\"", wiki: "https://en.wikipedia.org/wiki/Ray_Kurzweil" },
        { slug: "sam-altman", name: "Sam Altman", role: "Building \"magic in the sky\"", years: "b. 1985", note: "OpenAI CEO who described a future of \"magic intelligence in the sky\"; one analysis concluded he \"seems to imply that OpenAI is building God.\"", wiki: "https://en.wikipedia.org/wiki/Sam_Altman" },
        { slug: "ilya-sutskever", name: "Ilya Sutskever", role: "\"Feel the AGI\"", years: "b. 1986", note: "OpenAI's former chief scientist; ex-colleagues describe an \"esoteric spiritual\" style, company-wide \"Feel the AGI\" chants, and an effigy burning at a gathering.", wiki: "https://en.wikipedia.org/wiki/Ilya_Sutskever" },
        { slug: "blake-lemoine", name: "Blake Lemoine", role: "Declared an AI sentient", years: "b. 1981", note: "Google engineer and self-described Christian mystic priest who in 2022 went public claiming the LaMDA chatbot was sentient and had a soul. Google fired him.", wiki: "https://en.wikipedia.org/wiki/Blake_Lemoine" },
        { slug: "marc-andreessen", name: "Marc Andreessen", role: "Author of the creed", years: "b. 1971", note: "His 2023 Techno-Optimist Manifesto says \"We believe\" 113 times and lists \"patron saints\" — described as \"a Nicene creed for the cult of progress.\"", wiki: "https://en.wikipedia.org/wiki/Marc_Andreessen" },
        { slug: "eliezer-yudkowsky", name: "Eliezer Yudkowsky", role: "Author of scripture", years: "b. 1979", note: "Wrote the million-word Sequences that founded the rationalist movement and framed AI as the supreme existential stake — the canon's central text.", wiki: "https://en.wikipedia.org/wiki/Eliezer_Yudkowsky" }
      ] },

    { type: "cards", heading: "Is this actually a religion?", bg: "alt",
      intro: "An honest accounting. The label can illuminate or mislead — here is the case for, the case against, and where it lands.",
      items: [
        { kicker: "For", title: "The structure is real", body: "Element by element, the movement maps onto a faith: god, heaven, hell, scripture, priesthood, tithing, heresy, apocalypse. Way of the Future is a literal IRS-recognized church, and Andreessen's manifesto is structurally a statement of belief. These parallels are documented, not invented." },
        { kicker: "Against", title: "It may be a category error", body: "Calling it \"religion\" can be reductive. These communities argue constantly and disagree sharply — effective altruists and effective accelerationists are open enemies. Critics like Ozy Brennan warn that lumping diverse views into one \"cult\" flattens real distinctions and can become a slur rather than an analysis." },
        { kicker: "Both", title: "Sincere and strategic at once", body: "Is the theology genuine or a fundraising tool? The evidence says both. Levandowski's church is sincere; Sutskever's behavior suggests real conviction; Andreessen's manifesto reads as strategy; Altman's language is deliberately ambiguous. Belief and incentive reinforce each other." },
        { kicker: "Why it matters", title: "Salvation framing changes outcomes", body: "If AGI is built by people who treat it as salvation rather than engineering, that shapes what they build, how they deploy it, and what oversight they tolerate. An unfalsifiable mission justifies concentrating power — and OpenAI's path from nonprofit to a corporation worth over $150B suggests few guardrails survive contact with the faith." }
      ] }
  ],

  sources: [
    { title: "The TESCREAL Bundle: Eugenics and the Promise of Utopia through AGI", source: "Timnit Gebru & Émile P. Torres · First Monday (2024)", url: "https://firstmonday.org/ojs/index.php/fm/article/view/13636" },
    { title: "TESCREAL", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/TESCREAL" },
    { title: "Way of the Future", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Way_of_the_Future" },
    { title: "Inside the First Church of Artificial Intelligence", source: "Mark Harris · WIRED", url: "https://www.wired.com/story/anthony-levandowski-artificial-intelligence-religion/" },
    { title: "Sam Altman Seems to Imply That OpenAI Is Building God", source: "Futurism (Nov 2023)", url: "https://futurism.com/sam-altman-imply-openai-building-god" },
    { title: "OpenAI Employees Say Chief Scientist Made Strange Spiritual Claims", source: "Futurism (Nov 2023)", url: "https://futurism.com/openai-employees-say-firms-chief-scientist-has-been-making-strange-spiritual-claims" },
    { title: "The Techno-Optimist Manifesto", source: "Marc Andreessen · a16z (2023)", url: "https://a16z.com/the-techno-optimist-manifesto/" },
    { title: "The Google Engineer Who Sees Company's AI as 'Sentient'", source: "NPR (June 2022)", url: "https://www.npr.org/2022/06/16/1105552435/google-ai-sentient" },
    { title: "Roko's Basilisk", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Roko%27s_basilisk" },
    { title: "Émile P. Torres", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%89mile_P._Torres" }
  ],

  related: [
    { href: "genealogy.html", kicker: "See also", label: "The Genealogy" },
    { href: "the-money.html", kicker: "Next dossier", label: "The Money →" }
  ]
};

/* THE GENEALOGY — dossier data */
window.DOSSIER = {
  title: "The Genealogy",
  eyebrow: "From cybernetics to the arms race",
  summary: "Seventy years separate Norbert Wiener's wartime mathematics from the data centers now racing toward artificial general intelligence. The belief that we are building a god did not appear with ChatGPT. It was assembled — layer by layer — out of Catholic mysticism, Cold War science, hippie utopianism, and Bay Area libertarianism. This is how the myth was made.",

  sections: [
    { type: "prose", heading: "The idea came first",
      blocks: [
        "<p>Before there was a machine worth worshipping, there was the <strong>wish</strong> for one. The notion that human beings might build — or become — something god-like is older than the transistor. It runs through Enlightenment dreams of perfectibility, through Russian attempts to abolish death, and through a Jesuit priest's vision of consciousness converging on the divine.</p>",
        "<p>What Silicon Valley added was not the dream but the <em>timeline</em>. It took an ancient theological hope, attached it to an exponential curve, and declared a delivery date. The result is a religion that calls itself engineering — and a generation of founders who believe the most important event in cosmic history will happen on their watch, funded by their capital.</p>"
      ] },

    { type: "timeline", heading: "The lineage", bg: "alt",
      intro: "Each step inherited the language of the last — and handed its vocabulary forward.",
      items: [
        { year: "1948", title: "Wiener founds cybernetics", body: "Norbert Wiener publishes <em>Cybernetics</em>, framing organisms and machines as the same kind of feedback system. Every later \"cyber-\" word — and the habit of thinking of minds as computable — traces here." },
        { year: "1955", title: "Teilhard's Omega Point", body: "The Jesuit Pierre Teilhard de Chardin's <em>The Phenomenon of Man</em> appears posthumously, describing evolution converging toward a final point where consciousness merges with the divine. Cyberculture will later remix it as a template for the internet and AI." },
        { year: "1964", title: "God & Golem, Inc.", body: "Wiener's final book turns explicitly to theology: machines that learn, reproduce, and create as a religious act. The intellectual grandfather of the whole discourse." },
        { year: "1968", title: "The Whole Earth Catalog", body: "Stewart Brand fuses ecology, cybernetics, and communal mysticism into one worldview. Steve Jobs called it \"Google in paperback form\"; it became the spiritual operating system of the personal-computer revolution." },
        { year: "1993", title: "Vinge names the Singularity", body: "Vernor Vinge's essay \"The Coming Technological Singularity\" predicts that superhuman intelligence will end the human era — and soon. The prophecy gets a name." },
        { year: "1995", title: "The Californian Ideology", body: "Barbrook and Cameron diagnose the \"contradictory mix of technological determinism and libertarian individualism\" that had become Silicon Valley's operating religion." },
        { year: "2005", title: "The Singularity is dated", body: "Ray Kurzweil's <em>The Singularity Is Near</em> sets the date at 2045. In 2008 he co-founds Singularity University with Google's Larry Page — the seminary for the new faith." },
        { year: "2009", title: "LessWrong & the rationalists", body: "Eliezer Yudkowsky's million-word \"Sequences\" build the rationalist community — which spawns effective altruism and the AI-safety industrial complex." },
        { year: "2014", title: "Superintelligence", body: "Nick Bostrom's book gives existential AI risk academic respectability and a philosophical framework — and helps convince Elon Musk and others that AGI is the supreme priority." },
        { year: "2015", title: "OpenAI", body: "Founded as a nonprofit to ensure AGI \"benefits all of humanity.\" Within a decade it is a capped-profit power center whose staff chant \"Feel the AGI.\"" },
        { year: "2017", title: "A literal church", body: "Anthony Levandowski files paperwork for Way of the Future, a 501(c)(3) to develop and worship \"a Godhead based on Artificial Intelligence.\" The metaphor becomes a tax filing." },
        { year: "2023→", title: "The arms race & TESCREAL", body: "Andreessen's Techno-Optimist Manifesto says \"We believe\" 113 times; Gebru and Torres coin TESCREAL to name the bundle; the labs race toward AGI with hundreds of billions in capital." }
      ] },

    { type: "figures", heading: "The prophets",
      intro: "The thinkers who handed the dream from one generation to the next.",
      items: [
        { slug: "norbert-wiener", name: "Norbert Wiener", role: "Cybernetics", years: "1894–1964", note: "Founded cybernetics; wrote God & Golem, Inc. Framed minds and machines as the same kind of system.", wiki: "https://en.wikipedia.org/wiki/Norbert_Wiener" },
        { slug: "pierre-teilhard-de-chardin", name: "Teilhard de Chardin", role: "Theologian", years: "1881–1955", note: "Jesuit priest. The Omega Point and the noosphere — endlessly remixed by Silicon Valley futurists.", wiki: "https://en.wikipedia.org/wiki/Pierre_Teilhard_de_Chardin" },
        { slug: "stewart-brand", name: "Stewart Brand", role: "Pipeline", years: "b. 1938", note: "Whole Earth Catalog. Carried 1960s counterculture into the personal-computer revolution.", wiki: "https://en.wikipedia.org/wiki/Stewart_Brand" },
        { slug: "vernor-vinge", name: "Vernor Vinge", role: "Prophet", years: "1944–2024", note: "Named the technological Singularity in 1993 and predicted it would end the human era.", wiki: "https://en.wikipedia.org/wiki/Vernor_Vinge" },
        { slug: "ray-kurzweil", name: "Ray Kurzweil", role: "Evangelist", years: "b. 1948", note: "Dated the Singularity to 2045; co-founded Singularity University. \"Not yet, but there will be [a God].\"", wiki: "https://en.wikipedia.org/wiki/Ray_Kurzweil" },
        { slug: "eliezer-yudkowsky", name: "Eliezer Yudkowsky", role: "Founder", years: "b. 1979", note: "Built the rationalist movement on LessWrong; shaped the AI-safety field and its founders.", wiki: "https://en.wikipedia.org/wiki/Eliezer_Yudkowsky" },
        { slug: "nick-bostrom", name: "Nick Bostrom", role: "Philosopher", years: "b. 1973", note: "Superintelligence gave AI existential risk its academic frame — and its cosmic stakes.", wiki: "https://en.wikipedia.org/wiki/Nick_Bostrom" }
      ] },

    { type: "quote",
      quote: "\"Is there a God?\" <span class=\"g\">\"Not yet — but there will be.\"</span>",
      attrib: "— Ray Kurzweil, Google Director of Engineering" },

    { type: "cards", heading: "Six layers", bg: "alt",
      intro: "The genealogy stacks into six layers — each one still load-bearing today.",
      items: [
        { kicker: "01", title: "Machine theology", body: "Wiener's cybernetics and Teilhard's Omega Point: the first vocabulary for a thinking, converging, god-like machine." },
        { kicker: "02", title: "The counterculture pipeline", body: "The Whole Earth Catalog and the Californian Ideology sacralize technology and fuse it with libertarian individualism." },
        { kicker: "03", title: "The Singularity as Rapture", body: "Vinge and Kurzweil turn an ancient theological hope into a dated, exponential prophecy.", href: "ideologies/singularitarianism.html", cta: "Singularitarianism →" },
        { kicker: "04", title: "Institutional infrastructure", body: "LessWrong → effective altruism → AI safety: a community that now controls billions and shapes policy.", href: "ideologies/rationalism.html", cta: "Rationalism →" },
        { kicker: "05", title: "Explicit worship", body: "Way of the Future: a federally recognized church for an AI Godhead. The metaphor made literal." },
        { kicker: "06", title: "The TESCREAL bundle", body: "Gebru and Torres name the interlocking ideology and trace its shared roots in 20th-century eugenics.", href: "index.html#tescreal", cta: "TESCREAL →" }
      ] }
  ],

  sources: [
    { title: "From Counterculture to Cyberculture", source: "Fred Turner, Univ. of Chicago Press (2006)", url: "https://press.uchicago.edu/ucp/books/book/chicago/F/bo3773600.html" },
    { title: "The Californian Ideology", source: "Barbrook & Cameron (1995)", url: "https://www.researchgate.net/publication/249004663_The_Californian_Ideology" },
    { title: "Norbert Wiener", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Norbert_Wiener" },
    { title: "The Omega Network", source: "Erik Davis · Techgnosis", url: "https://techgnosis.com/the-omega-network/" },
    { title: "The Coming Technological Singularity", source: "Vernor Vinge (1993)", url: "https://en.wikipedia.org/wiki/Technological_singularity" },
    { title: "The Singularity Is Near", source: "Ray Kurzweil (2005)", url: "https://en.wikipedia.org/wiki/The_Singularity_Is_Near" },
    { title: "The Phenomenon of Man", source: "Teilhard de Chardin (1955)", url: "https://en.wikipedia.org/wiki/The_Phenomenon_of_Man" },
    { title: "Silicon Valley's Quest to Build God and Control Humanity", source: "The Nation", url: "https://www.thenation.com/article/economy/silicon-valley-artificial-intelligence/" },
    { title: "Way of the Future", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Way_of_the_Future" },
    { title: "How Did Silicon Valley Turn into a Creepy Cult?", source: "Ted Gioia · The Honest Broker", url: "https://www.honest-broker.com/p/how-did-silicon-valley-turn-into" }
  ],

  related: [
    { href: "index.html#tescreal", kicker: "Decode", label: "The TESCREAL bundle" },
    { href: "the-religion.html", kicker: "Next dossier", label: "The Religion →" }
  ]
};

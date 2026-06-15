/* THE MONEY — dossier data */
window.DOSSIER = {
  title: "The Money",
  eyebrow: "The capital flows behind the AI-as-god movement",
  summary: "The belief that we are building a digital god did not spread on the strength of argument alone. It was capitalized. A small number of tech fortunes — Peter Thiel's, Dustin Moskovitz's, briefly Sam Bankman-Fried's — seeded the institutes, the conferences, the labs, and the philosophy that now shapes how the world's most powerful AI companies are governed. This is a map of where the money came from, where it went, and what it bought.",

  sections: [
    { type: "prose", heading: "Follow the money",
      blocks: [
        "<p>Ideologies are cheap; institutions are not. The transhumanist, rationalist, and longtermist ideas bundled together as <strong>TESCREAL</strong> would have remained internet subcultures without patrons willing to fund them at scale. From the mid-2000s, a handful of Silicon Valley donors did exactly that — bankrolling Eliezer Yudkowsky's Singularity Institute, the Singularity Summit, the seed round that launched DeepMind, and later the grant-making machinery of effective altruism. The same names recur because the capital base was, by design, narrow.</p>",
        "<p>That concentration matters because, as critics including Émile P. Torres and Timnit Gebru argue, money did not just amplify these ideas — it selected which questions could be asked. When a single foundation funds much of a field, its founders' sensitivities quietly define the boundaries of permissible criticism. None of this requires a conspiracy. It only requires that the people who pay for the AI-safety conversation also believe, sincerely, that they are funding the most important cause in history.</p>"
      ] },

    { type: "graph", heading: "The funding web", bg: "alt",
      intro: "How a few fortunes connect to the institutes, labs, and ideologies of the movement. Drag a node; hover to isolate its ties.",
      title: "The funding web",
      nodes: [
        { id: "The Money", type: "core" },
        { id: "Peter Thiel", type: "person" },
        { id: "Eliezer Yudkowsky", type: "person" },
        { id: "William MacAskill", type: "person" },
        { id: "Sam Bankman-Fried", type: "person" },
        { id: "Dustin Moskovitz", type: "person" },
        { id: "Holden Karnofsky", type: "person" },
        { id: "Sam Altman", type: "person" },
        { id: "Demis Hassabis", type: "person" },
        { id: "Elon Musk", type: "person" },
        { id: "Founders Fund", type: "entity" },
        { id: "Singularity Institute / MIRI", type: "entity" },
        { id: "Singularity Summit", type: "entity" },
        { id: "DeepMind", type: "entity" },
        { id: "Jane Street", type: "entity" },
        { id: "Centre for Effective Altruism", type: "entity" },
        { id: "FTX", type: "entity" },
        { id: "FTX Future Fund", type: "entity" },
        { id: "Open Philanthropy", type: "entity" },
        { id: "OpenAI", type: "entity" },
        { id: "Effective Altruism", type: "ideology" },
        { id: "Longtermism", type: "ideology" }
      ],
      links: [
        { source: "Peter Thiel", target: "The Money" },
        { source: "Dustin Moskovitz", target: "The Money" },
        { source: "Sam Bankman-Fried", target: "The Money" },
        { source: "Elon Musk", target: "The Money" },
        { source: "Peter Thiel", target: "Founders Fund" },
        { source: "Peter Thiel", target: "Singularity Institute / MIRI" },
        { source: "Peter Thiel", target: "Singularity Summit" },
        { source: "Founders Fund", target: "DeepMind" },
        { source: "Eliezer Yudkowsky", target: "Singularity Institute / MIRI" },
        { source: "Eliezer Yudkowsky", target: "Singularity Summit" },
        { source: "Eliezer Yudkowsky", target: "Peter Thiel" },
        { source: "Eliezer Yudkowsky", target: "Sam Altman" },
        { source: "Demis Hassabis", target: "DeepMind" },
        { source: "Sam Altman", target: "OpenAI" },
        { source: "Elon Musk", target: "OpenAI" },
        { source: "William MacAskill", target: "Sam Bankman-Fried" },
        { source: "William MacAskill", target: "Centre for Effective Altruism" },
        { source: "William MacAskill", target: "Effective Altruism" },
        { source: "William MacAskill", target: "Longtermism" },
        { source: "Sam Bankman-Fried", target: "Jane Street" },
        { source: "Sam Bankman-Fried", target: "Centre for Effective Altruism" },
        { source: "Sam Bankman-Fried", target: "FTX" },
        { source: "FTX", target: "FTX Future Fund" },
        { source: "FTX Future Fund", target: "Longtermism" },
        { source: "Dustin Moskovitz", target: "Open Philanthropy" },
        { source: "Holden Karnofsky", target: "Open Philanthropy" },
        { source: "Open Philanthropy", target: "OpenAI" },
        { source: "Open Philanthropy", target: "Effective Altruism" },
        { source: "Effective Altruism", target: "Longtermism" }
      ] },

    { type: "timeline", heading: "The flows, in order",
      intro: "The order in which the money moved — and what each cheque set in motion.",
      items: [
        { year: "2000s", title: "Thiel funds the Singularity Institute", body: "Peter Thiel becomes an early backer of Eliezer Yudkowsky's Singularity Institute for Artificial Intelligence (later renamed MIRI) and bankrolls the <em>Singularity Summit</em>, the conference that turned a niche idea into a movement with a venue." },
        { year: "2010", title: "The $2.25M DeepMind seed", body: "Yudkowsky reportedly introduces DeepMind's founders to Thiel, who provides an early seed investment widely reported at roughly <strong>$2.25 million</strong> (via his Founders Fund network). Demis Hassabis would describe the company's plan as a \"Manhattan Project for AI.\"" },
        { year: "2011–12", title: "EA is formalized; SBF is recruited", body: "William MacAskill helps found the Centre for Effective Altruism. Around 2012 he advises a young Sam Bankman-Fried to \"earn to give\" — take a high-paying finance job and donate the proceeds. SBF goes to Jane Street, then builds the Alameda/FTX empire." },
        { year: "2017", title: "Open Philanthropy's $30M to OpenAI", body: "Open Philanthropy — funded chiefly by Facebook co-founder Dustin Moskovitz and run by Holden Karnofsky — makes an <strong>$30 million</strong> grant to OpenAI, then a nonprofit, and takes a board seat. The grant binds the largest EA funder to the leading AGI lab." },
        { year: "2022", title: "The FTX Future Fund launches", body: "Bankman-Fried and colleagues launch the FTX Future Fund to pour crypto wealth into longtermist and AI-safety projects, committing and disbursing well over <strong>$100 million</strong> in months. MacAskill sits on its team of advisers." },
        { year: "Nov 2022", title: "FTX collapses — and so does the funding", body: "FTX implodes in fraud; Bankman-Fried is later convicted. The Future Fund's team resigns, grantees scramble to return or replace money, and effective altruism faces its largest reputational crisis. MacAskill defends, then distances himself from, his former protégé." },
        { year: "2023–25", title: "Capital concentrates in the labs", body: "With OpenAI ($157B valuation, per 2025 reporting), Anthropic, and Safe Superintelligence drawing tens of billions, the ideology's center of gravity shifts from grant-funded institutes to corporate balance sheets — much of it still staffed and shaped by EA-aligned researchers." }
      ] },

    { type: "figures", heading: "The financiers",
      intro: "The donors, investors, and recruiters who moved the money.",
      items: [
        { slug: "peter-thiel", name: "Peter Thiel", role: "Founders Fund", years: "b. 1967", note: "Early funder of the Singularity Institute and Summit; reported seed backer of DeepMind. The original patron of Bay Area AI futurism.", wiki: "https://en.wikipedia.org/wiki/Peter_Thiel" },
        { slug: "dustin-moskovitz", name: "Dustin Moskovitz", role: "Open Philanthropy", years: "b. 1984", note: "Facebook co-founder. With wife Cari Tuna, the chief funder of Open Philanthropy — the largest private backer of AI-safety and EA work.", wiki: "https://en.wikipedia.org/wiki/Dustin_Moskovitz" },
        { slug: "sam-bankman-fried", name: "Sam Bankman-Fried", role: "FTX / Future Fund", years: "b. 1992", note: "Once EA's largest donor via the FTX Future Fund. Convicted of fraud in 2023; his collapse took the movement's signature fortune with it.", wiki: "https://en.wikipedia.org/wiki/Sam_Bankman-Fried" },
        { slug: "william-macaskill", name: "William MacAskill", role: "EA / Longtermism", years: "b. 1987", note: "Co-founded effective altruism and formalized longtermism. Recruited SBF to \"earn to give\"; advised the Future Fund; later distanced himself.", wiki: "https://en.wikipedia.org/wiki/William_MacAskill" },
        { slug: "holden-karnofsky", name: "Holden Karnofsky", role: "Open Philanthropy", years: "b. 1981", note: "Co-founded GiveWell and Open Philanthropy. Architect of its AI-safety grant-making; held an OpenAI board seat after the 2017 grant.", wiki: "https://en.wikipedia.org/wiki/Holden_Karnofsky" },
        { slug: "sam-altman", name: "Sam Altman", role: "OpenAI", years: "b. 1985", note: "OpenAI CEO. Credits Yudkowsky as an influence on the lab's founding; turned a $1B nonprofit pledge into a capped-profit power center.", wiki: "https://en.wikipedia.org/wiki/Sam_Altman" },
        { slug: "elon-musk", name: "Elon Musk", role: "OpenAI / FLI", years: "b. 1971", note: "Co-founded and funded OpenAI; donated to the Future of Life Institute. Called MacAskill's longtermism a \"close match\" for his philosophy.", wiki: "https://en.wikipedia.org/wiki/Elon_Musk" },
        { slug: "larry-page", name: "Larry Page", role: "Google / DeepMind", years: "b. 1973", note: "Google co-founder; co-founded Singularity University and acquired DeepMind in 2014. Reportedly a believer in building a \"digital god.\"", wiki: "https://en.wikipedia.org/wiki/Larry_Page" }
      ] },

    { type: "quote",
      quote: "\"For most people, the highest-impact path isn't to work directly for a good cause — it's to <span class=\"g\">earn as much as you can and give it away.</span>\"",
      attrib: "— William MacAskill, on \"earn to give\" (paraphrased)" },

    { type: "cards", heading: "What the money bought", bg: "alt",
      intro: "Four things the capital purchased — intended and not.",
      items: [
        { kicker: "01", title: "The AI-safety field", body: "Grants from Open Philanthropy, the Survival and Flourishing Fund, and others effectively built an academic and nonprofit field around existential AI risk — staffing institutes, fellowships, and labs that might not otherwise exist." },
        { kicker: "02", title: "Agenda-setting power", body: "Critics argue that when one funder dominates a field, its founders' priorities quietly define which harms count. Present-day issues — bias, labor, surveillance — get less attention than speculative extinction." },
        { kicker: "03", title: "Opportunity cost", body: "\"Earn to give\" and longtermist math redirect talent and billions toward far-future scenarios. Critics like Torres argue this devalues the present poor, the climate, and the natural world as rounding errors." },
        { kicker: "04", title: "The FTX implosion", body: "The movement's biggest bet became its biggest liability. Fraudulent wealth funded longtermist projects until it vanished overnight — exposing how much of the cause rested on a single, unaccountable fortune." }
      ] }
  ],

  sources: [
    { title: "The TESCREAL Bundle: Eugenics and the Promise of Utopia through AGI", source: "Gebru & Torres · First Monday (2024)", url: "https://firstmonday.org/ojs/index.php/fm/article/view/13636" },
    { title: "AI Is a Eugenics Project — interview with Émile P. Torres", source: "The Stories We Tell · YouTube", url: "https://www.youtube.com/watch?v=4SSxfa3da58" },
    { title: "Open Philanthropy (incl. the $30M OpenAI grant)", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Open_Philanthropy" },
    { title: "OpenAI — funding and governance history", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/OpenAI" },
    { title: "DeepMind — early funding and acquisition", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/DeepMind" },
    { title: "How effective altruism let Sam Bankman-Fried happen", source: "Vox · Future Perfect", url: "https://www.vox.com/future-perfect/23500014/effective-altruism-sam-bankman-fried-ftx-sbf-fraud-crypto" },
    { title: "Effective Altruism and the crypto fortune behind it", source: "WIRED", url: "https://www.wired.com/story/effective-altruism-artificial-intelligence-sam-bankman-fried/" },
    { title: "Tech Capitalists Don't Care About Humans. Literally.", source: "Émile P. Torres · Jacobin (2025)", url: "https://jacobin.com/2025/11/musk-thiel-altman-ai-tescrealism" },
    { title: "FTX — collapse and the Future Fund", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/FTX" },
    { title: "Machine Intelligence Research Institute (formerly Singularity Institute)", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Machine_Intelligence_Research_Institute" }
  ],

  related: [
    { href: "ideologies/effective-altruism.html", kicker: "See also", label: "Effective Altruism" },
    { href: "israel-nexus.html", kicker: "Next dossier", label: "The Israel Nexus →" }
  ]
};

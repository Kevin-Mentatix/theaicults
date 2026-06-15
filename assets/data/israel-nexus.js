/* THE ISRAEL NEXUS — dossier data */
window.DOSSIER = {
  title: "The Israel Nexus",
  eyebrow: "Where AI capital meets the defense state",
  summary: "The same Silicon Valley figures who preach AI existential risk and a cosmic, utopian future are, in their day jobs, signing the contracts that wire artificial intelligence into one of the world's most advanced military and surveillance ecosystems. This page follows the documented threads — specific firms, named executives' on-the-record statements, and dollar figures — that connect AI capital, defense technology, and the Israeli military-tech sector. Every contested claim is attributed to the reporting that made it.",

  sections: [
    { type: "prose", heading: "Where the ideology meets the algorithm",
      blocks: [
        "<p>The TESCREAL worldview — the techno-utopian bundle that treats superintelligence as humanity's defining project — is usually discussed as philosophy. But the people who hold it also run the companies building the actual systems. According to the grounding investigation this page draws on, the overlap is not incidental but <em>structural</em>: a small set of firms and individuals sit at the junction where AI capital, defense contracting, and the Israeli military-tech ecosystem meet.</p>",
        "<p>This is not a claim about any people or religion. It is a map of <strong>companies, contracts, capital flows, and the publicly stated positions of named executives</strong>. Where the report makes a strong charge, it is presented here as a claim by a named source — Bloomberg, The Guardian, +972 Magazine, a UN Special Rapporteur, the executives' own words — not as this site's settled verdict. The site's stance is consistent throughout: pro-AI as a technology, skeptical of those who would turn it toward control, surveillance, and war.</p>"
      ] },

    { type: "cards", heading: "The threads", bg: "alt",
      intro: "Six documented connections between AI firms and the Israeli defense-tech sector. Each is grounded in the reporting cited at the foot of this page.",
      items: [
        { kicker: "01", title: "Palantir & the targeting systems", body: "In January 2024, Bloomberg reported Palantir signed a strategic partnership with Israel's Defense Ministry to supply AI battle technology to the IDF. Palantir has denied direct involvement in <em>Lavender</em> and <em>Gospel</em> — the AI targeting tools +972 Magazine reported were used in Gaza — but The Nation reported its data-mining software helps the IDF select targets. CEO Alex Karp has called Palantir's systems \"crucial\" to Israeli operations." },
        { kicker: "02", title: "OpenAI – Anduril", body: "On December 4, 2024, OpenAI announced a defense partnership with Anduril, pairing its models with Anduril's Lattice platform for the US military. It came less than a year after OpenAI quietly removed a clause barring \"military and warfare\" uses. Anduril's founder Palmer Luckey describes himself as a \"radical Zionist\" and has said \"Israel has my unqualified support,\" per TRT World." },
        { kicker: "03", title: "Project Nimbus (Google & Amazon)", body: "In 2021 Google and Amazon signed Project Nimbus, a ~$1.2 billion cloud-AI contract with the Israeli government, including its military. Al Jazeera reported the deal gives Israel facial detection, image categorization and object tracking, and that the firms reportedly cannot bar any government arm — including the military — from using it." },
        { kicker: "04", title: "Unit 8200 → Silicon Valley", body: "Drop Site News reported a database showing hundreds of veterans of Unit 8200, Israel's signals-intelligence unit, in senior roles across Microsoft, Google, Nvidia, Intel and Meta, plus a startup pipeline (Palo Alto Networks, Check Point, CyberArk, Wiz) the report values near $160B combined. The report frames this as a dual-use \"revolving door\" between military intelligence and commercial AI." },
        { kicker: "05", title: "Oracle & Larry Ellison", body: "In March 2024 Ellison said Oracle would spend $10 billion building computing facilities in Israel, calling its Jerusalem data center \"a personal show of affection,\" per OnePath Network. The report cites a confidential IDF \"Project Menta,\" a Rafael AI partnership, and over $26 million in Ellison donations to Friends of the IDF since 2014." },
        { kicker: "06", title: "Eric Schmidt's defense bets", body: "Project Censored and Calcalist reported Schmidt's Innovation Endeavors backed Team8 — co-founded by a former Unit 8200 commander — and that Schmidt joined a $200M round for Israeli defense startup Kela. He chaired both the National Security Commission on AI and the Pentagon's Defense Innovation Board, linking AI policy, US strategy and his Israeli portfolio." }
      ] },

    { type: "timeline", heading: "How it unfolded",
      intro: "Dated events drawn from the investigation. Only milestones the report supports are included.",
      items: [
        { year: "2021", title: "Project Nimbus signed", body: "Google and Amazon enter a ~$1.2 billion cloud-AI contract with the Israeli government and military. The same year, Oracle becomes the first multinational to offer cloud services in Israel via a $319 million Jerusalem data center, per the report." },
        { year: "2023 (Jun)", title: "OpenAI leadership in Israel", body: "Sam Altman and co-founder Ilya Sutskever visit Israel, meeting President Isaac Herzog; The Times of Israel reported Altman praised the country's \"pivotal role in the AI revolution.\"" },
        { year: "2024 (Jan)", title: "OpenAI deletes its military-use ban", body: "OpenAI revises its usage policy to remove the clause prohibiting \"military and warfare\" applications — the precondition, the report argues, for its later defense work." },
        { year: "2024 (Jan)", title: "Palantir–Israel partnership", body: "Bloomberg reported Palantir and Israel's Defense Ministry agreed a strategic partnership for AI battle technology, following meetings between Palantir's founders and senior Israeli officials." },
        { year: "2024 (Apr)", title: "Lavender investigation published", body: "+972 Magazine, with reporting amplified by The Guardian, detailed the AI system <em>Lavender</em>, which it reported flagged as many as 37,000 Palestinians as suspected militants for possible strikes in the early weeks of the war." },
        { year: "2024 (Apr)", title: "Google fires protesting workers", body: "After a sit-in by the No Tech for Apartheid movement demanding Google drop Project Nimbus, the company fired dozens of employees, per reporting compiled on the Project Nimbus record." },
        { year: "2024 (Dec)", title: "OpenAI–Anduril announced", body: "OpenAI announces a partnership with defense firm Anduril to apply its models to US military systems — led on Anduril's side by self-described \"radical Zionist\" Palmer Luckey." },
        { year: "2025 (Jun)", title: "UN Rapporteur names Alphabet", body: "The Intercept reported the UN Special Rapporteur on the occupied Palestinian territories identified Alphabet in findings to the Human Rights Council, concluding Project Nimbus supplied critical cloud and AI infrastructure to Israel's military." }
      ] },

    { type: "figures", heading: "The principals",
      intro: "Named individuals at the center of the reporting. Notes are factual and attributed; inclusion reflects documented business or public-statement ties, not any claim about identity.",
      items: [
        { slug: "peter-thiel", name: "Peter Thiel", role: "Palantir / Founders Fund", years: "b. 1967", note: "Palantir co-founder and major longtermist donor. Responsible Statecraft quoted him saying \"My bias is to defer to Israel… the IDF gets to decide what it wants to do.\"", wiki: "https://en.wikipedia.org/wiki/Peter_Thiel" },
        { slug: "alex-karp", name: "Alex Karp", role: "Palantir CEO", years: "b. 1967", note: "Has called Palantir's systems \"crucial\" to Israeli operations and, per reporting, said after Oct. 7 that Palantir would \"give Israel all the help it needs.\"", wiki: "https://en.wikipedia.org/wiki/Alex_Karp" },
        { slug: "palmer-luckey", name: "Palmer Luckey", role: "Anduril founder", years: "b. 1992", note: "OpenAI's defense partner. TRT World reported he describes himself as a \"radical Zionist\" and said \"Israel has my unqualified support.\"", wiki: "https://en.wikipedia.org/wiki/Palmer_Luckey" },
        { slug: "sam-altman", name: "Sam Altman", role: "OpenAI CEO", years: "b. 1985", note: "Met Israel's President Herzog in 2023 and, per The Times of Israel, invested in Apex, an Israeli startup founded by Unit 8200 alumni.", wiki: "https://en.wikipedia.org/wiki/Sam_Altman" },
        { slug: "ilya-sutskever", name: "Ilya Sutskever", role: "OpenAI co-founder", years: "b. 1986", note: "Raised in Jerusalem; led the research behind ChatGPT. Left in 2024 to found Safe Superintelligence Inc., valued at $32B by 2025, per Wikipedia.", wiki: "https://en.wikipedia.org/wiki/Ilya_Sutskever" },
        { slug: "eric-schmidt", name: "Eric Schmidt", role: "Ex-Google CEO / AI advisor", years: "b. 1955", note: "Backed Team8 (co-founded by a former Unit 8200 commander) and Israeli defense startup Kela; chaired the US National Security Commission on AI.", wiki: "https://en.wikipedia.org/wiki/Eric_Schmidt" },
        { slug: "elon-musk", name: "Elon Musk", role: "xAI / Tesla / Neuralink", years: "b. 1971", note: "The Washington Examiner reported he held calls with Netanyahu aimed at positioning Israel as a global AI leader; visited Israel in November 2023.", wiki: "https://en.wikipedia.org/wiki/Elon_Musk" },
        { slug: "larry-ellison", name: "Larry Ellison", role: "Oracle founder", years: "b. 1944", note: "Pledged $10B in Israeli computing facilities and has given over $26M to Friends of the IDF since 2014, per OnePath Network.", wiki: "https://en.wikipedia.org/wiki/Larry_Ellison" },
        { slug: "benjamin-netanyahu", name: "Benjamin Netanyahu", role: "Israeli Prime Minister", years: "b. 1949", note: "Counterparty in the report's high-level engagements — debating AI ethics with Musk and meeting tech leaders to court AI investment.", wiki: "https://en.wikipedia.org/wiki/Benjamin_Netanyahu" }
      ] },

    { type: "prose", heading: "The structural argument",
      blocks: [
        "<p>The report's central analytical claim — and it is an argument, not a settled fact — is that these ties are not coincidence but architecture. It contends that TESCREAL's \"civilizational\" framing, in which certain projects and populations matter more because they serve the long-term future of humanity, can map onto the logic of settler colonialism, in which some futures are treated as worth more than others. This argument leans heavily on Omar Zahzah's 2025 book <em>Terms of Servitude</em>, and readers should weigh it as one interpretive lens.</p>",
        "<p>Zahzah's framework, as the report summarizes it, draws structural parallels: both techno-utopianism and Zionist settler colonialism are said to claim inevitability, invoke frontier mythology, cast themselves as progressive, and treat dissent as irrational. From this the report derives the concept of \"digital settler colonialism\" — the overlap of US Big Tech and the Israeli state, expressed partly through the moderation of Palestinian speech on platforms built by the same firms supplying military cloud and AI.</p>",
        "<p>The harder, more defensible core is the <strong>dual-use problem</strong>: surveillance, signals intelligence, and targeting are the same capabilities that power commercial AI. The report's tally of \"$45+ billion in documented capital flows\" toward Israeli defense and tech infrastructure is its own aggregation and should be read as such — but the individual contracts and donations beneath it (Nimbus, Oracle's pledge, the Wiz acquisition, FIDF gifts) are separately sourced and far harder to dismiss.</p>"
      ] },

    { type: "quote",
      quote: "\"That's true — mostly terrorists.\"",
      attrib: "— Alex Karp, Palantir CEO, replying to an activist who accused Palantir's technology of contributing to Palestinian deaths, as reported by JFeed (per the investigation)" }
  ],

  sources: [
    { title: "How US Intelligence and an American Company Feed Israel's Killing Machine in Gaza", source: "The Nation (2024)", url: "https://www.thenation.com/article/world/nsa-palantir-israel-gaza-ai/" },
    { title: "'The machine did it coldly': Israel used AI to identify 37,000 Hamas targets", source: "The Guardian (2024) — reporting +972 Magazine's Lavender investigation", url: "https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes" },
    { title: "Peter Thiel: 'I Defer to Israel'", source: "Responsible Statecraft (2024)", url: "https://responsiblestatecraft.org/peter-thiel-israel-palantir/" },
    { title: "OpenAI's Battlefield Foray, Led by Self-Described 'Radical Zionist'", source: "TRT World (2024)", url: "https://www.trtworld.com/article/18240727" },
    { title: "What is Project Nimbus, and why are Google workers protesting Israel deal?", source: "Al Jazeera (2024)", url: "https://www.aljazeera.com/news/2024/4/23/what-is-project-nimbus-and-why-are-google-workers-protesting-israel-deal" },
    { title: "Google Worried It Couldn't Control How Israel Uses Project Nimbus", source: "The Intercept (2025)", url: "https://theintercept.com/2025/05/12/google-nimbus-israel-military-ai-human-rights/" },
    { title: "Project Nimbus (contract terms, employee firings)", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Project_Nimbus" },
    { title: "Hundreds of Former Israeli Spies Are Working in Big Tech, Database Shows", source: "Drop Site News (2025)", url: "https://www.dropsitenews.com/p/israel-technology-palo-alto-networks-microsoft-unit-8200" },
    { title: "Sam Altman: The Quick, Deep Thinker Leading OpenAI", source: "The Times of Israel (2023)", url: "https://www.timesofisrael.com/sam-altman-the-quick-deep-thinker-leading-openai/" },
    { title: "Ilya Sutskever", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ilya_Sutskever" },
    { title: "Musk Talks with Netanyahu About Turning Israel into Global AI Leader", source: "Washington Examiner (2025)", url: "https://www.washingtonexaminer.com/policy/technology/4363919/musk-netanyahu-israel-global-ai-leader/" },
    { title: "Terms of Servitude: Zionism, Silicon Valley, and Digital Settler Colonialism", source: "Omar Zahzah · Seven Stories Press (2025)", url: "https://www.sevenstoriespress.co.uk/books/terms-of-servitude" }
  ],

  related: [
    { href: "the-money.html", kicker: "See also", label: "The Money →" },
    { href: "index.html#tescreal", kicker: "Back to", label: "TESCREAL" }
  ]
};

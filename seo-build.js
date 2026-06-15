/* seo-build.js — inject canonical + OG/Twitter + JSON-LD into every page,
   and (re)generate sitemap.xml + robots.txt. Idempotent (uses markers). Re-run before deploy.
   Usage: node seo-build.js
*/
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://theaicults.com";
const OG = DOMAIN + "/assets/img/og-image.png";
const ROOT = __dirname;
const BUILD_DATE = process.argv[2] || new Date().toISOString().slice(0, 10); // YYYY-MM-DD for freshness

// page → url path + type
const PAGES = [
  { file: "index.html",                    url: "/",                              type: "home" },
  { file: "references.html",               url: "/references.html",               type: "page" },
  { file: "legal.html",                    url: "/legal.html",                    type: "page" },
  { file: "genealogy.html",                url: "/genealogy.html",                type: "article", crumb: "The Genealogy" },
  { file: "the-religion.html",             url: "/the-religion.html",             type: "article", crumb: "The Religion" },
  { file: "the-money.html",                url: "/the-money.html",                type: "article", crumb: "The Money" },
  { file: "israel-nexus.html",             url: "/israel-nexus.html",             type: "article", crumb: "The Israel Nexus" },
  { file: "ideologies/transhumanism.html", url: "/ideologies/transhumanism.html", type: "article", crumb: "Transhumanism" },
  { file: "ideologies/extropianism.html",  url: "/ideologies/extropianism.html",  type: "article", crumb: "Extropianism" },
  { file: "ideologies/singularitarianism.html", url: "/ideologies/singularitarianism.html", type: "article", crumb: "Singularitarianism" },
  { file: "ideologies/cosmism.html",       url: "/ideologies/cosmism.html",       type: "article", crumb: "Cosmism" },
  { file: "ideologies/rationalism.html",   url: "/ideologies/rationalism.html",   type: "article", crumb: "Rationalism" },
  { file: "ideologies/effective-altruism.html", url: "/ideologies/effective-altruism.html", type: "article", crumb: "Effective Altruism" },
  { file: "ideologies/longtermism.html",   url: "/ideologies/longtermism.html",   type: "article", crumb: "Longtermism" },
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

function getMeta(html, name, attr = "name") {
  const m = html.match(new RegExp(`<meta\\s+${attr}=["']${name}["']\\s+content=["']([^"']*)["']`, "i"));
  return m ? m[1] : "";
}
function getTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1] : "";
}

function buildBlock(p, html) {
  const fullTitle = getTitle(html);
  const headline = fullTitle.replace(/\s*[—-]\s*The AI Cults\s*$/, "").trim() || "The AI Cults";
  const desc = getMeta(html, "description");
  const abs = DOMAIN + p.url;
  const hasCanonical = /rel=["']canonical["']/.test(html);
  const hasOG = /property=["']og:image["']/.test(html);

  let out = ["<!-- seo:auto -->"];

  if (!hasCanonical) out.push(`<link rel="canonical" href="${abs}">`);

  if (!hasOG) {
    out.push(
      `<meta property="og:type" content="${p.type === "home" ? "website" : "article"}">`,
      `<meta property="og:site_name" content="The AI Cults">`,
      `<meta property="og:title" content="${esc(headline)}">`,
      `<meta property="og:description" content="${esc(desc)}">`,
      `<meta property="og:url" content="${abs}">`,
      `<meta property="og:image" content="${OG}">`,
      `<meta property="og:image:width" content="1200">`,
      `<meta property="og:image:height" content="630">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${esc(headline)}">`,
      `<meta name="twitter:description" content="${esc(desc)}">`,
      `<meta name="twitter:image" content="${OG}">`
    );
  }

  // JSON-LD
  const org = { "@type": "Organization", name: "The AI Cults", url: DOMAIN, logo: { "@type": "ImageObject", url: OG } };
  if (p.type === "home") {
    out.push(jsonld({ "@context": "https://schema.org", "@type": "WebSite", name: "The AI Cults", url: DOMAIN, description: desc }));
    out.push(jsonld({ "@context": "https://schema.org", ...org }));
  } else if (p.type === "article") {
    out.push(jsonld({
      "@context": "https://schema.org", "@type": "Article",
      headline, description: desc, url: abs, image: OG,
      inLanguage: "en", isAccessibleForFree: true,
      datePublished: BUILD_DATE, dateModified: BUILD_DATE,
      author: { "@type": "Organization", name: "The AI Cults", url: DOMAIN },
      publisher: org,
      isPartOf: { "@type": "WebSite", name: "The AI Cults", url: DOMAIN },
      mainEntityOfPage: abs,
    }));
    out.push(jsonld({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "The AI Cults", item: DOMAIN + "/" },
        { "@type": "ListItem", position: 2, name: p.crumb || headline, item: abs },
      ],
    }));
  } else {
    out.push(jsonld({ "@context": "https://schema.org", "@type": "WebPage", name: headline, description: desc, url: abs, isPartOf: { "@type": "WebSite", name: "The AI Cults", url: DOMAIN } }));
  }

  out.push("<!-- /seo:auto -->");
  return out.join("\n");
}

let injected = 0;
for (const p of PAGES) {
  const fp = path.join(ROOT, p.file);
  let html = fs.readFileSync(fp, "utf8");
  // remove prior auto block
  html = html.replace(/\n?<!-- seo:auto -->[\s\S]*?<!-- \/seo:auto -->\n?/g, "\n");
  const block = buildBlock(p, html);
  html = html.replace("</head>", block + "\n</head>");
  fs.writeFileSync(fp, html);
  injected++;
}

// sitemap.xml
const today = process.argv[2] || new Date().toISOString().slice(0, 10); // optional YYYY-MM-DD arg
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  PAGES.map((p) => {
    const pr = p.url === "/" ? "1.0" : p.type === "article" ? "0.8" : "0.5";
    return `  <url>\n    <loc>${DOMAIN}${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${pr}</priority>\n  </url>`;
  }).join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

// robots.txt — allow everything incl. AI crawlers (we WANT GEO citations); point to sitemap
const robots =
  `# theaicults.com\n` +
  `User-agent: *\n` +
  `Allow: /\n\n` +
  `# AI / answer-engine crawlers welcome (GEO)\n` +
  `User-agent: GPTBot\nAllow: /\n\n` +
  `User-agent: ClaudeBot\nAllow: /\n\n` +
  `User-agent: PerplexityBot\nAllow: /\n\n` +
  `User-agent: Google-Extended\nAllow: /\n\n` +
  `User-agent: Applebot-Extended\nAllow: /\n\n` +
  `User-agent: CCBot\nAllow: /\n\n` +
  `Sitemap: ${DOMAIN}/sitemap.xml\n`;
fs.writeFileSync(path.join(ROOT, "robots.txt"), robots);

console.log(`SEO build: injected head tags into ${injected} pages; wrote sitemap.xml (${PAGES.length} urls) + robots.txt`);

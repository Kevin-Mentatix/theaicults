/* prerender.js — bake JS-injected content into static HTML for crawlers/AI (GEO).
   The site's JS still renders live for users; this only fills the raw HTML so
   non-JS crawlers (GPTBot/ClaudeBot/PerplexityBot, social scrapers) see real content.
   Idempotent: wraps baked content in <!--pre:ID--> … <!--/pre:ID--> and strips them on re-run.
   Baked markup omits the "reveal" animation class so content is visible without JS.
   Usage: node prerender.js
*/
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function loadData(rel, key) {
  const p = path.join(ROOT, rel);
  delete require.cache[require.resolve(p)];
  global.window = {};
  require(p);
  return global.window[key];
}

// fill an EMPTY element (id="X"></tag>) with marker-wrapped content; idempotent strip first
function fill(html, id, content) {
  // strip prior baked region for this id
  html = html.replace(new RegExp("<!--pre:" + id + "-->[\\s\\S]*?<!--/pre:" + id + "-->"), "");
  // inject into the now-empty element
  const re = new RegExp('(id="' + id + '"[^>]*>)(\\s*)(</[a-zA-Z0-9]+>)');
  return html.replace(re, (m, open, ws, close) => open + "<!--pre:" + id + "-->" + content + "<!--/pre:" + id + "-->" + close);
}

const LETTERS = [
  { l: "T", slug: "transhumanism", nm: "Transhumanism" },
  { l: "E", slug: "extropianism", nm: "Extropianism" },
  { l: "S", slug: "singularitarianism", nm: "Singularitarianism" },
  { l: "C", slug: "cosmism", nm: "Cosmism" },
  { l: "R", slug: "rationalism", nm: "Rationalism" },
  { l: "EA", slug: "effective-altruism", nm: "Effective Altruism" },
  { l: "L", slug: "longtermism", nm: "Longtermism" },
];

/* ---------- IDEOLOGY pages ---------- */
function figcard(f, prefix) {
  const initials = f.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  const photo = '<img src="' + prefix + "assets/img/figures/" + f.slug + '.jpg" alt="' + esc(f.name) +
    '" loading="lazy" onerror="this.parentNode.innerHTML=\'<div class=&quot;figcard__mono&quot;>' + esc(initials) + "</div>'\">";
  const wiki = f.wiki ? '<a class="figcard__wiki" href="' + f.wiki + '" target="_blank" rel="noopener noreferrer">Wikipedia →</a>' : "";
  return '<article class="figcard"><div class="figcard__photo">' + photo + '</div><div class="figcard__body">' +
    '<span class="figcard__role">' + esc(f.role) + '</span><h3 class="figcard__name">' + esc(f.name) +
    '</h3><span class="figcard__years">' + esc(f.years || "") + '</span><p class="figcard__note">' + esc(f.note) + "</p>" + wiki + "</div></article>";
}

function prerenderIdeology(file, prefix) {
  const fp = path.join(ROOT, file);
  let html = fs.readFileSync(fp, "utf8");
  const D = loadData("assets/data/" + path.basename(file, ".html") + ".js", "IDEOLOGY");

  // hero text
  html = fill(html, "heroTagline", esc(D.tagline));
  html = fill(html, "heroDefn", esc(D.defn));
  html = fill(html, "heroSummary", esc(D.summary));

  // letter strip
  html = fill(html, "letterStrip", LETTERS.map((x) => {
    const active = x.slug === D.slug ? " active" : "";
    return '<a class="ideo-tile' + active + '" href="' + x.slug + '.html" title="' + x.nm + '">' +
      '<span class="ideo-tile__l">' + x.l + '</span><span class="ideo-tile__nm">' + x.nm + "</span></a>";
  }).join(""));

  if (D.overview) html = fill(html, "overview", D.overview.map((b) => '<div class="prose__block"><h3>' + esc(b.heading) + "</h3>" + b.body + "</div>").join(""));
  if (D.tenets) html = fill(html, "tenets", D.tenets.map((t, i) => '<div class="tenet"><span class="tenet__n">' + ("0" + (i + 1)).slice(-2) + '</span><h3>' + esc(t.title) + "</h3><p>" + esc(t.body) + "</p></div>").join(""));
  if (D.concepts) html = fill(html, "concepts", D.concepts.map((c) => '<div class="gloss__item"><div class="gloss__term">' + esc(c.term) + '</div><div class="gloss__def">' + esc(c.def) + "</div></div>").join(""));
  if (D.timeline) html = fill(html, "timeline", D.timeline.map((t) => '<div class="tl-item"><div class="tl-year">' + esc(t.year) + '</div><div class="tl-title">' + esc(t.title) + '</div><div class="tl-body">' + t.body + "</div></div>").join(""));
  if (D.figures) html = fill(html, "figgrid", D.figures.map((f) => figcard(f, prefix)).join(""));
  if (D.texts) html = fill(html, "texts", D.texts.map((t) => {
    const btn = t.url ? '<a class="textrow__read" href="' + t.url + '" target="_blank" rel="noopener noreferrer">Read <span>↗</span></a>' : "";
    return '<div class="textrow"><div class="textrow__main"><h3>' + esc(t.title) + '</h3><span class="by">' + esc(t.author) + "</span><p>" + esc(t.note) + "</p>" + btn + '</div><div class="textrow__yr">' + esc(t.year) + "</div></div>";
  }).join(""));
  if (D.quotes) html = fill(html, "quotes", D.quotes.map((q) => '<div class="pull"><blockquote>' + esc(q.quote) + "</blockquote><cite>— " + esc(q.attrib) + "</cite></div>").join(""));
  if (D.critique) {
    html = fill(html, "critiqueBody", D.critique.body || "");
    html = fill(html, "critiquePoints", (D.critique.points || []).map((p) => '<div class="crit"><h4>' + esc(p.h) + "</h4><p>" + esc(p.b) + "</p></div>").join(""));
  }
  if (D.connections) html = fill(html, "connections", D.connections.map((c) => '<a class="conn" href="' + c.slug + '.html"><span class="conn__l">' + esc(c.letter) + '</span><span class="conn__nm">' + esc(c.name) + '</span><span class="conn__rel">' + esc(c.relation) + '</span><span class="conn__go">Explore →</span></a>').join(""));
  if (D.sources) html = fill(html, "sources", D.sources.map((s, i) => {
    const host = s.url ? s.url.replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "") : "";
    const link = s.url ? '<a class="ref__link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.title) + " <span>↗</span></a>" : esc(s.title);
    return '<li class="ref"><span class="ref__n">' + ("0" + (i + 1)).slice(-2) + '</span><div class="ref__body">' + link + '<span class="ref__src">' + esc(s.source || host) + "</span></div></li>";
  }).join(""));

  fs.writeFileSync(fp, html);
  return D.figures ? D.figures.length : 0;
}

/* ---------- DOSSIER pages ---------- */
function dossierHead(s) {
  if (!s.heading) return "";
  const intro = s.intro ? "<p>" + s.intro + "</p>" : "";
  return '<div class="section-head"><span class="eyebrow">' + esc(s.kicker || s.heading) + "</span>" +
    (s.title2 ? "<h2>" + esc(s.title2) + "</h2>" : "<h2>" + esc(s.heading) + "</h2>") + intro + "</div>";
}
function dossierSection(s, idx) {
  let inner = "";
  if (s.type === "prose") inner = dossierHead(s) + '<div class="prose">' + (s.blocks || []).map((b) => '<div class="prose__block">' + b + "</div>").join("") + "</div>";
  else if (s.type === "timeline") inner = dossierHead(s) + '<div class="timeline">' + (s.items || []).map((t) => '<div class="tl-item"><div class="tl-year">' + esc(t.year) + '</div><div class="tl-title">' + esc(t.title) + '</div><div class="tl-body">' + t.body + "</div></div>").join("") + "</div>";
  else if (s.type === "figures") inner = dossierHead(s) + '<div class="figgrid">' + (s.items || []).map((f) => figcard(f, "")).join("") + "</div>";
  else if (s.type === "cards") inner = dossierHead(s) + '<div class="cards">' + (s.items || []).map((c) => {
    const kicker = c.kicker ? '<span class="card__num">' + esc(c.kicker) + "</span>" : "";
    const go = c.href ? '<a class="card__go" href="' + c.href + '">' + esc(c.cta || "Read more") + "</a>" : "";
    return c.href ? '<a class="card" href="' + c.href + '">' + kicker + "<h3>" + esc(c.title) + "</h3><p>" + c.body + "</p>" + go + "</a>"
                  : '<div class="card">' + kicker + "<h3>" + esc(c.title) + "</h3><p>" + c.body + "</p>" + go + "</div>";
  }).join("") + "</div>";
  else if (s.type === "mapping") inner = dossierHead(s) + '<dl class="relmap">' + (s.items || []).map((m) => '<div class="rel"><dt>' + esc(m.dt) + "</dt><dd>" + esc(m.dd) + "</dd></div>").join("") + "</dl>";
  else if (s.type === "quote") inner = '<div class="bigquote"><blockquote>' + s.quote + "</blockquote><cite>" + esc(s.attrib) + "</cite></div>";
  else if (s.type === "graph") inner = dossierHead(s) + '<div class="mindmap-wrap"><div class="mm-actions"><button class="mm-btn" data-pop="mm' + idx + '">⤢ Pop out</button></div><svg id="mm' + idx + '" aria-label="Network graph"></svg><span class="mm-hint">drag · hover · scroll to zoom</span></div>';
  const cls = "section-pad" + (s.bg === "alt" ? " sec-alt" : "");
  const divider = s.divider ? '<hr class="divider">' : "";
  return divider + '<section class="' + cls + '"><div class="wrap">' + inner + "</div></section>";
}
function prerenderDossier(file) {
  const fp = path.join(ROOT, file);
  let html = fs.readFileSync(fp, "utf8");
  const D = loadData("assets/data/" + path.basename(file, ".html") + ".js", "DOSSIER");

  html = fill(html, "dEyebrow", esc(D.eyebrow || ""));
  html = fill(html, "dTitle", esc(D.title || ""));
  html = fill(html, "dSummary", D.summary || ""); // summary may contain inline HTML

  let body = (D.sections || []).map(dossierSection).join("");
  if (D.sources && D.sources.length) {
    body += '<hr class="divider"><section class="section-pad"><div class="wrap"><div class="section-head"><span class="eyebrow">Sources</span><h2>Citations &amp; further reading</h2><p>Documents and reporting used on this page. See the full <a href="references.html">References library →</a>.</p></div><ol class="reflist">' +
      D.sources.map((s, i) => {
        const link = s.url ? '<a class="ref__link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.title) + ' <span>↗</span></a>' : esc(s.title);
        return '<li class="ref"><span class="ref__n">' + ("0" + (i + 1)).slice(-2) + '</span><div class="ref__body">' + link + '<span class="ref__src">' + esc(s.source || "") + "</span></div></li>";
      }).join("") + "</ol></div></section>";
  }
  if (D.related && D.related.length) {
    body += '<nav class="ideo-nav">' + D.related.map((r, i) => {
      const cls = i === D.related.length - 1 && D.related.length > 1 ? "next" : "";
      return '<a class="' + cls + '" href="' + r.href + '"><span class="dir">' + esc(r.kicker || "Related") + '</span><div class="nm">' + esc(r.label) + "</div></a>";
    }).join("") + "</nav>";
  }
  html = fill(html, "dRoot", body);
  fs.writeFileSync(fp, html);
  return (D.sections || []).length;
}

/* ---------- REFERENCES page ---------- */
function prerenderReferences() {
  const fp = path.join(ROOT, "references.html");
  let html = fs.readFileSync(fp, "utf8");
  const data = loadData("assets/data/references.js", "REFERENCES") || [];
  let total = 0;
  const out = data.map((cat) => {
    total += cat.items.length;
    const items = cat.items.map((r) => {
      const link = r.url ? '<a class="ref__link" href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + esc(r.title) + ' <span>↗</span></a>' : esc(r.title);
      return '<li class="ref"><div class="ref__body">' + link + '<span class="ref__src">' + esc(r.source) + "</span></div></li>";
    }).join("");
    return '<div class="ref-cat"><div class="ref-cat__h"><h3>' + esc(cat.group) + '</h3><span>' + cat.items.length + ' sources</span></div><ol class="reflist">' + items + "</ol></div>";
  }).join("");
  html = fill(html, "refRoot", out);
  html = fill(html, "refCount", esc(total + " sources across " + data.length + " themes."));
  fs.writeFileSync(fp, html);
  return total;
}

/* ---------- run ---------- */
let n = 0;
LETTERS.forEach((x) => { prerenderIdeology("ideologies/" + x.slug + ".html", "../"); n++; });
["genealogy", "the-religion", "the-money", "israel-nexus"].forEach((s) => { prerenderDossier(s + ".html"); n++; });
const refs = prerenderReferences(); n++;
console.log("Prerendered " + n + " pages (7 ideologies + 4 dossiers + references with " + refs + " sources). Content baked into static HTML for crawlers/AI.");

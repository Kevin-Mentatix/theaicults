/* THE AI CULTS — ideology page renderer
   Requires: window.IDEOLOGY (data), D3 v7 (for the mindmap). */
(function () {
  "use strict";
  var D = window.IDEOLOGY;
  if (!D) return;

  var LETTERS = [
    { l: "T", slug: "transhumanism", nm: "Transhumanism" },
    { l: "E", slug: "extropianism", nm: "Extropianism" },
    { l: "S", slug: "singularitarianism", nm: "Singularitarianism" },
    { l: "C", slug: "cosmism", nm: "Cosmism" },
    { l: "R", slug: "rationalism", nm: "Rationalism" },
    { l: "EA", slug: "effective-altruism", nm: "Effective Altruism" },
    { l: "L", slug: "longtermism", nm: "Longtermism" }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(sel) { return document.querySelector(sel); }

  /* ---- title / meta ---- */
  document.title = D.name + " — The AI Cults";

  /* ---- letter strip ---- */
  var strip = $("#letterStrip");
  if (strip) {
    strip.innerHTML = LETTERS.map(function (x) {
      var active = x.slug === D.slug ? " active" : "";
      return '<a class="ideo-tile' + active + '" href="' + x.slug + '.html" title="' + x.nm + '">' +
        '<span class="ideo-tile__l">' + x.l + "</span>" +
        '<span class="ideo-tile__nm">' + x.nm + "</span></a>";
    }).join("");
  }

  /* ---- hero ---- */
  $("#heroLetter").textContent = D.letter;
  $("#heroName").textContent = D.name;
  var mmt = $("#mmModalTitle"); if (mmt) mmt.textContent = D.name + " — connection network";
  $("#heroTagline").textContent = D.tagline;
  $("#heroDefn").textContent = D.defn;
  $("#heroSummary").textContent = D.summary;

  /* ---- helper: hide a section if no data ---- */
  function sectionFor(id) { var el = $("#" + id); return el ? el.closest("section") || el : null; }
  function hide(id) { var s = sectionFor(id); if (s) s.style.display = "none"; }

  /* ---- overview prose ---- */
  if (D.overview && D.overview.length) {
    $("#overview").innerHTML = D.overview.map(function (b) {
      return '<div class="prose__block reveal"><h3>' + esc(b.heading) + "</h3>" + b.body + "</div>";
    }).join("");
  } else hide("overview");

  /* ---- tenets ---- */
  if (D.tenets && D.tenets.length) {
    $("#tenets").innerHTML = D.tenets.map(function (t, i) {
      var n = ("0" + (i + 1)).slice(-2);
      return '<div class="tenet reveal"><span class="tenet__n">' + n + '</span><h3>' + esc(t.title) + "</h3><p>" + esc(t.body) + "</p></div>";
    }).join("");
  } else hide("tenets");

  /* ---- concepts glossary ---- */
  if (D.concepts && D.concepts.length) {
    $("#concepts").innerHTML = D.concepts.map(function (c) {
      return '<div class="gloss__item reveal"><div class="gloss__term">' + esc(c.term) + '</div><div class="gloss__def">' + esc(c.def) + "</div></div>";
    }).join("");
  } else hide("concepts");

  /* ---- timeline ---- */
  $("#timeline").innerHTML = D.timeline.map(function (t) {
    return '<div class="tl-item reveal"><div class="tl-year">' + esc(t.year) + '</div>' +
      '<div class="tl-title">' + esc(t.title) + '</div>' +
      '<div class="tl-body">' + t.body + "</div></div>";
  }).join("");

  /* ---- figures ---- */
  $("#figgrid").innerHTML = D.figures.map(function (f) {
    var initials = f.name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("");
    var photo = '<img src="../assets/img/figures/' + f.slug + '.jpg" alt="' + esc(f.name) +
      '" loading="lazy" onerror="this.parentNode.innerHTML=\'<div class=&quot;figcard__mono&quot;>' + esc(initials) + '</div>\'">';
    var wiki = f.wiki ? '<a class="figcard__wiki" href="' + f.wiki + '" target="_blank" rel="noopener">Wikipedia →</a>' : "";
    return '<article class="figcard reveal">' +
      '<div class="figcard__photo">' + photo + "</div>" +
      '<div class="figcard__body">' +
        '<span class="figcard__role">' + esc(f.role) + "</span>" +
        '<h3 class="figcard__name">' + esc(f.name) + "</h3>" +
        '<span class="figcard__years">' + esc(f.years) + "</span>" +
        '<p class="figcard__note">' + esc(f.note) + "</p>" + wiki +
      "</div></article>";
  }).join("");

  /* ---- key texts ---- */
  if (D.texts && D.texts.length) {
    $("#texts").innerHTML = D.texts.map(function (t) {
      var btn = t.url ? '<a class="textrow__read" href="' + t.url + '" target="_blank" rel="noopener noreferrer">Read <span>↗</span></a>' : "";
      return '<div class="textrow reveal"><div class="textrow__main">' +
        "<h3>" + esc(t.title) + '</h3><span class="by">' + esc(t.author) + "</span>" +
        "<p>" + esc(t.note) + "</p>" + btn + "</div>" +
        '<div class="textrow__yr">' + esc(t.year) + "</div></div>";
    }).join("");
  } else hide("texts");

  /* ---- pull quotes ---- */
  if (D.quotes && D.quotes.length) {
    $("#quotes").innerHTML = D.quotes.map(function (q) {
      return '<div class="pull reveal"><blockquote>' + esc(q.quote) + "</blockquote><cite>— " + esc(q.attrib) + "</cite></div>";
    }).join("");
  } else hide("quotes");

  /* ---- critique ---- */
  if (D.critique) {
    $("#critiqueBody").innerHTML = D.critique.body || "";
    $("#critiquePoints").innerHTML = (D.critique.points || []).map(function (p) {
      return '<div class="crit reveal"><h4>' + esc(p.h) + "</h4><p>" + esc(p.b) + "</p></div>";
    }).join("");
  } else hide("critiqueBody");

  /* ---- connections ---- */
  if (D.connections && D.connections.length) {
    $("#connections").innerHTML = D.connections.map(function (c) {
      return '<a class="conn reveal" href="' + c.slug + '.html">' +
        '<span class="conn__l">' + esc(c.letter) + "</span>" +
        '<span class="conn__nm">' + esc(c.name) + "</span>" +
        '<span class="conn__rel">' + esc(c.relation) + "</span>" +
        '<span class="conn__go">Explore →</span></a>';
    }).join("");
  } else hide("connections");

  /* ---- sources / citations ---- */
  if (D.sources && D.sources.length) {
    $("#sources").innerHTML = D.sources.map(function (s, i) {
      var n = ("0" + (i + 1)).slice(-2);
      var host = s.url ? s.url.replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "") : "";
      var link = s.url ? '<a class="ref__link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.title) + " <span>↗</span></a>" : esc(s.title);
      return '<li class="ref"><span class="ref__n">' + n + "</span>" +
        '<div class="ref__body">' + link +
        '<span class="ref__src">' + esc(s.source || host) + "</span></div></li>";
    }).join("");
  } else hide("sources");

  /* =========================================================
     MINDMAP — D3 force graph (inline + fullscreen popout)
     ========================================================= */
  function buildGraph(svgEl, data, w, h) {
    var d3v = window.d3;
    if (!d3v) return null;
    var svg = d3v.select(svgEl);
    svg.selectAll("*").remove();
    svg.attr("viewBox", [0, 0, w, h]);
    var g = svg.append("g");

    var zoom = d3v.zoom().scaleExtent([0.3, 4]).on("zoom", function (e) { g.attr("transform", e.transform); });
    svg.call(zoom);

    // clone so inline + modal sims don't share mutated objects
    var nodes = data.nodes.map(function (n) { return Object.assign({}, n); });
    var links = data.links.map(function (l) { return Object.assign({}, l); });

    var sim = d3v.forceSimulation(nodes)
      .force("link", d3v.forceLink(links).id(function (d) { return d.id; }).distance(function (d) {
        return d.target.type === "core" || d.source.type === "core" ? 90 : 130; }).strength(0.5))
      .force("charge", d3v.forceManyBody().strength(-340))
      .force("center", d3v.forceCenter(w / 2, h / 2))
      .force("collide", d3v.forceCollide().radius(34));

    var link = g.append("g").selectAll("line").data(links).join("line").attr("class", "mm-link");

    var node = g.append("g").selectAll("g").data(nodes).join("g")
      .attr("class", function (d) { return "mm-node " + d.type; })
      .call(d3v.drag()
        .on("start", function (e, d) { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", function (e, d) { d.fx = e.x; d.fy = e.y; })
        .on("end", function (e, d) { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

    node.append("circle").attr("r", function (d) {
      return d.type === "core" ? 16 : d.type === "ideology" ? 9 : 7; });
    node.append("text").attr("x", function (d) { return d.type === "core" ? 0 : 11; })
      .attr("y", function (d) { return d.type === "core" ? 30 : 3; })
      .attr("text-anchor", function (d) { return d.type === "core" ? "middle" : "start"; })
      .text(function (d) { return d.id; });

    // hover highlight neighborhood
    var linkedTo = {};
    links.forEach(function (l) {
      var s = l.source.id || l.source, t = l.target.id || l.target;
      (linkedTo[s] = linkedTo[s] || {})[t] = 1;
      (linkedTo[t] = linkedTo[t] || {})[s] = 1;
    });
    node.on("mouseenter", function (e, d) {
      node.classed("dim", function (o) { return o.id !== d.id && !(linkedTo[d.id] && linkedTo[d.id][o.id]); });
      link.classed("dim", function (o) { return (o.source.id !== d.id) && (o.target.id !== d.id); });
    }).on("mouseleave", function () {
      node.classed("dim", false); link.classed("dim", false);
    });

    sim.on("tick", function () {
      link.attr("x1", function (d) { return d.source.x; }).attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; }).attr("y2", function (d) { return d.target.y; });
      node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
    });
    return { sim: sim, svg: svg, zoom: zoom };
  }

  function initMindmaps() {
    var inlineSvg = $("#mmInline");
    var rect = inlineSvg.getBoundingClientRect();
    buildGraph(inlineSvg, D.graph, rect.width || 1000, 520);

    var modal = $("#mmModal"), modalSvg = $("#mmModalSvg"), built = false;
    $("#mmPopout").addEventListener("click", function () {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      if (!built) { buildGraph(modalSvg, D.graph, window.innerWidth, window.innerHeight); built = true; }
    });
    function close() { modal.classList.remove("open"); document.body.style.overflow = ""; }
    $("#mmClose").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    // optional 3D popout
    var t3 = $("#mm3d");
    if (t3 && D.threed) { t3.href = D.threed; t3.style.display = ""; }
  }

  if (window.d3) initMindmaps();
  else { var s = $("#d3script"); if (s) s.addEventListener("load", initMindmaps); }

  /* ---- prev / next ---- */
  if (D.prev) { $("#prevLink").href = D.prev.slug + ".html"; $("#prevName").textContent = D.prev.name; }
  if (D.next) { $("#nextLink").href = D.next.slug + ".html"; $("#nextName").textContent = D.next.name; }

  /* ---- reveal-on-scroll (reuse pattern) ---- */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  document.querySelectorAll(".reveal").forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); });

  /* ---- nav scroll shadow ---- */
  var nav = $("#nav");
  if (nav) { var f = function () { nav.classList.toggle("scrolled", window.scrollY > 24); };
    window.addEventListener("scroll", f, { passive: true }); f(); }

  /* ---- all external links open in a new tab ---- */
  forceExternalLinksNewTab();
})();

/* shared: any http(s) link not pointing at this host opens in a new tab */
function forceExternalLinksNewTab() {
  var host = window.location.hostname;
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    var isExternal = !host || a.hostname !== host;
    if (isExternal) {
      a.setAttribute("target", "_blank");
      var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (rel.indexOf("noopener") < 0) rel.push("noopener");
      if (rel.indexOf("noreferrer") < 0) rel.push("noreferrer");
      a.setAttribute("rel", rel.join(" "));
    }
  });
}

/* THE AI CULTS — dossier renderer
   Generic page engine. Requires window.DOSSIER. D3 optional (only for graph sections).
   Pages live at site root, so asset paths are root-relative ("assets/...").
   DOSSIER = {
     title, eyebrow, summary,
     sections: [ {type, ...} ],   // types below
     sources: [ {title, source, url} ],
     related: [ {href, label, kicker} ]
   }
   Section types:
     prose    {heading, intro?, blocks:[htmlString]}
     timeline {heading, intro?, items:[{year,title,body}]}
     figures  {heading, intro?, items:[{slug,name,role,years,note,wiki}]}
     cards    {heading, intro?, items:[{kicker?,title,body,href?}]}
     mapping  {heading, intro?, items:[{dt,dd}]}
     quote    {quote, attrib}
     graph    {heading, intro?, nodes:[{id,type}], links:[{source,target}], title?}
   Each section may set bg:"alt" and divider:true.
*/
(function () {
  "use strict";
  var D = window.DOSSIER;
  if (!D) return;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function $(s){return document.querySelector(s);}

  document.title = D.title + " — The AI Cults";
  if ($("#dEyebrow")) $("#dEyebrow").textContent = D.eyebrow || "";
  if ($("#dTitle")) $("#dTitle").textContent = D.title || "";
  if ($("#dSummary")) $("#dSummary").innerHTML = D.summary || "";

  var graphsToBuild = [];

  function head(s){
    if (!s.heading) return "";
    var intro = s.intro ? "<p>" + s.intro + "</p>" : "";
    return '<div class="section-head reveal"><span class="eyebrow">' + esc(s.kicker || s.heading) + "</span>" +
      (s.title2 ? "<h2>" + esc(s.title2) + "</h2>" : "<h2>" + esc(s.heading) + "</h2>") + intro + "</div>";
  }

  function renderSection(s, idx) {
    var inner = "";
    if (s.type === "prose") {
      inner = head(s) + '<div class="prose">' + (s.blocks || []).map(function (b) {
        return '<div class="prose__block reveal">' + b + "</div>"; }).join("") + "</div>";
    } else if (s.type === "timeline") {
      inner = head(s) + '<div class="timeline">' + (s.items || []).map(function (t) {
        return '<div class="tl-item reveal"><div class="tl-year">' + esc(t.year) + '</div><div class="tl-title">' +
          esc(t.title) + '</div><div class="tl-body">' + t.body + "</div></div>"; }).join("") + "</div>";
    } else if (s.type === "figures") {
      inner = head(s) + '<div class="figgrid">' + (s.items || []).map(function (f) {
        var initials = f.name.split(/\s+/).map(function (w){return w[0];}).slice(0,2).join("");
        var photo = '<img src="assets/img/figures/' + f.slug + '.jpg" alt="' + esc(f.name) +
          '" loading="lazy" onerror="this.parentNode.innerHTML=\'<div class=&quot;figcard__mono&quot;>' + esc(initials) + '</div>\'">';
        var wiki = f.wiki ? '<a class="figcard__wiki" href="' + f.wiki + '" target="_blank" rel="noopener noreferrer">Wikipedia →</a>' : "";
        return '<article class="figcard reveal"><div class="figcard__photo">' + photo + '</div><div class="figcard__body">' +
          '<span class="figcard__role">' + esc(f.role) + '</span><h3 class="figcard__name">' + esc(f.name) +
          '</h3><span class="figcard__years">' + esc(f.years || "") + '</span><p class="figcard__note">' + esc(f.note) + "</p>" + wiki + "</div></article>";
      }).join("") + "</div>";
    } else if (s.type === "cards") {
      inner = head(s) + '<div class="cards">' + (s.items || []).map(function (c) {
        var kicker = c.kicker ? '<span class="card__num">' + esc(c.kicker) + "</span>" : "";
        var go = c.href ? '<a class="card__go" href="' + c.href + '">' + esc(c.cta || "Read more") + "</a>" : "";
        var open = c.href ? '<a class="card reveal" href="' + c.href + '">' : '<div class="card reveal">';
        var close = c.href ? "</a>" : "</div>";
        return open + kicker + "<h3>" + esc(c.title) + "</h3><p>" + c.body + "</p>" + go + close;
      }).join("") + "</div>";
    } else if (s.type === "mapping") {
      inner = head(s) + '<dl class="relmap reveal">' + (s.items || []).map(function (m) {
        return '<div class="rel"><dt>' + esc(m.dt) + "</dt><dd>" + esc(m.dd) + "</dd></div>"; }).join("") + "</dl>";
    } else if (s.type === "quote") {
      inner = '<div class="bigquote reveal"><blockquote>' + s.quote + "</blockquote><cite>" + esc(s.attrib) + "</cite></div>";
    } else if (s.type === "graph") {
      var gid = "mm" + idx;
      graphsToBuild.push({ gid: gid, data: { nodes: s.nodes, links: s.links }, title: s.title || s.heading });
      inner = head(s) +
        '<div class="mindmap-wrap reveal"><div class="mm-actions"><button class="mm-btn" data-pop="' + gid + '">⤢ Pop out</button></div>' +
        '<svg id="' + gid + '" aria-label="Network graph"></svg><span class="mm-hint">drag · hover · scroll to zoom</span></div>';
    }
    var cls = "section-pad" + (s.bg === "alt" ? " sec-alt" : "");
    var divider = s.divider ? '<hr class="divider">' : "";
    return divider + '<section class="' + cls + '"><div class="wrap">' + inner + "</div></section>";
  }

  var html = (D.sections || []).map(renderSection).join("");

  // sources
  if (D.sources && D.sources.length) {
    html += '<hr class="divider"><section class="section-pad"><div class="wrap">' +
      '<div class="section-head reveal"><span class="eyebrow">Sources</span><h2>Citations &amp; further reading</h2>' +
      '<p>Documents and reporting used on this page. See the full <a href="references.html">References library →</a>.</p></div><ol class="reflist">' +
      D.sources.map(function (s, i) {
        var n = ("0" + (i + 1)).slice(-2);
        var link = s.url ? '<a class="ref__link" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.title) + ' <span>↗</span></a>' : esc(s.title);
        return '<li class="ref"><span class="ref__n">' + n + '</span><div class="ref__body">' + link + '<span class="ref__src">' + esc(s.source || "") + "</span></div></li>";
      }).join("") + "</ol></div></section>";
  }

  // related
  if (D.related && D.related.length) {
    html += '<nav class="ideo-nav">' + D.related.map(function (r, i) {
      var cls = i === D.related.length - 1 && D.related.length > 1 ? "next" : "";
      return '<a class="' + cls + '" href="' + r.href + '"><span class="dir">' + esc(r.kicker || "Related") + '</span><div class="nm">' + esc(r.label) + "</div></a>";
    }).join("") + "</nav>";
  }

  $("#dRoot").innerHTML = html;

  /* ---- D3 graphs (same builder as ideology pages) ---- */
  function buildGraph(svgEl, data, w, h) {
    var d3v = window.d3; if (!d3v) return;
    var svg = d3v.select(svgEl); svg.selectAll("*").remove(); svg.attr("viewBox",[0,0,w,h]);
    var g = svg.append("g");
    svg.call(d3v.zoom().scaleExtent([0.3,4]).on("zoom",function(e){g.attr("transform",e.transform);}));
    var nodes = data.nodes.map(function(n){return Object.assign({},n);});
    var links = data.links.map(function(l){return Object.assign({},l);});
    var sim = d3v.forceSimulation(nodes)
      .force("link", d3v.forceLink(links).id(function(d){return d.id;}).distance(function(d){return d.target.type==="core"||d.source.type==="core"?90:130;}).strength(0.5))
      .force("charge", d3v.forceManyBody().strength(-340))
      .force("center", d3v.forceCenter(w/2,h/2))
      .force("collide", d3v.forceCollide().radius(34));
    var link = g.append("g").selectAll("line").data(links).join("line").attr("class","mm-link");
    var node = g.append("g").selectAll("g").data(nodes).join("g").attr("class",function(d){return "mm-node "+d.type;})
      .call(d3v.drag()
        .on("start",function(e,d){if(!e.active)sim.alphaTarget(0.3).restart();d.fx=d.x;d.fy=d.y;})
        .on("drag",function(e,d){d.fx=e.x;d.fy=e.y;})
        .on("end",function(e,d){if(!e.active)sim.alphaTarget(0);d.fx=null;d.fy=null;}));
    node.append("circle").attr("r",function(d){return d.type==="core"?16:d.type==="ideology"?9:7;});
    node.append("text").attr("x",function(d){return d.type==="core"?0:11;}).attr("y",function(d){return d.type==="core"?30:3;})
      .attr("text-anchor",function(d){return d.type==="core"?"middle":"start";}).text(function(d){return d.id;});
    var linkedTo={}; links.forEach(function(l){var s=l.source.id||l.source,t=l.target.id||l.target;(linkedTo[s]=linkedTo[s]||{})[t]=1;(linkedTo[t]=linkedTo[t]||{})[s]=1;});
    node.on("mouseenter",function(e,d){node.classed("dim",function(o){return o.id!==d.id&&!(linkedTo[d.id]&&linkedTo[d.id][o.id]);});link.classed("dim",function(o){return o.source.id!==d.id&&o.target.id!==d.id;});})
        .on("mouseleave",function(){node.classed("dim",false);link.classed("dim",false);});
    sim.on("tick",function(){
      link.attr("x1",function(d){return d.source.x;}).attr("y1",function(d){return d.source.y;}).attr("x2",function(d){return d.target.x;}).attr("y2",function(d){return d.target.y;});
      node.attr("transform",function(d){return "translate("+d.x+","+d.y+")";});
    });
  }

  function initGraphs() {
    graphsToBuild.forEach(function (gr) {
      var el = document.getElementById(gr.gid);
      if (!el) return;
      var r = el.getBoundingClientRect();
      buildGraph(el, gr.data, r.width || 1000, 520);
    });
    var modal = $("#mmModal"), modalSvg = $("#mmModalSvg"), builtFor = null;
    document.querySelectorAll("[data-pop]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var gid = btn.getAttribute("data-pop");
        var gr = graphsToBuild.filter(function (g) { return g.gid === gid; })[0];
        modal.classList.add("open"); document.body.style.overflow = "hidden";
        if ($("#mmModalTitle")) $("#mmModalTitle").textContent = (gr && gr.title ? gr.title : "Network") + " — network";
        if (builtFor !== gid) { buildGraph(modalSvg, gr.data, window.innerWidth, window.innerHeight); builtFor = gid; }
      });
    });
    if (modal) {
      function close(){ modal.classList.remove("open"); document.body.style.overflow=""; }
      if ($("#mmClose")) $("#mmClose").addEventListener("click", close);
      document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
    }
  }
  if (graphsToBuild.length) { if (window.d3) initGraphs(); else { var sc=$("#d3script"); if(sc) sc.addEventListener("load", initGraphs); } }

  /* ---- shared bits: reveal, nav, external links ---- */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);}});},{threshold:0.1,rootMargin:"0px 0px -6% 0px"}) : null;
  document.querySelectorAll(".reveal").forEach(function(el){io?io.observe(el):el.classList.add("in");});
  var nav = $("#nav");
  if (nav){ var f=function(){nav.classList.toggle("scrolled",window.scrollY>24);}; window.addEventListener("scroll",f,{passive:true}); f(); }
  var tg = $("#navToggle"), lk = $("#navLinks");
  if (tg) tg.addEventListener("click", function(){ var o=lk.classList.toggle("open"); tg.textContent=o?"Close":"Menu"; });
  var b = document.querySelector(".foot__bar span"); if (b) b.textContent = b.textContent.replace("{year}", new Date().getFullYear());
  var host = window.location.hostname;
  document.querySelectorAll('a[href^="http"]').forEach(function(a){ if(!host||a.hostname!==host){a.target="_blank"; var rel=(a.getAttribute("rel")||"").split(/\s+/).filter(Boolean); if(rel.indexOf("noopener")<0)rel.push("noopener"); if(rel.indexOf("noreferrer")<0)rel.push("noreferrer"); a.setAttribute("rel",rel.join(" "));}});
})();

/* THE AI CULTS — global menu (shared across every page)
   Injects a uniform menu trigger + full-screen sitemap overlay.
   Handles the path prefix for pages inside /ideologies/. */
(function () {
  "use strict";
  // prefix: pages in /ideologies/ need "../" to reach root assets/pages
  var inSub = /\/ideologies\//.test(window.location.pathname);
  var P = inSub ? "../" : "";
  var here = window.location.pathname.split("/").pop() || "index.html";

  var SIGIL = '<svg class="sigil" viewBox="0 0 100 100" aria-hidden="true">' +
    '<polygon points="50,8 92,86 8,86" fill="none" stroke="#c8a34e" stroke-width="3"/>' +
    '<circle cx="50" cy="60" r="13" fill="none" stroke="#c8a34e" stroke-width="3"/>' +
    '<circle cx="50" cy="60" r="4" fill="#c8a34e"/>' +
    '<line x1="50" y1="8" x2="50" y2="47" stroke="#c8a34e" stroke-width="3"/></svg>';

  var groups = [
    { title: "The seven ideologies", links: [
      { ix: "T", label: "Transhumanism", href: "ideologies/transhumanism.html" },
      { ix: "E", label: "Extropianism", href: "ideologies/extropianism.html" },
      { ix: "S", label: "Singularitarianism", href: "ideologies/singularitarianism.html" },
      { ix: "C", label: "Cosmism", href: "ideologies/cosmism.html" },
      { ix: "R", label: "Rationalism", href: "ideologies/rationalism.html" },
      { ix: "EA", label: "Effective Altruism", href: "ideologies/effective-altruism.html" },
      { ix: "L", label: "Longtermism", href: "ideologies/longtermism.html" }
    ]},
    { title: "Dossiers", links: [
      { label: "The Genealogy", href: "genealogy.html" },
      { label: "The Religion", href: "the-religion.html" },
      { label: "The Money", href: "the-money.html" },
      { label: "The Israel Nexus", href: "israel-nexus.html" }
    ]},
    { title: "The site", links: [
      { label: "Home", href: "index.html" },
      { label: "References library", href: "references.html" },
      { label: "Legal", href: "legal.html" }
    ]}
  ];

  function abs(href) {
    // hash-only or already-correct → leave; otherwise prefix
    return P + href;
  }
  function isCurrent(href) {
    var file = href.split("#")[0].split("/").pop();
    return file === here && href.indexOf("#") < 0;
  }

  var groupsHtml = groups.map(function (g) {
    var items = g.links.map(function (l) {
      var ix = l.ix ? '<span class="ix">' + l.ix + "</span>" : "";
      var cur = isCurrent(l.href) ? " cur" : "";
      return '<li><a class="' + cur.trim() + '" href="' + abs(l.href) + '">' + ix + "<span>" + l.label + "</span></a></li>";
    }).join("");
    return '<div class="gmenu__group"><h4>' + g.title + '</h4><ul>' + items + "</ul></div>";
  }).join("");

  var overlay = document.createElement("div");
  overlay.className = "gmenu";
  overlay.id = "gmenu";
  overlay.innerHTML =
    '<div class="gmenu__bar">' +
      '<a class="gmenu__brand" href="' + abs("index.html") + '">' + SIGIL + '<span>The&nbsp;<b>AI&nbsp;Cults</b></span></a>' +
      '<button class="gmenu__close" id="gmenuClose">✕ Close</button>' +
    "</div>" +
    '<div class="gmenu__inner">' + groupsHtml + "</div>";
  document.body.appendChild(overlay);

  // trigger in the nav (replaces the per-page quick links for a uniform global menu)
  var nav = document.getElementById("nav") || document.querySelector(".nav");
  if (nav) {
    var oldLinks = nav.querySelector(".nav__links"); if (oldLinks) oldLinks.style.display = "none";
    var oldToggle = nav.querySelector(".nav__toggle"); if (oldToggle) oldToggle.style.display = "none";
    var trigger = document.createElement("button");
    trigger.className = "gmenu-trigger";
    trigger.id = "gmenuTrigger";
    trigger.setAttribute("aria-label", "Open menu");
    trigger.innerHTML = '<span class="bars"><i></i><i></i><i></i></span><span>Menu</span>';
    nav.appendChild(trigger);
    trigger.addEventListener("click", open);
  }

  function open() { overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
  function close() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
  document.getElementById("gmenuClose").addEventListener("click", close);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  /* ---- footer social links (injected on every page) ---- */
  var SOCIAL = [
    { label: "YouTube", href: "https://www.youtube.com/@kevin_is_a_human",
      icon: '<path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.53A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12C4.5 20.45 12 20.45 12 20.45s7.5 0 9.39-.53A3 3 0 0 0 23.5 17.8 31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12z"/>' },
    { label: "Twitch", href: "https://www.twitch.tv/kevin_is_a_human",
      icon: '<path d="M11.64 5.93h1.43v4.29h-1.43m3.93-4.29h1.43v4.29h-1.43M7 2 3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"/>' },
    { label: "Kick", href: "https://kick.com/kevin-is-a-human",
      icon: '<text x="12" y="18.5" text-anchor="middle" font-family="monospace" font-weight="700" font-size="20">K</text>' },
    { label: "Instagram", href: "https://www.instagram.com/kevin_is_a_human/",
      icon: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.4-.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>' },
    { label: "X", href: "https://x.com/Kevin_is_human",
      icon: '<path d="M18.9 1.6h3.4l-7.4 8.5L24 22.4h-6.8l-5.3-7-6.1 7H1.4l8-9.1L0 1.6h7l4.8 6.4zM17.7 20.4h1.9L6.4 3.5H4.4z"/>' }
  ];
  function makeSocial() {
    var soc = document.createElement("div");
    soc.className = "foot__social";
    soc.innerHTML = SOCIAL.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener noreferrer" aria-label="' + s.label + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true">' + s.icon + "</svg><span>" + s.label + "</span></a>";
    }).join("");
    return soc;
  }
  // footer of every page (below the copyright bar)
  var footer = document.querySelector("footer.foot .wrap") || document.querySelector("footer.foot");
  if (footer) footer.appendChild(makeSocial());
  // bottom of the global menu overlay
  overlay.appendChild(makeSocial());

  // privacy-friendly analytics (GoatCounter) — injected on every page before </body>.
  // Set GOATCOUNTER_CODE to turn it on; the privacy note only shows when it's active.
  var GOATCOUNTER_CODE = ""; // e.g. "theaicults" -> https://theaicults.goatcounter.com
  if (GOATCOUNTER_CODE) {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "//gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
    document.body.appendChild(gc);
    if (footer) {
      var note = document.createElement("p");
      note.className = "foot__privacy";
      note.textContent = "This site uses GoatCounter for anonymous, privacy-friendly analytics — no cookies, no personal data, no cross-site tracking.";
      footer.appendChild(note);
    }
  }
})();

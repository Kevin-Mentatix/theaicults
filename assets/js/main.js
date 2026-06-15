/* THE AI CULTS — interactions */
(function () {
  "use strict";

  // --- nav: shadow on scroll ---
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- mobile menu ---
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  // --- reveal on scroll ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (Math.min(i, 4) * 60) + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // --- video facade: load YouTube only on click ---
  document.querySelectorAll(".video-facade").forEach(function (vf) {
    vf.addEventListener("click", function () {
      var id = vf.getAttribute("data-yt");
      var ifr = document.createElement("iframe");
      ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      ifr.title = "Video player";
      ifr.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; web-share; fullscreen");
      ifr.setAttribute("allowfullscreen", "");
      vf.parentNode.replaceChild(ifr, vf);
    });
  });

  // --- current year in footer ---
  var bar = document.querySelector(".foot__bar span");
  if (bar) bar.textContent = bar.textContent.replace("{year}", new Date().getFullYear());

  // --- all external links open in a new tab ---
  var host = window.location.hostname;
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (!host || a.hostname !== host) {
      a.setAttribute("target", "_blank");
      var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (rel.indexOf("noopener") < 0) rel.push("noopener");
      if (rel.indexOf("noreferrer") < 0) rel.push("noreferrer");
      a.setAttribute("rel", rel.join(" "));
    }
  });
})();

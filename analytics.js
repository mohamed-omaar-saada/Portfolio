// Google Analytics 4 – loads ONLY after the visitor clicks "Accept".
(function () {
  var GA_ID = "G-3EW855C6XM";
  var KEY = "analytics-consent";

  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function write(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function lang() {
    var l = read("lang") || (navigator.language || "").slice(0, 2);
    return l === "de" ? "de" : "en";
  }

  var T = {
    en: {
      text: "I use Google Analytics to see how visitors use this site (usage statistics). Allow it?",
      yes: "Accept", no: "Decline", link: "Analytics settings"
    },
    de: {
      text: "Ich nutze Google Analytics, um zu sehen, wie Besucher diese Seite nutzen (Nutzungsstatistik). Erlauben?",
      yes: "Akzeptieren", no: "Ablehnen", link: "Analytics-Einstellungen"
    }
  };

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  function choose(v) {
    write(KEY, v);
    var b = document.getElementById("consent-banner");
    if (b) b.remove();
    if (v === "yes") loadGA();
    else if (window.__gaLoaded) location.reload();
  }

  function showBanner() {
    if (document.getElementById("consent-banner")) return;
    var t = T[lang()];
    var b = document.createElement("div");
    b.id = "consent-banner";
    b.setAttribute("role", "dialog");
    b.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;max-width:640px;margin:0 auto;z-index:99;" +
      "background:#12151c;color:#e6e8ee;border:1px solid #232835;border-radius:12px;padding:14px 16px;" +
      "font:14px/1.5 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);padding-bottom:max(14px,env(safe-area-inset-bottom))";
    var p = document.createElement("p");
    p.style.margin = "0 0 10px";
    p.textContent = t.text;
    function btn(label, v, primary) {
      var x = document.createElement("button");
      x.textContent = label;
      x.style.cssText = "cursor:pointer;font:inherit;border-radius:8px;padding:6px 14px;margin-right:8px;" +
        (primary ? "background:#5eead4;color:#0b0d12;border:0;font-weight:600" : "background:none;color:#e6e8ee;border:1px solid #232835");
      x.onclick = function () { choose(v); };
      return x;
    }
    b.append(p, btn(t.yes, "yes", true), btn(t.no, "no", false));
    document.body.appendChild(b);
  }

  function init() {
    var link = document.getElementById("consent-link");
    if (link) {
      link.textContent = T[lang()].link;
      link.onclick = function (e) { e.preventDefault(); showBanner(); };
    }
    var c = read(KEY);
    if (c === "yes") loadGA();
    else if (c !== "no") showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

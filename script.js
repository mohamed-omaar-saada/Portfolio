// 1) Put your GitHub username here to load your repos in the Apps tab
const GITHUB_USER = "mohamed-omaar-saada";

// 2) Tab switching
const buttons = document.querySelectorAll("#tabs button");
const sections = document.querySelectorAll("section");

function showTab(id) {
  if (![...sections].some(s => s.id === id)) id = "about";
  sections.forEach(s => s.classList.toggle("on", s.id === id));
  buttons.forEach(b => b.classList.toggle("on", b.dataset.tab === id));
  try { history.replaceState(null, "", "#" + id); } catch (e) {}
  window.scrollTo(0, 0);
}

buttons.forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
showTab(location.hash.slice(1) || "about");

// 3) Open / close a full article
const list = document.getElementById("article-list");
document.querySelectorAll("[data-open]").forEach(card => card.addEventListener("click", () => {
  list.hidden = true;
  document.getElementById(card.dataset.open).hidden = false;
  window.scrollTo(0, 0);
}));
document.querySelectorAll(".back").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".article-full").forEach(a => a.hidden = true);
  list.hidden = false;
}));

// 4) GitHub repos
if (GITHUB_USER) {
  fetch("https://api.github.com/users/" + GITHUB_USER + "/repos?sort=updated&per_page=20")
    .then(r => r.json())
    .then(repos => {
      const box = document.getElementById("repos");
      box.innerHTML = "";
      repos.filter(r => !r.fork).slice(0, 9).forEach(r => {
        const card = document.createElement("div");
        card.className = "card";
        const a = document.createElement("a");
        a.href = r.html_url;
        a.target = "_blank";
        a.rel = "noopener";
        const h = document.createElement("h3");
        h.textContent = r.name;
        const p = document.createElement("p");
        p.className = "muted";
        p.textContent = r.description || "No description yet.";
        const m = document.createElement("span");
        m.className = "meta";
        m.textContent = "★ " + r.stargazers_count + " · " + (r.language || "n/a");
        a.append(h, p, m);
        card.append(a);
        box.append(card);
      });
    })
    .catch(() => {});
}

document.getElementById("year").textContent = new Date().getFullYear();

// 5) Language switch (EN / DE) – German texts are in lang.js
function renderStudy(l) {
  const box = document.getElementById("study-grid");
  box.innerHTML = "";
  const i = l === "de" ? 1 : 0;
  STUDY.forEach(c => {
    const card = document.createElement("div");
    card.className = "card study";
    if (c.img) {
      const img = document.createElement("img");
      img.src = c.img;
      img.alt = c.h[i];
      img.loading = "lazy";
      card.append(img);
    }
    const h = document.createElement("h3");
    h.textContent = c.h[i];
    const ul = document.createElement("ul");
    c.items.forEach(it => {
      const li = document.createElement("li");
      li.textContent = it[i];
      ul.append(li);
    });
    card.append(h, ul);
    box.append(card);
  });
}

function applyLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.textContent;
    el.textContent = l === "de" ? (DE[el.dataset.i18n] || el.dataset.en) : el.dataset.en;
  });
  document.querySelectorAll(".article-note").forEach(n => n.hidden = l !== "de");
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  renderStudy(l);
  renderSkills(l);
  updateMeta(l);
  try { localStorage.setItem("lang", l); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
applyLang(savedLang || ((navigator.language || "").startsWith("de") ? "de" : "en"));

function renderSkills(l) {
  const box = document.getElementById("skills-grid");
  box.innerHTML = "";
  SKILLS.forEach(g => {
    const card = document.createElement("div");
    card.className = "card skill";
    const h = document.createElement("h3");
    h.textContent = g.h[l === "de" ? 1 : 0];
    const ul = document.createElement("ul");
    ul.className = "chips small";
    g.items.forEach(t => { const li = document.createElement("li"); li.textContent = t; ul.append(li); });
    card.append(h, ul);
    box.append(card);
  });
}

function updateMeta(l) {
  const d = document.querySelector('meta[name="description"]');
  if (!d.dataset.en) { d.dataset.en = d.content; document.documentElement.dataset.enTitle = document.title; }
  document.title = l === "de" ? DE.meta_title : document.documentElement.dataset.enTitle;
  d.content = l === "de" ? DE.meta_desc : d.dataset.en;
}

// 6) Optional contact button and CV download
const CONTACT_EMAIL = "work.mosaada@gmail.com";               // e.g. "name@example.com"
const CV_FILE = "Omaar-Saada-CV.pdf";   // put your PDF next to index.html
if (CONTACT_EMAIL) {
  const m = document.getElementById("mail-btn");
  m.href = "mailto:" + CONTACT_EMAIL;
  m.hidden = false;
}
fetch(CV_FILE, { method: "HEAD" })
  .then(r => { if (r.ok) { const b = document.getElementById("cv-btn"); b.href = CV_FILE; b.hidden = false; } })
  .catch(() => {});

// 1) Put your GitHub username here to load your repos in the Apps tab
const GITHUB_USER = "";

// 2) Tab switching
const buttons = document.querySelectorAll("#tabs button");
const sections = document.querySelectorAll("section");

function showTab(id) {
  if (![...sections].some(s => s.id === id)) id = "about";
  sections.forEach(s => s.classList.toggle("on", s.id === id));
  buttons.forEach(b => b.classList.toggle("on", b.dataset.tab === id));
  history.replaceState(null, "", "#" + id);
  window.scrollTo(0, 0);
}

buttons.forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
showTab(location.hash.slice(1) || "about");

// 3) Open / close the full article
const list = document.getElementById("article-list");
const full = document.getElementById("article-full");

document.getElementById("open-article").addEventListener("click", () => {
  list.hidden = true;
  full.hidden = false;
  window.scrollTo(0, 0);
});
document.getElementById("back").addEventListener("click", () => {
  full.hidden = true;
  list.hidden = false;
});

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

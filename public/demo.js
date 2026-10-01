// Free router demo — simulates model selection based on prompt characteristics
const modelMap = {
  "bug": ["Apodex 1.1 Mini", "LFM2.5 2.6B"],
  "fix": ["Apodex 1.1 Mini", "LFM2.5 2.6B"],
  "refactor": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
  "read": ["LFM2.5 2.6B", "Nemotron 3.5 Lightning"],
  "explain": ["LFM2.5 2.6B", "Nemotron 3.5 Lightning"],
  "css": ["Apodex 1.1 Mini", "LFM2.5 2.6B"],
  "animation": ["Apodex 1.1 Mini", "LFM2.5 2.6B"],
  "json": ["Nemotron 3.5 Lightning", "LFM2.5 2.6B"],
  "format": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
  "cli": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
  "api": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
  "generate": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
  "create": ["Nemotron 3.5 Lightning", "Apodex 1.1 Mini"],
};

window.handleDemo = function() {
  const input = (document.getElementById("task-input").value || "").toLowerCase();
  const out = document.getElementById("demo-output");
  let model = "Apodex 1.1 Mini";
  let reason = "General-purpose free-tier default.";
  for (const [kw, models] of Object.entries(modelMap)) {
    if (input.includes(kw)) { model = models[0]; reason = "Matched keyword: " + kw; break; }
  }
  out.innerHTML = '<span class="model-chip">' + model + '</span><p style="margin-top:0.5rem;font-size:0.9rem;color:var(--ink-muted)">' + reason + "</p>";
};

window.handleCalc = function(e) {
  e.preventDefault();
  const requests = parseFloat(document.getElementById("req-day").value) || 0;
  const tokens = parseFloat(document.getElementById("tok-req").value) || 0;
  const price = parseFloat(document.getElementById("price").value) || 0;
  const cost = (requests * 30 * tokens / 1000 * price).toFixed(2);
  document.getElementById("calc-output").innerHTML =
    '<p style="font-family:var(--font-serif);font-size:1.125rem;line-height:1.7;max-width:42ch;">Estimated monthly cost with a paid model: <strong>$' + cost + '</strong></p><p style="font-family:var(--font-serif);font-size:1.125rem;line-height:1.7;max-width:42ch;color:var(--ink-muted);">With the free router the cost is $0 — but remember rate limits still apply.</p>';
  return false;
};

// Theme toggle
window.toggleTheme = function() {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
};

// TOC scroll spy
window.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".toc-link");
  const sections = [];
  links.forEach(function(link) {
    const id = link.getAttribute("href").replace("#", "");
    const el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });

  function onScroll() {
    const scrollY = window.scrollY + 100;
    let active = sections[0];
    for (const s of sections) {
      if (s.el.offsetTop <= scrollY) active = s;
    }
    links.forEach(function(l) { l.classList.remove("active"); });
    if (active) active.link.classList.add("active");
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
});
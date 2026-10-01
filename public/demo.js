const modelMap = {
  "bug": ["Mistral 7B", "Gemma 2 9B"],
  "fix": ["Mistral 7B", "Gemma 2 9B"],
  "refactor": ["Qwen 2.5 7B", "Mistral 7B"],
  "read": ["Gemma 2 9B", "Qwen 2.5 7B"],
  "explain": ["Gemma 2 9B", "Qwen 2.5 7B"],
  "css": ["Mistral 7B", "Gemma 2 9B"],
  "animation": ["Mistral 7B", "Gemma 2 9B"],
  "json": ["Qwen 2.5 7B", "Gemma 2 9B"],
  "format": ["Qwen 2.5 7B", "Mistral 7B"],
  "cli": ["Qwen 2.5 7B", "Mistral 7B"],
  "api": ["Qwen 2.5 7B", "Mistral 7B"],
  "generate": ["Qwen 2.5 7B", "Mistral 7B"],
  "create": ["Qwen 2.5 7B", "Mistral 7B"],
};

window.handleDemo = function() {
  const input = (document.getElementById("task-input").value || "").toLowerCase();
  const out = document.getElementById("demo-output");
  let model = "Mistral 7B";
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
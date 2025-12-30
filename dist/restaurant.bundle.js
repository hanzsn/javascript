(() => {
  const e = document.querySelector("#content");
  e.className = "flex items-center h-[50vh] p-6 shadow-lg";
  const t = document.createElement("div");
  t.className = "flex flex-wrap max-w-2xl";
  const n = document.createElement("h1");
  (n.className = "text-6xl font-medium"),
    (n.textContent =
      "Every dish is crafted with passion and finest ingredients."),
    (n.textContent = n.textContent.toUpperCase()),
    t.appendChild(n),
    e.appendChild(t);
})();

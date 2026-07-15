const TASKS = [
  {
    n: "1",
    tag: "Layout & Type",
    title: "Portfolio Website",
    desc: "Personal landing page with hero, skills, project grid and contact section.",
    href: "portfolio/index.html"
  },
  {
    n: "2",
    tag: "UI Components",
    title: "E-commerce Product Page",
    desc: "Product gallery, variant picker, price panel and add-to-cart flow.",
    href: "ecommerce/index.html"
  },
  {
    n: "3",
    tag: "Responsive Nav",
    title: "Navigation Menu",
    desc: "Sticky top nav with dropdowns and a mobile hamburger drawer.",
    href: "navigation/index.html"
  },
  {
    n: "4",
    tag: "Forms & Validation",
    title: "HTML Form",
    desc: "Multi-field signup form with live client-side validation and states.",
    href: "form/index.html"
  },
  {
    n: "5",
    tag: "Content System",
    title: "Blogging Platform",
    desc: "Article list with category filters, tags and a reading-time index.",
    href: "blog/index.html"
  },
  {
    n: "6",
    tag: "JS Interaction",
    title: "Interactive Web App",
    desc: "A small DOM-driven app — tasks with add, complete and delete, no page reloads.",
    href: "interactive/index.html"
  }
];

function cardHTML(t){
  return `
  <a href="${t.href}" class="task-card" style="
      display:flex; flex-direction:column; justify-content:space-between;
      gap:1.4rem; padding:1.4rem 1.3rem; border-radius:8px;
      min-height:180px;">
    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
      <span style="font-size:.78rem; color:var(--muted);">${t.tag}</span>
      <span style="font-size:.85rem; color:var(--accent); font-weight:600;">0${t.n}</span>
    </div>
    <div>
      <h3 style="font-size:1.2rem; margin-bottom:.4rem;">${t.title}</h3>
      <p style="color:var(--text-soft); font-size:.92rem; margin:0;">${t.desc}</p>
    </div>
    <span style="font-size:.88rem; color:var(--accent); font-weight:500; display:inline-flex; align-items:center; gap:.3rem;">
      Open task <span aria-hidden="true">&rarr;</span>
    </span>
  </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("task-grid");
  if (!grid) return;
  grid.innerHTML = TASKS.map(cardHTML).join("");
});

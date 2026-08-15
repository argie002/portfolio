function renderProjects(projects) {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = projects.map(project => `
    <article class="record">
      <div class="record__thumb">
        <img src="${project.image}" alt="Screenshot of ${project.title}" loading="lazy"
             onerror="this.closest('.record__thumb').innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-family:var(--font-mono);font-size:12px;color:var(--color-ink-soft)\\'>Add screenshot</div>'">
      </div>
      <div class="record__body">
        <div class="record__top">
          <span class="record__id">${project.id}</span>
          <span class="record__status">✓ VERIFIED</span>
        </div>
        <h3 class="record__title">${project.title}</h3>
        <p class="record__desc">${project.description}</p>
        <div class="record__tags">
          ${project.tags.map(tag => `<span class="record__tag">${tag}</span>`).join("")}
        </div>
        <div class="record__links">
          <a href="${project.github}" target="_blank" rel="noopener">GitHub →</a>
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live Demo →</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

renderProjects(PROJECTS);

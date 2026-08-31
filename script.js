document.addEventListener("DOMContentLoaded", () => {
  // Keep the portfolio content aligned with the current SDE / AI resume.
  document.title = "Adarsh Mohan | Software + AI Engineer";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Adarsh Mohan portfolio - software engineering, agentic AI, full-stack healthcare systems, cloud infrastructure, graph systems, and applied ML."
    );
  }

  const heroLede = document.querySelector(".hero-lede");
  if (heroLede) {
    heroLede.textContent = "Software + AI engineer building production healthcare workflows, agentic systems, graph-based retrieval, and cloud infrastructure.";
  }

  const playerTitle = document.querySelector(".profile-player .player-body h2");
  const playerSubtitle = document.querySelector(".profile-player .player-body > p:not(.mix-label)");
  if (playerTitle) playerTitle.textContent = "Software + AI Engineer";
  if (playerSubtitle) playerSubtitle.textContent = "Full-stack systems • Agentic AI • Cloud";

  const aboutParagraphs = document.querySelectorAll("#about .section-copy > p");
  if (aboutParagraphs[0]) {
    aboutParagraphs[0].textContent = "I am a Master of Science in Computer Science student at Arizona State University, graduating in December 2026. I build software and AI systems across full-stack applications, agentic workflows, graph-based retrieval, cloud infrastructure, and applied machine learning.";
  }
  if (aboutParagraphs[1]) {
    aboutParagraphs[1].textContent = "At Foresight Industries, I work on production healthcare claims software spanning TypeScript/React interfaces, Node.js REST APIs, PostgreSQL, AWS, denial analytics, and LLM-assisted appeal workflows. Previously, I worked on data engineering at Genpact and AI/ML products at CasaMed.";
  }

  const statValues = document.querySelectorAll("#about .stat-row strong");
  const statLabels = document.querySelectorAll("#about .stat-row span");
  if (statValues[1]) statValues[1].textContent = "3.85/4";
  if (statValues[2]) statValues[2].textContent = "Software + AI";
  if (statLabels[2]) statLabels[2].textContent = "Full Stack, Agents, Cloud, Graphs";

  // Add the current Foresight experience before prior roles.
  const experienceList = document.querySelector(".experience-list");
  if (experienceList && !document.getElementById("foresight-experience")) {
    const foresight = document.createElement("article");
    foresight.id = "foresight-experience";
    foresight.className = "experience-item reveal";
    foresight.innerHTML = `
      <div class="track-number">01</div>
      <div>
        <p class="item-meta">May 2026 - Present</p>
        <h3>AI Engineering Intern - Foresight Industries Inc.</h3>
        <ul>
          <li>Delivered production medical-claims workflows with TypeScript, React, PostgreSQL, and AWS supporting 500+ claims, shipping changes through Agile sprints and Git/GitHub code reviews.</li>
          <li>Built an LLM-assisted denied-claim appeal workflow grounded in denial reasons, payer policies, and clinical evidence using Amazon Bedrock with strict guardrails to reduce unsupported output.</li>
          <li>Designed PostgreSQL-backed RESTful denial-trend APIs to surface emerging systemic patterns and help teams address root causes upstream.</li>
          <li>Architected a PHI-safe Node.js REST API and React/Tailwind CSS investigation UI spanning 7 claim stages and 6+ data sources.</li>
          <li>Engineered a verifiable MCG-to-DNF pipeline across 13 guideline sources, producing 12 decision trees with 15 automated tests, provenance, and quality checks.</li>
        </ul>
      </div>`;
    experienceList.prepend(foresight);

    experienceList.querySelectorAll(".track-number").forEach((number, index) => {
      number.textContent = String(index + 1).padStart(2, "0");
    });
  }

  // Feature MA-Rank near the top of the project playlist.
  const projectList = document.querySelector(".project-list");
  if (projectList && !document.getElementById("ma-rank-project")) {
    const maRank = document.createElement("article");
    maRank.id = "ma-rank-project";
    maRank.className = "project-card reveal";
    maRank.innerHTML = `
      <div class="project-media">
        <img src="assets/ma-rank-home.png" alt="MA-Rank recruiter-facing multi-agent resume screening application" loading="lazy"
          onload="this.nextElementSibling.style.display='none'"
          onerror="this.style.display='none'">
        <div style="display:flex;align-items:center;justify-content:center;min-height:220px;padding:2rem;text-align:center;opacity:.72;">MA-Rank app screenshot coming soon</div>
      </div>
      <div class="project-content">
        <p class="item-meta">Multi-agent recruiting • Neo4j • LangGraph</p>
        <h3>MA-Rank: Multi-Agent Resume Screening</h3>
        <p>Built an explainable recruiter-facing screening system that replaces keyword-only matching with structured JD-to-resume ranking, skill normalization, graph evidence, and multi-agent review.</p>
        <ul>
          <li>Orchestrated five agents to normalize resumes and job descriptions, write structured evidence to Neo4j, rank candidates, and flag uncertain results for review.</li>
          <li>Ranked 500 resumes across 1,534 jobs while surfacing matched and missing skills, scoring evidence, uncertainty, and human-review flags.</li>
          <li>Stress-tested ranking sensitivity: reducing skill coverage from 40% to 20% moved a candidate from rank 1 to rank 7 and raised uncertainty from medium to high.</li>
        </ul>
        <div class="project-links">
          <a href="https://ma-rank.streamlit.app" target="_blank" rel="noopener">Live App</a>
          <a href="https://github.com/adarshm0han/MA-Rank" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>`;

    const firstProject = projectList.querySelector(".project-card");
    if (firstProject) {
      firstProject.insertAdjacentElement("afterend", maRank);
    } else {
      projectList.appendChild(maRank);
    }
  }

  // Add the SDE / AI-specific resume while preserving the existing resume link.
  const heroActions = document.querySelector(".hero-actions");
  if (heroActions && !document.getElementById("sde-ai-resume-link")) {
    const resumeLink = document.createElement("a");
    resumeLink.id = "sde-ai-resume-link";
    resumeLink.className = "button secondary";
    resumeLink.href = "assets/Adarsh_Mohan_SDE_AI_Engineer_Resume.pdf";
    resumeLink.target = "_blank";
    resumeLink.rel = "noopener";
    resumeLink.textContent = "SDE / AI Resume";
    heroActions.appendChild(resumeLink);
  }

  const contactLinks = document.querySelector("#contact .contact-links");
  if (contactLinks && !document.getElementById("contact-sde-ai-resume")) {
    const contactResume = document.createElement("a");
    contactResume.id = "contact-sde-ai-resume";
    contactResume.href = "assets/Adarsh_Mohan_SDE_AI_Engineer_Resume.pdf";
    contactResume.target = "_blank";
    contactResume.rel = "noopener";
    contactResume.textContent = "SDE / AI Resume";
    contactLinks.appendChild(contactResume);
  }

  const contactCopy = document.querySelector("#contact .contact-inner > p:not(.eyebrow)");
  if (contactCopy) {
    contactCopy.textContent = "Open to software engineering, AI/ML, agentic systems, full-stack, cloud, and research-driven roles.";
  }

  // Bring the current production stack into the skills section without redesigning it.
  const skillGroups = [...document.querySelectorAll(".skill-group")];
  const addChips = (heading, chips) => {
    const group = skillGroups.find((item) => item.querySelector("h3")?.textContent.trim() === heading);
    const wrap = group?.querySelector(".skills-wrap");
    if (!wrap) return;
    chips.reverse().forEach(([mark, label]) => {
      if ([...wrap.querySelectorAll(".skill-chip")].some((chip) => chip.textContent.trim().endsWith(label))) return;
      const chip = document.createElement("span");
      chip.className = "skill-chip";
      chip.innerHTML = `<span class="skill-mark">${mark}</span>${label}`;
      wrap.prepend(chip);
    });
  };

  addChips("Languages", [["TS", "TypeScript"], ["JS", "JavaScript"]]);
  addChips("Cloud + Data", [["PG", "PostgreSQL"]]);
  addChips("GenAI + MLOps", [["BR", "Amazon Bedrock"], ["CC", "Claude Code"], ["RAG", "RAG"]]);

  const revealElements = document.querySelectorAll(".reveal");
  const navbar = document.getElementById("navbar");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".menu a");
  const sections = [...document.querySelectorAll("main section[id]")];

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => revealObserver.observe(element));

  const updateNavState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);

    const visibleSections = sections.filter((section) => section.getBoundingClientRect().top <= 120);
    const current = visibleSections[visibleSections.length - 1];

    if (!current) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", updateNavState, { passive: true });
  updateNavState();

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

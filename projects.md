---
layout: page
title: Projects
description: Things I've built — open source, research, and side projects.
permalink: /projects/
---

<div class="projects-grid">

  <!-- Egg Price Vizz -->
  <a href="/projects/egg-price-vizz/" class="project-card project-card-banner">
    <div class="project-banner">
      <img src="/assets/img/egg_price.gif" alt="Egg Price Vizz" class="project-banner-gif" />
      <div class="project-banner-overlay">
        <span class="project-banner-label"><i class="fas fa-chart-line"></i> View Project</span>
      </div>
    </div>
    <div class="project-card-body-inner">
      <div class="project-icon"><i class="fas fa-egg"></i></div>
      <div class="project-title">Egg Price Vizz</div>
      <div class="project-desc">
        An interactive visualization tracking caged egg prices over time — built with Python and Plotly.
      </div>
      <div class="project-tags">
        <span class="project-tag">Python</span>
        <span class="project-tag">Plotly</span>
        <span class="project-tag">Data Viz</span>
      </div>
    </div>
  </a>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-icon"><i class="fas fa-brain"></i></div>
      <div class="project-links">
        <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank" aria-label="Live demo"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="project-title">Project One</div>
    <div class="project-desc">
      A brief description of this project. What does it do? What problem does it solve?
      Replace this with your real project details.
    </div>
    <div class="project-tags">
      <span class="project-tag">Python</span>
      <span class="project-tag">Machine Learning</span>
      <span class="project-tag">PyTorch</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-icon"><i class="fas fa-chart-pie"></i></div>
      <div class="project-links">
        <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
      </div>
    </div>
    <div class="project-title">Finance Dashboard</div>
    <div class="project-desc">
      An interactive dashboard for tracking portfolio performance, visualizing asset allocation,
      and monitoring market trends in real time.
    </div>
    <div class="project-tags">
      <span class="project-tag">React</span>
      <span class="project-tag">D3.js</span>
      <span class="project-tag">Finance</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card-header">
      <div class="project-icon"><i class="fas fa-code"></i></div>
      <div class="project-links">
        <a href="#" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank" aria-label="Live demo"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="project-title">Project Three</div>
    <div class="project-desc">
      Add your real project here. Each card supports a title, description, tech tags,
      and links to GitHub and/or a live demo.
    </div>
    <div class="project-tags">
      <span class="project-tag">JavaScript</span>
      <span class="project-tag">Node.js</span>
    </div>
  </div>

</div>

<p style="margin-top:2rem; font-size:0.85rem; color:var(--text-muted);">
  Edit <code>projects.md</code> to add your real projects.
</p>

<style>
  .project-card-banner {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }
  .project-banner {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    background: #0f172a;
  }
  .project-banner-gif {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease, opacity 0.4s ease;
    opacity: 0.9;
  }
  .project-card-banner:hover .project-banner-gif {
    transform: scale(1.04);
    opacity: 1;
  }
  .project-banner-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
    display: flex;
    align-items: flex-end;
    padding: 0.75rem 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .project-card-banner:hover .project-banner-overlay {
    opacity: 1;
  }
  .project-banner-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    background: var(--accent, #3b82f6);
    padding: 0.3rem 0.75rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .project-card-body-inner {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
</style>
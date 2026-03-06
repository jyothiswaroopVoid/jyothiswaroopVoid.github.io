---
layout: page
title: Finance
description: Financial analysis, notes, and market insights.
permalink: /finance/
---

<div class="finance-section">
  <div class="section-header">
    <div class="section-icon"><i class="fas fa-chart-bar"></i></div>
    <h2>Company Builds</h2>
  </div>

  <div class="company-builds-grid">

    <!-- Apple -->
    <div class="company-card">
      <div class="company-card-header" onclick="toggleCompanyCard(this)">
        <div class="company-card-identity">
          <div class="company-logo-wrap">
            <img src="https://logo.clearbit.com/apple.com" alt="Apple logo" class="company-logo" />
          </div>
          <div class="company-name-block">
            <span class="company-name">Apple</span>
            <span class="company-ticker">AAPL · Technology</span>
          </div>
        </div>
        <i class="fas fa-chevron-down company-arrow"></i>
      </div>
      <div class="company-card-body">
        <p class="company-description">Your Apple analysis description here. Summarize your thesis, key findings, or what makes this build interesting.</p>
        <div class="model-links">
          <a href="https://drive.google.com/file/d/1LoE5s5bVo-zFkZOkWouK_Prei_xYhVLm/view?usp=drive_link" target="_blank" class="model-link">
            <i class="fas fa-file-alt"></i>
            <span>Initial Review</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/d/15WkF9AdLIY-jTlYiCO13Uy-oGSgxyaOR/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-table"></i>
            <span>Comparables Model</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/d/170lZGx8ab11o1_uy4uB6FA5J3jlDuTmx/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-chart-line"></i>
            <span>Discounted Cash Flow</span>
          </a>
        </div>
        <div class="company-card-date">
          <i class="far fa-calendar-alt"></i>
          <span>Completed: Month DD, YYYY</span>
        </div>
      </div>
    </div>

    <!-- Amgen -->
    <div class="company-card">
      <div class="company-card-header" onclick="toggleCompanyCard(this)">
        <div class="company-card-identity">
          <div class="company-logo-wrap">
            <img src="https://logo.clearbit.com/amgen.com" alt="Amgen logo" class="company-logo" />
          </div>
          <div class="company-name-block">
            <span class="company-name">Amgen</span>
            <span class="company-ticker">AMGN · Biotech</span>
          </div>
        </div>
        <i class="fas fa-chevron-down company-arrow"></i>
      </div>
      <div class="company-card-body">
        <p class="company-description">Your Amgen analysis description here. Summarize your thesis, key findings, or what makes this build interesting.</p>
        <div class="model-links">
          <a href="https://docs.google.com/spreadsheets/d/170lZGx8ab11o1_uy4uB6FA5J3jlDuTmx/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-table"></i>
            <span>Comparables Model</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/d/16SlUQFpyFTCL0JI-XVxj4mVYMt_VLJFZ/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-chart-line"></i>
            <span>Discounted Cash Flow</span>
          </a>
        </div>
        <div class="company-card-date">
          <i class="far fa-calendar-alt"></i>
          <span>Completed: Month DD, YYYY</span>
        </div>
      </div>
    </div>

    <!-- Seagate -->
    <div class="company-card">
      <div class="company-card-header" onclick="toggleCompanyCard(this)">
        <div class="company-card-identity">
          <div class="company-logo-wrap">
            <img src="https://logo.clearbit.com/seagate.com" alt="Seagate logo" class="company-logo" />
          </div>
          <div class="company-name-block">
            <span class="company-name">Seagate</span>
            <span class="company-ticker">STX · Technology</span>
          </div>
        </div>
        <i class="fas fa-chevron-down company-arrow"></i>
      </div>
      <div class="company-card-body">
        <p class="company-description">Your Seagate analysis description here. Summarize your thesis, key findings, or what makes this build interesting.</p>
        <div class="model-links">
          <a href="https://drive.google.com/file/d/1ORZua0VhKqfJ6AuQS2KUuC6KqqhguaIU/view?usp=drive_link" target="_blank" class="model-link">
            <i class="fas fa-file-alt"></i>
            <span>Initial Review</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/d/19_cWlo3nW52ignuvveg6_XssBBnEWB8G/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-chart-line"></i>
            <span>Discounted Cash Flow</span>
          </a>
        </div>
        <div class="company-card-date">
          <i class="far fa-calendar-alt"></i>
          <span>Completed: Month DD, YYYY</span>
        </div>
      </div>
    </div>

  </div><!-- end .company-builds-grid -->
</div>

<div class="finance-section">
  <div class="section-header">
    <div class="section-icon"><i class="fas fa-sticky-note"></i></div>
    <h2>Finance Posts</h2>
  </div>

  {% assign finance_posts = site.posts | where_exp: 'p', 'p.categories contains "finance"' %}
  {% if finance_posts.size > 0 %}
    <div id="post-list">
      {% for post in finance_posts %}
      <article class="post-card">
        <a href="{{ post.url | relative_url }}" class="post-card-link">
          <div class="post-card-body">
            <h2 class="post-card-title">{{ post.title }}</h2>
            <p class="post-card-desc">{{ post.description | default: post.content | strip_html | truncate: 160 }}</p>
            <div class="post-card-meta">
              <span><i class="far fa-calendar-alt me-1"></i>{{ post.date | date: "%b %d, %Y" }}</span>
            </div>
          </div>
        </a>
      </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <i class="fas fa-chart-line"></i>
      <p>No finance posts yet. Add posts with <code>categories: [finance]</code>.</p>
    </div>
  {% endif %}
</div>

<!-- Company Card Toggle Script -->
<script>
  function toggleCompanyCard(header) {
    const card = header.closest('.company-card');
    const body = card.querySelector('.company-card-body');
    const arrow = header.querySelector('.company-arrow');
    const isOpen = card.classList.contains('open');

    if (isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0';
      });
      card.classList.remove('open');
      arrow.style.transform = 'rotate(0deg)';
    } else {
      card.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)';
      body.addEventListener('transitionend', () => {
        if (card.classList.contains('open')) body.style.maxHeight = 'none';
      }, { once: true });
    }
  }
</script>

<!-- Company Card Styles -->
<style>
  .company-builds-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 1rem;
  }

  @media (max-width: 900px) {
    .company-builds-grid {
      grid-template-columns: 1fr;
    }
  }

  .company-card {
    border: 1px solid var(--border-color, #e2e8f0);
    border-radius: 10px;
    overflow: hidden;
    background: var(--card-bg, #fff);
    transition: box-shadow 0.2s ease;
  }

  .company-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }

  .company-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.1rem;
    cursor: pointer;
    user-select: none;
  }

  .company-card-identity {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .company-logo-wrap {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid var(--border-color, #e2e8f0);
  }

  .company-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .company-name-block {
    display: flex;
    flex-direction: column;
  }

  .company-name {
    font-weight: 600;
    font-size: 0.95rem;
    line-height: 1.2;
    color: var(--text-primary, #1a202c);
  }

  .company-ticker {
    font-size: 0.72rem;
    color: var(--text-muted, #718096);
    letter-spacing: 0.02em;
    margin-top: 1px;
  }

  .company-arrow {
    font-size: 0.75rem;
    color: var(--text-muted, #718096);
    transition: transform 0.25s ease;
  }

  .company-card.open .company-arrow {
    transform: rotate(180deg);
  }

  .company-card-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .company-card.open .company-card-body {
    max-height: none;
  }

  .company-card-body > * {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .company-description {
    font-size: 0.85rem;
    color: var(--text-secondary, #4a5568);
    line-height: 1.55;
    padding-top: 0.1rem;
    padding-bottom: 0.75rem;
    border-top: 1px solid var(--border-color, #e2e8f0);
    margin: 0;
  }

  .model-links {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding-bottom: 0.85rem;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .model-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 0.7rem;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--link-color, #2b6cb0);
    background: var(--link-bg, #ebf4ff);
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .model-link:hover {
    background: var(--link-hover-bg, #bee3f8);
    color: var(--link-hover-color, #2c5282);
    text-decoration: none;
  }

  .model-link i {
    font-size: 0.78rem;
    width: 14px;
    text-align: center;
    flex-shrink: 0;
  }

  .company-card-date {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    color: var(--text-muted, #718096);
    padding: 0.6rem 1.1rem;
    border-top: 1px solid var(--border-color, #e2e8f0);
    background: var(--subtle-bg, #f7fafc);
  }

  .company-card-date i {
    font-size: 0.7rem;
  }
</style>
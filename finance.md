---
layout: page
title: Finance
description: Financial models, notes, and my thoughts on the market.
permalink: /finance/
---

<div class="finance-section">
  <div class="section-header">
    <div class="section-icon"><i class="fas fa-chart-bar"></i></div>
    <h2>Company Builds</h2>
  </div>

  <!-- Apple -->
  <div class="company-card">
    <div class="company-card-header" onclick="toggleCompanyCard(this)">
      <div class="company-card-identity">
        <span class="company-name">Apple</span>
        <span class="company-ticker">AAPL · Technology</span>
      </div>
      <i class="fas fa-chevron-down company-arrow"></i>
    </div>
    <div class="company-card-body">
      <div class="company-card-content">
        <div class="company-logo-wrap">
          <img src="/assets/img/apple_logo.png" alt="Apple logo" class="company-logo" />
        </div>
        <p class="company-description">This was one of my first financial models. The DCF is done quarterly (3Y) and projections are forcasted out for the next 5Y (2Y being quarterly). So it was a big build for my first one, learnt a lot with this.</p>
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
          <span>Completed: Feb 17, 20220</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Amgen -->
  <div class="company-card">
    <div class="company-card-header" onclick="toggleCompanyCard(this)">
      <div class="company-card-identity">
        <span class="company-name">Amgen</span>
        <span class="company-ticker">AMGN · Biotech</span>
      </div>
      <i class="fas fa-chevron-down company-arrow"></i>
    </div>
    <div class="company-card-body">
      <div class="company-card-content">
        <div class="company-logo-wrap">
          <img src="/assets/img/amgen_logo.png" alt="Amgen logo" class="company-logo" />
        </div>
        <p class="company-description"></p>
        <div class="model-links">
          <a href="https://docs.google.com/spreadsheets/d/16SlUQFpyFTCL0JI-XVxj4mVYMt_VLJFZ/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-table"></i>
            <span>Comparables Model</span>
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1G0H_PuTYLcTEWvo8sEC5he_8EF0z2UIz/edit?usp=drive_link&ouid=109362905389092203598&rtpof=true&sd=true" target="_blank" class="model-link">
            <i class="fas fa-chart-line"></i>
            <span>Discounted Cash Flow</span>
          </a>
        </div>
        <div class="company-card-date">
          <i class="far fa-calendar-alt"></i>
          <span>Completed: Apr 02, 2025</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Seagate -->
  <div class="company-card">
    <div class="company-card-header" onclick="toggleCompanyCard(this)">
      <div class="company-card-identity">
        <span class="company-name">Seagate</span>
        <span class="company-ticker">STX · Technology</span>
      </div>
      <i class="fas fa-chevron-down company-arrow"></i>
    </div>
    <div class="company-card-body">
      <div class="company-card-content">
        <div class="company-logo-wrap">
          <img src="/assets/img/seagate_logo.png" alt="Seagate logo" class="company-logo" />
        </div>
        <p class="company-description">The AI boom, and need for exponenetial compute increased demand within the data-storage industry making Seagate lucrative. The DCF for Seagate has an integrated revenue and cost model by each operating segment. (emmpasis on unit economics)</p>
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
          <span>Completed: Nov 17, 2025</span>
        </div>
      </div>
    </div>
  </div>

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

<!-- Company Card Script -->
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
  /* ── Light theme defaults ── */
  :root {
    --cc-bg:           #ffffff;
    --cc-border:       #e2e8f0;
    --cc-hover-shadow: rgba(0, 0, 0, 0.08);
    --cc-name:         #1a202c;
    --cc-ticker:       #718096;
    --cc-arrow:        #718096;
    --cc-desc:         #4a5568;
    --cc-divider:      #e2e8f0;
    --cc-date-bg:      #f7fafc;
    --cc-date-text:    #718096;
    --cc-link-color:   #2b6cb0;
    --cc-link-bg:      #ebf4ff;
    --cc-link-hover-bg:#bee3f8;
    --cc-link-hover:   #2c5282;
  }

  /* ── Dark theme overrides ── */
  [data-theme="dark"] {
    --cc-bg:           #1e2433;
    --cc-border:       #2d3748;
    --cc-hover-shadow: rgba(0, 0, 0, 0.35);
    --cc-name:         #f0f4f8;
    --cc-ticker:       #a0aec0;
    --cc-arrow:        #a0aec0;
    --cc-desc:         #cbd5e0;
    --cc-divider:      #2d3748;
    --cc-date-bg:      #171e2e;
    --cc-date-text:    #a0aec0;
    --cc-link-color:   #63b3ed;
    --cc-link-bg:      #1a2d45;
    --cc-link-hover-bg:#1e3a5f;
    --cc-link-hover:   #90cdf4;
  }

  /* ── Card shell ── */
  .company-card {
    border: 1px solid var(--cc-border);
    border-radius: 10px;
    overflow: hidden;
    background: var(--cc-bg);
    margin-bottom: 1rem;
    transition: box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .company-card:hover {
    box-shadow: 0 4px 16px var(--cc-hover-shadow);
  }

  /* ── Header row ── */
  .company-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    cursor: pointer;
    user-select: none;
  }

  .company-card-identity {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
  }

  .company-name {
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--cc-name);
    transition: color 0.2s ease;
  }

  .company-ticker {
    font-size: 0.72rem;
    color: var(--cc-ticker);
    letter-spacing: 0.02em;
    transition: color 0.2s ease;
  }

  .company-arrow {
    font-size: 0.75rem;
    color: var(--cc-arrow);
    transition: transform 0.25s ease, color 0.2s ease;
  }

  .company-card.open .company-arrow {
    transform: rotate(180deg);
  }

  /* ── Collapsible body ── */
  .company-card-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .company-card.open .company-card-body {
    max-height: none;
  }

  .company-card-content {
    border-top: 1px solid var(--cc-divider);
    padding: 1.1rem 1.25rem 0;
    transition: border-color 0.2s ease;
  }

  /* ── Logo: hidden until open ── */
  .company-logo-wrap {
    display: none;
    margin-bottom: 0.9rem;
  }

  .company-card.open .company-logo-wrap {
    display: block;
  }

  .company-logo {
    height: 36px;
    width: auto;
    object-fit: contain;
  }

  /* ── Description ── */
  .company-description {
    font-size: 0.85rem;
    color: var(--cc-desc);
    line-height: 1.55;
    margin: 0 0 0.85rem;
    transition: color 0.2s ease;
  }

  /* ── Model links ── */
  .model-links {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin-bottom: 0.85rem;
  }

  .model-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 0.75rem;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--cc-link-color);
    background: var(--cc-link-bg);
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .model-link:hover {
    background: var(--cc-link-hover-bg);
    color: var(--cc-link-hover);
    text-decoration: none;
  }

  .model-link i {
    font-size: 0.78rem;
    width: 14px;
    text-align: center;
    flex-shrink: 0;
  }

  /* ── Date footer ── */
  .company-card-date {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    color: var(--cc-date-text);
    background: var(--cc-date-bg);
    padding: 0.6rem 1.25rem;
    margin: 0 -1.25rem;
    border-top: 1px solid var(--cc-divider);
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  .company-card-date i {
    font-size: 0.7rem;
  }
</style>

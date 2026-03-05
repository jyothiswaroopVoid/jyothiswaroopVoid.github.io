---
layout: page
title: Finance
description: Financial analysis, notes, and market insights.
permalink: /finance/
---

<div class="finance-section">
  <div class="section-header">
    <div class="section-icon"><i class="fas fa-chart-bar"></i></div>
    <h2>Market Notes</h2>
  </div>

  <div class="collapsible-card open">
    <div class="collapsible-header">
      <h3>Portfolio Overview</h3>
      <i class="fas fa-chevron-down collapsible-arrow"></i>
    </div>
    <div class="collapsible-body">
      <div class="collapsible-content">
        <p>Write your portfolio overview here. You can describe your investment philosophy,
        asset allocation, and performance metrics.</p>
        <p>Edit this content in <code>finance.md</code>.</p>
      </div>
    </div>
  </div>

  <div class="collapsible-card">
    <div class="collapsible-header">
      <h3>Equity Research Notes</h3>
      <i class="fas fa-chevron-down collapsible-arrow"></i>
    </div>
    <div class="collapsible-body">
      <div class="collapsible-content">
        <p>Add your equity research notes here — stock analysis, valuation models, sector
        comparisons, and thesis write-ups.</p>
      </div>
    </div>
  </div>

  <div class="collapsible-card">
    <div class="collapsible-header">
      <h3>Reading List</h3>
      <i class="fas fa-chevron-down collapsible-arrow"></i>
    </div>
    <div class="collapsible-body">
      <div class="collapsible-content">
        <p>Books, papers, and articles you're reading or recommend.</p>
        <ul>
          <li><em>The Intelligent Investor</em> — Benjamin Graham</li>
          <li><em>Security Analysis</em> — Graham & Dodd</li>
          <li><em>A Random Walk Down Wall Street</em> — Burton Malkiel</li>
        </ul>
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

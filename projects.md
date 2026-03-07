---
layout: page
title: Projects
description: Things I've built — open source, research, and side projects.
permalink: /projects/
---

<div class="projects-grid">

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
      Add your real project here.
    </div>
    <div class="project-tags">
      <span class="project-tag">JavaScript</span>
      <span class="project-tag">Node.js</span>
    </div>
  </div>

</div>

<div class="finance-section" style="margin-top: 2.5rem;">
  <div class="section-header">
    <div class="section-icon"><i class="fas fa-sticky-note"></i></div>
    <h2>Project Posts</h2>
  </div>

  <div id="post-list">
    {% assign project_posts = site.posts | where_exp: 'p', 'p.permalink contains "/projects/"' %}
    {% for post in project_posts %}
    <article class="post-card">
      <a href="{{ post.url | relative_url }}" class="post-card-link">
        {% if post.gif or post.image %}
        <div class="post-card-media">
          <img src="{{ post.gif | default: post.image }}" alt="{{ post.title }}" />
        </div>
        {% endif %}
        <div class="post-card-body">
          <h2 class="post-card-title">{{ post.title }}</h2>
          {% if post.description %}
          <p class="post-card-desc">{{ post.description }}</p>
          {% else %}
          <p class="post-card-desc">{{ post.content | strip_html | truncate: 160 }}</p>
          {% endif %}
          <div class="post-card-meta">
            <span><i class="far fa-calendar-alt me-1"></i>{{ post.date | date: "%b %d, %Y" }}</span>
            {% if post.categories.size > 0 %}
            <span>
              <i class="far fa-folder-open me-1"></i>
              {% for cat in post.categories %}{{ cat }}{% unless forloop.last %}, {% endunless %}{% endfor %}
            </span>
            {% endif %}
            {% if post.tags.size > 0 %}
            <span>
              {% for tag in post.tags %}
              <span class="post-tag">{{ tag }}</span>
              {% endfor %}
            </span>
            {% endif %}
          </div>
        </div>
      </a>
    </article>
    {% endfor %}

    {% if project_posts.size == 0 %}
    <div class="empty-state">
      <i class="fas fa-code"></i>
      <p>No project posts yet.</p>
    </div>
    {% endif %}
  </div>
</div>
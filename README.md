# Personal Portfolio — Jekyll

A clean, sidebar-based personal portfolio built with Jekyll. Features a fixed sidebar with profile photo, name, tagline, and navigation links to Home, Finance, and Projects.

## Quick Start

### Prerequisites
- Ruby >= 2.7
- Bundler (`gem install bundler`)

### Setup

```bash
cd portfolio
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

## Customization

### 1. Update your info — `_config.yml`
```yaml
title: "Your Name"
tagline: "Your tagline here"
avatar: /assets/img/avatar.jpg
github:
  username: yourusername
linkedin:
  username: yourusername
social:
  email: you@example.com
```

### 2. Add your photo
Replace `assets/img/avatar.jpg` with your own photo (any square image works best).

### 3. Write posts
Add Markdown files to `_posts/` following the naming convention:
```
_posts/YYYY-MM-DD-title.md
```

Front matter:
```yaml
---
layout: post
title: "Post Title"
date: 2025-01-01
description: "Short description"
categories: [finance]   # or [general], [projects], etc.
tags: [tag1, tag2]
---
```

### 4. Edit pages
- **Finance notes**: Edit `finance.md`
- **Projects**: Edit `projects.md`

## Structure
```
portfolio/
├── _config.yml          # Site config
├── _layouts/            # Page templates
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _includes/           # Reusable components
│   ├── sidebar.html
│   └── topbar.html
├── _posts/              # Blog posts
├── assets/
│   ├── css/main.css     # All styles
│   ├── js/main.js       # Theme toggle, sidebar
│   └── img/avatar.jpg   # Your photo (add this)
├── index.html           # Home page
├── finance.md           # Finance page
└── projects.md          # Projects page
```

## Deployment

### GitHub Pages
1. Push to a repo named `yourusername.github.io`
2. Enable GitHub Pages in repo Settings → Pages
3. Set source to `main` branch

### Netlify / Vercel
Connect your repo and set build command to `bundle exec jekyll build` and publish directory to `_site`.

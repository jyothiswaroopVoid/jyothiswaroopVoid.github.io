// ============================================================
// Sidebar toggle (mobile)
// ============================================================
const sidebar        = document.getElementById('sidebar');
const sidebarTrigger = document.getElementById('sidebar-trigger');
const overlay        = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (sidebarTrigger) sidebarTrigger.addEventListener('click', openSidebar);
if (overlay)        overlay.addEventListener('click', closeSidebar);

// ============================================================
// Dark / Light mode toggle
// ============================================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');
const htmlEl      = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ============================================================
// Collapsible cards
// ============================================================
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.collapsible-card');
    card.classList.toggle('open');
  });
});

// ============================================================
// Active nav link highlight
// ============================================================
document.querySelectorAll('.nav-item .nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.closest('.nav-item')?.classList.add('active');
  }
});

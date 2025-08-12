// Mobile nav toggle (accessible)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  const close = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when a link is clicked
  nav.addEventListener('click', (e) => {
    if (e.target instanceof Element && e.target.closest('a')) close();
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
});

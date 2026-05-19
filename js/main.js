const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal,.step,.product-card,.metric-box,.cat-card,.mv-card,.tl-item')
  .forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('top-nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 30px rgba(45,74,39,.1)' : 'none';

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.style.color = active ? 'var(--bosque)' : '';
    a.style.fontWeight = active ? '600' : '';
  });
});

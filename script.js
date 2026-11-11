(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('navigation');
  if (!toggle || !nav) return;
  const closeNav = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent = '☰'; };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
})();

document.addEventListener('DOMContentLoaded', function () {
  // set year
  const y = new Date().getFullYear();
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(e => e.textContent = y);

  // mobile nav toggle: toggle class 'open' on .nav (CSS will show/hide)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // close nav after clicking any link (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
});

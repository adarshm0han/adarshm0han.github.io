// Intersection Observer to reveal sections on scroll
document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal');
  const nav = document.getElementById('navbar');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Change nav background when scrolling past hero
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
      nav.style.background = 'rgba(10, 10, 35, 0.85)';
    } else {
      nav.style.background = 'rgba(10, 10, 35, 0.6)';
    }
  });

  // Set footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
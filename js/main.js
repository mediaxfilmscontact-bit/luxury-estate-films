// Luxury Estate Films — main.js

(function () {
  'use strict';

  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');

  // ── Nav: scroll class ───────────────────────────────
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── Nav: mobile menu ────────────────────────────────
  hamburger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav__links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ── Smooth scroll (anchor links) ────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = anchor.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    });
  });

  // ── Scroll reveal ────────────────────────────────────
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all immediately
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ── Hero: trigger reveal without waiting for scroll ──
  // (elements above the fold need a small delay)
  setTimeout(function () {
    var heroEls = document.querySelectorAll('.hero [data-reveal]');
    heroEls.forEach(function (el) { el.classList.add('is-visible'); });
  }, 200);

})();

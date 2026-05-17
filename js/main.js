/* ============================================================
   Mohamed Saber Abbas Elsayed — Portfolio
   Vanilla JS — no dependencies
   ============================================================ */

(() => {
  'use strict';

  const supportsHover = window.matchMedia('(hover: hover)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = !supportsHover || ('ontouchstart' in window);

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Progress bar ---------- */
  const progress = document.getElementById('progress-bar');
  function updateProgress() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- Custom cursor ---------- */
  if (supportsHover && !isTouch) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });
    function raf() {
      rx += (mx - rx) * .14;
      ry += (my - ry) * .14;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(raf);
    }
    if (!prefersReducedMotion) requestAnimationFrame(raf);

    document.querySelectorAll('a, button, .feat-card, .cat-card, .principle, .contact-cell').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '56px'; ring.style.height = '56px';
        ring.style.borderColor = 'rgba(212,164,69,.7)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '36px'; ring.style.height = '36px';
        ring.style.borderColor = 'rgba(212,164,69,.35)';
      });
    });
  }

  /* ---------- Particle canvas ---------- */
  const canvas = document.getElementById('particle-canvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    const COUNT = window.innerWidth < 700 ? 28 : 60;

    function size() {
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
    }
    size();
    addEventListener('resize', size);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - .5) * .25 * dpr,
        vy: (Math.random() - .5) * .25 * dpr,
        r: (Math.random() * 1.2 + .3) * dpr,
        a: Math.random() * .5 + .2,
        hue: Math.random() > .55 ? 'g' : 'b',
      });
    }

    let mouse = { x: -9999, y: -9999 };
    addEventListener('mousemove', (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d2 = dx*dx + dy*dy;
        const range = 150 * dpr;
        if (d2 < range*range) {
          const d = Math.sqrt(d2) || 1;
          const force = (range - d) / range * .5;
          p.x += (dx / d) * force * dpr;
          p.y += (dy / d) * force * dpr;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 'g'
          ? `rgba(212, 164, 69, ${p.a})`
          : `rgba(91, 141, 239, ${p.a})`;
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* ---------- Reveal on scroll ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-links-mobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const open = navMobile.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navMobile.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Smooth scroll anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + scrollY - 70;
          window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }
    });
  });

})();

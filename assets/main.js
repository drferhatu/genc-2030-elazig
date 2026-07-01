(() => {
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal on scroll
  const revealTargets = document.querySelectorAll('.reveal');
  if (prefersReduce || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(el => io.observe(el));
  }

  // Number counters
  const formatTR = (n) => {
    if (n >= 1000) return n.toLocaleString('tr-TR');
    return String(n);
  };
  const counters = document.querySelectorAll('.num[data-count]');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    if (prefersReduce) {
      el.textContent = prefix + formatTR(target) + suffix;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const val = Math.round(target * easeOut(t));
      el.textContent = prefix + formatTR(val) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(el => animateCount(el));
  }

  // Smooth focus on anchor click (respect header offset)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  });
})();

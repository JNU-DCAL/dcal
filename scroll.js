/* =============================================
   DCAL — Scroll Effects
   ============================================= */

/* ---------- 1. Nav 스크롤 배경 ---------- */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ---------- 2. Intersection Observer: 뷰포트 진입 시 애니메이션 ---------- */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
})();
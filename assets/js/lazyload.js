(function(){
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          if (el.dataset.src) { el.src = el.dataset.src; el.removeAttribute('data-src'); }
          if (el.dataset.bg)  { el.style.backgroundImage = `url("${el.dataset.bg}")`; el.removeAttribute('data-bg'); }
          io.unobserve(el);
        });
      }, { rootMargin: '200px 0px' })
    : null;
  document.querySelectorAll('img[loading="lazy"], img[data-src], [data-bg]').forEach(el => {
    if (io) io.observe(el);
  });
})();
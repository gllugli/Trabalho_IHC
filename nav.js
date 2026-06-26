(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const normalizePage = (value) => (value || '').split('/').pop();

  document.querySelectorAll('[data-nav-target]').forEach((item) => {
    const target = item.dataset.navTarget;
    if (!target) {
      return;
    }

    const normalizedTarget = normalizePage(target);
    const isCurrentPage = normalizedTarget === currentPage;

    if (item.tagName === 'A') {
      item.setAttribute('href', target);
    } else {
      item.setAttribute('role', 'link');
      item.setAttribute('tabindex', '0');
      item.style.cursor = 'pointer';
    }

    const activeClassName = 'nav-item--active';
    const activeTextClassName = 'active';

    if (isCurrentPage) {
      item.setAttribute('aria-current', 'page');
      item.classList.add(activeClassName);

      const activeText = item.querySelector('.nav-text');
      if (activeText) {
        activeText.classList.add(activeTextClassName);
      }
    } else {
      item.removeAttribute('aria-current');
      item.classList.remove(activeClassName);

      const activeText = item.querySelector('.nav-text');
      if (activeText) {
        activeText.classList.remove(activeTextClassName);
      }
    }

    const goToTarget = (event) => {
      if (isCurrentPage) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      window.location.href = target;
    };

    item.addEventListener('click', goToTarget);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        goToTarget(event);
      }
    });
  });
})();

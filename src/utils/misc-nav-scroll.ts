export const initNavScroll = () => {
  const navComponent = document.querySelector('.nav_component');
  if (!navComponent) return;

  let lastScrollPosition = window.scrollY;

  window.addEventListener(
    'scroll',
    () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition - lastScrollPosition > 0) {
        navComponent?.classList.add('is-hidden');
      } else {
        navComponent?.classList.remove('is-hidden');
      }

      lastScrollPosition = currentScrollPosition;
    },
    { passive: true }
  );
};

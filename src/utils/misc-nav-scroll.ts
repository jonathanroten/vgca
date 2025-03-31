export const initNavScroll = () => {
  const navComponent = document.querySelector('.nav_component');
  if (!navComponent) return;

  let lastScrollPosition = window.scrollY;
  console.error('test');
  window.addEventListener(
    'scroll',
    () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition - lastScrollPosition > 0) {
        navComponent?.classList.add('is-hidden');
        if (navComponent?.classList.contains('is-background-filled')) {
          navComponent?.classList.remove('is-background-filled');
        }
      } else {
        navComponent?.classList.remove('is-hidden');
        navComponent?.classList.add('is-background-filled');
      }

      lastScrollPosition = currentScrollPosition;
    },
    { passive: true }
  );
};

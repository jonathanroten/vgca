export const initNavScroll = () => {
  const navComponent = document.querySelector('.nav_component');
  if (!navComponent) return;

  let lastScrollPosition = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const currentScrollPosition = window.scrollY;
      const addBackground = 'is-background-filled';
      const isScrolled = currentScrollPosition - lastScrollPosition > 0;
      if (isScrolled) {
        navComponent?.classList.add('is-hidden');
        if (navComponent?.classList.contains(addBackground)) {
          navComponent?.classList.remove(addBackground);
        }
      } else {
        navComponent?.classList.remove('is-hidden');
        navComponent?.classList.add('is-background-filled');
      }

      if (currentScrollPosition === 0 && navComponent?.classList.contains(addBackground)) {
        navComponent?.classList.remove(addBackground);
      }

      lastScrollPosition = currentScrollPosition;
    },
    { passive: true }
  );
};

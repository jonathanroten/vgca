export const initNavScroll = () => {
  const navComponent = document.querySelector('.nav_component');
  if (!navComponent) return;

  const addBackground = 'is-background-filled';
  const hideClass = 'is-hidden';
  const scrollUpThreshold = 48; // 3rem in pixels
  let lastScrollPosition = window.scrollY;
  let scrollDelta = 0;

  window.addEventListener(
    'scroll',
    () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingDown = currentScrollPosition > lastScrollPosition;
      const isScrollingUp = currentScrollPosition < lastScrollPosition;

      // Scrolling down
      if (isScrollingDown) {
        scrollDelta = 0; // reset scrollDelta
        navComponent.classList.add(hideClass);
        navComponent.classList.remove(addBackground);
      }

      // Scrolling up
      if (isScrollingUp) {
        scrollDelta += lastScrollPosition - currentScrollPosition;

        if (scrollDelta > scrollUpThreshold) {
          navComponent.classList.remove(hideClass);
          navComponent.classList.add(addBackground);
        }
      }

      // At the top of the page
      if (currentScrollPosition === 0) {
        navComponent.classList.remove(addBackground);
      }

      lastScrollPosition = currentScrollPosition;
    },
    { passive: true }
  );
};

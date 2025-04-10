import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const initNavScroll = () => {
  const navComponent = document.querySelector('.nav_component');
  if (!navComponent) return;

  const addBackground = 'is-background-filled';
  const hideClass = 'is-hidden';
  const scrollThreshold = 100;

  let lastScroll = window.scrollY;
  let scrollDistance = 0;
  let navVisible = true;

  const showNav = () => {
    if (navVisible) return;

    gsap.to(navComponent, {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      onStart: () => {
        navComponent.classList.remove(hideClass);
        navComponent.setAttribute('aria-hidden', 'false');
      },
    });

    navVisible = true;
  };

  const hideNav = () => {
    if (!navVisible) return;

    gsap.to(navComponent, {
      autoAlpha: 0,
      y: '-100%',
      duration: 0.3,
      onComplete: () => {
        navComponent.classList.add(hideClass);
        navComponent.setAttribute('aria-hidden', 'true');
      },
    });

    navVisible = false;
  };

  const handleScroll = (self: ScrollTrigger) => {
    const currentScroll = self.scroll();
    const isScrollingDown = currentScroll > lastScroll;
    const isScrollingUp = currentScroll < lastScroll;
    const nearTop = currentScroll <= scrollThreshold;

    // Ensure background reflects scroll position even if nav is already visible
    if (navVisible) {
      navComponent.classList.toggle(addBackground, !nearTop);
    }

    if (nearTop && !navVisible) {
      scrollDistance = 0;
      showNav();
    } else if (isScrollingDown) {
      scrollDistance = 0;
      hideNav();
    } else if (isScrollingUp) {
      scrollDistance += Math.abs(lastScroll - currentScroll);
      if (scrollDistance > scrollThreshold) {
        showNav();
      }
    }

    lastScroll = currentScroll;
  };

  const navSroll = () => {
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: handleScroll,
    });
  };

  navSroll();
};

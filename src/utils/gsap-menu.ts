import { gsap } from 'gsap';

const menuButton = document.querySelector('[data-animation-element="menu-button"]');
const menuLinks = document.querySelectorAll('[data-animation-element="menu-link"]');

export const initMenuAnimation = () => {
  if (!menuButton || menuLinks.length === 0) return;

  gsap.set(menuLinks, { autoAlpha: 0, y: '-1rem' });

  const menuAnimation = gsap.timeline({ paused: true }).to(menuLinks, {
    ease: 'power1',
    delay: 0.2,
    duration: 0.4,
    autoAlpha: 1,
    y: '0rem',
    stagger: 0.1,
  });

  menuButton.addEventListener('click', () => {
    setTimeout(() => {
      if (menuButton.classList.contains('w--open')) {
        menuAnimation.play();
      } else {
        menuAnimation.reverse();
      }
    }, 100);
  });
};

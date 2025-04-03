import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFeaturedProjects = () => {
  const featuredProjects = document.querySelectorAll('[data-animation-element="featured-project"]');

  featuredProjects?.forEach((prjoect) => {
    const featuredProjectAnimation = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: prjoect,
        start: 'top top',
        scrub: true,
        anticipatePin: 1,
      },
    });

    featuredProjectAnimation.to(
      prjoect,
      {
        ease: 'none',
        scale: 0.9,
      },
      '<'
    );
  });
};

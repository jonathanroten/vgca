import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFeaturedProjects = () => {
  const featuredProjects = document.querySelectorAll('[data-animation-element="featured-project"]');

  featuredProjects?.forEach((project) => {
    const featuredProjectAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    featuredProjectAnimation.to(project, {
      scale: 0.9,
      autoAlpha: 0,
      ease: 'none',
    });
  });
};

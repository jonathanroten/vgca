import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFeaturedProjects = () => {
  const featuredProjects = document.querySelectorAll('[data-animation-element="featured-project"]');
  /*const featuredProjectsContent = document.querySelectorAll(
    '[data-animation-element="featured-project-content"]'
  );*/
  const stickyTop = getComputedStyle(document.documentElement).getPropertyValue('--site--margin');

  if (featuredProjects.length > 0) {
    featuredProjects.forEach((prjoect, index) => {
      (prjoect as HTMLElement).style.position = 'sticky';
      (prjoect as HTMLElement).style.top = stickyTop;

      const isLast = index === featuredProjects.length - 1;
      const featuredProjectAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: prjoect,
          start: 'top top',
          scrub: 1,
        },
      });
      // .set(featuredProjectsContent, { opacity: 1 });

      featuredProjectAnimation.to(
        prjoect,
        {
          ease: 'none',
          //startAt: { filter: 'blur(0px)' },
          //filter: isLast ? 'blur(0px)' : 'blur(5px)',
          scale: isLast ? 1 : 0.9,
        },
        '<'
      );
      /*.to(
          featuredProjectsContent,
          {
            opacity: isLast ? 1 : 0,
          },
          '<'
        );*/
    });
  }
};

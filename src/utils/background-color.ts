//Changes the background color of the .section_project-listing_wrap element to the color specified in the color parameter.

export const initBackgroundColor = () => {
  const projectWrap = document.querySelector('data-background-element="target"') as HTMLElement;
  const projectItems = document.querySelectorAll('[data-background-element="source"]');
  const defaultBackground = window.getComputedStyle(projectWrap).backgroundColor;

  projectItems.forEach((item) => {
    const projectEmbed = item?.querySelector('[data-background-color]') as HTMLElement;
    const backgroundColor = projectEmbed?.getAttribute('data-background-color');

    if (projectWrap && projectItems && projectEmbed && backgroundColor) {
      item.addEventListener('mouseenter', function () {
        projectWrap.style.backgroundColor = backgroundColor;
      });
      // When mouse leaves, reset the background (or set it to a default value)
      item.addEventListener('mouseleave', function () {
        projectWrap.style.backgroundColor = defaultBackground;
      });
    }
  });
};

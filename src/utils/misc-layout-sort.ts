// types/global.d.ts or at the top of your TS file
declare global {
  interface Window {
    fsAttributes: [string, (listInstances: unknown[]) => void][];
  }
}

export const initLayoutSort = () => {
  if (typeof window === 'undefined') return;
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmssort',
    () => {
      const sortLink = document.getElementById('sort-link') as HTMLElement;
      if (!sortLink) return;
      sortLink.click();
    },
  ]);
};

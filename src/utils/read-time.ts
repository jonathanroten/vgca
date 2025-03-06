export const initReadTime = () => {
  const source = document.querySelector('[data-readTime-element="source"]') as HTMLElement;
  const target = document.querySelector('[data-readTime-element="target"]') as HTMLElement;
  if (!source || !target) return;

  const WORDSPERMINUTE = 225;

  const text = source.innerText;
  const words = text.trim().split(/\s+/).length;
  const estimate = Math.ceil(words / WORDSPERMINUTE);
  target.innerText = `${estimate.toString()} Min. Read`;
};

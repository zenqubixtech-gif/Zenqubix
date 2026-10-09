export const prefersReduced = () => window.matchMedia('(prefers-reduced-motion:reduce)').matches;
export const finePointer = () => window.matchMedia('(hover:hover) and (pointer:fine)').matches;
export const progress = (el: HTMLElement) => {
  const r = el.getBoundingClientRect();
  return Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
};

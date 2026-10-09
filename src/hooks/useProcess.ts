import { RefObject } from 'react';
import { useRafScroll } from './useRafScroll';

export function useProcess(ref: RefObject<HTMLElement>) {
  useRafScroll(() => {
    const root = ref.current;
    if (!root) return;
    const proc = root.querySelector<HTMLElement>('#proc')!;
    const fill = root.querySelector<HTMLElement>('#fill')!;
    const steps = Array.from(root.querySelectorAll<HTMLElement>('.step'));
    const r = proc.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
    fill.style.height = p * (r.height - 12) + 'px';
    let last = -1;
    steps.forEach((s, i) => {
      const on = s.getBoundingClientRect().top < vh * 0.72;
      s.classList.toggle('in', on);
      s.classList.remove('cur');
      if (on) last = i;
    });
    if (last > -1) steps[last].classList.add('cur');
  });
}

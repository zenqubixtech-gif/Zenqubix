import { useEffect, useRef } from 'react';
import { finePointer, prefersReduced } from '../../lib/dom';

/** Desktop-only label cursor. Elements opt in with data-cur="LABEL". */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!finePointer() || prefersReduced()) return;
    const cu = ref.current!;
    let px = 0, py = 0, x = 0, y = 0, run = 0;
    const mv = () => {
      x += (px - x) * 0.2; y += (py - y) * 0.2;
      cu.style.transform = `translate3d(${x}px,${y}px,0)`;
      run = Math.abs(px - x) + Math.abs(py - y) > 0.5 ? requestAnimationFrame(mv) : 0;
    };
    const move = (e: MouseEvent) => { px = e.clientX; py = e.clientY; if (!run) run = requestAnimationFrame(mv); };
    const over = (e: MouseEvent) => {
      const t = (e.target as Element).closest<HTMLElement>('[data-cur]');
      cu.classList.toggle('on', !!t);
      if (t) cu.textContent = t.dataset.cur || '';
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); cancelAnimationFrame(run); };
  }, []);
  return <div id="cur" ref={ref} aria-hidden="true" />;
}

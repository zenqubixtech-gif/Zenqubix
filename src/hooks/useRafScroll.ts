import { useEffect, useRef } from 'react';

/** Runs cb on scroll/resize, throttled to one call per animation frame. */
export function useRafScroll(cb: () => void) {
  const f = useRef(cb);
  f.current = cb;
  useEffect(() => {
    let p = 0;
    const run = () => { p = 0; f.current(); };
    const req = () => { if (!p) p = requestAnimationFrame(run); };
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', req);
    run();
    return () => { removeEventListener('scroll', req); removeEventListener('resize', req); cancelAnimationFrame(p); };
  }, []);
}

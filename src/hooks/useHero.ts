import { RefObject, useEffect } from 'react';
import { finePointer, prefersReduced } from '../lib/dom';

const SEGS: [string, string][] = [['k', 'const '], ['f', 'experience'], ['', ' = '], ['f', 'build'], ['', '({\n  performance: '], ['s', 'true'], ['', ',\n  responsive: '], ['s', 'true'], ['', ',\n  scalable: '], ['s', 'true'], ['', ',\n});']];
const TOTAL = SEGS.reduce((a, x) => a + x[1].length, 0);
const V = [[60, 52, 56, 40, 44, 28, 30, 10], [58, 54, 48, 44, 36, 34, 22, 12], [62, 50, 52, 42, 38, 26, 28, 8]];
const P = (a: number[]) => a.map((y, i) => (i ? 'L' : 'M') + (4 + i * 30.3).toFixed(0) + ' ' + y).join('');

export function useHero(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const rm = prefersReduced(), fine = finePointer();
    const q = <T extends Element>(s: string) => hero.querySelector<T>(s)!;
    const timers: number[] = [];
    let raf = 0, anim = 0;
    const cd = q<HTMLElement>('#cd'), pgb = q<HTMLElement>('#pgb'), st = q<HTMLElement>('.st');

    const render = (n: number) => {
      let h = '', r = n;
      SEGS.forEach(([c, t]) => { if (r <= 0) return; const s = t.slice(0, r); r -= t.length; h += c ? `<span class="${c}">${s}</span>` : s; });
      cd.innerHTML = h + '<span class="cur2"></span>';
    };
    const finish = () => { q('#stt').textContent = 'Build passed'; st.classList.add('ok'); pgb.style.transform = 'scaleX(1)'; };
    if (rm) { render(TOTAL); finish(); }
    else {
      let n = 0;
      timers.push(window.setTimeout(() => {
        const t = window.setInterval(() => {
          n++; render(n); pgb.style.transform = `scaleX(${n / TOTAL})`;
          if (n >= TOTAL) { clearInterval(t); finish(); }
        }, 48);
        timers.push(t);
      }, 1300));
    }

    hero.querySelectorAll<HTMLElement>('[data-n]').forEach((el) => {
      const to = +(el.dataset.n || 0), sf = el.dataset.s || '';
      let t0 = 0;
      const f = (t: number) => {
        t0 = t0 || t;
        const p = Math.min(1, (t - t0) / 1800), v = to * (1 - Math.pow(1 - p, 3));
        el.textContent = (to % 1 ? v.toFixed(1) : Math.round(v).toLocaleString()) + sf;
        if (p < 1) requestAnimationFrame(f);
      };
      if (rm) el.textContent = to.toLocaleString() + sf;
      else timers.push(window.setTimeout(() => requestAnimationFrame(f), 1400));
    });

    ([['#ln', ''], ['#ar', 'L216 74L4 74Z']] as const).forEach(([sel, tail]) => {
      const el = q<SVGPathElement>(sel);
      el.setAttribute('d', P(V[0]) + tail);
      if (!rm) {
        const a = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        a.setAttribute('attributeName', 'd'); a.setAttribute('dur', '14s'); a.setAttribute('repeatCount', 'indefinite');
        a.setAttribute('values', [...V, V[0]].map((v) => P(v) + tail).join(';'));
        el.appendChild(a);
      }
    });

    const layers = Array.from(hero.querySelectorAll<HTMLElement>('.ly'));
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      layers.forEach((l) => { const d = +(l.dataset.d || 0); l.style.transform = `translate3d(${(cx * d).toFixed(2)}px,${(cy * d).toFixed(2)}px,0)`; });
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.002 ? requestAnimationFrame(tick) : 0;
    };
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--mx', (e.clientX - r.left).toFixed(0));
      hero.style.setProperty('--my', (e.clientY - r.top).toFixed(0));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    if (fine && !rm) hero.addEventListener('pointermove', move);
    return () => { timers.forEach((t) => { clearTimeout(t); clearInterval(t); }); cancelAnimationFrame(raf); cancelAnimationFrame(anim); hero.removeEventListener('pointermove', move); };
  }, [ref]);
}

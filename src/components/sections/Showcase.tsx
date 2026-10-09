import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { CONCEPTS } from '../../data/showcase';
import { useRafScroll } from '../../hooks/useRafScroll';
import { progress } from '../../lib/dom';

export default function Showcase() {
  const sec = useRef<HTMLElement>(null), trk = useRef<HTMLDivElement>(null), bar = useRef<HTMLElement>(null);
  const [cur, setCur] = useState(1);
  useRafScroll(() => {
    const s = sec.current, t = trk.current;
    if (!s || !t) return;
    const q = progress(s);
    t.style.transform = `translate3d(${(-q * (t.scrollWidth - innerWidth)).toFixed(1)}px,0,0)`;
    let best = 0, idx = 1;
    Array.from(t.children).forEach((e, i) => {
      const r = e.getBoundingClientRect(), d = Math.min(1, Math.abs(r.left + r.width / 2 - innerWidth / 2) / (innerWidth * 0.55));
      (e as HTMLElement).style.setProperty('--a', (1 - d).toFixed(3));
      if (1 - d > best) { best = 1 - d; idx = i + 1; }
    });
    if (bar.current) bar.current.style.transform = `scaleX(${q})`;
    setCur(idx);
  });
  return (
    <section className="dark sc" id="demos" ref={sec}>
      <div className="spin">
        <div className="wrap shd">
          <h2 className="h2">Same engineering, seven different looks</h2>
          <p className="sub">Concept studies showing how layout, type and tone change by industry. They are not client projects.</p>
        </div>
        <div className="trk" ref={trk}>
          {CONCEPTS.map((d) => (
            <article key={d.name} className="sl" style={{ background: `${d.deco},${d.bg}`, '--fg': d.fg, '--bgc': d.bg } as CSSProperties}>
              <div className="tx">
                <div>
                  <div>
                    <span className="ct">{d.cat}</span>
                    <h3 style={{ fontFamily: `${d.font},sans-serif`, fontWeight: d.weight, textTransform: d.transform as CSSProperties['textTransform'] }}>{d.name}</h3>
                    <p>{d.desc}</p>
                  </div>
                  <div>
                    <div className="tg" style={{ marginBottom: 14 }}>{d.tech.map((t) => <span key={t}>{t}</span>)}</div>
                    <a href="#contact">Build one like this</a>
                  </div>
                </div>
              </div>
              <div className="pw" aria-hidden="true" style={{ fontFamily: `${d.font},sans-serif` }}>
                <div className="fb"><i /><i /><i /><span>{d.url}</span></div>
                <div className="pwg">{d.cells.map(([a, t, x], k) => <i key={k} className={t} style={{ gridArea: a }}>{x}</i>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap sprog">
          <span className="sbar"><i ref={bar} /></span>
          <span>{cur} / {CONCEPTS.length}</span>
        </div>
      </div>
    </section>
  );
}

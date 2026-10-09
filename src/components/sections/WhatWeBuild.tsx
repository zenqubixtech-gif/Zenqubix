import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { BUILD_ITEMS } from '../../data/build';
import { useReveal } from '../../hooks/useReveal';

export default function WhatWeBuild() {
  const [i, setI] = useState(0);
  const h = useRef<HTMLHeadingElement>(null);
  useReveal(h);
  const b = BUILD_ITEMS[i];
  return (
    <section className="dark" id="build">
      <div className="wrap bd">
        <div>
          <h2 className="mk" ref={h}>
            <span className="mask"><span>We build</span></span>
            <span className="mask"><span className="gt">digital experiences.</span></span>
          </h2>
          <ul className="bl">
            {BUILD_ITEMS.map((it, k) => (
              <li key={it.name}>
                <button type="button" className={`bi${k === i ? ' on' : ''}`} data-cur="EXPLORE" onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)}>
                  {it.name}<small>{it.tech[0]} · {it.tech[1]}</small>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <aside className="pv" aria-live="polite">
          <div className="wf">
            <i className="n" />
            {b.areas.map((a, k) => <i key={`${i}-${k}`} style={{ gridArea: a, '--i': k + 1 } as CSSProperties} />)}
          </div>
          <h3>{b.name}</h3>
          <p>{b.desc}</p>
          <div className="tg">{b.tech.map((t, k) => <span key={`${i}-${t}`} style={{ animationDelay: `${k * 60}ms` }}>{t}</span>)}</div>
        </aside>
      </div>
    </section>
  );
}

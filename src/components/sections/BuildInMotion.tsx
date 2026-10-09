import { useRef, useState } from 'react';
import { useRafScroll } from '../../hooks/useRafScroll';
import { progress } from '../../lib/dom';

export default function BuildInMotion() {
  const ref = useRef<HTMLElement>(null);
  const [s, setS] = useState(0);
  useRafScroll(() => {
    if (ref.current) setS(Math.min(4, Math.floor(progress(ref.current) * 5)));
  });
  return (
<section ref={ref} className="mo" id="motion"><div className="mpin"><div className="wrap ms">
  <div className="mtxt"><h2 className="h2">A website, built in motion</h2><ol id="mst">
    <li className={s === 0 ? 'on' : undefined}><h3>Design</h3><p>Layout and hierarchy are settled before any code.</p></li>
    <li className={s === 1 ? 'on' : undefined}><h3>Components</h3><p>The page is broken into reusable, typed building blocks.</p></li>
    <li className={s === 2 ? 'on' : undefined}><h3>Code</h3><p>Components become clean React and TypeScript.</p></li>
    <li className={s === 3 ? 'on' : undefined}><h3>Responsive</h3><p>The same build adapts from desktop down to a phone.</p></li>
    <li className={s === 4 ? 'on' : undefined}><h3>Deploy</h3><p>Tested, shipped and live.</p></li></ol></div>
  <div className="bld" id="bld" data-s={s} aria-hidden="true"><div className="frm"><div className="fb"><i></i><i></i><i></i><span>yoursite.com</span></div>
    <div className="pgx"><div className="b nv"><em>&lt;Nav /&gt;</em></div><div className="b hr"><em>&lt;Hero /&gt;</em></div><div className="cards"><div className="b"><em>&lt;Card /&gt;</em></div><div className="b"><em>&lt;Card /&gt;</em></div><div className="b"><em>&lt;Card /&gt;</em></div></div></div>
    <span className="live">Live</span>
    <pre className="cdp"><span className="k">export</span> <span className="k">function</span> <span className="f">Hero</span>() {'{'}{'\n'}  <span className="k">return</span> &lt;<span className="f">section</span>&gt;{'\n'}    &lt;<span className="f">h1</span>&gt;Built to perform&lt;/<span className="f">h1</span>&gt;{'\n'}  &lt;/<span className="f">section</span>&gt;;{'\n'}{'}'}</pre></div></div>
</div></div></section>
  );
}

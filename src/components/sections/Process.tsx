import { useRef } from 'react';
import { useProcess } from '../../hooks/useProcess';

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useProcess(ref);
  return (
<section ref={ref} id="process"><div className="wrap">
  <h2 className="h2">From first call to launch, and after</h2>
  <div className="process" id="proc"><div className="fill" id="fill"></div>
    <div className="step"><h3>Discover</h3><p>We learn your business, audience and what the site has to achieve.</p></div>
    <div className="step"><h3>Plan</h3><p>Pages, content and structure mapped before any design begins.</p></div>
    <div className="step"><h3>Design</h3><p>Interface and visual direction, reviewed with you at every stage.</p></div>
    <div className="step"><h3>Develop</h3><p>Clean, typed code with responsive layouts and accessible markup.</p></div>
    <div className="step"><h3>Test</h3><p>Devices, browsers, keyboard use, speed and forms checked.</p></div>
    <div className="step"><h3>Launch</h3><p>Deployment, handover and a final check on the live site.</p></div>
    <div className="step"><h3>Improve</h3><p>Measure how people use it, then refine.</p></div>
  </div>
</div></section>
  );
}

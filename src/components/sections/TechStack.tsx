import { useRef } from 'react';
import { useStack } from '../../hooks/useStack';

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  useStack(ref);
  return (
<section ref={ref} className="dark" id="stack"><div className="wrap">
  <h2 className="h2">The stack we build with</h2>
  <p className="sub">Hover, focus or tap a technology to see what it connects to.</p>
  <div className="stackw"><svg className="links" id="links" aria-hidden="true"></svg><div className="stack" id="stackGrid">
    <div><h3>Frontend</h3><button className="chip" data-cur="EXPLORE" data-id="react" data-l="ts,tw,vite,rest">React</button><button className="chip" data-cur="EXPLORE" data-id="ts" data-l="react,node,vite">TypeScript</button><button className="chip" data-cur="EXPLORE" data-id="tw" data-l="react,figma">Tailwind CSS</button><button className="chip" data-cur="EXPLORE" data-id="web" data-l="react,figma">HTML5 / CSS3 / JavaScript</button></div>
    <div><h3>Backend</h3><button className="chip" data-cur="EXPLORE" data-id="node" data-l="express,ts,mongo,pg">Node.js</button><button className="chip" data-cur="EXPLORE" data-id="express" data-l="node,rest,mongo,pg">Express.js</button></div>
    <div><h3>Database</h3><button className="chip" data-cur="EXPLORE" data-id="mongo" data-l="node,express">MongoDB</button><button className="chip" data-cur="EXPLORE" data-id="pg" data-l="node,express">PostgreSQL</button></div>
    <div><h3>Tools</h3><button className="chip" data-cur="EXPLORE" data-id="git" data-l="github">Git</button><button className="chip" data-cur="EXPLORE" data-id="github" data-l="git,vite">GitHub</button><button className="chip" data-cur="EXPLORE" data-id="figma" data-l="tw,web">Figma</button><button className="chip" data-cur="EXPLORE" data-id="vite" data-l="react,ts,github">Vite</button><button className="chip" data-cur="EXPLORE" data-id="rest" data-l="react,express">REST APIs</button></div>
  </div></div>
  <p className="note" id="note" aria-live="polite">React talks to Express through REST APIs, and Express talks to the database.</p>
</div></section>
  );
}

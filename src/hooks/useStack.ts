import { RefObject, useEffect } from 'react';

const MSG: Record<string, string> = {
  react: 'React builds the interface, typed with TypeScript and bundled by Vite.',
  ts: 'TypeScript catches mistakes early across frontend and backend.',
  tw: 'Tailwind CSS keeps styling consistent, taken from the Figma designs.',
  web: 'Semantic HTML, CSS and JavaScript are the foundation under every framework.',
  node: 'Node.js runs the server code and connects to the databases.',
  express: 'Express.js exposes REST APIs and structures backend routes.',
  mongo: 'MongoDB suits flexible, document-shaped data.',
  pg: 'PostgreSQL suits structured, relational data.',
  git: 'Git tracks every change.',
  github: 'GitHub hosts the code and review workflow.',
  figma: 'Figma is where layouts are designed before they are built.',
  vite: 'Vite gives fast local builds and optimized production bundles.',
  rest: 'REST APIs are how the frontend and backend exchange data.',
};

export function useStack(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const grid = root.querySelector<HTMLElement>('#stackGrid')!;
    const note = root.querySelector<HTMLElement>('#note')!;
    const lk = root.querySelector<SVGSVGElement>('#links')!;
    const sw = root.querySelector<HTMLElement>('.stackw')!;
    const chips = Array.from(root.querySelectorAll<HTMLButtonElement>('.chip'));
    const def = note.textContent || '';
    const draw = (c: HTMLElement) => {
      const w = sw.getBoundingClientRect(), a = c.getBoundingClientRect();
      let h = `<defs><linearGradient id="lg" gradientUnits="userSpaceOnUse" x1="0" x2="${w.width}" y1="0" y2="0"><stop offset="0" stop-color="#0094FC"/><stop offset=".5" stop-color="#B60FD5"/><stop offset="1" stop-color="#FEA605"/></linearGradient></defs>`;
      (c.dataset.l || '').split(',').forEach((id) => {
        const t = root.querySelector<HTMLElement>(`.chip[data-id="${id}"]`);
        if (!t) return;
        const b = t.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - w.left, y1 = a.top + a.height / 2 - w.top;
        const x2 = b.left + b.width / 2 - w.left, y2 = b.top + b.height / 2 - w.top, m = (x1 + x2) / 2;
        h += `<path d="M${x1} ${y1}C${m} ${y1} ${m} ${y2} ${x2} ${y2}"/><circle cx="${x2}" cy="${y2}" r="4"/>`;
      });
      lk.innerHTML = h;
    };
    const on = (c: HTMLElement) => {
      const l = (c.dataset.l || '').split(',');
      grid.classList.add('on');
      chips.forEach((x) => x.classList.toggle('hit', x === c || l.includes(x.dataset.id || '')));
      note.textContent = MSG[c.dataset.id || ''] || def;
      draw(c);
    };
    const off = () => {
      grid.classList.remove('on');
      chips.forEach((x) => x.classList.remove('hit'));
      note.textContent = def;
      lk.innerHTML = '';
    };
    const handlers = chips.map((c) => {
      const h = () => on(c);
      c.addEventListener('mouseenter', h); c.addEventListener('focus', h);
      c.addEventListener('mouseleave', off); c.addEventListener('blur', off);
      return [c, h] as const;
    });
    return () => handlers.forEach(([c, h]) => {
      c.removeEventListener('mouseenter', h); c.removeEventListener('focus', h);
      c.removeEventListener('mouseleave', off); c.removeEventListener('blur', off);
    });
  }, [ref]);
}

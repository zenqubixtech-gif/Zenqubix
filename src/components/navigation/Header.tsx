import { useEffect, useState } from 'react';
import logo from '../../assets/zenqubix-logo.webp';

const LINKS = [['Home', '#top'], ['What we build', '#build'], ['Services', '#services'], ['Work', '#demos'], ['Contact', '#contact']] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', esc);
    return () => { removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open]);
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" aria-label="ZENQUBIX home"><img className="logo" src={logo} alt="ZENQUBIX: web development, SEO, digital marketing, graphic design" /></a>
        <nav aria-label="Main">
          <ul>{LINKS.map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}</ul>
        </nav>
        <div className="nav-r">
          <a className="btn solid sm cta-h" href="#contact">Start a project</a>
          <button type="button" className={`mb${open ? ' x' : ''}`} aria-expanded={open} aria-controls="mpanel" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
      <div id="mpanel" className={`mpanel${open ? ' open' : ''}`}>
        <ul>{LINKS.map(([t, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{t}</a></li>)}</ul>
        <a className="btn solid" href="#contact" onClick={() => setOpen(false)}>Start a project</a>
      </div>
    </header>
  );
}

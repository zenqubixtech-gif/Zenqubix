import { useRef } from 'react';
import { useHero } from '../../hooks/useHero';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useHero(ref);
  return (
<section ref={ref} className="hero" id="heroS"><div className="bgfx" aria-hidden="true"></div><i className="glow" aria-hidden="true"></i><div className="wrap">
  <div>
    <p className="eyebrow">Web development studio</p>
    <h1>Websites built <span>to perform.</span></h1>
    <p className="lead">ZENQUBIX designs and engineers fast, accessible websites and web apps for businesses that want their site to do real work.</p>
    <div className="cta"><a className="btn solid" href="#contact">Start a project</a><a className="btn ghost" href="#demos">Explore our work</a></div>
    <ul className="pts"><li>Fast, responsive builds</li><li>Accessible by default</li><li>SEO-friendly structure</li></ul>
  </div>
  <div className="stage" aria-hidden="true">
    <svg className="orbit" viewBox="0 0 600 560"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#0094FC"/><stop offset=".4" stopColor="#6D1DE8"/><stop offset=".7" stopColor="#B60FD5"/><stop offset="1" stopColor="#FEA605"/></linearGradient></defs>
      <path id="p" d="M40 330 C 10 120, 330 20, 520 120 S 600 420, 330 520"/>
      <path id="p2" d="M70 450 C 130 570, 430 580, 565 380 S 520 90, 300 36" style={{animationDirection:'reverse',opacity:'.55'}}/>
      <g className="pt"><circle r="6" fill="#ED218E"><animateMotion dur="15s" repeatCount="indefinite"><mpath href="#p"/></animateMotion></circle><circle r="4" fill="#0094FC"><animateMotion dur="15s" begin="-7s" repeatCount="indefinite"><mpath href="#p"/></animateMotion></circle><circle r="4" fill="#FEA605"><animateMotion dur="19s" begin="-5s" repeatCount="indefinite"><mpath href="#p2"/></animateMotion></circle></g>
      <g><circle r="19" fill="#fff" stroke="#0094FC" strokeWidth="2"/><text y="4" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0094FC">&lt;/&gt;</text><animateMotion dur="34s" repeatCount="indefinite"><mpath href="#p"/></animateMotion></g>
      <g><circle r="19" fill="#fff" stroke="#6D1DE8" strokeWidth="2"/><text y="4" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6D1DE8">SEO</text><animateMotion dur="34s" begin="-12s" repeatCount="indefinite"><mpath href="#p"/></animateMotion></g>
      <g><circle r="19" fill="#fff" stroke="#FEA605" strokeWidth="2"/><text y="4" textAnchor="middle" fontSize="11" fontWeight="700" fill="#d98600">UX</text><animateMotion dur="40s" begin="-9s" repeatCount="indefinite"><mpath href="#p2"/></animateMotion></g>
      <g><circle r="19" fill="#fff" stroke="#ED218E" strokeWidth="2"/><text y="5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ED218E">↗</text><animateMotion dur="40s" begin="-26s" repeatCount="indefinite"><mpath href="#p2"/></animateMotion></g></svg>
    <div className="ly s" data-d="10"><div className="site"><div className="fb"><i /><i /><i /><span>northline-studio.com</span></div>
      <div className="sb"><div className="sn"><b>Northline</b><span>Projects</span><span>Services</span><span>About</span><em>Book a call</em></div>
      <div className="sh"><div className="st3"><small>Landscape design</small><strong>Outdoor spaces designed around how you live.</strong><em>Book a consultation</em></div><div className="sg" /></div>
      <div className="sr"><span>Garden design</span><span>Patios &amp; decks</span><span>Care plans</span></div></div></div></div>
    <div className="ly w" data-d="14"><div className="win"><div className="bar"><i></i><i></i><i></i></div><pre id="cd"></pre>
      <div className="st"><span className="dot"></span><span id="stt">Building…</span><i className="pgr"><b id="pgb"></b></i></div></div></div>
    <div className="ly d" data-d="30"><div className="chart dsh"><b>Traffic overview <em>concept</em></b>
      <div className="kpis"><div><small>Visits</small><strong data-n="12480">0</strong></div><div><small>Conversion</small><strong data-n="3.8" data-s="%">0</strong></div><div><small>Performance</small><strong data-n="98">0</strong></div></div>
      <svg viewBox="0 0 220 74" width="100%"><defs><linearGradient id="g2" x1="0" x2="1"><stop offset="0" stopColor="#0094FC"/><stop offset=".5" stopColor="#B60FD5"/><stop offset="1" stopColor="#FEA605"/></linearGradient><linearGradient id="g3" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#6D1DE8" stopOpacity=".25"/><stop offset="1" stopColor="#6D1DE8" stopOpacity="0"/></linearGradient></defs><path id="ar" fill="url(#g3)"/><path id="ln" fill="none" stroke="url(#g2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <p className="cap">Sample data. Visual concept, not client results.</p></div></div>
    <div className="ly tag t1" data-d="46"><span>React</span></div><div className="ly tag t2" data-d="38"><span>Node.js</span></div><div className="ly tag t3" data-d="52"><span>Figma</span></div>
  </div>
</div></section>
  );
}

/** Preflight is off so the hand-built design-system CSS in src/styles/global.css renders exactly as designed. */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: { extend: {
    colors: { ink: '#0B0F14', brand: { blue: '#0094FC', violet: '#6D1DE8', magenta: '#B60FD5', pink: '#ED218E', orange: '#FEA605' } },
    fontFamily: { display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'], body: ['Instrument Sans', 'system-ui', 'sans-serif'] },
    backgroundImage: { brand: 'linear-gradient(90deg,#0094FC,#6D1DE8,#B60FD5,#FEA605)' },
  } },
};

export interface BuildItem { name: string; desc: string; tech: string[]; areas: string[] }
export const BUILD_ITEMS: BuildItem[] = [
  { name: 'Web apps', desc: 'Dashboards, portals and tools people use every day.', tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'], areas: ['2/1/5/2', '2/2/3/7', '3/2/5/7'] },
  { name: 'Landing pages', desc: 'Single-purpose pages built around one clear action.', tech: ['React', 'Tailwind CSS', 'Vite'], areas: ['2/1/4/7', '4/1/5/4', '4/4/5/7'] },
  { name: 'E-commerce', desc: 'Product browsing and checkout that feel easy on a phone.', tech: ['React', 'Node.js', 'MongoDB'], areas: ['2/1/3/3', '2/3/3/5', '2/5/3/7', '3/1/5/3', '3/3/5/5', '3/5/5/7'] },
  { name: 'SaaS', desc: 'Marketing sites and product interfaces for software.', tech: ['React', 'TypeScript', 'REST APIs'], areas: ['2/1/3/3', '2/3/3/5', '2/5/3/7', '3/1/5/7'] },
  { name: 'Business websites', desc: 'Clear, fast sites that make it easy to get in touch.', tech: ['React', 'Tailwind CSS', 'Express.js'], areas: ['2/1/4/4', '2/4/3/7', '3/4/4/7', '4/1/5/7'] },
  { name: 'Custom experiences', desc: 'Interactive, motion-led builds designed around your idea.', tech: ['React', 'Figma', 'Vite'], areas: ['2/1/5/3', '2/3/3/7', '3/3/5/5', '3/5/5/7'] },
];

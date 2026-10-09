import { useEffect } from 'react';

interface Props { title: string; description: string }

export default function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
    m.content = description;
    let c = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); }
    c.href = location.origin + location.pathname;
  }, [title, description]);
  return null;
}

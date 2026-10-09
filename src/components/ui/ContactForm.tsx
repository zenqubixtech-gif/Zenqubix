import { FormEvent, useState } from 'react';

const SERVICES = ['Web development', 'SEO', 'Digital marketing', 'Graphic design', 'Not sure yet'];
type Field = 'name' | 'email' | 'message';
type Status = 'idle' | 'sending' | 'done' | 'unavailable' | 'error';

export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const err: Partial<Record<Field, string>> = {};
    if ((body.name || '').trim().length < 2) err.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email || '')) err.email = 'Enter a valid email address.';
    if ((body.message || '').trim().length < 10) err.message = 'Tell us a little more (at least 10 characters).';
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus('sending');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const j = await r.json();
      setStatus(r.ok ? (j.delivered ? 'done' : 'unavailable') : 'error');
    } catch { setStatus('error'); }
  };

  const err = (f: Field) => errors[f] && <span className="ferr" id={`e-${f}`} role="alert">{errors[f]}</span>;
  return (
    <form className="cf" onSubmit={submit} noValidate aria-label="Project enquiry">
      <div className="fgrid">
        <div className="fld"><label htmlFor="f-name">Name</label><input id="f-name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />{err('name')}</div>
        <div className="fld"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />{err('email')}</div>
      </div>
      <div className="fld"><label htmlFor="f-service">What do you need?</label>
        <select id="f-service" name="service" defaultValue={SERVICES[0]}>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select></div>
      <div className="fld"><label htmlFor="f-message">Tell us about the project</label><textarea id="f-message" name="message" rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />{err('message')}</div>
      <button className="btn solid" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
      <p className="fstat" role="status" aria-live="polite">
        {status === 'done' && 'Thanks, your message has been sent.'}
        {status === 'unavailable' && 'Your details look good, but this site cannot deliver messages yet. Please try again later.'}
        {status === 'error' && 'We could not reach the server. Please try again in a moment.'}
      </p>
    </form>
  );
}

import type { Request, Response } from 'express';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validates an enquiry. Delivery (email service, CRM, database) is not connected yet. */
export function submitContact(req: Request, res: Response) {
  const { name, email, message } = req.body ?? {};
  const errors: Record<string, string> = {};
  if (!name || String(name).trim().length < 2) errors.name = 'Enter your name.';
  if (!email || !EMAIL.test(String(email))) errors.email = 'Enter a valid email address.';
  if (!message || String(message).trim().length < 10) errors.message = 'Tell us a little more (10+ characters).';
  if (Object.keys(errors).length) return res.status(422).json({ ok: false, errors });
  // TODO: connect an email service / CRM / database here.
  return res.status(202).json({ ok: true, delivered: false, note: 'Enquiry validated. No delivery service is connected yet.' });
}

import { Router } from 'express';
import { submitContact } from '../controllers/contact';

const router = Router();
router.get('/health', (_req, res) => res.json({ ok: true }));
router.post('/contact', submitContact);
export default router;

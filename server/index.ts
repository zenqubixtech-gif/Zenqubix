import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use('/api', routes);
app.use(errorHandler);

const port = Number(process.env.PORT) || 5174;
app.listen(port, () => console.log(`ZENQUBIX API listening on :${port}`));

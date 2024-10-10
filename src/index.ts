import { statusRouter } from '@/routes/status';
import express, { Express } from 'express';

const app: Express = express();

app.use('/status', statusRouter);
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});

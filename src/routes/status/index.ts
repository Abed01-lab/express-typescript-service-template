import { Router } from 'express';

export const statusRouter = Router();

statusRouter.get('/', (_req, res) => {
  res.send({
    status: 'green deployments live',
    version: '1.0.20',
  });
});

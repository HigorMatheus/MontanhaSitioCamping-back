import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated, uploadConfig } from '@/main/config';
import { HighlightController } from '@/presentation/controllers';

const highlightRoutes = Router();
const highlightController = new HighlightController();
// public routes
highlightRoutes.get('/', highlightController.get);

// private routes
highlightRoutes.use(ensureAuthenticated);

highlightRoutes.post(
  '/create',
  multer(uploadConfig.multer).array('image'),
  highlightController.create,
);

highlightRoutes.post('/images');
export { highlightRoutes };

import { Router } from 'express';

import { highlightRoutes } from './highlightRoutes';
import { userRoutes } from './userRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/highlight', highlightRoutes);

export { routes };

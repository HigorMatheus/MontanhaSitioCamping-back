import { Router } from 'express';

import { UserController } from '@/controllers/userController';

const routes = Router();
const userController = new UserController();

routes.post('/create-user', userController.create);

export { routes };

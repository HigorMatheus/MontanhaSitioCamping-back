import { Router } from 'express';

import { AuthenticationController } from '@/controllers/AuthenticationController';
import { UserController } from '@/controllers/userController';

const routes = Router();
const userController = new UserController();
const authenticationController = new AuthenticationController();

routes.post('/create-user', userController.create);
routes.post('/auth', authenticationController.auth);

export { routes };

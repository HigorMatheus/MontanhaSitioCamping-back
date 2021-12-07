import { Router } from 'express';

import { ensureAuthenticated } from '@/main/config';
import { AuthenticationController } from '@/presentation/controllers/AuthenticationController';
import { UserController } from '@/presentation/controllers/userController';

const userRoutes = Router();
const userController = new UserController();
const authenticationController = new AuthenticationController();

userRoutes.post('/create', userController.create);
userRoutes.post('/auth', authenticationController.auth);

export { userRoutes };

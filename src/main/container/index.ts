import { container } from 'tsyringe';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { UserRepository } from '@/repositories/userRepository';

container.register<IUserRepository>('UserRepository', UserRepository);

export default container;

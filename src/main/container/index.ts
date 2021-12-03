import { container } from 'tsyringe';

import { IHashProvider, ITokenProvider } from '@/domain/providers';
import { IUserRepository } from '@/domain/repositories/userRepository';
import { BCryptjsHashProvider, JsonWebTokenProvider } from '@/infra/providers';
import { UserRepository } from '@/repositories/userRepository';

container.register<IUserRepository>('UserRepository', UserRepository);

container.register<IHashProvider>('HashProvider', BCryptjsHashProvider);

container.register<ITokenProvider>('TokenProvider', JsonWebTokenProvider);

export default container;

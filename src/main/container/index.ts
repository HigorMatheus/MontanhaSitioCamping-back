import { container } from 'tsyringe';

import { IHashProvider, ITokenProvider } from '@/domain/providers';
import { IHighlightsRepository, IUserRepository } from '@/domain/repositories';
import {
  UserRepository,
  HighlightsRepository,
} from '@/infra/prisma/repositories';
import { BCryptjsHashProvider, JsonWebTokenProvider } from '@/infra/providers';

container.register<IHashProvider>('HashProvider', BCryptjsHashProvider);
container.register<ITokenProvider>('TokenProvider', JsonWebTokenProvider);

container.register<IUserRepository>('UserRepository', UserRepository);
container.register<IHighlightsRepository>(
  'HighlightsRepository',
  HighlightsRepository,
);

export default container;

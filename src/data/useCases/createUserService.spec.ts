import { AppError } from '@/main/config';
import { MockUserRepository, MockHashProvider } from '@/test/mock';
import { MockTokenProvider } from '@/test/mock/tokenProvider';

import { CreateUserService } from './createUserService';

let usersRepository: MockUserRepository;
let createUserService: CreateUserService;
let hashProvider: MockHashProvider;
let tokenProvider: MockTokenProvider;

describe('CreateUserService', () => {
  beforeEach(() => {
    usersRepository = new MockUserRepository();
    hashProvider = new MockHashProvider();
    tokenProvider = new MockTokenProvider();
    createUserService = new CreateUserService(
      usersRepository,
      tokenProvider,
      hashProvider,
    );
  });
  it('should perform user creation', async () => {
    const response = await createUserService.create({
      email: 'email',
      name: 'name',
      password: 'password',
    });
    expect(response.token).toBeTruthy();
  });
  it('should return if you are user with email return error', async () => {
    await createUserService.create({
      email: 'email',
      name: 'name',
      password: 'password',
    });
    expect(
      createUserService.create({
        email: 'email',
        name: 'name',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

import AppError from '@/main/error';
import { MockUserRepository, MockHashProvider } from '@/test/mock';

import { CreateUserService } from './createUserService';

let fakeUsersRepository: MockUserRepository;
let createUserService: CreateUserService;
let hashProvider: MockHashProvider;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new MockUserRepository();
    hashProvider = new MockHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      hashProvider,
    );
  });
  it('should perform user creation', async () => {
    const user = await createUserService.create({
      email: 'email',
      name: 'name',
      password: 'password',
    });

    expect(user.id).toBeTruthy();
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

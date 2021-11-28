import { CreateUserService } from './createUserService';

describe('CreateUserService', () => {
  it('should create user', () => {
    const createUserService = new CreateUserService();
    const user = createUserService.create({
      email: 'email',
      name: 'name',
      password: 'password',
    });

    // expect
  });
});

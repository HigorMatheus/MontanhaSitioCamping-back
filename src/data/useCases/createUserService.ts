import { inject, injectable } from 'tsyringe';

import { IHashProvider, ITokenProvider } from '@/domain/providers';
import { IUserRepository } from '@/domain/repositories';
import { ICreateUser } from '@/domain/useCases';
import { AppError } from '@/main/config';

@injectable()
export class CreateUserService implements ICreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}
  public async create({
    email,
    name,
    password,
  }: ICreateUser.Params): Promise<ICreateUser.Model> {
    const user = await this.userRepository.findByEmail(email);

    if (user?.id) {
      throw new AppError('User already exists');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const userCreated = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });
    const token = await this.tokenProvider.generateToken(userCreated.id);

    return {
      token,
      user: userCreated,
    };
  }
}

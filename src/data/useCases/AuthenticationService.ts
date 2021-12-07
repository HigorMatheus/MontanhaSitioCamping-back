import { inject, injectable } from 'tsyringe';

import { IHashProvider, ITokenProvider } from '@/domain/providers';
import { IUserRepository } from '@/domain/repositories/userRepository';
import { IAuthentication } from '@/domain/useCases';
import { AppError } from '@/main/config';

@injectable()
export class AuthenticationService implements IAuthentication {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  public async auth({
    email,
    password,
  }: IAuthentication.Params): Promise<IAuthentication.Model> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('invalid credentials');
    }

    const auth = await this.hashProvider.compareHash(password, user.password);

    if (!auth) {
      throw new AppError('invalid credentials');
    }

    const token = await this.tokenProvider.generateToken(user.id);

    return { token };
  }
}

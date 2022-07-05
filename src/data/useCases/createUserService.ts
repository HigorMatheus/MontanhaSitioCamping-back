import { IHashProvider, ITokenProvider } from '@/domain/providers';
import { IUserRepository } from '@/domain/repositories';
import { ICreateUser } from '@/domain/useCases';
import { AppError } from '@/main/config';

export class CreateUserService implements ICreateUser {
  constructor(
    private userRepository: IUserRepository,

    private tokenProvider: ITokenProvider,

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
    console.log({ userCreated });

    return {
      token,
      user: userCreated,
    };
  }
}

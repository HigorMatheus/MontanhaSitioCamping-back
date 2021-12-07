import { User } from '@/domain/model';

export interface ICreateUser {
  create(props: ICreateUser.Props): Promise<ICreateUser.Model>;
}

export namespace ICreateUser {
  export type Props = Omit<User, 'id'>;
  export type Model = User;
}
export interface IGetUserByEmail {
  findByEmail(email: string): Promise<User | null>;
}

export interface IUserRepository extends ICreateUser, IGetUserByEmail {}

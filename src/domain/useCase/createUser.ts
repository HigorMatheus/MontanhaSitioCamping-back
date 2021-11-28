import { IUserModel } from '../model/user-model';

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}
export interface ICreateUser {
  create: (params: ICreateUserParams) => Promise<IUserModel>;
}

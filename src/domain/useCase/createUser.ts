import { UserModel } from '../model/user-model';

export interface ICreateUser {
  create: (params: ICreateUser.Params) => Promise<UserModel>;
}

export namespace ICreateUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };

  export type Model = UserModel;
}

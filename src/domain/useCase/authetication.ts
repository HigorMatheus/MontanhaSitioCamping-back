import { IUser } from '../model/user-model';

interface ICredentials {
  email: string;
  password: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

export interface IAuthentication {
  auth(params: ICredentials): Promise<IResponse>;
}

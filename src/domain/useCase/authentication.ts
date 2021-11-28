export interface ICredentials {
  email: string;
  password: string;
}

export interface IResponse {
  token: string;
}

export interface IAuthentication {
  auth(params: ICredentials): Promise<IResponse>;
}

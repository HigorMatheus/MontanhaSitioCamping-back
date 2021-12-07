export interface ITokenProvider {
  generateToken(subject: string): Promise<string>;
}

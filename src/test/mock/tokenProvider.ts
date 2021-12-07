import { ITokenProvider } from '@/domain/providers';

export class MockTokenProvider implements ITokenProvider {
  public async generateToken(id?: string): Promise<string> {
    // const token = `${id}test`;
    return 'token';
  }
}

import { IHashProvider } from '@/domain/providers';

export class MockHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return `${payload}t`;
  }
  public async compareHash(string: string, hash: string): Promise<boolean> {
    const text = `${string}t`;
    return text === hash;
  }
}

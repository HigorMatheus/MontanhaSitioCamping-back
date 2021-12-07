import { randomUUID } from 'crypto';

export class Highlight {
  public readonly id: string;
  title: string;
  description: string;

  constructor(props: Omit<Highlight, 'id'>, id?: string) {
    Object.assign(this, props);
    if (id) {
      this.id = randomUUID();
    }
  }
}

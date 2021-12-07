import { randomUUID } from 'crypto';

export class HighlightPhotos {
  public readonly id: string;
  fileName: string;
  highlightId: string;

  constructor(props: Omit<HighlightPhotos, 'id'>, id?: string) {
    Object.assign(this, props);
    if (id) {
      this.id = randomUUID();
    }
  }
}

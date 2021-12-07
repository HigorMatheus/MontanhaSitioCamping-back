import { Highlight } from '@/domain/model';

export interface IListHighlightsUseCase {
  execute(): Promise<IListHighlightsUseCase.Model[]>;
}

export namespace IListHighlightsUseCase {
  export type Model = Highlight;
}

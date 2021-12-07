import { Highlight } from '../model';

export interface ICreateHighlight {
  create(props: ICreateHighlight.Props): Promise<ICreateHighlight.Model>;
}

export namespace ICreateHighlight {
  export type Props = {
    title: string;
    description: string;
  };
  export type Model = Highlight;
}

export interface IGetHighlightByTitle {
  getHighlightByTitle(title: string): Promise<Highlight | null>;
}

export interface IGetHighlight {
  findByID(id: string): Promise<Highlight>;
}

export interface IListHighlights {
  findAll(): Promise<Highlight[]>;
}

export interface IHighlightsRepository
  extends ICreateHighlight,
    IListHighlights,
    IGetHighlightByTitle {}

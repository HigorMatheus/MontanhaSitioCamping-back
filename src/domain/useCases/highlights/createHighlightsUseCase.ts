import { Highlight } from '@/domain/model';

export interface ICreateHighlight {
  execute(props: ICreateHighlight.Props): Promise<ICreateHighlight.Model>;
}

export namespace ICreateHighlight {
  export type Props = {
    title: string;
    description: string;
  };
  export type Model = Highlight;
}

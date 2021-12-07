import { HighlightPhotos } from '../model';

export interface ICreateHighlightPhotos {
  create(
    props: ICreateHighlightPhotos.Props,
  ): Promise<ICreateHighlightPhotos.Model>;
}

export namespace ICreateHighlightPhotos {
  export type Props = {
    fileName: string;
    highlightId: string;
  };
  export type Model = HighlightPhotos;
}

export interface IGetHighlightByID {
  getHighlightPotsByHighlightIdId(
    highlightId: string,
  ): Promise<HighlightPhotos[]>;
}

export interface IHighlightPhotosRepository
  extends ICreateHighlightPhotos,
    IGetHighlightByID {}

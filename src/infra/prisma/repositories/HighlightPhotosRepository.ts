import { ICreateHighlightPhotos } from '@/domain/repositories';

import { prismaClient } from '..';

export class HighlightPhotosRepository implements ICreateHighlightPhotos {
  public async create({
    fileName,
    highlightId,
  }: ICreateHighlightPhotos.Props): Promise<ICreateHighlightPhotos.Model> {
    const photo = await prismaClient.highlightsPhotos.create({
      data: { fileName, highlightId },
    });

    return photo;
  }
}

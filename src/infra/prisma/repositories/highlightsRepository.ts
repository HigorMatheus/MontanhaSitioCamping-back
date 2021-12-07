import { Highlight } from '@/domain/model';
import {
  ICreateHighlight,
  IListHighlights,
  IGetHighlightByTitle,
} from '@/domain/repositories/highlightsRepository';
import { prismaClient } from '@/infra/prisma';

export class HighlightsRepository
  implements ICreateHighlight, IListHighlights, IGetHighlightByTitle
{
  public async create({
    description,
    title,
  }: ICreateHighlight.Props): Promise<ICreateHighlight.Model> {
    const highlight = await prismaClient.highlight.create({
      data: {
        description,
        title,
      },
    });

    return highlight;
  }

  public async findAll(): Promise<Highlight[]> {
    const highlights = await prismaClient.highlight.findMany();

    return highlights;
  }

  public async getHighlightByTitle(title: string): Promise<Highlight | null> {
    const highlight = await prismaClient.highlight.findFirst({
      where: { title },
    });
    return highlight;
  }
}

import { inject, injectable } from 'tsyringe';

import { IHighlightsRepository } from '@/domain/repositories/highlightsRepository';
import { ICreateHighlight } from '@/domain/useCases';

@injectable()
export class CreateHighlightsService implements ICreateHighlight {
  constructor(
    @inject('HighlightsRepository')
    public highlightsRepository: IHighlightsRepository,
  ) {}
  public async execute({
    description,
    title,
  }: ICreateHighlight.Props): Promise<ICreateHighlight.Model> {
    const highlight = await this.highlightsRepository.create({
      description,
      title,
    });
    return highlight;
  }
}

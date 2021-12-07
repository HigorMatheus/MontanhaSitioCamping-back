import { Request, Response } from 'express';
import { container } from 'tsyringe';

import {
  CreateHighlightsService,
  ListHighlightsServices,
} from '@/data/useCases';

export class HighlightController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, title } = request.body;

    console.log(request.files);

    const createHighlight = container.resolve(CreateHighlightsService);

    const highlight = await createHighlight.execute({ description, title });

    return response.status(200).json(highlight);
  }
  public async get(request: Request, response: Response): Promise<Response> {
    const listHighlights = container.resolve(ListHighlightsServices);

    const highlights = await listHighlights.execute();

    return response.status(200).json({ highlights });
  }
  public async update(request: Request, response: Response): Promise<Response> {
    return response.status(200);
  }
}

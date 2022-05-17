import { Request, Response } from 'express';
import { ListCharactersService } from './ListCharactersService';

class ListCharactersController {
	constructor(private listCharactersService: ListCharactersService) {}

	handle(request: Request, response: Response) {
		const all = this.listCharactersService.execute();

		return response.json(all);
	}
}

export { ListCharactersController };

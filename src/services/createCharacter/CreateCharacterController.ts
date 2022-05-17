import { Request, Response } from 'express';
import { CreateCharacterService } from './CreateCharacterService';

class CreateCharacterController {
	constructor(private createCharacterService: CreateCharacterService) {}

	handle(request: Request, response: Response) {
		const { name, age, gender } = request.body;

		this.createCharacterService.execute({ name, age, gender });

		return response
			.status(201)
			.json({ message: 'Character succesfully created!' });
	}
}

export { CreateCharacterController };

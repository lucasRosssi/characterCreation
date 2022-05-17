import { Router } from 'express';

import { createCharacterController } from '../services/createCharacter';
import { listCharactersController } from '../services/listCharacters';

const charactersRoutes = Router();

charactersRoutes.post('/', (request, response) => {
	return createCharacterController.handle(request, response);
});

charactersRoutes.get('/', (request, response) => {
	return listCharactersController.handle(request, response);
});

charactersRoutes.put('/stats', (request, response) => {
	const { stats, amount } = request.body;
});

export { charactersRoutes };

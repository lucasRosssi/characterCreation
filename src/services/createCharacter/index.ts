import { CharactersRepository } from '../../repositories/implementations/CharactersRepository';
import { CreateCharacterController } from './CreateCharacterController';
import { CreateCharacterService } from './CreateCharacterService';

const charactersRepository = CharactersRepository.getInstance();
const createCharacterService = new CreateCharacterService(charactersRepository);
const createCharacterController = new CreateCharacterController(
	createCharacterService
);

export { createCharacterController };

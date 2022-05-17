import { CharactersRepository } from '../../repositories/implementations/CharactersRepository';
import { ListCharactersController } from './ListCharactersController';
import { ListCharactersService } from './ListCharactersService';

const charactersRepository = CharactersRepository.getInstance();
const listCharactersService = new ListCharactersService(charactersRepository);
const listCharactersController = new ListCharactersController(
	listCharactersService
);

export { listCharactersController };

import { CharactersRepository } from '../../repositories/implementations/CharactersRepository';

class ListCharactersService {
	constructor(private charactersRepository: CharactersRepository) {}

	execute() {
		const charactersList = this.charactersRepository.list();

		return charactersList;
	}
}

export { ListCharactersService };

import { ICharactersRepository } from '../../repositories/ICharactersRepository';

interface IRequest {
	name: string;
	age: number;
	gender: string;
}

class CreateCharacterService {
	constructor(private charactersRepository: ICharactersRepository) {}

	execute({ name, age, gender }: IRequest): void {
		const characterAlreadyExists = this.charactersRepository.findByName(name);

		if (characterAlreadyExists) {
			throw new Error('Character already exists!');
		}

		this.charactersRepository.create({ name, age, gender });
	}
}

export { CreateCharacterService };

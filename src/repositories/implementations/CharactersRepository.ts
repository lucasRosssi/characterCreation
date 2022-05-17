import { Character } from '../../models/characters/Character';
import {
	ICharactersRepository,
	ICreateCharacterDTO,
} from '../ICharactersRepository';

class CharactersRepository implements ICharactersRepository {
	private characters: Character[];

	private static INSTANCE: CharactersRepository;

	constructor() {
		this.characters = [];
	}

	public static getInstance(): CharactersRepository {
		if (!CharactersRepository.INSTANCE) {
			CharactersRepository.INSTANCE = new CharactersRepository();
		}

		return CharactersRepository.INSTANCE;
	}

	create({ name, age, gender }: ICreateCharacterDTO): void {
		const character = new Character();

		Object.assign(character, {
			name,
			age,
			gender,
		});

		this.characters.push(character);
	}

	list(): Character[] {
		return this.characters;
	}

	findByName(name: string): Character {
		const character = this.characters.find(
			(character) => character.name === name
		);

		return character;
	}
}

export { CharactersRepository };

import { Character } from '../models/characters/Character';

interface ICreateCharacterDTO {
	name: string;
	age: number;
	gender: string;
}

interface ICharactersRepository {
	findByName(name: string): Character;
	list(): Character[];
	create({ name, age, gender }: ICreateCharacterDTO): void;
}

export { ICreateCharacterDTO, ICharactersRepository };

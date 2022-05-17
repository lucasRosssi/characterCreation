import { v4 as uuidv4 } from 'uuid';

class Character {
	id?: string;
	name: string;
	age: number;
	gender: string;
	stats: {
		strength: number;
		agility: number;
		endurance: number;
		intelligence: number;
		willpower: number;
		charisma: number;
	};
	skills: [];

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}

		this.stats = {
			strength: 10,
			agility: 10,
			endurance: 10,
			intelligence: 10,
			willpower: 10,
			charisma: 10,
		};

		this.skills = [];
	}
}

export { Character };

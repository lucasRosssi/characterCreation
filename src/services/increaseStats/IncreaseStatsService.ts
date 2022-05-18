import { StatsDTO } from '../../dtos/StatsDTO';
import { ICharactersRepository } from '../../repositories/ICharactersRepository';

interface IRequest {
	name: string;
	stats: StatsDTO['stat'][];
	amount: number;
}

class IncreaseStatsService {
	constructor(private charactersRepository: ICharactersRepository) {}

	execute({ name, stats, amount }: IRequest) {
		if (stats.length === 0) {
			throw new Error('Must include at least one stat!');
		}
		if (amount <= 0) {
			throw new Error('The amount must be at least 1!');
		}

		const character = this.charactersRepository.findByName(name);

		if (!character) {
			throw new Error('Character not found!');
		}

		if (stats.includes('strength')) {
			character.stats.strength += amount;
		}
		if (stats.includes('agility')) {
			character.stats.agility += amount;
		}
		if (stats.includes('endurance')) {
			character.stats.endurance += amount;
		}
		if (stats.includes('intelligence')) {
			character.stats.intelligence += amount;
		}
		if (stats.includes('willpower')) {
			character.stats.willpower += amount;
		}
		if (stats.includes('charisma')) {
			character.stats.charisma += amount;
		}
	}
}

export { IncreaseStatsService };

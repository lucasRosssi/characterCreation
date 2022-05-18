import { CharactersRepository } from '../../repositories/implementations/CharactersRepository';
import { IncreaseStatsController } from './IncreaseStatsController';
import { IncreaseStatsService } from './IncreaseStatsService';

const charactersRepository = CharactersRepository.getInstance();
const increaseStatsService = new IncreaseStatsService(charactersRepository);
const increaseStatsController = new IncreaseStatsController(
	increaseStatsService
);

export { increaseStatsController };

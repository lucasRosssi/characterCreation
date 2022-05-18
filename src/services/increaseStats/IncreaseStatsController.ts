import { Request, Response } from 'express';
import { IncreaseStatsService } from './IncreaseStatsService';

class IncreaseStatsController {
	constructor(private increaseStatsService: IncreaseStatsService) {}

	handle(request: Request, response: Response) {
		const { name } = request.headers;
		const { stats, amount } = request.body;

		try {
			this.increaseStatsService.execute({ name: String(name), stats, amount });
		} catch (error) {
			return response.status(400).json({ error: error.message });
		}

		return response
			.status(200)
			.json({ message: `Stats increased by ${amount}` });
	}
}

export { IncreaseStatsController };

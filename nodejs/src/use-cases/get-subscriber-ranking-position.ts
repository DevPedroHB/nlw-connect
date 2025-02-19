import { redis } from "@/redis/client";

interface IGetSubscriberRankingPosition {
	subscriberId: string;
}

export async function getSubscriberRankingPosition({
	subscriberId,
}: IGetSubscriberRankingPosition) {
	const rank = await redis.zrevrank("referral:ranking", subscriberId);

	if (rank === null) {
		return {
			position: null,
		};
	}

	const position = rank + 1;

	return {
		position,
	};
}

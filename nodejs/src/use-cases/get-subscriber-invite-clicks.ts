import { redis } from "@/redis/client";

interface IGetSubscriberInviteClicks {
	subscriberId: string;
}

export async function getSubscriberInviteClicks({
	subscriberId,
}: IGetSubscriberInviteClicks) {
	const count = await redis.hget("referral:access-count", subscriberId);

	return {
		count: count ? Number.parseInt(count) : 0,
	};
}

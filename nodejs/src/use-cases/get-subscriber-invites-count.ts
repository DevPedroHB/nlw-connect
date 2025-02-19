import { redis } from "@/redis/client";

interface IGetSubscriberInvitesCount {
	subscriberId: string;
}

export async function getSubscriberInvitesCount({
	subscriberId,
}: IGetSubscriberInvitesCount) {
	const invites = await redis.zscore("referral:ranking", subscriberId);

	return {
		count: invites ? Number.parseInt(invites) : 0,
	};
}

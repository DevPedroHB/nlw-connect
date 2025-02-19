import { redis } from "@/redis/client";

interface IAccessInviteLink {
	subscriberId: string;
}

export async function accessInviteLink({ subscriberId }: IAccessInviteLink) {
	await redis.hincrby("referral:access-count", subscriberId, 1);
}

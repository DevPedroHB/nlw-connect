import { db } from "@/drizzle/client";
import { subscriptions } from "@/drizzle/schemas/subscriptions";
import { redis } from "@/redis/client";
import { eq } from "drizzle-orm";

interface ISubscribeToEvent {
	name: string;
	email: string;
	referrerId?: string | null;
}

export async function subscribeToEvent({
	name,
	email,
	referrerId,
}: ISubscribeToEvent) {
	const subscribers = await db
		.select()
		.from(subscriptions)
		.where(eq(subscriptions.email, email));

	if (subscribers.length > 0) {
		return {
			subscriber: subscribers[0],
		};
	}

	const result = await db
		.insert(subscriptions)
		.values({
			name,
			email,
		})
		.returning();

	if (referrerId) {
		await redis.zincrby("referral:ranking", 1, referrerId);
	}

	const subscriber = result[0];

	return {
		subscriber,
	};
}

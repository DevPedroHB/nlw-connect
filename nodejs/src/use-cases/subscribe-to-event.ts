import { db } from "@/drizzle/client";
import { subscriptions } from "@/drizzle/schemas/subscriptions";

interface ISubscribeToEvent {
	name: string;
	email: string;
}

export async function subscribeToEvent({ name, email }: ISubscribeToEvent) {
	const result = await db
		.insert(subscriptions)
		.values({
			name,
			email,
		})
		.returning();

	const subscriber = result[0];

	return {
		subscriber,
	};
}

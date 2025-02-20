"use server";

import { api } from "@/libs/ky";
import { actionClient } from "@/libs/safe-action";
import { subscriptionSchema } from "@/types/schemas/subscription-schema";

interface ISubscriptionActionResponse {
	subscriberId: string;
}

export const subscriptionAction = actionClient
	.schema(subscriptionSchema)
	.action(async ({ parsedInput }) => {
		const { subscriberId } = await api
			.post("/subscriptions", {
				json: parsedInput,
			})
			.json<ISubscriptionActionResponse>();

		return {
			subscriberId,
		};
	});

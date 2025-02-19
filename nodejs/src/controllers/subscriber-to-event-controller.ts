import { subscribeToEvent } from "@/use-cases/subscribe-to-event";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const subscriberToEventController: FastifyPluginAsyncZod = async (
	app,
) => {
	app.post(
		"/subscriptions",
		{
			schema: {
				summary: "Subscribe someone to the event",
				tags: ["subscriptions"],
				body: z.object({
					name: z.string(),
					email: z.string().email(),
					referrer: z.string().uuid().nullish(),
				}),
				response: {
					201: z.object({
						subscriberId: z.string().uuid(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { name, email, referrer } = request.body;

			const { subscriber } = await subscribeToEvent({
				name,
				email,
				referrerId: referrer,
			});

			return reply.status(201).send({
				subscriberId: subscriber.id,
			});
		},
	);
};

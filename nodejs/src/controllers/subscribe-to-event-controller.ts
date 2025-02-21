import { subscribeToEvent } from "@/use-cases/subscribe-to-event";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const subscribeToEventController: FastifyPluginAsyncZod = async (
	app,
) => {
	app.post(
		"/subscriptions",
		{
			schema: {
				summary: "Subscribe someone to the event",
				tags: ["subscriptions"],
				operationId: "subscribeToEvent",
				body: z.object({
					name: z.string(),
					email: z.string().email(),
					referrerId: z.string().uuid().nullish(),
				}),
				response: {
					201: z.object({
						subscriberId: z.string().uuid(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { name, email, referrerId } = request.body;

			const { subscriber } = await subscribeToEvent({
				name,
				email,
				referrerId,
			});

			return reply.status(201).send({
				subscriberId: subscriber.id,
			});
		},
	);
};

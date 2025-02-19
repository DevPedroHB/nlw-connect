import { getSubscriberInviteClicks } from "@/use-cases/get-subscriber-invite-clicks";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getSubscriberInviteClicksController: FastifyPluginAsyncZod =
	async (app) => {
		app.get(
			"/subscribers/:subscriberId/ranking/clicks",
			{
				schema: {
					summary: "Get subscriber invite clicks count",
					tags: ["referral"],
					params: z.object({
						subscriberId: z.string().uuid(),
					}),
					response: {
						200: z.object({
							count: z.number(),
						}),
					},
				},
			},
			async (request, reply) => {
				const { subscriberId } = request.params;

				const { count } = await getSubscriberInviteClicks({ subscriberId });

				return reply.status(200).send({
					count,
				});
			},
		);
	};

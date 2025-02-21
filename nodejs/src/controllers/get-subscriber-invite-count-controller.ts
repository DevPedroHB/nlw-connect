import { getSubscriberInvitesCount } from "@/use-cases/get-subscriber-invites-count";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getSubscriberInviteCountController: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get(
		"/subscribers/:subscriberId/ranking/count",
		{
			schema: {
				summary: "Get subscriber ranking invites count",
				tags: ["referral"],
				operationId: "getSubscriberInviteCount",
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

			const { count } = await getSubscriberInvitesCount({ subscriberId });

			return reply.status(200).send({
				count,
			});
		},
	);
};

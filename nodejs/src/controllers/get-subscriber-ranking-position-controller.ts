import { getSubscriberRankingPosition } from "@/use-cases/get-subscriber-ranking-position";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getSubscriberRankingPositionController: FastifyPluginAsyncZod =
	async (app) => {
		app.get(
			"/subscribers/:subscriberId/ranking/position",
			{
				schema: {
					summary: "Get subscriber ranking position",
					tags: ["referral"],
					operationId: "getSubscriberRankingPosition",
					params: z.object({
						subscriberId: z.string(),
					}),
					response: {
						200: z.object({
							position: z.number().nullable(),
						}),
					},
				},
			},
			async (request, reply) => {
				const { subscriberId } = request.params;

				const { position } = await getSubscriberRankingPosition({
					subscriberId,
				});

				return reply.status(200).send({
					position,
				});
			},
		);
	};

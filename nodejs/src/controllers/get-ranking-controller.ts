import { getRanking } from "@/use-cases/get-ranking";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const getRankingController: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/ranking",
		{
			schema: {
				summary: "Get ranking",
				operationId: "getRanking",
				tags: ["referral"],
				response: {
					200: z.object({
						ranking: z.array(
							z.object({
								id: z.string(),
								name: z.string(),
								score: z.number(),
							}),
						),
					}),
				},
			},
		},
		async (_, reply) => {
			const { rankingWithScore } = await getRanking();

			return reply.status(200).send({
				ranking: rankingWithScore,
			});
		},
	);
};

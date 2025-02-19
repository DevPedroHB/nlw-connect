import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import fastify from "fastify";
import {
	type ZodTypeProvider,
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import { accessInviteLinkController } from "./controllers/access-invite-link-controller";
import { getRankingController } from "./controllers/get-ranking-controller";
import { getSubscriberInviteClicksController } from "./controllers/get-subscriber-invite-clicks-controller";
import { getSubscriberInvitesCountController } from "./controllers/get-subscriber-invites-count-controller";
import { getSubscriberRankingPositionController } from "./controllers/get-subscriber-ranking-position-controller";
import { subscriberToEventController } from "./controllers/subscriber-to-event-controller";
import { env } from "./env";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
	origin: true,
});

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "NLW Connect",
			version: "1.0.0",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
	routePrefix: "/docs",
});

app.register(subscriberToEventController);
app.register(accessInviteLinkController);
app.register(getSubscriberInviteClicksController);
app.register(getSubscriberInvitesCountController);
app.register(getSubscriberRankingPositionController);
app.register(getRankingController);

app.listen({ port: env.PORT }).then(() => {
	console.log(`🚀 HTTP server running on port ${env.PORT}`);
});

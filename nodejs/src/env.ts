import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	PORT: z.coerce.number().default(3333),
	WEB_URL: z.string().url().default("http://localhost:3000"),
	POSTGRES_URL: z.string().url(),
	REDIS_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);

import { z } from "zod";

export const subscriptionSchema = z.object({
	name: z
		.string({ required_error: "Nome é obrigatório" })
		.min(1, { message: "Nome deve ter pelo menos 1 caractere" }),
	email: z
		.string({ required_error: "Email é obrigatório" })
		.min(1, { message: "Email deve ter pelo menos 1 caractere" })
		.email("Email inválido"),
});

export type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

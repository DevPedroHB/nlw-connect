import { z } from "zod";

export const subscriptionSchema = z.object({
	name: z
		.string({ required_error: "Nome é obrigatório" })
		.min(1, { message: "Nome deve ter pelo menos 1 caractere" }),
	email: z
		.string({ required_error: "Email é obrigatório" })
		.min(1, { message: "Email deve ter pelo menos 1 caractere" })
		.email("Email inválido"),
	referrerId: z
		.string({ invalid_type_error: "ID do referenciador deve ser uma string" })
		.uuid("ID do referenciador inválido")
		.nullish(),
});

export type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

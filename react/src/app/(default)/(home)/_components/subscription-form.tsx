"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToEvent } from "@/types/api";
import {
	type SubscriptionSchema,
	subscriptionSchema,
} from "@/types/schemas/subscription-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SubscriptionForm() {
	const router = useRouter();
	const [referrerId] = useQueryState("referrerId");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	});

	async function handleSubscribeToEvent(data: SubscriptionSchema) {
		const { subscriberId } = await subscribeToEvent({
			...data,
			referrerId,
		});

		toast.success("Inscrição realizada com sucesso!");

		router.push(`/invite/${subscriberId}`);
	}

	return (
		<form
			onSubmit={handleSubmit(handleSubscribeToEvent)}
			className="flex flex-col gap-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl w-full md:max-w-[27.5rem]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<Input.Root>
						<Input.Slot>
							<User />
						</Input.Slot>
						<Input.Control
							type="text"
							placeholder="Nome completo"
							required
							{...register("name")}
						/>
					</Input.Root>
					{errors.name && (
						<p className="font-semibold text-danger text-xs">
							{errors.name.message}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<Input.Root>
						<Input.Slot>
							<Mail />
						</Input.Slot>
						<Input.Control
							type="email"
							placeholder="E-mail"
							required
							{...register("email")}
						/>
					</Input.Root>
					{errors.email && (
						<p className="font-semibold text-danger text-xs">
							{errors.email.message}
						</p>
					)}
				</div>
			</div>
			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}

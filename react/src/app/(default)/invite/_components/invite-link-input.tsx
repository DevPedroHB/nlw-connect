"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Link } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

export function InviteLinkInput() {
	const inviteLink = "http://localhost:3000/invite/12345678-1234-1234-12345678";
	const [_, copyFn] = useCopyToClipboard();

	async function handleCopy() {
		copyFn(inviteLink)
			.then(() => {
				toast.success("O link de convite foi copiado com sucesso!");
			})
			.catch((error) => {
				console.error("Não foi possível copiar o link de convite.", error);

				toast.error("Não foi possível copiar o link de convite.");
			});
	}

	return (
		<Input.Root>
			<Input.Slot>
				<Link className="size-5" />
			</Input.Slot>
			<Input.Control defaultValue={inviteLink} readOnly />
			<Button
				type="button"
				variant="icon"
				onClick={handleCopy}
				className="-mr-2"
			>
				<Copy className="size-5" />
			</Button>
		</Input.Root>
	);
}

import logoSvg from "@/components/svgs/logo.svg";
import { env } from "@/env";
import type { Metadata } from "next";
import Image from "next/image";
import { InviteLinkInput } from "../_components/invite-link-input";
import { InviteStats } from "../_components/invite-stats";
import { ReferralRanking } from "../_components/referral-ranking";

export const metadata: Metadata = {
	title: "Inscrição confirmada",
};

interface IInvite {
	params: Promise<{
		subscriberId: string;
	}>;
}

export default async function Invite({ params }: IInvite) {
	const { subscriberId } = await params;
	const inviteUrl = new URL(`/invites/${subscriberId}`, env.API_URL);

	return (
		<div className="flex md:flex-row flex-col justify-between items-center gap-16 min-h-dvh">
			<div className="flex flex-col gap-10 w-full max-w-[34.375rem]">
				<Image
					src={logoSvg}
					alt="Logotipo DevStage"
					width={108.5}
					height={30}
				/>
				<div className="flex flex-col gap-2">
					<h1 className="font-heading font-semibold text-gray-100 text-4xl leading-none">
						Inscrição confirmada
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link envido para seu e-mail.
					</p>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>
					<InviteLinkInput inviteUrl={inviteUrl.toString()} />
					<InviteStats subscriberId={subscriberId} />
				</div>
			</div>
			<ReferralRanking />
		</div>
	);
}

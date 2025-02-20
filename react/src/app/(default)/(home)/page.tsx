import logoSvg from "@/components/svgs/logo.svg";
import type { Metadata } from "next";
import Image from "next/image";
import { AboutTheEvent } from "./_components/about-the-event";
import { SubscriptionForm } from "./_components/subscription-form";

export const metadata: Metadata = {
	title: "Início",
};

export default function Home() {
	return (
		<div className="flex flex-col justify-center gap-16 min-h-dvh">
			<div className="flex flex-col items-center md:items-start gap-8">
				<Image
					src={logoSvg}
					alt="Logotipo DevStage"
					width={108.5}
					height={30}
				/>
				<h1 className="flex flex-col font-heading font-medium text-4xl md:text-7xl md:text-left text-center leading-none">
					<span className="text-blue">CodeCraft</span> Summit 2025
				</h1>
			</div>
			<div className="flex md:flex-row flex-col items-stretch gap-5">
				<AboutTheEvent />
				<SubscriptionForm />
			</div>
		</div>
	);
}

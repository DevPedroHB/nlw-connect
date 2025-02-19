import { cn } from "@/functions/cn";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

const oxanium = Oxanium({
	subsets: ["latin"],
	variable: "--font-oxanium",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | DevStage",
		default: "DevStage",
	},
	description: "Projeto React desenvolvido no NLW Connect",
};

interface IRootLayout {
	children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
	return (
		<html
			lang="pt-BR"
			className={cn(
				"antialiased scroll-smooth",
				montserrat.variable,
				oxanium.variable,
			)}
		>
			<body className="bg-[url(/images/background.png)] bg-gray-900 bg-no-repeat bg-top md:bg-right-top text-gray-100">
				{children}
			</body>
		</html>
	);
}

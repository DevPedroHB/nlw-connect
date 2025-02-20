import cooper from "@/components/svgs/medal-cooper.svg";
import gold from "@/components/svgs/medal-gold.svg";
import silver from "@/components/svgs/medal-silver.svg";
import Image from "next/image";

export function ReferralRanking() {
	return (
		<div className="flex flex-col gap-5 w-full max-w-[27.5rem]">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="flex flex-col gap-4">
				<div className="relative flex flex-col justify-center gap-3 bg-gray-700 p-6 border border-gray-600 rounded-xl">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold">1º</span> | Pedro Henrique
					</span>
					<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
						1030
					</span>
					<Image
						src={gold}
						alt="Medalha de ouro"
						className="top-0 right-8 absolute"
					/>
				</div>
				<div className="relative flex flex-col justify-center gap-3 bg-gray-700 p-6 border border-gray-600 rounded-xl">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold">2º</span> | Pedro Henrique
					</span>
					<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
						1030
					</span>
					<Image
						src={silver}
						alt="Medalha de ouro"
						className="top-0 right-8 absolute"
					/>
				</div>
				<div className="relative flex flex-col justify-center gap-3 bg-gray-700 p-6 border border-gray-600 rounded-xl">
					<span className="text-gray-300 text-sm leading-none">
						<span className="font-semibold">3º</span> | Pedro Henrique
					</span>
					<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
						1030
					</span>
					<Image
						src={cooper}
						alt="Medalha de ouro"
						className="top-0 right-8 absolute"
					/>
				</div>
			</div>
		</div>
	);
}

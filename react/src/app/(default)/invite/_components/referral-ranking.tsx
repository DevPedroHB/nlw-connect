import cooper from "@/components/svgs/medal-cooper.svg";
import gold from "@/components/svgs/medal-gold.svg";
import silver from "@/components/svgs/medal-silver.svg";
import { getRanking } from "@/types/api";
import Image from "next/image";

export async function ReferralRanking() {
	const { ranking } = await getRanking();

	return (
		<div className="flex flex-col gap-5 w-full max-w-[27.5rem]">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="flex flex-col gap-4">
				{ranking.map((rank, index) => {
					const rankingPosition = index + 1;

					return (
						<div
							key={rank.id}
							className="relative flex flex-col justify-center gap-3 bg-gray-700 p-6 border border-gray-600 rounded-xl"
						>
							<span className="text-gray-300 text-sm leading-none">
								<span className="font-semibold">{rankingPosition}º</span> |{" "}
								{rank.name}
							</span>
							<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
								{rank.score}
							</span>
							{rankingPosition === 1 && (
								<Image
									src={gold}
									alt="Medalha de ouro"
									className="top-0 right-8 absolute"
								/>
							)}
							{rankingPosition === 2 && (
								<Image
									src={silver}
									alt="Medalha de prata"
									className="top-0 right-8 absolute"
								/>
							)}
							{rankingPosition === 3 && (
								<Image
									src={cooper}
									alt="Medalha de cobre"
									className="top-0 right-8 absolute"
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

import logoSvg from "@/components/svgs/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Início",
};

export default function Home() {
	return (
		<main className="mx-auto px-5 py-8 md:py-0 max-w-[77.5rem]">
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
					<div className="flex flex-col flex-1 gap-6 bg-gray-700 p-6 border border-gray-600 rounded-2xl">
						<div className="flex justify-between items-center">
							<h2 className="font-heading font-semibold text-gray-200 text-xl">
								Sobre o evento
							</h2>
							<span className="flex items-center gap-2 font-semibold text-purple text-xs">
								<Radio className="size-5" /> AO VIVO
							</span>
						</div>
						<p className="text-gray-300 text-sm md:text-base leading-relaxed">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
							corrupti pariatur, dolorem ducimus, commodi omnis, officia cumque
							dicta voluptatum minus cupiditate nesciunt. Non, minima aut. Hic
							obcaecati eaque ea debitis. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nisi saepe cumque eius quaerat dolor neque
							voluptate reiciendis, repellat minima voluptatibus provident quasi
							tempora laborum impedit id laboriosam veritatis fugiat eos?
						</p>
					</div>
					<form className="flex flex-col gap-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl w-full md:max-w-[27.5rem]">
						<h2 className="font-heading font-semibold text-gray-200 text-xl">
							Inscrição
						</h2>
						<div className="flex flex-col gap-3">
							<Input.Root>
								<Input.Slot>
									<User />
								</Input.Slot>
								<Input.Control
									type="text"
									placeholder="Nome completo"
									required
								/>
							</Input.Root>
							<Input.Root>
								<Input.Slot>
									<Mail />
								</Input.Slot>
								<Input.Control type="email" placeholder="E-mail" required />
							</Input.Root>
						</div>
						<Button type="submit">
							Confirmar
							<ArrowRight />
						</Button>
					</form>
				</div>
			</div>
		</main>
	);
}

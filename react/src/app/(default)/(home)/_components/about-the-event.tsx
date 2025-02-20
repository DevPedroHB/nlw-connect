import { Radio } from "lucide-react";

export function AboutTheEvent() {
	return (
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
				corrupti pariatur, dolorem ducimus, commodi omnis, officia cumque dicta
				voluptatum minus cupiditate nesciunt. Non, minima aut. Hic obcaecati
				eaque ea debitis. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Nisi saepe cumque eius quaerat dolor neque voluptate reiciendis,
				repellat minima voluptatibus provident quasi tempora laborum impedit id
				laboriosam veritatis fugiat eos?
			</p>
		</div>
	);
}

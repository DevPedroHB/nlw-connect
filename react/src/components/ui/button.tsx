import type { ComponentProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
	base: [
		"flex cursor-pointer items-center bg-gray-500 text-blue transition-all",
		"hover:bg-blue hover:text-gray-900",
	],
	variants: {
		variant: {
			primary:
				"h-12 w-full justify-between gap-2 rounded-xl px-5 font-semibold",
			icon: "justify-center rounded-md p-1.5",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

interface IButton
	extends ComponentProps<"button">,
		VariantProps<typeof button> {}

export function Button({ className, variant, ...rest }: IButton) {
	return <button className={button({ variant, className })} {...rest} />;
}

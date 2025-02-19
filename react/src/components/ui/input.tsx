import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";

interface IInputRoot extends ComponentProps<"div"> {
	error?: boolean;
}

function InputRoot({ error = false, className, ...rest }: IInputRoot) {
	return (
		<div
			data-error={error}
			className={cn(
				"group flex items-center gap-2 bg-gray-800 px-4 border border-gray-600 rounded-xl h-12",
				"data-[error=true]:border-danger",
				className,
			)}
			{...rest}
		/>
	);
}

interface IInputControl extends ComponentProps<"input"> {}

function InputControl({ className, ...rest }: IInputControl) {
	return (
		<input
			className={cn("flex-1 outline-none placeholder-gray-400", className)}
			{...rest}
		/>
	);
}

interface IInputSlot extends ComponentProps<"span"> {}

function InputSlot({ className, ...rest }: IInputSlot) {
	return (
		<span
			className={cn(
				"text-gray-400",
				"group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger",
				className,
			)}
			{...rest}
		/>
	);
}

export const Input = {
	Root: InputRoot,
	Control: InputControl,
	Slot: InputSlot,
};

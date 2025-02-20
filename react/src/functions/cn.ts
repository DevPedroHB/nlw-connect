import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A version of `clsx` that supports Tailwind CSS classes.
 * If you pass in a single class as a string, it will be passed through to `clsx`.
 * If you pass in an object with tailwind classes as keys, it will be passed through to `twMerge`.
 *
 * @example
 * cn("fixed top-0 left-0") // => "fixed top-0 left-0"
 * cn({ fixed: true, top: 0, left: 0 }) // => "fixed top-0 left-0"
 * cn(["fixed", { top: 0, left: 0 }]) // => "fixed top-0 left-0"
 * @param inputs
 * @returns A class string
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

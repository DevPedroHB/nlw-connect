/**
 * Transforms a given string into a URL-friendly identifier.
 *
 * This function performs the following transformations:
 * - Trims leading and trailing whitespace.
 * - Converts all characters to lowercase.
 * - Normalizes the string to decompose accented characters.
 * - Removes diacritics (accent marks) from characters.
 * - Removes special characters, allowing only letters, numbers, spaces, and hyphens.
 * - Replaces spaces with hyphens.
 * - Collapses multiple consecutive hyphens into a single hyphen.
 *
 * @param input - The string to be transformed.
 * @returns A URL-friendly version of the input string.
 */
export function formatStringToId(input: string): string {
	return input
		.trim() // Remove espaços no início e no fim
		.toLowerCase() // Converte para minúsculas
		.normalize("NFD") // Separa caracteres acentuados em caracteres básicos e diacríticos
		.replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos
		.replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais, permitindo apenas letras, números, espaços e hífens
		.replace(/\s+/g, "-") // Substitui espaços por hífens
		.replace(/-+/g, "-"); // Substitui múltiplos hífens por um único hífen
}

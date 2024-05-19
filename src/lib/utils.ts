import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (string: string) => {
	if (string)
		return (
			string.charAt(0).toLocaleUpperCase() +
			string.slice(1).toLocaleLowerCase()
		);
};

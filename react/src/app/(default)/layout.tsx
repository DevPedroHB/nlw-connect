import type { ReactNode } from "react";

interface IDefaultLayout {
	children: ReactNode;
}

export default function DefaultLayout({ children }: Readonly<IDefaultLayout>) {
	return (
		<main className="mx-auto px-5 py-8 md:py-0 max-w-[77.5rem]">
			{children}
		</main>
	);
}

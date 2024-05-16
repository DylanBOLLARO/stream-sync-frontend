"use client";

import { Card, CardDescription } from "@/components/ui/card";
import { useMovies } from "@/services/queries";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const { data: movies_list } = useMovies();

	return (
		<div className="flex flex-wrap gap-5 w-full justify-center">
			{movies_list?.map((movie: any) => {
				return (
					<Link
						key={movie.id}
						href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}movie/${movie?.id}`}
					>
						<Card className="flex flex-col w-44 select-none cursor-pointer hover:bg-primary-foreground transition-all duration-75">
							<Image
								className="w-auto"
								src={`${process.env.NEXT_PUBLIC_BACKEND_BASE}/${movie?.image}`}
								width={300}
								height={300}
								alt="Picture of the author"
								quality={20}
							/>
							<CardDescription className="line-clamp-1 text-sm text-center p-1">
								{movie?.title}
							</CardDescription>
						</Card>
					</Link>
				);
			})}
		</div>
	);
}

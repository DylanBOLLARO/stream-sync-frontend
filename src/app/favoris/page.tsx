"use client";

import CardMovieList from "@/components/CardMovieList";
import { useFavorite } from "@/services/queries";
import { useEffect, useState } from "react";

export default function Page() {
	const [localStorageStudent, setLocalStorageStudent] = useState<
		Array<number>
	>([]);

	useEffect(() => {
		const storedValue = localStorage.getItem("stream-sync-favorite");
		if (storedValue) {
			setLocalStorageStudent(JSON.parse(storedValue));
		}
	}, []);

	const { data: movies } = useFavorite({ select: localStorageStudent });

	return (
		<div className="flex flex-col gap-3 max-w-5xl w-full">
			<h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl text-center mb-2">
				All your favorites:
			</h2>

			{!movies && (
				<h2 className="text-xl self-center text-center font-semibold flex-1 my-5">
					{`You don't have any favorite`}
				</h2>
			)}

			{movies && (
				<div className="flex flex-wrap gap-5 w-full justify-center">
					{movies.length > 0 &&
						movies.map((movie: any) => {
							return (
								<CardMovieList key={movie.id} movie={movie} />
							);
						})}
				</div>
			)}
		</div>
	);
}

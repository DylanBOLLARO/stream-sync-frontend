"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useMovie } from "@/services/queries";
import Image from "next/image";
import "@vidstack/react/player/styles/base.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
export default function Page({ params }: { params: { id: string } }) {
	const { isPending, data: movie } = useMovie(+params.id);

	if (isPending)
		return (
			<h2 className="text-xl self-center text-center font-semibold flex-1">
				Loading...
			</h2>
		);

	return (
		<div className="flex flex-col gap-5 w-full">
			<div className="flex flex-row md:flex-row gap-5 justify-between select-none">
				<Button
					onClick={() => history.back()}
					variant={"secondary"}
					className="gap-3"
				>
					<ChevronLeft />
					<p className="max-md:hidden">Back</p>
				</Button>
			</div>
			<h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-center mb-2">
				{movie.title}
			</h1>
			<Card className="flex flex-row">
				<Image
					className="w-auto"
					src={`${process.env.NEXT_PUBLIC_BACKEND_BASE}/${movie?.image}`}
					width={250}
					height={250}
					alt="Picture of the author"
				/>
				<div className="p-3">
					<p>Note: {movie.audience_rating}</p>
					<p>Durée: {movie.duration}</p>
					<div>
						<p>Genre:</p>
						{movie.genres.map((genre: any) => {
							return <Badge key={genre}>{genre}</Badge>;
						})}
					</div>
					<div>
						<p>Réalisateur:</p>
						{movie.directors.map((director: any) => {
							return <Badge key={director}>{director}</Badge>;
						})}
					</div>
					<div>
						<p>Acteurs:</p>
						{movie.actors.map((actor: any) => {
							return <Badge key={actor}>{actor}</Badge>;
						})}
					</div>
				</div>
			</Card>
			<p>{movie.synopsis}</p>
			<Card className="p-2">
				<video
					preload="none"
					controls
					src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/video/stream/1`}
				/>
			</Card>
		</div>
	);
}

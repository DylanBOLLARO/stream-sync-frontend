import React from "react";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const CardMoviePresentation = ({ movie }: any) => {
	return movie ? (
		<Card className="flex max-sm:flex-col">
			<Image
				className="w-auto"
				src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${movie?.image}`}
				width={250}
				height={250}
				alt={movie.title}
			/>
			<div className="flex flex-col p-3 gap-5">
				<div className="flex flex-wrap gap-3">
					<p>Réalisateur:</p>
					{movie.directors.map((director: any) => {
						return <Badge key={director}>{director}</Badge>;
					})}
				</div>
				<div className="flex flex-wrap gap-3">
					<p>Acteurs:</p>
					{movie.actors.map((actor: any) => {
						return <Badge key={actor}>{actor}</Badge>;
					})}
				</div>

				<p>Durée: {movie.duration}</p>

				<p>Note: {movie.audience_rating} /5</p>
				<div className="flex flex-wrap gap-3">
					<p>Genre:</p>
					{movie.genres.map((genre: any) => {
						return <Badge key={genre}>{genre}</Badge>;
					})}
				</div>
			</div>
		</Card>
	) : null;
};

export default CardMoviePresentation;

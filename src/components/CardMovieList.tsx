import React from "react";
import Link from "next/link";
import { Card, CardDescription } from "./ui/card";
import Image from "next/image";

const CardMovieList = ({ movie }: any) => {
	return movie ? (
		<Link key={movie.id} href={`movie/${movie.id}`}>
			<Card className="flex flex-col w-44 select-none cursor-pointer hover:bg-primary-foreground transition-all duration-75">
				<Image
					className="w-auto"
					src={`${process.env.NEXT_PUBLIC_BACKEND_BASE}/${movie?.image}`}
					width={300}
					height={300}
					alt={movie?.title}
					quality={20}
				/>
				<CardDescription className="line-clamp-1 text-sm text-center p-1">
					{movie?.title}
				</CardDescription>
			</Card>
		</Link>
	) : null;
};

export default CardMovieList;

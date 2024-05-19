"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useMovie } from "@/services/queries";
import Image from "next/image";
import "@vidstack/react/player/styles/base.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star } from "lucide-react";
import { useEffect, useState } from "react";
import CardMoviePresentation from "@/components/CardMoviePresentation";
export default function Page({ params }: { params: { id: string } }) {
	const { isPending, data: movie } = useMovie(+params.id);
	const [localStorageStudent, setLocalStorageStudent] = useState<
		Array<number>
	>([]);

	useEffect(() => {
		const storedValue = localStorage.getItem("stream-sync-favorite");
		if (storedValue) {
			setLocalStorageStudent(JSON.parse(storedValue));
		}
	}, []);

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
				{localStorageStudent.includes(+params.id) ? (
					<Button
						onClick={() => {
							if (localStorageStudent) {
								let local_localStorage: Array<number> = [
									...localStorageStudent
								];
								if (local_localStorage.includes(+params.id)) {
									local_localStorage =
										local_localStorage.filter(
											(l: number) => l !== +params.id
										);
								} else {
									local_localStorage.push(+params.id);
								}
								setLocalStorageStudent(local_localStorage);
								localStorage.setItem(
									"stream-sync-favorite",
									JSON.stringify(local_localStorage)
								);
							} else {
								let local_localStorage: Array<number> = [
									+params.id
								];
								setLocalStorageStudent(local_localStorage);
								localStorage.setItem(
									"stream-sync-favorite",
									JSON.stringify(local_localStorage)
								);
							}
						}}
						className="gap-3"
					>
						<p className="max-md:hidden">Remove from favorite</p>
						<Star />
					</Button>
				) : (
					<Button
						variant={"ghost"}
						onClick={() => {
							if (localStorageStudent) {
								let local_localStorage: Array<number> = [
									...localStorageStudent
								];
								if (local_localStorage.includes(+params.id)) {
									local_localStorage =
										local_localStorage.filter(
											(l: number) => l !== +params.id
										);
								} else {
									local_localStorage.push(+params.id);
								}
								setLocalStorageStudent(local_localStorage);
								localStorage.setItem(
									"stream-sync-favorite",
									JSON.stringify(local_localStorage)
								);
							} else {
								let local_localStorage: Array<number> = [
									+params.id
								];
								setLocalStorageStudent(local_localStorage);
								localStorage.setItem(
									"stream-sync-favorite",
									JSON.stringify(local_localStorage)
								);
							}
						}}
						className="gap-3"
					>
						<p className="max-md:hidden">Add to favorite</p>
						<Star />
					</Button>
				)}
			</div>

			<h1 className="scroll-m-20 text-xl font-extrabold tracking-tight sm:text-3xl text-center mb-2">
				{movie.title}
			</h1>

			<CardMoviePresentation movie={movie} />

			<p className="text-justify">{movie.synopsis}</p>

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

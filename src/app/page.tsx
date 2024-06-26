"use client";

import CardMovieList from "@/components/CardMovieList";
import PaginationControls from "@/components/PaginationControls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMovies, useSearch } from "@/services/queries";
import { Search, SquareX } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";

export default function Home({ searchParams }: any) {
	const page = (searchParams?.page ?? 1) < 1 ? 1 : searchParams?.page ?? 1;
	const search = searchParams?.search ?? "";
	const refInputSearch = useRef<string>("");
	const formRef = useRef<HTMLFormElement | null>(null);
	const router = useRouter();
	const pathname = usePathname();
	const search_params = useSearchParams();

	const [advancedSearchParams, setAdvancedSearchParams] = useState<any>({
		page,
		search: search ?? ""
	});

	const {
		isPending,
		error,
		data: movies_list
	} = useMovies(advancedSearchParams);

	const { data: searchResult } = useSearch(search, advancedSearchParams);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(search_params.toString());
			params.set(name, value);

			return params.toString();
		},
		[search_params]
	);

	const resetForm = () => {
		if (formRef.current) formRef.current.reset();
	};

	const handleInputChange = (str: string) => {
		refInputSearch.current = str;
		setAdvancedSearchParams({ ...advancedSearchParams, search: str });
		router.push(pathname + "?" + createQueryString("search", str));
	};

	if (error)
		return (
			<h2 className="text-xl self-center text-center font-semibold flex-1">
				{"An error has occurred: " + error.message}
			</h2>
		);

	return (
		<div className="flex flex-col gap-5 w-full justify-center">
			<form className="w-1/2 mx-auto" ref={formRef}>
				<div className="relative">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						value={search}
						type="search"
						placeholder="Search..."
						className="pl-10"
						onChange={(e) => {
							handleInputChange(e.target.value);
						}}
					/>
				</div>
			</form>

			{isPending && (
				<h2 className="text-xl self-center text-center font-semibold flex-1">
					Loading...
				</h2>
			)}

			{refInputSearch.current && (
				<div className="flex flex-row justify-center gap-5">
					<h2 className="text-xl text-center font-semibold my-5">
						Results for the search:{" "}
						<span className="font-bold">
							{refInputSearch.current}
						</span>
					</h2>
					<Button
						className="self-center px-2 py-1 rounded gap-3"
						onClick={() => {
							resetForm();
							refInputSearch.current = "";
							router.push(
								pathname + "?" + createQueryString("search", ``)
							);
						}}
					>
						<p>Cancel search</p>
						<SquareX className="w-8 h-8" />
					</Button>
				</div>
			)}

			{searchResult && (
				<>
					{searchResult.length > 0 && (
						<div className="flex flex-wrap gap-5 w-full justify-center">
							{searchResult.map((movie: any) => {
								return (
									<CardMovieList
										key={movie.id}
										movie={movie}
									/>
								);
							})}
						</div>
					)}

					{searchResult.length === 0 && (
						<h2 className="text-xl self-center text-center font-semibold flex-1 my-5">
							No matches found for your search
						</h2>
					)}
				</>
			)}

			{movies_list && (
				<div className="flex flex-wrap gap-5 w-full justify-center">
					{!isPending &&
						!searchResult &&
						movies_list.length > 0 &&
						movies_list.map((movie: any) => {
							return (
								<CardMovieList key={movie.id} movie={movie} />
							);
						})}

					{!isPending &&
						!searchResult &&
						movies_list.length === 0 && (
							<h2 className="text-xl self-center text-center font-semibold flex-1 my-5">
								No matches found for your search
							</h2>
						)}
				</div>
			)}

			<PaginationControls page={page} search={refInputSearch.current} />
		</div>
	);
}

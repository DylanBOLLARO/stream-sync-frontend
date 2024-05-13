import { useQuery } from "@tanstack/react-query";
import { getMovie, getMovies } from "./api";

export function useMovies() {
	return useQuery({
		queryKey: ["movies"],
		queryFn: getMovies,
		refetchOnWindowFocus: false
	});
}

export function useMovie(id: number) {
	return useQuery({
		queryKey: ["movie", { id }],
		queryFn: () => getMovie(id),
		refetchOnWindowFocus: false
	});
}

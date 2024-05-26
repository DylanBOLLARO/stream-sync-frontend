import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getFavorite, getMovie, getMovies, getSearch } from "./api";

export function useMovies(params: any) {
	return useQuery({
		queryKey: ["movies", { params }],
		queryFn: () => getMovies(params),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData
	});
}

export function useMovie(id: number) {
	return useQuery({
		queryKey: ["movie", { id }],
		queryFn: () => getMovie(id),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData
	});
}

export function useSearch(str: string, params: any) {
	return useQuery({
		queryKey: ["searchMovies", { str, params }],
		queryFn: () => getSearch(str, params),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData
	});
}

export function useFavorite(params: any) {
	return useQuery({
		queryKey: ["favorite", { params }],
		queryFn: () => getFavorite(params),
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData
	});
}

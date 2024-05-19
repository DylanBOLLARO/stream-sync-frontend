import { AdvancedSearchParams } from "./interface";
import { axiosQuery } from "./networking";

export const getMovies = async (queryParams: AdvancedSearchParams) => {
	return await axiosQuery({ url: "/movie", queryParams });
};

export const getMovie = async (id: number) => {
	return await axiosQuery({ url: `/movie/${id}` });
};

export const getSearch = async (
	stringSearch: string,
	queryParams: AdvancedSearchParams
) => {
	if (stringSearch)
		return await axiosQuery({
			url: `/movie/filter/${stringSearch}`,
			queryParams
		});
};

export const getFavorite = async (queryParams: { select: Array<number> }) => {
	return await axiosQuery({ url: `/movie/favorite`, queryParams });
};

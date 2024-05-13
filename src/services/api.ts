import { axiosQuery } from "./networking";

export const getMovies = async () => {
	return await axiosQuery({ url: "/movie" });
};

export const getMovie = async (id: number) => {
	return await axiosQuery({ url: `/movie/${id}` });
};

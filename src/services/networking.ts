import axios, { AxiosRequestConfig } from "axios";

interface RequestOptions {
	method?: string;
	url?: string;
	payload?: any;
	queryParams?: any;
}

export const axiosQuery = async (options: RequestOptions = {}) => {
	try {
		const {
			method = "GET",
			url = "/",
			payload = {},
			queryParams = {}
		} = options;

		const {
			take = 25,
			page = 1,
			orderBy = "desc",
			...restQueryParams
		} = queryParams;

		const requestOptions: AxiosRequestConfig = {
			method,
			url: process.env.NEXT_PUBLIC_BACKEND_URL + url,
			data: payload,
			params: {
				take,
				orderBy,
				page,
				...restQueryParams
			}
		};

		const { data } = await axios.request(requestOptions);
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};

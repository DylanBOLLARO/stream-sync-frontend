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

		console.log(options);
		const {
			take = 25,
			orderBy = { audience_rating: "desc" },
			...restQueryParams
		} = queryParams;

		const requestOptions: AxiosRequestConfig = {
			method,
			url: process.env.NEXT_PUBLIC_NESTJS_URL + url,
			data: payload,
			params: {
				take,
				orderBy,
				...restQueryParams
			}
		};

		const { data } = await axios.request(requestOptions);
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};

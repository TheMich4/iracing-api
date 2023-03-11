import axios, { AxiosInstance } from "axios";

import humps from "humps";

const { camelizeKeys } = humps;

const getLinkData = async (link: string | undefined) => {
	if (!link) return undefined;

	const response = await axios.get(link);

	if (!response.data) return undefined;

	return camelizeKeys(response.data);
};

const getData = async <Data, Parameters = void>(
	axiosInstance: AxiosInstance,
	endpoint: string,
	params?: Parameters | Record<string, unknown>,
): Promise<Data | Record<string, unknown> | undefined> => {
	const { data } = await axiosInstance.get(endpoint, { params });

	return await getLinkData(data?.link);
};

export { getData, getLinkData };

import axios, { AxiosInstance } from "axios";

import { ChunkInfo } from "./types/common";
import humps from "humps";

const { camelizeKeys } = humps;

export const getLinkData = async (link: string | undefined) => {
	if (!link) return undefined;

	const response = await axios.get(link);

	if (!response.data) return undefined;

	return camelizeKeys(response.data);
};

export const getData = async <Data, Parameters = void>(
	axiosInstance: AxiosInstance,
	endpoint: string,
	params?: Parameters | Record<string, unknown>,
): Promise<Data | Record<string, unknown> | undefined> => {
	const { data } = await axiosInstance.get(endpoint, { params });

	return await getLinkData(data?.link);
};

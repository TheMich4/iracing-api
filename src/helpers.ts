import axios from "axios";
import { axiosInstance } from "./axios";

const getLinkData = async (link: string | undefined) => {
	if (!link) return undefined;

	const { data } = await axios.get(link);

	return data;
};

const getData = async <Parameters, Data>(
	endpoint: string,
	params?: Parameters | Record<string, unknown>,
): Promise<Data | Record<string, unknown> | undefined> => {
	const { data } = await axiosInstance.get(endpoint, { params });

	return await getLinkData(data?.link);
};

export { getData, getLinkData };

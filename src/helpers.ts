import axios from "axios";
import { axiosInstance } from "./axios";

const getLinkData = async (link: string | undefined) => {
	if (!link) return undefined;

	const { data } = await axios.get(link);

	return data;
};

const getData = async <Data, Parameters = void>(
	endpoint: string,
	params?: Parameters | Record<string, any>,
): Promise<Data | Record<string, any> | undefined> => {
	const { data } = await axiosInstance.get(endpoint, { params });

	return await getLinkData(data?.link);
};

export { getData, getLinkData };

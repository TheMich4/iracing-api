import { API_URL } from "./consts";
import CryptoJS from "crypto-js";
import { FetchCookie } from "./types";
import humps from "humps";

const { camelizeKeys } = humps;

export const getLinkData = async <Data>(
	link: string | undefined,
): Promise<Data | undefined> => {
	if (!link) return undefined;

	const response = await fetch(link);
	const data = await response.json();

	if (!data) return undefined;

	return camelizeKeys(data) as Data;
};

export const getData = async <
	Data = Record<string, unknown>,
	Parameters = void,
>(
	fetchCookie: FetchCookie,
	endpoint: string,
	params?: Parameters | Record<string, unknown>,
): Promise<Data | undefined> => {
	const response = await fetchCookie(`${API_URL}${endpoint}`, {
		body: JSON.stringify(params),
		cache: "no-cache",
		credentials: "include",
	});
	const data = await response.json();

	if (data?.link) {
		return await getLinkData<Data>(data?.link);
	}

	return data;
};

export const encryptPassword = (email: string, password: string) =>
	CryptoJS.enc.Base64.stringify(
		CryptoJS.SHA256(password + email.toLowerCase()),
	);

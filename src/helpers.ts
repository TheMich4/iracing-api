import { API_URL } from "./consts.js";
import CryptoJS from "crypto-js";
import { FetchCookie } from "./types.js";
import humps from "humps";

const { camelizeKeys } = humps;

const getUrl = <Parameters = Record<string, unknown>>(
	endpoint: string,
	params?: Parameters,
) => {
	// Filter out empty values
	const searchParams = params && new URLSearchParams(
		JSON.parse(JSON.stringify(params)),
	).toString();

	return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ""}`;
};

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
	const response = await fetchCookie(getUrl(endpoint, params), {
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

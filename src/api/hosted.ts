import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getHostedCombinedSessions = async (
	fetchCookie: FetchCookie,
	params?:any,
) => {
	return await getData(fetchCookie, "data/hosted/combined_sessions", {
		package_id: params?.packageId,
	});
};

export const getHostedSessions = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/hosted/sessions");

import {
	GetHostedCombinedSessionsParams,
	HostedCombinedSessionsResponse,
	HostedSessionsResponse,
} from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getHostedCombinedSessions = async (
	fetchCookie: FetchCookie,
	params?: GetHostedCombinedSessionsParams,
) => {
	return await getData<
		HostedCombinedSessionsResponse,
		GetHostedCombinedSessionsParams
	>(fetchCookie, "data/hosted/combined_sessions", {
		package_id: params?.packageId,
	});
};

export const getHostedSessions = async (fetchCookie: FetchCookie) =>
	await getData<HostedSessionsResponse>(fetchCookie, "data/hosted/sessions");

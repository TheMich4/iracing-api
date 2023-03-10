import {
	GetHostedCombinedSessionsParams,
	HostedCombinedSessionsResponse,
	HostedSessionsResponse,
} from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

export const getHostedCombinedSessions = async (
	axiosInstance: AxiosInstance,
	params?: GetHostedCombinedSessionsParams,
) => {
	return await getData<HostedCombinedSessionsResponse>(
		axiosInstance,
		"data/hosted/combined_sessions",
		{ package_id: params?.packageId },
	);
};

export const getHostedSessions = async (axiosInstance: AxiosInstance) =>
	await getData<HostedSessionsResponse>(axiosInstance, "data/hosted/sessions");

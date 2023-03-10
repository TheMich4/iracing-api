import {
	HostedCombinedSessionsResponse,
	HostedSessionsResponse,
} from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getHostedCombinedSessions = async (
	axiosInstance: AxiosInstance,
	packageId?: number,
) => {
	return await getData<HostedCombinedSessionsResponse>(
		axiosInstance,
		"data/hosted/combined_sessions",
		{ package_id: packageId },
	);
};

const getHostedSessions = async (axiosInstance: AxiosInstance) =>
	await getData<HostedSessionsResponse>(axiosInstance, "data/hosted/sessions");

export { getHostedCombinedSessions, getHostedSessions };

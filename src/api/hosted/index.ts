import {
	HostedCombinedSessionsResponse,
	HostedSessionsResponse,
} from "./types";

import { getData } from "../../helpers";

const getHostedCombinedSessions = async (packageId?: number) =>
	await getData<HostedCombinedSessionsResponse>(
		"data/hosted/combined_sessions",
		{ package_id: packageId },
	);

const getHostedSessions = async () =>
	await getData<HostedSessionsResponse>("data/hosted/sessions");

export { getHostedCombinedSessions, getHostedSessions };

// Params

import { Session } from "../../types/session";

export interface GetHostedCombinedSessionsParams {
	packageId?: number;
}

// Responses

export interface HostedCombinedSessionsResponse {
	sequence: number;
	sessions: Array<Session>;
	subscribed: boolean;
	success: boolean;
}

export interface HostedSessionsResponse {
	sessions: Array<Session>;
	subscribed: boolean;
	success: boolean;
}

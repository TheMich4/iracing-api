// Params

import { Result } from "../../types/results.js";
import { SessionInfo } from "../../types/session.js";

export interface GetResultParams {
	subsessionId: number;
	includeLicenses?: boolean;
}

export interface GetResultsEventLogParams {
	subsessionId: number;
	simsessionNumber: number;
}

export interface GetResultsLapChartDataParams {
	subsessionId: number;
	simsessionNumber: number;
}

export interface GetResultsLapDataParams {
	subsessionId: number;
	simsessionNumber: number;
	customerId?: number;
	teamId?: number;
}

export interface GetSeasonResultsParams {
	seasonId: number;
	eventType?: number;
	raceWeekNumber?: number;
}

// Response

export type GetResultResponse = Result;

export interface GetResultsEventLogResponse {
	chunkInfo: {
		baseDownloadUrl: string;
		chunkFileNames: Array<string>;
		chunkSize: number;
		numChunks: number;
		rows: number;
	};
	sessionInfo: SessionInfo;
	success: boolean;
}

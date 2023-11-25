// Params

import { ChunkInfo } from "../../types/common.js";
import { Result } from "../../types/results.js";
import { SessionInfo } from "../../types/session.js";

export interface GetResultParams {
	subsessionId: number;
	includeLicenses?: boolean;
}

/**
 * simsessionNumber - The main event is 0; the preceding event is -1, and so on.
 */
export interface GetResultsEventLogParams {
	subsessionId: number;
	simsessionNumber: number;
}

/**
 * simsessionNumber - The main event is 0; the preceding event is -1, and so on.
 */
export interface GetResultsLapChartDataParams {
	subsessionId: number;
	simsessionNumber: number;
}

/**
 * simsessionNumber - The main event is 0; the preceding event is -1, and so on.
 */
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

export interface SearchSeriesParams {
	seasonYear?: number;
	seasonQuarter?: number;
	startRangeBegin?: number;
	startRangeEnd?: number;
	finishRangeBegin?: number;
	finishRangeEnd?: number;
	customerId?: number;
	seriesId?: number;
	raceWeekNum?: number;
	officialOnly?: boolean;
	eventTypes?: number[];
	categoryIds?: number[];
}

// Response

export type GetResultResponse = Result;

export interface GetResultsEventLogResponse {
	chunkInfo: ChunkInfo;
	sessionInfo: SessionInfo;
	success: boolean;
}

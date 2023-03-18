// Params

export interface GetResultParams {
	subsessionId: number;
	includeLicenses?: boolean;
}

export interface GetResultsEventDataParams {
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

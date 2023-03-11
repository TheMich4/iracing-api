// Params

export interface GetMemberBestsParams {
	customerId?: number;
	carId?: number;
}

export interface GetMemberCareerParams {
	customerId?: number;
}

export interface GetMemberDivisionParams {
	seasonId: number;
	eventType: number;
}

export interface GetMemberRecentRacesParams {
	customerId?: number;
}

export interface GetMemberSummaryParams {
	customerId?: number;
}

export interface GetMemberYearlyParams {
	customerId?: number;
}

export interface GetDriverSeasonStandings {
	seasonId: number;
	carClassId: number;
	clubId?: number;
	division?: number;
	raceWeekNumber?: number;
}

export interface GetSeasonSupersessionSeasonStandingsParams {
	seasonId: number;
	carClassId: number;
	clubId?: number;
	division?: number;
	raceWeekNumber?: number;
}

export interface GetTeamSeasonStandingsParams {
	seasonId: number;
	carClassId: number;
	raceWeekNumber?: number;
}

export interface GetTimeTrialSeasonStandingsParams {
	seasonId: number;
	carClassId: number;
	clubId?: number;
	division?: number;
	raceWeekNumber?: number;
}

export interface GetTimeTrialSeasonResultsParams {
	seasonId: number;
	carClassId: number;
	clubId?: number;
	division?: number;
	raceWeekNumber?: number;
}

export interface GetQualifySeasonResultsParams {
	seasonId: number;
	carClassId: number;
	clubId?: number;
	division?: number;
	raceWeekNumber?: number;
}

export interface GetWorldRecordsParams {
	carId: number;
	trackId: number;
	seasonYear?: number;
	seasonQuarter?: number;
}

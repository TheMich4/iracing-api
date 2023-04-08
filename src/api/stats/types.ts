import type {
	CareerStat,
	CarsDriven,
	MemberBest,
	MemberDivision,
	YearlyStat,
} from "../../types/stats.js";

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

// Response

export interface GetMemberBestsResponse {
	bests: Array<MemberBest>;
	carsDriven: CarsDriven;
	custId: number;
	carId: number;
}

export interface GetMemberCareerResponse {
	custId: number;
	stats: Array<CareerStat>;
}

export type GetMemberDivisionResponse = MemberDivision;

export interface GetMemberSummaryResponse {
	custId: number;
	thisYear: {
		numOfficialSessions: number;
		numLeagueSessions: number;
		numOfficialWins: number;
		numLeagueWins: number;
	};
}

export interface getMemberYearlyStatsResponse {
	stats: Array<YearlyStat>;
	custId: number;
}

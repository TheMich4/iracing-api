// Params

import { League, LeagueMembership, LeagueSession } from "../../types/league.js";

export interface GetCustLeagueSessionsParams {
	mine?: boolean;
	packageId?: number;
}

export interface GetLeagueDirectoryParams {
	search?: string;
	tag?: string;
	restrictToMember?: boolean;
	restrictToRecruiting?: boolean;
	restrictToFriends?: boolean;
	restrictToWatched?: boolean;
	minimumRosterCount?: number;
	maximumRosterCount?: number;
	lowerbound?: number;
	upperbound?: number;
	sort?: string;
	order?: string;
}

export interface GetLeagueDataParams {
	leagueId: number;
	includeLicenses?: boolean;
}

export interface GetLeaguePointSystemsParams {
	leagueId: number;
	seasonId?: number;
}

export interface GetLeagueMembershipParams {
	includeLeague?: boolean;
}

export interface GetLeagueSeasonsParams {
	leagueId: number;
	retired?: boolean;
}

export interface GetLeagueSeasonStandingsParams {
	leagueId: number;
	seasonId: number;
}

export interface GetLeagueSeasonSessionsParams {
	leagueId: number;
	seasonId: number;
	carClassId?: number;
	carId?: number;
}

// Response

export interface GetCustLeagueSessionsResponse {
	mine: boolean;
	subscribed: boolean;
	sequence: number;
	sessions: Array<LeagueSession>;
	success: boolean;
}

export interface GetLeagueDirectoryResponse {
	resultsPage: Array<League>;
	success: boolean;
	lowerbound: number;
	upperbound: number;
	rowCount: number;
}

export type GetLeagueMembershipResponse = Array<LeagueMembership>;

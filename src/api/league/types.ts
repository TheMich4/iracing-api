// Params

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

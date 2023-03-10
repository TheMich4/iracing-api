// Params
export interface GetLeagueSessionsParams {
	packageId?: number;
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
}

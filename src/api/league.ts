import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getCustLeagueSessions = async (
	fetchCookie: FetchCookie,
	params?:any
) =>
	await getData(
		fetchCookie,
		"data/league/cust_league_sessions",
		{
			mine: params?.mine,
			package_id: params?.packageId,
		},
	);

export const getLeagueDirectory = async (
	fetchCookie: FetchCookie,
	params?: any,
) =>
	await getData(
		fetchCookie,
		"data/league/directory",
		{
			search: params?.search,
			tag: params?.tag,
			restrict_to_member: params?.restrictToMember,
			restrict_to_recruiting: params?.restrictToRecruiting,
			restrict_to_friends: params?.restrictToFriends,
			restrict_to_watched: params?.restrictToWatched,
			minimum_roster_count: params?.minimumRosterCount,
			maximum_roster_count: params?.maximumRosterCount,
			lowerbound: params?.lowerbound,
			upperbound: params?.upperbound,
			sort: params?.sort,
			order: params?.order,
		},
	);

export const getLeagueData = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/league/get", {
		league_id: params.leagueId,
		include_licenses: params.includeLicenses,
	});

export const getLeaguePointSystem = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/league/get_points_systems", {
		league_id: params.leagueId,
		season_id: params.seasonId,
	});

export const getLeagueMembership = async (
	fetchCookie: FetchCookie,
	params?: any,
) =>
	await getData(
		fetchCookie,
		"data/league/membership",
		{
			include_league: params?.includeLeague,
		},
	);

export const getLeagueSeasons = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/league/seasons", {
		league_id: params.leagueId,
		retired: params.retired,
	});

export const getLeagueSeasonStandings = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/league/season_standings", {
		league_id: params.leagueId,
		season_id: params.seasonId,
	});

export const getLeagueSeasonSessions = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/league/season_sessions", {
		league_id: params.leagueId,
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		car_id: params.carId,
	});

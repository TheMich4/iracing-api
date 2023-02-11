import { getData } from "../helpers";

const getLeagueSessions = async (packageId?: number) =>
	await getData("data/league/cust_league_sessions", { package_id: packageId });

// TODO: Add params
const getLeagueDirectory = async () => await getData("data/league/directory");

const getLeagueData = async (leagueId: number, includeLicenses?: boolean) =>
	await getData("data/league/league_data", {
		league_id: leagueId,
		include_licenses: includeLicenses,
	});

const getLeaguePointSystem = async (leagueId: number, seasonId?: number) =>
	await getData("data/league/league_point_system", {
		league_id: leagueId,
		season_id: seasonId,
	});

const getLeagueMembership = async (includeLeague?: boolean) =>
	await getData("data/league/membership", { include_league: includeLeague });

const getLeagueSeasons = async (leagueId: number, retired?: boolean) =>
	await getData("data/league/seasons", {
		league_id: leagueId,
		retired: retired,
	});

// TODO: Add missing params
const getLeagueSeasonStandings = async (leagueId: number, seasonId: number) =>
	await getData("data/league/season_standings", {
		league_id: leagueId,
		season_id: seasonId,
	});

// TODO: Add missing params
const getLeagueSeasonSessions = async (leagueId: number, seasonId: number) =>
	await getData("data/league/season_sessions", {
		league_id: leagueId,
		season_id: seasonId,
	});

export {
	getLeagueSessions,
	getLeagueDirectory,
	getLeagueData,
	getLeaguePointSystem,
	getLeagueMembership,
	getLeagueSeasons,
	getLeagueSeasonStandings,
	getLeagueSeasonSessions,
};

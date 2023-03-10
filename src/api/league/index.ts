import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getLeagueSessions = async (
	axiosInstance: AxiosInstance,
	packageId?: number,
) =>
	await getData(axiosInstance, "data/league/cust_league_sessions", {
		package_id: packageId,
	});

// TODO: Add params
const getLeagueDirectory = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/league/directory");

const getLeagueData = async (
	axiosInstance: AxiosInstance,
	leagueId: number,
	includeLicenses?: boolean,
) =>
	await getData(axiosInstance, "data/league/league_data", {
		league_id: leagueId,
		include_licenses: includeLicenses,
	});

const getLeaguePointSystem = async (
	axiosInstance: AxiosInstance,
	leagueId: number,
	seasonId?: number,
) =>
	await getData(axiosInstance, "data/league/league_point_system", {
		league_id: leagueId,
		season_id: seasonId,
	});

const getLeagueMembership = async (
	axiosInstance: AxiosInstance,
	includeLeague?: boolean,
) =>
	await getData(axiosInstance, "data/league/membership", {
		include_league: includeLeague,
	});

const getLeagueSeasons = async (
	axiosInstance: AxiosInstance,
	leagueId: number,
	retired?: boolean,
) =>
	await getData(axiosInstance, "data/league/seasons", {
		league_id: leagueId,
		retired: retired,
	});

// TODO: Add missing params
const getLeagueSeasonStandings = async (
	axiosInstance: AxiosInstance,
	leagueId: number,
	seasonId: number,
) =>
	await getData(axiosInstance, "data/league/season_standings", {
		league_id: leagueId,
		season_id: seasonId,
	});

// TODO: Add missing params
const getLeagueSeasonSessions = async (
	axiosInstance: AxiosInstance,
	leagueId: number,
	seasonId: number,
) =>
	await getData(axiosInstance, "data/league/season_sessions", {
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

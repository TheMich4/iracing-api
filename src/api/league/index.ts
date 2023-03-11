import {
	GetLeagueDataParams,
	GetLeagueMembershipParams,
	GetLeaguePointSystemsParams,
	GetLeagueSeasonSessionsParams,
	GetLeagueSeasonStandingsParams,
	GetLeagueSeasonsParams,
	GetLeagueSessionsParams,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getLeagueSessions = async (
	axiosInstance: AxiosInstance,
	params?: GetLeagueSessionsParams,
) =>
	await getData(axiosInstance, "data/league/cust_league_sessions", {
		package_id: params?.packageId,
	});

// TODO: Add params
export const getLeagueDirectory = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/league/directory");

export const getLeagueData = async (
	axiosInstance: AxiosInstance,
	params: GetLeagueDataParams,
) =>
	await getData(axiosInstance, "data/league/league_data", {
		league_id: params.leagueId,
		include_licenses: params.includeLicenses,
	});

export const getLeaguePointSystem = async (
	axiosInstance: AxiosInstance,
	params: GetLeaguePointSystemsParams,
) =>
	await getData(axiosInstance, "data/league/league_point_system", {
		league_id: params.leagueId,
		season_id: params.seasonId,
	});

export const getLeagueMembership = async (
	axiosInstance: AxiosInstance,
	params?: GetLeagueMembershipParams,
) =>
	await getData(axiosInstance, "data/league/membership", {
		include_league: params?.includeLeague,
	});

export const getLeagueSeasons = async (
	axiosInstance: AxiosInstance,
	params: GetLeagueSeasonsParams,
) =>
	await getData(axiosInstance, "data/league/seasons", {
		league_id: params.leagueId,
		retired: params.retired,
	});

// TODO: Add missing params
export const getLeagueSeasonStandings = async (
	axiosInstance: AxiosInstance,
	params: GetLeagueSeasonStandingsParams,
) =>
	await getData(axiosInstance, "data/league/season_standings", {
		league_id: params.leagueId,
		season_id: params.seasonId,
	});

// TODO: Add missing params
export const getLeagueSeasonSessions = async (
	axiosInstance: AxiosInstance,
	params: GetLeagueSeasonSessionsParams,
) =>
	await getData(axiosInstance, "data/league/season_sessions", {
		league_id: params.leagueId,
		season_id: params.seasonId,
	});

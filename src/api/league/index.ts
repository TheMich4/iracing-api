import {
  GetCustLeagueSessionsParams,
  GetLeagueDataParams,
  GetLeagueDirectoryParams,
  GetLeagueMembershipParams,
  GetLeaguePointSystemsParams,
  GetLeagueSeasonSessionsParams,
  GetLeagueSeasonsParams,
  GetLeagueSeasonStandingsParams,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getCustLeagueSessions = async (
  axiosInstance: AxiosInstance,
  params?: GetCustLeagueSessionsParams,
) =>
  await getData(axiosInstance, "data/league/cust_league_sessions", {
    mine: params?.mine,
    package_id: params?.packageId,
  });

export const getLeagueDirectory = async (
  axiosInstance: AxiosInstance,
  params?: GetLeagueDirectoryParams,
) =>
  await getData(axiosInstance, "data/league/directory", {
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
  });

export const getLeagueData = async (
  axiosInstance: AxiosInstance,
  params: GetLeagueDataParams,
) =>
  await getData(axiosInstance, "data/league/get", {
    league_id: params.leagueId,
    include_licenses: params.includeLicenses,
  });

export const getLeaguePointSystem = async (
  axiosInstance: AxiosInstance,
  params: GetLeaguePointSystemsParams,
) =>
  await getData(axiosInstance, "data/league/get_points_systems", {
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

export const getLeagueSeasonStandings = async (
  axiosInstance: AxiosInstance,
  params: GetLeagueSeasonStandingsParams,
) =>
  await getData(axiosInstance, "data/league/season_standings", {
    league_id: params.leagueId,
    season_id: params.seasonId,
  });

export const getLeagueSeasonSessions = async (
  axiosInstance: AxiosInstance,
  params: GetLeagueSeasonSessionsParams,
) =>
  await getData(axiosInstance, "data/league/season_sessions", {
    league_id: params.leagueId,
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    car_id: params.carId,
  });

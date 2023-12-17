import * as z from "zod";

import { CustLeagueSessions, LeagueDirectory } from "../types/league.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetCustLeagueSessionsParamsSchema = z.object({
  mine: z.boolean().optional(),
  packageId: z.number().optional(),
});
export type GetCustLeagueSessionsParams = z.infer<
  typeof GetCustLeagueSessionsParamsSchema
>;

export const getCustLeagueSessions = async (
  fetchCookie: FetchCookie,
  params?: GetCustLeagueSessionsParams,
) =>
  await getData<CustLeagueSessions>(
    fetchCookie,
    "data/league/cust_league_sessions",
    {
      mine: params?.mine,
      package_id: params?.packageId,
    },
  );

export const GetLeagueDirectoryParamsSchema = z.object({
  search: z.string().optional(),
  tag: z.string().optional(),
  restrictToMember: z.boolean().optional(),
  restrictToRecruiting: z.boolean().optional(),
  restrictToFriends: z.boolean().optional(),
  restrictToWatched: z.boolean().optional(),
  minimumRosterCount: z.number().optional(),
  maximumRosterCount: z.number().optional(),
  lowerbound: z.number().optional(),
  upperbound: z.number().optional(),
  sort: z.string().optional(),
  order: z.string().optional(),
});
export type GetLeagueDirectoryParams = z.infer<
  typeof GetLeagueDirectoryParamsSchema
>;

export const getLeagueDirectory = async (
  fetchCookie: FetchCookie,
  params?: GetLeagueDirectoryParams,
) =>
  await getData<LeagueDirectory>(fetchCookie, "data/league/directory", {
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

export const GetLeagueDataParamsSchema = z.object({
  leagueId: z.number(),
  includeLicenses: z.boolean().optional(),
});
export type GetLeagueDataParams = z.infer<typeof GetLeagueDataParamsSchema>;

export const getLeagueData = async (
  fetchCookie: FetchCookie,
  params: GetLeagueDataParams,
) =>
  await getData(fetchCookie, "data/league/get", {
    league_id: params.leagueId,
    include_licenses: params.includeLicenses,
  });

export const GetLeaguePointSystemParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number().optional(),
});
export type GetLeaguePointSystemParams = z.infer<
  typeof GetLeaguePointSystemParamsSchema
>;

export const getLeaguePointSystem = async (
  fetchCookie: FetchCookie,
  params: GetLeaguePointSystemParams,
) =>
  await getData(fetchCookie, "data/league/get_points_systems", {
    league_id: params.leagueId,
    season_id: params.seasonId,
  });

export const getLeagueMembershipParamsSchema = z.object({
  customerId: z.number().optional(),
  includeLeague: z.boolean().optional(),
});
export type GetLeagueMembershipParams = z.infer<
  typeof getLeagueMembershipParamsSchema
>;

export const getLeagueMembership = async (
  fetchCookie: FetchCookie,
  params?: GetLeagueMembershipParams,
) =>
  await getData(fetchCookie, "data/league/membership", {
    cust_id: params?.customerId,
    include_league: params?.includeLeague,
  });

export const GetLeagueSeasonsParamsSchema = z.object({
  leagueId: z.number(),
  retired: z.boolean().optional(),
});
export type GetLeagueSeasonsParams = z.infer<
  typeof GetLeagueSeasonsParamsSchema
>;

export const getLeagueSeasons = async (
  fetchCookie: FetchCookie,
  params: GetLeagueSeasonsParams,
) =>
  await getData(fetchCookie, "data/league/seasons", {
    league_id: params.leagueId,
    retired: params.retired,
  });

export const GetLeagueSeasonStandingsParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number(),
  carClassId: z.number().optional(),
  carId: z.number().optional(),
});
export type GetLeagueSeasonStandingsParams = z.infer<
  typeof GetLeagueSeasonStandingsParamsSchema
>;

export const getLeagueSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: GetLeagueSeasonStandingsParams,
) =>
  await getData(fetchCookie, "data/league/season_standings", {
    car_id: params.carId,
    car_class_id: params.carClassId,
    league_id: params.leagueId,
    season_id: params.seasonId,
  });

export const GetLeagueSeasonSessionsParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number(),
  resultsOnly: z.boolean().optional(),
});
export type GetLeagueSeasonSessionsParams = z.infer<
  typeof GetLeagueSeasonSessionsParamsSchema
>;

export const getLeagueSeasonSessions = async (
  fetchCookie: FetchCookie,
  params: GetLeagueSeasonSessionsParams,
) =>
  await getData(fetchCookie, "data/league/season_sessions", {
    league_id: params.leagueId,
    season_id: params.seasonId,
    results_only: params.resultsOnly,
  });

import * as z from "zod";

import {
  MemberBests,
  MemberCareer,
  MemberRecap,
  MemberSummary,
  MemberYearlyStats,
} from "../types/stats.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetMemberBestsParamsSchema = z.object({
  customerId: z.number().optional(),
  carId: z.number().optional(),
});
export type GetMemberBestsParams = z.infer<typeof GetMemberBestsParamsSchema>;

export const getMemberBests = async (
  fetchCookie: FetchCookie,
  params?: GetMemberBestsParams
) =>
  await getData<MemberBests>(fetchCookie, "data/stats/member_bests", {
    cust_id: params?.customerId,
    car_id: params?.carId,
  });

export const GetMemberCareerParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberCareerParams = z.infer<typeof GetMemberCareerParamsSchema>;

export const getMemberCareer = async (
  fetchCookie: FetchCookie,
  params?: GetMemberCareerParams
) =>
  await getData<MemberCareer>(fetchCookie, "data/stats/member_career", {
    cust_id: params?.customerId,
  });

export const GetMemberDivisionParamsSchema = z.object({
  seasonId: z.number(),
  eventType: z.number(),
});
export type GetMemberDivisionParams = z.infer<
  typeof GetMemberDivisionParamsSchema
>;

export const getMemberDivision = async (
  fetchCookie: FetchCookie,
  params: GetMemberDivisionParams
) =>
  await getData(fetchCookie, "data/stats/member_division", {
    season_id: params.seasonId,
    event_type: params.eventType,
  });

export const GetMemberRecentRacesParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberRecentRacesParams = z.infer<
  typeof GetMemberRecentRacesParamsSchema
>;

export const getMemberRecentRaces = async (
  fetchCookie: FetchCookie,
  params?: GetMemberRecentRacesParams
) =>
  await getData(fetchCookie, "stats/member_recent_races", {
    cust_id: params?.customerId,
  });

export const GetMemberRecapParamsSchema = z.object({
  customerId: z.number().optional(),
  year: z.number().optional(),
  season: z.number().optional(),
});
export type GetMemberRecapParams = z.infer<typeof GetMemberRecapParamsSchema>;

export const getMemberRecap = async (
  fetchCookie: FetchCookie,
  params?: GetMemberRecapParams
) =>
  await getData<MemberRecap>(fetchCookie, "data/stats/member_recap", {
    cust_id: params?.customerId,
    year: params?.year,
    season: params?.season,
  });

export const GetMemberSummaryParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberSummaryParams = z.infer<
  typeof GetMemberSummaryParamsSchema
>;

export const getMemberSummary = async (
  fetchCookie: FetchCookie,
  params?: GetMemberSummaryParams
) =>
  await getData<MemberSummary>(fetchCookie, "data/stats/member_summary", {
    cust_id: params?.customerId,
  });

export const GetMemberYearlyStatsParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberYearlyStatsParams = z.infer<
  typeof GetMemberYearlyStatsParamsSchema
>;

export const getMemberYearlyStats = async (
  fetchCookie: FetchCookie,
  params?: GetMemberYearlyStatsParams
) =>
  await getData<MemberYearlyStats>(fetchCookie, "data/stats/member_yearly", {
    cust_id: params?.customerId,
  });

export const GetDriverSeasonStandingsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  clubId: z.number().optional(),
  division: z.number().optional(),
  raceWeekNumber: z.number().optional(),
});
export type GetDriverSeasonStandingsParams = z.infer<
  typeof GetDriverSeasonStandingsParamsSchema
>;

export const getDriverSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: GetDriverSeasonStandingsParams
) =>
  await getData(fetchCookie, "data/stats/season_driver_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const getSupersessionSeasonStandingsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  clubId: z.number().optional(),
  division: z.number().optional(),
  raceWeekNumber: z.number().optional(),
});
export type GetSupersessionSeasonStandingsParams = z.infer<
  typeof getSupersessionSeasonStandingsParamsSchema
>;

export const getSupersessionSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: GetSupersessionSeasonStandingsParams
) =>
  await getData(fetchCookie, "data/stats/season_supersession_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const GetTeamSeasonStandingsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  raceWeekNumber: z.number().optional(),
});
export type GetTeamSeasonStandingsParams = z.infer<
  typeof GetTeamSeasonStandingsParamsSchema
>;

export const getTeamSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: GetTeamSeasonStandingsParams
) =>
  await getData(fetchCookie, "data/stats/season_team_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
  });

export const GetTimeTrialSeasonStandingsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  clubId: z.number().optional(),
  division: z.number().optional(),
  raceWeekNumber: z.number().optional(),
});
export type GetTimeTrialSeasonStandingsParams = z.infer<
  typeof GetTimeTrialSeasonStandingsParamsSchema
>;

export const getTimeTrialSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: GetTimeTrialSeasonStandingsParams
) =>
  await getData(fetchCookie, "data/stats/season_tt_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const GetTimeTrialSeasonResultsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  clubId: z.number().optional(),
  division: z.number().optional(),
  raceWeekNumber: z.number().optional(),
});
export type GetTimeTrialSeasonResultsParams = z.infer<
  typeof GetTimeTrialSeasonResultsParamsSchema
>;

export const getTimeTrialSeasonResults = async (
  fetchCookie: FetchCookie,
  params: GetTimeTrialSeasonResultsParams
) =>
  await getData(fetchCookie, "data/stats/season_tt_results", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
    club_id: params.clubId,
    division: params.division,
  });

export const GetQualifySeasonResultsParamsSchema = z.object({
  seasonId: z.number(),
  carClassId: z.number(),
  clubId: z.number().optional(),
  division: z.number().optional(),
  raceWeekNumber: z.number().optional(),
});
export type GetQualifySeasonResultsParams = z.infer<
  typeof GetQualifySeasonResultsParamsSchema
>;

export const getQualifySeasonResults = async (
  fetchCookie: FetchCookie,
  params: GetQualifySeasonResultsParams
) =>
  await getData(fetchCookie, "data/stats/season_qualify_results", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
    club_id: params.clubId,
    division: params.division,
  });

export const GetWorldRecordsParamsSchema = z.object({
  carId: z.number(),
  trackId: z.number(),
  seasonYear: z.number().optional(),
  seasonQuarter: z.number().optional(),
});
export type GetWorldRecordsParams = z.infer<typeof GetWorldRecordsParamsSchema>;

export const getWorldRecords = async (
  fetchCookie: FetchCookie,
  params: GetWorldRecordsParams
) =>
  await getData(fetchCookie, "data/stats/world_records", {
    car_id: params.carId,
    track_id: params.trackId,
    season_year: params.seasonYear,
    season_quarter: params.seasonQuarter,
  });

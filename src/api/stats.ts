import {
  MemberBests,
  MemberCareer,
  MemberRecap,
  MemberSummary,
  MemberYearlyStats,
} from "../types/stats.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getMemberBests = async (fetchCookie: FetchCookie, params?: any) =>
  await getData<MemberBests>(fetchCookie, "data/stats/member_bests", {
    cust_id: params?.customerId,
    car_id: params?.carId,
  });

export const getMemberCareer = async (fetchCookie: FetchCookie, params?: any) =>
  await getData<MemberCareer>(fetchCookie, "data/stats/member_career", {
    cust_id: params?.customerId,
  });

export const getMemberDivision = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/member_division", {
    season_id: params.seasonId,
    event_type: params.eventType,
  });

export const getMemberRecentRaces = async (
  fetchCookie: FetchCookie,
  params?: any,
) =>
  await getData(fetchCookie, "stats/member_recent_races", {
    cust_id: params?.customerId,
  });

export const getMemberRecap = async (fetchCookie: FetchCookie, params?: any) =>
  await getData<MemberRecap>(fetchCookie, "data/stats/member_recap", {
    cust_id: params?.customerId,
    year: params?.year,
    season: params?.season,
  });

export const getMemberSummary = async (
  fetchCookie: FetchCookie,
  params?: any,
) =>
  await getData<MemberSummary>(fetchCookie, "data/stats/member_summary", {
    cust_id: params?.customerId,
  });

export const getMemberYearlyStats = async (
  fetchCookie: FetchCookie,
  params?: any,
) =>
  await getData<MemberYearlyStats>(fetchCookie, "data/stats/member_yearly", {
    cust_id: params?.customerId,
  });

export const getDriverSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_driver_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const getSupersessionSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_supersession_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const getTeamSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_team_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
  });

export const getTimeTrialSeasonStandings = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_tt_standings", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    club_id: params.clubId,
    division: params.division,
    race_week_num: params.raceWeekNumber,
  });

export const getTimeTrialSeasonResults = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_tt_results", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
    club_id: params.clubId,
    division: params.division,
  });

export const getQualifySeasonResults = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/stats/season_qualify_results", {
    season_id: params.seasonId,
    car_class_id: params.carClassId,
    race_week_num: params.raceWeekNumber,
    club_id: params.clubId,
    division: params.division,
  });

export const getWorldRecords = async (fetchCookie: FetchCookie, params: any) =>
  await getData(fetchCookie, "data/stats/world_records", {
    car_id: params.carId,
    track_id: params.trackId,
    season_year: params.seasonYear,
    season_quarter: params.seasonQuarter,
  });

import type {
	GetDriverSeasonStandings,
	GetMemberBestsParams,
	GetMemberBestsResponse,
	GetMemberCareerParams,
	GetMemberCareerResponse,
	GetMemberDivisionParams,
	GetMemberDivisionResponse,
	GetMemberRecentRacesParams,
	GetMemberSummaryParams,
	GetMemberSummaryResponse,
	GetMemberYearlyParams,
	GetQualifySeasonResultsParams,
	GetSeasonSupersessionSeasonStandingsParams,
	GetTeamSeasonStandingsParams,
	GetTimeTrialSeasonResultsParams,
	GetTimeTrialSeasonStandingsParams,
	GetWorldRecordsParams,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getMemberBests = async (
	axiosInstance: AxiosInstance,
	params?: GetMemberBestsParams,
) =>
	await getData<GetMemberBestsResponse>(
		axiosInstance,
		"data/stats/member_bests",
		{
			cust_id: params?.customerId,
			car_id: params?.carId,
		},
	);

export const getMemberCareer = async (
	axiosInstance: AxiosInstance,
	params?: GetMemberCareerParams,
) =>
	await getData<GetMemberCareerResponse>(
		axiosInstance,
		"data/stats/member_career",
		{
			cust_id: params?.customerId,
		},
	);

export const getMemberDivision = async (
	axiosInstance: AxiosInstance,
	params: GetMemberDivisionParams,
) =>
	await getData<GetMemberDivisionResponse>(
		axiosInstance,
		"data/stats/member_division",
		{
			season_id: params.seasonId,
			event_type: params.eventType,
		},
	);

export const getMemberRecentRaces = async (
	axiosInstance: AxiosInstance,
	params?: GetMemberRecentRacesParams,
) =>
	await getData(axiosInstance, "stats/member_recent_races", {
		cust_id: params?.customerId,
	});

export const getMemberSummary = async (
	axiosInstance: AxiosInstance,
	params?: GetMemberSummaryParams,
) =>
	await getData<GetMemberSummaryResponse>(
		axiosInstance,
		"data/stats/member_summary",
		{
			cust_id: params?.customerId,
		},
	);

export const getMemberYearlyStats = async (
	axiosInstance: AxiosInstance,
	params?: GetMemberYearlyParams,
) =>
	await getData(axiosInstance, "data/stats/member_yearly", {
		cust_id: params?.customerId,
	});

export const getDriverSeasonStandings = async (
	axiosInstance: AxiosInstance,
	params: GetDriverSeasonStandings,
) =>
	await getData(axiosInstance, "data/stats/season_driver_standings", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		club_id: params.clubId,
		division: params.division,
		race_week_num: params.raceWeekNumber,
	});

export const getSupersessionSeasonStandings = async (
	axiosInstance: AxiosInstance,
	params: GetSeasonSupersessionSeasonStandingsParams,
) =>
	await getData(axiosInstance, "data/stats/season_supersession_standings", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		club_id: params.clubId,
		division: params.division,
		race_week_num: params.raceWeekNumber,
	});

export const getTeamSeasonStandings = async (
	axiosInstance: AxiosInstance,
	params: GetTeamSeasonStandingsParams,
) =>
	await getData(axiosInstance, "data/stats/season_team_standings", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		race_week_num: params.raceWeekNumber,
	});

export const getTimeTrialSeasonStandings = async (
	axiosInstance: AxiosInstance,
	params: GetTimeTrialSeasonStandingsParams,
) =>
	await getData(axiosInstance, "data/stats/season_tt_standings", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		club_id: params.clubId,
		division: params.division,
		race_week_num: params.raceWeekNumber,
	});

export const getTimeTrialSeasonResults = async (
	axiosInstance: AxiosInstance,
	params: GetTimeTrialSeasonResultsParams,
) =>
	await getData(axiosInstance, "data/stats/season_tt_results", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		race_week_num: params.raceWeekNumber,
		club_id: params.clubId,
		division: params.division,
	});

export const getQualifySeasonResults = async (
	axiosInstance: AxiosInstance,
	params: GetQualifySeasonResultsParams,
) =>
	await getData(axiosInstance, "data/stats/season_qualify_results", {
		season_id: params.seasonId,
		car_class_id: params.carClassId,
		race_week_num: params.raceWeekNumber,
		club_id: params.clubId,
		division: params.division,
	});

export const getWorldRecords = async (
	axiosInstance: AxiosInstance,
	params: GetWorldRecordsParams,
) =>
	await getData(axiosInstance, "data/stats/world_records", {
		car_id: params.carId,
		track_id: params.trackId,
		season_year: params.seasonYear,
		season_quarter: params.seasonQuarter,
	});

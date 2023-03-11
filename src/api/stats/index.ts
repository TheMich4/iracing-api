import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getMemberBests = async (
	axiosInstance: AxiosInstance,
	customerId?: number,
	carId?: number,
) =>
	await getData(axiosInstance, "data/stats/member_bests", {
		cust_id: customerId,
		car_id: carId,
	});

export const getMemberCareer = async (
	axiosInstance: AxiosInstance,
	customerId?: number,
) =>
	await getData(axiosInstance, "data/stats/member_career", {
		cust_id: customerId,
	});

export const getMemberDivision = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	eventType: number,
) =>
	await getData(axiosInstance, "data/stats/member_division", {
		season_id: seasonId,
		event_type: eventType,
	});

export const getMemberRecentRaces = async (
	axiosInstance: AxiosInstance,
	customerId?: number,
) =>
	await getData(axiosInstance, "stats/member_recent_races", {
		cust_id: customerId,
	});

export const getMemberSummary = async (
	axiosInstance: AxiosInstance,
	customerId?: number,
) =>
	await getData(axiosInstance, "data/stats/member_summary", {
		cust_id: customerId,
	});

export const getMemberYearlyStats = async (
	axiosInstance: AxiosInstance,
	customerId?: number,
) =>
	await getData(axiosInstance, "data/stats/member_yearly", {
		cust_id: customerId,
	});

export const getDriverSeasonStandings = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData(axiosInstance, "data/stats/season_driver_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

export const getSupersessionSeasonStandings = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData(axiosInstance, "data/stats/season_supersession_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

export const getTeamSeasonStandings = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	raceWeekNumber?: number,
) =>
	await getData(axiosInstance, "data/stats/season_team_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
	});

export const getTimeTrialSeasonStandings = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData(axiosInstance, "data/stats/season_tt_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

export const getTimeTrialSeasonResults = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	raceWeekNumber: number,
	clubId?: number,
	division?: number,
) =>
	await getData(axiosInstance, "data/stats/season_tt_results", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
		club_id: clubId,
		division: division,
	});

export const getQualifySeasonResults = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	carClassId: number,
	raceWeekNumber: number,
	clubId?: number,
	division?: number,
) =>
	await getData(axiosInstance, "data/stats/season_qualify_results", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
		club_id: clubId,
		division: division,
	});

export const getWorldRecords = async (
	axiosInstance: AxiosInstance,
	carId: number,
	trackId: number,
	seasonYear?: number,
	seasonQuarter?: number,
) =>
	await getData(axiosInstance, "data/stats/world_records", {
		car_id: carId,
		track_id: trackId,
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

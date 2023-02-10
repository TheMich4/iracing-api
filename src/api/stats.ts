import { getData } from "../helpers";

const getMemberBests = async (customerId?: number, carId?: number) =>
	await getData("data/stats/member_bests", {
		cust_id: customerId,
		car_id: carId,
	});

const getMemberCareer = async (customerId?: number) =>
	await getData("data/stats/member_career", { cust_id: customerId });

const getMemberDivision = async (seasonId: number, eventType: number) =>
	await getData("data/stats/member_division", {
		season_id: seasonId,
		event_type: eventType,
	});

const getMemberRecentRaces = async (customerId?: number) =>
	await getData("stats/member_recent_races", { cust_id: customerId });

const getMemberSummary = async (customerId?: number) =>
	await getData("data/stats/member_summary", { cust_id: customerId });

const getMemberYearlyStats = async (customerId?: number) =>
	await getData("data/stats/member_yearly", { cust_id: customerId });

const getDriverSeasonStandings = async (
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData("data/stats/season_driver_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

const getSupersessionSeasonStandings = async (
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData("data/stats/season_supersession_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

const getTeamSeasonStandings = async (
	seasonId: number,
	carClassId: number,
	raceWeekNumber?: number,
) =>
	await getData("data/stats/season_team_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
	});

const getTimeTrialSeasonStandings = async (
	seasonId: number,
	carClassId: number,
	clubId?: number,
	division?: number,
	raceWeekNumber?: number,
) =>
	await getData("data/stats/season_tt_standings", {
		season_id: seasonId,
		car_class_id: carClassId,
		club_id: clubId,
		division: division,
		race_week_num: raceWeekNumber,
	});

const getTimeTrialSeasonResults = async (
	seasonId: number,
	carClassId: number,
	raceWeekNumber: number,
	clubId?: number,
	division?: number,
) =>
	await getData("data/stats/season_tt_results", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
		club_id: clubId,
		division: division,
	});

const getQualifySeasonResults = async (
	seasonId: number,
	carClassId: number,
	raceWeekNumber: number,
	clubId?: number,
	division?: number,
) =>
	await getData("data/stats/season_qualify_results", {
		season_id: seasonId,
		car_class_id: carClassId,
		race_week_num: raceWeekNumber,
		club_id: clubId,
		division: division,
	});

const getWorldRecords = async (
	carId: number,
	trackId: number,
	seasonYear?: number,
	seasonQuarter?: number,
) =>
	await getData("data/stats/world_records", {
		car_id: carId,
		track_id: trackId,
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

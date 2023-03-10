import { getData } from "../../helpers";

const getResults = async (subsessionId: number, includeLicenses?: boolean) =>
	await getData("data/results/get", {
		subsession_id: subsessionId,
		include_licenses: includeLicenses,
	});

const getResultsEventData = async (
	subsessionId: number,
	simsessionNumber: number,
) =>
	await getData("data/results/event_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
	});

const getResultsLapChartData = async (
	subsessionId: number,
	simsessionNumber: number,
) =>
	await getData("data/results/lap_chart_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
	});

const getResultsLapData = async (
	subsessionId: number,
	simsessionNumber: number,
	customerId?: number,
	teamId?: number,
) =>
	await getData("data/results/lap_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
		customer_id: customerId,
		team_id: teamId,
	});

// TODO: Add params
const searchHosted = async () => await getData("data/results/search_hosted");

// TODO: Add params
const searchSeries = async () => await getData("data/results/search_series");

const getSeasonResults = async (
	seasonId: number,
	eventType?: number,
	raceWeekNumber?: number,
) =>
	await getData("data/results/season_results", {
		season_id: seasonId,
		event_type: eventType,
		race_week_num: raceWeekNumber,
	});

export {
	getResults,
	getResultsEventData,
	getResultsLapChartData,
	getResultsLapData,
	searchHosted,
	searchSeries,
	getSeasonResults,
};

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getResults = async (
	axiosInstance: AxiosInstance,
	subsessionId: number,
	includeLicenses?: boolean,
) =>
	await getData(axiosInstance, "data/results/get", {
		subsession_id: subsessionId,
		include_licenses: includeLicenses,
	});

const getResultsEventData = async (
	axiosInstance: AxiosInstance,
	subsessionId: number,
	simsessionNumber: number,
) =>
	await getData(axiosInstance, "data/results/event_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
	});

const getResultsLapChartData = async (
	axiosInstance: AxiosInstance,
	subsessionId: number,
	simsessionNumber: number,
) =>
	await getData(axiosInstance, "data/results/lap_chart_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
	});

const getResultsLapData = async (
	axiosInstance: AxiosInstance,
	subsessionId: number,
	simsessionNumber: number,
	customerId?: number,
	teamId?: number,
) =>
	await getData(axiosInstance, "data/results/lap_data", {
		subsession_id: subsessionId,
		simsession_number: simsessionNumber,
		customer_id: customerId,
		team_id: teamId,
	});

// TODO: Add params
const searchHosted = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/results/search_hosted");

// TODO: Add params
const searchSeries = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/results/search_series");

const getSeasonResults = async (
	axiosInstance: AxiosInstance,
	seasonId: number,
	eventType?: number,
	raceWeekNumber?: number,
) =>
	await getData(axiosInstance, "data/results/season_results", {
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

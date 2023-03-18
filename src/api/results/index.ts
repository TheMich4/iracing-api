import {
	GetResultParams,
	GetResultResponse,
	GetResultsEventLogParams,
	GetResultsEventLogResponse,
	GetResultsLapChartDataParams,
	GetResultsLapDataParams,
	GetSeasonResultsParams,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getResult = async (
	axiosInstance: AxiosInstance,
	params: GetResultParams,
) =>
	await getData<GetResultResponse>(axiosInstance, "data/results/get", {
		subsession_id: params.subsessionId,
		include_licenses: params.includeLicenses,
	});

export const getResultsEventLog = async (
	axiosInstance: AxiosInstance,
	params: GetResultsEventLogParams,
) =>
	await getData<GetResultsEventLogResponse>(
		axiosInstance,
		"data/results/event_log",
		{
			subsession_id: params.subsessionId,
			simsession_number: params.simsessionNumber,
		},
	);

export const getResultsLapChartData = async (
	axiosInstance: AxiosInstance,
	params: GetResultsLapChartDataParams,
) =>
	await getData(axiosInstance, "data/results/lap_chart_data", {
		subsession_id: params.subsessionId,
		simsession_number: params.simsessionNumber,
	});

export const getResultsLapData = async (
	axiosInstance: AxiosInstance,
	params: GetResultsLapDataParams,
) =>
	await getData(axiosInstance, "data/results/lap_data", {
		subsession_id: params.subsessionId,
		simsession_number: params.simsessionNumber,
		customer_id: params.customerId,
		team_id: params.teamId,
	});

// TODO: Add params
export const searchHosted = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/results/search_hosted");

// TODO: Add params
export const searchSeries = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/results/search_series");

export const getSeasonResults = async (
	axiosInstance: AxiosInstance,
	params: GetSeasonResultsParams,
) =>
	await getData(axiosInstance, "data/results/season_results", {
		season_id: params.seasonId,
		event_type: params.eventType,
		race_week_num: params.raceWeekNumber,
	});

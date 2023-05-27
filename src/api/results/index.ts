import {
	GetResultParams,
	GetResultResponse,
	GetResultsEventLogParams,
	GetResultsEventLogResponse,
	GetResultsLapChartDataParams,
	GetResultsLapDataParams,
	GetSeasonResultsParams,
	SearchSeriesParams,
} from "./types.js";
import { getData, getLinkData } from "../../helpers.js";

import { AxiosInstance } from "axios";
import { Result } from "../../types/results.js";

export const getResult = async (
	axiosInstance: AxiosInstance,
	params: GetResultParams,
): Promise<Result | undefined> =>
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

export const searchSeries = async (
	axiosInstance: AxiosInstance,
	params: SearchSeriesParams,
) => {
	const response = await axiosInstance.get("data/results/search_series", {
		params: {
			season_year: params?.seasonYear,
			season_quarter: params?.seasonQuarter,
			start_range_begin: params?.startRangeBegin,
			start_range_end: params?.startRangeEnd,
			finish_range_begin: params?.finishRangeBegin,
			finish_range_end: params?.finishRangeEnd,
			cust_id: params?.customerId,
			series_id: params?.seriesId,
			race_week_num: params?.raceWeekNum,
			official_only: params?.officialOnly,
			event_types: params?.eventTypes,
			category_ids: params?.categoryIds,
		},
	});

	if (!response.data?.data?.success || !response.data?.data?.chunk_info) {
		return undefined;
	}

	const {
		data: { data: { chunk_info: { base_download_url, chunk_file_names } } },
	} = response;

	const chunksData = await Promise.all(
		chunk_file_names.map(async (chunkFileName: string) => {
			return await getLinkData(`${base_download_url}${chunkFileName}`);
		}),
	);

	return chunksData.flatMap((chunk) => chunk);
};

export const getSeasonResults = async (
	axiosInstance: AxiosInstance,
	params: GetSeasonResultsParams,
) =>
	await getData(axiosInstance, "data/results/season_results", {
		season_id: params.seasonId,
		event_type: params.eventType,
		race_week_num: params.raceWeekNumber,
	});

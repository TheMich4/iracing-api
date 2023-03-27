import {
	GetSeriesAssetsResponse,
	GetSeriesDataResponse,
	GetSeriesPastSeasonsParams,
	GetSeriesSeasonsParams,
	GetSeriesSeasonsResponse,
	GetSeriesStatsResponse,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getSeriesAssets = async (axiosInstance: AxiosInstance) =>
	await getData<GetSeriesAssetsResponse>(axiosInstance, "data/series/assets");

export const getSeriesData = async (axiosInstance: AxiosInstance) =>
	await getData<GetSeriesDataResponse>(axiosInstance, "data/series/get");

export const getSeriesPastSeasons = async (
	axiosInstance: AxiosInstance,
	params: GetSeriesPastSeasonsParams,
) =>
	await getData(axiosInstance, "data/series/past_seasons", {
		series_id: params.seriesId,
	});

export const getSeriesSeasons = async (
	axiosInstance: AxiosInstance,
	params?: GetSeriesSeasonsParams,
) =>
	await getData<GetSeriesSeasonsResponse>(
		axiosInstance,
		"data/series/seasons",
		{
			include_series: params?.includeSeries,
		},
	);

export const getSeriesStats = async (axiosInstance: AxiosInstance) =>
	await getData<GetSeriesStatsResponse>(
		axiosInstance,
		"data/series/stats_series",
	);

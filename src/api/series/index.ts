import { GetSeriesPastSeasonsParams, GetSeriesSeasonsParams } from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

export const getSeriesAssets = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/assets");

export const getSeriesData = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/get");

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
	await getData(axiosInstance, "data/series/seasons", {
		include_series: params?.includeSeries,
	});

export const getSeriesStats = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/stats_series");

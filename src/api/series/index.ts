import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getSeriesAssets = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/assets");

const getSeriesData = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/get");

const getSeriesPastSeasons = async (
	axiosInstance: AxiosInstance,
	seriesId: number,
) =>
	await getData(axiosInstance, "data/series/past_seasons", {
		series_id: seriesId,
	});

const getSeriesSeasons = async (
	axiosInstance: AxiosInstance,
	includeSeries?: boolean,
) =>
	await getData(axiosInstance, "data/series/seasons", {
		include_series: includeSeries,
	});

const getSeriesStats = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/series/stats_series");

export {
	getSeriesAssets,
	getSeriesData,
	getSeriesPastSeasons,
	getSeriesSeasons,
	getSeriesStats,
};

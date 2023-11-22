import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getSeriesAssets = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/series/assets");

export const getSeriesData = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/series/get");

export const getSeriesPastSeasons = async (
	fetchCookie: FetchCookie,
	params: any,
) =>
	await getData(fetchCookie, "data/series/past_seasons", {
		series_id: params.seriesId,
	});

export const getSeriesSeasons = async (
	fetchCookie: FetchCookie,
	params?: any,
) =>
	await getData(fetchCookie, "data/series/seasons", {
		include_series: params?.includeSeries,
	});

export const getSeriesStats = async (fetchCookie: FetchCookie) =>
	await getData(
		fetchCookie,
		"data/series/stats_series",
	);

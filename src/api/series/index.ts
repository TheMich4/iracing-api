import {
	GetSeriesAssetsResponse,
	GetSeriesDataResponse,
	GetSeriesPastSeasonsParams,
	GetSeriesSeasonsParams,
	GetSeriesSeasonsResponse,
	GetSeriesStatsResponse,
} from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getSeriesAssets = async (fetchCookie: FetchCookie) =>
	await getData<GetSeriesAssetsResponse>(fetchCookie, "data/series/assets");

export const getSeriesData = async (fetchCookie: FetchCookie) =>
	await getData<GetSeriesDataResponse>(fetchCookie, "data/series/get");

export const getSeriesPastSeasons = async (
	fetchCookie: FetchCookie,
	params: GetSeriesPastSeasonsParams,
) =>
	await getData(fetchCookie, "data/series/past_seasons", {
		series_id: params.seriesId,
	});

export const getSeriesSeasons = async (
	fetchCookie: FetchCookie,
	params?: GetSeriesSeasonsParams,
) =>
	await getData<GetSeriesSeasonsResponse>(fetchCookie, "data/series/seasons", {
		include_series: params?.includeSeries,
	});

export const getSeriesStats = async (fetchCookie: FetchCookie) =>
	await getData<GetSeriesStatsResponse>(
		fetchCookie,
		"data/series/stats_series",
	);

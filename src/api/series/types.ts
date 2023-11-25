// Params

import {
	SeriesAsset,
	SeriesData,
	SeriesSeason,
	SeriesStats,
} from "../../types/series.js";

export interface GetSeriesPastSeasonsParams {
	seriesId: number;
}

export interface GetSeriesSeasonsParams {
	includeSeries?: boolean;
}

// Response

export interface GetSeriesAssetsResponse {
	[seriesId: number]: SeriesAsset;
}

export type GetSeriesDataResponse = Array<SeriesData>;

export type GetSeriesSeasonsResponse = Array<SeriesSeason>;

export type GetSeriesStatsResponse = Array<SeriesStats>;

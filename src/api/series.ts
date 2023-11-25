import * as z from "zod";

import {
  SeriesAssets,
  SeriesData,
  SeriesSeason,
  SeriesStat,
} from "../types/series.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getSeriesAssets = async (fetchCookie: FetchCookie) =>
  await getData<SeriesAssets>(fetchCookie, "data/series/assets");

export const getSeriesData = async (fetchCookie: FetchCookie) =>
  await getData<SeriesData[]>(fetchCookie, "data/series/get");

export const getSeriesPastSeasonsParamsSchema = z.object({
  seriesId: z.number(),
});
export type GetSeriesPastSeasonsParams = z.infer<
  typeof getSeriesPastSeasonsParamsSchema
>;

export const getSeriesPastSeasons = async (
  fetchCookie: FetchCookie,
  params: GetSeriesPastSeasonsParams
) =>
  await getData(fetchCookie, "data/series/past_seasons", {
    series_id: params.seriesId,
  });

export const GetSeriesSeasonsParamSchema = z.object({
  includeSeries: z.boolean().optional(),
});
export type GetSeriesSeasonsParams = z.infer<
  typeof GetSeriesSeasonsParamSchema
>;

export const getSeriesSeasons = async (
  fetchCookie: FetchCookie,
  params?: GetSeriesSeasonsParams
) =>
  await getData<SeriesSeason[]>(fetchCookie, "data/series/seasons", {
    include_series: params?.includeSeries,
  });

export const getSeriesStats = async (fetchCookie: FetchCookie) =>
  await getData<SeriesStat[]>(fetchCookie, "data/series/stats_series");

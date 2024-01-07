import { z } from "zod";
import { API } from ".";
import { getData } from "../helpers";
import { SeriesAssets, SeriesData, SeriesSeason, SeriesStat } from "../types";

export const getSeriesPastSeasonsParamsSchema = z.object({
  seriesId: z.number(),
});
export type GetSeriesPastSeasonsParams = z.infer<
  typeof getSeriesPastSeasonsParamsSchema
>;
export const GetSeriesSeasonsParamSchema = z.object({
  includeSeries: z.boolean().optional(),
});
export type GetSeriesSeasonsParams = z.infer<
  typeof GetSeriesSeasonsParamSchema
>;
export class SeriesAPI extends API {
  // Series API
  /**
   * *image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getSeriesAssets = async () =>
    await getData<SeriesAssets>(this.fetchCookie, "data/series/assets");
  /**
   *
   * @returns
   */
  getSeriesData = async () =>
    await getData<SeriesData[]>(this.fetchCookie, "data/series/get");
  /**
   *
   * *Get all seasons for a series. Filter list by official:true for seasons with standings.*
   *
   * @param {api.GetSeriesPastSeasonsParams} params
   * @param {number} params.seriesId
   *
   * @returns
   */
  getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
    await getData(this.fetchCookie, "data/series/past_seasons", {
      series_id: params.seriesId,
    });
  /**
   *
   * @param {api.GetSeriesSeasonsParams} [params]
   * @param {boolean} [params.includeSeries]
   *
   * @returns
   */
  getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
    await getData<SeriesSeason[]>(this.fetchCookie, "data/series/seasons", {
      include_series: params?.includeSeries,
    });
  /**
   *
   * *To get series and seasons for which standings should be available, filter the list by official: true.*
   *
   * @returns
   */
  getSeriesStats = async () =>
    await getData<SeriesStat[]>(this.fetchCookie, "data/series/stats_series");
}

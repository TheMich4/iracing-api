import { API } from './api'
import {
    GetSeriesPastSeasonsParams,
    GetSeriesPastSeasonsResponse,
    GetSeriesSeasonsParams,
    SeriesAssets,
    SeriesData,
    SeriesSeason,
    SeriesStat,
} from '../types'

/**
 * Provides methods for interacting with series-related endpoints.
 */
export class SeriesAPI extends API {
    // Series API
    /**
     * Get assets for all series (logos, images, copy).
     *
     * Note: Image paths are relative to `https://images-static.iracing.com/`.
     *
     * @returns A promise resolving to the series assets data, or undefined on error.
     */
    getSeriesAssets = async () =>
        await this._getData<SeriesAssets>('data/series/assets')
    /**
     * Get basic data for all series.
     *
     * @returns A promise resolving to an array of series data objects, or undefined on error.
     */
    getSeriesData = async () =>
        await this._getData<SeriesData[]>('data/series/get')
    /**
     * Get all past seasons for a specific series.
     *
     * Note: Filter the response list by `official: true` for seasons with standings.
     *
     * @param {GetSeriesPastSeasonsParams} params - Parameters for the request.
     * @param {number} params.seriesId - The ID of the series.
     *
     * @returns A promise resolving to the past seasons data for the series, or undefined on error.
     */
    getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
        await this._getData<GetSeriesPastSeasonsResponse>(
            'data/series/past_seasons',
            {
                series_id: params.seriesId,
            }
        )
    /**
     * Get the current seasons for all series.
     *
     * @param {GetSeriesSeasonsParams} [params] - Optional parameters.
     * @param {boolean} [params.includeSeries=false] - Include detailed series information within each season object.
     *
     * @returns A promise resolving to an array of current series season objects, or undefined on error.
     */
    getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
        await this._getData<SeriesSeason[]>('data/series/seasons', {
            include_series: params?.includeSeries,
        })
    /**
     * Get statistical data for all series, including associated seasons.
     *
     * Note: To get series and seasons for which standings should be available, filter the list by `official: true`.
     *
     * @returns A promise resolving to an array of series statistics objects, or undefined on error.
     */
    getSeriesStats = async () =>
        await this._getData<SeriesStat[]>('data/series/stats_series')
}

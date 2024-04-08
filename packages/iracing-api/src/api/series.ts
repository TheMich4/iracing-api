import { API } from './api'
import {
    GetSeriesPastSeasonsParams,
    GetSeriesSeasonsParams,
    SeriesAssets,
    SeriesData,
    SeriesSeason,
    SeriesStat,
} from '../types'

export class SeriesAPI extends API {
    // Series API
    /**
     * *image paths are relative to https://images-static.iracing.com/*
     *
     * @returns
     */
    getSeriesAssets = async () =>
        await this._getData<SeriesAssets>('data/series/assets')
    /**
     *
     * @returns
     */
    getSeriesData = async () =>
        await this._getData<SeriesData[]>('data/series/get')
    /**
     *
     * *Get all seasons for a series. Filter list by official:true for seasons with standings.*
     *
     * @param {GetSeriesPastSeasonsParams} params
     * @param {number} params.seriesId
     *
     * @returns
     */
    getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
        await this._getData('data/series/past_seasons', {
            series_id: params.seriesId,
        })
    /**
     *
     * @param {GetSeriesSeasonsParams} [params]
     * @param {boolean} [params.includeSeries]
     *
     * @returns
     */
    getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
        await this._getData<SeriesSeason[]>('data/series/seasons', {
            include_series: params?.includeSeries,
        })
    /**
     *
     * *To get series and seasons for which standings should be available, filter the list by official: true.*
     *
     * @returns
     */
    getSeriesStats = async () =>
        await this._getData<SeriesStat[]>('data/series/stats_series')
}

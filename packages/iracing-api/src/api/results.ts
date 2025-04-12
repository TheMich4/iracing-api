import { API } from './api'
import {
    GetResultParams,
    GetResultResponse,
    GetResultsEventLogParams,
    GetResultsLapChartDataParams,
    GetResultsLapDataOptions,
    GetResultsLapDataParams,
    GetResultsLapDataResponse,
    GetResultsLapDataWithChunksResponse,
    GetSeasonResultsParams,
    GetSeasonResultsResponse,
    LapDataItem,
    SearchSeriesParams,
    SearchSeriesResponse,
    SearchHostedParams,
    SearchHostedResponse,
} from '../types/results'

export class ResultsAPI extends API {
    /**
     *
     * @param { GetResultParams} params
     * @param {number} params.subsessionId
     * @param {number} [params.includeLicenses]
     *
     * @returns {Promise<GetResultResponse | undefined>} The race result data or undefined if there was an error
     */
    getResult = async (
        params: GetResultParams
    ): Promise<GetResultResponse | undefined> =>
        await this._getData<GetResultResponse>('data/results/get', {
            subsession_id: params.subsessionId,
            include_licenses: params.includeLicenses,
        })
    /**
     *
     * @param {GetResultsEventLogParams} params
     * @param {number} params.subsessionId
     * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
     *
     * @returns
     */
    getResultsEventLog = async (params: GetResultsEventLogParams) =>
        await this._getData('data/results/event_log', {
            subsession_id: params.subsessionId,
            simsession_number: params.simsessionNumber,
        })
    /**
     *
     * @param {GetResultsLapChartDataParams} params
     * @param {number} params.subsessionId
     * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
     *
     * @returns
     */
    getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
        await this._getData('data/results/lap_chart_data', {
            subsession_id: params.subsessionId,
            simsession_number: params.simsessionNumber,
        })

    /**
     *
     * @param {GetResultsLapDataParams} params
     * @param {number} params.subsessionId
     * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
     * @param {number} [params.customerId] - Required if the subsession was a single-driver event. Optional for team events. If omitted for a team event then the laps driven by all the team's drivers will be included.
     * @param {number} [params.teamId] - Required if the subsession was a team event.
     *
     * @param {GetResultsLapDataOptions} [options]
     * @param {boolean} [options.getAllChunks] - If true, all chunks will be downloaded and returned.
     *
     * @returns
     */
    getResultsLapData = async (
        params: GetResultsLapDataParams,
        options?: GetResultsLapDataOptions
    ): Promise<
        GetResultsLapDataResponse | GetResultsLapDataWithChunksResponse
    > => {
        const data = await this._getData<GetResultsLapDataResponse>(
            'data/results/lap_data',
            {
                subsession_id: params.subsessionId,
                simsession_number: params.simsessionNumber,
                cust_id: params.customerId,
                team_id: params.teamId,
            }
        )

        if (!data) {
            throw new Error('Failed to fetch lap data')
        }

        if (!options?.getAllChunks) return data

        const chunkData = await Promise.all(
            data.chunkInfo?.chunkFileNames?.map((chunkFileName: string) => {
                return this._getLinkData(
                    `${data.chunkInfo?.baseDownloadUrl}${chunkFileName}`
                )
            }) ?? []
        )

        return {
            ...data,
            lapData: chunkData.flatMap((chunk) => chunk as LapDataItem[]),
        }
    }

    /**
     * Search for hosted session results.
     * Requires start_range_begin/end or finish_range_begin/end, unless one of the optional parameters cust_id, team_id, host_cust_id, session_name, league_id, league_season_id is provided.
     * Max range allowed is 90 days.
     *
     * @param {SearchHostedParams} [params] - Search parameters.
     * @param {string} [params.startRangeBegin] - Session start times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
     * @param {string} [params.startRangeEnd] - Exclusive. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". May be omitted if startRangeBegin is less than 90 days in the past.
     * @param {string} [params.finishRangeBegin] - Session finish times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
     * @param {string} [params.finishRangeEnd] - Exclusive. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". May be omitted if finishRangeBegin is less than 90 days in the past.
     * @param {number} [params.custId] - The participant's customer ID. Ignored if teamId is supplied.
     * @param {number} [params.teamId] - The team ID to search for. Takes priority over custId if both are supplied.
     * @param {number} [params.hostCustId] - The host's customer ID.
     * @param {string} [params.sessionName] - Part or all of the session's name.
     * @param {number} [params.leagueId] - Include only results for the league with this ID.
     * @param {number} [params.leagueSeasonId] - Include only results for the league season with this ID.
     * @param {number} [params.carId] - One of the cars used by the session.
     * @param {number} [params.trackId] - The ID of the track used by the session.
     * @param {number[]} [params.categoryIds] - Track categories to include in the search. Defaults to all.
     *
     * @returns {Promise<SearchHostedResponse | undefined>}
     */
    searchHosted = async (
        params?: SearchHostedParams
    ): Promise<SearchHostedResponse | undefined> =>
        await this._getData<SearchHostedResponse>(
            'data/results/search_hosted',
            {
                start_range_begin: params?.startRangeBegin,
                start_range_end: params?.startRangeEnd,
                finish_range_begin: params?.finishRangeBegin,
                finish_range_end: params?.finishRangeEnd,
                cust_id: params?.custId,
                team_id: params?.teamId,
                host_cust_id: params?.hostCustId,
                session_name: params?.sessionName,
                league_id: params?.leagueId,
                league_season_id: params?.leagueSeasonId,
                car_id: params?.carId,
                track_id: params?.trackId,
                category_ids: params?.categoryIds?.join(','),
            }
        )
    /**
     * Search for series results based on various criteria
     *
     * @param {SearchSeriesParams} params - Search parameters
     * @param {number} [params.seasonYear] - Required when using seasonQuarter
     * @param {number} [params.seasonQuarter] - Required when using seasonYear
     * @param {string} [params.startRangeBegin] - Session start time in ISO-8601 UTC format (e.g. "2022-04-01T15:45Z")
     * @param {string} [params.startRangeEnd] - Session end time in ISO-8601 UTC format (e.g. "2022-04-01T15:45Z"). Exclusive. May be omitted if startRangeBegin is less than 90 days in the past.
     * @param {string} [params.finishRangeBegin] - Session finish time in ISO-8601 UTC format (e.g. "2022-04-01T15:45Z")
     * @param {string} [params.finishRangeEnd] - Session finish time in ISO-8601 UTC format (e.g. "2022-04-01T15:45Z"). Exclusive. May be omitted if finishRangeBegin is less than 90 days in the past.
     * @param {number} [params.customerId] - Include only sessions in which this customer participated. Ignored if teamId is supplied.
     * @param {number} [params.teamId] - Include only sessions in which this team participated. Takes priority over customerId if both are supplied.
     * @param {number} [params.seriesId] - Include only sessions for series with this ID.
     * @param {number} [params.raceWeekNum] - Include only sessions with this race week number.
     * @param {boolean} [params.officialOnly] - If true, include only sessions earning championship points. Defaults to all.
     * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all.
     * @param {number[]} [params.categoryIds] - License categories to include in the search. Defaults to all.
     *
     * @returns {Promise<SearchSeriesResponse | undefined>} The search results
     */
    searchSeries = async (params?: SearchSeriesParams) => {
        const responseData = await this._getData<SearchSeriesResponse>(
            'data/results/search_series',
            {
                season_year: params?.seasonYear,
                season_quarter: params?.seasonQuarter,
                start_range_begin: params?.startRangeBegin,
                start_range_end: params?.startRangeEnd,
                finish_range_begin: params?.finishRangeBegin,
                finish_range_end: params?.finishRangeEnd,
                cust_id: params?.customerId,
                team_id: params?.teamId,
                series_id: params?.seriesId,
                race_week_num: params?.raceWeekNum,
                official_only: params?.officialOnly,
                event_types: params?.eventTypes?.join(','),
                category_ids: params?.categoryIds?.join(','),
            }
        )

        if (!responseData?.data?.success || !responseData?.data?.chunk_info) {
            return responseData
        }

        const {
            data: {
                chunk_info: { base_download_url, chunk_file_names },
            },
        } = responseData

        const chunksData = await Promise.all(
            chunk_file_names.map(async (chunkFileName: string) => {
                return await this._getLinkData(
                    `${base_download_url}${chunkFileName}`
                )
            })
        )

        return chunksData.flatMap((chunk: unknown) => chunk as unknown[])
    }

    /**
     *
     * @param params
     *
     * @returns
     */
    getSeasonResults = async (params: GetSeasonResultsParams) =>
        await this._getData<GetSeasonResultsResponse>(
            'data/results/season_results',
            {
                season_id: params.seasonId,
                event_type: params.eventType,
                race_week_num: params.raceWeekNumber,
            }
        )
}

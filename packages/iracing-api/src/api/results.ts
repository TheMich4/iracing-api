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

/**
 * Provides methods for interacting with session result endpoints.
 */
export class ResultsAPI extends API {
    /**
     * Get the results of a specific subsession.
     *
     * Note: `series_logo` image paths in response are relative to `https://images-static.iracing.com/img/logos/series/`.
     *
     * @param {GetResultParams} params - Parameters for the request.
     * @param {number} params.subsessionId - The ID of the subsession.
     * @param {boolean} [params.includeLicenses=false] - Include license information in the response.
     *
     * @returns A promise resolving to the race result data, or undefined on error.
     */
    getResult = async (
        params: GetResultParams
    ): Promise<GetResultResponse | undefined> =>
        await this._getData<GetResultResponse>('data/results/get', {
            subsession_id: params.subsessionId,
            include_licenses: params.includeLicenses,
        })
    /**
     * Get the event log for a specific subsession and simsession.
     *
     * @param {GetResultsEventLogParams} params - Parameters for the request.
     * @param {number} params.subsessionId - The ID of the subsession.
     * @param {number} params.simsessionNumber - The simsession number (0 for main event, -1 for preceding, etc.).
     *
     * @returns A promise resolving to the event log data, or undefined on error.
     */
    getResultsEventLog = async (params: GetResultsEventLogParams) =>
        await this._getData('data/results/event_log', {
            subsession_id: params.subsessionId,
            simsession_number: params.simsessionNumber,
        })
    /**
     * Get lap chart data for a specific subsession and simsession.
     *
     * @param {GetResultsLapChartDataParams} params - Parameters for the request.
     * @param {number} params.subsessionId - The ID of the subsession.
     * @param {number} params.simsessionNumber - The simsession number (0 for main event, -1 for preceding, etc.).
     *
     * @returns A promise resolving to the lap chart data, or undefined on error.
     */
    getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
        await this._getData('data/results/lap_chart_data', {
            subsession_id: params.subsessionId,
            simsession_number: params.simsessionNumber,
        })

    /**
     * Get lap data for a driver or team in a specific subsession and simsession.
     *
     * @param {GetResultsLapDataParams} params - Parameters for the request.
     * @param {number} params.subsessionId - The ID of the subsession.
     * @param {number} params.simsessionNumber - The simsession number (0 for main event, -1 for preceding, etc.).
     * @param {number} [params.customerId] - Required for single-driver events. Optional for team events (returns all team laps if omitted).
     * @param {number} [params.teamId] - Required for team events.
     *
     * @param {GetResultsLapDataOptions} [options] - Options for fetching data.
     * @param {boolean} [options.getAllChunks=false] - If true, fetch and combine data from all chunks (if applicable).
     *
     * @returns A promise resolving to the lap data, potentially combined from chunks, or throws an error if fetching fails.
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
     * Search for hosted and league session results.
     *
     * Note: Maximum time frame is 90 days. Results may be split into chunks.
     * Requires one time range (`start_range_begin` or `finish_range_begin`).
     * Requires one identifier (`custId`, `teamId`, `hostCustId`, `sessionName`).
     *
     * @param {SearchHostedParams} [params] - Search parameters.
     * @param {string} [params.startRangeBegin] - Session start time range begin (ISO-8601 UTC).
     * @param {string} [params.startRangeEnd] - Session start time range end (ISO-8601 UTC, exclusive).
     * @param {string} [params.finishRangeBegin] - Session finish time range begin (ISO-8601 UTC).
     * @param {string} [params.finishRangeEnd] - Session finish time range end (ISO-8601 UTC, exclusive).
     * @param {number} [params.custId] - Participant's customer ID (ignored if `teamId` provided).
     * @param {number} [params.teamId] - Team ID (takes priority over `custId`).
     * @param {number} [params.hostCustId] - Host's customer ID.
     * @param {string} [params.sessionName] - Partial or full session name.
     * @param {number} [params.leagueId] - Filter by league ID.
     * @param {number} [params.leagueSeasonId] - Filter by league season ID.
     * @param {number} [params.carId] - Filter by car ID used in the session.
     * @param {number} [params.trackId] - Filter by track ID used in the session.
     * @param {number[]} [params.categoryIds] - Filter by track category IDs (defaults to all).
     *
     * @returns A promise resolving to the search results (possibly chunked), or undefined on error.
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
     * Search for official series results.
     *
     * Note: Maximum time frame is 90 days. Results may be split into chunks.
     * Requires at least one time filter (`season_year`/`season_quarter`, `start_range_begin`, or `finish_range_begin`).
     *
     * @param {SearchSeriesParams} [params] - Search parameters.
     * @param {number} [params.seasonYear] - Season year (requires `seasonQuarter`).
     * @param {number} [params.seasonQuarter] - Season quarter (requires `seasonYear`).
     * @param {string} [params.startRangeBegin] - Session start time range begin (ISO-8601 UTC).
     * @param {string} [params.startRangeEnd] - Session start time range end (ISO-8601 UTC, exclusive).
     * @param {string} [params.finishRangeBegin] - Session finish time range begin (ISO-8601 UTC).
     * @param {string} [params.finishRangeEnd] - Session finish time range end (ISO-8601 UTC, exclusive).
     * @param {number} [params.customerId] - Participant's customer ID (ignored if `teamId` provided).
     * @param {number} [params.teamId] - Team ID (takes priority over `customerId`).
     * @param {number} [params.seriesId] - Filter by series ID.
     * @param {number} [params.raceWeekNum] - Filter by race week number (0-based).
     * @param {boolean} [params.officialOnly=false] - Include only official sessions earning points.
     * @param {number[]} [params.eventTypes] - Filter by event type IDs (defaults to all).
     * @param {number[]} [params.categoryIds] - Filter by license category IDs (defaults to all).
     *
     * @returns A promise resolving to the search results (potentially combined from chunks), or the raw chunk info response if chunk fetching is not implemented/fails.
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
     * Get results for a specific season, optionally filtered by event type and race week.
     *
     * @param {GetSeasonResultsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} [params.eventType] - Filter by event type ID (2=Practice, 3=Qualify, 4=Time Trial, 5=Race).
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based).
     *
     * @returns A promise resolving to the season results data, or undefined on error.
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

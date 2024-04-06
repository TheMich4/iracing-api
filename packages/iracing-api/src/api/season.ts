import { API } from './api'
import {
    GetSeasonListParams,
    GetSeasonRaceGuideParams,
    GetSpectatorSubsessionIdsParams,
} from '../types/season'

export class SeasonAPI extends API {
    /**
     *
     * @param {GetSeasonListParams} params
     * @param {number} params.seasonYear
     * @param {number} params.seasonQuarter
     *
     * @returns
     */
    getSeasonList = async (params: GetSeasonListParams) =>
        await this._getData('data/season/list', {
            season_year: params.seasonYear,
            season_quarter: params.seasonQuarter,
        })
    /**
     *
     * @param {GetSeasonRaceGuideParams} params
     * @param {string} from - `ISO-8601` offset format. Defaults to the current time. Include sessions with start times up to 3 hours after this time. Times in the past will be rewritten to the current time.
     * @param {boolean} [includeEndAfterFrom] - Include sessions which start before 'from' but end after.
     *
     * @returns
     */
    getSeasonRaceGuide = async (params: GetSeasonRaceGuideParams) =>
        await this._getData('data/season/race_guide', {
            from: params?.from,
            include_end_after_from: params?.includeEndAfterFrom,
        })
    /**
     *
     * @param {GetSpectatorSubsessionIdsParams} [params]
     * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all.
     *
     * @returns
     */
    getSpectatorSubsessionIds = async (
        params?: GetSpectatorSubsessionIdsParams
    ) =>
        await this._getData('data/season/spectator_subsession_ids', {
            event_types: params?.eventTypes,
        })
}

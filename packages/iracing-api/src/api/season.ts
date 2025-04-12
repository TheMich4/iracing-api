import { API } from './api'
import {
    GetSeasonListParams,
    GetSeasonListResponse,
    GetSeasonRaceGuideParams,
    GetSeasonRaceGuideResponse,
    GetSpectatorSubsessionIdsDetailParams,
    GetSpectatorSubsessionIdsParams,
    GetSpectatorSubsessionIdsResponse,
} from '../types'

/**
 * Provides methods for interacting with season-related endpoints.
 */
export class SeasonAPI extends API {
    /**
     * Get a list of seasons for a specific year and quarter.
     *
     * @param {GetSeasonListParams} params - Parameters for the request.
     * @param {number} params.seasonYear - The year of the season.
     * @param {number} params.seasonQuarter - The quarter of the season (1-4).
     *
     * @returns A promise resolving to the list of seasons, or undefined on error.
     */
    getSeasonList = async (params: GetSeasonListParams) =>
        await this._getData<GetSeasonListResponse>('data/season/list', {
            season_year: params.seasonYear,
            season_quarter: params.seasonQuarter,
        })
    /**
     * Get the race guide, showing upcoming sessions.
     *
     * @param {GetSeasonRaceGuideParams} [params] - Optional parameters to control the time frame.
     * @param {string} [params.from] - ISO-8601 offset format start time. Defaults to current time. Includes sessions up to 3 hours after this time.
     * @param {boolean} [params.includeEndAfterFrom=false] - Include sessions starting before `from` but ending after.
     *
     * @returns A promise resolving to the race guide data, or undefined on error.
     */
    getSeasonRaceGuide = async (params?: GetSeasonRaceGuideParams) =>
        await this._getData<GetSeasonRaceGuideResponse>(
            'data/season/race_guide',
            {
                from: params?.from,
                include_end_after_from: params?.includeEndAfterFrom,
            }
        )
    /**
     * Get a list of subsession IDs that are available for spectating.
     *
     * @param {GetSpectatorSubsessionIdsParams} [params] - Optional parameters to filter by event type.
     * @param {number[]} [params.eventTypes] - Array of event type IDs to include. Defaults to all.
     *
     * @returns A promise resolving to the list of spectator subsession IDs, or undefined on error.
     */
    getSpectatorSubsessionIds = async (
        params?: GetSpectatorSubsessionIdsParams
    ) =>
        await this._getData<GetSpectatorSubsessionIdsResponse>(
            'data/season/spectator_subsession_ids',
            {
                event_types: params?.eventTypes,
            }
        )
    /**
     * Get detailed information about subsession IDs that are available for spectating.
     *
     * @param {GetSpectatorSubsessionIdsDetailParams} [params] - Optional parameters to filter by event type and season.
     * @param {number[]} [params.eventTypes] - Array of event type IDs to include. Defaults to all.
     * @param {number[]} [params.seasonIds] - Array of season IDs to include. Defaults to all.
     *
     * @returns A promise resolving to the detailed list of spectator subsession IDs, or undefined on error.
     */
    getSpectatorSubsessionIdsDetail = async (
        params?: GetSpectatorSubsessionIdsDetailParams
    ) =>
        await this._getData('data/season/spectator_subsessionids_detail', {
            event_types: params?.eventTypes,
            season_ids: params?.seasonIds,
        })
}

import { API } from './api'
import { GetTimeAttackSeasonParams } from '../types/time-attack'

/**
 * Provides methods for interacting with time attack competition endpoints.
 */
export class TimeAttackAPI extends API {
    /**
     * Get the time attack season results for the **authenticated** member.
     *
     * @param {GetTimeAttackSeasonParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the time attack competition season (`ta_comp_season_id`).
     *
     * @returns A promise resolving to the member's time attack season results, or undefined on error.
     *          Note: The specific type for the results array is not fully defined yet.
     */
    getTimeAttackSeasonResults = async (params: GetTimeAttackSeasonParams) =>
        await this._getData<Array<unknown>>(
            'data/time_attack/member_season_results',
            {
                ta_comp_season_id: params.seasonId,
            }
        )
}

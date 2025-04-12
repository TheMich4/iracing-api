import { API } from './api'
import type {
    GetHostedCombinedSessionsParams,
    HostedCombinedSessions,
    HostedSessions,
} from '../types'

/**
 * Provides methods for interacting with hosted session endpoints.
 */
export class HostedAPI extends API {
    /**
     * Get a list of combined hosted sessions.
     *
     * Includes sessions that can be joined as a driver or spectator,
     * and also includes non-league pending sessions for the user.
     *
     * @param {GetHostedCombinedSessionsParams} [params] - Optional parameters to filter the sessions.
     * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
     *
     * @returns A promise resolving to the combined hosted sessions data, or undefined on error.
     */
    getHostedCombinedSessions = async (
        params?: GetHostedCombinedSessionsParams
    ) => {
        return await this._getData<HostedCombinedSessions>(
            'data/hosted/combined_sessions',
            {
                package_id: params?.packageId,
            }
        )
    }
    /**
     * Get a list of hosted sessions that can be joined as a driver.
     *
     * Excludes spectator sessions and non-league pending sessions.
     *
     * @returns A promise resolving to the hosted sessions data, or undefined on error.
     */
    getHostedSessions = async () => {
        return await this._getData<HostedSessions>('data/hosted/sessions')
    }
}

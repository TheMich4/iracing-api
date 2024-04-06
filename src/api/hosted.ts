import { API } from './api'
import type {
    GetHostedCombinedSessionsParams,
    HostedCombinedSessions,
    HostedSessions,
} from '../types'

export class HostedAPI extends API {
    /**
     *
     * **Get a list of hosted combined sessions.**
     *
     * *Sessions that can be joined as a driver or spectator, and also include non-league pending sessions for the user.*
     *
     * @param {GetHostedCombinedSessionsParams} [params]
     * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
     *
     * @returns
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
     *
     * **Get a list of hosted sessions.**
     *
     * *Sessions that can be joined as a driver. Without spectator and non-league pending sessions for the user.*
     *
     * @returns
     */
    getHostedSessions = async () => {
        return await this._getData<HostedSessions>('data/hosted/sessions')
    }
}

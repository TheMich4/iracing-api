import { API } from './api'
import { GetTeamDataParams, GetTeamDataResponse } from '../types'

/**
 * Provides methods for interacting with team-related endpoints.
 */
export class TeamAPI extends API {
    /**
     * Get detailed information about a specific team.
     *
     * @param {GetTeamDataParams} params - Parameters for the request.
     * @param {number} params.teamId - The ID of the team to retrieve.
     * @param {boolean} [params.includeLicenses=false] - Include license information for members (can slow down response).
     *
     * @returns A promise resolving to the team data, or undefined on error.
     */
    getTeamData = async (
        params: GetTeamDataParams
    ): Promise<GetTeamDataResponse | undefined> =>
        await this._getData('data/team/get', {
            team_id: params.teamId,
            include_licenses: params.includeLicenses,
        })
}

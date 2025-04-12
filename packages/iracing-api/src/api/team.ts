import { API } from './api'
import { GetTeamDataParams, GetTeamDataResponse } from '../types'

export class TeamAPI extends API {
    /**
     *
     * @param {GetTeamDataParams} params
     * @param {number} params.teamId
     * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
     *
     * @returns {Promise<GetTeamDataResponse | undefined>} The team data or undefined if there was an error
     */
    getTeamData = async (
        params: GetTeamDataParams
    ): Promise<GetTeamDataResponse | undefined> =>
        await this._getData('data/team/get', {
            team_id: params.teamId,
            include_licenses: params.includeLicenses,
        })
}

import { API } from './api'
import { GetTeamDataParams } from '../types'

export class TeamAPI extends API {
    /**
     *
     * @param {GetTeamDataParams} params
     * @param {number} params.teamId
     * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
     *
     * @returns
     */
    getTeamData = async (params: GetTeamDataParams) =>
        await this._getData('data/team/get', {
            team_id: params.teamId,
            include_licenses: params.includeLicenses,
        })
}

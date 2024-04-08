import { API } from './api'
import { GetTimeAttackSeasonParams } from '../types'

export class TimeAttackAPI extends API {
    /**
     *
     * @param {GetTimeAttackSeasonParams} params
     * @param {number} params.seasonId
     *
     * @returns
     */
    getTimeAttackSeasonResults = async (params: GetTimeAttackSeasonParams) =>
        this._getData('data/time_attack/member_season_results', {
            ta_comp_season_id: params.seasonId,
        })
}

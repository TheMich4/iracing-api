import { API } from "./api";
import { getData } from "../helpers";
import { GetTimeAttackSeasonParams } from "../types/time-attack";

export class TimeAttackAPI extends API {
  /**
   *
   * @param {GetTimeAttackSeasonParams} params
   * @param {number} seasonId
   *
   * @returns
   */
  getTimeAttackSeasonResults = async (params: GetTimeAttackSeasonParams) =>
    getData(this.fetchCookie, "data/time_attack/member_season_results", {
      ta_comp_season_id: params.seasonId,
    });
}

import { z } from "zod";
import { API } from ".";
import { getData } from "../helpers";

export const GetTimeAttackSeasonParamsSchema = z.object({
  seasonId: z.number(),
});
export type GetTimeAttackSeasonParams = z.infer<
  typeof GetTimeAttackSeasonParamsSchema
>;

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

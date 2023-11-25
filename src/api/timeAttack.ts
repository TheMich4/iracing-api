import * as z from "zod";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetTimeAttackSeasonParamsSchema = z.object({
  seasonId: z.number(),
});
export type GetTimeAttackSeasonParams = z.infer<
  typeof GetTimeAttackSeasonParamsSchema
>;

export const getTimeAttackSeasonResults = (
  fetchCookie: FetchCookie,
  params: GetTimeAttackSeasonParams
) =>
  getData(fetchCookie, "data/time_attack/member_season_results", {
    ta_comp_season_id: params.seasonId,
  });

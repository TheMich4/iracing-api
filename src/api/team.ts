import * as z from "zod";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetTeamDataParamsSchema = z.object({
  teamId: z.number(),
  includeLicenses: z.boolean().optional(),
});
export type GetTeamDataParams = z.infer<typeof GetTeamDataParamsSchema>;

export const getTeamData = async (
  fetchCookie: FetchCookie,
  params: GetTeamDataParams,
) =>
  await getData(fetchCookie, "data/team/get", {
    team_id: params.teamId,
    include_licenses: params.includeLicenses,
  });

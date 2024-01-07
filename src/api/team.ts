import { z } from "zod";
import { API } from ".";
import { getData } from "../helpers";

export const GetTeamDataParamsSchema = z.object({
  teamId: z.number(),
  includeLicenses: z.boolean().optional(),
});
export type GetTeamDataParams = z.infer<typeof GetTeamDataParamsSchema>;

export class TeamAPI extends API {
  /**
   *
   * @param {api.GetTeamDataParams} params
   * @param {number} params.teamId
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   *
   * @returns
   */
  getTeamData = async (params: GetTeamDataParams) =>
    await getData(this.fetchCookie, "data/team/get", {
      team_id: params.teamId,
      include_licenses: params.includeLicenses,
    });
}

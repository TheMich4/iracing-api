import { API } from "./api";
import { getData } from "../helpers";
import { GetTeamDataParams } from "../types/team";

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

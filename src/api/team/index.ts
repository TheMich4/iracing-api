import { FetchCookie } from "../../types.js";
import { GetTeamDataParams } from "./types.js";
import { getData } from "../../helpers.js";

export const getTeamData = async (
	fetchCookie: FetchCookie,
	params: GetTeamDataParams,
) =>
	await getData(fetchCookie, "data/team/get", {
		team_id: params.teamId,
		include_licenses: params.includeLicenses,
	});

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getTimeAttackSeasonResults = (
	fetchCookie: FetchCookie,
	params: any,
) =>
	getData(fetchCookie, "data/time_attack/member_season_results", {
		ta_comp_season_id: params.seasonId,
	});

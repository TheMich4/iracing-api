import { AxiosInstance } from "axios";
import { GetTimeAttackSeasonResultsParams } from "./types.js";
import { getData } from "../../helpers.js";

export const getTimeAttackSeasonResults = (
	axiosInstance: AxiosInstance,
	params: GetTimeAttackSeasonResultsParams,
) =>
	getData(axiosInstance, "data/time_attack/member_season_results", {
		ta_comp_season_id: params.seasonId,
	});

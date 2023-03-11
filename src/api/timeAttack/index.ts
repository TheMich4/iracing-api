import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getTimeAttackSeasonResults = (
	axiosInstance: AxiosInstance,
	seasonId: number,
) =>
	getData(axiosInstance, "data/time_attack/member_season_results", {
		ta_comp_season_id: seasonId,
	});

import { GetSeasonListParams, GetSeasonRaceGuideParams } from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

const getSeasonList = async (
	axiosInstance: AxiosInstance,
	params: GetSeasonListParams,
) =>
	await getData(axiosInstance, "data/season/list", {
		season_year: params.seasonYear,
		season_quarter: params.seasonQuarter,
	});

const getSeasonRaceGuide = async (
	axiosInstance: AxiosInstance,
	params: GetSeasonRaceGuideParams,
) =>
	await getData(axiosInstance, "data/season/race_guide", {
		from: params.from,
		include_end_after_from: params.includeEndAfterFrom,
	});

export { getSeasonList, getSeasonRaceGuide };

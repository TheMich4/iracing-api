import { GetSeasonListParams, GetSeasonRaceGuideParams } from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getSeasonList = async (
	fetchCookie: FetchCookie,
	params: GetSeasonListParams,
) =>
	await getData(fetchCookie, "data/season/list", {
		season_year: params.seasonYear,
		season_quarter: params.seasonQuarter,
	});

export const getSeasonRaceGuide = async (
	fetchCookie: FetchCookie,
	params: GetSeasonRaceGuideParams,
) =>
	await getData(fetchCookie, "data/season/race_guide", {
		from: params.from,
		include_end_after_from: params.includeEndAfterFrom,
	});

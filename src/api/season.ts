import { getData } from "../helpers";

const getSeasonList = async (seasonYear: number, seasonQuarter: number) =>
	await getData("data/season/list", {
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

const getSeasonRaceGuide = async (from: string, includeEndAfterFrom: boolean) =>
	await getData("data/season/race_guide", {
		from,
		include_end_after_from: includeEndAfterFrom,
	});

export { getSeasonList, getSeasonRaceGuide };

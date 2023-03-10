import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getSeasonList = async (
	axiosInstance: AxiosInstance,
	seasonYear: number,
	seasonQuarter: number,
) =>
	await getData(axiosInstance, "data/season/list", {
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

const getSeasonRaceGuide = async (
	axiosInstance: AxiosInstance,
	from: string,
	includeEndAfterFrom: boolean,
) =>
	await getData(axiosInstance, "data/season/race_guide", {
		from,
		include_end_after_from: includeEndAfterFrom,
	});

export { getSeasonList, getSeasonRaceGuide };

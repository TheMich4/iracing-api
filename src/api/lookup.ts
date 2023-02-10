import { getData } from "../helpers";

const getClubHistory = async (seasonYear: number, seasonQuarter: number) =>
	await getData("data/lookup/club_history", {
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

const getCountries = async () => await getData("data/lookup/countries");

const getDrivers = async (searchTerm: string, leagueId?: number) =>
	await getData("data/lookup/drivers", {
		search_term: searchTerm,
		league_id: leagueId,
	});

const getLicenses = async () => await getData("data/lookup/licenses");

export { getClubHistory, getCountries, getDrivers, getLicenses };

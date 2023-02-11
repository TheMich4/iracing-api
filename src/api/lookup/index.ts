import { Club, Country, Driver, License } from "./types";

import { getData } from "../../helpers";

const getClubHistory = async (seasonYear: number, seasonQuarter: number) =>
	await getData<Array<Club>>("data/lookup/club_history", {
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

const getCountries = async () =>
	await getData<Array<Country>>("data/lookup/countries");

const getDrivers = async (searchTerm: string, leagueId?: number) =>
	await getData<Array<Driver>>("data/lookup/drivers", {
		search_term: searchTerm,
		league_id: leagueId,
	});

const getLicenses = async () =>
	await getData<Array<License>>("data/lookup/licenses");

export { getClubHistory, getCountries, getDrivers, getLicenses };

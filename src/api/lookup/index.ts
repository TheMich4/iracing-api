import { Club, Country, Driver, License } from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getClubHistory = async (
	axiosInstance: AxiosInstance,
	seasonYear: number,
	seasonQuarter: number,
) =>
	await getData<Array<Club>>(axiosInstance, "data/lookup/club_history", {
		season_year: seasonYear,
		season_quarter: seasonQuarter,
	});

const getCountries = async (axiosInstance: AxiosInstance) =>
	await getData<Array<Country>>(axiosInstance, "data/lookup/countries");

const getDrivers = async (
	axiosInstance: AxiosInstance,
	searchTerm: string,
	leagueId?: number,
) =>
	await getData<Array<Driver>>(axiosInstance, "data/lookup/drivers", {
		search_term: searchTerm,
		league_id: leagueId,
	});

const getLicenses = async (axiosInstance: AxiosInstance) =>
	await getData<Array<License>>(axiosInstance, "data/lookup/licenses");

export { getClubHistory, getCountries, getDrivers, getLicenses };

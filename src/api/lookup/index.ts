import {
	Club,
	Country,
	Driver,
	GetClubHistoryParams,
	GetDriversParams,
	License,
} from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getClubHistory = async (
	axiosInstance: AxiosInstance,
	params: GetClubHistoryParams,
) =>
	await getData<Array<Club>>(axiosInstance, "data/lookup/club_history", {
		season_year: params.seasonYear,
		season_quarter: params.seasonQuarter,
	});

const getCountries = async (axiosInstance: AxiosInstance) =>
	await getData<Array<Country>>(axiosInstance, "data/lookup/countries");

const getDrivers = async (
	axiosInstance: AxiosInstance,
	params: GetDriversParams,
) =>
	await getData<Array<Driver>>(axiosInstance, "data/lookup/drivers", {
		search_term: params.searchTerm,
		league_id: params.leagueId,
	});

const getLicenses = async (axiosInstance: AxiosInstance) =>
	await getData<Array<License>>(axiosInstance, "data/lookup/licenses");

export { getClubHistory, getCountries, getDrivers, getLicenses };

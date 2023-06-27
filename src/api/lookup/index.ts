import {
	GetClubHistoryParams,
	GetClubHistoryResponse,
	GetCountriesResponse,
	GetDriversParams,
	GetDriversResponse,
	GetLicensesResponse,
} from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getClubHistory = async (
	fetchCookie: FetchCookie,
	params: GetClubHistoryParams,
) =>
	await getData<GetClubHistoryResponse>(
		fetchCookie,
		"data/lookup/club_history",
		{
			season_year: params.seasonYear,
			season_quarter: params.seasonQuarter,
		},
	);

export const getCountries = async (fetchCookie: FetchCookie) =>
	await getData<GetCountriesResponse>(fetchCookie, "data/lookup/countries");

export const getDrivers = async (
	fetchCookie: FetchCookie,
	params: GetDriversParams,
) =>
	await getData<GetDriversResponse>(fetchCookie, "data/lookup/drivers", {
		search_term: params.searchTerm,
		league_id: params.leagueId,
	});

export const getLicenses = async (fetchCookie: FetchCookie) =>
	await getData<GetLicensesResponse>(fetchCookie, "data/lookup/licenses");

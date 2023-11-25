import { Country, License } from "../types/lookup.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getClubHistory = async (fetchCookie: FetchCookie, params: any) =>
  await getData(fetchCookie, "data/lookup/club_history", {
    season_year: params.seasonYear,
    season_quarter: params.seasonQuarter,
  });

export const getCountries = async (fetchCookie: FetchCookie) =>
  await getData<Country[]>(fetchCookie, "data/lookup/countries");

export const getDrivers = async (fetchCookie: FetchCookie, params: any) =>
  await getData(fetchCookie, "data/lookup/drivers", {
    search_term: params.searchTerm,
    league_id: params.leagueId,
  });

export const getLicenses = async (fetchCookie: FetchCookie) =>
  await getData<License[]>(fetchCookie, "data/lookup/licenses");

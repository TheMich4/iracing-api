import * as z from "zod";

import { Country, License } from "../types/lookup.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetClubHistoryParamsSchema = z.object({
  seasonYear: z.number(),
  seasonQuarter: z.number(),
});
export type GetClubHistoryParams = z.infer<typeof GetClubHistoryParamsSchema>;

export const getClubHistory = async (
  fetchCookie: FetchCookie,
  params: GetClubHistoryParams
) =>
  await getData(fetchCookie, "data/lookup/club_history", {
    season_year: params.seasonYear,
    season_quarter: params.seasonQuarter,
  });

export const getCountries = async (fetchCookie: FetchCookie) =>
  await getData<Country[]>(fetchCookie, "data/lookup/countries");

export const GetDriversParamsSchema = z.object({
  searchTerm: z.string(),
  leagueId: z.number().optional(),
});
export type GetDriversParams = z.infer<typeof GetDriversParamsSchema>;

export const getDrivers = async (
  fetchCookie: FetchCookie,
  params: GetDriversParams
) =>
  await getData(fetchCookie, "data/lookup/drivers", {
    search_term: params.searchTerm,
    league_id: params.leagueId,
  });

export const getLicenses = async (fetchCookie: FetchCookie) =>
  await getData<License[]>(fetchCookie, "data/lookup/licenses");

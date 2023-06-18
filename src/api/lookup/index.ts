import {
  GetClubHistoryParams,
  GetClubHistoryResponse,
  GetCountriesResponse,
  GetDriversParams,
  GetDriversResponse,
  GetLicensesResponse,
} from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getClubHistory = async (
  axiosInstance: AxiosInstance,
  params: GetClubHistoryParams,
) =>
  await getData<GetClubHistoryResponse>(
    axiosInstance,
    "data/lookup/club_history",
    {
      season_year: params.seasonYear,
      season_quarter: params.seasonQuarter,
    },
  );

export const getCountries = async (axiosInstance: AxiosInstance) =>
  await getData<GetCountriesResponse>(axiosInstance, "data/lookup/countries");

export const getDrivers = async (
  axiosInstance: AxiosInstance,
  params: GetDriversParams,
) =>
  await getData<GetDriversResponse>(axiosInstance, "data/lookup/drivers", {
    search_term: params.searchTerm,
    league_id: params.leagueId,
  });

export const getLicenses = async (axiosInstance: AxiosInstance) =>
  await getData<GetLicensesResponse>(axiosInstance, "data/lookup/licenses");

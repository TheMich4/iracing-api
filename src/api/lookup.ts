import { API } from "./api";
import { getData } from "../helpers";
import {
  Country,
  GetClubHistoryParams,
  GetDriversParams,
  License,
} from "../types";

export class LookupAPI extends API {
  /**
   *
   * @param {GetClubHistoryParams} params
   * @param {number} params.seasonYear - Season year.
   * @param {number} params.seasonQuarter - Season quarter.
   *
   * @returns
   */
  getClubHistory = async (params: GetClubHistoryParams) =>
    await getData(this.fetchCookie, "data/lookup/club_history", {
      season_year: params.seasonYear,
      season_quarter: params.seasonQuarter,
    });
  /**
   *
   * @returns
   */
  getCountries = async () =>
    await getData<Country[]>(this.fetchCookie, "data/lookup/countries");
  /**
   *
   * @param {GetDriversParams} params
   * @param {string} params.searchTerm - A customerId or partial name for which to search.
   * @param {number} [params.leagueId] - Narrow the search to the roster of the given league
   *
   * @returns
   */
  getDrivers = async (params: GetDriversParams) =>
    await getData(this.fetchCookie, "data/lookup/drivers", {
      search_term: params.searchTerm,
      league_id: params.leagueId,
    });
  /**
   *
   * @returns
   */
  getLicenses = async () =>
    await getData<License[]>(this.fetchCookie, "data/lookup/licenses");
}

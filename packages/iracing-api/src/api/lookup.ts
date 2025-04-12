import { API } from './api'
import {
    Country,
    GetClubHistoryParams,
    GetDriversParams,
    License,
} from '../types/lookup'

/**
 * Provides methods for interacting with lookup endpoints (e.g., countries, drivers, licenses).
 */
export class LookupAPI extends API {
    /**
     * Get club history for a specific season.
     *
     * Note: Returns an earlier history if the requested quarter does not have a club history.
     *
     * @param {GetClubHistoryParams} params - Parameters for the request.
     * @param {number} params.seasonYear - The year of the season.
     * @param {number} params.seasonQuarter - The quarter of the season (1-4).
     *
     * @returns A promise resolving to the club history data, or undefined on error.
     */
    getClubHistory = async (params: GetClubHistoryParams) =>
        await this._getData('data/lookup/club_history', {
            season_year: params.seasonYear,
            season_quarter: params.seasonQuarter,
        })
    /**
     * Get a list of all countries recognized by iRacing.
     *
     * @returns A promise resolving to an array of country objects, or undefined on error.
     */
    getCountries = async () =>
        await this._getData<Country[]>('data/lookup/countries')
    /**
     * Search for drivers by customer ID or partial name.
     *
     * @param {GetDriversParams} params - Parameters for the search.
     * @param {string} params.searchTerm - A customer ID or partial name to search for.
     * @param {number} [params.leagueId] - Optional league ID to narrow the search to the league's roster.
     *
     * @returns A promise resolving to the driver search results, or undefined on error.
     */
    getDrivers = async (params: GetDriversParams) =>
        await this._getData('data/lookup/drivers', {
            search_term: params.searchTerm,
            league_id: params.leagueId,
        })
    /**
     * Get a list of all iRacing licenses.
     *
     * @returns A promise resolving to an array of license objects, or undefined on error.
     */
    getLicenses = async () =>
        await this._getData<License[]>('data/lookup/licenses')
}

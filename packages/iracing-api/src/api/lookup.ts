import { API } from './api'
import {
    Country,
    GetClubHistoryParams,
    GetClubHistoryResponse,
    GetDriversParams,
    License,
} from '../types'

export class LookupAPI extends API {
    /**
     *
     * @param {GetClubHistoryParams} params
     * @param {number} params.seasonYear - Season year.
     * @param {number} params.seasonQuarter - Season quarter.
     *
     * @returns {Promise<GetClubHistoryResponse | undefined>}
     */
    getClubHistory = async (
        params: GetClubHistoryParams
    ): Promise<GetClubHistoryResponse | undefined> =>
        await this._getData<GetClubHistoryResponse>(
            'data/lookup/club_history',
            {
                season_year: params.seasonYear,
                season_quarter: params.seasonQuarter,
            }
        )
    /**
     *
     * @returns
     */
    getCountries = async () =>
        await this._getData<Country[]>('data/lookup/countries')
    /**
     *
     * @param {GetDriversParams} params
     * @param {string} params.searchTerm - A customerId or partial name for which to search.
     * @param {number} [params.leagueId] - Narrow the search to the roster of the given league
     *
     * @returns
     */
    getDrivers = async (params: GetDriversParams) =>
        await this._getData('data/lookup/drivers', {
            search_term: params.searchTerm,
            league_id: params.leagueId,
        })
    /**
     *
     * @returns
     */
    getLicenses = async () =>
        await this._getData<License[]>('data/lookup/licenses')
}

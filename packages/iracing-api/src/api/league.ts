import { API } from './api'
import type {
    CustLeagueSessions,
    GetCustLeagueSessionsParams,
    GetLeagueDataParams,
    GetLeagueDirectoryParams,
    GetLeagueMembershipParams,
    GetLeaguePointSystemParams,
    GetLeagueRosterParams,
    GetLeagueSeasonSessionsParams,
    GetLeagueSeasonStandingsParams,
    GetLeagueSeasonsParams,
    LeagueDirectory,
} from '../types'

/**
 * Provides methods for interacting with league-related endpoints.
 */
export class LeagueAPI extends API {
    /**
     * Get a list of customer league sessions.
     *
     * @param {GetCustLeagueSessionsParams} [params] - Optional parameters to filter the sessions.
     * @param {boolean} [params.mine] - If true, return only sessions created by the authenticated user.
     * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
     * @returns A promise resolving to the customer league sessions data, or undefined on error.
     */
    getCustLeagueSessions = async (params?: GetCustLeagueSessionsParams) =>
        await this._getData<CustLeagueSessions>(
            'data/league/cust_league_sessions',
            {
                mine: params?.mine,
                package_id: params?.packageId,
            }
        )

    /**
     * Search the league directory.
     *
     * @param {GetLeagueDirectoryParams} [params] - Optional parameters to filter and sort the league directory.
     * @param {string} [params.search] - Search term for league name, description, owner, and league ID.
     * @param {string} [params.tag] - One or more tags, comma-separated.
     * @param {boolean} [params.restrictToMember=false] - Include only leagues the customer is a member of.
     * @param {boolean} [params.restrictToRecruiting=false] - Include only leagues which are recruiting.
     * @param {boolean} [params.restrictToFriends=false] - Include only leagues owned by a friend.
     * @param {boolean} [params.restrictToWatched=false] - Include only leagues owned by a watched member.
     * @param {number} [params.minimumRosterCount] - Minimum number of members for included leagues.
     * @param {number} [params.maximumRosterCount] - Maximum number of members for included leagues.
     * @param {number} [params.lowerbound=1] - First row of results to return.
     * @param {number} [params.upperbound] - Last row of results to return (defaults to lowerbound + 39).
     * @param {string} [params.sort='relevance'] - Sort criteria: 'relevance', 'leaguename', 'displayname' (owner's name), 'rostercount'.
     * @param {string} [params.order='asc'] - Sort order: 'asc' or 'desc'.
     *
     * @returns A promise resolving to the league directory search results, or undefined on error.
     */
    getLeagueDirectory = async (params?: GetLeagueDirectoryParams) =>
        await this._getData<LeagueDirectory>('data/league/directory', {
            search: params?.search,
            tag: params?.tag,
            restrict_to_member: params?.restrictToMember,
            restrict_to_recruiting: params?.restrictToRecruiting,
            restrict_to_friends: params?.restrictToFriends,
            restrict_to_watched: params?.restrictToWatched,
            minimum_roster_count: params?.minimumRosterCount,
            maximum_roster_count: params?.maximumRosterCount,
            lowerbound: params?.lowerbound,
            upperbound: params?.upperbound,
            sort: params?.sort,
            order: params?.order,
        })

    /**
     * Get detailed information about a specific league.
     *
     * @param {GetLeagueDataParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league to retrieve.
     * @param {boolean} [params.includeLicenses=false] - Include license information for members (can slow down response).
     *
     * @returns A promise resolving to the league data, or undefined on error.
     */
    getLeagueData = async (params: GetLeagueDataParams) =>
        await this._getData('data/league/get', {
            league_id: params.leagueId,
            include_licenses: params.includeLicenses,
        })

    /**
     * Get the points systems available for a league, optionally filtered by season.
     *
     * @param {GetLeaguePointSystemParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league.
     * @param {number} [params.seasonId] - If provided and the season uses custom points, include the custom option.
     *
     * @returns A promise resolving to the list of points systems, or undefined on error.
     */
    getLeaguePointSystem = async (params: GetLeaguePointSystemParams) =>
        await this._getData('data/league/get_points_systems', {
            league_id: params.leagueId,
            season_id: params.seasonId,
        })

    /**
     * Get league membership information for a customer.
     *
     * @param {GetLeagueMembershipParams} [params] - Optional parameters to specify the customer.
     * @param {number} [params.customerId] - Customer ID to fetch membership for. Defaults to the authenticated user.
     *                                     Note: Restrictions apply if fetching for another user (see iRacing docs).
     * @param {boolean} [params.includeLeague=false] - Include detailed league information in the response.
     *
     * @returns A promise resolving to the league membership data, or undefined on error.
     */
    getLeagueMembership = async (params?: GetLeagueMembershipParams) =>
        await this._getData('data/league/membership', {
            cust_id: params?.customerId,
            include_league: params?.includeLeague,
        })
    /**
     * Get the seasons for a specific league.
     *
     * @param {GetLeagueSeasonsParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league.
     * @param {boolean} [params.retired=false] - If true, include inactive (retired) seasons.
     *
     * @returns A promise resolving to the list of league seasons, or undefined on error.
     */
    getLeagueSeasons = async (params: GetLeagueSeasonsParams) =>
        await this._getData('data/league/seasons', {
            league_id: params.leagueId,
            retired: params.retired,
        })
    /**
     * Get the season standings for a specific league season.
     *
     * @param {GetLeagueSeasonStandingsParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} [params.carClassId] - Optional car class ID to filter standings.
     * @param {number} [params.carId] - Optional car ID. If `carClassId` is included, filters within the class; otherwise, across classes.
     *
     * @returns A promise resolving to the league season standings, or undefined on error.
     */
    getLeagueSeasonStandings = async (params: GetLeagueSeasonStandingsParams) =>
        await this._getData('data/league/season_standings', {
            car_id: params.carId,
            car_class_id: params.carClassId,
            league_id: params.leagueId,
            season_id: params.seasonId,
        })
    /**
     * Get the sessions for a specific league season.
     *
     * @param {GetLeagueSeasonSessionsParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league.
     * @param {number} params.seasonId - The ID of the season.
     * @param {boolean} [params.resultsOnly=false] - If true, include only sessions for which results are available.
     *
     * @returns A promise resolving to the list of league season sessions, or undefined on error.
     */
    getLeagueSeasonSessions = async (params: GetLeagueSeasonSessionsParams) =>
        await this._getData('data/league/season_sessions', {
            league_id: params.leagueId,
            season_id: params.seasonId,
            results_only: params.resultsOnly,
        })

    /**
     * Get the roster for a specific league.
     *
     * @param {GetLeagueRosterParams} params - Parameters for the request.
     * @param {number} params.leagueId - The ID of the league.
     * @param {boolean} [params.includeLicenses=false] - Include license information for roster members (can slow down response).
     *
     * @returns A promise resolving to the league roster, or undefined on error.
     */
    getLeagueRoster = async (params: GetLeagueRosterParams) =>
        await this._getData('data/league/roster', {
            league_id: params.leagueId,
            include_licenses: params.includeLicenses,
        })
}

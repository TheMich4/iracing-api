import { API } from './api'
import type {
    CustLeagueSessions,
    GetCustLeagueSessionsParams,
    GetLeagueDataParams,
    GetLeagueDirectoryParams,
    GetLeagueMembershipParams,
    GetLeaguePointSystemParams,
    GetLeagueSeasonSessionsParams,
    GetLeagueSeasonStandingsParams,
    GetLeagueSeasonsParams,
    LeagueDirectory,
} from '../types'

export class LeagueAPI extends API {
    // League API
    /**
     *
     * **Get list of league sessions.**
     *
     * @param {GetCustLeagueSessionsParams} [params]
     * @param {boolean} [params.mine] - If true, return only sessions created by this user.
     * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
     *
     * @returns
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
     *
     * @param {GetLeagueDirectoryParams} [params]
     * @param {string} [params.search] - Will search against league name, description, owner, and league ID.
     * @param {string} [params.tag] - One or more tags, comma-separated.
     * @param {boolean} [params.restrictToMember] - If true include only leagues for which customer is a member.
     * @param {boolean} [params.restrictToRecruiting] - If true include only leagues which are recruiting.
     * @param {boolean} [params.restrictToFriends] - If true include only leagues owned by a friend.
     * @param {boolean} [params.restrictToWatched] - If true include only leagues owned by a watched member.
     * @param {number} [params.minimumRosterCount] - If set include leagues with at least this number of members.
     * @param {number} [params.maximumRosterCount] - If set include leagues with no more than this number of members.
     * @param {number} [params.lowerbound] - First row of results to return. Defaults to 1.
     * @param {number} [params.upperbound] - Last row of results to return. Defaults to lowerbound + 39.
     * @param {string} [params.sort] - One of relevance, leaguename, displayname, rostercount. displayname is owners's name. Defaults to relevance.
     * @param {string} [params.order] - One of asc or desc. Defaults to asc.
     *
     * @returns
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
     *
     * @param {GetLeagueDataParams} params
     * @param {number} params.leagueId - League ID.
     * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
     *
     * @returns
     */
    getLeagueData = async (params: GetLeagueDataParams) =>
        await this._getData('data/league/get', {
            league_id: params.leagueId,
            include_licenses: params.includeLicenses,
        })

    /**
     *
     * @param {GetLeagueMembershipParams} [params]
     * @param {number} params.leagueId - League ID.
     * @param {number} [params.seasonId] - If included and the season is using custom points (points_system_id:2) then the custom points option is included in the returned list. Otherwise the custom points option is not returned.
     *
     * @returns
     */
    getLeaguePointSystem = async (params: GetLeaguePointSystemParams) =>
        await this._getData('data/league/get_points_systems', {
            league_id: params.leagueId,
            season_id: params.seasonId,
        })

    /**
     *
     * @param {GetLeagueMembershipParams} [params]
     * @param {number} [params.customerId] - If different from the authenticated member, the following restrictions apply: - Caller cannot be on requested customer's block list or an empty list will result; - Requested customer cannot have their online activity prefrence set to hidden or an empty list will result; - Only leagues for which the requested customer is an admin and the league roster is not private are returned.
     * @param {boolean} [params.includeLeague]
     *
     * @returns
     */
    getLeagueMembership = async (params?: GetLeagueMembershipParams) =>
        await this._getData('data/league/membership', {
            cust_id: params?.customerId,
            include_league: params?.includeLeague,
        })
    /**
     *
     * @param {GetLeagueSeasonsParams} params
     * @param {number} params.leagueId - League ID.
     * @param {number} [params.retired] - If true include seasons which are no longer active.
     *
     * @returns
     */
    getLeagueSeasons = async (params: GetLeagueSeasonsParams) =>
        await this._getData('data/league/seasons', {
            league_id: params.leagueId,
            retired: params.retired,
        })
    /**
     *
     * @param {GetLeagueSeasonStandingsParams} params
     * @param {number} params.leagueId - League ID.
     * @param {number} params.seasonId - Season ID.
     * @param {number} [params.carClassId]
     * @param {number} [params.carId] - If `carClassId` is included then the standings are for the car in that car class, otherwise they are for the car across car classes.
     *
     * @returns
     */
    getLeagueSeasonStandings = async (params: GetLeagueSeasonStandingsParams) =>
        await this._getData('data/league/season_standings', {
            car_id: params.carId,
            car_class_id: params.carClassId,
            league_id: params.leagueId,
            season_id: params.seasonId,
        })
    /**
     *
     * @param {GetLeagueSeasonSessionsParams} params
     * @param {number} params.leagueId - League ID.
     * @param {number} params.seasonId - Season ID.
     * @param {number} [params.resultsOnly] - If true, include only sessions for which results are available.
     *
     * @returns
     */
    getLeagueSeasonSessions = async (params: GetLeagueSeasonSessionsParams) =>
        await this._getData('data/league/season_sessions', {
            league_id: params.leagueId,
            season_id: params.seasonId,
            results_only: params.resultsOnly,
        })
}

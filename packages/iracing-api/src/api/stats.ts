import { API } from './api'
import {
    GetDriverSeasonStandingsParams,
    GetMemberBestsParams,
    GetMemberCareerParams,
    GetMemberDivisionParams,
    GetMemberRecapParams,
    GetMemberRecentRacesParams,
    GetMemberSummaryParams,
    GetMemberYearlyStatsParams,
    GetQualifySeasonResultsParams,
    GetSupersessionSeasonStandingsParams,
    GetTeamSeasonStandingsParams,
    GetTimeTrialSeasonResultsParams,
    GetTimeTrialSeasonStandingsParams,
    GetWorldRecordsParams,
    MemberBests,
    MemberCareer,
    MemberRecap,
    MemberSummary,
    MemberYearlyStats,
    MemberDivision,
    MemberRecentRaces,
    WorldRecords,
} from '../types'

/**
 * Provides methods for interacting with member statistics endpoints.
 */
export class StatsAPI extends API {
    /**
     * Get member's best lap times for specified car at various tracks.
     *
     * @param {GetMemberBestsParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     * @param {number} [params.carId] - Car ID. First call should omit this; use `carsDriven` list in response for subsequent calls.
     *
     * @returns A promise resolving to the member's best lap times data, or undefined on error.
     */
    getMemberBests = async (params?: GetMemberBestsParams) =>
        await this._getData<MemberBests>('data/stats/member_bests', {
            cust_id: params?.customerId,
            car_id: params?.carId,
        })
    /**
     * Get career statistics for a member across different categories.
     *
     * @param {GetMemberCareerParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the member's career stats, or undefined on error.
     */
    getMemberCareer = async (params?: GetMemberCareerParams) =>
        await this._getData<MemberCareer>('data/stats/member_career', {
            cust_id: params?.customerId,
        })
    /**
     * Get the division for the **authenticated** member in a specific season and event type.
     *
     * Note: Divisions are 0-based (0=Division 1, 10=Rookie).
     *
     * @param {GetMemberDivisionParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.eventType - Event type code (4=Time Trial, 5=Race).
     *
     * @returns A promise resolving to the member's division data, or undefined on error.
     */
    getMemberDivision = async (params: GetMemberDivisionParams) =>
        await this._getData<MemberDivision>('data/stats/member_division', {
            season_id: params.seasonId,
            event_type: params.eventType,
        })
    /**
     * Get a list of the member's most recent races.
     *
     * @param {GetMemberRecentRacesParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the list of recent races, or undefined on error.
     */
    getMemberRecentRaces = async (params?: GetMemberRecentRacesParams) =>
        await this._getData<MemberRecentRaces>(
            'data/stats/member_recent_races',
            {
                cust_id: params?.customerId,
            }
        )
    /**
     * Get a recap of a member's statistics for a specific year or season.
     *
     * @param {GetMemberRecapParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     * @param {number} [params.year] - Year for the recap. Defaults to the current calendar year (UTC).
     * @param {number} [params.season] - Season (quarter) within the year. If omitted, recap is for the entire year.
     *
     * @returns A promise resolving to the member recap data, or undefined on error.
     */
    getMemberRecap = async (params?: GetMemberRecapParams) =>
        await this._getData<MemberRecap>('data/stats/member_recap', {
            cust_id: params?.customerId,
            year: params?.year,
            season: params?.season,
        })
    /**
     * Get a summary of a member's participation (official vs. league) for the current year.
     *
     * @param {GetMemberSummaryParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the member summary data, or undefined on error.
     */
    getMemberSummary = async (params?: GetMemberSummaryParams) =>
        await this._getData<MemberSummary>('data/stats/member_summary', {
            cust_id: params?.customerId,
        })
    /**
     * Get yearly statistics for a member.
     *
     * @param {GetMemberYearlyStatsParams} [params] - Optional parameters.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the member's yearly stats, or undefined on error.
     */
    getMemberYearlyStats = async (params?: GetMemberYearlyStatsParams) =>
        await this._getData<MemberYearlyStats>('data/stats/member_yearly', {
            cust_id: params?.customerId,
        })
    /**
     * Get the driver standings for a specific season.
     *
     * @param {GetDriverSeasonStandingsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.carClassId - The ID of the car class.
     * @param {number} [params.clubId=-1] - Filter by club ID. Defaults to all.
     * @param {number} [params.division] - Filter by division (0-based). Defaults to all.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based). Defaults to the latest completed week.
     *
     * @returns A promise resolving to the driver season standings data, or undefined on error.
     */
    getDriverSeasonStandings = async (params: GetDriverSeasonStandingsParams) =>
        await this._getData('data/stats/season_driver_standings', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            club_id: params.clubId,
            division: params.division,
            race_week_num: params.raceWeekNumber,
        })
    /**
     * Get the supersession standings for a specific season.
     *
     * @param {GetSupersessionSeasonStandingsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.carClassId - The ID of the car class.
     * @param {number} [params.clubId=-1] - Filter by club ID. Defaults to all.
     * @param {number} [params.division] - Filter by division (0-based). Defaults to all.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based). Defaults to the latest completed week.
     *
     * @returns A promise resolving to the supersession standings data, or undefined on error.
     */
    getSupersessionSeasonStandings = async (
        params: GetSupersessionSeasonStandingsParams
    ) =>
        await this._getData('data/stats/season_supersession_standings', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            club_id: params.clubId,
            division: params.division,
            race_week_num: params.raceWeekNumber,
        })
    /**
     * Get the team standings for a specific season.
     *
     * @param {GetTeamSeasonStandingsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.carClassId - The ID of the car class.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based). Defaults to the latest completed week.
     *
     * @returns A promise resolving to the team season standings data, or undefined on error.
     */
    getTeamSeasonStandings = async (params: GetTeamSeasonStandingsParams) =>
        await this._getData('data/stats/season_team_standings', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            race_week_num: params.raceWeekNumber,
        })
    /**
     * Get the time trial results for a specific season.
     *
     * @param {GetTimeTrialSeasonResultsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.carClassId - The ID of the car class.
     * @param {number} [params.clubId=-1] - Filter by club ID. Defaults to all.
     * @param {number} [params.division] - Filter by division (0-based). Defaults to all.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based). Defaults to the latest completed week.
     *
     * @returns A promise resolving to the time trial results data, or undefined on error.
     */
    getTimeTrialSeasonResults = async (
        params: GetTimeTrialSeasonResultsParams
    ) =>
        await this._getData('data/stats/season_tt_results', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            race_week_num: params.raceWeekNumber,
            club_id: params.clubId,
            division: params.division,
        })
    /**
     * Get the time trial season standings.
     *
     * @param {GetTimeTrialSeasonStandingsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The season ID to get the standings for.
     * @param {number} params.carClassId - The car class ID to get the standings for.
     * @param {number} [params.clubId=-1] - Filter by club ID. Defaults to all.
     * @param {number} [params.division] - Filter by division (0-based). Defaults to all.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based).
     *
     * @returns A promise resolving to the time trial season standings, or undefined on error.
     */
    getTimeTrialSeasonStandings = async (
        params: GetTimeTrialSeasonStandingsParams
    ) =>
        await this._getData('data/stats/season_tt_standings', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            club_id: params.clubId,
            division: params.division,
            race_week_num: params.raceWeekNumber,
        })
    /**
     * Get the qualify results for a specific season.
     *
     * @param {GetQualifySeasonResultsParams} params - Parameters for the request.
     * @param {number} params.seasonId - The ID of the season.
     * @param {number} params.carClassId - The ID of the car class.
     * @param {number} [params.clubId=-1] - Filter by club ID. Defaults to all.
     * @param {number} [params.division] - Filter by division (0-based). Defaults to all.
     * @param {number} [params.raceWeekNumber] - Filter by race week number (0-based). Defaults to the latest completed week.
     *
     * @returns A promise resolving to the qualify results data, or undefined on error.
     */
    getQualifySeasonStandings = async (params: GetQualifySeasonResultsParams) =>
        await this._getData('data/stats/season_qualify_results', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            race_week_num: params.raceWeekNumber,
            club_id: params.clubId,
            division: params.division,
        })
    /**
     * Get world records for a specific car and track combination.
     *
     * @param {GetWorldRecordsParams} params - Parameters for the request.
     * @param {number} params.carId - The ID of the car.
     * @param {number} params.trackId - The ID of the track.
     * @param {number} [params.seasonYear] - Optional year to limit results.
     * @param {number} [params.seasonQuarter] - Optional quarter (1-4) to limit results (requires `seasonYear`).
     *
     * @returns A promise resolving to the world records data (chunked), or undefined on error.
     */
    getWorldRecords = async (params: GetWorldRecordsParams) =>
        await this._getData<WorldRecords>('data/stats/world_records', {
            car_id: params.carId,
            track_id: params.trackId,
            season_year: params.seasonYear,
            season_quarter: params.seasonQuarter,
        })
}

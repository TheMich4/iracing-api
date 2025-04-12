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

export class StatsAPI extends API {
    // Stats API
    /**
     *
     * @param {GetMemberBestsParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     * @param {number} [params.carId] - First call should exclude `carId`; use `carsDriven` list in return for subsequent calls.
     *
     * @returns
     */
    getMemberBests = async (params?: GetMemberBestsParams) =>
        await this._getData<MemberBests>('data/stats/member_bests', {
            cust_id: params?.customerId,
            car_id: params?.carId,
        })
    /**
     *
     * @param {GetMemberCareerParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns
     */
    getMemberCareer = async (params?: GetMemberCareerParams) =>
        await this._getData<MemberCareer>('data/stats/member_career', {
            cust_id: params?.customerId,
        })
    /**
     *
     * @param {GetMemberDivisionParam} params
     * @param {number} seasonId
     * @param {number} eventType - The event type code for the division type: `4` - Time Trial; `5` - Race
     *
     * @returns
     */
    getMemberDivision = async (params: GetMemberDivisionParams) =>
        await this._getData<MemberDivision>('data/stats/member_division', {
            season_id: params.seasonId,
            event_type: params.eventType,
        })
    /**
     *
     * @param {GetMemberRecentRacesParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns
     */
    getMemberRecentRaces = async (params?: GetMemberRecentRacesParams) =>
        await this._getData<MemberRecentRaces>('stats/member_recent_races', {
            cust_id: params?.customerId,
        })
    /**
     *
     * @param {GetMemberRecapParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     * @param {number} [params.year] - Season year; if not supplied the current calendar year (UTC) is used.
     * @param {number} [params.season] - Season (quarter) within the year; if not supplied the recap will be for the entire year.
     *
     * @returns
     */
    getMemberRecap = async (params?: GetMemberRecapParams) =>
        await this._getData<MemberRecap>('data/stats/member_recap', {
            cust_id: params?.customerId,
            year: params?.year,
            season: params?.season,
        })
    /**
     *
     * @param {GetMemberSummaryParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns
     */
    getMemberSummary = async (params?: GetMemberSummaryParams) =>
        await this._getData<MemberSummary>('data/stats/member_summary', {
            cust_id: params?.customerId,
        })
    /**
     *
     * @param {GetMemberYearlyStatsParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns
     */
    getMemberYearlyStats = async (params?: GetMemberYearlyStatsParams) =>
        await this._getData<MemberYearlyStats>('data/stats/member_yearly', {
            cust_id: params?.customerId,
        })
    /**
     *
     * @param {GetDriverSeasonStandingsParams} params
     * @param {number} params.seasonId
     * @param {number} params.carClassId
     * @param {number} [params.clubId] - Defaults to all (`-1`).
     * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
     * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
     *
     * @returns
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
     *
     * @param {GetSupersessionSeasonStandingsParams} params
     * @param {number} params.seasonId
     * @param {number} params.carClassId
     * @param {number} [params.clubId] - Defaults to all (`-1`).
     * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
     * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
     *
     * @returns
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
     *
     * @param {GetTeamSeasonStandingsParams} params
     * @param {number} params.seasonId
     * @param {number} params.carClassId
     * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
     *
     * @returns
     */
    getTeamSeasonStandings = async (params: GetTeamSeasonStandingsParams) =>
        await this._getData('data/stats/season_team_standings', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            race_week_num: params.raceWeekNumber,
        })
    /**
     *
     * @param {GetTimeTrialSeasonStandingsParams} params
     * @param {number} params.seasonId
     * @param {number} params.carClassId
     * @param {number} [params.clubId] - Defaults to all (`-1`).
     * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
     * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
     *
     * @returns
     */
    getTimeTrialSeasonStandings = async (
        params: GetTimeTrialSeasonStandingsParams
    ) =>
        await this._getData('data/stats/season_tt_results', {
            season_id: params.seasonId,
            car_class_id: params.carClassId,
            race_week_num: params.raceWeekNumber,
            club_id: params.clubId,
            division: params.division,
        })
    /**
     *
     * @param params
     * @returns
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
     *
     * @param {GetWorldRecordsParams} params
     * @param {number} params.carId
     * @param {number} params.trackId
     * @param {number} [params.seasonYear] - Limit best times to a given year.
     * @param {number} [params.seasonQuarter] - Limit best times to a given quarter.
     *
     * @returns
     */
    getWorldRecords = async (params: GetWorldRecordsParams) =>
        await this._getData<WorldRecords>('data/stats/world_records', {
            car_id: params.carId,
            track_id: params.trackId,
            season_year: params.seasonYear,
            season_quarter: params.seasonQuarter,
        })
}

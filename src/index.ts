import * as api from "./api/index.js";

import { FetchCookie } from "./types.js";
import makeFetchCookie from "fetch-cookie";

export * from "./api/index.js";
export * from "./consts.js";
export * from "./helpers.js";
export * from "./types/index.js";

export default class IracingAPI {
  fetchCookie: FetchCookie;

  constructor() {
    this.fetchCookie = makeFetchCookie(fetch);
  }

  // Auth API
  /**
   *
   * @param email - iRacing account email
   * @param password - iRacing account password
   *
   * @returns
   */
  login = async (email: string, password: string) =>
    await api.login(this.fetchCookie, email, password);

  // Car API
  /**
   *
   * **Get car assets.**
   *
   * *Image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getCarAssets = async () => await api.getCarAssets(this.fetchCookie);
  /**
   *
   * **Get list of cars.**
   *
   * @returns
   */
  getCars = async () => await api.getCars(this.fetchCookie);

  // Car Class API
  /**
   *
   * **Get list of car classes.**
   *
   * @returns
   */
  getCarClasses = async () => await api.getCarClasses(this.fetchCookie);

  // Constants API
  /**
   *
   * **Get list of categories.**
   *
   * @returns
   */
  getCategories = async () => await api.getCategories(this.fetchCookie);
  /**
   *
   * **Get list of divisions.**
   *
   * @returns
   */
  getDivisions = async () => await api.getDivisions(this.fetchCookie);
  /**
   *
   * **Get list of event types.**
   *
   * @returns
   */
  getEventTypes = async () => await api.getEventTypes(this.fetchCookie);

  // Hosted API
  /**
   *
   * **Get list of hosted combined sessions.**
   *
   * *Sessions that can be joined as a driver or spectator, and also includes non-league pending sessions for the user.*
   *
   * @param {api.GetHostedCombinedSessionsParams} [params]
   * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
   *
   * @returns
   */
  getHostedCombinedSessions = async (
    params?: api.GetHostedCombinedSessionsParams
  ) => await api.getHostedCombinedSessions(this.fetchCookie, params);
  /**
   *
   * **Get list of hosted sessions.**
   *
   * *Sessions that can be joined as a driver. Without spectator and non-league pending sessions for the user.*
   *
   * @returns
   */
  getHostedSessions = async () => await api.getHostedSessions(this.fetchCookie);

  // League API
  /**
   *
   * **Get list of league sessions.**
   *
   * @param {api.GetCustLeagueSessionsParams} [params]
   * @param {boolean} [params.mine] - If true, return only sessions created by this user.
   * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
   *
   * @returns
   */
  getCustLeagueSessions = async (params?: api.GetCustLeagueSessionsParams) =>
    await api.getCustLeagueSessions(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueDirectoryParams} [params]
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
  getLeagueDirectory = async (params?: api.GetLeagueDirectoryParams) =>
    await api.getLeagueDirectory(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueDataParams} params
   * @param {number} params.leagueId - League ID.
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   *
   * @returns
   */
  getLeagueData = async (params: api.GetLeagueDataParams) =>
    await api.getLeagueData(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueMembershipParams} [params
   * @param {number} params.leagueId - League ID.
   * @param {number} [params.seasonId] - If included and the season is using custom points (points_system_id:2) then the custom points option is included in the returned list. Otherwise the custom points option is not returned.
   *
   * @returns
   */
  getLeaguePointSystem = async (params: api.GetLeaguePointSystemParams) =>
    await api.getLeaguePointSystem(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueMembershipParams} [params]
   * @param {number} [params.customerId] - If different from the authenticated member, the following resrictions apply: - Caller cannot be on requested customer's block list or an empty list will result; - Requested customer cannot have their online activity prefrence set to hidden or an empty list will result; - Only leagues for which the requested customer is an admin and the league roster is not private are returned.
   * @param {boolean} [params.includeLeague]
   *
   * @returns
   */
  getLeagueMembership = async (params?: api.GetLeagueMembershipParams) =>
    await api.getLeagueMembership(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueSeasonsParams} params
   * @param {number} params.leagueId - League ID.
   * @param {number} [params.retired] - If true include seasons which are no longer active.
   *
   * @returns
   */
  getLeagueSeasons = async (params: api.GetLeagueSeasonsParams) =>
    await api.getLeagueSeasons(this.fetchCookie, params);
  /**
   *
   * @param {api.GetLeagueSeasonStandingsParams} params
   * @param {number} params.leagueId - League ID.
   * @param {number} params.seasonId - Season ID.
   * @param {number} [params.carClassId]
   * @param {number} [params.carId] - If `carClassId` is included then the standings are for the car in that car class, otherwise they are for the car across car classes.
   *
   * @returns
   */
  getLeagueSeasonStandings = async (
    params: api.GetLeagueSeasonStandingsParams
  ) => await api.getLeagueSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeagueSeasonSessions = async (params: api.GetLeagueSeasonSessionsParams) =>
    await api.getLeagueSeasonSessions(this.fetchCookie, params);

  // Lookup API
  /**
   *
   * @param params
   * @returns
   */
  getClubHistory = async (params: api.GetClubHistoryParams) =>
    await api.getClubHistory(this.fetchCookie, params);
  getCountries = async () => await api.getCountries(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getDrivers = async (params: api.GetDriversParams) =>
    await api.getDrivers(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLicenses = async () => await api.getLicenses(this.fetchCookie);

  // Member API
  /**
   *
   * @param params
   * @returns
   */
  getMemberAwards = async (params: api.GetMemberAwardsParams) =>
    await api.getMemberAwards(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberChartData = async (params: api.GetMemberChartDataParams) =>
    await api.getMemberChartData(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberData = async (params: api.GetMemberDataParams) =>
    await api.getMemberData(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberInfo = async () => await api.getMemberInfo(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getMemberParticipationCredits = async () =>
    await api.getMemberParticipationCredits(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getMemberProfile = async (params: api.GetMemberProfileParams) =>
    await api.getMemberProfile(this.fetchCookie, params);

  // Results API
  /**
   *
   * @param params
   * @returns
   */
  getResult = async (params: api.GetResultParams) =>
    await api.getResult(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getResultsEventLog = async (params: api.GetResultsEventLogParams) =>
    await api.getResultsEventLog(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getResultsLapChartData = async (params: api.GetResultsLapChartDataParams) =>
    await api.getResultsLapChartData(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getResultsLapData = async (params: api.GetResultsLapDataParams) =>
    await api.getResultsLapData(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  searchHosted = async () => await api.searchHosted(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  searchSeries = async (params: any) =>
    await api.searchSeries(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getSeasonResults = async (params: any) =>
    await api.getSeasonResults(this.fetchCookie, params);

  // Season API
  /**
   *
   * @param params
   * @returns
   */
  getSeasonList = async (params: api.GetSeasonListParams) =>
    await api.getSeasonList(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getSeasonRaceGuide = async (params: api.GetSeasonRaceGuideParams) =>
    await api.getSeasonRaceGuide(this.fetchCookie, params);

  // Series API
  /**
   *
   * @param params
   * @returns
   */
  getSeriesAssets = async () => await api.getSeriesAssets(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getSeriesData = async () => await api.getSeriesData(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getSeriesPastSeasons = async (params: api.GetSeriesPastSeasonsParams) =>
    await api.getSeriesPastSeasons(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getSeriesSeasons = async (params?: api.GetSeriesSeasonsParams) =>
    await api.getSeriesSeasons(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getSeriesStats = async () => await api.getSeriesStats(this.fetchCookie);

  // Stats API
  /**
   *
   * @param params
   * @returns
   */
  getMemberBests = async (params?: api.GetMemberBestsParams) =>
    await api.getMemberBests(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberCareer = async (params?: api.GetMemberCareerParams) =>
    await api.getMemberCareer(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberDivision = async (params: api.GetMemberDivisionParams) =>
    await api.getMemberDivision(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberRecentRaces = async (params?: api.GetMemberRecentRacesParams) =>
    await api.getMemberRecentRaces(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberRecap = async (params?: api.GetMemberRecapParams) =>
    await api.getMemberRecap(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberSummary = async (params?: api.GetMemberSummaryParams) =>
    await api.getMemberSummary(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getMemberYearlyStats = async (params?: api.GetMemberYearlyStatsParams) =>
    await api.getMemberYearlyStats(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getDriverSeasonStandings = async (
    params: api.GetDriverSeasonStandingsParams
  ) => await api.getDriverSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getSupersessionSeasonStandings = async (
    params: api.GetSupersessionSeasonStandingsParams
  ) => await api.getSupersessionSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getTeamSeasonStandings = async (params: api.GetTeamSeasonStandingsParams) =>
    await api.getTeamSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getTimeTrialSeasonStandings = async (
    params: api.GetTimeTrialSeasonStandingsParams
  ) => await api.getTimeTrialSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getQualifySeasonStandings = async (
    params: api.GetQualifySeasonResultsParams
  ) => await api.getQualifySeasonResults(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getWorldRecords = async (params: api.GetWorldRecordsParams) =>
    await api.getWorldRecords(this.fetchCookie, params);

  // Team API
  /**
   *
   * @param params
   * @returns
   */
  getTeamData = async (params: api.GetTeamDataParams) =>
    await api.getTeamData(this.fetchCookie, params);

  // Time Attack API
  /**
   *
   * @param params
   * @returns
   */
  getTimeAttackSeasonResults = async (params: api.GetTimeAttackSeasonParams) =>
    await api.getTimeAttackSeasonResults(this.fetchCookie, params);

  // Track API
  /**
   *
   * @param params
   * @returns
   */
  getTrackAssets = async () => await api.getTrackAssets(this.fetchCookie);
  /**
   *
   * @param params
   * @returns
   */
  getTracks = async () => await api.getTracks(this.fetchCookie);
}

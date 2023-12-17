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
  /*
   *
   * @param email
   * @param password
   *
   * @returns
   */
  login = async (email: string, password: string) =>
    await api.login(this.fetchCookie, email, password);

  // Car API
  /**
   *
   * @returns
   */
  getCarAssets = async () => await api.getCarAssets(this.fetchCookie);
  /**
   *
   * @returns
   */
  getCars = async () => await api.getCars(this.fetchCookie);

  // Car Class API
  /**
   *
   * @returns
   */
  getCarClasses = async () => await api.getCarClasses(this.fetchCookie);

  // Constants API
  /**
   *
   * @returns
   */
  getCategories = async () => await api.getCategories(this.fetchCookie);
  /**
   *
   * @returns
   */
  getDivisions = async () => await api.getDivisions(this.fetchCookie);
  /**
   *
   * @returns
   */
  getEventTypes = async () => await api.getEventTypes(this.fetchCookie);

  // Hosted API
  /**
   *
   * @param params
   * @returns
   */
  getHostedCombinedSessions = async (
    params?: api.GetHostedCombinedSessionsParams
  ) => await api.getHostedCombinedSessions(this.fetchCookie, params);
  /**
   *
   * @returns
   */
  getHostedSessions = async () => await api.getHostedSessions(this.fetchCookie);

  // League API
  /**
   *
   * @param params
   * @returns
   */
  getCustLeagueSessions = async (params?: api.GetCustLeagueSessionsParams) =>
    await api.getCustLeagueSessions(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeagueDirectory = async (params?: api.GetLeagueDirectoryParams) =>
    await api.getLeagueDirectory(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeagueData = async (params: api.GetLeagueDataParams) =>
    await api.getLeagueData(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeaguePointSystem = async (params: api.GetLeaguePointSystemParams) =>
    await api.getLeaguePointSystem(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeagueMembership = async (params?: api.GetLeagueMembershipParams) =>
    await api.getLeagueMembership(this.fetchCookie, params);
  /**
   *
   * @param params
   * @returns
   */
  getLeagueSeasons = async (params: api.GetLeagueSeasonsParams) =>
    await api.getLeagueSeasons(this.fetchCookie, params);
  /**
   *
   * @param params
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

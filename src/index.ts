import * as api from "./api/index.js";

import { FetchCookie } from "./types.js";
import makeFetchCookie from "fetch-cookie";

export * from "./api/index.js";
export * from "./consts.js";
export * from "./helpers.js";
export * from "./types/index.js";

export default class IracingAPI {
  fetchCookie: FetchCookie;
  throttleToRateLimit: boolean;

  /**
   * @param {object} [options]
   * @param {boolean} [options.throttleToRateLimit] - If true, will throttle requests to the rate limit.
   */
  constructor({
    throttleToRateLimit = false,
  }: {
    throttleToRateLimit?: boolean;
  }) {
    this.fetchCookie = makeFetchCookie(fetch);
    this.throttleToRateLimit = throttleToRateLimit;
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
   * @param {number} [params.customerId] - If different from the authenticated member, the following restrictions apply: - Caller cannot be on requested customer's block list or an empty list will result; - Requested customer cannot have their online activity prefrence set to hidden or an empty list will result; - Only leagues for which the requested customer is an admin and the league roster is not private are returned.
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
   * @param {api.GetLeagueSeasonSessionsParams} params
   * @param {number} params.leagueId - League ID.
   * @param {number} params.seasonId - Season ID.
   * @param {number} [params.resultsOnly] - If true include only sessions for which results are available.
   *
   * @returns
   */
  getLeagueSeasonSessions = async (params: api.GetLeagueSeasonSessionsParams) =>
    await api.getLeagueSeasonSessions(this.fetchCookie, params);

  // Lookup API
  /**
   *
   * @param {api.GetClubHistoryParams} params
   * @param {number} params.seasonYear - Season year.
   * @param {number} params.seasonQuarter - Season quarter.
   *
   * @returns
   */
  getClubHistory = async (params: api.GetClubHistoryParams) =>
    await api.getClubHistory(this.fetchCookie, params);
  /**
   *
   * @returns
   */
  getCountries = async () => await api.getCountries(this.fetchCookie);
  /**
   *
   * @param {api.GetDriversParams} params
   * @param {string} params.searchTerm - A customerId or partial name for which to search.
   * @param {number} [params.leagueId] - Narrow the search to the roster of the given league
   *
   * @returns
   */
  getDrivers = async (params: api.GetDriversParams) =>
    await api.getDrivers(this.fetchCookie, params);
  /**
   *
   * @returns
   */
  getLicenses = async () => await api.getLicenses(this.fetchCookie);

  // Member API
  /**
   *
   * @param {api.GetMemberAwardsParams} [params]
   * @param {number} params.customerId - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberAwards = async (params?: api.GetMemberAwardsParams) =>
    await api.getMemberAwards(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberChartDataParams} params
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   * @param {number} params.categoryId - 1 - Oval; 2 - Road; 3 - Dirt oval; 4 - Dirt road.
   * @param {string} params.chartType - 1 - iRating; 2 - TT Rating; 3 - License/SR.
   *
   * @returns
   */
  getMemberChartData = async (params: api.GetMemberChartDataParams) =>
    await api.getMemberChartData(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberDataParams} params
   * @param {number[]} params.customerIds - Array of customer IDs.
   * @param {boolean} [params.includeLicenses]
   *
   * @returns
   */
  getMemberData = async (params: api.GetMemberDataParams) =>
    await api.getMemberData(this.fetchCookie, params);
  /**
   *
   * @returns
   */
  getMemberInfo = async () => await api.getMemberInfo(this.fetchCookie);
  /**
   *
   * @returns
   */
  getMemberParticipationCredits = async () =>
    await api.getMemberParticipationCredits(this.fetchCookie);
  /**
   *
   * @param {api.GetMemberProfileParams} params
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberProfile = async (params?: api.GetMemberProfileParams) =>
    await api.getMemberProfile(this.fetchCookie, params);

  // Results API
  /**
   *
   * @param {api.GetResultParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.includeLicenses]
   *
   * @returns
   */
  getResult = async (params: api.GetResultParams) =>
    await api.getResult(this.fetchCookie, params);
  /**
   *
   * @param {api.GetResultsEventLogParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   *
   * @returns
   */
  getResultsEventLog = async (params: api.GetResultsEventLogParams) =>
    await api.getResultsEventLog(this.fetchCookie, params);
  /**
   *
   * @param {api.GetResultsLapChartDataParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   *
   * @returns
   */
  getResultsLapChartData = async (params: api.GetResultsLapChartDataParams) =>
    await api.getResultsLapChartData(this.fetchCookie, params);
  /**
   *
   * @param {api.GetResultsLapDataParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   * @param {number} [params.customerId] - Required if the subsession was a single-driver event. Optional for team events. If omitted for a team event then the laps driven by all the team's drivers will be included.
   * @param {number} [params.teamId] - Required if the subsession was a team event.
   *
   * @returns
   */
  getResultsLapData = async (params: api.GetResultsLapDataParams) =>
    await api.getResultsLapData(this.fetchCookie, params);
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  searchHosted = async (params: Record<string, any>) =>
    await api.searchHosted(this.fetchCookie, params);
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  searchSeries = async (params: any) =>
    await api.searchSeries(this.fetchCookie, params);
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  getSeasonResults = async (params: any) =>
    await api.getSeasonResults(this.fetchCookie, params);

  // Season API
  /**
   *
   * @param {api.GetSeasonListParams} params
   * @param {number} params.seasonYear
   * @param {number} params.seasonQuarter
   *
   * @returns
   */
  getSeasonList = async (params: api.GetSeasonListParams) =>
    await api.getSeasonList(this.fetchCookie, params);
  /**
   *
   * @param {api.GetSeasonRaceGuideParams} params
   * @param {string} from - `ISO-8601` offset format. Defaults to the current time. Include sessions with start times up to 3 hours after this time. Times in the past will be rewritten to the current time.
   * @param {boolean} [includeEndAfterFrom] - Include sessions which start before 'from' but end after.
   *
   * @returns
   */
  getSeasonRaceGuide = async (params: api.GetSeasonRaceGuideParams) =>
    await api.getSeasonRaceGuide(this.fetchCookie, params);
  /**
   *
   * @param {api.GetSpectatorSubsessionIdsParams} [params]
   * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all.
   *
   * @returns
   */
  getSpectatorSubsessionIds = async (
    params?: api.GetSpectatorSubsessionIdsParams
  ) => await api.getSpectatorSubsessionIds(this.fetchCookie, params);

  // Series API
  /**
   * *image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getSeriesAssets = async () => await api.getSeriesAssets(this.fetchCookie);
  /**
   *
   * @returns
   */
  getSeriesData = async () => await api.getSeriesData(this.fetchCookie);
  /**
   *
   * *Get all seasons for a series. Filter list by official:true for seasons with standings.*
   *
   * @param {api.GetSeriesPastSeasonsParams} params
   * @param {number} params.seriesId
   *
   * @returns
   */
  getSeriesPastSeasons = async (params: api.GetSeriesPastSeasonsParams) =>
    await api.getSeriesPastSeasons(this.fetchCookie, params);
  /**
   *
   * @param {api.GetSeriesSeasonsParams} [params]
   * @param {boolean} [params.includeSeries]
   *
   * @returns
   */
  getSeriesSeasons = async (params?: api.GetSeriesSeasonsParams) =>
    await api.getSeriesSeasons(this.fetchCookie, params);
  /**
   *
   * *To get series and seasons for which standings should be available, filter the list by official: true.*
   *
   * @returns
   */
  getSeriesStats = async () => await api.getSeriesStats(this.fetchCookie);

  // Stats API
  /**
   *
   * @param {api.GetMemberBestsParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   * @param {number} [params.carId] - First call should exclude `carId`; use `carsDriven` list in return for subsequent calls.
   *
   * @returns
   */
  getMemberBests = async (params?: api.GetMemberBestsParams) =>
    await api.getMemberBests(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberCareerParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberCareer = async (params?: api.GetMemberCareerParams) =>
    await api.getMemberCareer(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberDivisionParam} params
   * @param {number} seasonId
   * @param {number} eventType - The event type code for the division type: `4` - Time Trial; `5` - Race
   *
   * @returns
   */
  getMemberDivision = async (params: api.GetMemberDivisionParams) =>
    await api.getMemberDivision(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberRecentRacesParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberRecentRaces = async (params?: api.GetMemberRecentRacesParams) =>
    await api.getMemberRecentRaces(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberRecapParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   * @param {number} [params.year] - Season year; if not supplied the current calendar year (UTC) is used.
   * @param {number} [params.season] - Season (quarter) within the year; if not supplied the recap will be for the entire year.
   *
   * @returns
   */
  getMemberRecap = async (params?: api.GetMemberRecapParams) =>
    await api.getMemberRecap(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberSummaryParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberSummary = async (params?: api.GetMemberSummaryParams) =>
    await api.getMemberSummary(this.fetchCookie, params);
  /**
   *
   * @param {api.GetMemberYearlyStatsParams} [params]
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberYearlyStats = async (params?: api.GetMemberYearlyStatsParams) =>
    await api.getMemberYearlyStats(this.fetchCookie, params);
  /**
   *
   * @param {api.GetDriverSeasonStandingsParams} params
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (`-1`).
   * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
   * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
   *
   * @returns
   */
  getDriverSeasonStandings = async (
    params: api.GetDriverSeasonStandingsParams
  ) => await api.getDriverSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param {api.GetSupersessionSeasonStandingsParams} params
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (`-1`).
   * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
   * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
   *
   * @returns
   */
  getSupersessionSeasonStandings = async (
    params: api.GetSupersessionSeasonStandingsParams
  ) => await api.getSupersessionSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param {api.GetTeamSeasonStandingsParams} params
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
   *
   * @returns
   */
  getTeamSeasonStandings = async (params: api.GetTeamSeasonStandingsParams) =>
    await api.getTeamSeasonStandings(this.fetchCookie, params);
  /**
   *
   * @param {api.GetTimeTrialSeasonStandingsParams} params
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (`-1`).
   * @param {number} [params.division] - Divisions are 0-based: `0` is Division 1, `10` is Rookie. Defaults to all.
   * @param {number} [params.raceWeekNumber] - The first race week of a season is `0`.
   *
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
   * @param {api.GetWorldRecordsParams} params
   * @param {number} params.carId
   * @param {number} params.trackId
   * @param {number} [params.seasonYear] - Limit best times to a given year.
   * @param {number} [params.seasonQuarter] - Limit best times to a given quarter.
   *
   * @returns
   */
  getWorldRecords = async (params: api.GetWorldRecordsParams) =>
    await api.getWorldRecords(this.fetchCookie, params);

  // Team API
  /**
   *
   * @param {api.GetTeamDataParams} params
   * @param {number} params.teamId
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   *
   * @returns
   */
  getTeamData = async (params: api.GetTeamDataParams) =>
    await api.getTeamData(this.fetchCookie, params);

  // Time Attack API
  /**
   *
   * @param {api.GetTimeAttackSeasonParams} params
   * @param {number} seasonId
   *
   * @returns
   */
  getTimeAttackSeasonResults = async (params: api.GetTimeAttackSeasonParams) =>
    await api.getTimeAttackSeasonResults(this.fetchCookie, params);

  // Track API
  /**
   *
   * *Image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getTrackAssets = async () => await api.getTrackAssets(this.fetchCookie);
  /**
   *
   * @returns
   */
  getTracks = async () => await api.getTracks(this.fetchCookie);
}

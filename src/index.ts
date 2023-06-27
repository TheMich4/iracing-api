import * as api from "./api/index.js";

import {
	GetClubHistoryParams,
	GetCustLeagueSessionsParams,
	GetDriverSeasonStandings,
	GetDriversParams,
	GetLeagueDataParams,
	GetLeagueDirectoryParams,
	GetLeagueMembershipParams,
	GetLeaguePointSystemsParams,
	GetLeagueSeasonSessionsParams,
	GetLeagueSeasonStandingsParams,
	GetLeagueSeasonsParams,
	GetMemberAwardsParams,
	GetMemberBestsParams,
	GetMemberCareerParams,
	GetMemberChartDataParams,
	GetMemberDataParams,
	GetMemberDivisionParams,
	GetMemberProfileParams,
	GetMemberRecapParams,
	GetMemberRecentRacesParams,
	GetMemberSummaryParams,
	GetMemberYearlyParams,
	GetQualifySeasonResultsParams,
	GetSeasonListParams,
	GetSeasonRaceGuideParams,
	GetSeasonSupersessionSeasonStandingsParams,
	GetSeriesPastSeasonsParams,
	GetSeriesSeasonsParams,
	GetTeamDataParams,
	GetTeamSeasonStandingsParams,
	GetTimeAttackSeasonResultsParams,
	GetTimeTrialSeasonStandingsParams,
	GetWorldRecordsParams,
} from "./api/index.js";
import {
	GetResultParams,
	GetResultsEventLogParams,
	GetResultsLapChartDataParams,
	GetResultsLapDataParams,
	GetSeasonResultsParams,
	SearchSeriesParams,
} from "./api/results/types.js";

import { FetchCookie } from "./types.js";
import { GetHostedCombinedSessionsParams } from "./api/hosted/types.js";
import makeFetchCookie from "fetch-cookie";

export * from "./api/index.js";
export * from "./consts.js";
export * from "./helpers.js";

export default class IracingAPI {
	fetchCookie: FetchCookie;

	constructor() {
		this.fetchCookie = makeFetchCookie(fetch);
	}

	// Auth API
	login = async (email: string, password: string) =>
		await api.login(this.fetchCookie, email, password);

	// Car API
	getCarAssets = async () => await api.getCarAssets(this.fetchCookie);
	getCars = async () => await api.getCars(this.fetchCookie);

	// Car Class API
	getCarClasses = async () => await api.getCarClasses(this.fetchCookie);

	// Constants API
	getCategories = async () => await api.getCategories(this.fetchCookie);
	getDivisions = async () => await api.getDivisions(this.fetchCookie);
	getEventTypes = async () => await api.getEventTypes(this.fetchCookie);

	// Hosted API
	getHostedCombinedSessions = async (
		params?: GetHostedCombinedSessionsParams,
	) => await api.getHostedCombinedSessions(this.fetchCookie, params);
	getHostedSessions = async () => await api.getHostedSessions(this.fetchCookie);

	// League API
	getCustLeagueSessions = async (params?: GetCustLeagueSessionsParams) =>
		await api.getCustLeagueSessions(this.fetchCookie, params);
	getLeagueDirectory = async (params?: GetLeagueDirectoryParams) =>
		await api.getLeagueDirectory(this.fetchCookie, params);
	getLeagueData = async (params: GetLeagueDataParams) =>
		await api.getLeagueData(this.fetchCookie, params);
	getLeaguePointSystem = async (params: GetLeaguePointSystemsParams) =>
		await api.getLeaguePointSystem(this.fetchCookie, params);
	getLeagueMembership = async (params?: GetLeagueMembershipParams) =>
		await api.getLeagueMembership(this.fetchCookie, params);
	getLeagueSeasons = async (params: GetLeagueSeasonsParams) =>
		await api.getLeagueSeasons(this.fetchCookie, params);
	getLeagueSeasonStandings = async (params: GetLeagueSeasonStandingsParams) =>
		await api.getLeagueSeasonStandings(this.fetchCookie, params);
	getLeagueSeasonSessions = async (params: GetLeagueSeasonSessionsParams) =>
		await api.getLeagueSeasonSessions(this.fetchCookie, params);

	// Lookup API
	getClubHistory = async (params: GetClubHistoryParams) =>
		await api.getClubHistory(this.fetchCookie, params);
	getCountries = async () => await api.getCountries(this.fetchCookie);
	getDrivers = async (params: GetDriversParams) =>
		await api.getDrivers(this.fetchCookie, params);
	getLicenses = async () => await api.getLicenses(this.fetchCookie);

	// Member API
	getMemberAwards = async (params: GetMemberAwardsParams) =>
		await api.getMemberAwards(this.fetchCookie, params);
	getMemberChartData = async (params: GetMemberChartDataParams) =>
		await api.getMemberChartData(this.fetchCookie, params);
	getMemberData = async (params: GetMemberDataParams) =>
		await api.getMemberData(this.fetchCookie, params);
	getMemberInfo = async () => await api.getMemberInfo(this.fetchCookie);
	getMemberParticipationCredits = async () =>
		await api.getMemberParticipationCredits(this.fetchCookie);
	getMemberProfile = async (params: GetMemberProfileParams) =>
		await api.getMemberProfile(this.fetchCookie, params);

	// Results API
	getResult = async (params: GetResultParams) =>
		await api.getResult(this.fetchCookie, params);
	getResultsEventLog = async (params: GetResultsEventLogParams) =>
		await api.getResultsEventLog(this.fetchCookie, params);
	getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
		await api.getResultsLapChartData(this.fetchCookie, params);
	getResultsLapData = async (params: GetResultsLapDataParams) =>
		await api.getResultsLapData(this.fetchCookie, params);
	searchHosted = async () => await api.searchHosted(this.fetchCookie);
	searchSeries = async (params: SearchSeriesParams) =>
		await api.searchSeries(this.fetchCookie, params);
	getSeasonResults = async (params: GetSeasonResultsParams) =>
		await api.getSeasonResults(this.fetchCookie, params);

	// Season API
	getSeasonList = async (params: GetSeasonListParams) =>
		await api.getSeasonList(this.fetchCookie, params);
	getSeasonRaceGuide = async (params: GetSeasonRaceGuideParams) =>
		await api.getSeasonRaceGuide(this.fetchCookie, params);

	// Series API
	getSeriesAssets = async () => await api.getSeriesAssets(this.fetchCookie);
	getSeriesData = async () => await api.getSeriesData(this.fetchCookie);
	getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
		await api.getSeriesPastSeasons(this.fetchCookie, params);
	getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
		await api.getSeriesSeasons(this.fetchCookie, params);
	getSeriesStats = async () => await api.getSeriesStats(this.fetchCookie);

	// Stats API
	getMemberBests = async (params?: GetMemberBestsParams) =>
		await api.getMemberBests(this.fetchCookie, params);
	getMemberCareer = async (params?: GetMemberCareerParams) =>
		await api.getMemberCareer(this.fetchCookie, params);
	getMemberDivision = async (params: GetMemberDivisionParams) =>
		await api.getMemberDivision(this.fetchCookie, params);
	getMemberRecentRaces = async (params?: GetMemberRecentRacesParams) =>
		await api.getMemberRecentRaces(this.fetchCookie, params);
	getMemberRecap = async (params?: GetMemberRecapParams) =>
		await api.getMemberRecap(this.fetchCookie, params);
	getMemberSummary = async (params?: GetMemberSummaryParams) =>
		await api.getMemberSummary(this.fetchCookie, params);
	getMemberYearlyStats = async (params?: GetMemberYearlyParams) =>
		await api.getMemberYearlyStats(this.fetchCookie, params);
	getDriverSeasonStandings = async (params: GetDriverSeasonStandings) =>
		await api.getDriverSeasonStandings(this.fetchCookie, params);
	getSupersessionSeasonStandings = async (
		params: GetSeasonSupersessionSeasonStandingsParams,
	) => await api.getSupersessionSeasonStandings(this.fetchCookie, params);
	getTeamSeasonStandings = async (params: GetTeamSeasonStandingsParams) =>
		await api.getTeamSeasonStandings(this.fetchCookie, params);
	getTimeTrialSeasonStandings = async (
		params: GetTimeTrialSeasonStandingsParams,
	) => await api.getTimeTrialSeasonStandings(this.fetchCookie, params);
	getQualifySeasonStandings = async (params: GetQualifySeasonResultsParams) =>
		await api.getQualifySeasonResults(this.fetchCookie, params);
	getWorldRecords = async (params: GetWorldRecordsParams) =>
		await api.getWorldRecords(this.fetchCookie, params);

	// Team API
	getTeamData = async (params: GetTeamDataParams) =>
		await api.getTeamData(this.fetchCookie, params);

	// Time Attack API
	getTimeAttackSeasonResults = async (
		params: GetTimeAttackSeasonResultsParams,
	) => await api.getTimeAttackSeasonResults(this.fetchCookie, params);

	// Track API
	getTrackAssets = async () => await api.getTrackAssets(this.fetchCookie);
	getTracks = async () => await api.getTracks(this.fetchCookie);
}

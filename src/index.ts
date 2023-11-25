import * as api from "./api/index.js";

import { FetchCookie } from "./types.js";
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
		params?:any,
	) => await api.getHostedCombinedSessions(this.fetchCookie, params);
	getHostedSessions = async () => await api.getHostedSessions(this.fetchCookie);

	// League API
	getCustLeagueSessions = async (params?: any) =>
		await api.getCustLeagueSessions(this.fetchCookie, params);
	getLeagueDirectory = async (params?: any) =>
		await api.getLeagueDirectory(this.fetchCookie, params);
	getLeagueData = async (params: any) =>
		await api.getLeagueData(this.fetchCookie, params);
	getLeaguePointSystem = async (params: any) =>
		await api.getLeaguePointSystem(this.fetchCookie, params);
	getLeagueMembership = async (params?: any) =>
		await api.getLeagueMembership(this.fetchCookie, params);
	getLeagueSeasons = async (params: any) =>
		await api.getLeagueSeasons(this.fetchCookie, params);
	getLeagueSeasonStandings = async (params: any) =>
		await api.getLeagueSeasonStandings(this.fetchCookie, params);
	getLeagueSeasonSessions = async (params: any) =>
		await api.getLeagueSeasonSessions(this.fetchCookie, params);

	// Lookup API
	getClubHistory = async (params: any) =>
		await api.getClubHistory(this.fetchCookie, params);
	getCountries = async () => await api.getCountries(this.fetchCookie);
	getDrivers = async (params: any) =>
		await api.getDrivers(this.fetchCookie, params);
	getLicenses = async () => await api.getLicenses(this.fetchCookie);

	// Member API
	getMemberAwards = async (params: any) =>
		await api.getMemberAwards(this.fetchCookie, params);
	getMemberChartData = async (params: any) =>
		await api.getMemberChartData(this.fetchCookie, params);
	getMemberData = async (params: any) =>
		await api.getMemberData(this.fetchCookie, params);
	getMemberInfo = async () => await api.getMemberInfo(this.fetchCookie);
	getMemberParticipationCredits = async () =>
		await api.getMemberParticipationCredits(this.fetchCookie);
	getMemberProfile = async (params: any) =>
		await api.getMemberProfile(this.fetchCookie, params);

	// Results API
	getResult = async (params: any) =>
		await api.getResult(this.fetchCookie, params);
	getResultsEventLog = async (params: any) =>
		await api.getResultsEventLog(this.fetchCookie, params);
	getResultsLapChartData = async (params: any) =>
		await api.getResultsLapChartData(this.fetchCookie, params);
	getResultsLapData = async (params: any) =>
		await api.getResultsLapData(this.fetchCookie, params);
	searchHosted = async () => await api.searchHosted(this.fetchCookie);
	searchSeries = async (params: any) =>
		await api.searchSeries(this.fetchCookie, params);
	getSeasonResults = async (params: any) =>
		await api.getSeasonResults(this.fetchCookie, params);

	// Season API
	getSeasonList = async (params: any) =>
		await api.getSeasonList(this.fetchCookie, params);
	getSeasonRaceGuide = async (params: any) =>
		await api.getSeasonRaceGuide(this.fetchCookie, params);

	// Series API
	getSeriesAssets = async () => await api.getSeriesAssets(this.fetchCookie);
	getSeriesData = async () => await api.getSeriesData(this.fetchCookie);
	getSeriesPastSeasons = async (params: any) =>
		await api.getSeriesPastSeasons(this.fetchCookie, params);
	getSeriesSeasons = async (params?: any) =>
		await api.getSeriesSeasons(this.fetchCookie, params);
	getSeriesStats = async () => await api.getSeriesStats(this.fetchCookie);

	// Stats API
	getMemberBests = async (params?: any) =>
		await api.getMemberBests(this.fetchCookie, params);
	getMemberCareer = async (params?: any) =>
		await api.getMemberCareer(this.fetchCookie, params);
	getMemberDivision = async (params: any) =>
		await api.getMemberDivision(this.fetchCookie, params);
	getMemberRecentRaces = async (params?: any) =>
		await api.getMemberRecentRaces(this.fetchCookie, params);
	getMemberRecap = async (params?: any) =>
		await api.getMemberRecap(this.fetchCookie, params);
	getMemberSummary = async (params?: any) =>
		await api.getMemberSummary(this.fetchCookie, params);
	getMemberYearlyStats = async (params?: any) =>
		await api.getMemberYearlyStats(this.fetchCookie, params);
	getDriverSeasonStandings = async (params: any) =>
		await api.getDriverSeasonStandings(this.fetchCookie, params);
	getSupersessionSeasonStandings = async (
		params: any,
	) => await api.getSupersessionSeasonStandings(this.fetchCookie, params);
	getTeamSeasonStandings = async (params: any) =>
		await api.getTeamSeasonStandings(this.fetchCookie, params);
	getTimeTrialSeasonStandings = async (
		params: any,
	) => await api.getTimeTrialSeasonStandings(this.fetchCookie, params);
	getQualifySeasonStandings = async (params: any) =>
		await api.getQualifySeasonResults(this.fetchCookie, params);
	getWorldRecords = async (params: any) =>
		await api.getWorldRecords(this.fetchCookie, params);

	// Team API
	getTeamData = async (params: any) =>
		await api.getTeamData(this.fetchCookie, params);

	// Time Attack API
	getTimeAttackSeasonResults = async (
		params: any,
	) => await api.getTimeAttackSeasonResults(this.fetchCookie, params);

	// Track API
	getTrackAssets = async () => await api.getTrackAssets(this.fetchCookie);
	getTracks = async () => await api.getTracks(this.fetchCookie);
}

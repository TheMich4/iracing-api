import { GetClubHistoryParams, GetDriversParams } from "./api/lookup/types";
import {
	GetLeagueDataParams,
	GetLeagueMembershipParams,
	GetLeaguePointSystemsParams,
	GetLeagueSeasonSessionsParams,
	GetLeagueSeasonStandingsParams,
	GetLeagueSeasonsParams,
	GetLeagueSessionsParams,
} from "./api/league/types";
import {
	GetMemberAwardsParams,
	GetMemberChartDataParams,
	GetMemberDataParams,
	GetMemberProfileParams,
} from "./api/member/types";
import {
	GetResultsEventDataParams,
	GetResultsLapChartDataParams,
	GetResultsLapDataParams,
	GetResultsParams,
	GetSeasonResultsParams,
} from "./api/results/types";
import {
	GetSeasonListParams,
	GetSeasonRaceGuideParams,
} from "./api/season/types";
import {
	GetSeriesPastSeasonsParams,
	GetSeriesSeasonsParams,
} from "./api/series/types";
import {
	getCarAssets,
	getCarClasses,
	getCars,
	getCategories,
	getClubHistory,
	getCountries,
	getDivisions,
	getDriverSeasonStandings,
	getDrivers,
	getEventTypes,
	getHostedCombinedSessions,
	getHostedSessions,
	getLeagueData,
	getLeagueDirectory,
	getLeagueMembership,
	getLeaguePointSystem,
	getLeagueSeasonSessions,
	getLeagueSeasonStandings,
	getLeagueSeasons,
	getLeagueSessions,
	getLicenses,
	getMemberAwards,
	getMemberBests,
	getMemberChartData,
	getMemberData,
	getMemberDivision,
	getMemberInfo,
	getMemberParticipationCredits,
	getMemberProfile,
	getMemberRecentRaces,
	getMemberSummary,
	getMemberYearlyStats,
	getResults,
	getResultsEventData,
	getResultsLapChartData,
	getResultsLapData,
	getSeasonList,
	getSeasonRaceGuide,
	getSeasonResults,
	getSeriesAssets,
	getSeriesData,
	getSeriesPastSeasons,
	getSeriesSeasons,
	getSeriesStats,
	getSupersessionSeasonStandings,
	getTeamData,
	getTeamSeasonStandings,
	getTimeAttackSeasonResults,
	getTimeTrialSeasonStandings,
	getTrackAssets,
	getTracks,
	getWorldRecords,
	searchHosted,
	searchSeries,
} from "./api";

import { AxiosInstance } from "axios";
import CryptoJS from "crypto-js";
import { GetHostedCombinedSessionsParams } from "./api/hosted/types";
import { createAxiosInstance } from "./client";

export * from "./api";

export class IracingAPI {
	instance: AxiosInstance;

	constructor() {
		this.instance = createAxiosInstance();
	}

	login = async (email: string, password: string) => {
		const hashPassword = CryptoJS.enc.Base64.stringify(
			CryptoJS.SHA256(password + email.toLowerCase()),
		);

		await this.instance.post("/auth", {
			email,
			password: hashPassword,
		});
	};

	// Car API
	getCarAssets = async () => await getCarAssets(this.instance);
	getCars = async () => await getCars(this.instance);

	// Car Class API
	getCarClasses = async () => await getCarClasses(this.instance);

	// Constants API
	getCategories = async () => await getCategories(this.instance);
	getDivisions = async () => await getDivisions(this.instance);
	getEventTypes = async () => await getEventTypes(this.instance);

	// Hosted API
	getHostedCombinedSessions = async (
		params?: GetHostedCombinedSessionsParams,
	) => await getHostedCombinedSessions(this.instance, params);
	getHostedSessions = async () => await getHostedSessions(this.instance);

	// League API
	getLeagueSessions = async (params?: GetLeagueSessionsParams) =>
		await getLeagueSessions(this.instance, params);
	getLeagueDirectory = async () => await getLeagueDirectory(this.instance);
	getLeagueData = async (params: GetLeagueDataParams) =>
		await getLeagueData(this.instance, params);
	getLeaguePointSystem = async (params: GetLeaguePointSystemsParams) =>
		await getLeaguePointSystem(this.instance, params);
	getLeagueMembership = async (params?: GetLeagueMembershipParams) =>
		await getLeagueMembership(this.instance, params);
	getLeagueSeasons = async (params: GetLeagueSeasonsParams) =>
		await getLeagueSeasons(this.instance, params);
	getLeagueSeasonStandings = async (params: GetLeagueSeasonStandingsParams) =>
		await getLeagueSeasonStandings(this.instance, params);
	getLeagueSeasonSessions = async (params: GetLeagueSeasonSessionsParams) =>
		await getLeagueSeasonSessions(this.instance, params);

	// Lookup API
	getClubHistory = async (params: GetClubHistoryParams) =>
		await getClubHistory(this.instance, params);
	getCountries = async () => await getCountries(this.instance);
	getDrivers = async (params: GetDriversParams) =>
		await getDrivers(this.instance, params);
	getLicenses = async () => await getLicenses(this.instance);

	// Member API
	getMemberAwards = async (params: GetMemberAwardsParams) =>
		await getMemberAwards(this.instance, params);
	getMemberChartData = async (params: GetMemberChartDataParams) =>
		await getMemberChartData(this.instance, params);
	getMemberData = async (params: GetMemberDataParams) =>
		await getMemberData(this.instance, params);
	getMemberInfo = async () => await getMemberInfo(this.instance);
	getMemberParticipationCredits = async () =>
		await getMemberParticipationCredits(this.instance);
	getMemberProfile = async (params: GetMemberProfileParams) =>
		await getMemberProfile(this.instance, params);

	// Results API
	getResults = async (params: GetResultsParams) =>
		await getResults(this.instance, params);
	getResultsEventData = async (params: GetResultsEventDataParams) =>
		await getResultsEventData(this.instance, params);
	getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
		await getResultsLapChartData(this.instance, params);
	getResultsLapData = async (params: GetResultsLapDataParams) =>
		await getResultsLapData(this.instance, params);
	searchHosted = async () => await searchHosted(this.instance);
	searchSeries = async () => await searchSeries(this.instance);
	getSeasonResults = async (params: GetSeasonResultsParams) =>
		await getSeasonResults(this.instance, params);

	// Season API
	getSeasonList = async (params: GetSeasonListParams) =>
		await getSeasonList(this.instance, params);
	getSeasonRaceGuide = async (params: GetSeasonRaceGuideParams) =>
		await getSeasonRaceGuide(this.instance, params);

	// Series API
	getSeriesAssets = async () => await getSeriesAssets(this.instance);
	getSeriesData = async () => await getSeriesData(this.instance);
	getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
		await getSeriesPastSeasons(this.instance, params);
	getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
		await getSeriesSeasons(this.instance, params);
	getSeriesStats = async () => await getSeriesStats(this.instance);

	// Stats API
	// getMemberBests = async () => await getMemberBests(this.instance);
	// getMemberCareerStats = async () => await getMemberCareerStats(this.instance);
	// getMemberDivision = async () => await getMemberDivision(this.instance);
	// getMemberRecentRaces = async () => await getMemberRecentRaces(this.instance);
	// getMemberSummary = async () => await getMemberSummary(this.instance);
	// getMemberYearlyStats = async () => await getMemberYearlyStats(this.instance);
	// getDriverSeasonStandings = async () =>
	// 	await getDriverSeasonStandings(this.instance);
	// getSupersessionSeasonStandings = async () =>
	// 	await getSupersessionSeasonStandings(this.instance);
	// getTeamSeasonStandings = async () =>
	// 	await getTeamSeasonStandings(this.instance);
	// getTimeTrialSeasonStandings = async () =>
	// 	await getTimeTrialSeasonStandings(this.instance);
	// getQualifySeasonStandings = async () =>
	// 	await getQualifySeasonStandings(this.instance);
	// getWorldRecords = async () => await getWorldRecords(this.instance);

	// Team API
	// getTeamData = async () => await getTeamData(this.instance);

	// Time Attack API
	// getTimeAttackSeasonResults = async () =>
	// 	await getTimeAttackSeasonResults(this.instance);

	// Track API
	getTrackAssets = async () => await getTrackAssets(this.instance);
	getTracks = async () => await getTracks(this.instance);
}

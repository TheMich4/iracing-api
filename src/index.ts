import * as api from "./api/index.js";

import { CrateAxiosConfig, createAxiosInstance, createJar } from "./client.js";
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
	GetLeagueSeasonsParams,
	GetLeagueSeasonStandingsParams,
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

import { AxiosInstance } from "axios";
import { CookieJar } from "tough-cookie";

import { GetHostedCombinedSessionsParams } from "./api/hosted/types.js";
import { encryptPassword } from "./helpers.js";

export * from "./api/index.js";
export * from "./consts.js";
export * from "./helpers.js";

export default class IracingAPI {
	jar: CookieJar;
	instance: AxiosInstance;

	constructor(axiosConfig?: CrateAxiosConfig) {
		this.jar = createJar();
		this.instance = createAxiosInstance(this.jar, axiosConfig);
	}

	login = async (email: string, password: string) => {
		const hashPassword = encryptPassword(password, email.toLowerCase());

		return await this.instance.post("/auth", {
			email,
			password: hashPassword,
		});
	};

	// Car API
	getCarAssets = async () => await api.getCarAssets(this.instance);
	getCars = async () => await api.getCars(this.instance);

	// Car Class API
	getCarClasses = async () => await api.getCarClasses(this.instance);

	// Constants API
	getCategories = async () => await api.getCategories(this.instance);
	getDivisions = async () => await api.getDivisions(this.instance);
	getEventTypes = async () => await api.getEventTypes(this.instance);

	// Hosted API
	getHostedCombinedSessions = async (
		params?: GetHostedCombinedSessionsParams,
	) => await api.getHostedCombinedSessions(this.instance, params);
	getHostedSessions = async () => await api.getHostedSessions(this.instance);

	// League API
	getCustLeagueSessions = async (params?: GetCustLeagueSessionsParams) =>
		await api.getCustLeagueSessions(this.instance, params);
	getLeagueDirectory = async (params?: GetLeagueDirectoryParams) =>
		await api.getLeagueDirectory(this.instance, params);
	getLeagueData = async (params: GetLeagueDataParams) =>
		await api.getLeagueData(this.instance, params);
	getLeaguePointSystem = async (params: GetLeaguePointSystemsParams) =>
		await api.getLeaguePointSystem(this.instance, params);
	getLeagueMembership = async (params?: GetLeagueMembershipParams) =>
		await api.getLeagueMembership(this.instance, params);
	getLeagueSeasons = async (params: GetLeagueSeasonsParams) =>
		await api.getLeagueSeasons(this.instance, params);
	getLeagueSeasonStandings = async (params: GetLeagueSeasonStandingsParams) =>
		await api.getLeagueSeasonStandings(this.instance, params);
	getLeagueSeasonSessions = async (params: GetLeagueSeasonSessionsParams) =>
		await api.getLeagueSeasonSessions(this.instance, params);

	// Lookup API
	getClubHistory = async (params: GetClubHistoryParams) =>
		await api.getClubHistory(this.instance, params);
	getCountries = async () => await api.getCountries(this.instance);
	getDrivers = async (params: GetDriversParams) =>
		await api.getDrivers(this.instance, params);
	getLicenses = async () => await api.getLicenses(this.instance);

	// Member API
	getMemberAwards = async (params: GetMemberAwardsParams) =>
		await api.getMemberAwards(this.instance, params);
	getMemberChartData = async (params: GetMemberChartDataParams) =>
		await api.getMemberChartData(this.instance, params);
	getMemberData = async (params: GetMemberDataParams) =>
		await api.getMemberData(this.instance, params);
	getMemberInfo = async () => await api.getMemberInfo(this.instance);
	getMemberParticipationCredits = async () =>
		await api.getMemberParticipationCredits(this.instance);
	getMemberProfile = async (params: GetMemberProfileParams) =>
		await api.getMemberProfile(this.instance, params);

	// Results API
	getResult = async (params: GetResultParams) =>
		await api.getResult(this.instance, params);
	getResultsEventLog = async (params: GetResultsEventLogParams) =>
		await api.getResultsEventLog(this.instance, params);
	getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
		await api.getResultsLapChartData(this.instance, params);
	getResultsLapData = async (params: GetResultsLapDataParams) =>
		await api.getResultsLapData(this.instance, params);
	searchHosted = async () => await api.searchHosted(this.instance);
	searchSeries = async (params: SearchSeriesParams) =>
		await api.searchSeries(this.instance, params);
	getSeasonResults = async (params: GetSeasonResultsParams) =>
		await api.getSeasonResults(this.instance, params);

	// Season API
	getSeasonList = async (params: GetSeasonListParams) =>
		await api.getSeasonList(this.instance, params);
	getSeasonRaceGuide = async (params: GetSeasonRaceGuideParams) =>
		await api.getSeasonRaceGuide(this.instance, params);

	// Series API
	getSeriesAssets = async () => await api.getSeriesAssets(this.instance);
	getSeriesData = async () => await api.getSeriesData(this.instance);
	getSeriesPastSeasons = async (params: GetSeriesPastSeasonsParams) =>
		await api.getSeriesPastSeasons(this.instance, params);
	getSeriesSeasons = async (params?: GetSeriesSeasonsParams) =>
		await api.getSeriesSeasons(this.instance, params);
	getSeriesStats = async () => await api.getSeriesStats(this.instance);

	// Stats API
	getMemberBests = async (params?: GetMemberBestsParams) =>
		await api.getMemberBests(this.instance, params);
	getMemberCareer = async (params?: GetMemberCareerParams) =>
		await api.getMemberCareer(this.instance, params);
	getMemberDivision = async (params: GetMemberDivisionParams) =>
		await api.getMemberDivision(this.instance, params);
	getMemberRecentRaces = async (params?: GetMemberRecentRacesParams) =>
		await api.getMemberRecentRaces(this.instance, params);
	getMemberRecap = async (params?: GetMemberRecapParams) =>
		await api.getMemberRecap(this.instance, params);
	getMemberSummary = async (params?: GetMemberSummaryParams) =>
		await api.getMemberSummary(this.instance, params);
	getMemberYearlyStats = async (params?: GetMemberYearlyParams) =>
		await api.getMemberYearlyStats(this.instance, params);
	getDriverSeasonStandings = async (params: GetDriverSeasonStandings) =>
		await api.getDriverSeasonStandings(this.instance, params);
	getSupersessionSeasonStandings = async (
		params: GetSeasonSupersessionSeasonStandingsParams,
	) => await api.getSupersessionSeasonStandings(this.instance, params);
	getTeamSeasonStandings = async (params: GetTeamSeasonStandingsParams) =>
		await api.getTeamSeasonStandings(this.instance, params);
	getTimeTrialSeasonStandings = async (
		params: GetTimeTrialSeasonStandingsParams,
	) => await api.getTimeTrialSeasonStandings(this.instance, params);
	getQualifySeasonStandings = async (params: GetQualifySeasonResultsParams) =>
		await api.getQualifySeasonResults(this.instance, params);
	getWorldRecords = async (params: GetWorldRecordsParams) =>
		await api.getWorldRecords(this.instance, params);

	// Team API
	getTeamData = async (params: GetTeamDataParams) =>
		await api.getTeamData(this.instance, params);

	// Time Attack API
	getTimeAttackSeasonResults = async (
		params: GetTimeAttackSeasonResultsParams,
	) => await api.getTimeAttackSeasonResults(this.instance, params);

	// Track API
	getTrackAssets = async () => await api.getTrackAssets(this.instance);
	getTracks = async () => await api.getTracks(this.instance);
}

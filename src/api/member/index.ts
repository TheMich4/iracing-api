import {
	ChartDataResponse,
	GetMemberAwardsParams,
	GetMemberChartDataParams,
	GetMemberDataParams,
	GetMemberProfileParams,
	MemberDataResponse,
	ParticipationInformation,
} from "./types.js";

import { FetchCookie } from "../../types.js";
import { MemberInfo } from "../../types/member.js";
import { getData } from "../../helpers.js";

export const getMemberAwards = (
	fetchCookie: FetchCookie,
	params: GetMemberAwardsParams,
) => getData(fetchCookie, "data/member/awards", { cust_id: params.customerId });

export const getMemberChartData = (
	fetchCookie: FetchCookie,
	params: GetMemberChartDataParams,
) =>
	getData<ChartDataResponse>(fetchCookie, "data/member/chart_data", {
		cust_id: params.customerId,
		category_id: params.categoryId,
		chart_type: params.chartType,
	});

export const getMemberData = async (
	fetchCookie: FetchCookie,
	params: GetMemberDataParams,
) =>
	await getData<MemberDataResponse>(fetchCookie, "data/member/get", {
		cust_ids: params.customerIds,
		include_licenses: params.includeLicenses,
	});

export const getMemberInfo = async (fetchCookie: FetchCookie) =>
	await getData<MemberInfo>(fetchCookie, "data/member/info");

export const getMemberParticipationCredits = async (fetchCookie: FetchCookie) =>
	await getData<Array<ParticipationInformation>>(
		fetchCookie,
		"data/member/participation_credits",
	);

export const getMemberProfile = async (
	fetchCookie: FetchCookie,
	params: GetMemberProfileParams,
) =>
	await getData(fetchCookie, "data/member/profile", {
		cust_id: params.customerId,
	});

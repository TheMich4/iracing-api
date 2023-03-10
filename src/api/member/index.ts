import {
	ChartDataResponse,
	GetMemberAwardsParams,
	GetMemberChartDataParams,
	GetMemberDataParams,
	GetMemberProfileParams,
	MemberDataResponse,
	ParticipationInformation,
} from "./types.js";

import { AxiosInstance } from "axios";
import { MemberInfo } from "../../types/member.js";
import { getData } from "../../helpers.js";

export const getMemberAwards = (
	axiosInstance: AxiosInstance,
	params: GetMemberAwardsParams,
) =>
	getData(axiosInstance, "data/member/awards", { cust_id: params.customerId });

export const getMemberChartData = (
	axiosInstance: AxiosInstance,
	params: GetMemberChartDataParams,
) =>
	getData<ChartDataResponse>(axiosInstance, "data/member/chart", {
		cust_id: params.customerId,
		category_id: params.categoryId,
		chart_type: params.chartType,
	});

export const getMemberData = async (
	axiosInstance: AxiosInstance,
	params: GetMemberDataParams,
) =>
	await getData<MemberDataResponse>(axiosInstance, "data/member/get", {
		cust_ids: params.customerIds,
		include_licenses: params.includeLicenses,
	});

export const getMemberInfo = async (axiosInstance: AxiosInstance) =>
	await getData<MemberInfo>(axiosInstance, "data/member/info");

export const getMemberParticipationCredits = async (
	axiosInstance: AxiosInstance,
) =>
	await getData<Array<ParticipationInformation>>(
		axiosInstance,
		"data/member/participation_credits",
	);

export const getMemberProfile = async (
	axiosInstance: AxiosInstance,
	params: GetMemberProfileParams,
) =>
	await getData(axiosInstance, "data/member/profile", {
		cust_id: params.customerId,
	});

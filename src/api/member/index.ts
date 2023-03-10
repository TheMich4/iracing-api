import {
	ChartDataResponse,
	MemberDataResponse,
	MemberInfo,
	ParticipationInformation,
} from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

const getMemberAwards = (axiosInstance: AxiosInstance, customerId: number) =>
	getData(axiosInstance, "data/member/awards", { cust_id: customerId });

// TODO: Add categoryId type
// TODO: Add chartType type
const getMemberChartData = (
	axiosInstance: AxiosInstance,
	customerId: number,
	categoryId: number,
	chartType: number,
) =>
	getData<ChartDataResponse>(axiosInstance, "data/member/chart", {
		cust_id: customerId,
		category_id: categoryId,
		chart_type: chartType,
	});

// TODO: Support single customer id
const getMemberData = async (
	axiosInstance: AxiosInstance,
	customerIds: Array<number>,
	includeLicenses: boolean = true,
) =>
	await getData<MemberDataResponse>(axiosInstance, "data/member/get", {
		cust_ids: customerIds,
		include_licenses: includeLicenses,
	});

const getMemberInfo = async (axiosInstance: AxiosInstance) =>
	await getData<MemberInfo>(axiosInstance, "data/member/info");

const getMemberParticipationCredits = async (axiosInstance: AxiosInstance) =>
	await getData<Array<ParticipationInformation>>(
		axiosInstance,
		"data/member/participation_credits",
	);

const getMemberProfile = async (
	axiosInstance: AxiosInstance,
	customerId: number,
) =>
	await getData(axiosInstance, "data/member/profile", { cust_id: customerId });

export {
	getMemberAwards,
	getMemberChartData,
	getMemberData,
	getMemberInfo,
	getMemberParticipationCredits,
	getMemberProfile,
};

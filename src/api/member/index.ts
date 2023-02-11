import {
	ChartDataResponse,
	MemberDataResponse,
	MemberInfo,
	ParticipationInformation,
} from "./types";

import { getData } from "../../helpers";

const getMemberAwards = (customerId: number) =>
	getData("data/member/awards", { cust_id: customerId });

// TODO: Add categoryId type
// TODO: Add chartType type
const getMemberChartData = (
	customerId: number,
	categoryId: number,
	chartType: number,
) =>
	getData<ChartDataResponse>("data/member/chart", {
		cust_id: customerId,
		category_id: categoryId,
		chart_type: chartType,
	});

// TODO: Support single customer id
const getMemberData = async (
	customerIds: Array<number>,
	includeLicenses: boolean = true,
) =>
	await getData<MemberDataResponse>("data/member/get", {
		cust_ids: customerIds,
		include_licenses: includeLicenses,
	});

const getMemberInfo = async () => await getData<MemberInfo>("data/member/info");

const getMemberParticipationCredits = async () =>
	await getData<Array<ParticipationInformation>>(
		"data/member/participation_credits",
	);

const getMemberProfile = async (customerId: number) =>
	await getData("data/member/profile", { cust_id: customerId });

export {
	getMemberAwards,
	getMemberChartData,
	getMemberData,
	getMemberInfo,
	getMemberParticipationCredits,
	getMemberProfile,
};

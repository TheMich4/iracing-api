import { Member } from "../../types/member.js";

export interface ChartData {
	value: number;
	when: string;
}

export interface ParticipationInformation {
	custId: number;
	seasonId: number;
	seriesId: number;
	seriesName: string;
	licenseGroup: number;
	licenseGroupName: string;
	participationCredits: number;
	minWeeks: number;
	weeks: number;
	earnedCredits: number;
	totalCredits: number;
}

// Params

export interface GetMemberAwardsParams {
	customerId: number;
}

export interface GetMemberChartDataParams {
	customerId: number;
	categoryId: number;
	chartType: number;
}

export interface GetMemberDataParams {
	customerIds: Array<number>;
	includeLicenses?: boolean;
}

export interface GetMemberProfileParams {
	customerId: number;
}

// Response

// TODO: Add categoryId type
// TODO: Add chartType type
export interface ChartDataResponse {
	blackout: boolean;
	categoryId: number;
	chartType: number;
	custId: number;
	data: Array<ChartData>;
	success: boolean;
}

export interface MemberDataResponse {
	custIds: Array<number>;
	members: Array<Member>;
	success: boolean;
}

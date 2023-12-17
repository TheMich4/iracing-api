import * as z from "zod";

import { MemberInfo, MemberParticipationCredit } from "../types/member.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetMemberAwardsParamsSchema = z.object({
  customerId: z.number(),
});
export type GetMemberAwardsParams = z.infer<typeof GetMemberAwardsParamsSchema>;

export const getMemberAwards = (
  fetchCookie: FetchCookie,
  params?: GetMemberAwardsParams
) =>
  getData(fetchCookie, "data/member/awards", { cust_id: params?.customerId });

export const GetMemberChartDataParamsSchema = z.object({
  customerId: z.number().optional(),
  categoryId: z.number(),
  chartType: z.string(),
});
export type GetMemberChartDataParams = z.infer<
  typeof GetMemberChartDataParamsSchema
>;

export const getMemberChartData = (
  fetchCookie: FetchCookie,
  params: GetMemberChartDataParams
) =>
  getData(fetchCookie, "data/member/chart_data", {
    cust_id: params.customerId,
    category_id: params.categoryId,
    chart_type: params.chartType,
  });

export const GetMemberDataParamsSchema = z.object({
  customerIds: z.array(z.string()),
  includeLicenses: z.boolean().optional(),
});
export type GetMemberDataParams = z.infer<typeof GetMemberDataParamsSchema>;

export const getMemberData = async (
  fetchCookie: FetchCookie,
  params: GetMemberDataParams
) =>
  await getData(fetchCookie, "data/member/get", {
    cust_ids: params.customerIds,
    include_licenses: params.includeLicenses,
  });

export const getMemberInfo = async (fetchCookie: FetchCookie) =>
  await getData<MemberInfo>(fetchCookie, "data/member/info");

export const getMemberParticipationCredits = async (fetchCookie: FetchCookie) =>
  await getData<MemberParticipationCredit[]>(
    fetchCookie,
    "data/member/participation_credits"
  );

export const GetMemberProfileParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberProfileParams = z.infer<
  typeof GetMemberProfileParamsSchema
>;

export const getMemberProfile = async (
  fetchCookie: FetchCookie,
  params?: GetMemberProfileParams
) =>
  await getData(fetchCookie, "data/member/profile", {
    cust_id: params?.customerId,
  });

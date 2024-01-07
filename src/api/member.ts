import { z } from "zod";
import { API } from ".";
import { getData } from "../helpers";
import { MemberInfo, MemberParticipationCredit } from "../types";

export const GetMemberAwardsParamsSchema = z.object({
  customerId: z.number(),
});
export type GetMemberAwardsParams = z.infer<typeof GetMemberAwardsParamsSchema>;
export const GetMemberChartDataParamsSchema = z.object({
  customerId: z.number().optional(),
  categoryId: z.number(),
  chartType: z.string(),
});
export type GetMemberChartDataParams = z.infer<
  typeof GetMemberChartDataParamsSchema
>;
export const GetMemberDataParamsSchema = z.object({
  customerIds: z.array(z.string()),
  includeLicenses: z.boolean().optional(),
});
export type GetMemberDataParams = z.infer<typeof GetMemberDataParamsSchema>;
export const GetMemberProfileParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberProfileParams = z.infer<
  typeof GetMemberProfileParamsSchema
>;

export class MemberAPI extends API {
  /**
   *
   * @param {GetMemberAwardsParams} [params]
   * @param {number} params.customerId - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberAwards = async (params?: GetMemberAwardsParams) =>
    getData(this.fetchCookie, "data/member/awards", {
      cust_id: params?.customerId,
    });
  /**
   *
   * @param {GetMemberChartDataParams} params
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   * @param {number} params.categoryId - 1 - Oval; 2 - Road; 3 - Dirt oval; 4 - Dirt road.
   * @param {string} params.chartType - 1 - iRating; 2 - TT Rating; 3 - License/SR.
   *
   * @returns
   */
  getMemberChartData = async (params: GetMemberChartDataParams) =>
    getData(this.fetchCookie, "data/member/chart_data", {
      cust_id: params.customerId,
      category_id: params.categoryId,
      chart_type: params.chartType,
    });
  /**
   *
   * @param {GetMemberDataParams} params
   * @param {number[]} params.customerIds - Array of customer IDs.
   * @param {boolean} [params.includeLicenses]
   *
   * @returns
   */
  getMemberData = async (params: GetMemberDataParams) =>
    await getData(this.fetchCookie, "data/member/get", {
      cust_ids: params.customerIds,
      include_licenses: params.includeLicenses,
    });
  /**
   *
   * @returns
   */
  getMemberInfo = async () =>
    await getData<MemberInfo>(this.fetchCookie, "data/member/info");
  /**
   *
   * @returns
   */
  getMemberParticipationCredits = async () =>
    await getData<MemberParticipationCredit[]>(
      this.fetchCookie,
      "data/member/participation_credits"
    );
  /**
   *
   * @param {GetMemberProfileParams} params
   * @param {number} [params.customerId] - Defaults to the authenticated member.
   *
   * @returns
   */
  getMemberProfile = async (params?: GetMemberProfileParams) =>
    await getData(this.fetchCookie, "data/member/profile", {
      cust_id: params?.customerId,
    });
}

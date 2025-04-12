import { API } from './api'
import {
    GetMemberAwardsParams,
    GetMemberAwardsResponse,
    GetMemberChartDataParams,
    GetMemberChartDataResponse,
    GetMemberDataParams,
    GetMemberDataResponse,
    GetMemberProfileParams,
    GetMemberProfileResponse,
    MemberInfo,
    MemberParticipationCredit,
} from '../types'

/**
 * Provides methods for interacting with member-related endpoints (awards, stats, profile, etc.).
 */
export class MemberAPI extends API {
    /**
     * Get the awards earned by a member.
     *
     * @param {GetMemberAwardsParams} [params] - Optional parameters to specify the member.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the member awards data, or undefined on error.
     */
    getMemberAwards = async (
        params?: GetMemberAwardsParams
    ): Promise<GetMemberAwardsResponse | undefined> =>
        await this._getData<GetMemberAwardsResponse>('data/member/awards', {
            cust_id: params?.customerId,
        })
    /**
     * Get chart data (iRating, TT Rating, License/SR) for a member in a specific category.
     *
     * @param {GetMemberChartDataParams} params - Parameters for the request.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     * @param {number} params.categoryId - Category ID: 1=Oval, 2=Road, 3=Dirt Oval, 4=Dirt Road.
     * @param {number} params.chartType - Chart type: 1=iRating, 2=TT Rating, 3=License/SR.
     *
     * @returns A promise resolving to the member chart data, or undefined on error.
     */
    getMemberChartData = async (
        params: GetMemberChartDataParams
    ): Promise<GetMemberChartDataResponse | undefined> =>
        await this._getData<GetMemberChartDataResponse>(
            'data/member/chart_data',
            {
                cust_id: params.customerId,
                category_id: params.categoryId,
                chart_type: params.chartType,
            }
        )
    /**
     * Get basic data for one or more members.
     *
     * @param {GetMemberDataParams} params - Parameters for the request.
     * @param {string[]} params.customerIds - An array of customer IDs (as strings) to retrieve data for.
     * @param {boolean} [params.includeLicenses=false] - Include license information in the response.
     *
     * @returns A promise resolving to the member data, or undefined on error.
     */
    getMemberData = async (
        params: GetMemberDataParams
    ): Promise<GetMemberDataResponse | undefined> =>
        await this._getData<GetMemberDataResponse>('data/member/get', {
            cust_ids: params.customerIds.join(','),
            include_licenses: params.includeLicenses,
        })
    /**
     * Get detailed information about the **authenticated** member.
     *
     * @returns A promise resolving to the authenticated member's info, or undefined on error.
     */
    getMemberInfo = async (): Promise<MemberInfo | undefined> =>
        await this._getData<MemberInfo>('data/member/info')
    /**
     * Get the participation credits earned by the **authenticated** member.
     *
     * @returns A promise resolving to an array of participation credit objects, or undefined on error.
     */
    getMemberParticipationCredits = async () =>
        await this._getData<MemberParticipationCredit[]>(
            'data/member/participation_credits'
        )
    /**
     * Get profile data for a member, including recent awards, activity, licenses, etc.
     *
     * @param {GetMemberProfileParams} [params] - Optional parameters to specify the member.
     * @param {number} [params.customerId] - Customer ID. Defaults to the authenticated member.
     *
     * @returns A promise resolving to the member profile data, or undefined on error.
     */
    getMemberProfile = async (
        params?: GetMemberProfileParams
    ): Promise<GetMemberProfileResponse | undefined> =>
        await this._getData<GetMemberProfileResponse>('data/member/profile', {
            cust_id: params?.customerId,
        })
}

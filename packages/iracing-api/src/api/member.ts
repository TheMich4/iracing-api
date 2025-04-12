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

export class MemberAPI extends API {
    /**
     *
     * @param {GetMemberAwardsParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns {Promise<GetMemberAwardsResponse | undefined>}
     */
    getMemberAwards = async (
        params?: GetMemberAwardsParams
    ): Promise<GetMemberAwardsResponse | undefined> =>
        await this._getData<GetMemberAwardsResponse>('data/member/awards', {
            cust_id: params?.customerId,
        })
    /**
     *
     * @param {GetMemberChartDataParams} params
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     * @param {number} params.categoryId - 1 - Oval; 2 - Road; 3 - Dirt oval; 4 - Dirt road.
     * @param {number} params.chartType - 1 - iRating; 2 - TT Rating; 3 - License/SR.
     *
     * @returns {Promise<GetMemberChartDataResponse | undefined>}
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
     *
     * @param {GetMemberDataParams} params
     * @param {string[]} params.customerIds - Array of customer IDs (as strings).
     * @param {boolean} [params.includeLicenses]
     *
     * @returns {Promise<GetMemberDataResponse | undefined>}
     */
    getMemberData = async (
        params: GetMemberDataParams
    ): Promise<GetMemberDataResponse | undefined> =>
        await this._getData<GetMemberDataResponse>('data/member/get', {
            cust_ids: params.customerIds.join(','),
            include_licenses: params.includeLicenses,
        })
    /**
     * Get detailed information about the authenticated member.
     *
     * @returns {Promise<MemberInfo | undefined>}
     */
    getMemberInfo = async (): Promise<MemberInfo | undefined> =>
        await this._getData<MemberInfo>('data/member/info')
    /**
     *
     * @returns
     */
    getMemberParticipationCredits = async () =>
        await this._getData<MemberParticipationCredit[]>(
            'data/member/participation_credits'
        )
    /**
     * Get profile data for a member, including recent awards, activity, licenses, etc.
     *
     * @param {GetMemberProfileParams} [params]
     * @param {number} [params.customerId] - Defaults to the authenticated member.
     *
     * @returns {Promise<GetMemberProfileResponse | undefined>}
     */
    getMemberProfile = async (
        params?: GetMemberProfileParams
    ): Promise<GetMemberProfileResponse | undefined> =>
        await this._getData<GetMemberProfileResponse>('data/member/profile', {
            cust_id: params?.customerId,
        })
}

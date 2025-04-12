import * as z from 'zod'

import { HelmetSchema } from './common'

export const SuitSchema = z.object({
    pattern: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    bodyType: z.number(),
})
export type Suit = z.infer<typeof SuitSchema>

export const RestrictionsSchema = z.object({})
export type Restrictions = z.infer<typeof RestrictionsSchema>

export const DirtOvalSchema = z.object({
    categoryId: z.number(),
    category: z.string(),
    licenseLevel: z.number(),
    safetyRating: z.number(),
    cpi: z.number(),
    irating: z.number(),
    ttRating: z.number(),
    mprNumRaces: z.number(),
    color: z.string(),
    groupName: z.string(),
    groupId: z.number(),
    proPromotable: z.boolean(),
    mprNumTts: z.number(),
})
export type DirtOval = z.infer<typeof DirtOvalSchema>

export const LicenseDetailSchema = z.object({
    categoryId: z.number(),
    category: z.string(),
    categoryName: z.string(),
    licenseLevel: z.number(),
    safetyRating: z.number(),
    cpi: z.number(),
    irating: z.number(),
    ttRating: z.number(),
    mprNumRaces: z.number(),
    color: z.string(),
    groupName: z.string(),
    groupId: z.number(),
    proPromotable: z.boolean(),
    seq: z.number(),
    mprNumTts: z.number(),
})
export type LicenseDetail = z.infer<typeof LicenseDetailSchema>

export const LicensesSchema = z.record(LicenseDetailSchema)
export type Licenses = z.infer<typeof LicensesSchema>

export const PackageSchema = z.object({
    packageId: z.number(),
    contentIds: z.array(z.number()),
})
export type Package = z.infer<typeof PackageSchema>

export const AccountSchema = z.object({
    irDollars: z.number(),
    irCredits: z.number(),
    status: z.string(),
    countryRules: z.null().optional(),
})
export type Account = z.infer<typeof AccountSchema>

export const MemberInfoSchema = z.object({
    custId: z.number(),
    email: z.string().optional(),
    username: z.string().optional(),
    displayName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    onCarName: z.string(),
    memberSince: z.string(),
    lastTestTrack: z.number().optional(),
    lastTestCar: z.number().optional(),
    lastSeason: z.number(),
    flags: z.number(),
    clubId: z.number(),
    clubName: z.string(),
    connectionType: z.string(),
    downloadServer: z.string(),
    lastLogin: z.string().datetime(),
    readCompRules: z.string().datetime(),
    account: AccountSchema,
    helmet: HelmetSchema,
    suit: SuitSchema,
    licenses: LicensesSchema,
    carPackages: z.array(PackageSchema),
    trackPackages: z.array(PackageSchema),
    otherOwnedPackages: z.array(z.number()),
    dev: z.boolean(),
    alphaTester: z.boolean(),
    rainTester: z.boolean(),
    broadcaster: z.boolean(),
    restrictions: RestrictionsSchema,
    hasReadCompRules: z.boolean(),
    hasReadNda: z.boolean(),
    flagsHex: z.string(),
    hundredPctClub: z.boolean(),
    twentyPctDiscount: z.boolean(),
    raceOfficial: z.boolean().optional(),
    ai: z.boolean().optional(),
    bypassHostedPassword: z.boolean().optional(),
    readTc: z.string().datetime(),
    readPp: z.string().datetime(),
    hasReadTc: z.boolean(),
    hasReadPp: z.boolean(),
    hasAdditionalContent: z.boolean(),
})
export type MemberInfo = z.infer<typeof MemberInfoSchema>

export const MemberParticipationCreditSchema = z.object({
    custId: z.number(),
    seasonId: z.number(),
    seriesId: z.number(),
    seriesName: z.string(),
    licenseGroup: z.number(),
    licenseGroupName: z.string(),
    participationCredits: z.number(),
    minWeeks: z.number(),
    weeks: z.number(),
    earnedCredits: z.number(),
    totalCredits: z.number(),
})
export type MemberParticipationCredit = z.infer<
    typeof MemberParticipationCreditSchema
>

// Params

export const GetMemberAwardsParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberAwardsParams = z.infer<typeof GetMemberAwardsParamsSchema>

export const GetMemberChartDataParamsSchema = z.object({
    customerId: z.number().optional(),
    categoryId: z.number(),
    chartType: z.number(),
})
export type GetMemberChartDataParams = z.infer<
    typeof GetMemberChartDataParamsSchema
>

export const GetMemberDataParamsSchema = z.object({
    customerIds: z.array(z.string()),
    includeLicenses: z.boolean().optional(),
})
export type GetMemberDataParams = z.infer<typeof GetMemberDataParamsSchema>

export const GetMemberProfileParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberProfileParams = z.infer<
    typeof GetMemberProfileParamsSchema
>

export const GetMemberAwardInstancesParamsSchema = z.object({
    awardId: z.number(),
    customerId: z.number().optional(),
})
export type GetMemberAwardInstancesParams = z.infer<
    typeof GetMemberAwardInstancesParamsSchema
>

// Response

export const GetMemberAwardsDataSchema = z.object({
    success: z.boolean(),
    cust_id: z.number(),
    award_count: z.number(),
})
export type GetMemberAwardsData = z.infer<typeof GetMemberAwardsDataSchema>

export const GetMemberAwardsResponseSchema = z.object({
    type: z.literal('member_awards'),
    data: GetMemberAwardsDataSchema,
    data_url: z.string().url(),
})
export type GetMemberAwardsResponse = z.infer<
    typeof GetMemberAwardsResponseSchema
>

export const MemberChartDataPointSchema = z.object({
    when: z.string(), // Appears to be just YYYY-MM-DD, not full datetime
    value: z.number(),
})
export type MemberChartDataPoint = z.infer<typeof MemberChartDataPointSchema>

export const GetMemberChartDataResponseSchema = z.object({
    blackout: z.boolean(),
    categoryId: z.number(),
    chartType: z.number(),
    data: z.array(MemberChartDataPointSchema),
    success: z.boolean(),
    custId: z.number(),
})
export type GetMemberChartDataResponse = z.infer<
    typeof GetMemberChartDataResponseSchema
>

export const MemberDataEntrySchema = z.object({
    custId: z.number(),
    displayName: z.string(),
    helmet: HelmetSchema,
    lastLogin: z.string().datetime(),
    memberSince: z.string(), // Date only string
    clubId: z.number(),
    clubName: z.string(),
    ai: z.boolean(),
})
export type MemberDataEntry = z.infer<typeof MemberDataEntrySchema>

export const GetMemberDataResponseSchema = z.object({
    success: z.boolean(),
    custIds: z.array(z.number()),
    members: z.array(MemberDataEntrySchema),
})
export type GetMemberDataResponse = z.infer<typeof GetMemberDataResponseSchema>

// Response Schemas for GetMemberProfile
export const RecentAwardSchema = z.object({
    memberAwardId: z.number(),
    awardId: z.number(),
    achievement: z.boolean(),
    awardCount: z.number(),
    awardDate: z.string(), // Date only
    awardOrder: z.number(),
    awardedDescription: z.string(),
    description: z.string(),
    groupName: z.string(),
    hasPdf: z.boolean(),
    iconUrlLarge: z.string(),
    iconUrlSmall: z.string(),
    iconUrlUnawarded: z.string(),
    name: z.string(),
    progress: z.number().optional(),
    progressLabel: z.string().optional(),
    threshold: z.number().optional(),
    subsessionId: z.number().optional(),
    viewed: z.boolean(),
    weight: z.number(),
})
export type RecentAward = z.infer<typeof RecentAwardSchema>

export const ActivitySchema = z.object({
    recent30daysCount: z.number(),
    prev30daysCount: z.number(),
    consecutiveWeeks: z.number(),
    mostConsecutiveWeeks: z.number(),
})
export type Activity = z.infer<typeof ActivitySchema>

export const MemberProfileInfoSchema = z.object({
    custId: z.number(),
    displayName: z.string(),
    helmet: HelmetSchema,
    lastLogin: z.string().datetime(),
    memberSince: z.string(), // Date only
    clubId: z.number(),
    clubName: z.string(),
    ai: z.boolean(),
    licenses: z.array(LicenseDetailSchema), // Array of existing LicenseDetailSchema
    country: z.string(),
    countryCode: z.string(),
})
export type MemberProfileInfo = z.infer<typeof MemberProfileInfoSchema>

export const LicenseHistoryEntrySchema = z.object({
    categoryId: z.number(),
    category: z.string(),
    categoryName: z.string(),
    licenseLevel: z.number(),
    safetyRating: z.number(),
    cpi: z.number(),
    irating: z.number(),
    ttRating: z.number(),
    color: z.string(),
    groupName: z.string(),
    groupId: z.number(),
    seq: z.number(),
})
export type LicenseHistoryEntry = z.infer<typeof LicenseHistoryEntrySchema>

export const RecentEventTrackSchema = z.object({
    configName: z.string(),
    trackId: z.number(),
    trackName: z.string(),
})
export type RecentEventTrack = z.infer<typeof RecentEventTrackSchema>

export const RecentEventSchema = z.object({
    eventType: z.string(),
    subsessionId: z.number(),
    startTime: z.string().datetime(),
    eventId: z.number(),
    eventName: z.string(),
    simsessionType: z.number(),
    startingPosition: z.number(),
    finishPosition: z.number(),
    bestLapTime: z.number(),
    percentRank: z.number(),
    carId: z.number(),
    carName: z.string(),
    logoUrl: z.string().nullable(),
    track: RecentEventTrackSchema,
})
export type RecentEvent = z.infer<typeof RecentEventSchema>

export const FollowCountsSchema = z.object({
    followers: z.number(),
    follows: z.number(),
})
export type FollowCounts = z.infer<typeof FollowCountsSchema>

export const GetMemberProfileResponseSchema = z.object({
    recentAwards: z.array(RecentAwardSchema),
    activity: ActivitySchema,
    success: z.boolean(),
    imageUrl: z.string().url(),
    memberInfo: MemberProfileInfoSchema,
    disabled: z.boolean(),
    licenseHistory: z.array(LicenseHistoryEntrySchema),
    recentEvents: z.array(RecentEventSchema),
    custId: z.number(),
    isGenericImage: z.boolean(),
    followCounts: FollowCountsSchema,
})
export type GetMemberProfileResponse = z.infer<
    typeof GetMemberProfileResponseSchema
>

import { z } from 'zod'

// Params
export const GetSeasonListParamsSchema = z.object({
    seasonYear: z.number(),
    seasonQuarter: z.number(),
})
export type GetSeasonListParams = z.infer<typeof GetSeasonListParamsSchema>
export const GetSeasonRaceGuideParamsSchema = z.object({
    from: z.string().optional(),
    includeEndAfterFrom: z.boolean().optional(),
})
export type GetSeasonRaceGuideParams = z.infer<
    typeof GetSeasonRaceGuideParamsSchema
>
export const GetSpectatorSubsessionIdsParamsSchema = z.object({
    eventTypes: z.array(z.number()).optional(),
})
export type GetSpectatorSubsessionIdsParams = z.infer<
    typeof GetSpectatorSubsessionIdsParamsSchema
>

export const GetSpectatorSubsessionIdsDetailParamsSchema = z.object({
    eventTypes: z.array(z.number()).optional(),
    seasonIds: z.array(z.number()).optional(),
})
export type GetSpectatorSubsessionIdsDetailParams = z.infer<
    typeof GetSpectatorSubsessionIdsDetailParamsSchema
>

// Response
export const SeasonListEntrySchema = z.object({
    seasonId: z.number(),
    seriesId: z.number(),
    seasonName: z.string(),
    seriesName: z.string(),
    official: z.boolean(),
    seasonYear: z.number(),
    seasonQuarter: z.number(),
    licenseGroup: z.number(),
    fixedSetup: z.boolean(),
    driverChanges: z.boolean(),
    rookieSeason: z.string().optional(), // Added as optional based on example
})
export type SeasonListEntry = z.infer<typeof SeasonListEntrySchema>

export const GetSeasonListResponseSchema = z.object({
    seasonQuarter: z.number(),
    seasons: z.array(SeasonListEntrySchema),
    seasonYear: z.number(),
})
export type GetSeasonListResponse = z.infer<typeof GetSeasonListResponseSchema>

export const SeasonRaceGuideSessionSchema = z.object({
    seasonId: z.number(),
    startTime: z.string().datetime(),
    superSession: z.boolean(),
    seriesId: z.number(),
    raceWeekNum: z.number(),
    endTime: z.string().datetime(),
    sessionId: z.number(),
    entryCount: z.number(),
})
export type SeasonRaceGuideSession = z.infer<
    typeof SeasonRaceGuideSessionSchema
>

export const GetSeasonRaceGuideResponseSchema = z.object({
    subscribed: z.boolean(),
    sessions: z.array(SeasonRaceGuideSessionSchema),
    blockBeginTime: z.string().datetime(),
    blockEndTime: z.string().datetime(),
    success: z.boolean(),
})
export type GetSeasonRaceGuideResponse = z.infer<
    typeof GetSeasonRaceGuideResponseSchema
>

export const GetSpectatorSubsessionIdsResponseSchema = z.object({
    eventTypes: z.array(z.number()),
    success: z.boolean(),
    subsessionIds: z.array(z.number()),
})
export type GetSpectatorSubsessionIdsResponse = z.infer<
    typeof GetSpectatorSubsessionIdsResponseSchema
>

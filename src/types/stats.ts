import * as z from 'zod'

export const CarsDrivenSchema = z.object({
    carId: z.number(),
    carName: z.string(),
})
export type CarsDriven = z.infer<typeof CarsDrivenSchema>

export const StatsTrackSchema = z.object({
    trackId: z.number(),
    trackName: z.string(),
    configName: z.string(),
})
export type StatsTrack = z.infer<typeof StatsTrackSchema>

export const BestSchema = z.object({
    track: StatsTrackSchema,
    eventType: z.string(),
    bestLapTime: z.number(),
    subsessionId: z.number(),
    endTime: z.string(),
    seasonYear: z.number(),
    seasonQuarter: z.number(),
})
export type Best = z.infer<typeof BestSchema>

export const MemberBestsSchema = z.object({
    carsDriven: z.array(CarsDrivenSchema),
    bests: z.array(BestSchema),
    custId: z.number(),
    carId: z.number(),
})
export type MemberBests = z.infer<typeof MemberBestsSchema>

export const StatSchema = z.object({
    categoryId: z.number(),
    category: z.string(),
    starts: z.number(),
    wins: z.number(),
    top5: z.number(),
    poles: z.number(),
    avgStartPosition: z.number(),
    avgFinishPosition: z.number(),
    laps: z.number(),
    lapsLed: z.number(),
    avgIncidents: z.number(),
    avgPoints: z.number(),
    winPercentage: z.number(),
    top5Percentage: z.number(),
    lapsLedPercentage: z.number(),
    totalClubPoints: z.number(),
})
export type Stat = z.infer<typeof StatSchema>

export const MemberCareerSchema = z.object({
    stats: z.array(StatSchema),
    custId: z.number(),
})
export type MemberCareer = z.infer<typeof MemberCareerSchema>

export const FavoriteTrackSchema = z.object({
    trackId: z.number(),
    trackName: z.string(),
    configName: z.string(),
    trackLogo: z.string(),
})
export type FavoriteTrack = z.infer<typeof FavoriteTrackSchema>

export const FavoriteCarSchema = z.object({
    carId: z.number(),
    carName: z.string(),
    carImage: z.string(),
})
export type FavoriteCar = z.infer<typeof FavoriteCarSchema>

export const StatsSchema = z.object({
    starts: z.number(),
    wins: z.number(),
    top5: z.number(),
    avgStartPosition: z.number(),
    avgFinishPosition: z.number(),
    laps: z.number(),
    lapsLed: z.number(),
    favoriteCar: FavoriteCarSchema,
    favoriteTrack: FavoriteTrackSchema,
})
export type Stats = z.infer<typeof StatsSchema>

export const MemberRecapSchema = z.object({
    year: z.number(),
    stats: StatsSchema,
    success: z.boolean(),
    season: z.null(),
    custId: z.number(),
})
export type MemberRecap = z.infer<typeof MemberRecapSchema>

export const ThisYearSchema = z.object({
    numOfficialSessions: z.number(),
    numLeagueSessions: z.number(),
    numOfficialWins: z.number(),
    numLeagueWins: z.number(),
})
export type ThisYear = z.infer<typeof ThisYearSchema>

export const MemberSummarySchema = z.object({
    thisYear: ThisYearSchema,
    custId: z.number(),
})
export type MemberSummary = z.infer<typeof MemberSummarySchema>

export const YearlyStatSchema = z.intersection(
    StatSchema,
    z.object({
        year: z.number(),
    })
)
export type YearlyStat = z.infer<typeof StatSchema>

export const MemberYearlyStatsSchema = z.object({
    stats: z.array(YearlyStatSchema),
    custId: z.number(),
})
export type MemberYearlyStats = z.infer<typeof MemberYearlyStatsSchema>

// Params

export const GetMemberBestsParamsSchema = z.object({
    customerId: z.number().optional(),
    carId: z.number().optional(),
})
export type GetMemberBestsParams = z.infer<typeof GetMemberBestsParamsSchema>
export const GetMemberCareerParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberCareerParams = z.infer<typeof GetMemberCareerParamsSchema>
export const GetMemberDivisionParamsSchema = z.object({
    seasonId: z.number(),
    eventType: z.number(),
})
export type GetMemberDivisionParams = z.infer<
    typeof GetMemberDivisionParamsSchema
>
export const GetMemberRecentRacesParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberRecentRacesParams = z.infer<
    typeof GetMemberRecentRacesParamsSchema
>
export const GetMemberRecapParamsSchema = z.object({
    customerId: z.number().optional(),
    year: z.number().optional(),
    season: z.number().optional(),
})
export type GetMemberRecapParams = z.infer<typeof GetMemberRecapParamsSchema>
export const GetMemberSummaryParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberSummaryParams = z.infer<
    typeof GetMemberSummaryParamsSchema
>
export const GetMemberYearlyStatsParamsSchema = z.object({
    customerId: z.number().optional(),
})
export type GetMemberYearlyStatsParams = z.infer<
    typeof GetMemberYearlyStatsParamsSchema
>
export const GetDriverSeasonStandingsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    clubId: z.number().optional(),
    division: z.number().optional(),
    raceWeekNumber: z.number().optional(),
})
export type GetDriverSeasonStandingsParams = z.infer<
    typeof GetDriverSeasonStandingsParamsSchema
>
export const getSupersessionSeasonStandingsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    clubId: z.number().optional(),
    division: z.number().optional(),
    raceWeekNumber: z.number().optional(),
})
export type GetSupersessionSeasonStandingsParams = z.infer<
    typeof getSupersessionSeasonStandingsParamsSchema
>
export const GetTeamSeasonStandingsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    raceWeekNumber: z.number().optional(),
})
export type GetTeamSeasonStandingsParams = z.infer<
    typeof GetTeamSeasonStandingsParamsSchema
>
export const GetTimeTrialSeasonStandingsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    clubId: z.number().optional(),
    division: z.number().optional(),
    raceWeekNumber: z.number().optional(),
})
export type GetTimeTrialSeasonStandingsParams = z.infer<
    typeof GetTimeTrialSeasonStandingsParamsSchema
>
export const GetTimeTrialSeasonResultsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    clubId: z.number().optional(),
    division: z.number().optional(),
    raceWeekNumber: z.number(),
})
export type GetTimeTrialSeasonResultsParams = z.infer<
    typeof GetTimeTrialSeasonResultsParamsSchema
>
export const GetQualifySeasonResultsParamsSchema = z.object({
    seasonId: z.number(),
    carClassId: z.number(),
    clubId: z.number().optional(),
    division: z.number().optional(),
    raceWeekNumber: z.number().optional(),
})
export type GetQualifySeasonResultsParams = z.infer<
    typeof GetQualifySeasonResultsParamsSchema
>
export const GetWorldRecordsParamsSchema = z.object({
    carId: z.number(),
    trackId: z.number(),
    seasonYear: z.number().optional(),
    seasonQuarter: z.number().optional(),
})
export type GetWorldRecordsParams = z.infer<typeof GetWorldRecordsParamsSchema>

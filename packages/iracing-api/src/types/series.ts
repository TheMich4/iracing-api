import * as z from 'zod'

import {
    CarTypeSchema,
    CategorySchema,
    HeatSesInfoSchema,
    LicenseGroupTypeSchema,
    TrackTypeSchema,
    WeatherSchema,
} from './common'

export const SeriesAssetSchema = z.object({
    largeImage: z.null(),
    logo: z.string(),
    seriesCopy: z.string(),
    seriesId: z.number(),
    smallImage: z.null(),
})
export type SeriesAsset = z.infer<typeof SeriesAssetSchema>

export const SeriesAssetsSchema = z.record(SeriesAssetSchema)
export type SeriesAssets = z.infer<typeof SeriesAssetsSchema>

export const GroupNameSchema = z.enum([
    'Class A',
    'Class B',
    'Class C',
    'Class D',
    'Pro',
    'Pro/WC',
    'Rookie',
])
export type GroupName = z.infer<typeof GroupNameSchema>

export const AllowedLicenseSchema = z.object({
    groupName: GroupNameSchema,
    licenseGroup: z.number(),
    maxLicenseLevel: z.number(),
    minLicenseLevel: z.number(),
    parentId: z.number().optional(),
})
export type AllowedLicense = z.infer<typeof AllowedLicenseSchema>

export const SeriesDataSchema = z.object({
    allowedLicenses: z.array(AllowedLicenseSchema),
    category: CategorySchema,
    categoryId: z.number(),
    eligible: z.boolean(),
    forumUrl: z.union([z.null(), z.string()]).optional(),
    maxStarters: z.number(),
    minStarters: z.number(),
    ovalCautionType: z.number(),
    roadCautionType: z.number(),
    seriesId: z.number(),
    seriesName: z.string(),
    seriesShortName: z.string(),
    searchFilters: z.union([z.null(), z.string()]).optional(),
})
export type SeriesData = z.infer<typeof SeriesDataSchema>

export const SeriesTrackSchema = z.object({
    trackId: z.number(),
    trackName: z.string(),
    configName: z.union([z.null(), z.string()]).optional(),
    categoryId: z.union([z.null(), z.number()]).optional(),
    category: z.union([z.null(), z.string()]).optional(),
})
export type SeriesTrack = z.infer<typeof SeriesTrackSchema>

export const RaceWeekSchema = z.object({
    seasonId: z.number(),
    raceWeekNum: z.number(),
    track: SeriesTrackSchema,
})
export type RaceWeek = z.infer<typeof RaceWeekSchema>

export const SeriesCarClassSchema = z.object({
    carClassId: z.number(),
    shortName: z.string(),
    name: z.string(),
    relativeSpeed: z.number(),
})
export type SeriesCarClass = z.infer<typeof SeriesCarClassSchema>

export const SeasonSchema = z.object({
    seasonId: z.number(),
    seriesId: z.number(),
    seasonName: z.string(),
    seasonShortName: z.string(),
    seasonYear: z.number(),
    seasonQuarter: z.number(),
    active: z.boolean(),
    official: z.boolean(),
    driverChanges: z.boolean(),
    fixedSetup: z.boolean(),
    licenseGroup: z.number(),
    hasSupersessions: z.boolean().optional(),
    licenseGroupTypes: z.array(LicenseGroupTypeSchema),
    carClasses: z.array(SeriesCarClassSchema),
    raceWeeks: z.array(RaceWeekSchema),
})
export type Season = z.infer<typeof SeasonSchema>

export const SeriesStatSchema = z.object({
    seriesId: z.number(),
    seriesName: z.string(),
    seriesShortName: z.string(),
    categoryId: z.number(),
    category: CategorySchema,
    active: z.boolean(),
    official: z.boolean(),
    fixedSetup: z.boolean(),
    logo: z.union([z.null(), z.string()]),
    licenseGroup: z.number(),
    licenseGroupTypes: z.array(LicenseGroupTypeSchema),
    allowedLicenses: z.array(AllowedLicenseSchema),
    seasons: z.array(SeasonSchema),
    searchFilters: z.union([z.null(), z.string()]).optional(),
})
export type SeriesStat = z.infer<typeof SeriesStatSchema>

export const SeriesTrackStateSchema = z.object({
    leaveMarbles: z.boolean(),
    practiceRubber: z.union([z.number(), z.null()]).optional(),
})
export type SeriesTrackState = z.infer<typeof SeriesTrackStateSchema>

export const RaceTimeDescriptorSchema = z.object({
    repeating: z.boolean(),
    superSession: z.boolean(),
    sessionMinutes: z.number(),
    sessionTimes: z.union([z.array(z.string()), z.null()]).optional(),
    startDate: z.union([z.null(), z.string()]).optional(),
    dayOffset: z.union([z.array(z.number()), z.null()]).optional(),
    firstSessionTime: z.union([z.null(), z.string()]).optional(),
    repeatMinutes: z.union([z.number(), z.null()]).optional(),
})
export type RaceTimeDescriptor = z.infer<typeof RaceTimeDescriptorSchema>

export const CarRestrictionSchema = z.object({
    carId: z.number(),
    raceSetupId: z.union([z.number(), z.null()]).optional(),
    maxPctFuelFill: z.number(),
    weightPenaltyKg: z.number(),
    powerAdjustPct: z.number(),
    maxDryTireSets: z.number(),
    qualSetupId: z.union([z.number(), z.null()]).optional(),
})
export type CarRestriction = z.infer<typeof CarRestrictionSchema>

export const ScheduleSchema = z.object({
    carRestrictions: z.array(CarRestrictionSchema),
    category: CategorySchema,
    categoryId: z.number(),
    enablePitlaneCollisions: z.boolean(),
    fullCourseCautions: z.boolean(),
    qualAttached: z.boolean(),
    raceLapLimit: z.union([z.number(), z.null()]),
    raceTimeDescriptors: z.array(RaceTimeDescriptorSchema),
    raceTimeLimit: z.union([z.number(), z.null()]),
    raceWeekNum: z.number(),
    restartType: z.string(),
    scheduleName: z.string(),
    seasonId: z.number(),
    seasonName: z.string(),
    seriesId: z.number(),
    seriesName: z.string(),
    shortParadeLap: z.boolean(),
    simulatedTimeMultiplier: z.number(),
    specialEventType: z.null(),
    startDate: z.string(),
    startType: z.string(),
    startZone: z.boolean(),
    track: SeriesTrackSchema,
    trackState: SeriesTrackStateSchema,
    weather: WeatherSchema,
})
export type Schedule = z.infer<typeof ScheduleSchema>

export const SeriesHeatSesInfoSchema = z.intersection(
    HeatSesInfoSchema,
    z.object({ description: z.string() })
)
export type SeriesHeatSesInfo = z.infer<typeof SeriesHeatSesInfoSchema>

export const AllowedSeasonMemberSchema = z.object({
    seasonId: z.number(),
    custId: z.number(),
    displayName: z.string(),
    carId: z.number(),
    carNum: z.string(),
})
export type AllowedSeasonMember = z.infer<typeof AllowedSeasonMemberSchema>

export const SeriesSeasonSchema = z.object({
    active: z.boolean(),
    allowedSeasonMembers: z.union([
        z.record(z.string(), AllowedSeasonMemberSchema),
        z.null(),
    ]),
    carClassIds: z.array(z.number()),
    carTypes: z.array(CarTypeSchema),
    cautionLapsDoNotCount: z.boolean(),
    complete: z.boolean(),
    crossLicense: z.boolean(),
    driverChangeRule: z.number(),
    driverChanges: z.boolean(),
    drops: z.number(),
    enablePitlaneCollisions: z.boolean(),
    fixedSetup: z.boolean(),
    greenWhiteCheckeredLimit: z.number(),
    gridByClass: z.boolean(),
    hardcoreLevel: z.number(),
    heatSesInfo: z.union([SeriesHeatSesInfoSchema, z.null()]).optional(),
    ignoreLicenseForPractice: z.boolean(),
    incidentLimit: z.number(),
    incidentWarnMode: z.number(),
    incidentWarnParam1: z.number(),
    incidentWarnParam2: z.number(),
    isHeatRacing: z.boolean(),
    licenseGroup: z.number(),
    licenseGroupTypes: z.array(LicenseGroupTypeSchema),
    luckyDog: z.boolean(),
    maxTeamDrivers: z.number(),
    maxWeeks: z.number(),
    minTeamDrivers: z.number(),
    multiclass: z.boolean(),
    mustUseDiffTireTypesInRace: z.boolean(),
    nextRaceSession: z.null(),
    numOptLaps: z.number(),
    official: z.boolean(),
    opDuration: z.number(),
    openPracticeSessionTypeId: z.number(),
    qualifierMustStartRace: z.boolean(),
    racePoints: z.union([z.number(), z.null()]).optional(),
    raceWeek: z.number(),
    raceWeekToMakeDivisions: z.number(),
    regOpenMinutes: z.union([z.number(), z.null()]).optional(),
    regUserCount: z.number(),
    regionCompetition: z.boolean(),
    restrictByMember: z.boolean(),
    restrictToCar: z.boolean(),
    restrictViewing: z.boolean(),
    rookieSeason: z.union([z.null(), z.string()]).optional(),
    scheduleDescription: z.string(),
    schedules: z.array(ScheduleSchema),
    seasonId: z.number(),
    seasonName: z.string(),
    seasonQuarter: z.number(),
    seasonShortName: z.string(),
    seasonYear: z.number(),
    sendToOpenPractice: z.boolean(),
    seriesId: z.number(),
    shortParadeLap: z.boolean(),
    startDate: z.string(),
    startOnQualTire: z.boolean(),
    startZone: z.boolean(),
    trackTypes: z.array(TrackTypeSchema),
    unsportConductRuleMode: z.number(),
})
export type SeriesSeason = z.infer<typeof SeriesSeasonSchema>

// Params

export const getSeriesPastSeasonsParamsSchema = z.object({
    seriesId: z.number(),
})
export type GetSeriesPastSeasonsParams = z.infer<
    typeof getSeriesPastSeasonsParamsSchema
>
export const GetSeriesSeasonsParamSchema = z.object({
    includeSeries: z.boolean().optional(),
})
export type GetSeriesSeasonsParams = z.infer<typeof GetSeriesSeasonsParamSchema>

export const GetSeriesPastSeasonsResponseSchema = z.object({
    success: z.boolean(),
    series: SeriesStatSchema,
    seriesId: z.number(),
})
export type GetSeriesPastSeasonsResponse = z.infer<
    typeof GetSeriesPastSeasonsResponseSchema
>

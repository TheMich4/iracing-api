import { z } from 'zod'
import { HelmetSchema, TrackStateSchema, WeatherSchema } from './common'
import { SuitSchema } from './member'

// Params
export const GetResultParamsSchema = z.object({
    subsessionId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetResultParams = z.infer<typeof GetResultParamsSchema>
export const getResultsEventLogParamsSchema = z.object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
})
export type GetResultsEventLogParams = z.infer<
    typeof getResultsEventLogParamsSchema
>
export const GetResultsLapChartDataParamsSchema = z.object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
})
export type GetResultsLapChartDataParams = z.infer<
    typeof GetResultsLapChartDataParamsSchema
>
export const GetResultsLapDataParamsSchema = z
    .object({
        subsessionId: z.number(),
        simsessionNumber: z.number(),
        customerId: z.number().optional(),
        teamId: z.number().optional(),
    })
    .refine((data) => Boolean(data.customerId) || Boolean(data.teamId))
export type GetResultsLapDataParams = z.infer<
    typeof GetResultsLapDataParamsSchema
>
export const GetResultsLapDataOptionsSchema = z.object({
    getAllChunks: z.boolean().optional(),
})
export type GetResultsLapDataOptions = z.infer<
    typeof GetResultsLapDataOptionsSchema
>

// Result Response Types
export const ResultAllowedLicenseSchema = z.object({
    groupName: z.string(),
    licenseGroup: z.number(),
    maxLicenseLevel: z.number(),
    minLicenseLevel: z.number(),
    parentId: z.number(),
})

export const CarInClassSchema = z.object({
    carId: z.number(),
})

export const ResultCarClassSchema = z.object({
    carClassId: z.number(),
    shortName: z.string(),
    name: z.string(),
    strengthOfField: z.number(),
    numEntries: z.number(),
    carsInClass: z.array(CarInClassSchema),
})

export const RaceSummarySchema = z.object({
    subsessionId: z.number(),
    averageLap: z.number(),
    lapsComplete: z.number(),
    numCautions: z.number(),
    numCautionLaps: z.number(),
    numLeadChanges: z.number(),
    fieldStrength: z.number(),
    numOptLaps: z.number(),
    hasOptPath: z.boolean(),
    specialEventType: z.number(),
    specialEventTypeText: z.string(),
})

export const LiverySchema = z.object({
    carId: z.number(),
    pattern: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    numberFont: z.number(),
    numberColor1: z.string(),
    numberColor2: z.string(),
    numberColor3: z.string(),
    numberSlant: z.number(),
    sponsor1: z.number(),
    sponsor2: z.number(),
    carNumber: z.string(),
    wheelColor: z.string().nullable(),
    rimType: z.number(),
})

export const ResultSchema = z.object({
    custId: z.number(),
    displayName: z.string(),
    aggregateChampPoints: z.number(),
    ai: z.boolean(),
    averageLap: z.number(),
    bestLapNum: z.number(),
    bestLapTime: z.number(),
    bestNlapsNum: z.number(),
    bestNlapsTime: z.number(),
    bestQualLapAt: z.string(),
    bestQualLapNum: z.number(),
    bestQualLapTime: z.number(),
    carClassId: z.number(),
    carClassName: z.string(),
    carClassShortName: z.string(),
    carId: z.number(),
    carName: z.string(),
    champPoints: z.number(),
    classInterval: z.number(),
    clubId: z.number(),
    clubName: z.string(),
    clubPoints: z.number(),
    clubShortname: z.string(),
    countryCode: z.string(),
    division: z.number(),
    divisionName: z.string(),
    dropRace: z.boolean(),
    finishPosition: z.number(),
    finishPositionInClass: z.number(),
    friend: z.boolean(),
    helmet: HelmetSchema,
    incidents: z.number(),
    interval: z.number(),
    lapsComplete: z.number(),
    lapsLead: z.number(),
    leagueAggPoints: z.number(),
    leaguePoints: z.number(),
    licenseChangeOval: z.number(),
    licenseChangeRoad: z.number(),
    livery: LiverySchema,
    maxPctFuelFill: z.number(),
    multiplier: z.number(),
    newCpi: z.number(),
    newLicenseLevel: z.number(),
    newSubLevel: z.number(),
    newTtrating: z.number(),
    newiRating: z.number(),
    oldCpi: z.number(),
    oldLicenseLevel: z.number(),
    oldSubLevel: z.number(),
    oldTtrating: z.number(),
    oldiRating: z.number(),
    optLapsComplete: z.number(),
    position: z.number(),
    qualLapTime: z.number(),
    reasonOut: z.string(),
    reasonOutId: z.number(),
    startingPosition: z.number(),
    startingPositionInClass: z.number(),
    suit: SuitSchema,
    watched: z.boolean(),
    weightPenaltyKg: z.number(),
})

export const WeatherResultSchema = z.object({
    avgSkies: z.number(),
    avgCloudCoverPct: z.number(),
    minCloudCoverPct: z.number(),
    maxCloudCoverPct: z.number(),
    tempUnits: z.number(),
    avgTemp: z.number(),
    minTemp: z.number(),
    maxTemp: z.number(),
    avgRelHumidity: z.number(),
    windUnits: z.number(),
    avgWindSpeed: z.number(),
    minWindSpeed: z.number(),
    maxWindSpeed: z.number(),
    avgWindDir: z.number(),
    maxFog: z.number(),
    fogTimePct: z.number(),
    precipTimePct: z.number(),
    precipMm: z.number(),
    precipMm2hrBeforeSession: z.number(),
    simulatedStartTime: z.string(),
})

export const SessionResultSchema = z.object({
    simsessionNumber: z.number(),
    simsessionName: z.string(),
    simsessionType: z.number(),
    simsessionTypeName: z.string(),
    simsessionSubtype: z.number(),
    weatherResult: WeatherResultSchema,
    results: z.array(ResultSchema),
})

export const SessionSplitSchema = z.object({
    subsessionId: z.number(),
    eventStrengthOfField: z.number(),
})

export const ResultTrackSchema = z.object({
    category: z.string(),
    categoryId: z.number(),
    configName: z.string(),
    trackId: z.number(),
    trackName: z.string(),
})

export const GetResultResponseSchema = z.object({
    subsessionId: z.number(),
    allowedLicenses: z.array(ResultAllowedLicenseSchema),
    associatedSubsessionIds: z.array(z.number()),
    canProtest: z.boolean(),
    carClasses: z.array(ResultCarClassSchema),
    cautionType: z.number(),
    cooldownMinutes: z.number(),
    cornersPerLap: z.number(),
    damageModel: z.number(),
    driverChangeParam1: z.number(),
    driverChangeParam2: z.number(),
    driverChangeRule: z.number(),
    driverChanges: z.boolean(),
    endTime: z.string(),
    eventAverageLap: z.number(),
    eventBestLapTime: z.number(),
    eventLapsComplete: z.number(),
    eventStrengthOfField: z.number(),
    eventType: z.number(),
    eventTypeName: z.string(),
    heatInfoId: z.number(),
    licenseCategory: z.string(),
    licenseCategoryId: z.number(),
    limitMinutes: z.number(),
    maxTeamDrivers: z.number(),
    maxWeeks: z.number(),
    minTeamDrivers: z.number(),
    numCautionLaps: z.number(),
    numCautions: z.number(),
    numDrivers: z.number(),
    numLapsForQualAverage: z.number(),
    numLapsForSoloAverage: z.number(),
    numLeadChanges: z.number(),
    officialSession: z.boolean(),
    pointsType: z.string(),
    privateSessionId: z.number(),
    raceSummary: RaceSummarySchema,
    raceWeekNum: z.number(),
    resultsRestricted: z.boolean(),
    seasonId: z.number(),
    seasonName: z.string(),
    seasonQuarter: z.number(),
    seasonShortName: z.string(),
    seasonYear: z.number(),
    seriesId: z.number(),
    seriesLogo: z.string(),
    seriesName: z.string(),
    seriesShortName: z.string(),
    sessionId: z.number(),
    sessionResults: z.array(SessionResultSchema),
    sessionSplits: z.array(SessionSplitSchema),
    specialEventType: z.number(),
    startTime: z.string(),
    track: ResultTrackSchema,
    trackState: TrackStateSchema,
    weather: WeatherSchema,
})

export type GetResultResponse = z.infer<typeof GetResultResponseSchema>

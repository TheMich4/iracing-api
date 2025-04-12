import { z } from 'zod'
import {
    FarmSchema,
    HelmetSchema,
    TrackStateSchema,
    WeatherSchema,
} from './common'
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
export const GetSeasonResultsParamsSchema = z.object({
    seasonId: z.number(),
    eventType: z.number(),
    raceWeekNumber: z.number(),
})
export type GetSeasonResultsParams = z.infer<
    typeof GetSeasonResultsParamsSchema
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
export const BasicLiverySchema = z.object({
    carId: z.number(),
    pattern: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
})
export type Livery = z.infer<typeof BasicLiverySchema>

export const LiverySchema = BasicLiverySchema.extend({
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

export const GetSeasonResultsResponseSchema = z.object({
    success: z.boolean(),
    seasonId: z.number(),
    raceWeekNum: z.number(),
    eventType: z.number(),
    resultsList: z.array(
        z.object({
            sessionId: z.number(),
            subsessionId: z.number(),
            raceWeekNum: z.number(),
            carClasses: z.array(
                z.object({
                    carClassId: z.number(),
                    shortName: z.string(),
                    name: z.string(),
                    numEntries: z.number(),
                    strengthOfField: z.number(),
                })
            ),
            driverChanges: z.boolean(),
            eventBestLapTime: z.number(),
            eventStrengthOfField: z.number(),
            eventType: z.number(),
            eventTypeName: z.string(),
            farm: FarmSchema,
            numCautionLaps: z.number(),
            numCautions: z.number(),
            numDrivers: z.number(),
            numLeadChanges: z.number(),
            officialSession: z.boolean(),
            startTime: z.string(),
            track: z.object({
                configName: z.string(),
                trackId: z.number(),
                trackName: z.string(),
            }),
            winnerHelmet: HelmetSchema,
            winnerId: z.number(),
            winnerLicenseLevel: z.number(),
            winnerName: z.string(),
        })
    ),
})

export type GetSeasonResultsResponse = z.infer<
    typeof GetSeasonResultsResponseSchema
>

export const SearchSeriesParamsSchema = z
    .object({
        seasonYear: z.number().optional(),
        seasonQuarter: z.number().optional(),
        startRangeBegin: z.string().optional(),
        startRangeEnd: z.string().optional(),
        finishRangeBegin: z.string().optional(),
        finishRangeEnd: z.string().optional(),
        customerId: z.number().optional(),
        teamId: z.number().optional(),
        seriesId: z.number().optional(),
        raceWeekNum: z.number().optional(),
        officialOnly: z.boolean().optional(),
        eventTypes: z.array(z.number()).optional(),
        categoryIds: z.array(z.number()).optional(),
    })
    .refine(
        (data) => {
            if (
                data.seasonYear !== undefined ||
                data.seasonQuarter !== undefined
            ) {
                return (
                    data.seasonYear !== undefined &&
                    data.seasonQuarter !== undefined
                )
            }
            return true
        },
        {
            message:
                'Both seasonYear and seasonQuarter must be provided if either is used',
        }
    )

export type SearchSeriesParams = z.infer<typeof SearchSeriesParamsSchema>

export const SearchSeriesChunkInfoSchema = z.object({
    base_download_url: z.string(),
    chunk_file_names: z.array(z.string()),
})

export const SearchSeriesDataSchema = z.object({
    success: z.boolean(),
    chunk_info: SearchSeriesChunkInfoSchema,
})

export const SearchSeriesResponseSchema = z.object({
    data: SearchSeriesDataSchema,
})

export type SearchSeriesResponse = z.infer<typeof SearchSeriesResponseSchema>

export const LapDataTrackSchema = z.object({
    configName: z.string(),
    trackId: z.number(),
    trackName: z.string(),
})

export const SessionInfoSchema = z.object({
    subsessionId: z.number(),
    sessionId: z.number(),
    simsessionNumber: z.number(),
    simsessionType: z.number(),
    simsessionName: z.string(),
    numLapsForQualAverage: z.number(),
    numLapsForSoloAverage: z.number(),
    eventType: z.number(),
    eventTypeName: z.string(),
    privateSessionId: z.number(),
    seasonName: z.string(),
    seasonShortName: z.string(),
    seriesName: z.string(),
    seriesShortName: z.string(),
    startTime: z.string(),
    track: LapDataTrackSchema,
})

export const ChunkInfoSchema = z.object({
    chunkSize: z.number(),
    numChunks: z.number(),
    rows: z.number(),
    baseDownloadUrl: z.string(),
    chunkFileNames: z.array(z.string()),
})

export const LapDataLiverySchema = z.object({
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

export const LapDataHelmetSchema = z.object({
    pattern: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    face_type: z.number(),
    helmet_type: z.number(),
})

export const LapChartDataItemSchema = z.object({
    groupId: z.number(),
    name: z.string(),
    custId: z.number(),
    displayName: z.string(),
    lapNumber: z.number(),
    flags: z.number(),
    incident: z.boolean(),
    sessionTime: z.number(),
    sessionStartTime: z.string().nullable(),
    lapTime: z.number(),
    teamFastestLap: z.boolean(),
    personalBestLap: z.boolean(),
    helmet: z.object({
        pattern: z.number(),
        color1: z.string(),
        color2: z.string(),
        color3: z.string(),
        faceType: z.number(),
        helmetType: z.number(),
    }),
    licenseLevel: z.number(),
    carNumber: z.string(),
    lapEvents: z.array(z.string()),
    lapPosition: z.number(),
    interval: z.number().nullable(),
    intervalUnits: z.string().nullable(),
    fastestLap: z.boolean(),
    ai: z.boolean(),
})

export type LapChartDataItem = z.infer<typeof LapChartDataItemSchema>

export const LapDataItemSchema = z.object({
    group_id: z.number(),
    name: z.string(),
    cust_id: z.number(),
    display_name: z.string(),
    lap_number: z.number(),
    flags: z.number(),
    incident: z.boolean(),
    session_time: z.number(),
    session_start_time: z.string().nullable(),
    lap_time: z.number(),
    team_fastest_lap: z.boolean(),
    personal_best_lap: z.boolean(),
    helmet: LapDataHelmetSchema,
    license_level: z.number(),
    car_number: z.string(),
    lap_events: z.array(z.string()),
    ai: z.boolean(),
})

export type LapDataItem = z.infer<typeof LapDataItemSchema>

export const GetResultsLapChartDataResponseSchema = z.object({
    success: z.boolean(),
    sessionInfo: SessionInfoSchema,
    chunkInfo: ChunkInfoSchema,
    bestLapNum: z.number(),
    bestLapTime: z.number(),
    bestNlapsNum: z.number(),
    bestNlapsTime: z.number(),
    bestQualLapNum: z.number(),
    bestQualLapTime: z.number(),
    bestQualLapAt: z.string().nullable(),
    lapChartData: z.array(LapChartDataItemSchema).optional(),
})

export type GetResultsLapChartDataResponse = z.infer<
    typeof GetResultsLapChartDataResponseSchema
>
export const GetResultsLapDataResponseSchema = z.object({
    success: z.boolean(),
    sessionInfo: SessionInfoSchema,
    bestLapNum: z.number(),
    bestLapTime: z.number(),
    bestNlapsNum: z.number(),
    bestNlapsTime: z.number(),
    bestQualLapNum: z.number(),
    bestQualLapTime: z.number(),
    bestQualLapAt: z.string().nullable(),
    chunkInfo: ChunkInfoSchema,
    lastUpdated: z.string(),
    groupId: z.number(),
    custId: z.number(),
    name: z.string(),
    carId: z.number(),
    licenseLevel: z.number(),
    livery: LapDataLiverySchema,
})

export type GetResultsLapDataResponse = z.infer<
    typeof GetResultsLapDataResponseSchema
>

export const GetResultsLapDataWithChunksResponseSchema = z.object({
    ...GetResultsLapDataResponseSchema.shape,
    lapData: z.array(LapDataItemSchema),
})

export type GetResultsLapDataWithChunksResponse = z.infer<
    typeof GetResultsLapDataWithChunksResponseSchema
>

export const SearchHostedParamsSchema = z.object({
    startRangeBegin: z.string().datetime().optional(),
    startRangeEnd: z.string().datetime().optional(),
    finishRangeBegin: z.string().datetime().optional(),
    finishRangeEnd: z.string().datetime().optional(),
    custId: z.number().optional(),
    teamId: z.number().optional(),
    hostCustId: z.number().optional(),
    sessionName: z.string().optional(),
    leagueId: z.number().optional(),
    leagueSeasonId: z.number().optional(),
    carId: z.number().optional(),
    trackId: z.number().optional(),
    categoryIds: z.array(z.number()).optional(),
})
export type SearchHostedParams = z.infer<typeof SearchHostedParamsSchema>

// Schemas for SearchHosted response
export const SearchHostedChunkInfoSchema = z.object({
    chunk_size: z.number(),
    num_chunks: z.number(),
    rows: z.number(),
    base_download_url: z.string().url(),
    chunk_file_names: z.array(z.string()),
})

export const SearchHostedResponseParamsSchema = z.object({
    start_range_begin: z.string().datetime().optional(),
    start_range_end: z.string().datetime().optional(),
    finish_range_begin: z.string().datetime().optional(),
    finish_range_end: z.string().datetime().optional(),
    cust_id: z.number().optional(),
    team_id: z.number().optional(),
    host_cust_id: z.number().optional(),
    session_name: z.string().optional(),
    league_id: z.number().optional(),
    league_season_id: z.number().optional(),
    car_id: z.number().optional(),
    track_id: z.number().optional(),
    category_ids: z.array(z.number()).optional(),
})

export const SearchHostedDataSchema = z.object({
    success: z.boolean(),
    chunk_info: SearchHostedChunkInfoSchema,
    params: SearchHostedResponseParamsSchema.optional(),
})

export const SearchHostedResponseSchema = z.object({
    type: z.literal('search_hosted_results'),
    data: SearchHostedDataSchema,
})
export type SearchHostedResponse = z.infer<typeof SearchHostedResponseSchema>

export const EventLogItemSchema = z.object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
    sessionTime: z.number(),
    eventSeq: z.number(),
    eventCode: z.number(),
    groupId: z.number(),
    custId: z.number(),
    lapNumber: z.number(),
    description: z.string(),
    message: z.string(),
    displayName: z.string(),
})

export type EventLogItem = z.infer<typeof EventLogItemSchema>

export const GetResultsEventLogResponseSchema = z.object({
    success: z.boolean(),
    chunkInfo: ChunkInfoSchema.optional(),
    eventLog: z.array(EventLogItemSchema).optional(),
})

export type GetResultsEventLogResponse = z.infer<
    typeof GetResultsEventLogResponseSchema
>

export const GetResultsEventLogWithChunksResponseSchema = z.object({
    success: z.boolean(),
    chunkInfo: ChunkInfoSchema.optional(),
    eventLog: z.array(EventLogItemSchema),
})

export type GetResultsEventLogWithChunksResponse = z.infer<
    typeof GetResultsEventLogWithChunksResponseSchema
>

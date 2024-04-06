import * as z from 'zod'

import {
    CarTypeSchema,
    CategorySchema,
    EligSchema,
    EventTypeSchema,
    FarmSchema,
    HostSchema,
    LicenseGroupTypeSchema,
    SessionTypeSchema,
    TrackStateSchema,
    TrackTypeEnumSchema,
    WeatherSchema,
} from './common'

export const TrackTypeElementSchema = z.object({
    trackType: TrackTypeEnumSchema,
})
export type TrackTypeElement = z.infer<typeof TrackTypeElementSchema>

export const HostedTrackSchema = z.object({
    configName: z.union([z.null(), z.string()]).optional(),
    trackId: z.number(),
    trackName: z.string(),
})
export type HostedTrack = z.infer<typeof HostedTrackSchema>

export const HostedCarSchema = z.object({
    carClassId: z.number(),
    carClassName: z.string(),
    carId: z.number(),
    carName: z.string(),
    maxDryTireSets: z.number(),
    maxPctFuelFill: z.number(),
    packageId: z.number(),
    powerAdjustPct: z.number(),
    qualSetupFilename: z.union([z.null(), z.string()]).optional(),
    qualSetupId: z.union([z.number(), z.null()]).optional(),
    raceSetupFilename: z.union([z.null(), z.string()]).optional(),
    raceSetupId: z.union([z.number(), z.null()]).optional(),
    weightPenaltyKg: z.number(),
})
export type HostedCar = z.infer<typeof HostedCarSchema>

export const HostedSessionSchema = z.object({
    admins: z.array(HostSchema),
    aiAvoidPlayers: z.boolean(),
    aiMaxSkill: z.union([z.number(), z.null()]).optional(),
    aiMinSkill: z.union([z.number(), z.null()]).optional(),
    aiRosterName: z.union([z.null(), z.string()]).optional(),
    allowedClubs: z.array(z.any()),
    allowedLeagues: z.array(z.any()),
    allowedTeams: z.array(z.any()),
    altAssetId: z.union([z.number(), z.null()]).optional(),
    carTypes: z.array(CarTypeSchema),
    cars: z.array(HostedCarSchema),
    carsLeft: z.number(),
    category: CategorySchema,
    categoryId: z.number(),
    consecCautionsSingleFile: z.boolean(),
    countByCarClassId: z.record(z.string(), z.number()),
    countByCarId: z.record(z.string(), z.number()),
    damageModel: z.number(),
    disallowVirtualMirror: z.boolean(),
    doNotCountCautionLaps: z.boolean(),
    doNotPaintCars: z.boolean(),
    driverChangeRule: z.number(),
    driverChanges: z.boolean(),
    elig: EligSchema,
    enablePitlaneCollisions: z.boolean(),
    entryCount: z.number(),
    eventTypes: z.array(EventTypeSchema),
    farm: FarmSchema,
    fixedSetup: z.boolean(),
    fullCourseCautions: z.boolean(),
    greenWhiteCheckeredLimit: z.number(),
    hardcoreLevel: z.number(),
    host: HostSchema,
    incidentLimit: z.number(),
    incidentWarnMode: z.number(),
    incidentWarnParam1: z.number(),
    incidentWarnParam2: z.number(),
    launchAt: z.string(),
    leagueId: z.number(),
    leagueSeasonId: z.number(),
    licenseGroupTypes: z.array(LicenseGroupTypeSchema),
    loneQualify: z.boolean(),
    luckyDog: z.boolean(),
    maxAiDrivers: z.number(),
    maxDrivers: z.number(),
    maxIr: z.number(),
    maxLicenseLevel: z.number(),
    maxTeamDrivers: z.number(),
    minIr: z.number(),
    minLicenseLevel: z.number(),
    minTeamDrivers: z.number(),
    multiclassType: z.number(),
    mustUseDiffTireTypesInRace: z.boolean(),
    noLapperWaveArounds: z.boolean(),
    numFastTows: z.number(),
    numOptLaps: z.number(),
    openRegExpires: z.string(),
    orderId: z.number(),
    paceCarClassId: z.union([z.number(), z.null()]),
    paceCarId: z.union([z.number(), z.null()]),
    passwordProtected: z.boolean(),
    pitsInUse: z.number(),
    practiceLength: z.number(),
    privateSessionId: z.number(),
    qualifierMustStartRace: z.boolean(),
    qualifyLaps: z.number(),
    qualifyLength: z.number(),
    raceLaps: z.number(),
    raceLength: z.number(),
    registeredTeams: z.union([z.array(z.number()), z.null()]).optional(),
    restarts: z.number(),
    restrictResults: z.boolean(),
    restrictViewing: z.boolean(),
    rollingStarts: z.boolean(),
    sessionDesc: z.union([z.null(), z.string()]).optional(),
    sessionFull: z.boolean(),
    sessionId: z.number(),
    sessionName: z.string(),
    sessionType: z.number(),
    sessionTypes: z.array(SessionTypeSchema),
    shortParadeLap: z.boolean(),
    startOnQualTire: z.boolean(),
    startZone: z.boolean(),
    status: z.number(),
    subsessionId: z.number(),
    teamEntryCount: z.number(),
    telemetryForceToDisk: z.number(),
    telemetryRestriction: z.number(),
    timeLimit: z.number(),
    track: HostedTrackSchema,
    trackState: TrackStateSchema,
    trackTypes: z.array(TrackTypeElementSchema),
    unsportConductRuleMode: z.number(),
    warmupLength: z.number(),
    weather: WeatherSchema,
})
export type HostedSession = z.infer<typeof HostedSessionSchema>

export const HostedSessionsSchema = z.object({
    subscribed: z.boolean(),
    sessions: z.array(HostedSessionSchema),
    success: z.boolean(),
})
export type HostedSessions = z.infer<typeof HostedSessionsSchema>

export const FriendSchema = z.object({
    custId: z.number(),
    displayName: z.string(),
})
export type Friend = z.infer<typeof FriendSchema>

export const HostedCombinedSessionsSchema = z.object({
    subscribed: z.boolean(),
    sequence: z.number(),
    sessions: z.array(HostedSessionSchema),
    success: z.boolean(),
})
export type HostedCombinedSessions = z.infer<
    typeof HostedCombinedSessionsSchema
>

// Params
export const GetHostedCombinedSessionsParamsSchema = z.object({
    packageId: z.number().optional(),
})
export type GetHostedCombinedSessionsParams = z.infer<
    typeof GetHostedCombinedSessionsParamsSchema
>

import * as z from 'zod'

import {
    CarTypeSchema,
    EligSchema,
    EventTypeSchema,
    FarmSchema,
    HelmetSchema,
    HostSchema,
    LicenseGroupTypeSchema,
    SessionTypeSchema,
    TrackStateSchema,
    TrackTypeSchema,
    WeatherSchema,
} from './common'

export const LeagueTrackSchema = z.object({
    trackId: z.number(),
    trackName: z.string(),
    configName: z.union([z.null(), z.string()]).optional(),
})
export type LeagueTrack = z.infer<typeof LeagueTrackSchema>

export const ImageSchema = z.object({
    largeLogo: z.union([z.null(), z.string()]),
    smallLogo: z.string(),
})
export type Image = z.infer<typeof ImageSchema>

export const LeagueCarSchema = z.object({
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
export type LeagueCar = z.infer<typeof LeagueCarSchema>

export const SessionSchema = z.object({
    admin: z.boolean(),
    admins: z.array(HostSchema),
    aiAvoidPlayers: z.boolean(),
    aiMaxSkill: z.union([z.number(), z.null()]).optional(),
    aiMinSkill: z.union([z.number(), z.null()]).optional(),
    aiRosterName: z.union([z.null(), z.string()]).optional(),
    allowedClubs: z.array(z.any()),
    allowedLeagues: z.array(z.number()),
    allowedTeams: z.array(z.any()),
    availableReservedBroadcasterSlots: z.number(),
    availableSpectatorSlots: z.number(),
    broadcaster: z.boolean(),
    canBroadcast: z.boolean(),
    canJoin: z.boolean(),
    canSpot: z.boolean(),
    canWatch: z.boolean(),
    carTypes: z.array(CarTypeSchema),
    cars: z.array(LeagueCarSchema),
    carsLeft: z.number(),
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
    endTime: z.string(),
    entryCount: z.number(),
    eventTypes: z.array(EventTypeSchema),
    farm: FarmSchema,
    fixedSetup: z.boolean(),
    friends: z.array(z.any()),
    fullCourseCautions: z.boolean(),
    greenWhiteCheckeredLimit: z.number(),
    hardcoreLevel: z.number(),
    host: HostSchema,
    image: z.union([ImageSchema, z.null()]).optional(),
    incidentLimit: z.number(),
    incidentWarnMode: z.number(),
    incidentWarnParam1: z.number(),
    incidentWarnParam2: z.number(),
    isHeatRacing: z.boolean(),
    launchAt: z.string(),
    leagueId: z.number(),
    leagueName: z.string(),
    leagueSeasonId: z.number(),
    leagueSeasonName: z.union([z.null(), z.string()]).optional(),
    licenseGroupTypes: z.array(LicenseGroupTypeSchema),
    loneQualify: z.boolean(),
    luckyDog: z.boolean(),
    maxAiDrivers: z.number(),
    maxDrivers: z.number(),
    maxIr: z.number(),
    maxLicenseLevel: z.number(),
    maxTeamDrivers: z.number(),
    maxUsers: z.number(),
    minIr: z.number(),
    minLicenseLevel: z.number(),
    minTeamDrivers: z.number(),
    multiclassType: z.number(),
    mustUseDiffTireTypesInRace: z.boolean(),
    noLapperWaveArounds: z.boolean(),
    numBroadcasters: z.number(),
    numDrivers: z.number(),
    numFastTows: z.number(),
    numOptLaps: z.number(),
    numSpectatorSlots: z.number(),
    numSpectators: z.number(),
    numSpotters: z.number(),
    openRegExpires: z.string(),
    orderId: z.number(),
    owner: z.boolean(),
    paceCarClassId: z.null(),
    paceCarId: z.null(),
    passwordProtected: z.boolean(),
    pitsInUse: z.number(),
    populated: z.boolean(),
    practiceLength: z.number(),
    privateSessionId: z.number(),
    qualifierMustStartRace: z.boolean(),
    qualifyLaps: z.number(),
    qualifyLength: z.number(),
    raceLaps: z.number(),
    raceLength: z.number(),
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
    track: LeagueTrackSchema,
    trackState: TrackStateSchema,
    trackTypes: z.array(TrackTypeSchema),
    unsportConductRuleMode: z.number(),
    warmupLength: z.number(),
    watched: z.array(z.any()),
    weather: WeatherSchema,
})
export type Session = z.infer<typeof SessionSchema>

export const CustLeagueSessionsSchema = z.object({
    mine: z.boolean(),
    sequence: z.number(),
    sessions: z.array(SessionSchema),
    subscribed: z.boolean(),
    success: z.boolean(),
})
export type CustLeagueSessions = z.infer<typeof CustLeagueSessionsSchema>

export const OwnerSchema = z.object({
    carNumber: z.null(),
    custId: z.number(),
    displayName: z.string(),
    helmet: HelmetSchema,
    nickName: z.null(),
})
export type Owner = z.infer<typeof OwnerSchema>

export const ResultsPageSchema = z.object({
    about: z.union([z.null(), z.string()]).optional(),
    created: z.string(),
    isAdmin: z.boolean(),
    isMember: z.boolean(),
    leagueId: z.number(),
    leagueName: z.string(),
    owner: OwnerSchema,
    ownerId: z.number(),
    pendingApplication: z.boolean(),
    pendingInvitation: z.boolean(),
    recruiting: z.boolean(),
    rosterCount: z.number(),
    url: z.union([z.null(), z.string()]).optional(),
})
export type ResultsPage = z.infer<typeof ResultsPageSchema>

export const LeagueDirectorySchema = z.object({
    resultsPage: z.array(ResultsPageSchema),
    success: z.boolean(),
    lowerbound: z.number(),
    upperbound: z.number(),
    rowCount: z.number(),
})
export type LeagueDirectory = z.infer<typeof LeagueDirectorySchema>

// Params

export const GetCustLeagueSessionsParamsSchema = z.object({
    mine: z.boolean().optional(),
    packageId: z.number().optional(),
})
export type GetCustLeagueSessionsParams = z.infer<
    typeof GetCustLeagueSessionsParamsSchema
>

export const GetLeagueDirectoryParamsSchema = z.object({
    lowerbound: z.number().optional(),
    maximumRosterCount: z.number().optional(),
    minimumRosterCount: z.number().optional(),
    order: z.string().optional(),
    restrictToFriends: z.boolean().optional(),
    restrictToMember: z.boolean().optional(),
    restrictToRecruiting: z.boolean().optional(),
    restrictToWatched: z.boolean().optional(),
    search: z.string().optional(),
    sort: z.string().optional(),
    tag: z.string().optional(),
    upperbound: z.number().optional(),
})
export type GetLeagueDirectoryParams = z.infer<
    typeof GetLeagueDirectoryParamsSchema
>

export const GetLeagueDataParamsSchema = z.object({
    leagueId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetLeagueDataParams = z.infer<typeof GetLeagueDataParamsSchema>

export const GetLeaguePointSystemParamsSchema = z.object({
    leagueId: z.number(),
    seasonId: z.number().optional(),
})
export type GetLeaguePointSystemParams = z.infer<
    typeof GetLeaguePointSystemParamsSchema
>

export const getLeagueMembershipParamsSchema = z.object({
    customerId: z.number().optional(),
    includeLeague: z.boolean().optional(),
})
export type GetLeagueMembershipParams = z.infer<
    typeof getLeagueMembershipParamsSchema
>

export const GetLeagueSeasonsParamsSchema = z.object({
    leagueId: z.number(),
    retired: z.boolean().optional(),
})
export type GetLeagueSeasonsParams = z.infer<
    typeof GetLeagueSeasonsParamsSchema
>

export const GetLeagueSeasonStandingsParamsSchema = z.object({
    carClassId: z.number().optional(),
    carId: z.number().optional(),
    leagueId: z.number(),
    seasonId: z.number(),
})
export type GetLeagueSeasonStandingsParams = z.infer<
    typeof GetLeagueSeasonStandingsParamsSchema
>

export const GetLeagueSeasonSessionsParamsSchema = z.object({
    leagueId: z.number(),
    resultsOnly: z.boolean().optional(),
    seasonId: z.number(),
})
export type GetLeagueSeasonSessionsParams = z.infer<
    typeof GetLeagueSeasonSessionsParamsSchema
>

export const GetLeagueRosterParamsSchema = z.object({
    leagueId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetLeagueRosterParams = z.infer<typeof GetLeagueRosterParamsSchema>

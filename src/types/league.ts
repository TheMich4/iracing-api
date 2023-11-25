import * as z from "zod";

export const WeatherSchema = z.object({
    "version": z.number(),
    "type": z.number(),
    "tempUnits": z.number(),
    "tempValue": z.number(),
    "relHumidity": z.number(),
    "fog": z.number(),
    "windDir": z.number(),
    "windUnits": z.number(),
    "windValue": z.number(),
    "skies": z.number(),
    "weatherVarInitial": z.number(),
    "weatherVarOngoing": z.number(),
    "timeOfDay": z.number(),
    "simulatedStartTime": z.coerce.date(),
    "simulatedTimeMultiplier": z.number(),
    "simulatedTimeOffsets": z.union([z.array(z.number()), z.null()]).optional(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const TrackTypeSchema = z.object({
    "trackType": z.string(),
});
export type TrackType = z.infer<typeof TrackTypeSchema>;

export const TrackStateSchema = z.object({
    "leaveMarbles": z.boolean(),
    "practiceRubber": z.number(),
    "qualifyRubber": z.number(),
    "warmupRubber": z.number(),
    "raceRubber": z.number(),
    "practiceGripCompound": z.number(),
    "qualifyGripCompound": z.number(),
    "warmupGripCompound": z.number(),
    "raceGripCompound": z.number(),
});
export type TrackState = z.infer<typeof TrackStateSchema>;

export const TrackSchema = z.object({
    "trackId": z.number(),
    "trackName": z.string(),
    "configName": z.union([z.null(), z.string()]).optional(),
});
export type Track = z.infer<typeof TrackSchema>;

export const SessionTypeSchema = z.object({
    "sessionType": z.number(),
});
export type SessionType = z.infer<typeof SessionTypeSchema>;

export const LicenseGroupTypeSchema = z.object({
    "licenseGroupType": z.number(),
});
export type LicenseGroupType = z.infer<typeof LicenseGroupTypeSchema>;

export const ImageSchema = z.object({
    "smallLogo": z.string(),
    "largeLogo": z.union([z.null(), z.string()]),
});
export type Image = z.infer<typeof ImageSchema>;

export const FarmSchema = z.object({
    "farmId": z.number(),
    "displayName": z.string(),
    "imagePath": z.string(),
    "displayed": z.boolean(),
});
export type Farm = z.infer<typeof FarmSchema>;

export const EventTypeSchema = z.object({
    "eventType": z.number(),
});
export type EventType = z.infer<typeof EventTypeSchema>;

export const EligSchema = z.object({
    "sessionFull": z.boolean(),
    "canSpot": z.boolean(),
    "canWatch": z.boolean(),
    "canDrive": z.boolean(),
    "hasSessPassword": z.boolean(),
    "needsPurchase": z.boolean(),
    "ownCar": z.boolean(),
    "ownTrack": z.boolean(),
    "purchaseSkus": z.array(z.number()),
    "registered": z.boolean(),
});
export type Elig = z.infer<typeof EligSchema>;

export const CarSchema = z.object({
    "carId": z.number(),
    "carName": z.string(),
    "carClassId": z.number(),
    "carClassName": z.string(),
    "maxPctFuelFill": z.number(),
    "weightPenaltyKg": z.number(),
    "powerAdjustPct": z.number(),
    "maxDryTireSets": z.number(),
    "packageId": z.number(),
    "qualSetupId": z.union([z.number(), z.null()]).optional(),
    "qualSetupFilename": z.union([z.null(), z.string()]).optional(),
    "raceSetupId": z.union([z.number(), z.null()]).optional(),
    "raceSetupFilename": z.union([z.null(), z.string()]).optional(),
});
export type Car = z.infer<typeof CarSchema>;

export const CarTypeSchema = z.object({
    "carType": z.string(),
});
export type CarType = z.infer<typeof CarTypeSchema>;

export const HelmetSchema = z.object({
    "pattern": z.number(),
    "color1": z.string(),
    "color2": z.string(),
    "color3": z.string(),
    "faceType": z.number(),
    "helmetType": z.number(),
});
export type Helmet = z.infer<typeof HelmetSchema>;

export const HostSchema = z.object({
    "custId": z.number(),
    "displayName": z.string(),
    "helmet": HelmetSchema,
});
export type Host = z.infer<typeof HostSchema>;

export const SessionSchema = z.object({
    "numDrivers": z.number(),
    "numSpotters": z.number(),
    "numSpectators": z.number(),
    "numBroadcasters": z.number(),
    "availableReservedBroadcasterSlots": z.number(),
    "numSpectatorSlots": z.number(),
    "availableSpectatorSlots": z.number(),
    "canBroadcast": z.boolean(),
    "canWatch": z.boolean(),
    "canSpot": z.boolean(),
    "elig": EligSchema,
    "driverChanges": z.boolean(),
    "restrictViewing": z.boolean(),
    "maxUsers": z.number(),
    "privateSessionId": z.number(),
    "sessionId": z.number(),
    "subsessionId": z.number(),
    "passwordProtected": z.boolean(),
    "sessionName": z.string(),
    "openRegExpires": z.coerce.date(),
    "launchAt": z.coerce.date(),
    "fullCourseCautions": z.boolean(),
    "numFastTows": z.number(),
    "rollingStarts": z.boolean(),
    "restarts": z.number(),
    "multiclassType": z.number(),
    "pitsInUse": z.number(),
    "carsLeft": z.number(),
    "maxDrivers": z.number(),
    "hardcoreLevel": z.number(),
    "practiceLength": z.number(),
    "loneQualify": z.boolean(),
    "qualifyLaps": z.number(),
    "qualifyLength": z.number(),
    "warmupLength": z.number(),
    "raceLaps": z.number(),
    "raceLength": z.number(),
    "timeLimit": z.number(),
    "restrictResults": z.boolean(),
    "incidentLimit": z.number(),
    "incidentWarnMode": z.number(),
    "incidentWarnParam1": z.number(),
    "incidentWarnParam2": z.number(),
    "unsportConductRuleMode": z.number(),
    "luckyDog": z.boolean(),
    "minTeamDrivers": z.number(),
    "maxTeamDrivers": z.number(),
    "qualifierMustStartRace": z.boolean(),
    "driverChangeRule": z.number(),
    "fixedSetup": z.boolean(),
    "entryCount": z.number(),
    "leagueId": z.number(),
    "leagueName": z.string(),
    "leagueSeasonId": z.number(),
    "leagueSeasonName": z.union([z.null(), z.string()]).optional(),
    "sessionType": z.number(),
    "orderId": z.number(),
    "minLicenseLevel": z.number(),
    "maxLicenseLevel": z.number(),
    "status": z.number(),
    "paceCarId": z.null(),
    "paceCarClassId": z.null(),
    "numOptLaps": z.number(),
    "damageModel": z.number(),
    "doNotPaintCars": z.boolean(),
    "greenWhiteCheckeredLimit": z.number(),
    "doNotCountCautionLaps": z.boolean(),
    "consecCautionsSingleFile": z.boolean(),
    "noLapperWaveArounds": z.boolean(),
    "shortParadeLap": z.boolean(),
    "startOnQualTire": z.boolean(),
    "telemetryRestriction": z.number(),
    "telemetryForceToDisk": z.number(),
    "maxAiDrivers": z.number(),
    "aiAvoidPlayers": z.boolean(),
    "mustUseDiffTireTypesInRace": z.boolean(),
    "startZone": z.boolean(),
    "enablePitlaneCollisions": z.boolean(),
    "disallowVirtualMirror": z.boolean(),
    "sessionFull": z.boolean(),
    "host": HostSchema,
    "track": TrackSchema,
    "weather": WeatherSchema,
    "trackState": TrackStateSchema,
    "farm": FarmSchema,
    "admins": z.array(HostSchema),
    "allowedClubs": z.array(z.any()),
    "allowedTeams": z.array(z.any()),
    "allowedLeagues": z.array(z.number()),
    "cars": z.array(CarSchema),
    "countByCarId": z.record(z.string(), z.number()),
    "countByCarClassId": z.record(z.string(), z.number()),
    "carTypes": z.array(CarTypeSchema),
    "trackTypes": z.array(TrackTypeSchema),
    "licenseGroupTypes": z.array(LicenseGroupTypeSchema),
    "eventTypes": z.array(EventTypeSchema),
    "sessionTypes": z.array(SessionTypeSchema),
    "canJoin": z.boolean(),
    "owner": z.boolean(),
    "admin": z.boolean(),
    "friends": z.array(z.any()),
    "watched": z.array(z.any()),
    "endTime": z.coerce.date(),
    "isHeatRacing": z.boolean(),
    "teamEntryCount": z.number(),
    "populated": z.boolean(),
    "broadcaster": z.boolean(),
    "minIr": z.number(),
    "maxIr": z.number(),
    "aiMinSkill": z.union([z.number(), z.null()]).optional(),
    "aiMaxSkill": z.union([z.number(), z.null()]).optional(),
    "aiRosterName": z.union([z.null(), z.string()]).optional(),
    "image": z.union([ImageSchema, z.null()]).optional(),
    "sessionDesc": z.union([z.null(), z.string()]).optional(),
});
export type Session = z.infer<typeof SessionSchema>;

export const CustLeagueSessionsSchema = z.object({
    "mine": z.boolean(),
    "subscribed": z.boolean(),
    "sequence": z.number(),
    "sessions": z.array(SessionSchema),
    "success": z.boolean(),
});
export type CustLeagueSessions = z.infer<typeof CustLeagueSessionsSchema>;

export const OwnerSchema = z.object({
    "custId": z.number(),
    "displayName": z.string(),
    "helmet": HelmetSchema,
    "carNumber": z.null(),
    "nickName": z.null(),
});
export type Owner = z.infer<typeof OwnerSchema>;

export const ResultsPageSchema = z.object({
    "leagueId": z.number(),
    "ownerId": z.number(),
    "leagueName": z.string(),
    "created": z.coerce.date(),
    "url": z.union([z.null(), z.string()]).optional(),
    "rosterCount": z.number(),
    "recruiting": z.boolean(),
    "isAdmin": z.boolean(),
    "isMember": z.boolean(),
    "pendingApplication": z.boolean(),
    "pendingInvitation": z.boolean(),
    "owner": OwnerSchema,
    "about": z.union([z.null(), z.string()]).optional(),
});
export type ResultsPage = z.infer<typeof ResultsPageSchema>;

export const LeagueDirectorySchema = z.object({
    "resultsPage": z.array(ResultsPageSchema),
    "success": z.boolean(),
    "lowerbound": z.number(),
    "upperbound": z.number(),
    "rowCount": z.number(),
});
export type LeagueDirectory = z.infer<typeof LeagueDirectorySchema>;

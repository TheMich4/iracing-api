import * as z from "zod";

export const SeriesAssetSchema = z.object({
    "largeImage": z.null(),
    "logo": z.string(),
    "seriesCopy": z.string(),
    "seriesId": z.number(),
    "smallImage": z.null(),
});
export type SeriesAsset= z.infer<typeof SeriesAssetSchema>;

export const SeriesAssetsSchema = z.record(SeriesAssetSchema);
export type SeriesAssets = z.infer<typeof SeriesAssetsSchema>;

export const GroupNameSchema = z.enum([
    "Class A",
    "Class B",
    "Class C",
    "Class D",
    "Pro",
    "Pro/WC",
    "Rookie",
]);
export type GroupName = z.infer<typeof GroupNameSchema>;

export const SeriesCategorySchema = z.enum([
    "dirt_oval",
    "dirt_road",
    "oval",
    "road",
]);
export type SeriesCategory = z.infer<typeof SeriesCategorySchema>;

export const AllowedLicenseSchema = z.object({
    "licenseGroup": z.number(),
    "minLicenseLevel": z.number(),
    "maxLicenseLevel": z.number(),
    "groupName": GroupNameSchema,
});
export type AllowedLicense = z.infer<typeof AllowedLicenseSchema>;

export const SeriesDataSchema = z.object({
    "allowedLicenses": z.array(AllowedLicenseSchema),
    "category": SeriesCategorySchema,
    "categoryId": z.number(),
    "eligible": z.boolean(),
    "forumUrl": z.union([z.null(), z.string()]).optional(),
    "maxStarters": z.number(),
    "minStarters": z.number(),
    "ovalCautionType": z.number(),
    "roadCautionType": z.number(),
    "seriesId": z.number(),
    "seriesName": z.string(),
    "seriesShortName": z.string(),
    "searchFilters": z.union([z.null(), z.string()]).optional(),
});
export type SeriesData = z.infer<typeof SeriesDataSchema>;

export const TrackSchema = z.object({
    "trackId": z.number(),
    "trackName": z.string(),
    "configName": z.union([z.null(), z.string()]).optional(),
});
export type Track = z.infer<typeof TrackSchema>;

export const RaceWeekSchema = z.object({
    "seasonId": z.number(),
    "raceWeekNum": z.number(),
    "track": TrackSchema,
});
export type RaceWeek = z.infer<typeof RaceWeekSchema>;

export const CarClassSchema = z.object({
    "carClassId": z.number(),
    "shortName": z.string(),
    "name": z.string(),
    "relativeSpeed": z.number(),
});
export type CarClass = z.infer<typeof CarClassSchema>;

export const LicenseGroupTypeSchema = z.object({
    "licenseGroupType": z.number(),
});
export type LicenseGroupType = z.infer<typeof LicenseGroupTypeSchema>;

export const SeasonSchema = z.object({
    "seasonId": z.number(),
    "seriesId": z.number(),
    "seasonName": z.string(),
    "seasonShortName": z.string(),
    "seasonYear": z.number(),
    "seasonQuarter": z.number(),
    "active": z.boolean(),
    "official": z.boolean(),
    "driverChanges": z.boolean(),
    "fixedSetup": z.boolean(),
    "licenseGroup": z.number(),
    "licenseGroupTypes": z.array(LicenseGroupTypeSchema),
    "carClasses": z.array(CarClassSchema),
    "raceWeeks": z.array(RaceWeekSchema),
});
export type Season = z.infer<typeof SeasonSchema>;

export const SeriesStatSchema = z.object({
    "seriesId": z.number(),
    "seriesName": z.string(),
    "seriesShortName": z.string(),
    "categoryId": z.number(),
    "category": SeriesCategorySchema,
    "active": z.boolean(),
    "official": z.boolean(),
    "fixedSetup": z.boolean(),
    "logo": z.union([z.null(), z.string()]),
    "licenseGroup": z.number(),
    "licenseGroupTypes": z.array(LicenseGroupTypeSchema),
    "allowedLicenses": z.array(AllowedLicenseSchema),
    "seasons": z.array(SeasonSchema),
    "searchFilters": z.union([z.null(), z.string()]).optional(),
});
export type SeriesStat = z.infer<typeof SeriesStatSchema>;

export const TrackTypeEnumSchema = z.enum([
    "dirt_oval",
    "dirt_road",
    "oval",
    "road",
]);
export type TrackTypeEnum = z.infer<typeof TrackTypeEnumSchema>;

export const TrackTypeSchema = z.object({
    "trackType": TrackTypeEnumSchema,
});
export type TrackType = z.infer<typeof TrackTypeSchema>;

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
    "simulatedTimeOffsets": z.array(z.number()),
    "simulatedTimeMultiplier": z.number(),
    "simulatedStartUtcTime": z.coerce.date(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const TrackStateSchema = z.object({
    "leaveMarbles": z.boolean(),
    "practiceRubber": z.union([z.number(), z.null()]).optional(),
});
export type TrackState = z.infer<typeof TrackStateSchema>;

export const RaceTimeDescriptorSchema = z.object({
    "repeating": z.boolean(),
    "superSession": z.boolean(),
    "sessionMinutes": z.number(),
    "sessionTimes": z.union([z.array(z.coerce.date()), z.null()]).optional(),
    "startDate": z.union([z.null(), z.string()]).optional(),
    "dayOffset": z.union([z.array(z.number()), z.null()]).optional(),
    "firstSessionTime": z.union([z.null(), z.string()]).optional(),
    "repeatMinutes": z.union([z.number(), z.null()]).optional(),
});
export type RaceTimeDescriptor = z.infer<typeof RaceTimeDescriptorSchema>;

export const CarRestrictionSchema = z.object({
    "carId": z.number(),
    "raceSetupId": z.union([z.number(), z.null()]).optional(),
    "maxPctFuelFill": z.number(),
    "weightPenaltyKg": z.number(),
    "powerAdjustPct": z.number(),
    "maxDryTireSets": z.number(),
    "qualSetupId": z.union([z.number(), z.null()]).optional(),
});
export type CarRestriction = z.infer<typeof CarRestrictionSchema>;

export const ScheduleSchema = z.object({
    "seasonId": z.number(),
    "raceWeekNum": z.number(),
    "seriesId": z.number(),
    "seriesName": z.string(),
    "seasonName": z.string(),
    "scheduleName": z.string(),
    "startDate": z.string(),
    "simulatedTimeMultiplier": z.number(),
    "raceLapLimit": z.union([z.number(), z.null()]),
    "raceTimeLimit": z.union([z.number(), z.null()]),
    "startType": z.string(),
    "restartType": z.string(),
    "qualAttached": z.boolean(),
    "fullCourseCautions": z.boolean(),
    "specialEventType": z.null(),
    "startZone": z.boolean(),
    "enablePitlaneCollisions": z.boolean(),
    "shortParadeLap": z.boolean(),
    "track": TrackSchema,
    "weather": WeatherSchema,
    "trackState": TrackStateSchema,
    "raceTimeDescriptors": z.array(RaceTimeDescriptorSchema),
    "carRestrictions": z.array(CarRestrictionSchema),
});
export type Schedule = z.infer<typeof ScheduleSchema>;


export const HeatSesInfoSchema = z.object({
    "heatInfoId": z.number(),
    "custId": z.number(),
    "hidden": z.boolean(),
    "created": z.coerce.date(),
    "heatInfoName": z.string(),
    "description": z.string(),
    "maxEntrants": z.number(),
    "raceStyle": z.number(),
    "openPractice": z.boolean(),
    "preQualPracticeLengthMinutes": z.number(),
    "preQualNumToMain": z.number(),
    "qualStyle": z.number(),
    "qualLengthMinutes": z.number(),
    "qualLaps": z.number(),
    "qualNumToMain": z.number(),
    "qualScoring": z.number(),
    "qualCautionType": z.number(),
    "qualOpenDelaySeconds": z.number(),
    "qualScoresChampPoints": z.boolean(),
    "heatLengthMinutes": z.number(),
    "heatLaps": z.number(),
    "heatMaxFieldSize": z.number(),
    "heatNumPositionToInvert": z.number(),
    "heatCautionType": z.number(),
    "heatNumFromEachToMain": z.number(),
    "heatScoresChampPoints": z.boolean(),
    "consolationNumToConsolation": z.number(),
    "consolationNumToMain": z.number(),
    "consolationFirstMaxFieldSize": z.number(),
    "consolationFirstSessionLengthMinutes": z.number(),
    "consolationFirstSessionLaps": z.number(),
    "consolationDeltaMaxFieldSize": z.number(),
    "consolationDeltaSessionLengthMinutes": z.number(),
    "consolationDeltaSessionLaps": z.number(),
    "consolationNumPositionToInvert": z.number(),
    "consolationScoresChampPoints": z.boolean(),
    "consolationRunAlways": z.boolean(),
    "preMainPracticeLengthMinutes": z.number(),
    "mainLengthMinutes": z.number(),
    "mainLaps": z.number(),
    "mainMaxFieldSize": z.number(),
    "mainNumPositionToInvert": z.number(),
    "heatSessionMinutesEstimate": z.number(),
});
export type HeatSesInfo = z.infer<typeof HeatSesInfoSchema>;

export const CarTypeSchema = z.object({
    "carType": z.string(),
});
export type CarType = z.infer<typeof CarTypeSchema>;

export const AllowedSeasonMemberSchema = z.object({
    "seasonId": z.number(),
    "custId": z.number(),
    "displayName": z.string(),
    "carId": z.number(),
    "carNum": z.string(),
});
export type AllowedSeasonMember = z.infer<typeof AllowedSeasonMemberSchema>;

export const SeriesSeasonSchema = z.object({
    "active": z.boolean(),
    "allowedSeasonMembers": z.union([z.record(z.string(), AllowedSeasonMemberSchema), z.null()]),
    "carClassIds": z.array(z.number()),
    "carTypes": z.array(CarTypeSchema),
    "cautionLapsDoNotCount": z.boolean(),
    "complete": z.boolean(),
    "crossLicense": z.boolean(),
    "driverChangeRule": z.number(),
    "driverChanges": z.boolean(),
    "drops": z.number(),
    "enablePitlaneCollisions": z.boolean(),
    "fixedSetup": z.boolean(),
    "greenWhiteCheckeredLimit": z.number(),
    "gridByClass": z.boolean(),
    "hardcoreLevel": z.number(),
    "ignoreLicenseForPractice": z.boolean(),
    "incidentLimit": z.number(),
    "incidentWarnMode": z.number(),
    "incidentWarnParam1": z.number(),
    "incidentWarnParam2": z.number(),
    "isHeatRacing": z.boolean(),
    "licenseGroup": z.number(),
    "licenseGroupTypes": z.array(LicenseGroupTypeSchema),
    "luckyDog": z.boolean(),
    "maxTeamDrivers": z.number(),
    "maxWeeks": z.number(),
    "minTeamDrivers": z.number(),
    "multiclass": z.boolean(),
    "mustUseDiffTireTypesInRace": z.boolean(),
    "nextRaceSession": z.null(),
    "numOptLaps": z.number(),
    "official": z.boolean(),
    "opDuration": z.number(),
    "openPracticeSessionTypeId": z.number(),
    "qualifierMustStartRace": z.boolean(),
    "raceWeek": z.number(),
    "raceWeekToMakeDivisions": z.number(),
    "regUserCount": z.number(),
    "regionCompetition": z.boolean(),
    "restrictByMember": z.boolean(),
    "restrictToCar": z.boolean(),
    "restrictViewing": z.boolean(),
    "scheduleDescription": z.string(),
    "schedules": z.array(ScheduleSchema),
    "seasonId": z.number(),
    "seasonName": z.string(),
    "seasonQuarter": z.number(),
    "seasonShortName": z.string(),
    "seasonYear": z.number(),
    "sendToOpenPractice": z.boolean(),
    "seriesId": z.number(),
    "shortParadeLap": z.boolean(),
    "startDate": z.coerce.date(),
    "startOnQualTire": z.boolean(),
    "startZone": z.boolean(),
    "trackTypes": z.array(TrackTypeSchema),
    "unsportConductRuleMode": z.number(),
    "rookieSeason": z.union([z.null(), z.string()]).optional(),
    "regOpenMinutes": z.union([z.number(), z.null()]).optional(),
    "heatSesInfo": z.union([HeatSesInfoSchema, z.null()]).optional(),
    "racePoints": z.union([z.number(), z.null()]).optional(),
});
export type SeriesSeason = z.infer<typeof SeriesSeasonSchema>;
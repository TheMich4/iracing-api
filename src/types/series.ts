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

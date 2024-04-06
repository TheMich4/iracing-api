import * as z from 'zod'

export const CategorySchema = z.enum([
    'dirt_oval',
    'dirt_road',
    'formula_car',
    'oval',
    'sports_car',
])
export type CarCategory = z.infer<typeof CategorySchema>

export const CarTypeSchema = z.object({
    carType: z.string(),
})
export type CarType = z.infer<typeof CarTypeSchema>

export const EligSchema = z.object({
    sessionFull: z.boolean(),
    canSpot: z.boolean(),
    canWatch: z.boolean(),
    canDrive: z.boolean(),
    hasSessPassword: z.boolean(),
    needsPurchase: z.boolean(),
    ownCar: z.boolean(),
    ownTrack: z.boolean(),
    purchaseSkus: z.array(z.number()),
    registered: z.boolean(),
})
export type Elig = z.infer<typeof EligSchema>

export const EventTypeSchema = z.object({
    eventType: z.number(),
})
export type EventType = z.infer<typeof EventTypeSchema>

export const FarmSchema = z.object({
    farmId: z.number(),
    displayName: z.string(),
    imagePath: z.string(),
    displayed: z.boolean(),
})
export type Farm = z.infer<typeof FarmSchema>

export const HelmetSchema = z.object({
    pattern: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    faceType: z.number(),
    helmetType: z.number(),
})
export type Helmet = z.infer<typeof HelmetSchema>

export const HostSchema = z.object({
    custId: z.number(),
    displayName: z.string(),
    helmet: HelmetSchema,
})
export type Host = z.infer<typeof HostSchema>

export const LicenseGroupTypeSchema = z.object({
    licenseGroupType: z.number(),
})
export type LicenseGroupType = z.infer<typeof LicenseGroupTypeSchema>

export const SessionTypeSchema = z.object({
    sessionType: z.number(),
})
export type SessionType = z.infer<typeof SessionTypeSchema>

export const TrackStateSchema = z.object({
    leaveMarbles: z.boolean(),
    practiceGripCompound: z.number(),
    practiceRubber: z.number(),
    qualifyGripCompound: z.number(),
    qualifyRubber: z.number(),
    raceGripCompound: z.number(),
    raceRubber: z.number(),
    warmupGripCompound: z.number(),
    warmupRubber: z.number(),
})
export type TrackState = z.infer<typeof TrackStateSchema>

export const ForecastOptionsSchema = z.object({
    forecastType: z.number(),
    precipitation: z.number(),
    skies: z.number(),
    stopPrecip: z.number(),
    temperature: z.number(),
    windDir: z.number(),
    windSpeed: z.number(),
})
export type ForecastOptions = z.infer<typeof ForecastOptionsSchema>

export const MaxPrecipRateDescSchema = z.enum([
    'Heavy',
    'Light',
    'Moderate',
    'None',
])
export type MaxPrecipRateDesc = z.infer<typeof MaxPrecipRateDescSchema>

export const WeatherSummarySchema = z.object({
    maxPrecipRate: z.union([z.number(), z.null()]).optional(),
    maxPrecipRateDesc: MaxPrecipRateDescSchema,
    precipChance: z.number(),
    skiesHigh: z.union([z.number(), z.null()]).optional(),
    skiesLow: z.union([z.number(), z.null()]).optional(),
    tempHigh: z.union([z.number(), z.null()]).optional(),
    tempLow: z.union([z.number(), z.null()]).optional(),
    tempUnits: z.union([z.number(), z.null()]).optional(),
    windHigh: z.union([z.number(), z.null()]).optional(),
    windLow: z.union([z.number(), z.null()]).optional(),
    windUnits: z.union([z.number(), z.null()]).optional(),
})
export type WeatherSummary = z.infer<typeof WeatherSummarySchema>

export const WeatherSchema = z.object({
    allowFog: z.boolean(),
    fog: z.number(),
    forecastOptions: z.union([ForecastOptionsSchema, z.null()]).optional(),
    humidityUnits: z.number(),
    precipOption: z.number(),
    relHumidity: z.number(),
    simulatedStartTime: z.string(),
    simulatedStartUtcTime: z.string(),
    simulatedTimeMultiplier: z.number(),
    simulatedTimeOffsets: z.array(z.number()),
    skies: z.number(),
    tempUnits: z.number(),
    tempValue: z.number(),
    timeOfDay: z.number(),
    trackWater: z.union([z.number(), z.null()]).optional(),
    type: z.number(),
    version: z.number(),
    weatherSummary: z.union([WeatherSummarySchema, z.null()]).optional(),
    weatherUrl: z.union([z.string(), z.null()]).optional(),
    weatherVarInitial: z.number(),
    weatherVarOngoing: z.number(),
    windDir: z.number(),
    windUnits: z.number(),
    windValue: z.number(),
})
export type Weather = z.infer<typeof WeatherSchema>

export const HeatSesInfoSchema = z.object({
    consolationDeltaMaxFieldSize: z.number(),
    consolationDeltaSessionLaps: z.number(),
    consolationDeltaSessionLengthMinutes: z.number(),
    consolationFirstMaxFieldSize: z.number(),
    consolationFirstSessionLaps: z.number(),
    consolationFirstSessionLengthMinutes: z.number(),
    consolationNumPositionToInvert: z.number(),
    consolationNumToConsolation: z.number(),
    consolationNumToMain: z.number(),
    consolationRunAlways: z.boolean(),
    consolationScoresChampPoints: z.boolean(),
    created: z.string(),
    custId: z.number(),
    heatCautionType: z.number(),
    heatInfoId: z.number(),
    heatInfoName: z.string(),
    heatLaps: z.number(),
    heatLengthMinutes: z.number(),
    heatMaxFieldSize: z.number(),
    heatNumFromEachToMain: z.number(),
    heatNumPositionToInvert: z.number(),
    heatScoresChampPoints: z.boolean(),
    heatSessionMinutesEstimate: z.number(),
    hidden: z.boolean(),
    mainLaps: z.number(),
    mainLengthMinutes: z.number(),
    mainMaxFieldSize: z.number(),
    mainNumPositionToInvert: z.number(),
    maxEntrants: z.number(),
    openPractice: z.boolean(),
    preMainPracticeLengthMinutes: z.number(),
    preQualNumToMain: z.number(),
    preQualPracticeLengthMinutes: z.number(),
    qualCautionType: z.number(),
    qualLaps: z.number(),
    qualLengthMinutes: z.number(),
    qualNumToMain: z.number(),
    qualOpenDelaySeconds: z.number(),
    qualScoresChampPoints: z.boolean(),
    qualScoring: z.number(),
    qualStyle: z.number(),
    raceStyle: z.number(),
})
export type HeatSesInfo = z.infer<typeof HeatSesInfoSchema>

export const TrackTypeEnumSchema = z.enum([
    'dirt_road',
    'dirt_oval',
    'oval',
    'road',
])
export type TrackTypeEnum = z.infer<typeof TrackTypeEnumSchema>

export const TrackTypeSchema = z.object({
    trackType: TrackTypeEnumSchema,
})
export type TrackType = z.infer<typeof TrackTypeSchema>

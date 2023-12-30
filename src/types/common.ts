import * as z from "zod";

export const CarTypeSchema = z.object({
  carType: z.string(),
});
export type CarType = z.infer<typeof CarTypeSchema>;

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
});
export type Elig = z.infer<typeof EligSchema>;

export const EventTypeSchema = z.object({
  eventType: z.number(),
});
export type EventType = z.infer<typeof EventTypeSchema>;

export const FarmSchema = z.object({
  farmId: z.number(),
  displayName: z.string(),
  imagePath: z.string(),
  displayed: z.boolean(),
});
export type Farm = z.infer<typeof FarmSchema>;

export const HelmetSchema = z.object({
  pattern: z.number(),
  color1: z.string(),
  color2: z.string(),
  color3: z.string(),
  faceType: z.number(),
  helmetType: z.number(),
});
export type Helmet = z.infer<typeof HelmetSchema>;

export const HostSchema = z.object({
  custId: z.number(),
  displayName: z.string(),
  helmet: HelmetSchema,
});
export type Host = z.infer<typeof HostSchema>;

export const LicenseGroupTypeSchema = z.object({
  licenseGroupType: z.number(),
});
export type LicenseGroupType = z.infer<typeof LicenseGroupTypeSchema>;

export const SessionTypeSchema = z.object({
  sessionType: z.number(),
});
export type SessionType = z.infer<typeof SessionTypeSchema>;

export const TrackStateSchema = z.object({
  leaveMarbles: z.boolean(),
  practiceRubber: z.number(),
  qualifyRubber: z.number(),
  warmupRubber: z.number(),
  raceRubber: z.number(),
  practiceGripCompound: z.number(),
  qualifyGripCompound: z.number(),
  warmupGripCompound: z.number(),
  raceGripCompound: z.number(),
});
export type TrackState = z.infer<typeof TrackStateSchema>;

export const WeatherSchema = z.object({
  version: z.number(),
  type: z.number(),
  tempUnits: z.number(),
  tempValue: z.number(),
  relHumidity: z.number(),
  fog: z.number(),
  windDir: z.number(),
  windUnits: z.number(),
  windValue: z.number(),
  skies: z.number(),
  weatherVarInitial: z.number(),
  weatherVarOngoing: z.number(),
  timeOfDay: z.number(),
  simulatedStartTime: z.string(),
  simulatedTimeOffsets: z.array(z.number()),
  simulatedTimeMultiplier: z.number(),
  simulatedStartUtcTime: z.string(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const HeatSesInfoSchema = z.object({
  heatInfoId: z.number(),
  custId: z.number(),
  hidden: z.boolean(),
  created: z.string(),
  heatInfoName: z.string(),
  maxEntrants: z.number(),
  raceStyle: z.number(),
  openPractice: z.boolean(),
  preQualPracticeLengthMinutes: z.number(),
  preQualNumToMain: z.number(),
  qualStyle: z.number(),
  qualLengthMinutes: z.number(),
  qualLaps: z.number(),
  qualNumToMain: z.number(),
  qualScoring: z.number(),
  qualCautionType: z.number(),
  qualOpenDelaySeconds: z.number(),
  qualScoresChampPoints: z.boolean(),
  heatLengthMinutes: z.number(),
  heatLaps: z.number(),
  heatMaxFieldSize: z.number(),
  heatNumPositionToInvert: z.number(),
  heatCautionType: z.number(),
  heatNumFromEachToMain: z.number(),
  heatScoresChampPoints: z.boolean(),
  consolationNumToConsolation: z.number(),
  consolationNumToMain: z.number(),
  consolationFirstMaxFieldSize: z.number(),
  consolationFirstSessionLengthMinutes: z.number(),
  consolationFirstSessionLaps: z.number(),
  consolationDeltaMaxFieldSize: z.number(),
  consolationDeltaSessionLengthMinutes: z.number(),
  consolationDeltaSessionLaps: z.number(),
  consolationNumPositionToInvert: z.number(),
  consolationScoresChampPoints: z.boolean(),
  consolationRunAlways: z.boolean(),
  preMainPracticeLengthMinutes: z.number(),
  mainLengthMinutes: z.number(),
  mainLaps: z.number(),
  mainMaxFieldSize: z.number(),
  mainNumPositionToInvert: z.number(),
  heatSessionMinutesEstimate: z.number(),
});
export type HeatSesInfo = z.infer<typeof HeatSesInfoSchema>;

export const TrackTypeEnumSchema = z.enum([
  "dirt_road",
  "dirt_oval",
  "oval",
  "road",
]);
export type TrackTypeEnum = z.infer<typeof TrackTypeEnumSchema>;

export const TrackTypeSchema = z.object({
  trackType: TrackTypeEnumSchema,
});
export type TrackType = z.infer<typeof TrackTypeSchema>;

import * as z from "zod";

export const TrackTypeEnumSchema = z.enum([
  "dirt_road",
  "dirt_oval",
  "oval",
  "road",
]);
export type TrackTypeEnum = z.infer<typeof TrackTypeEnumSchema>;

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
  simulatedStartTime: z.coerce.date(),
  simulatedTimeOffsets: z.union([z.array(z.number()), z.null()]).optional(),
  simulatedTimeMultiplier: z.number(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const TrackTypeElementSchema = z.object({
  trackType: TrackTypeEnumSchema,
});
export type TrackTypeElement = z.infer<typeof TrackTypeElementSchema>;

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

export const TrackSchema = z.object({
  trackId: z.number(),
  trackName: z.string(),
  configName: z.union([z.null(), z.string()]).optional(),
});
export type Track = z.infer<typeof TrackSchema>;

export const SessionTypeSchema = z.object({
  sessionType: z.number(),
});
export type SessionType = z.infer<typeof SessionTypeSchema>;

export const LicenseGroupTypeSchema = z.object({
  licenseGroupType: z.number(),
});
export type LicenseGroupType = z.infer<typeof LicenseGroupTypeSchema>;

export const FarmSchema = z.object({
  farmId: z.number(),
  displayName: z.string(),
  imagePath: z.string(),
  displayed: z.boolean(),
});
export type Farm = z.infer<typeof FarmSchema>;

export const EventTypeSchema = z.object({
  eventType: z.number(),
});
export type EventType = z.infer<typeof EventTypeSchema>;

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

export const CarSchema = z.object({
  carId: z.number(),
  carName: z.string(),
  carClassId: z.number(),
  carClassName: z.string(),
  maxPctFuelFill: z.number(),
  weightPenaltyKg: z.number(),
  powerAdjustPct: z.number(),
  maxDryTireSets: z.number(),
  packageId: z.number(),
  raceSetupId: z.union([z.number(), z.null()]).optional(),
  raceSetupFilename: z.union([z.null(), z.string()]).optional(),
  qualSetupId: z.union([z.number(), z.null()]).optional(),
  qualSetupFilename: z.union([z.null(), z.string()]).optional(),
});
export type Car = z.infer<typeof CarSchema>;

export const CarTypeSchema = z.object({
  carType: z.string(),
});
export type CarType = z.infer<typeof CarTypeSchema>;

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

export const SessionSchema = z.object({
  admins: z.array(HostSchema),
  aiAvoidPlayers: z.boolean(),
  allowedClubs: z.array(z.any()),
  allowedLeagues: z.array(z.any()),
  allowedTeams: z.array(z.any()),
  altAssetId: z.union([z.number(), z.null()]).optional(),
  carTypes: z.array(CarTypeSchema),
  cars: z.array(CarSchema),
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
  launchAt: z.coerce.date(),
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
  openRegExpires: z.coerce.date(),
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
  track: TrackSchema,
  trackState: TrackStateSchema,
  trackTypes: z.array(TrackTypeElementSchema),
  unsportConductRuleMode: z.number(),
  warmupLength: z.number(),
  weather: WeatherSchema,
  aiMaxSkill: z.union([z.number(), z.null()]).optional(),
  aiMinSkill: z.union([z.number(), z.null()]).optional(),
  aiRosterName: z.union([z.null(), z.string()]).optional(),
});
export type Session = z.infer<typeof SessionSchema>;

export const HostedSessionsSchema = z.object({
  subscribed: z.boolean(),
  sessions: z.array(SessionSchema),
  success: z.boolean(),
});
export type HostedSessions = z.infer<typeof HostedSessionsSchema>;

export const HeatSesInfoSchema = z.object({
  heatInfoId: z.number(),
  custId: z.number(),
  hidden: z.boolean(),
  created: z.coerce.date(),
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

export const FriendSchema = z.object({
  custId: z.number(),
  displayName: z.string(),
});
export type Friend = z.infer<typeof FriendSchema>;

export const HostedCombinedSessionsSchema = z.object({
  subscribed: z.boolean(),
  sequence: z.number(),
  sessions: z.array(SessionSchema),
  success: z.boolean(),
});
export type HostedCombinedSessions = z.infer<
  typeof HostedCombinedSessionsSchema
>;

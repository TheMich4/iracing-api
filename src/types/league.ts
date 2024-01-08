import * as z from "zod";

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
} from "./common";

export const LeagueTrackSchema = z.object({
  trackId: z.number(),
  trackName: z.string(),
  configName: z.union([z.null(), z.string()]).optional(),
});
export type LeagueTrack = z.infer<typeof LeagueTrackSchema>;

export const ImageSchema = z.object({
  smallLogo: z.string(),
  largeLogo: z.union([z.null(), z.string()]),
});
export type Image = z.infer<typeof ImageSchema>;

export const LeagueCarSchema = z.object({
  carId: z.number(),
  carName: z.string(),
  carClassId: z.number(),
  carClassName: z.string(),
  maxPctFuelFill: z.number(),
  weightPenaltyKg: z.number(),
  powerAdjustPct: z.number(),
  maxDryTireSets: z.number(),
  packageId: z.number(),
  qualSetupId: z.union([z.number(), z.null()]).optional(),
  qualSetupFilename: z.union([z.null(), z.string()]).optional(),
  raceSetupId: z.union([z.number(), z.null()]).optional(),
  raceSetupFilename: z.union([z.null(), z.string()]).optional(),
});
export type LeagueCar = z.infer<typeof LeagueCarSchema>;

export const SessionSchema = z.object({
  numDrivers: z.number(),
  numSpotters: z.number(),
  numSpectators: z.number(),
  numBroadcasters: z.number(),
  availableReservedBroadcasterSlots: z.number(),
  numSpectatorSlots: z.number(),
  availableSpectatorSlots: z.number(),
  canBroadcast: z.boolean(),
  canWatch: z.boolean(),
  canSpot: z.boolean(),
  elig: EligSchema,
  driverChanges: z.boolean(),
  restrictViewing: z.boolean(),
  maxUsers: z.number(),
  privateSessionId: z.number(),
  sessionId: z.number(),
  subsessionId: z.number(),
  passwordProtected: z.boolean(),
  sessionName: z.string(),
  openRegExpires: z.string(),
  launchAt: z.string(),
  fullCourseCautions: z.boolean(),
  numFastTows: z.number(),
  rollingStarts: z.boolean(),
  restarts: z.number(),
  multiclassType: z.number(),
  pitsInUse: z.number(),
  carsLeft: z.number(),
  maxDrivers: z.number(),
  hardcoreLevel: z.number(),
  practiceLength: z.number(),
  loneQualify: z.boolean(),
  qualifyLaps: z.number(),
  qualifyLength: z.number(),
  warmupLength: z.number(),
  raceLaps: z.number(),
  raceLength: z.number(),
  timeLimit: z.number(),
  restrictResults: z.boolean(),
  incidentLimit: z.number(),
  incidentWarnMode: z.number(),
  incidentWarnParam1: z.number(),
  incidentWarnParam2: z.number(),
  unsportConductRuleMode: z.number(),
  luckyDog: z.boolean(),
  minTeamDrivers: z.number(),
  maxTeamDrivers: z.number(),
  qualifierMustStartRace: z.boolean(),
  driverChangeRule: z.number(),
  fixedSetup: z.boolean(),
  entryCount: z.number(),
  leagueId: z.number(),
  leagueName: z.string(),
  leagueSeasonId: z.number(),
  leagueSeasonName: z.union([z.null(), z.string()]).optional(),
  sessionType: z.number(),
  orderId: z.number(),
  minLicenseLevel: z.number(),
  maxLicenseLevel: z.number(),
  status: z.number(),
  paceCarId: z.null(),
  paceCarClassId: z.null(),
  numOptLaps: z.number(),
  damageModel: z.number(),
  doNotPaintCars: z.boolean(),
  greenWhiteCheckeredLimit: z.number(),
  doNotCountCautionLaps: z.boolean(),
  consecCautionsSingleFile: z.boolean(),
  noLapperWaveArounds: z.boolean(),
  shortParadeLap: z.boolean(),
  startOnQualTire: z.boolean(),
  telemetryRestriction: z.number(),
  telemetryForceToDisk: z.number(),
  maxAiDrivers: z.number(),
  aiAvoidPlayers: z.boolean(),
  mustUseDiffTireTypesInRace: z.boolean(),
  startZone: z.boolean(),
  enablePitlaneCollisions: z.boolean(),
  disallowVirtualMirror: z.boolean(),
  sessionFull: z.boolean(),
  host: HostSchema,
  track: LeagueTrackSchema,
  weather: WeatherSchema,
  trackState: TrackStateSchema,
  farm: FarmSchema,
  admins: z.array(HostSchema),
  allowedClubs: z.array(z.any()),
  allowedTeams: z.array(z.any()),
  allowedLeagues: z.array(z.number()),
  cars: z.array(LeagueCarSchema),
  countByCarId: z.record(z.string(), z.number()),
  countByCarClassId: z.record(z.string(), z.number()),
  carTypes: z.array(CarTypeSchema),
  trackTypes: z.array(TrackTypeSchema),
  licenseGroupTypes: z.array(LicenseGroupTypeSchema),
  eventTypes: z.array(EventTypeSchema),
  sessionTypes: z.array(SessionTypeSchema),
  canJoin: z.boolean(),
  owner: z.boolean(),
  admin: z.boolean(),
  friends: z.array(z.any()),
  watched: z.array(z.any()),
  endTime: z.string(),
  isHeatRacing: z.boolean(),
  teamEntryCount: z.number(),
  populated: z.boolean(),
  broadcaster: z.boolean(),
  minIr: z.number(),
  maxIr: z.number(),
  aiMinSkill: z.union([z.number(), z.null()]).optional(),
  aiMaxSkill: z.union([z.number(), z.null()]).optional(),
  aiRosterName: z.union([z.null(), z.string()]).optional(),
  image: z.union([ImageSchema, z.null()]).optional(),
  sessionDesc: z.union([z.null(), z.string()]).optional(),
});
export type Session = z.infer<typeof SessionSchema>;

export const CustLeagueSessionsSchema = z.object({
  mine: z.boolean(),
  subscribed: z.boolean(),
  sequence: z.number(),
  sessions: z.array(SessionSchema),
  success: z.boolean(),
});
export type CustLeagueSessions = z.infer<typeof CustLeagueSessionsSchema>;

export const OwnerSchema = z.object({
  custId: z.number(),
  displayName: z.string(),
  helmet: HelmetSchema,
  carNumber: z.null(),
  nickName: z.null(),
});
export type Owner = z.infer<typeof OwnerSchema>;

export const ResultsPageSchema = z.object({
  leagueId: z.number(),
  ownerId: z.number(),
  leagueName: z.string(),
  created: z.string(),
  url: z.union([z.null(), z.string()]).optional(),
  rosterCount: z.number(),
  recruiting: z.boolean(),
  isAdmin: z.boolean(),
  isMember: z.boolean(),
  pendingApplication: z.boolean(),
  pendingInvitation: z.boolean(),
  owner: OwnerSchema,
  about: z.union([z.null(), z.string()]).optional(),
});
export type ResultsPage = z.infer<typeof ResultsPageSchema>;

export const LeagueDirectorySchema = z.object({
  resultsPage: z.array(ResultsPageSchema),
  success: z.boolean(),
  lowerbound: z.number(),
  upperbound: z.number(),
  rowCount: z.number(),
});
export type LeagueDirectory = z.infer<typeof LeagueDirectorySchema>;

// Params

export const GetCustLeagueSessionsParamsSchema = z.object({
  mine: z.boolean().optional(),
  packageId: z.number().optional(),
});
export type GetCustLeagueSessionsParams = z.infer<
  typeof GetCustLeagueSessionsParamsSchema
>;

export const GetLeagueDirectoryParamsSchema = z.object({
  search: z.string().optional(),
  tag: z.string().optional(),
  restrictToMember: z.boolean().optional(),
  restrictToRecruiting: z.boolean().optional(),
  restrictToFriends: z.boolean().optional(),
  restrictToWatched: z.boolean().optional(),
  minimumRosterCount: z.number().optional(),
  maximumRosterCount: z.number().optional(),
  lowerbound: z.number().optional(),
  upperbound: z.number().optional(),
  sort: z.string().optional(),
  order: z.string().optional(),
});
export type GetLeagueDirectoryParams = z.infer<
  typeof GetLeagueDirectoryParamsSchema
>;

export const GetLeagueDataParamsSchema = z.object({
  leagueId: z.number(),
  includeLicenses: z.boolean().optional(),
});
export type GetLeagueDataParams = z.infer<typeof GetLeagueDataParamsSchema>;

export const GetLeaguePointSystemParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number().optional(),
});
export type GetLeaguePointSystemParams = z.infer<
  typeof GetLeaguePointSystemParamsSchema
>;

export const getLeagueMembershipParamsSchema = z.object({
  customerId: z.number().optional(),
  includeLeague: z.boolean().optional(),
});
export type GetLeagueMembershipParams = z.infer<
  typeof getLeagueMembershipParamsSchema
>;

export const GetLeagueSeasonsParamsSchema = z.object({
  leagueId: z.number(),
  retired: z.boolean().optional(),
});
export type GetLeagueSeasonsParams = z.infer<
  typeof GetLeagueSeasonsParamsSchema
>;

export const GetLeagueSeasonStandingsParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number(),
  carClassId: z.number().optional(),
  carId: z.number().optional(),
});
export type GetLeagueSeasonStandingsParams = z.infer<
  typeof GetLeagueSeasonStandingsParamsSchema
>;

export const GetLeagueSeasonSessionsParamsSchema = z.object({
  leagueId: z.number(),
  seasonId: z.number(),
  resultsOnly: z.boolean().optional(),
});
export type GetLeagueSeasonSessionsParams = z.infer<
  typeof GetLeagueSeasonSessionsParamsSchema
>;

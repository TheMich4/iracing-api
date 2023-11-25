import * as z from "zod";

export const TrackMapLayersSchema = z.object({
  background: z.string(),
  inactive: z.string(),
  active: z.string(),
  pitroad: z.string(),
  startFinish: z.string(),
  turns: z.string(),
});
export type TrackMapLayers = z.infer<typeof TrackMapLayersSchema>;

export const TrackAssetSchema = z.object({
  coordinates: z.string(),
  detailCopy: z.string(),
  detailTechspecsCopy: z.union([z.string(), z.null()]),
  detailVideo: z.null(),
  folder: z.string(),
  galleryImages: z.union([z.null(), z.string()]),
  galleryPrefix: z.union([z.null(), z.string()]),
  largeImage: z.string(),
  logo: z.string(),
  north: z.union([z.string(), z.null()]),
  numSvgImages: z.number(),
  smallImage: z.string(),
  trackId: z.number(),
  trackMap: z.string(),
  trackMapLayers: TrackMapLayersSchema,
});
export type TrackAssetValue = z.infer<typeof TrackAssetSchema>;

export const TrackAssetsSchema = z.record(TrackAssetSchema);
export type TrackAssets = z.infer<typeof TrackAssetsSchema>;

export const TrackCategorySchema = z.enum([
  "dirt_oval",
  "dirt_road",
  "oval",
  "road",
]);
export type TrackCategory = z.infer<typeof TrackCategorySchema>;

export const TrackTypeSchema = z.object({
  trackType: TrackCategorySchema,
});
export type TrackType = z.infer<typeof TrackTypeSchema>;

export const TrackSchema = z.object({
  aiEnabled: z.boolean(),
  allowPitlaneCollisions: z.boolean(),
  allowRollingStart: z.boolean(),
  allowStandingStart: z.boolean(),
  awardExempt: z.boolean(),
  category: TrackCategorySchema,
  categoryId: z.number(),
  closes: z.string(),
  configName: z.union([z.null(), z.string()]).optional(),
  cornersPerLap: z.number(),
  created: z.coerce.date(),
  firstSale: z.coerce.date(),
  freeWithSubscription: z.boolean(),
  fullyLit: z.boolean(),
  gridStalls: z.number(),
  hasOptPath: z.boolean(),
  hasShortParadeLap: z.boolean(),
  hasStartZone: z.boolean(),
  hasSvgMap: z.boolean(),
  isDirt: z.boolean(),
  isOval: z.boolean(),
  isPsPurchasable: z.boolean(),
  lapScoring: z.number(),
  latitude: z.number(),
  location: z.string(),
  longitude: z.number(),
  maxCars: z.number(),
  nightLighting: z.boolean(),
  nominalLapTime: z.number(),
  numberPitstalls: z.number(),
  opens: z.string(),
  packageId: z.number(),
  pitRoadSpeedLimit: z.union([z.number(), z.null()]).optional(),
  price: z.number(),
  priceDisplay: z.union([z.string(), z.null()]).optional(),
  priority: z.number(),
  purchasable: z.boolean(),
  qualifyLaps: z.number(),
  restartOnLeft: z.boolean(),
  retired: z.boolean(),
  searchFilters: z.string(),
  siteUrl: z.union([z.null(), z.string()]).optional(),
  sku: z.number(),
  soloLaps: z.number(),
  startOnLeft: z.boolean(),
  supportsGripCompound: z.boolean(),
  techTrack: z.boolean(),
  timeZone: z.string(),
  trackConfigLength: z.number(),
  trackDirpath: z.string(),
  trackId: z.number(),
  trackName: z.string(),
  trackTypes: z.array(TrackTypeSchema),
  banking: z.union([z.null(), z.string()]).optional(),
});
export type Track = z.infer<typeof TrackSchema>;

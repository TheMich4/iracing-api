import * as z from "zod";

import { HelmetSchema } from "./common";

export const SuitSchema = z.object({
  pattern: z.number(),
  color1: z.string(),
  color2: z.string(),
  color3: z.string(),
  bodyType: z.number(),
});
export type Suit = z.infer<typeof SuitSchema>;

export const RestrictionsSchema = z.object({});
export type Restrictions = z.infer<typeof RestrictionsSchema>;

export const DirtOvalSchema = z.object({
  categoryId: z.number(),
  category: z.string(),
  licenseLevel: z.number(),
  safetyRating: z.number(),
  cpi: z.number(),
  irating: z.number(),
  ttRating: z.number(),
  mprNumRaces: z.number(),
  color: z.string(),
  groupName: z.string(),
  groupId: z.number(),
  proPromotable: z.boolean(),
  mprNumTts: z.number(),
});
export type DirtOval = z.infer<typeof DirtOvalSchema>;

export const LicensesSchema = z.object({
  oval: DirtOvalSchema,
  road: DirtOvalSchema,
  dirtOval: DirtOvalSchema,
  dirtRoad: DirtOvalSchema,
});
export type Licenses = z.infer<typeof LicensesSchema>;

export const PackageSchema = z.object({
  packageId: z.number(),
  contentIds: z.array(z.number()),
});
export type Package = z.infer<typeof PackageSchema>;

export const AccountSchema = z.object({
  irDollars: z.number(),
  irCredits: z.number(),
  status: z.string(),
});
export type Account = z.infer<typeof AccountSchema>;

export const MemberInfoSchema = z.object({
  custId: z.number(),
  email: z.string(),
  username: z.string(),
  displayName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  onCarName: z.string(),
  memberSince: z.string(),
  lastTestTrack: z.number(),
  lastTestCar: z.number(),
  lastSeason: z.number(),
  flags: z.number(),
  clubId: z.number(),
  clubName: z.string(),
  connectionType: z.string(),
  downloadServer: z.string(),
  lastLogin: z.string(),
  readCompRules: z.string(),
  account: AccountSchema,
  helmet: HelmetSchema,
  suit: SuitSchema,
  licenses: LicensesSchema,
  carPackages: z.array(PackageSchema),
  trackPackages: z.array(PackageSchema),
  otherOwnedPackages: z.array(z.number()),
  dev: z.boolean(),
  alphaTester: z.boolean(),
  broadcaster: z.boolean(),
  restrictions: RestrictionsSchema,
  hasReadCompRules: z.boolean(),
  flagsHex: z.string(),
  hundredPctClub: z.boolean(),
  twentyPctDiscount: z.boolean(),
  raceOfficial: z.boolean(),
  ai: z.boolean(),
  bypassHostedPassword: z.boolean(),
  readTc: z.string(),
  readPp: z.string(),
  hasReadTc: z.boolean(),
  hasReadPp: z.boolean(),
});
export type MemberInfo = z.infer<typeof MemberInfoSchema>;

export const MemberParticipationCreditSchema = z.object({
  custId: z.number(),
  seasonId: z.number(),
  seriesId: z.number(),
  seriesName: z.string(),
  licenseGroup: z.number(),
  licenseGroupName: z.string(),
  participationCredits: z.number(),
  minWeeks: z.number(),
  weeks: z.number(),
  earnedCredits: z.number(),
  totalCredits: z.number(),
});
export type MemberParticipationCredit = z.infer<
  typeof MemberParticipationCreditSchema
>;

// Params

export const GetMemberAwardsParamsSchema = z.object({
  customerId: z.number(),
});
export type GetMemberAwardsParams = z.infer<typeof GetMemberAwardsParamsSchema>;
export const GetMemberChartDataParamsSchema = z.object({
  customerId: z.number().optional(),
  categoryId: z.number(),
  chartType: z.string(),
});
export type GetMemberChartDataParams = z.infer<
  typeof GetMemberChartDataParamsSchema
>;
export const GetMemberDataParamsSchema = z.object({
  customerIds: z.array(z.string()),
  includeLicenses: z.boolean().optional(),
});
export type GetMemberDataParams = z.infer<typeof GetMemberDataParamsSchema>;
export const GetMemberProfileParamsSchema = z.object({
  customerId: z.number().optional(),
});
export type GetMemberProfileParams = z.infer<
  typeof GetMemberProfileParamsSchema
>;

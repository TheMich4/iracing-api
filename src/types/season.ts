import { z } from "zod";

// Params
export const GetSeasonListParamsSchema = z.object({
  seasonYear: z.number(),
  seasonQuarter: z.number(),
});
export type GetSeasonListParams = z.infer<typeof GetSeasonListParamsSchema>;
export const GetSeasonRaceGuideParamsSchema = z.object({
  from: z.string().optional(),
  includeEndAfterFrom: z.boolean().optional(),
});
export type GetSeasonRaceGuideParams = z.infer<
  typeof GetSeasonRaceGuideParamsSchema
>;
export const GetSpectatorSubsessionIdsParamsSchema = z.object({
  eventTypes: z.array(z.number()).optional(),
});
export type GetSpectatorSubsessionIdsParams = z.infer<
  typeof GetSpectatorSubsessionIdsParamsSchema
>;

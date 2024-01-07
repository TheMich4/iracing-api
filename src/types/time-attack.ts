import { z } from "zod";

// Params
//
export const GetTimeAttackSeasonParamsSchema = z.object({
  seasonId: z.number(),
});
export type GetTimeAttackSeasonParams = z.infer<
  typeof GetTimeAttackSeasonParamsSchema
>;

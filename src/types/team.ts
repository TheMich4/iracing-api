import { z } from 'zod'

// Params

export const GetTeamDataParamsSchema = z.object({
    teamId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetTeamDataParams = z.infer<typeof GetTeamDataParamsSchema>

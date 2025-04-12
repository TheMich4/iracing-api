import { z } from 'zod'

// Params

export const GetTeamDataParamsSchema = z.object({
    teamId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetTeamDataParams = z.infer<typeof GetTeamDataParamsSchema>

// Response
export const GetTeamDataResponseSchema = z.object({
    teamId: z.number(),
    ownerId: z.number(),
    teamName: z.string(),
    created: z.string(),
    hidden: z.boolean(),
    about: z.string(),
    url: z.string(),
    rosterCount: z.number(),
    recruiting: z.boolean(),
    privateWall: z.boolean(),
    isDefault: z.boolean(),
    isOwner: z.boolean(),
    isAdmin: z.boolean(),
    suit: z.object({
        pattern: z.number(),
        color1: z.string(),
        color2: z.string(),
        color3: z.string(),
    }),
    owner: z.object({
        custId: z.number(),
        displayName: z.string(),
        helmet: z.object({
            pattern: z.number(),
            color1: z.string(),
            color2: z.string(),
            color3: z.string(),
            faceType: z.number(),
            helmetType: z.number(),
        }),
        owner: z.boolean(),
        admin: z.boolean(),
    }),
    tags: z.object({
        categorized: z.array(z.string()),
        notCategorized: z.array(z.string()),
    }),
    teamApplications: z.array(z.unknown()),
    pendingRequests: z.array(z.unknown()),
    isMember: z.boolean(),
    isApplicant: z.boolean(),
    isInvite: z.boolean(),
    isIgnored: z.boolean(),
    roster: z.array(
        z.object({
            custId: z.number(),
            displayName: z.string(),
            helmet: z.object({
                pattern: z.number(),
                color1: z.string(),
                color2: z.string(),
                color3: z.string(),
                faceType: z.number(),
                helmetType: z.number(),
            }),
            owner: z.boolean(),
            admin: z.boolean(),
        })
    ),
})
export type GetTeamDataResponse = z.infer<typeof GetTeamDataResponseSchema>

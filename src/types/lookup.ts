import * as z from 'zod'

export const CountrySchema = z.object({
    countryName: z.string(),
    countryCode: z.string(),
})
export type Country = z.infer<typeof CountrySchema>

export const LevelSchema = z.object({
    licenseId: z.number(),
    licenseGroup: z.number(),
    license: z.string(),
    shortName: z.string(),
    licenseLetter: z.string(),
    color: z.string(),
})
export type Level = z.infer<typeof LevelSchema>

export const LicenseSchema = z.object({
    licenseGroup: z.number(),
    groupName: z.string(),
    minNumRaces: z.union([z.number(), z.null()]),
    participationCredits: z.number(),
    minSrToFastTrack: z.union([z.number(), z.null()]),
    levels: z.array(LevelSchema),
    minNumTt: z.union([z.number(), z.null()]),
})
export type License = z.infer<typeof LicenseSchema>

// Params
export const GetClubHistoryParamsSchema = z.object({
    seasonYear: z.number(),
    seasonQuarter: z.number(),
})
export type GetClubHistoryParams = z.infer<typeof GetClubHistoryParamsSchema>

export const GetDriversParamsSchema = z.object({
    searchTerm: z.string(),
    leagueId: z.number().optional(),
})
export type GetDriversParams = z.infer<typeof GetDriversParamsSchema>

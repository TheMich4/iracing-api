import { z } from 'zod'

// Params
export const GetResultParamsSchema = z.object({
    subsessionId: z.number(),
    includeLicenses: z.boolean().optional(),
})
export type GetResultParams = z.infer<typeof GetResultParamsSchema>
export const getResultsEventLogParamsSchema = z.object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
})
export type GetResultsEventLogParams = z.infer<
    typeof getResultsEventLogParamsSchema
>
export const GetResultsLapChartDataParamsSchema = z.object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
})
export type GetResultsLapChartDataParams = z.infer<
    typeof GetResultsLapChartDataParamsSchema
>
export const GetResultsLapDataParamsSchema = z
    .object({
        subsessionId: z.number(),
        simsessionNumber: z.number(),
        customerId: z.number().optional(),
        teamId: z.number().optional(),
    })
    .refine((data) => Boolean(data.customerId) || Boolean(data.teamId))
export type GetResultsLapDataParams = z.infer<
    typeof GetResultsLapDataParamsSchema
>
export const GetResultsLapDataOptionsSchema = z.object({
    getAllChunks: z.boolean().optional(),
})
export type GetResultsLapDataOptions = z.infer<
    typeof GetResultsLapDataOptionsSchema
>

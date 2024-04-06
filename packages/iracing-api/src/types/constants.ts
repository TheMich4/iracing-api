import * as z from 'zod'

export const ConstantCategorySchema = z.object({
    label: z.string(),
    value: z.number(),
})
export type Category = z.infer<typeof ConstantCategorySchema>

export const DivisionSchema = z.object({
    label: z.string(),
    value: z.number(),
})
export type Division = z.infer<typeof DivisionSchema>

export const EventSchema = z.object({
    label: z.string(),
    value: z.number(),
})
export type Event = z.infer<typeof EventSchema>

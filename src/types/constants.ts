import * as z from "zod";

export const CategorySchema = z.object({
  label: z.string(),
  value: z.number(),
});
export type Category = z.infer<typeof CategorySchema>;

export const DivisionSchema = z.object({
  label: z.string(),
  value: z.number(),
});
export type Division = z.infer<typeof DivisionSchema>;

export const EventSchema = z.object({
  label: z.string(),
  value: z.number(),
});
export type Event = z.infer<typeof EventSchema>;

import * as z from "zod";

export const ColorSchema = z.string();
export type Color = z.infer<typeof ColorSchema>;
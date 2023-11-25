import * as z from "zod";

export const CarsInClassSchema = z.object({
    "carDirpath": z.string(),
    "carId": z.number(),
    "retired": z.boolean(),
});
export type CarsInClass = z.infer<typeof CarsInClassSchema>;

export const CarClassSchema = z.object({
    "carClassId": z.number(),
    "carsInClass": z.array(CarsInClassSchema),
    "custId": z.number(),
    "name": z.string(),
    "relativeSpeed": z.number(),
    "shortName": z.string(),
});
export type CarClass = z.infer<typeof CarClassSchema>;

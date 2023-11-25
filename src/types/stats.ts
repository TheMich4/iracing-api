import * as z from "zod";

export const CarsDrivenSchema = z.object({
    "carId": z.number(),
    "carName": z.string(),
});
export type CarsDriven = z.infer<typeof CarsDrivenSchema>;

export const TrackSchema = z.object({
    "trackId": z.number(),
    "trackName": z.string(),
    "configName": z.string(),
});
export type Track = z.infer<typeof TrackSchema>;

export const BestSchema = z.object({
    "track": TrackSchema,
    "eventType": z.string(),
    "bestLapTime": z.number(),
    "subsessionId": z.number(),
    "endTime": z.coerce.date(),
    "seasonYear": z.number(),
    "seasonQuarter": z.number(),
});
export type Best = z.infer<typeof BestSchema>;

export const MemberBestsSchema = z.object({
    "carsDriven": z.array(CarsDrivenSchema),
    "bests": z.array(BestSchema),
    "custId": z.number(),
    "carId": z.number(),
});
export type MemberBests = z.infer<typeof MemberBestsSchema>;

export const StatSchema = z.object({
    "categoryId": z.number(),
    "category": z.string(),
    "starts": z.number(),
    "wins": z.number(),
    "top5": z.number(),
    "poles": z.number(),
    "avgStartPosition": z.number(),
    "avgFinishPosition": z.number(),
    "laps": z.number(),
    "lapsLed": z.number(),
    "avgIncidents": z.number(),
    "avgPoints": z.number(),
    "winPercentage": z.number(),
    "top5Percentage": z.number(),
    "lapsLedPercentage": z.number(),
    "totalClubPoints": z.number(),
});
export type Stat = z.infer<typeof StatSchema>;

export const MemberCareerSchema = z.object({
    "stats": z.array(StatSchema),
    "custId": z.number(),
});
export type MemberCareer = z.infer<typeof MemberCareerSchema>;

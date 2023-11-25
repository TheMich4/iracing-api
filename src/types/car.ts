import * as z from "zod";

export const CarCategorySchema = z.enum([
    "oval",
    "road",
]);
export type CarCategory = z.infer<typeof CarCategorySchema>;

export const PriceDisplaySchema = z.string();
export type PriceDisplay = z.infer<typeof PriceDisplaySchema>;

export const PaintRuleSchema = z.object({
    "paintCarAvailable": z.boolean(),
    "color1": z.string(),
    "color2": z.string(),
    "color3": z.string(),
    "sponsor1Available": z.boolean(),
    "sponsor2Available": z.boolean(),
    "sponsor1": z.string(),
    "sponsor2": z.string(),
    "paintWheelAvailable": z.union([z.boolean(), z.null()]).optional(),
    "wheelColor": z.union([z.string(), z.null()]).optional(),
    "rimTypeAvailable": z.union([z.boolean(), z.null()]).optional(),
    "rimType": z.union([z.string(), z.null()]).optional(),
    "allowNumberFontChanges": z.union([z.boolean(), z.null()]).optional(),
    "numberFont": z.union([z.null(), z.string()]).optional(),
    "allowNumberColorChanges": z.union([z.boolean(), z.null()]).optional(),
    "numberColor1": z.union([z.string(), z.null()]).optional(),
    "numberColor2": z.union([z.string(), z.null()]).optional(),
    "numberColor3": z.union([z.string(), z.null()]).optional(),
    "rulesExplanation": z.string(),
})
export type PaintRule = z.infer<typeof PaintRuleSchema>;

export const PaintRulesSchema = z.intersection(
    z.object({"restrictCustomPaint": z.union([z.boolean(), z.null()]).optional()}), 
    z.record(z.string(), PaintRuleSchema)
)
export type PaintRules = z.infer<typeof PaintRulesSchema>;

export const CarTypeSchema = z.object({
    "carType": z.string(),
});
export type CarType = z.infer<typeof CarTypeSchema>;

export const CarSchema = z.object({
    "aiEnabled": z.boolean(),
    "allowNumberColors": z.boolean(),
    "allowNumberFont": z.boolean(),
    "allowSponsor1": z.boolean(),
    "allowSponsor2": z.boolean(),
    "allowWheelColor": z.boolean(),
    "awardExempt": z.boolean(),
    "carDirpath": z.string(),
    "carId": z.number(),
    "carName": z.string(),
    "carNameAbbreviated": z.string(),
    "carTypes": z.array(CarTypeSchema),
    "carWeight": z.number(),
    "categories": z.array(CarCategorySchema),
    "created": z.coerce.date(),
    "firstSale": z.coerce.date(),
    "forumUrl": z.union([z.null(), z.string()]).optional(),
    "freeWithSubscription": z.boolean(),
    "hasHeadlights": z.boolean(),
    "hasMultipleDryTireTypes": z.boolean(),
    "hp": z.number(),
    "isPsPurchasable": z.boolean(),
    "maxPowerAdjustPct": z.number(),
    "maxWeightPenaltyKg": z.number(),
    "minPowerAdjustPct": z.number(),
    "packageId": z.number(),
    "patterns": z.number(),
    "price": z.number(),
    "priceDisplay": z.union([PriceDisplaySchema, z.null()]).optional(),
    "retired": z.boolean(),
    "searchFilters": z.string(),
    "sku": z.number(),
    "carMake": z.union([z.null(), z.string()]).optional(),
    "carModel": z.union([z.null(), z.string()]).optional(),
    "paintRules": z.union([PaintRulesSchema, z.null()]).optional(),
    "siteUrl": z.union([z.null(), z.string()]).optional(),
});
export type Car = z.infer<typeof CarSchema>;

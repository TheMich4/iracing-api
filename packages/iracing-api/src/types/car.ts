import * as z from 'zod'

import { CarTypeSchema, CategorySchema } from './common'

export const PriceDisplaySchema = z.string()
export type PriceDisplay = z.infer<typeof PriceDisplaySchema>

export const PaintRuleSchema = z.object({
    allowNumberColorChanges: z.union([z.boolean(), z.null()]).optional(),
    allowNumberFontChanges: z.union([z.boolean(), z.null()]).optional(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    numberColor1: z.union([z.string(), z.null()]).optional(),
    numberColor2: z.union([z.string(), z.null()]).optional(),
    numberColor3: z.union([z.string(), z.null()]).optional(),
    numberFont: z.union([z.null(), z.string()]).optional(),
    paintCarAvailable: z.boolean(),
    paintWheelAvailable: z.union([z.boolean(), z.null()]).optional(),
    rimType: z.union([z.string(), z.null()]).optional(),
    rimTypeAvailable: z.union([z.boolean(), z.null()]).optional(),
    rulesExplanation: z.string(),
    sponsor1: z.string(),
    sponsor1Available: z.boolean(),
    sponsor2: z.string(),
    sponsor2Available: z.boolean(),
    wheelColor: z.union([z.string(), z.null()]).optional(),
})
export type PaintRule = z.infer<typeof PaintRuleSchema>

export const PaintRulesSchema = z.intersection(
    z.object({
        restrictCustomPaint: z.union([z.boolean(), z.null()]).optional(),
    }),
    z.record(z.string(), PaintRuleSchema)
)
export type PaintRules = z.infer<typeof PaintRulesSchema>

export const CarSchema = z.object({
    aiEnabled: z.boolean(),
    allowNumberColors: z.boolean(),
    allowNumberFont: z.boolean(),
    allowSponsor1: z.boolean(),
    allowSponsor2: z.boolean(),
    allowWheelColor: z.boolean(),
    awardExempt: z.boolean(),
    carDirpath: z.string(),
    carId: z.number(),
    carMake: z.union([z.null(), z.string()]).optional(),
    carModel: z.union([z.null(), z.string()]).optional(),
    carName: z.string(),
    carNameAbbreviated: z.string(),
    carTypes: z.array(CarTypeSchema),
    carWeight: z.number(),
    categories: z.array(CategorySchema),
    created: z.string(),
    firstSale: z.string(),
    forumUrl: z.union([z.null(), z.string()]).optional(),
    freeWithSubscription: z.boolean(),
    hasHeadlights: z.boolean(),
    hasMultipleDryTireTypes: z.boolean(),
    hasRainCapableTireTypes: z.boolean(),
    hp: z.number(),
    isPsPurchasable: z.boolean(),
    maxPowerAdjustPct: z.number(),
    maxWeightPenaltyKg: z.number(),
    minPowerAdjustPct: z.number(),
    packageId: z.number(),
    paintRules: z.union([PaintRulesSchema, z.null()]).optional(),
    patterns: z.number(),
    price: z.number(),
    priceDisplay: z.union([PriceDisplaySchema, z.null()]).optional(),
    rainEnabled: z.boolean(),
    retired: z.boolean(),
    searchFilters: z.string(),
    siteUrl: z.union([z.null(), z.string()]).optional(),
    sku: z.number(),
})
export type Car = z.infer<typeof CarSchema>

export const CarAssetSchema = z.object({
    carId: z.number(),
    carRules: z.array(z.any()).optional(), // Type further if structure is known
    detailCopy: z.string().nullable().optional(),
    detailScreenShotImages: z.string().nullable().optional(),
    detailTechspecsCopy: z.string().nullable().optional(),
    folder: z.string().nullable().optional(),
    galleryImages: z.string().nullable().optional(),
    galleryPrefix: z.string().nullable().optional(),
    groupImage: z.string().nullable().optional(),
    groupName: z.string().nullable().optional(),
    largeImage: z.string().nullable().optional(),
    logo: z.string().nullable().optional(),
    smallImage: z.string().nullable().optional(),
    sponsorLogo: z.string().nullable().optional(),
    templatePath: z.string().nullable().optional(),
})
export type CarAsset = z.infer<typeof CarAssetSchema>

export const CarAssetsResponseSchema = z.record(z.string(), CarAssetSchema)
export type CarAssetsResponse = z.infer<typeof CarAssetsResponseSchema>

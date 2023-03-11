export interface CarAsset {
	carId: number;
	carRules: Array<CarRule>;
	detailCopy: string;
	detailScreenShotImages: string;
	detailTechspecsCopy: string;
	folder: string;
	galleryImages: string;
	galleryPrefix: null;
	groupImage: null;
	groupName: null;
	largeImage: string;
	logo: string;
	smallImage: string;
	sponsorLogo: null;
	templatePath: string;
}

export interface CarAssets {
	[carId: string]: CarAsset;
}

export interface CarData {
	aiEnabled: boolean;
	allowNumberColors: boolean;
	allowNumberFont: boolean;
	allowSponsor1: boolean;
	allowSponsor2: boolean;
	allowWheelColor: boolean;
	awardExempt: boolean;
	carDirpath: string;
	carId: number;
	carName: string;
	carNameAbbreviated: string;
	carTypes: Array<Record<string, string>>;
	carWeight: number;
	// TODO enum
	categories: Array<string>;
	created: string;
	firstSale: string;
	forumUrl: string;
	freeWithSubscription: boolean;
	hasHeadlights: boolean;
	hasMultipleDryTireTypes: boolean;
	hp: number;
	isPsPurchasable: boolean;
	maxPowerAdjustPct: number;
	maxWeightPenaltyKf: number;
	minPowerAdjustPt: number;
	packageId: number;
	paintRules?: CarPaintRules;
	patterns: number;
	price: number;
	priceDisplay: string;
	retired: boolean;
	searchFilters: string;
	sku: string;
}

export interface CarPackage {
	contentIds: Array<number>;
	packageId: number;
}

export interface CarPaintRule {
	AllowNumberColorChanges?: boolean;
	AllowNumberFontChanges?: boolean;
	Color1: string;
	Color2: string;
	Color3: string;
	NumberColor1?: string;
	NumberColor2?: string;
	NumberColor3?: string;
	NumberFont?: string;
	PaintCarAvailable: boolean;
	RulesExplanation: string;
	Sponsor1Available: boolean;
	Sponsor2Available: boolean;
	Sponsor1: string;
	Sponsor2: string;
}

export interface CarPaintRules {
	[id: string]: CarPaintRule;
}

export interface CarRule {
	ruleCategory: string;
	text: string;
}

export interface Livery {
	carId: number;
	carNumber: string;
	color1: string;
	color2: string;
	color3: string;
	numberColor1: string;
	numberColor2: string;
	numberColor3: string;
	numberFont: number;
	numberSlant: number;
	pattern: number;
	rimType: number;
	sponsor1: number;
	sponsor2: number;
	wheelColor: string;
}

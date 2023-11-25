export interface Track {
	category?: string; // TODO: Enum?
	categoryId?: number;
	configName: string;
	trackId: number;
	trackName: string;
}

export interface TrackPackage {
	contentIds: Array<number>;
	packageId: number;
}

export interface TrackState {
	leaveMarbles?: boolean;
	practiceGripCompound?: number;
	practiceRubber?: number;
	qualifyGripCompound?: number;
	qualifyRubber?: number;
	raceGripCompound?: number;
	raceRubber?: number;
	warmupGripCompound?: number;
	warmupRubber?: number;
}

export interface TrackMapLayers {
	active: string;
	background: string;
	inactive: string;
	pitroad: string;
	turns: string;
}

export interface TrackAsset {
	coordinates: string;
	detailCopy: string;
	detailTechspecsCopy: null;
	detailVideo: null;
	folder: string;
	galleryImages: string;
	galleryPrefix: string;
	largeImage: string;
	logo: string;
	north: string;
	numSvgImages: number;
	smallImage: string;
	trackId: number;
	trackMap: string;
	trackMapLayers: TrackMapLayers;
}

export interface TrackAssets {
	[trackId: string]: TrackAsset;
}

export interface TrackData {
	aiEnabled: boolean;
	allowPitlaneCollisions: boolean;
	allowRollingStart: boolean;
	allowStandingStart: boolean;
	awardExempt: boolean;
	category: string;
	categoryId: number;
	closes: string;
	configName: string;
	cornersPerLap: number;
	created: string;
	firstSale: string;
	freeWithSubscription: boolean;
	fullyLit: boolean;
	gridStalls: number;
	hasOptPath: boolean;
	hasShortParadeLap: boolean;
	hasStartZone: boolean;
	hasSvgMap: boolean;
	isDirt: boolean;
	isOval: boolean;
	isPsPurchasable: boolean;
	lapScoring: number;
	latitude: number;
	location: string;
	longitude: number;
	maxCars: number;
	nightLighting: boolean;
	nominalLapTime: number;
	numberPitstalls: number;
	opens: string;
	packageId: number;
	pitRoadSpeedLimit: number;
	price: number;
	priceDisplay: string;
	priority: number;
	purchasable: boolean;
	qualifyLaps: number;
	restartOnLeft: boolean;
	retired: boolean;
	searchFilters: string;
	siteUrl: string;
	sku: number;
	soloLaps: number;
	startOnLeft: boolean;
	supportsGripCompound: boolean;
	techTrack: boolean;
	timeZone: string;
	trackConfigLength: number;
	trackDirpath: string;
	trackId: number;
	trackName: string;
	trackTypes: Array<{
		trackType: string;
	}>;
}

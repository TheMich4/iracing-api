import { Helmet, Livery, Suit, Track, TrackState, Weather } from "../../types";

export interface AllowedLicense {
	groupName: string;
	licenseName: number;
	maxLicenseLevel: number;
	minLicenseLevel: number;
	parentId: number;
}

export interface CarClass {
	carClassId: number;
	carsInClass: Array<{ carId: number }>;
	name: string;
	shortName: string;
}

interface RaceSummary {
	subsessionId: number;
	averageLap: number;
	lapsComplete: number;
	numCautions: number;
	numCautionLaps: number;
	numLeadChanges: number;
	fieldStrength: number;
	numOptLaps: number;
	hasOptPath: boolean;
	specialEventType: number;
	specialEventTypeText: string;
}

export interface SessionResult {
	ai: boolean;
	aggregateChampPoints: number;
	averageLap: number;
	bestLapNum: number;
	bestLapTime: number;
	bestNlapsNum: number;
	bestNlapsTime: number;
	bestQualLapAt: string;
	bestQualLapNum: number;
	bestQualLapTime: number;
	carClassId: number;
	carClassName: string;
	carClassShortName: string;
	carId: number;
	carName: string;
	champPoints: number;
	clubId: number;
	clubName: string;
	clubPoints: number;
	clubShortname: string;
	custId: number;
	displayName: string;
	division: number;
	divisionName: string;
	dropRace: boolean;
	finishPosition: number;
	finishPositionInClass: number;
	friend: boolean;
	helmet: Helmet;
	incidents: number;
	interval: number;
	leagueAggPoints: number;
	leaguePoints: number;
	licChangeOval: number;
	licChangeRoad: number;
	livery: Livery;
	maxPctFuelFill: number;
	multiplier: number;
	newCpi: number;
	newLicenseLevel: number;
	newSubLevel: number;
	newTtrating: number;
	oldCpi: number;
	oldLicenseLevel: number;
	oldSubLevel: number;
	oldTtrating: number;
	lapsComplete: number;
	lapsLead: number;
	newiRating: number;
	oldiRating: number;
	optLapsComplete: number;
	position: number;
	qualLapTime: number;
	reasonOut: string;
	reasonOutId: number;
	startingPosition: number;
	startingPositionInClass: number;
	suit: Suit;
	weightPenaltyKg: number;
	watched: boolean;
}

export interface Session {
	results: Array<SessionResult>;
	simsessionName: string;
	simsessionNumber: number;
	simsessionSubtype: number;
	simsessionType: number;
	simsessionTypeName: string;
}

export interface Result {
	allowedLicenses: Array<AllowedLicense>;
	associatedSubsessionIds: Array<number>;
	canProtest: boolean;
	cautionType: number;
	carClasses: Array<CarClass>;
	cornersPerLap: number;
	cooldownMinutes: number;
	damageModel: number;
	driverChangeParam1: number;
	driverChangeParam2: number;
	driverChangeRule: number;
	driverChanges: boolean;
	endTime: string;
	eventAverageLap: number;
	eventLapsComplete: number;
	eventStrengthOfField: number;
	eventType: number;
	eventTypeName: string;
	heatInfoId: number;
	limitMinutes: number;
	licenseCategory: string;
	licenseCategoryId: number;
	minTeamDrivers: number;
	maxTeamDrivers: number;
	maxWeeks: number;
	numCautionLaps: number;
	numCautions: number;
	numLeadChanges: number;
	numLapsForQualAverage: number;
	numLapsForSoloAverage: number;
	officialSession: boolean;
	pointsType: string;
	privateSessionId: number;
	raceSummary: RaceSummary;
	raceWeekNum: number;
	resultsRestricted: boolean;
	seasonId: number;
	seasonName: string;
	seasonQuarter: number;
	seasonShortName: string;
	seasonYear: number;
	sessionId: number;
	sessionResults: Array<SessionResult>;
	seriesId: number;
	seriesLogo: string;
	seriesName: string;
	seriesShortName: string;
	specialEventType: number;
	startTime: string;
	subsessionId: number;
	track: Track;
	trackState: TrackState;
	weather: Weather;
}

// Params

export interface GetResultsParams {
	subsessionId: number;
	includeLicenses?: boolean;
}

export interface GetResultsEventDataParams {
	subsessionId: number;
	simsessionNumber: number;
}

export interface GetResultsLapChartDataParams {
	subsessionId: number;
	simsessionNumber: number;
}

export interface GetResultsLapDataParams {
	subsessionId: number;
	simsessionNumber: number;
	customerId?: number;
	teamId?: number;
}

export interface GetSeasonResultsParams {
	seasonId: number;
	eventType?: number;
	raceWeekNumber?: number;
}

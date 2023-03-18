import { Track, TrackState } from "./track";

import { Weather } from "../types";

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
	averageLap: number;
	fieldStrength: number;
	hasOptPath: boolean;
	lapsComplete: number;
	numCautionLaps: number;
	numCautions: number;
	numLeadChanges: number;
	numOptLaps: number;
	specialEventType: number;
	specialEventTypeText: string;
	subsessionId: number;
}

export interface Result {
	allowedLicenses: Array<AllowedLicense>;
	associatedSubsessionIds: Array<number>;
	canProtest: boolean;
	carClasses: Array<CarClass>;
	cautionType: number; // TODO: Enum?
	cooldownMinutes: number;
	cornersPerLap: number;
	damageModel: number; // TODO: Enum?
	driverChangeParam1: number;
	driverChangeParam2: number;
	driverChangeRule: number;
	driverChanges: boolean;
	endTime: string;
	eventAverageLap: number;
	eventLapsComplete: number;
	eventStrengthOfField: number;
	eventType: number; // TODO: Enum?
	eventTypeName: string; // TODO: Enum?
	heatInfoId: number;
	licenseCategory: string; // TODO: Enum?
	licenseCategoryId: number; // TODO: Enum?
	limitMinutes: number;
	maxTeamDrivers: number;
	maxWeeks: number;
	minTeamDrivers: number;
	numCautionLaps: number;
	numCautions: number;
	numLeadChanges: number;
	numLapsForQualAverage: number;
	numLapsForSoloAverage: number;
	officialSession: boolean;
	pointsType: string; // TODO: Enum?
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
	sessionResults: Array<{ results: Array<SessionResult> }>;
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

export interface SessionResult {
	aggregateChampPoints: number;
	ai: boolean;
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

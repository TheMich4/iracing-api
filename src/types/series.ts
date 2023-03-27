import { AllowedLicense, CarClass } from "./results.js";
import { Track, TrackState } from "./track.js";

import { CarRestriction } from "./car.js";
import { RaceTimeDescriptor } from "./common.js";
import { Weather } from "../types.js";

export interface Schedule {
	enablePitlaneCollisions: boolean;
	fullCourseCautions: boolean;
	qualAttached: boolean;
	raceLapLimit: number | null;
	raceTimeLimit: number | null;
	restartType: string;
	scheduleName: string;
	seasonId: number;
	seasonName: string;
	seriesId: number;
	seriesName: string;
	shortParadeLap: boolean;
	simulatedTimeMultiplier: number;
	specialEventType: unknown | null;
	startDate: string;
	startType: string;
	startZone: boolean;
}

export interface Season {
	active: boolean;
	carClasses: Array<CarClass>;
	driverChanges: boolean;
	fixedSetup: boolean;
	licenseGroup: number;
	licenseGroupTypes: Array<{ licenseGroupType: number }>;
	official: boolean;
	raceWeeks: Array<{
		raceWeekNum: number;
		seasonId: number;
		track: Track;
	}>;
	seasonId: number;
	seasonName: string;
	seasonQuarter: number;
	seasonShortName: string;
	seasonYear: number;
	seriesId: number;
}

export interface SeriesAsset {
	largeImage: string | null;
	logo: string;
	seriesCopy: string;
	seriesId: number;
	smallImage: string | null;
}

export interface SeriesData {
	allowedLicenses: Array<AllowedLicense>;
	category: string;
	categoryId: number;
	eligible: boolean;
	forumUrl: string;
	maxStarters: number;
	minStarters: number;
	ovalCautionType: number;
	roadCautionType: number;
	seriesId: number;
	seriesName: string;
	seriesShortName: string;
}

export interface SeriesSeason {
	active: boolean;
	allowedSeasonMembers: unknown | null;
	carClassIds: Array<number>;
	carTypes: Array<{ carType: string }>;
	carRestrictions: Array<CarRestriction>;
	cautionLapsDoNotCount: boolean;
	complete: boolean;
	crossLicense: boolean;
	driverChanges: boolean;
	drops: number;
	enablePitLaneCollisions: boolean;
	fixedSetup: boolean;
	greenWhiteCheckeredLimit: number;
	gridByClass: boolean;
	ignoreLicenseForPractice: boolean;
	incidentLimit: number;
	incidentWarnMode: boolean;
	incidentWarnParam1: number;
	incidentWarnParam2: number;
	isHeatRacing: boolean;
	licenseGroup: number;
	licenseGroupTypes: Array<{ licenseGroupType: number }>;
	luckyDog: boolean;
	maxTeamDrivers: number;
	maxWeeks: number;
	minTeamDrivers: number;
	multiclass: boolean;
	mustUseDiffTireTypesInRace: boolean;
	nextRaceSession: number;
	numOptLaps: number;
	official: boolean;
	opDuration: number;
	openPracticeSessionTypeId: number;
	qualifierMustStartRace: boolean;
	raceTimeDescriptors: Array<RaceTimeDescriptor>;
	raceWeek: number;
	raceWeekToMakeDivisions: number;
	regUserCount: number;
	regionCompetition: boolean;
	restrictByMember: boolean;
	restrictToCar: boolean;
	restrictViewing: boolean;
	scheduleDescription: string;
	schedules: Array<Schedule>;
	seasonId: number;
	seasonName: string;
	seasonQuarter: number;
	seasonShortName: string;
	seasonYear: number;
	sendToOpenPractice: boolean;
	seriesId: number;
	shortParadeLaps: boolean;
	startDate: string;
	startOnQualTire: boolean;
	startZone: boolean;
	track?: Track;
	trackState?: TrackState;
	trackTypes: Array<{ trackType: string }>;
	unsportConductRuleMode: number;
	weather?: Weather;
}

export interface SeriesStats {
	active: boolean;
	allowedLicenses: Array<AllowedLicense>;
	categoryId: number;
	category: string;
	fixedSetup: boolean;
	licenseGroup: number;
	licenseGroupTypes: Array<{ licenseGroupType: number }>;
	logo: string | null;
	official: boolean;
	season: Array<Season>;
	seriesId: number;
	seriesName: string;
	seriesShortName: string;
}

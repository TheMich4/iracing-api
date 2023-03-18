import { Track, TrackState } from "./track";

import { Customer } from "./member";
import { Weather } from "../types";

export interface Session {
	// TODO: Add correct types
	admins: Array<Customer>;
	aiAvoidPlayers: boolean;
	// TODO: Add correct type
	allowedClubs: Array<unknown>;
	// TODO: Add correct type
	allowedLeagues: Array<unknown>;
	// TODO: Add correct type
	allowedTeams: Array<unknown>;
	availableReservedBroadcasterSlots: number;
	availableSpectatorSlots: number;
	broadcaster: boolean;
	canBroadcast: boolean;
	canJoin: boolean;
	canSpot: boolean;
	canWatch: boolean;
	// TODO: Make sure this type is used anywhere else
	carTypes: {
		carType: string;
	};
	carsLeft: number;
	consecCautionsSingleFile: boolean;
	countByCarClassId: Record<number, number>;
	countByCarId: Record<number, number>;
	damageModel: number;
	doNotCountCautionLaps: boolean;
	doNotPaintCars: boolean;
	driverChangeRule: number;
	driverChanges: boolean;
	// TODO: Make sure this type is used anywhere else
	elig: {
		canDrive: boolean;
		canSpot: boolean;
		canWatch: boolean;
		hasSessPassword: boolean;
		needsPurchase: boolean;
		ownCar: boolean;
		ownTrack: boolean;
		// TODO: Add correct type
		purchaseSkus: Array<unknown>;
		registered: boolean;
		sessionFull: boolean;
	};
	enablePitlameCollision: boolean;
	entryCount: number;
	// TODO: Make sure this type is used anywhere else
	eventTypes: Array<{ eventType: number }>;
	// TODO: Make sure this type is used anywhere else
	farm: {
		displayName: string;
		displayed: boolean;
		farmId: number;
		imagePath: string;
	};
	fixedSetup: boolean;
	fullCourseCautions: boolean;
	greenWhiteCheckeredLimit: number;
	hardcoreLevel: number;
	host: Customer;
	incidentLimit: number;
	incidentWarnMode: boolean;
	incidentWarmParam1: number;
	incidentWarmParam2: number;
	isHeatRacing: boolean;
	launchAt: string;
	leagueId: number;
	leagueSeasonId: number;
	licenseGroupTypes: Array<{
		licenseGroupType: number;
	}>;
	loneQualify: boolean;
	luckyDog: boolean;
	maxAiDrivers: number;
	maxDrivers: number;
	maxIr: number;
	maxLicenseLevel: number;
	maxTeamDrivers: number;
	maxUsers: number;
	minIr: number;
	minLicenseLevel: number;
	minTeamDrivers: number;
	multiclassType: number;
	mustUseDiffTireTypesInRace: boolean;
	noLapperWaveArounds: boolean;
	numBroadcasters: number;
	numDrivers: number;
	numFastTows: number;
	numOptLaps: number;
	numSpectatorSlots: number;
	numSpotters: number;
	openRegExpires: string;
	orderId: number;
	paceCarClassId: number;
	paceCarId: number;
	passwordProtected: boolean;
	pitsInUse: boolean;
	populated: boolean;
	practiceLength: number;
	privateSessionId: number;
	qualifierMustStartRace: boolean;
	qualifyLaps: number;
	qualifyLength: number;
	raceLaps: number;
	raceLength: number;
	restarts: number;
	restrictResults: boolean;
	restrictViewing: boolean;
	rollingStarts: boolean;
	sessAdmin: boolean;
	sessionFull: boolean;
	sessionId: number;
	sessionName: string;
	sessionType: number;
	sessionTypes: Array<{ session_type: number }>;
	shortParadeLap: boolean;
	startOnQualTire: boolean;
	startZone: boolean;
	status: boolean;
	subsessionId: number;
	teamEntryCount: number;
	telemetryForceToDisk: number;
	telemetryRestriction: number;
	timeLimit: number;
	track: Track;
	trackState: TrackState;
	trackTypes: Array<{ track_type: string }>;
	unsportConductRuleMode: number;
	warmupLength: number;
	weather: Weather;
}

export interface SessionInfo {
	eventType: number;
	eventTypeName: string;
	privateSessionId: number;
	seasonName: string;
	seasonShortName: string;
	seriesName: string;
	seriesShortName: string;
	sessionId: number;
	simsessionName: string;
	simsessionNumber: number;
	simsessionType: number;
	startTime: string;
	subsessionId: number;
	track: Track;
}

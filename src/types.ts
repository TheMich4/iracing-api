// TODO: Clean up this file to separate files

export interface Helmet {
	color1: string;
	color2: string;
	color3: string;
	faceType: number;
	helmetType: number;
	pattern: number;
}

export interface Suit {
	bodyType: number;
	color1: string;
	color2: string;
	color3: string;
	pattern: number;
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

export interface Customer {
	custId: number;
	displayName: string;
	helmet: Helmet;
}

export interface Member extends Customer {
	ai: boolean;
	clubId: number;
	clubName: string;
	lastLogin: string;
	memberSince: string;
}

export interface Track {
	configName: string;
	trackId: number;
	trackName: string;
}

export interface TrackState {
	leaveMarbles: boolean;
	practiceRubber: number;
	qualifyRubber: number;
	warmupRubber: number;
	raceRubber: number;
	practiceGripCompound: number;
	qualifyGripCompound: number;
	warmupGripCompound: number;
	raceGripCompound: number;
}

export interface Weather {
	version: number;
	type: number;
	tempUnits: number;
	tempValue: number;
	relHumidity: number;
	fog: number;
	windDir: number;
	windUnits: number;
	windValue: number;
	skies: number;
	weatherVarInitial: number;
	weatherVarOngoing: number;
	timeOfDay: number;
	simulatedStartTime: string;
	simulatedTimeOffsets: Array<number>;
	simulatedTimeMultiplier: number;
}

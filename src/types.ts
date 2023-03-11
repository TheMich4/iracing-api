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

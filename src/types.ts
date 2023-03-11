// TODO: Clean up this file to separate files

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

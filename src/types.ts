export interface Weather {
	allowFog: boolean;
	fog: number;
	precipOption: number;
	relHumidity: number;
	simulatedStartUtcOffset: number;
	simulatedStartUtcTime: string;
	skies: number;
	tempUnits: number;
	tempValue: number;
	timeOfDay: number;
	trackWater: number;
	type: number;
	version: number;
	weatherVarInitial: number;
	weatherVarOngoing: number;
	windDir: number;
	windUnits: number;
	windValue: number;
}

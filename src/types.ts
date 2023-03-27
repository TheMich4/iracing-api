export interface Weather {
	allowFog: boolean;
	fog: number;
	precipOption: number;
	relHumidity: number;
	simulatedStartTime?: string;
	simulatedStartUtcOffset: number;
	simulatedStartUtcTime: string;
	simulatedTimeMultiplier?: number;
	simulatedTimeOffsets?: Array<number>;
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

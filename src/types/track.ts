export interface Track {
	configName: string;
	trackId: number;
	trackName: string;
}

export interface TrackPackage {
	contentIds: Array<number>;
	packageId: number;
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

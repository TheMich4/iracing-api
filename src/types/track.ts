export interface Track {
	category?: string; // TODO: Enum?
	categoryId?: number;
	configName: string;
	trackId: number;
	trackName: string;
}

export interface TrackPackage {
	contentIds: Array<number>;
	packageId: number;
}

export interface TrackState {
	leaveMarbles?: boolean;
	practiceGripCompound?: number;
	practiceRubber?: number;
	qualifyGripCompound?: number;
	qualifyRubber?: number;
	raceGripCompound?: number;
	raceRubber?: number;
	warmupGripCompound?: number;
	warmupRubber?: number;
}

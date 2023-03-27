export interface ChunkInfo {
	baseDownloadUrl: string;
	chunkFileNames: Array<string>;
	chunkSize: number;
	numChunks: number;
	rows: number;
}

export interface RaceTimeDescriptor {
	repeating: boolean;
	superSession: boolean;
	sessionMinutes: number;
	startDate: string;
	dayOffset: Array<number>;
	firstSessionTime: string;
	repeatMinutes: number;
}

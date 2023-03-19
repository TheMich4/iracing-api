export interface ChunkInfo {
	baseDownloadUrl: string;
	chunkFileNames: Array<string>;
	chunkSize: number;
	numChunks: number;
	rows: number;
}

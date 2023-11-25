import type { Track } from "./track.js";

export type CarsDriven = Array<{ carId: number; carName: string }>;

export interface MemberBest {
	track: Track;
	eventType: string;
	bestLapTime: number;
	subsessionId: number;
	endTime: string;
	seasonYear: number;
	seasonQuarter: number;
}

export interface CareerStat {
	avgFinishPosition: number;
	avgIncidents: number;
	avgPoints: number;
	avgStartPosition: number;
	category: string;
	categoryId: number;
	laps: number;
	lapsLed: number;
	lapsLedPercentage: number;
	poles: number;
	starts: number;
	top5: number;
	top5Percentage: number;
	totalClubPoints: number;
	winPercentage: number;
	wins: number;
}

export interface MemberDivision {
	division: number;
	projected: boolean;
	eventType: number;
	success: boolean;
	seasonId: number;
}

export interface YearlyStat extends CareerStat {
	year: number;
}

export interface CarInClass {
	carDirpath: string;
	carId: number;
	retired: boolean;
}

export interface CarClass {
	carClassId: number;
	carsInClass: Array<CarInClass>;
	custId: number;
	name: string;
	relativeSpeed: number;
	shortName: string;
}

// Response

export type GetCarClassesResponse = Array<CarClass>;

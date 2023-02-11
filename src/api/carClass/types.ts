export interface CarInClass {
	car_dirpath: string;
	car_id: number;
	retired: boolean;
}

export interface CarClass {
	car_class_id: number;
	cars_in_class: Array<CarInClass>;
	cust_id: number;
	name: string;
	relative_speed: number;
	short_name: string;
}

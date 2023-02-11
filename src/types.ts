// TODO: Clean up this file to separate files

export interface Helmet {
	color1: string;
	color2: string;
	color3: string;
	face_type: number;
	helmet_type: number;
	pattern: number;
}

export interface Customer {
	cust_id: number;
	display_name: string;
	helmet: Helmet;
}

export interface Track {
	config_name: string;
	track_id: number;
	track_name: string;
}

export interface TrackState {
	leave_marbles: boolean;
	practice_rubber: number;
	qualify_rubber: number;
	warmup_rubber: number;
	race_rubber: number;
	practice_grip_compound: number;
	qualify_grip_compound: number;
	warmup_grip_compound: number;
	race_grip_compound: number;
}

export interface Weather {
	version: number;
	type: number;
	temp_units: number;
	temp_value: number;
	rel_humidity: number;
	fog: number;
	wind_dir: number;
	wind_units: number;
	wind_value: number;
	skies: number;
	weather_var_initial: number;
	weather_var_ongoing: number;
	time_of_day: number;
	simulated_start_time: string;
	simulated_time_offsets: Array<number>;
	simulated_time_multiplier: number;
}

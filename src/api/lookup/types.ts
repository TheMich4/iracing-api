import { Customer } from "../../types";

export interface Club {
	club_id: number;
	club_name: string;
	region: string;
	season_quarter: number;
	season_year: number;
}

export interface Country {
	country_name: string;
	country_code: string;
}

export interface Driver extends Customer {
	profile_disabled: boolean;
}

export interface LicenseLevel {
	license_id: number;
	license_group: number;
	license: string;
	short_name: string;
	license_letter: string;
	color: string;
}

export interface License {
	license_group: number;
	group_name: string;
	min_num_races: number;
	participation_credits: number;
	min_sr_to_fast_track: number;
	levels: Array<License>;
	min_num_tt: number;
}

import { Helmet, Member, Suit } from "../../types";

export interface ChartData {
	value: number;
	when: string;
}

export interface ChartDataResponse {
	blackout: boolean;
	category_id: number;
	chart_type: number;
	cust_id: number;
	data: Array<ChartData>;
	success: boolean;
}

export interface MemberDataResponse {
	cust_ids: Array<number>;
	members: Array<Member>;
	success: boolean;
}

export interface MemberAccount {
	ir_credits: number;
	ir_dollars: number;
	status: string;
}

export interface CarPackage {
	content_ids: Array<number>;
	package_id: number;
}

export interface MemberLicense {
	category: string;
	category_id: number;
	color: string;
	cpi: number;
	group_id: number;
	group_name: string;
	irating: number;
	license_level: number;
	mpr_num_races: number;
	mpr_num_tts: number;
	pro_promotable: boolean;
	safety_rating: number;
	tt_rating: number;
}

export interface MemberLicenses {
	dirt_oval: MemberLicense;
	dirt_road: MemberLicense;
	oval: MemberLicense;
	road: MemberLicense;
}

export interface TrackPackage {
	content_ids: Array<number>;
	package_id: number;
}

export interface MemberInfo {
	account: MemberAccount;
	alpha_tester: boolean;
	ai: boolean;
	bypass_hosted_password: boolean;
	car_packages: Array<CarPackage>;
	club_id: number;
	club_name: string;
	connection_type: string;
	cust_id: number;
	display_name: string;
	download_server: string;
	email: string;
	first_name: string;
	flags: number;
	flags_hex: string;
	has_read_comp_rules: boolean;
	has_read_pp: boolean;
	has_read_tc: boolean;
	helmet: Helmet;
	hundred_pct_club: boolean;
	last_login: string;
	last_name: string;
	last_season: number;
	last_test_car: number;
	last_test_track: number;
	member_since: string;
	on_car_name: string;
	other_owned_packages: number[];
	read_comp_rules: Date;
	read_pp: Date;
	read_tc: Date;
	race_official: boolean;
	// TODO: Add type
	restrictions: Record<string, any>;
	suit: Suit;
	licenses: MemberLicenses;
	track_packages: Array<TrackPackage>;
	twenty_pct_discount: boolean;
	username: string;
	broadcaster: boolean;
	dev: boolean;
}

export interface ParticipationInformation {
	cust_id: number;
	season_id: number;
	series_id: number;
	series_name: string;
	license_group: number;
	license_group_name: string;
	participation_credits: number;
	min_weeks: number;
	weeks: number;
	earned_credits: number;
	total_credits: number;
}

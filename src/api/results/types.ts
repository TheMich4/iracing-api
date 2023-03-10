import { Helmet, Livery, Suit, Track, TrackState, Weather } from "../../types";

export interface AllowedLicense {
	group_name: string;
	license_name: number;
	max_license_level: number;
	min_license_level: number;
	parent_id: number;
}

export interface CarClass {
	car_class_id: number;
	cars_in_class: Array<{ car_id: number }>;
	name: string;
	short_name: string;
}

interface RaceSummary {
	subsession_id: number;
	average_lap: number;
	laps_complete: number;
	num_cautions: number;
	num_caution_laps: number;
	num_lead_changes: number;
	field_strength: number;
	num_opt_laps: number;
	has_opt_path: boolean;
	special_event_type: number;
	special_event_type_text: string;
}

export interface SessionResult {
	ai: boolean;
	aggregate_champ_points: number;
	average_lap: number;
	best_lap_num: number;
	best_lap_time: number;
	best_nlaps_num: number;
	best_nlaps_time: number;
	best_qual_lap_at: string;
	best_qual_lap_num: number;
	best_qual_lap_time: number;
	car_class_id: number;
	car_class_name: string;
	car_class_short_name: string;
	car_id: number;
	car_name: string;
	champ_points: number;
	club_id: number;
	club_name: string;
	club_points: number;
	club_shortname: string;
	cust_id: number;
	display_name: string;
	division: number;
	division_name: string;
	drop_race: boolean;
	finish_position: number;
	finish_position_in_class: number;
	friend: boolean;
	helmet: Helmet;
	incidents: number;
	interval: number;
	league_agg_points: number;
	league_points: number;
	lic_change_oval: number;
	lic_change_road: number;
	livery: Livery;
	max_pct_fuel_fill: number;
	multiplier: number;
	new_cpi: number;
	new_license_level: number;
	new_sub_level: number;
	new_ttrating: number;
	old_cpi: number;
	old_license_level: number;
	old_sub_level: number;
	old_ttrating: number;
	laps_complete: number;
	laps_lead: number;
	newi_rating: number;
	oldi_rating: number;
	opt_laps_complete: number;
	position: number;
	qual_lap_time: number;
	reason_out: string;
	reason_out_id: number;
	starting_position: number;
	starting_position_in_class: number;
	suit: Suit;
	weight_penalty_kg: number;
	watched: boolean;
}

export interface Session {
	results: Array<SessionResult>;
	simsession_name: string;
	simsession_number: number;
	simsession_subtype: number;
	simsession_type: number;
	simsession_type_name: string;
}

export interface Result {
	allowed_licenses: Array<AllowedLicense>;
	associated_subsession_ids: Array<number>;
	can_protest: boolean;
	caution_type: number;
	car_classes: Array<CarClass>;
	corners_per_lap: number;
	cooldown_minutes: number;
	damage_model: number;
	driver_change_param1: number;
	driver_change_param2: number;
	driver_change_rule: number;
	driver_changes: boolean;
	end_time: string;
	event_average_lap: number;
	event_laps_complete: number;
	event_strength_of_field: number;
	event_type: number;
	event_type_name: string;
	heat_info_id: number;
	limit_minutes: number;
	license_category: string;
	license_category_id: number;
	min_team_drivers: number;
	max_team_drivers: number;
	max_weeks: number;
	num_caution_laps: number;
	num_cautions: number;
	num_lead_changes: number;
	num_laps_for_qual_average: number;
	num_laps_for_solo_average: number;
	official_session: boolean;
	points_type: string;
	private_session_id: number;
	race_summary: RaceSummary;
	race_week_num: number;
	results_restricted: boolean;
	season_id: number;
	season_name: string;
	season_quarter: number;
	season_short_name: string;
	season_year: number;
	session_id: number;
	session_results: Array<SessionResult>;
	series_id: number;
	series_logo: string;
	series_name: string;
	series_short_name: string;
	special_event_type: number;
	start_time: string;
	subsession_id: number;
	track: Track;
	track_state: TrackState;
	weather: Weather;
}

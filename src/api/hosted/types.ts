import { Customer, Track, TrackState, Weather } from "../../types";

export interface Session {
	// TODO: Add correct types
	admins: Array<Customer>;
	ai_avoid_players: boolean;
	// TODO: Add correct type
	allowed_clubs: Array<any>;
	// TODO: Add correct type
	allowed_leagues: Array<any>;
	// TODO: Add correct type
	allowed_teams: Array<any>;
	available_reserved_broadcaster_slots: number;
	available_spectator_slots: number;
	broadcaster: boolean;
	can_broadcast: boolean;
	can_join: boolean;
	can_spot: boolean;
	can_watch: boolean;
	// TODO: Make sure this type is used anywhere else
	car_types: {
		car_type: string;
	};
	cars_left: number;
	consec_cautions_single_file: boolean;
	count_by_car_class_id: Record<number, number>;
	count_by_car_id: Record<number, number>;
	damage_model: number;
	do_not_count_caution_laps: boolean;
	do_not_paint_cars: boolean;
	driver_change_rule: number;
	driver_changes: boolean;
	// TODO: Make sure this type is used anywhere else
	elig: {
		can_drive: boolean;
		can_spot: boolean;
		can_watch: boolean;
		has_sess_password: boolean;
		needs_purchase: boolean;
		own_car: boolean;
		own_track: boolean;
		// TODO: Add correct type
		purchase_skus: Array<any>;
		registered: boolean;
		session_full: boolean;
	};
	enable_pitlame_collision: boolean;
	entry_count: number;
	// TODO: Make sure this type is used anywhere else
	event_types: Array<{ event_type: number }>;
	// TODO: Make sure this type is used anywhere else
	farm: {
		display_name: string;
		displayed: boolean;
		farm_id: number;
		image_path: string;
	};
	fixed_setup: boolean;
	full_course_cautions: boolean;
	green_white_checkered_limit: number;
	hardcore_level: number;
	host: Customer;
	incident_limit: number;
	incident_warn_mode: boolean;
	incident_warm_param1: number;
	incident_warm_param2: number;
	is_heat_racing: boolean;
	launch_at: string;
	league_id: number;
	league_season_id: number;
	license_group_types: Array<{
		license_group_type: number;
	}>;
	lone_qualify: boolean;
	lucky_dog: boolean;
	max_ai_drivers: number;
	max_drivers: number;
	max_ir: number;
	max_license_level: number;
	max_team_drivers: number;
	max_users: number;
	min_ir: number;
	min_license_level: number;
	min_team_drivers: number;
	multiclass_type: number;
	must_use_diff_tire_types_in_race: boolean;
	no_lapper_wave_arounds: boolean;
	num_broadcasters: number;
	num_drivers: number;
	num_fast_tows: number;
	num_opt_laps: number;
	num_spectator_slots: number;
	num_spotters: number;
	open_reg_expires: string;
	order_id: number;
	pace_car_class_id: number;
	pace_car_id: number;
	password_protected: boolean;
	pits_in_use: boolean;
	populated: boolean;
	practice_length: number;
	private_session_id: number;
	qualifier_must_start_race: boolean;
	qualify_laps: number;
	qualify_length: number;
	race_laps: number;
	race_length: number;
	restarts: number;
	restrict_results: boolean;
	restrict_viewing: boolean;
	rolling_starts: boolean;
	sess_admin: boolean;
	session_full: boolean;
	session_id: number;
	session_name: string;
	session_type: number;
	session_types: Array<{ session_type: number }>;
	short_parade_lap: boolean;
	start_on_qual_tire: boolean;
	start_zone: boolean;
	status: boolean;
	subsession_id: number;
	team_entry_count: number;
	telemetry_force_to_disk: number;
	telemetry_restriction: number;
	time_limit: number;
	track: Track;
	track_state: TrackState;
	track_types: Array<{ track_type: string }>;
	unsport_conduct_rule_mode: number;
	warmup_length: number;
	weather: Weather;
}

export interface HostedCombinedSessionsResponse {
	sequence: number;
	sessions: Array<Session>;
	subscribed: boolean;
	success: boolean;
}

export interface HostedSessionsResponse {
	sessions: Array<Session>;
	subscribed: boolean;
	success: boolean;
}

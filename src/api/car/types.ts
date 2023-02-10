export interface CarRule {
	rule_category: string;
	text: string;
}

export interface CarAsset {
	car_id: number;
	car_rules: Array<CarRule>;
	detail_copy: string;
	detail_screen_shot_images: string;
	detail_techspecs_copy: string;
	folder: string;
	gallery_images: string;
	gallery_prefix: null;
	group_image: null;
	group_name: null;
	large_image: string;
	logo: string;
	small_image: string;
	sponsor_logo: null;
	template_path: string;
}

export interface CarAssets {
	[carId: string]: CarAsset;
}

export interface CarData {
	ai_enabled: boolean;
	allow_number_colors: boolean;
	allow_number_font: boolean;
	allow_sponsor1: boolean;
	allow_sponsor2: boolean;
	allow_wheel_color: boolean;
	award_exempt: boolean;
	car_dirpath: string;
	car_id: number;
	car_name: string;
	car_name_abbreviated: string;
	car_types: Array<Record<string, string>>;
	car_weight: number;
	// TODO enum
	categories: Array<string>;
	created: string;
	first_sale: string;
	forum_url: string;
	free_with_subscription: boolean;
	has_headlights: boolean;
	has_multiple_dry_tire_types: boolean;
	hp: number;
	is_ps_purchasable: boolean;
	max_power_adjust_pct: number;
	max_weight_penalty_kf: number;
	min_power_adjust_pct: number;
	package_id: number;
	patterns: number;
	price: number;
	price_display: string;
	retired: boolean;
	search_filters: string;
	sku: string;
}

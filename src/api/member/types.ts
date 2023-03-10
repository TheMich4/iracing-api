import { Helmet, Member, Suit } from "../../types";

export interface ChartData {
	value: number;
	when: string;
}

export interface MemberAccount {
	irCredits: number;
	irDollars: number;
	status: string;
}

export interface CarPackage {
	contentIds: Array<number>;
	packageId: number;
}

export interface MemberLicense {
	category: string;
	categoryId: number;
	color: string;
	cpi: number;
	groupId: number;
	groupName: string;
	irating: number;
	licenseLevel: number;
	mprNumRaces: number;
	mprNumTts: number;
	proPromotable: boolean;
	safetyRating: number;
	ttRating: number;
}

export interface MemberLicenses {
	dirtOval: MemberLicense;
	dirtRoad: MemberLicense;
	oval: MemberLicense;
	road: MemberLicense;
}

export interface TrackPackage {
	contentIds: Array<number>;
	packageId: number;
}

export interface MemberInfo {
	account: MemberAccount;
	alphaTester: boolean;
	ai: boolean;
	bypassHostedPassword: boolean;
	carPackages: Array<CarPackage>;
	clubId: number;
	clubName: string;
	connectionType: string;
	custId: number;
	displayName: string;
	downloadServer: string;
	email: string;
	firstName: string;
	flags: number;
	flagsHex: string;
	hasReadCompRules: boolean;
	hasReadPp: boolean;
	hasReadTc: boolean;
	helmet: Helmet;
	hundredPctClub: boolean;
	lastLogin: string;
	lastName: string;
	lastSeason: number;
	lastTestCar: number;
	lastTestTrack: number;
	memberSince: string;
	onCarName: string;
	otherOwnedPackages: number[];
	readCompRules: Date;
	readPp: Date;
	readTc: Date;
	raceOfficial: boolean;
	// TODO: Add type
	restrictions: Record<string, any>;
	suit: Suit;
	licenses: MemberLicenses;
	trackPackages: Array<TrackPackage>;
	twentyPctDiscount: boolean;
	username: string;
	broadcaster: boolean;
	dev: boolean;
}

export interface ParticipationInformation {
	custId: number;
	seasonId: number;
	seriesId: number;
	seriesName: string;
	licenseGroup: number;
	licenseGroupName: string;
	participationCredits: number;
	minWeeks: number;
	weeks: number;
	earnedCredits: number;
	totalCredits: number;
}

// Params

export interface GetMemberAwardsParams {
	customerId: number;
}

export interface GetMemberChartDataParams {
	customerId: number;
	categoryId: number;
	chartType: number;
}

export interface GetMemberDataParams {
	customerIds: Array<number>;
	includeLicenses?: boolean;
}

export interface GetMemberProfileParams {
	customerId: number;
}

// Response

export interface ChartDataResponse {
	blackout: boolean;
	categoryId: number;
	chartType: number;
	custId: number;
	data: Array<ChartData>;
	success: boolean;
}

export interface MemberDataResponse {
	custIds: Array<number>;
	members: Array<Member>;
	success: boolean;
}

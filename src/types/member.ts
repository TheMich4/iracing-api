import { CarPackage } from "./car.js";
import { TrackPackage } from "./track.js";

export interface Customer {
	custId: number;
	displayName: string;
	helmet: Helmet;
}

export interface Helmet {
	color1: string;
	color2: string;
	color3: string;
	faceType: number;
	helmetType: number;
	pattern: number;
}

export interface Member extends Customer {
	ai: boolean;
	clubId: number;
	clubName: string;
	lastLogin: string;
	memberSince: string;
}

export interface MemberAccount {
	irCredits: number;
	irDollars: number;
	status: string;
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
	restrictions: Record<string, unknown>;
	suit: Suit;
	licenses: MemberLicenses;
	trackPackages: Array<TrackPackage>;
	twentyPctDiscount: boolean;
	username: string;
	broadcaster: boolean;
	dev: boolean;
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

export interface Suit {
	bodyType: number;
	color1: string;
	color2: string;
	color3: string;
	pattern: number;
}

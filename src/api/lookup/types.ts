import { Customer } from "../../types";

export interface Club {
	clubId: number;
	clubName: string;
	region: string;
	seasonQuarter: number;
	seasonYear: number;
}

export interface Country {
	countryName: string;
	countryCode: string;
}

export interface Driver extends Customer {
	profileDisabled: boolean;
}

export interface LicenseLevel {
	licenseId: number;
	licenseGroup: number;
	license: string;
	shortName: string;
	licenseLetter: string;
	color: string;
}

export interface License {
	licenseGroup: number;
	groupName: string;
	minNumRaces: number;
	participationCredits: number;
	minSrToFastTrack: number;
	levels: Array<License>;
	minNumTt: number;
}

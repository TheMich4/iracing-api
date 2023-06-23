import { Club, Country } from "../../types/lookup.js";

import { Customer } from "../../types/member.js";

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

// Params

export interface GetClubHistoryParams {
	seasonYear: number;
	seasonQuarter: number;
}

export interface GetDriversParams {
	searchTerm: string;
	leagueId?: number;
}

// Response

export type GetClubHistoryResponse = Array<Club>;
export type GetCountriesResponse = Array<Country>;
export type GetDriversResponse = Array<Driver>;
export type GetLicensesResponse = Array<License>;

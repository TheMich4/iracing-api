import {
	GetCategoriesResponse,
	GetDivisionsResponse,
	GetEventTypesResponse,
} from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getCategories = async (
	fetchCookie: FetchCookie,
): Promise<GetCategoriesResponse> =>
	await getData(fetchCookie, "data/constants/categories");

export const getDivisions = async (
	fetchCookie: FetchCookie,
): Promise<GetDivisionsResponse> =>
	await getData(fetchCookie, "data/constants/divisions");

export const getEventTypes = async (
	fetchCookie: FetchCookie,
): Promise<GetEventTypesResponse> =>
	await getData(fetchCookie, "data/constants/event_types");

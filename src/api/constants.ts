import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getCategories = async (
	fetchCookie: FetchCookie,
) =>
	await getData(fetchCookie, "data/constants/categories");

export const getDivisions = async (
	fetchCookie: FetchCookie,
) =>
	await getData(fetchCookie, "data/constants/divisions");

export const getEventTypes = async (
	fetchCookie: FetchCookie,
) =>
	await getData(fetchCookie, "data/constants/event_types");

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getCarClasses = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/carclass/get");

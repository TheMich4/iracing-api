import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getTrackAssets = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/track/assets");

export const getTracks = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/track/get");

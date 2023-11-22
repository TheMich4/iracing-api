import { Track, TrackAssets } from "../types/track.js";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getTrackAssets = async (fetchCookie: FetchCookie) =>
	await getData<TrackAssets>(fetchCookie, "data/track/assets");

export const getTracks = async (fetchCookie: FetchCookie) =>
	await getData<Track[]>(fetchCookie, "data/track/get");

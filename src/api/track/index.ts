import type { GetTrackAssetsResponse, GetTracksResponse } from "./types.js";

import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getTrackAssets = async (fetchCookie: FetchCookie) =>
	await getData<GetTrackAssetsResponse>(fetchCookie, "data/track/assets");

export const getTracks = async (fetchCookie: FetchCookie) =>
	await getData<GetTracksResponse>(fetchCookie, "data/track/get");

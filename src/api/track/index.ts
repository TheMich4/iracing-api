import type { GetTrackAssetsResponse, GetTracksResponse } from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getTrackAssets = async (axiosInstance: AxiosInstance) =>
	await getData<GetTrackAssetsResponse>(axiosInstance, "data/track/assets");

export const getTracks = async (axiosInstance: AxiosInstance) =>
	await getData<GetTracksResponse>(axiosInstance, "data/track/get");

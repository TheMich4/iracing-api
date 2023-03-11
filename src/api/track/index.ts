import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getTrackAssets = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/track/assets");

export const getTracks = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/track/get");

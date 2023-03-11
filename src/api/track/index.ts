import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

const getTrackAssets = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/track/assets");

const getTracks = async (axiosInstance: AxiosInstance) =>
	await getData(axiosInstance, "data/track/get");

export { getTrackAssets, getTracks };

import type { GetCarAssetsResponse, GetCarsResponse } from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getCarAssets = async (axiosInstance: AxiosInstance) =>
	await getData<GetCarAssetsResponse>(axiosInstance, "data/car/assets/get");

export const getCars = async (axiosInstance: AxiosInstance) =>
	await getData<GetCarsResponse>(axiosInstance, "data/car/get");

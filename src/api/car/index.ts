import type { GetCarAssetsResponse, GetCarsResponse } from "./types.js";

import { AxiosInstance } from "axios";
import { CarData } from "../../types/car.js";
import { getData } from "../../helpers.js";

export const getCarAssets = async (axiosInstance: AxiosInstance) =>
	await getData<GetCarAssetsResponse>(axiosInstance, "data/car/assets/get");

export const getCars = async (
	axiosInstance: AxiosInstance,
): Promise<Array<CarData> | undefined> =>
	await getData<GetCarsResponse>(axiosInstance, "data/car/get");

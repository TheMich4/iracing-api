import type { CarAssets, CarData } from "./types.js";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers.js";

export const getCarAssets = async (axiosInstance: AxiosInstance) =>
	await getData<CarAssets>(axiosInstance, "data/car/assets/get");

export const getCars = async (axiosInstance: AxiosInstance) =>
	await getData<Array<CarData>>(axiosInstance, "data/car/get");

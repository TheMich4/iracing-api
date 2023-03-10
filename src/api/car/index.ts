import type { CarAssets, CarData } from "./types";

import { AxiosInstance } from "axios";
import { getData } from "../../helpers";

export const getCarAssets = async (axiosInstance: AxiosInstance) =>
	await getData<CarAssets>(axiosInstance, "data/car/assets/get");

export const getCars = async (axiosInstance: AxiosInstance) =>
	await getData<Array<CarData>>(axiosInstance, "data/car/get");

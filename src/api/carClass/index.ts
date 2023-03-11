import { AxiosInstance } from "axios";
import { CarClass } from "./types.js";
import { getData } from "../../helpers.js";

export const getCarClasses = async (axiosInstance: AxiosInstance) =>
	await getData<Array<CarClass>>(axiosInstance, "data/carclass/get");

import { AxiosInstance } from "axios";
import { GetCarClassesResponse } from "./types.js";
import { getData } from "../../helpers.js";

export const getCarClasses = async (axiosInstance: AxiosInstance) =>
	await getData<GetCarClassesResponse>(axiosInstance, "data/carclass/get");

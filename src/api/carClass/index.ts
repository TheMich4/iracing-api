import { AxiosInstance } from "axios";
import { CarClass } from "./types";
import { getData } from "../../helpers";

const getCarClasses = async (axiosInstance: AxiosInstance) =>
	await getData<Array<CarClass>>(axiosInstance, "data/carclass/get");

export { getCarClasses };

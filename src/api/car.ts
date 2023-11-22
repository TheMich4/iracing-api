import { Car } from "../types/car.js";
import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getCarAssets = async (fetchCookie: FetchCookie) =>
	await getData(fetchCookie, "data/car/assets/get");

export const getCars = async (
	fetchCookie: FetchCookie,
) => await getData<Car[]>(fetchCookie, "data/car/get");

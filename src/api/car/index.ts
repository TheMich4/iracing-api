import type { GetCarAssetsResponse, GetCarsResponse } from "./types.js";

import { CarData } from "../../types/car.js";
import { FetchCookie } from "../../types.js";
import { getData } from "../../helpers.js";

export const getCarAssets = async (fetchCookie: FetchCookie) =>
	await getData<GetCarAssetsResponse>(fetchCookie, "data/car/assets/get");

export const getCars = async (
	fetchCookie: FetchCookie,
): Promise<Array<CarData> | undefined> =>
	await getData<GetCarsResponse>(fetchCookie, "data/car/get");

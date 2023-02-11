import type { CarAssets, CarData } from "./types";

import { getData } from "../../helpers";

const getCarAssets = async () =>
	await getData<CarAssets>("data/car/assets/get");

const getCars = async () => (await getData)<Array<CarData>>("data/car/get");

export { getCarAssets, getCars };

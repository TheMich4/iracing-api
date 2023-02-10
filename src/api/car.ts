import { getData } from "../helpers";

const getCarAssets = async () => await getData("data/car/assets/get");

const getCars = async () => await getData("data/car/get");

export { getCarAssets, getCars };

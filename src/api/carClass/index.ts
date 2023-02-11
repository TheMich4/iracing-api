import { CarClass } from "./types";
import { getData } from "../../helpers";

const getCarClasses = async () =>
	await getData<Array<CarClass>>("data/carclass/get");

export { getCarClasses };

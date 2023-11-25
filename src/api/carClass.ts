import { CarClass } from "../types/carClass.js";
import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const getCarClasses = async (fetchCookie: FetchCookie) =>
  await getData<CarClass[]>(fetchCookie, "data/carclass/get");

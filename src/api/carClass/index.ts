import { FetchCookie } from "../../types.js";
import { GetCarClassesResponse } from "./types.js";
import { getData } from "../../helpers.js";

export const getCarClasses = async (fetchCookie: FetchCookie) =>
	await getData<GetCarClassesResponse>(fetchCookie, "data/carclass/get");

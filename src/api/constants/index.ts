import { Category, Division, EventType } from "./types";

import { axiosInstance } from "../../client";

const getCategories = async (): Promise<Array<Category> | undefined> => {
	const response = await axiosInstance("data/constants/categories");

	return response?.data;
};

const getDivisions = async (): Promise<Array<Division> | undefined> => {
	const response = await axiosInstance("data/constants/divisions");

	return response?.data;
};

const getEventTypes = async (): Promise<Array<EventType> | undefined> => {
	const response = await axiosInstance("data/constants/event_types");

	return response?.data;
};

export { getCategories, getDivisions, getEventTypes };

import { Category, Division, EventType } from "./types";

import { AxiosInstance } from "axios";

export const getCategories = async (
	axiosInstance: AxiosInstance,
): Promise<Array<Category> | undefined> => {
	const response = await axiosInstance.get("data/constants/categories");

	return response?.data;
};

export const getDivisions = async (
	axiosInstance: AxiosInstance,
): Promise<Array<Division> | undefined> => {
	const response = await axiosInstance.get("data/constants/divisions");

	return response?.data;
};

export const getEventTypes = async (
	axiosInstance: AxiosInstance,
): Promise<Array<EventType> | undefined> => {
	const response = await axiosInstance.get("data/constants/event_types");

	return response?.data;
};

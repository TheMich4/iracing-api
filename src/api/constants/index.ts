import { GetCategoriesResponse, GetDivisionsResponse } from "./types";

import { AxiosInstance } from "axios";

export const getCategories = async (
	axiosInstance: AxiosInstance,
): Promise<GetCategoriesResponse> => {
	const response = await axiosInstance.get("data/constants/categories");

	return response?.data;
};

export const getDivisions = async (
	axiosInstance: AxiosInstance,
): Promise<GetDivisionsResponse> => {
	const response = await axiosInstance.get("data/constants/divisions");

	return response?.data;
};

export const getEventTypes = async (
	axiosInstance: AxiosInstance,
): Promise<GetEventTypesResponse> => {
	const response = await axiosInstance.get("data/constants/event_types");

	return response?.data;
};

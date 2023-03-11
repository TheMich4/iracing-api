import { Category, Division, EventType } from "../../types/constants";

// Response

export type GetCategoriesResponse = Array<Category> | undefined;
export type GetDivisionsResponse = Array<Division> | undefined;
export type GetEventTypesResponse = Array<EventType> | undefined;

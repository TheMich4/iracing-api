import { getData } from "../helpers";

const getCategories = async () => await getData("data/constants/categories");

const getDivisions = async () => await getData("data/constants/divisions");

const getEventTypes = async () => await getData("data/constants/event_types");

export { getCategories, getDivisions, getEventTypes };

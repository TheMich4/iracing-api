import { getData } from "../helpers";

const getCarClasses = async () => await getData("data/carclass/get");

export { getCarClasses };

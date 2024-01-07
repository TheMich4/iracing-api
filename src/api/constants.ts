import { API } from "./api";
import { getData } from "../helpers";
import { Category, Division } from "../types/index";

export class ConstantsAPI extends API {
  /**
   *
   * **Get list of categories.**
   *
   * @returns
   */
  getCategories = async () => {
    return (
      await getData<Category[]>(this.fetchCookie, "data/constants/categories")
    )?.data;
  };
  /**
   *
   * **Get list of divisions.**
   *
   * @returns
   */
  getDivisions = async () => {
    return (
      await getData<Division[]>(this.fetchCookie, "data/constants/divisions")
    )?.data;
  };
  /**
   *
   * **Get list of event types.**
   *
   * @returns
   */
  getEventTypes = async () => {
    return (
      await getData<Event[]>(this.fetchCookie, "data/constants/event_types")
    )?.data;
  };
}

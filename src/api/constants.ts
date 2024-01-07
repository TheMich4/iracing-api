import { API } from "./api";
import { Category, Division } from "../types/index";

export class ConstantsAPI extends API {
  /**
   *
   * **Get list of categories.**
   *
   * @returns
   */
  getCategories = async () => {
    return await this._getData<Category[]>("data/constants/categories");
  };
  /**
   *
   * **Get list of divisions.**
   *
   * @returns
   */
  getDivisions = async () => {
    return await this._getData<Division[]>("data/constants/divisions");
  };
  /**
   *
   * **Get list of event types.**
   *
   * @returns
   */
  getEventTypes = async () => {
    return await this._getData<Event[]>("data/constants/event_types");
  };
}

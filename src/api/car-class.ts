import { API } from ".";
import { getData } from "../helpers";

export class CarClassAPI extends API {
  /**
   *
   * **Get list of car classes.**
   *
   * @returns
   */
  getCarClasses = async () => {
    return (await getData(this.fetchCookie, "data/carclass/get"))?.data;
  };
}

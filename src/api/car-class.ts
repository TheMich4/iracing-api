import { API } from "./api";

export class CarClassAPI extends API {
  /**
   *
   * **Get list of car classes.**
   *
   * @returns
   */
  getCarClasses = async () => {
    return await this._getData("data/carclass/get");
  };
}

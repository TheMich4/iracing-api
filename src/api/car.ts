import { API } from ".";
import { getData } from "../helpers";
import { type Car } from "../types/car";

export class CarAPI extends API {
  /**
   *
   * **Get car assets.**
   *
   * *Image paths are relative to https://images-static.iracing.com/*
   *
   * @returns
   */
  getCarAssets = async () => {
    return (await getData(this.fetchCookie, "data/car/assets/get"))?.data;
  };
  /**
   *
   * **Get list of cars.**
   *
   * @returns
   */
  getCars = async () => {
    return (await getData<Car[]>(this.fetchCookie, "data/car/get"))?.data;
  };
}

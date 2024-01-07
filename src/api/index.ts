import { type FetchCookie, type Options } from "../types";

export class API {
  fetchCookie: FetchCookie;
  options: Options;

  constructor(fetchCookie: FetchCookie, options: Options) {
    this.fetchCookie = fetchCookie;
    this.options = options;
  }
}

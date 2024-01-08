import { API_URL } from "../consts";
import { logger } from "../logger";
import { RateLimiter } from "../rate-limiter";
import { type FetchCookie, type Options } from "../types";

import humps from "humps";
const { camelizeKeys } = humps;

export class API {
  fetchCookie: FetchCookie;
  options: Options;
  rateLimiter: RateLimiter;

  constructor(fetchCookie: FetchCookie, options: Options) {
    this.fetchCookie = fetchCookie;
    this.options = options;
    this.rateLimiter = new RateLimiter(options);
  }

  _getData = async <Data = Record<string, unknown>, Parameters = void>(
    endpoint: string,
    params?: Parameters | Record<string, unknown>,
  ): Promise<Data | undefined> => {
    try {
      const canProceed = this.rateLimiter.checkRateLimit();

      if (!canProceed) {
        await this.rateLimiter.waitForReset();
      }

      const parsedParams = `[${Object.entries(params ?? {})
        .map(([key, value]) => `${key}=${value}`)
        .join(", ")}]`;
      logger(`Getting data from '${endpoint}'`, parsedParams);

      const url = this._getUrl(endpoint, params);
      const response = await this.fetchCookie(url, {
        cache: "no-cache",
        credentials: "include",
      });
      this.rateLimiter.updateRateLimit(response);

      const data = await response.json();

      if (data?.link) {
        return await this._getLinkData<Data>(data?.link);
      }

      return data as Data | undefined;
    } catch (error) {
      logger(`Error getting data from '${endpoint}'`);
      return undefined;
    }
  };

  _getLinkData = async <Data>(
    link: string | undefined,
  ): Promise<Data | undefined> => {
    if (!link) return undefined;

    const response = await fetch(link);
    const data = await response.json();

    if (!data) return undefined;

    return camelizeKeys(data) as Data;
  };

  _getUrl = <Parameters = Record<string, unknown>>(
    endpoint: string,
    params?: Parameters,
  ) => {
    // Filter out empty values
    const searchParams =
      params &&
      new URLSearchParams(JSON.parse(JSON.stringify(params))).toString();

    return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ""}`;
  };
}

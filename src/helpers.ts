import { API_URL } from "./consts.js";
import CryptoJS from "crypto-js";
import { FetchCookie, RateLimit } from "./types.js";
import humps from "humps";

const { camelizeKeys } = humps;

const getRateLimit = (response: Response) => {
  const limit = +response.headers.get("x-ratelimit-limit")! ?? 0;
  const remaining = +response.headers.get("x-ratelimit-remaining")! ?? 0;
  const reset = +response.headers.get("x-ratelimit-reset")! ?? 0;

  return { limit, remaining, reset };
};

const getUrl = <Parameters = Record<string, unknown>>(
  endpoint: string,
  params?: Parameters
) => {
  // Filter out empty values
  const searchParams =
    params &&
    new URLSearchParams(JSON.parse(JSON.stringify(params))).toString();

  return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ""}`;
};

export const getLinkData = async <Data>(
  link: string | undefined
): Promise<Data | undefined> => {
  if (!link) return undefined;

  const response = await fetch(link);
  const data = await response.json();

  if (!data) return undefined;

  return camelizeKeys(data) as Data;
};

export const getData = async <
  Data = Record<string, unknown>,
  Parameters = void,
>(
  fetchCookie: FetchCookie,
  endpoint: string,
  params?: Parameters | Record<string, unknown>
): Promise<{ data: Data | undefined; rateLimit: RateLimit } | undefined> => {
  const url = getUrl(endpoint, params);
  try {
    const response = await fetchCookie(url, {
      cache: "no-cache",
      credentials: "include",
    });
    const data = await response.json();
    const rateLimit = getRateLimit(response);

    if (data?.link) {
      const linkData = await getLinkData<Data>(data?.link);

      return {
        data: linkData,
        rateLimit: rateLimit,
      };
    }

    return {
      data: data as Data | undefined,
      rateLimit: rateLimit,
    };
  } catch (error) {
    console.error(`Error getting data for ${url}`, error);
    return undefined;
  }
};

export const encryptPassword = (email: string, password: string) =>
  CryptoJS.enc.Base64.stringify(
    CryptoJS.SHA256(password + email.toLowerCase())
  );

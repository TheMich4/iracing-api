export * from "./car.js";
export * from "./carClass.js";
export * from "./common.js";
export * from "./constants.js";
export * from "./hosted.js";
export * from "./league.js";
export * from "./lookup.js";
export * from "./member.js";
// export * from "./results.js";
// export * from "./season.js";
export * from "./series.js";
export * from "./stats.js";
// export * from "./team.js";
// export * from "./timeAttack.js";
export * from "./track.js";

export interface FetchCookie {
  (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
}

export interface Options {
  throttleToRateLimit?: boolean;
}

export interface RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}

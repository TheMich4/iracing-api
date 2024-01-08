import { type Options, type RateLimit } from "./types";

export class RateLimiter {
  static instance: RateLimiter;

  isActive = false;
  rateLimit: RateLimit | undefined;

  constructor(options: Options) {
    if (RateLimiter.instance) {
      return RateLimiter.instance;
    }

    if (options.throttleToRateLimit) {
      this.isActive = true;
    }

    RateLimiter.instance = this;
  }

  updateRateLimit = (response: Response) => {
    if (!this.isActive) return;

    this.rateLimit = this._getRateLimit(response);
  };

  _getRateLimit = (response: Response): RateLimit => {
    const limit = +response.headers.get("x-ratelimit-limit")! ?? 0;
    const remaining = +response.headers.get("x-ratelimit-remaining")! ?? 0;
    const reset = new Date(
      (+response.headers.get("x-ratelimit-reset")! ?? 0) * 1000
    );

    return { limit, remaining, reset };
  };
}

import { DEFAULT_RATE_LIMIT_PADDING } from "./consts";
import { logger } from "./logger";
import { type Options, type RateLimit } from "./types";

export class RateLimiter {
  static instance: RateLimiter;

  isActive: boolean = false;
  rateLimit: RateLimit | undefined = undefined;
  limitPadding: number = DEFAULT_RATE_LIMIT_PADDING;

  constructor(options: Options) {
    if (RateLimiter.instance) {
      return RateLimiter.instance;
    }

    if (options.manageRateLimit) {
      this.isActive = true;
      this.limitPadding =
        options.rateLimitPadding ?? DEFAULT_RATE_LIMIT_PADDING;
    }

    RateLimiter.instance = this;
  }

  updateRateLimit = (response: Response) => {
    if (!this.isActive) return;

    this.rateLimit = this._getRateLimit(response);
  };

  checkRateLimit = (): boolean => {
    if (!this.isActive) return true;
    if (!this.rateLimit) return true;
    if (this.rateLimit.remaining > this.limitPadding) return true;
    if (this.rateLimit.reset < new Date()) {
      this.rateLimit = undefined;
      return true;
    }

    return false;
  };

  waitForReset = async () => {
    if (!this.isActive || !this.rateLimit) return;

    const timeToReset =
      this.rateLimit.reset.getTime() - new Date().getTime() + 1000;

    logger(
      `Rate limit exceeded. Waiting for reset at ${this.rateLimit.reset.toLocaleString()}...`
    );

    await new Promise((resolve) => setTimeout(resolve, timeToReset));
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

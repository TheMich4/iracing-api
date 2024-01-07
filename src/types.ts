export interface FetchCookie {
  (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
}

export interface RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}

export interface FetchCookie {
  (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>;
}

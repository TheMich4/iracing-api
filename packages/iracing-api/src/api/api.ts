import { API_URL } from '../consts'
import { logger } from '../logger'
import { RateLimiter } from '../rate-limiter'
import { type FetchCookie, type Options } from '../types'

import humps from 'humps'
const { camelizeKeys } = humps

/**
 * Base class for iRacing API endpoints.
 * Provides common functionality for making requests, handling rate limits, and processing responses.
 * @internal
 */
export class API {
    fetchCookie: FetchCookie
    options: Options
    rateLimiter: RateLimiter

    /**
     * Initializes the base API class.
     * @param fetchCookie - The fetch instance with cookie support.
     * @param options - Client configuration options.
     */
    constructor(fetchCookie: FetchCookie, options: Options) {
        this.fetchCookie = fetchCookie
        this.options = options
        this.rateLimiter = new RateLimiter(options)
    }

    /**
     * Internal method to fetch data from a specified API endpoint.
     * Handles rate limiting, URL construction, and optionally fetching data from a returned link.
     *
     * @template Data - The expected type of the primary data payload.
     * @template Parameters - The type of the query parameters object.
     * @param endpoint - The specific API endpoint path (e.g., 'data/car/get').
     * @param [params] - Optional query parameters for the request.
     * @param [getLinkData=true] - If true and the response contains a 'link', fetch data from that link.
     * @returns A promise resolving to the fetched data (type Data) or undefined if an error occurs or no data is found.
     * @internal
     */
    _getData = async <Data = Record<string, unknown>, Parameters = void>(
        endpoint: string,
        params?: Parameters | Record<string, unknown>,
        getLinkData: boolean = true
    ): Promise<Data | undefined> => {
        try {
            const canProceed = this.rateLimiter.checkRateLimit()

            if (!canProceed) {
                await this.rateLimiter.waitForReset()
            }

            const parsedParams = `[${Object.entries(params ?? {})
                .map(([key, value]) => `${key}=${value}`)
                .join(', ')}]`
            logger(`Getting data from '${endpoint}'`, parsedParams)

            const url = this._getUrl(endpoint, params)
            const response = await this.fetchCookie(url, {
                cache: 'no-cache',
                credentials: 'include',
            })
            this.rateLimiter.updateRateLimit(response)

            const data = await response.json()

            if (data?.link && getLinkData) {
                return await this._getLinkData<Data>(data?.link)
            }

            return data as Data | undefined
        } catch (error) {
            logger(`Error getting data from '${endpoint}'`)
            return undefined
        }
    }

    /**
     * Internal method to fetch data from a secondary URL (often an S3 link) provided in an initial API response.
     * Converts keys in the fetched JSON data to camelCase.
     *
     * @template Data - The expected type of the data payload from the link.
     * @param link - The URL to fetch data from.
     * @returns A promise resolving to the fetched and camelCased data (type Data) or undefined if the link is invalid or fetching fails.
     * @internal
     */
    _getLinkData = async <Data>(
        link: string | undefined
    ): Promise<Data | undefined> => {
        if (!link) return undefined

        const response = await fetch(link)
        const data = await response.json()

        if (!data) return undefined

        return camelizeKeys(data) as Data
    }

    /**
     * Internal method to construct the full API URL including the base path and query parameters.
     *
     * @template Parameters - The type of the query parameters object.
     * @param endpoint - The specific API endpoint path.
     * @param [params] - Optional query parameters.
     * @returns The fully constructed URL string.
     * @internal
     */
    _getUrl = <Parameters = Record<string, unknown>>(
        endpoint: string,
        params?: Parameters
    ) => {
        // Filter out empty values
        const searchParams =
            params &&
            new URLSearchParams(JSON.parse(JSON.stringify(params))).toString()

        return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ''}`
    }
}

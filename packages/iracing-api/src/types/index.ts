export * from './car'
export * from './car-class'
export * from './common'
export * from './constants'
export * from './hosted'
export * from './league'
export * from './lookup'
export * from './member'
export * from './results'
export * from './season'
export * from './series'
export * from './stats'
export * from './team'
export * from './time-attack'
export * from './track'

export interface FetchCookie {
    (
        input: RequestInfo | URL,
        init?: RequestInit | undefined
    ): Promise<Response>
}

export interface Options {
    logger?: boolean
    manageRateLimit?: boolean
    rateLimitPadding?: number
}

export interface RateLimit {
    limit: number
    remaining: number
    reset: Date
}

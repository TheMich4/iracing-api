export * from './auth'
export * from './car'
export * from './carClass'
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
export * from './timeAttack'
export * from './track'
export * from './updater'

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

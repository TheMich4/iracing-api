import { API_URL, DEFAULT_OPTIONS } from './consts.js'
import { encryptPassword } from './helpers.js'

import makeFetchCookie from 'fetch-cookie'
import { FetchCookie, Options } from './types/index.js'
import { CarAPI } from './api/car.js'
import { CarClassAPI } from './api/car-class.js'
import { ConstantsAPI } from './api/constants.js'
import { HostedAPI } from './api/hosted.js'
import { LeagueAPI } from './api/league.js'
import { LookupAPI } from './api/lookup.js'
import { MemberAPI } from './api/member.js'
import { ResultsAPI } from './api/results.js'
import { SeasonAPI } from './api/season.js'
import { SeriesAPI } from './api/series.js'
import { StatsAPI } from './api/stats.js'
import { TeamAPI } from './api/team.js'
import { TimeAttackAPI } from './api/time-attack.js'
import { TrackAPI } from './api/track.js'
import { createLogger, logger } from './logger.js'

export * from './consts.js'
export * from './helpers.js'
export * from './types/index.js'

/**
 * Main client for interacting with the iRacing Data API.
 */
export default class IracingAPI {
    //
    fetchCookie: FetchCookie
    options: Options

    // API
    car: CarAPI
    carClass: CarClassAPI
    constants: ConstantsAPI
    hosted: HostedAPI
    league: LeagueAPI
    lookup: LookupAPI
    member: MemberAPI
    results: ResultsAPI
    season: SeasonAPI
    series: SeriesAPI
    stats: StatsAPI
    team: TeamAPI
    timeAttack: TimeAttackAPI
    track: TrackAPI

    /**
     * Creates an instance of the IracingAPI client.
     *
     * @param {Options} [options] - Configuration options for the client.
     * @param {boolean} [options.logger=false] - Enable logging of requests and responses.
     * @param {boolean} [options.manageRateLimit=false] - Automatically handle rate limiting by delaying requests.
     * @param {number} [options.rateLimitPadding=5000] - Milliseconds to pad the rate limit reset time when manageRateLimit is true.
     */
    constructor(options?: Options) {
        this.fetchCookie = makeFetchCookie(fetch)
        this.options = options ?? DEFAULT_OPTIONS

        this.car = new CarAPI(this.fetchCookie, this.options)
        this.carClass = new CarClassAPI(this.fetchCookie, this.options)
        this.constants = new ConstantsAPI(this.fetchCookie, this.options)
        this.hosted = new HostedAPI(this.fetchCookie, this.options)
        this.league = new LeagueAPI(this.fetchCookie, this.options)
        this.lookup = new LookupAPI(this.fetchCookie, this.options)
        this.member = new MemberAPI(this.fetchCookie, this.options)
        this.results = new ResultsAPI(this.fetchCookie, this.options)
        this.season = new SeasonAPI(this.fetchCookie, this.options)
        this.series = new SeriesAPI(this.fetchCookie, this.options)
        this.stats = new StatsAPI(this.fetchCookie, this.options)
        this.team = new TeamAPI(this.fetchCookie, this.options)
        this.timeAttack = new TimeAttackAPI(this.fetchCookie, this.options)
        this.track = new TrackAPI(this.fetchCookie, this.options)

        createLogger(this.options)
    }

    /**
     * Authenticates the user with the iRacing API using email and password.
     * Stores the necessary authentication cookies for subsequent requests.
     *
     * @param email - iRacing account email address.
     * @param password - iRacing account password.
     * @returns A promise that resolves with the authentication response JSON on success,
     *          or an object containing an error message on failure.
     */
    login = async (email: string, password: string) => {
        const hashPassword = encryptPassword(email, password)

        const response = await this.fetchCookie(`${API_URL}auth`, {
            body: JSON.stringify({ email, password: hashPassword }),
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        if (response.status !== 200) {
            logger('Login failed...')
            return {
                error: response.statusText ?? 'Failed to login to iracing-api',
            }
        }

        logger('Login successful...')

        return await response.json()
    }
}

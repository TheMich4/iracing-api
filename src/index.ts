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
     *
     * @param {Options} [options]
     * @param {boolean} [options.throttleToRateLimit] - If true, will throttle requests to the rate limit.
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
     *
     * @param email - iRacing account email
     * @param password - iRacing account password
     *
     * @returns
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

import { Options } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export let logger = (..._args: unknown[]) => {}

export const createLogger = (options: Options) => {
    if (options.logger) {
        logger = (...args: unknown[]) =>
            console.log(`\x1b[34m[iracing-api]\x1b[0m`, ...args)
    } else {
        logger = () => {}
    }
}

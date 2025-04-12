import { CarClass } from '../types/car-class'
import { API } from './api'

/**
 * Provides methods for interacting with car class endpoints.
 */
export class CarClassAPI extends API {
    /**
     * Get a list of all available car classes.
     *
     * @returns A promise resolving to an array of car class objects, or undefined on error.
     */
    getCarClasses = async () => {
        return await this._getData<CarClass[]>('data/carclass/get')
    }
}

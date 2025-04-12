import { API } from './api'
import { type Car } from '../types/car'
import { type CarAssetsResponse } from '../types/car'

/**
 * Provides methods for interacting with car-related endpoints.
 */
export class CarAPI extends API {
    /**
     * Get car assets, including images and details.
     *
     * Note: Image paths in the response are relative to `https://images-static.iracing.com/`.
     *
     * @returns A promise resolving to the car assets data, or undefined on error.
     */
    getCarAssets = async () => {
        return await this._getData<CarAssetsResponse>('data/car/assets')
    }
    /**
     * Get a list of all available cars.
     *
     * @returns A promise resolving to an array of car objects, or undefined on error.
     */
    getCars = async () => {
        return await this._getData<Car[]>('data/car/get')
    }
}

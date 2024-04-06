import { API } from './api'
import { type Car } from '../types/car'

export class CarAPI extends API {
    /**
     *
     * **Get car assets.**
     *
     * *Image paths are relative to https://images-static.iracing.com/*
     *
     * @returns
     */
    getCarAssets = async () => {
        return await this._getData('data/car/assets/get')
    }
    /**
     *
     * **Get list of cars.**
     *
     * @returns
     */
    getCars = async () => {
        return await this._getData<Car[]>('data/car/get')
    }
}

import { API } from './api'
import { type Car } from '../types/car'
import { type CarAssetsResponse } from '../types/car'

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
        return await this._getData<CarAssetsResponse>('data/car/assets')
    }
    /**
     *
     * **Get a list of cars.**
     *
     * @returns
     */
    getCars = async () => {
        return await this._getData<Car[]>('data/car/get')
    }
}

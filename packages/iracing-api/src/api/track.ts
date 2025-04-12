import { API } from './api'
import { Track, TrackAssets } from '../types'

/**
 * Provides methods for interacting with track-related endpoints.
 */
export class TrackAPI extends API {
    /**
     * Get assets for all tracks (logos, images, map layers, etc.).
     *
     * Note: Image paths are relative to `https://images-static.iracing.com/`.
     *
     * @returns A promise resolving to the track assets data, or undefined on error.
     */
    getTrackAssets = async () =>
        await this._getData<TrackAssets>('data/track/assets')
    /**
     * Get a list of all available tracks and their configurations.
     *
     * @returns A promise resolving to an array of track objects, or undefined on error.
     */
    getTracks = async () => await this._getData<Track[]>('data/track/get')
}

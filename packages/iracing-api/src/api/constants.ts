import { API } from './api'
import { Category, Division, Event } from '../types/index'

/**
 * Provides methods for retrieving constant data like categories, divisions, and event types.
 */
export class ConstantsAPI extends API {
    /**
     * Get the list of iRacing racing categories (e.g., Oval, Road).
     *
     * @returns A promise resolving to an array of category objects, or undefined on error.
     */
    getCategories = async () => {
        return await this._getData<Category[]>('data/constants/categories')
    }
    /**
     * Get the list of iRacing divisions (e.g., Division 1, Rookie).
     *
     * @returns A promise resolving to an array of division objects, or undefined on error.
     */
    getDivisions = async () => {
        return await this._getData<Division[]>('data/constants/divisions')
    }
    /**
     * Get the list of iRacing event types (e.g., Practice, Race).
     *
     * @returns A promise resolving to an array of event type objects, or undefined on error.
     */
    getEventTypes = async () => {
        return await this._getData<Event[]>('data/constants/event_types')
    }
}

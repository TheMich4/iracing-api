import { z } from "zod";
import { API } from ".";
import { getData } from "../helpers";

export const GetSeasonListParamsSchema = z.object({
  seasonYear: z.number(),
  seasonQuarter: z.number(),
});
export type GetSeasonListParams = z.infer<typeof GetSeasonListParamsSchema>;
export const GetSeasonRaceGuideParamsSchema = z.object({
  from: z.string().optional(),
  includeEndAfterFrom: z.boolean().optional(),
});
export type GetSeasonRaceGuideParams = z.infer<
  typeof GetSeasonRaceGuideParamsSchema
>;
export const GetSpectatorSubsessionIdsParamsSchema = z.object({
  eventTypes: z.array(z.number()).optional(),
});
export type GetSpectatorSubsessionIdsParams = z.infer<
  typeof GetSpectatorSubsessionIdsParamsSchema
>;
export class SeasonAPI extends API {
  /**
   *
   * @param {GetSeasonListParams} params
   * @param {number} params.seasonYear
   * @param {number} params.seasonQuarter
   *
   * @returns
   */
  getSeasonList = async (params: GetSeasonListParams) =>
    await getData(this.fetchCookie, "data/season/list", {
      season_year: params.seasonYear,
      season_quarter: params.seasonQuarter,
    });
  /**
   *
   * @param {GetSeasonRaceGuideParams} params
   * @param {string} from - `ISO-8601` offset format. Defaults to the current time. Include sessions with start times up to 3 hours after this time. Times in the past will be rewritten to the current time.
   * @param {boolean} [includeEndAfterFrom] - Include sessions which start before 'from' but end after.
   *
   * @returns
   */
  getSeasonRaceGuide = async (params: GetSeasonRaceGuideParams) =>
    await getData(this.fetchCookie, "data/season/race_guide", {
      from: params?.from,
      include_end_after_from: params?.includeEndAfterFrom,
    });
  /**
   *
   * @param {GetSpectatorSubsessionIdsParams} [params]
   * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all.
   *
   * @returns
   */
  getSpectatorSubsessionIds = async (
    params?: GetSpectatorSubsessionIdsParams
  ) =>
    await getData(this.fetchCookie, "data/season/spectator_subsession_ids", {
      event_types: params?.eventTypes,
    });
}

import * as z from "zod";

import { FetchCookie } from "../types.js";
import { getData } from "../helpers.js";

export const GetSeasonListParamsSchema = z.object({
  seasonYear: z.number(),
  seasonQuarter: z.number(),
});
export type GetSeasonListParams = z.infer<typeof GetSeasonListParamsSchema>;

export const getSeasonList = async (
  fetchCookie: FetchCookie,
  params: GetSeasonListParams,
) =>
  await getData(fetchCookie, "data/season/list", {
    season_year: params.seasonYear,
    season_quarter: params.seasonQuarter,
  });

export const GetSeasonRaceGuideParamsSchema = z.object({
  from: z.string().optional(),
  includeEndAfterFrom: z.boolean().optional(),
});
export type GetSeasonRaceGuideParams = z.infer<
  typeof GetSeasonRaceGuideParamsSchema
>;

export const getSeasonRaceGuide = async (
  fetchCookie: FetchCookie,
  params?: GetSeasonRaceGuideParams,
) =>
  await getData(fetchCookie, "data/season/race_guide", {
    from: params?.from,
    include_end_after_from: params?.includeEndAfterFrom,
  });

export const GetSpectatorSubsessionIdsParamsSchema = z.object({
  eventTypes: z.array(z.number()).optional(),
});
export type GetSpectatorSubsessionIdsParams = z.infer<
  typeof GetSpectatorSubsessionIdsParamsSchema
>;

export const getSpectatorSubsessionIds = async (
  fetchCookie: FetchCookie,
  params?: GetSpectatorSubsessionIdsParams,
) =>
  await getData(fetchCookie, "data/season/spectator_subsession_ids", {
    event_types: params?.eventTypes,
  });

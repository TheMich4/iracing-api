import { z } from "zod";
import { API } from ".";
import { getData, getLinkData } from "../helpers";

export const GetResultParamsSchema = z.object({
  subsessionId: z.number(),
  includeLicenses: z.boolean().optional(),
});
export type GetResultParams = z.infer<typeof GetResultParamsSchema>;
export const getResultsEventLogParamsSchema = z.object({
  subsessionId: z.number(),
  simsessionNumber: z.number(),
});
export type GetResultsEventLogParams = z.infer<
  typeof getResultsEventLogParamsSchema
>;
export const GetResultsLapChartDataParamsSchema = z.object({
  subsessionId: z.number(),
  simsessionNumber: z.number(),
});
export type GetResultsLapChartDataParams = z.infer<
  typeof GetResultsLapChartDataParamsSchema
>;
export const GetResultsLapDataParamsSchema = z
  .object({
    subsessionId: z.number(),
    simsessionNumber: z.number(),
    customerId: z.number().optional(),
    teamId: z.number().optional(),
  })
  .refine((data) => Boolean(data.customerId) || Boolean(data.teamId));
export type GetResultsLapDataParams = z.infer<
  typeof GetResultsLapDataParamsSchema
>;

export class ResultsAPI extends API {
  /**
   *
   * @param { GetResultParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.includeLicenses]
   *
   * @returns
   */
  getResult = async (params: GetResultParams) =>
    await getData(this.fetchCookie, "data/results/get", {
      subsession_id: params.subsessionId,
      include_licenses: params.includeLicenses,
    });
  /**
   *
   * @param {GetResultsEventLogParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   *
   * @returns
   */
  getResultsEventLog = async (params: GetResultsEventLogParams) =>
    await getData(this.fetchCookie, "data/results/event_log", {
      subsession_id: params.subsessionId,
      simsession_number: params.simsessionNumber,
    });
  /**
   *
   * @param {GetResultsLapChartDataParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   *
   * @returns
   */
  getResultsLapChartData = async (params: GetResultsLapChartDataParams) =>
    await getData(this.fetchCookie, "data/results/lap_chart_data", {
      subsession_id: params.subsessionId,
      simsession_number: params.simsessionNumber,
    });
  /**
   *
   * @param {GetResultsLapDataParams} params
   * @param {number} params.subsessionId
   * @param {number} [params.simsessionNumber] - The main event is `0`; the preceding event is `-1`, and so on.
   * @param {number} [params.customerId] - Required if the subsession was a single-driver event. Optional for team events. If omitted for a team event then the laps driven by all the team's drivers will be included.
   * @param {number} [params.teamId] - Required if the subsession was a team event.
   *
   * @returns
   */
  getResultsLapData = async (params: GetResultsLapDataParams) =>
    await getData(this.fetchCookie, "data/results/lap_data", {
      subsession_id: params.subsessionId,
      simsession_number: params.simsessionNumber,
      customer_id: params.customerId,
      team_id: params.teamId,
    });
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  searchHosted = async (params: Record<string, any>) =>
    await getData(this.fetchCookie, "data/results/search_hosted", params);
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  searchSeries = async (params: any) => {
    // TODO: Add type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseData: any = await getData(
      this.fetchCookie,
      "data/results/search_series",
      {
        season_year: params?.seasonYear,
        season_quarter: params?.seasonQuarter,
        start_range_begin: params?.startRangeBegin,
        start_range_end: params?.startRangeEnd,
        finish_range_begin: params?.finishRangeBegin,
        finish_range_end: params?.finishRangeEnd,
        cust_id: params?.customerId,
        series_id: params?.seriesId,
        race_week_num: params?.raceWeekNum,
        official_only: params?.officialOnly,
        event_types: params?.eventTypes,
        category_ids: params?.categoryIds,
      }
    );

    if (!responseData?.data?.success || !responseData?.data?.chunk_info) {
      return undefined;
    }

    const {
      data: {
        chunk_info: { base_download_url, chunk_file_names },
      },
    } = responseData;

    const chunksData = await Promise.all(
      chunk_file_names.map(async (chunkFileName: string) => {
        return await getLinkData(`${base_download_url}${chunkFileName}`);
      })
    );

    return chunksData.flatMap((chunk) => chunk);
  };
  /**
   *
   * @param params
   *
   * @returns
   */
  // TODO: Fix this
  getSeasonResults = async (params: any) =>
    await getData(this.fetchCookie, "data/results/season_results", {
      season_id: params.seasonId,
      event_type: params.eventType,
      race_week_num: params.raceWeekNumber,
    });
}

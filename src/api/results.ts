import { getData, getLinkData } from "../helpers.js";

import { FetchCookie } from "../types.js";

export const getResult = async (fetchCookie: FetchCookie, params: any) =>
  await getData(fetchCookie, "data/results/get", {
    subsession_id: params.subsessionId,
    include_licenses: params.includeLicenses,
  });

export const getResultsEventLog = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/results/event_log", {
    subsession_id: params.subsessionId,
    simsession_number: params.simsessionNumber,
  });

export const getResultsLapChartData = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/results/lap_chart_data", {
    subsession_id: params.subsessionId,
    simsession_number: params.simsessionNumber,
  });

export const getResultsLapData = async (
  fetchCookie: FetchCookie,
  params: any,
) =>
  await getData(fetchCookie, "data/results/lap_data", {
    subsession_id: params.subsessionId,
    simsession_number: params.simsessionNumber,
    customer_id: params.customerId,
    team_id: params.teamId,
  });

// TODO: Add params
export const searchHosted = async (fetchCookie: FetchCookie) =>
  await getData(fetchCookie, "data/results/search_hosted");

export const searchSeries = async (fetchCookie: FetchCookie, params: any) => {
  // TODO: Add type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseData: any = await getData(
    fetchCookie,
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
    },
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
    }),
  );

  return chunksData.flatMap((chunk) => chunk);
};

export const getSeasonResults = async (fetchCookie: FetchCookie, params: any) =>
  await getData(fetchCookie, "data/results/season_results", {
    season_id: params.seasonId,
    event_type: params.eventType,
    race_week_num: params.raceWeekNumber,
  });
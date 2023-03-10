import { getData } from "../../helpers";

const getSeriesAssets = async () => await getData("data/series/assets");

const getSeriesData = async () => await getData("data/series/get");

const getSeriesPastSeasons = async (seriesId: number) =>
	await getData("data/series/past_seasons", { series_id: seriesId });

const getSeriesSeasons = async (includeSeries?: boolean) =>
	await getData("data/series/seasons", { include_series: includeSeries });

const getSeriesStats = async () => await getData("data/series/stats_series");

export {
	getSeriesAssets,
	getSeriesData,
	getSeriesPastSeasons,
	getSeriesSeasons,
	getSeriesStats,
};

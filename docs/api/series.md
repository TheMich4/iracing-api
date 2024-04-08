# Series API

All methods in the `Series` API are available through the `series` property of the `iRacingAPI` instance.

## Assets

Get the series assets.

* Image paths are relative to https://images-static.iracing.com/

```ts
const seriesAssets = await ir.series.getSeriesAssets();
```

<sub>https://members-ng.iracing.com/data/series/assets</sub>

## Series

Get the series data.

```ts
const seriesData = await ir.series.getSeriesData();
```

<sub>https://members-ng.iracing.com/data/series/get</sub>

## Past Seasons

Get all seasons for the series.

* Filter list by `official: true` for seasons with standings.

```ts
const pastSeasons = await ir.series.getSeriesPastSeasons(params);
```

Available parameters:
* `seriesId: number` - The series ID to get the past seasons for.

<sub>https://members-ng.iracing.com/data/series/past_seasons</sub>

## Seasons

```ts
const seasons = await ir.series.getSeriesSeasons(params);
```

Available parameters:
* `includeSeries?: boolean` - Include the series in the data.

## Stats

Get the series stats.

* To get series and seasons for which standings should be available, filter the list by `official: true`.

```ts
const seriesStats = await ir.series.getSeriesStats();
```
<sub>https://members-ng.iracing.com/data/series/stats_series</sub>
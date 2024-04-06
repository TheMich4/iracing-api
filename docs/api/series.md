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

Get the past seasons.

```ts
const pastSeasons = await ir.series.getSeriesPastSeasons();
```
<sub>https://members-ng.iracing.com/data/series/past_seasons</sub>

## Stats

Get the series stats.

```ts
const seriesStats = await ir.series.getSeriesStats();
```
<sub>https://members-ng.iracing.com/data/series/stats_series</sub>
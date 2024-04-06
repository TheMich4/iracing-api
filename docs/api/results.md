# Results API

All methods in the `Results` API are available through the `results` property of the `iRacingAPI` instance.

## Result

Get the result.

```ts
const result = await ir.results.getResult();
```
<sub>https://members-ng.iracing.com/data/results/get</sub>

## Event Log

Get the event log.

```ts
const eventLog = await ir.results.getResultsEventLog();
```
<sub>https://members-ng.iracing.com/data/results/event_log</sub>

## Lap Chart Data

Get the lap chart data.

```ts
const lapChartData = await ir.results.getResultsLapChartData();
```
<sub>https://members-ng.iracing.com/data/results/lap_chart_data</sub>

## Lap Data

Get the lap data.

```ts
const lapData = await ir.results.getResultsLapData();
```
<sub>https://members-ng.iracing.com/data/results/lap_data</sub>

## Hosted Results

Search hosted results.

```ts
const hostedData = await ir.results.searchHostedResults();
```
<sub>https://members-ng.iracing.com/data/results/search_hosted</sub>

## Series Results

Search series results.

```ts
const seriesData = await ir.results.searchSeriesResults();
```
<sub>https://members-ng.iracing.com/data/results/search_series</sub>

## Season Results

Get season results.
```ts
const seasonResults = await ir.results.getSeasonResults();
```
<sub>https://members-ng.iracing.com/data/results/season_results</sub>
# Results API

All methods in the `Results` API are available through the `results` property of the `iRacingAPI` instance.

## Result

Get the result.

```ts
const result = await ir.results.getResult(params);
```

Available parameters:
* `subsessionId: number` - The session ID of the result to get.
* `includeLicenses?: boolean` - Include licenses in the result.


<sub>https://members-ng.iracing.com/data/results/get</sub>

## Event Log

Get the event log.

```ts
const eventLog = await ir.results.getResultsEventLog(params);
```

Available parameters:
* `subsessionId: number` - The session ID of the result to get.
* `simsessionNumber?: number` - The sim-session number of the result to get.
  * The main event is `0`
  * The preceding event is `-1` 
  * And so on.

<sub>https://members-ng.iracing.com/data/results/event_log</sub>

## Lap Chart Data

Get the lap chart data.

```ts
const lapChartData = await ir.results.getResultsLapChartData(params);
```

Available parameters:
* `subsessionId: number` - The session ID of the result to get.
* `simsessionNumber?: number` - The sim-session number of the result to get.
  * The main event is `0`
  * The preceding event is `-1` 
  * And so on.

<sub>https://members-ng.iracing.com/data/results/lap_chart_data</sub>

## Lap Data

Get the lap data.

```ts
const lapData = await ir.results.getResultsLapData(params);
```

Available parameters:
* `subsessionId: number` - The session ID of the result to get.
* `simsessionNumber?: number` - The sim-session number of the result to get.
  * The main event is `0`
  * The preceding event is `-1` 
  * And so on.
* `customerId?: number` - The customer ID of the result to get.
  * Required if the subsession was a single-driver event.
  * Optional for team events. 
  * If omitted for a team event, then the laps driven by all the team's drivers will be included. 

<sub>https://members-ng.iracing.com/data/results/lap_data</sub>

## Hosted Results

Search hosted results.

```ts
const hostedData = await ir.results.searchHostedResults(params);
```

Available parameters:
* TBA

<sub>https://members-ng.iracing.com/data/results/search_hosted</sub>

## Series Results

Search series results.

```ts
const seriesData = await ir.results.searchSeriesResults(params);
```

Available parameters:
* TBA

<sub>https://members-ng.iracing.com/data/results/search_series</sub>

## Season Results

Get season results.
```ts
const seasonResults = await ir.results.getSeasonResults(params);
```

Available parameters:
* TBA

<sub>https://members-ng.iracing.com/data/results/season_results</sub>
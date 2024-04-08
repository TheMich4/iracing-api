# Season API

All methods in the `Season` API are available through the `season` property of the `iRacingAPI` instance.

## List

Get the seasons.

```ts
const seasons = await ir.season.getSeasonList(params);
```

Available parameters:
* `seasonYear: number` - The season year to get the seasons for.
* `seasonQuarter: number` - The season quarter to get the seasons for.

<sub>https://members-ng.iracing.com/data/season/list</sub>

## Race Guide

Get the season race guide.

```ts
const raceGuide = await ir.season.getSeasonRaceGuide(params);
```

Available parameters:
* `from?: string` - The start date
    * [`ISO-8601`](https://en.wikipedia.org/wiki/ISO_8601) offset format. 
    * Defaults to the current time. 
    * Include sessions with start times up to 3 hours after this time. 
    * Times in the past will be rewritten to the current time.
* `includeEndAfterFrom?: boolean` - Include sessions which start before `from` but end after.

<sub>https://members-ng.iracing.com/data/season/race_guide</sub>

## Spectator Subsession Ids

Get the season spectator subsession ids.

```ts
const spectatorSubsessionIds = await ir.season.getSpectatorSubsessionIds(params);
```

Available parameters:
* `eventTypes?: number[]` - Types of events to include in the search. 
    * Defaults to all.


<sub>https://members-ng.iracing.com/data/season/spectator_subsession_ids</sub>
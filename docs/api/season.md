# Season API

All methods in the `Season` API are available through the `season` property of the `iRacingAPI` instance.

## List

Get the seasons.

```ts
const seasons = await ir.season.getSeasonList();
```
<sub>https://members-ng.iracing.com/data/season/list</sub>

## Race Guide

Get the season race guide.

```ts
const raceGuide = await ir.season.getSeasonRaceGuide();
```
<sub>https://members-ng.iracing.com/data/season/race_guide</sub>

## Spectator Subsession Ids

Get the season spectator subsession ids.

```ts
const spectatorSubsessionIds = await ir.season.getSpectatorSubsessionIds();
```
<sub>https://members-ng.iracing.com/data/season/spectator_subsession_ids</sub>
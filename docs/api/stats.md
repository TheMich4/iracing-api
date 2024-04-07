# Stats API

All methods in the `Stats` API are available through the `stats` property of the `iRacingAPI` instance.

## Member Bests

Get the member bests.

```ts
const memberBests = await ir.stats.getMemberBests(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the bests for.
  * Defaults to the authenticated member.
* `carId?: number` - The car ID to get the bests for.
  * First call should exclude `carId`.
  * Use `carsDriven` list in return for subsequent calls.

<sub>https://members-ng.iracing.com/data/stats/member_bests</sub>

## Member Career

Get the member career.

```ts
const memberCareer = await ir.stats.getMemberCareer(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the career for.
  * Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_career</sub>

## Member Division

Get the member division.

```ts
const memberDivision = await ir.stats.getMemberDivision(params);
```

Available parameters:
* `seasonId: number` - The season ID to get the division for.
* `eventType: number` - The event type to get the division for.
  * The event type code for the division type:
  * `4` - Time Trial
  * `5` - Race

<sub>https://members-ng.iracing.com/data/stats/member_division</sub>

## Member Recent Races

Get the member's recent races.

```ts
const memberRecentRaces = await ir.stats.getMemberRecentRaces(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to
    * Defaults to the authenticated member.
  
<sub>https://members-ng.iracing.com/data/stats/member_recent_races</sub>

## Member Recap

Get the member recap.

```ts
const memberRecap = await ir.stats.getMemberRecap(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the recap for.
  * Defaults to the authenticated member.
* `year?: number` - The year to get the recap for.
  * If not supplied, the current calendar year (UTC) is used.
* `season?: number` - The season (quarter) within the year to get the recap for.
  * If not supplied, the recap will be for the entire year. 

<sub>https://members-ng.iracing.com/data/stats/member_recap</sub>

## Member Summary

Get the member summary.

```ts
const memberSummary = await ir.stats.getMemberSummary(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the summary for.
  * Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_summary</sub>

## Member Yearly Stats

Get the member yearly stats.

```ts
const memberYearlyStats = await ir.stats.getMemberYearlyStats(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the yearly stats for.
  * Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_yearly_stats</sub>

## Driver Season Standings

Get the driver season standings.

```ts
const driverSeasonStandings = await ir.stats.getDriverSeasonStandings(params);
```

Available parameters:
* `seasonId: number` - The season ID to get the driver season standings for.
* `carClassId: number` - The car class ID to get the driver season standings for.
* `clubId? number` - The club ID to get the driver season standings for.
  * Defaults to all (`-1`).
* `division?: number` - The division to get the driver season standings for.
  * Divisions are 0-based: 
  * `0` is Division 1,
  * `10` is Rookie. 
  * See [`constants.getDivisions()`](/api/constants.html#divisions) for more information. 
  * Defaults to all. 
* `raceWeekNumber?: number` - The race week number to get the driver season standings for.
  * The first race week of a season is `0`.

<sub>https://members-ng.iracing.com/data/stats/season_driver_standings</sub>

## Supersession Season Standings

Get the supersession season standings.

```ts
const supersessionSeasonStandings = await ir.stats.getSupersessionSeasonStandings();
```

Available parameters:
* `seasonId: number` - The season ID to get the driver season standings for.
* `carClassId: number` - The car class ID to get the driver season standings for.
* `clubId? number` - The club ID to get the driver season standings for.
    * Defaults to all (`-1`).
* `division?: number` - The division to get the driver season standings for.
    * Divisions are 0-based:
    * `0` is Division 1,
    * `10` is Rookie.
    * See [`constants.getDivisions()`](/api/constants.html#divisions) for more information.
    * Defaults to all.
* `raceWeekNumber?: number` - The race week number to get the driver season standings for.
    * The first race week of a season is `0`.

<sub>https://members-ng.iracing.com/data/stats/season_supersession_standings</sub>

## Team Season Standings

Get the team season standings.

```ts
const teamSeasonStandings = await ir.stats.getTeamSeasonStandings();
```

Available parameters:
* `seasonId: number` - The season ID to get the driver season standings for.
* `carClassId: number` - The car class ID to get the driver season standings for.
* `raceWeekNumber?: number` - The race week number to get the driver season standings for.
  * The first race week of a season is `0`.

<sub>https://members-ng.iracing.com/data/stats/season_team_standings</sub>

## Time Trial Season Standings

Get the time trial season standings.

```ts
const timeTrialSeasonStandings = await ir.stats.getTimeTrialSeasonStandings();
```

Available parameters:
* `seasonId: number` - The season ID to get the driver season standings for.
* `carClassId: number` - The car class ID to get the driver season standings for.
* `clubId? number` - The club ID to get the driver season standings for.
  * Defaults to all (`-1`).
* `division?: number` - The division to get the driver season standings for.
  * Divisions are 0-based:
  * `0` is Division 1,
  * `10` is Rookie.
  * See [`constants.getDivisions()`](/api/constants.html#divisions) for more information.
  * Defaults to all.
* `raceWeekNumber?: number` - The race week number to get the driver season standings for.
  * The first race week of a season is `0`.

<sub>https://members-ng.iracing.com/data/stats/season_tt_results</sub>

## Qualify Season Standings

Get the qualify season standings.

```ts
const qualifySeasonStandings = await ir.stats.getQualifySeasonStandings();
```

Available parameters:
* `seasonId: number` - The season ID to get the driver season standings for.
* `carClassId: number` - The car class ID to get the driver season standings for.
* `clubId? number` - The club ID to get the driver season standings for.
    * Defaults to all (`-1`).
* `division?: number` - The division to get the driver season standings for.
    * Divisions are 0-based:
    * `0` is Division 1,
    * `10` is Rookie.
    * See [`constants.getDivisions()`](/api/constants.html#divisions) for more information.
    * Defaults to all.
* `raceWeekNumber?: number` - The race week number to get the driver season standings for.
    * The first race week of a season is `0`.
  
<sub>https://members-ng.iracing.com/data/stats/season_qualify_results</sub>

## World Records    

Get the world records.

```ts
const worldRecords = await ir.stats.getWorldRecords();
```

Available parameters:
* `carId: number` - The car ID to get the world records for.
* `trackId: number` - The track ID to get the world records for.
* `seasonYear?: number` - Limit best times to a given year.
* `seasonQuarter?: number` - Limit best times to a given quarter.
  * Only applicable when year is used. 

<sub>https://members-ng.iracing.com/data/stats/world_records</sub>
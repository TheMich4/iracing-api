# Stats API

All methods in the `Stats` API are available through the `stats` property of the `iRacingAPI` instance.

## Member Bests

Get the member bests.

```ts
const memberBests = await ir.stats.getMemberBests();
```
<sub>https://members-ng.iracing.com/data/stats/member_bests</sub>

## Member Career

Get the member career.

```ts
const memberCareer = await ir.stats.getMemberCareer();
```
<sub>https://members-ng.iracing.com/data/stats/member_career</sub>

## Member Division

Get the member division.

```ts
const memberDivision = await ir.stats.getMemberDivision();
```
<sub>https://members-ng.iracing.com/data/stats/member_division</sub>

## Member Recent Races

Get the member's recent races.

```ts
const memberRecentRaces = await ir.stats.getMemberRecentRaces();
```
<sub>https://members-ng.iracing.com/data/stats/member_recent_races</sub>

## Member Recap

Get the member recap.

```ts
const memberRecap = await ir.stats.getMemberRecap();
```
<sub>https://members-ng.iracing.com/data/stats/member_recap</sub>

## Member Summary

Get the member summary.

```ts
const memberSummary = await ir.stats.getMemberSummary();
```
<sub>https://members-ng.iracing.com/data/stats/member_summary</sub>

## Member Yearly Stats

Get the member yearly stats.

```ts
const memberYearlyStats = await ir.stats.getMemberYearlyStats();
```
<sub>https://members-ng.iracing.com/data/stats/member_yearly_stats</sub>

## Driver Season Standings

Get the driver season standings.

```ts
const driverSeasonStandings = await ir.stats.getDriverSeasonStandings();
```
<sub>https://members-ng.iracing.com/data/stats/season_driver_standings</sub>

## Supersession Season Standings

Get the supersession season standings.

```ts
const supersessionSeasonStandings = await ir.stats.getSupersessionSeasonStandings();
```
<sub>https://members-ng.iracing.com/data/stats/season_supersession_standings</sub>

## Team Season Standings

Get the team season standings.

```ts
const teamSeasonStandings = await ir.stats.getTeamSeasonStandings();
```
<sub>https://members-ng.iracing.com/data/stats/season_team_standings</sub>

## Time Trial Season Standings

Get the time trial season standings.

```ts
const timeTrialSeasonStandings = await ir.stats.getTimeTrialSeasonStandings();
```
<sub>https://members-ng.iracing.com/data/stats/season_tt_results</sub>

## Qualify Season Standings

Get the qualify season standings.

```ts
const qualifySeasonStandings = await ir.stats.getQualifySeasonStandings();
```
<sub>https://members-ng.iracing.com/data/stats/season_qualify_results</sub>

## World Records    

Get the world records.

```ts
const worldRecords = await ir.stats.getWorldRecords();
```
<sub>https://members-ng.iracing.com/data/stats/world_records</sub>
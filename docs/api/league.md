# League API

All methods in the `League` API are available through the `league` property of the `iRacingAPI` instance.

## League Sessions

Get the league sessions.

```ts
const leagueSessions = await ir.league.getCustLeagueSessions();
```
<sub>https://members-ng.iracing.com/data/league/cust_league_sessions</sub>

## Directory

Get the league directory.

```ts
const leagueDirectory = await ir.league.getLeagueDirectory();
```
<sub>https://members-ng.iracing.com/data/league/directory</sub>

## League Data

Get the league data.

```ts
const leagueData = await ir.league.getLeagueData();
```
<sub>https://members-ng.iracing.com/data/league/get</sub>

## Points Systems

Get the league points systems.

```ts
const pointsSystem = await ir.league.getLeaguePointsSystem();
```
<sub>https://members-ng.iracing.com/data/league/get_points_systems</sub>

## Membership

Get the league membership.

```ts
const leagueMembership = await ir.league.getLeagueMembership();
```
<sub>https://members-ng.iracing.com/data/league/membership</sub>

## Seasons

Get the league seasons.

```ts
const leagueSeasons = await ir.league.getLeagueSeasons();
```
<sub>https://members-ng.iracing.com/data/league/seasons</sub>

## Season Standings

Get the league season standings.

```ts
const seasonStandings = await ir.league.getLeagueSeasonStandings();
```
<sub>https://members-ng.iracing.com/data/league/season_standings</sub>

## Season Sessions

Get the league season sessions.

```ts
const seasonSessions = await ir.league.getLeagueSeasonSessions();
```
<sub>https://members-ng.iracing.com/data/league/season_sessions</sub>
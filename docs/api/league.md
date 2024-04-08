# League API

All methods in the `League` API are available through the `league` property of the `iRacingAPI` instance.

## League Sessions

Get the league sessions.

```ts
const leagueSessions = await ir.league.getCustLeagueSessions(params);
```

Available parameters:
* `mine?: boolean` 
    * If `true`, return only sessions created by this user.
* `packageId?: number` - The package id to filter the sessions by.
    * If set, return only sessions using this car or track package ID.

<sub>https://members-ng.iracing.com/data/league/cust_league_sessions</sub>

## Directory

Get the league directory.

```ts
const leagueDirectory = await ir.league.getLeagueDirectory(params);
```

Available parameters:
* `search?: string` - The search string to filter the leagues by.
    * Will search against league name, description, owner and league ID.
* `tag?: string` - The tag to filter the leagues by.
    * One or more tags, comma-separated.
* `restrictToMember?: boolean`
    * If `true`, include only leagues for which customer is a member.
* `restrictToRecruiting?: boolean`
    * If `true`, include only leagues that are recruiting.
* `restrictToFriends?: boolean`
    * If `true`, include only leagues owned by a friend.
* `restrictToWatched?: boolean`
    * If `true`, include only leagues owned by a watched member.
* `minimumRosterCount?: number`
    * If set, include leagues with at least this number of members.
* `maximumRosterCount?: number`
    * If set, include leagues with at most this number of members.
* `lowerbound?: number`
    * First row of results to return.
    * Defaults to `1`.
* `upperbound?: number`
    * Last row of results to return.
    * Defaults to `lowerbound + 39`.
* `sort?: string`
    * One of `relevance`, `leaguename`, `displayname`, `rostercount`. 
    * `displayname` is owner's name. 
    * Defaults to relevance.
* `order?: string`
    * One of `asc`, `desc`.
    * Defaults to `asc`.

<sub>https://members-ng.iracing.com/data/league/directory</sub>

## League Data

Get the league data.

```ts
const leagueData = await ir.league.getLeagueData(params);
```

Available parameters:
* `leagueId: number` - The league ID to get the data for.
* `includeLicenses?: boolean` - Include licenses in the response.
    * For faster responses, only request when necessary.

<sub>https://members-ng.iracing.com/data/league/get</sub>

## Points Systems

Get the league points systems.

```ts
const pointsSystem = await ir.league.getLeaguePointsSystem(params);
```

Available parameters:
* `leagueId: number` - The league ID to get the points system for.
* `seasonId?: number` - The season ID to get the points system for.
    * If included and the season is using custom points (`pointsSystemId: 2`) then the custom points option is included in the returned list. 
    * Otherwise the custom points option is not returned.

<sub>https://members-ng.iracing.com/data/league/get_points_systems</sub>

## Membership

Get the league membership.

```ts
const leagueMembership = await ir.league.getLeagueMembership(params);
```

Available parameters:
* `customerId?: number` - The customer ID to get the membership for.
    * If different from the authenticated member, the following restrictions apply: 
        * Caller cannot be on requested customer's blocklist or an empty list will result; 
        * Requested customer cannot have their online activity preference set to hidden or an empty list will result; 
        * Only leagues for which the requested customer is an admin and the league roster is not private are returned.
* `includeLeague?: boolean` - Include the league in the response.

<sub>https://members-ng.iracing.com/data/league/membership</sub>

## Seasons

Get the league seasons.

```ts
const leagueSeasons = await ir.league.getLeagueSeasons(params);
```

Available parameters:
* `leagueId: number` - The league ID to get the seasons for.
* `retired?: boolean` - Include retired seasons.
    * If `true`, include seasons which are no longer active.

<sub>https://members-ng.iracing.com/data/league/seasons</sub>

## Season Standings

Get the league season standings.

```ts
const seasonStandings = await ir.league.getLeagueSeasonStandings(params);
```

Available parameters:
* `leagueId: number` - The league ID to get the season standings for.
* `seasonId: number` - The season ID to get the season standings for. 
* `carClassId?: number` - The car class ID to filter the standings by.
* `carId?: number` - The car ID to filter the standings by.
    * If `carClassId` is included, then the standings are for the car class.
    * Otherwise, they are for the car across car classes.

<sub>https://members-ng.iracing.com/data/league/season_standings</sub>

## Season Sessions

Get the league season sessions.

```ts
const seasonSessions = await ir.league.getLeagueSeasonSessions(params);
```

Available parameters:
* `leagueId: number` - The league ID to get the season sessions for.
* `seasonId: number` - The season ID to get the season sessions for.
* `resultsOnly?: boolean`
  * If `true`, include only sessions for which results are available.

<sub>https://members-ng.iracing.com/data/league/season_sessions</sub>
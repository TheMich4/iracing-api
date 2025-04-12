# TODO - Missing iRacing API Types and Endpoints

This file lists the API endpoints where parameter or response types are currently missing or incomplete, and endpoints that are not implemented at all.

## Missing Types for Implemented Endpoints

### `api/car-class.ts`

-   `getCarClasses`: Missing response type.

### `api/car.ts`

-   `getCarAssets`: Missing response type.

### `api/constants.ts`

-   `getEventTypes`: Missing response type (`Event[]`).

### `api/league.ts`

-   `getLeagueData`: Missing response type.
-   `getLeaguePointSystem`: Missing response type.
-   `getLeagueMembership`: Missing response type.
-   `getLeagueSeasons`: Missing response type.
-   `getLeagueSeasonStandings`: Missing response type.
-   `getLeagueSeasonSessions`: Missing response type.
-   `getLeagueRoster`: Missing response type.

### `api/lookup.ts`

-   `getDrivers`: Missing response type.
-   `getLookupData`: Missing response type.

### `api/results.ts`

-   `getResultsEventLog`: Missing response type.
-   `getResultsLapChartData`: Missing response type.

### `api/time-attack.ts`

-   `getTimeAttackSeasonResults`: Missing response type (`Array<unknown>`).

### `api/driver-stats.ts`

-   All methods: Missing response types.

### `api/member.ts`

-   `getMemberAwardInstances`: Missing response type.

### `api/season.ts`

-   `getSpectatorSubsessionIdsDetail`: Missing response type.

## Missing Endpoint Implementations

No endpoints are currently missing implementation. All endpoints mentioned in api.json are now implemented. 
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

### `api/lookup.ts`

-   `getDrivers`: Missing response type.

### `api/results.ts`

-   `getResultsEventLog`: Missing response type.
-   `getResultsLapChartData`: Missing response type.

### `api/time-attack.ts`

-   `getTimeAttackSeasonResults`: Missing response type (`Array<unknown>`).

## Missing Endpoint Implementations

-   **`driver_stats_by_category/*`**: Endpoints for `oval`, `sports_car`, `formula_car`, `road`, `dirt_oval`, `dirt_road`.
-   **`league/roster`**: Get league roster.
-   **`lookup/get`**: General lookup endpoint (note suggests parameters are passed via query string `?key=value&key=value...`).
-   **`member/award_instances`**: Get specific award instances for a member.
-   **`season/spectator_subsessionids_detail`**: Get detailed spectator subsession IDs.
-   **`stats/season_tt_standings`**: Get Time Trial season standings (note: different from `season_tt_results` which is implemented). 
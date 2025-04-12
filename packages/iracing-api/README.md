# iracing-api

[Full docs](https://iracing-api.dyczkowski.dev/)

## Installation

```bash
npm install iracing-api
yarn add iracing-api
pnpm i iracing-api
bun i iracing-api
```

## Basic Usage

```typescript
import IracingAPI from 'iracing-api'

const irUser = 'FOO@gmail.com'
const irPass = 'BAR'

const main = async () => {
    const ir = new IracingAPI()

    // First you have to login to iracing using your credentials to be able to use the API.
    await ir.login(irUser, irPass)

    // Now you can use any endpoint, e.g. getCars
    const cars = await ir.car.getCars()

    console.log(cars)
}

main().then(() => 'Done')
```

## Endpoint Mapping

| API Class       | Method Name                      | Endpoint Path                              |
| --------------- | -------------------------------- | ------------------------------------------ |
| `CarAPI`        | `getCarAssets`                   | `data/car/assets`                          |
| `CarAPI`        | `getCars`                        | `data/car/get`                             |
| `CarClassAPI`   | `getCarClasses`                  | `data/carclass/get`                        |
| `ConstantsAPI`  | `getCategories`                  | `data/constants/categories`                |
| `ConstantsAPI`  | `getDivisions`                   | `data/constants/divisions`                 |
| `ConstantsAPI`  | `getEventTypes`                  | `data/constants/event_types`               |
| `HostedAPI`     | `getHostedCombinedSessions`      | `data/hosted/combined_sessions`            |
| `HostedAPI`     | `getHostedSessions`              | `data/hosted/sessions`                     |
| `LeagueAPI`     | `getCustLeagueSessions`          | `data/league/cust_league_sessions`         |
| `LeagueAPI`     | `getLeagueDirectory`             | `data/league/directory`                    |
| `LeagueAPI`     | `getLeagueData`                  | `data/league/get`                          |
| `LeagueAPI`     | `getLeaguePointSystem`           | `data/league/get_points_systems`           |
| `LeagueAPI`     | `getLeagueMembership`            | `data/league/membership`                   |
| `LeagueAPI`     | `getLeagueSeasons`               | `data/league/seasons`                      |
| `LeagueAPI`     | `getLeagueSeasonStandings`       | `data/league/season_standings`             |
| `LeagueAPI`     | `getLeagueSeasonSessions`        | `data/league/season_sessions`              |
| `LookupAPI`     | `getClubHistory`                 | `data/lookup/club_history`                 |
| `LookupAPI`     | `getCountries`                   | `data/lookup/countries`                    |
| `LookupAPI`     | `getDrivers`                     | `data/lookup/drivers`                      |
| `LookupAPI`     | `getLicenses`                    | `data/lookup/licenses`                     |
| `MemberAPI`     | `getMemberAwards`                | `data/member/awards`                       |
| `MemberAPI`     | `getMemberChartData`             | `data/member/chart_data`                   |
| `MemberAPI`     | `getMemberData`                  | `data/member/get`                          |
| `MemberAPI`     | `getMemberInfo`                  | `data/member/info`                         |
| `MemberAPI`     | `getMemberParticipationCredits`  | `data/member/participation_credits`        |
| `MemberAPI`     | `getMemberProfile`               | `data/member/profile`                      |
| `ResultsAPI`    | `getResult`                      | `data/results/get`                         |
| `ResultsAPI`    | `getResultsEventLog`             | `data/results/event_log`                   |
| `ResultsAPI`    | `getResultsLapChartData`         | `data/results/lap_chart_data`              |
| `ResultsAPI`    | `getResultsLapData`              | `data/results/lap_data`                    |
| `ResultsAPI`    | `searchHosted`                   | `data/results/search_hosted`               |
| `ResultsAPI`    | `searchSeries`                   | `data/results/search_series`               |
| `ResultsAPI`    | `getSeasonResults`               | `data/results/season_results`              |
| `SeasonAPI`     | `getSeasonList`                  | `data/season/list`                         |
| `SeasonAPI`     | `getSeasonRaceGuide`             | `data/season/race_guide`                   |
| `SeasonAPI`     | `getSpectatorSubsessionIds`      | `data/season/spectator_subsession_ids`     |
| `SeriesAPI`     | `getSeriesAssets`                | `data/series/assets`                       |
| `SeriesAPI`     | `getSeriesData`                  | `data/series/get`                          |
| `SeriesAPI`     | `getSeriesPastSeasons`           | `data/series/past_seasons`                 |
| `SeriesAPI`     | `getSeriesSeasons`               | `data/series/seasons`                      |
| `SeriesAPI`     | `getSeriesStats`                 | `data/series/stats_series`                 |
| `StatsAPI`      | `getMemberBests`                 | `data/stats/member_bests`                  |
| `StatsAPI`      | `getMemberCareer`                | `data/stats/member_career`                 |
| `StatsAPI`      | `getMemberDivision`              | `data/stats/member_division`               |
| `StatsAPI`      | `getMemberRecentRaces`           | `data/stats/member_recent_races`           |
| `StatsAPI`      | `getMemberRecap`                 | `data/stats/member_recap`                  |
| `StatsAPI`      | `getMemberSummary`               | `data/stats/member_summary`                |
| `StatsAPI`      | `getMemberYearlyStats`           | `data/stats/member_yearly`                 |
| `StatsAPI`      | `getDriverSeasonStandings`       | `data/stats/season_driver_standings`       |
| `StatsAPI`      | `getSupersessionSeasonStandings` | `data/stats/season_supersession_standings` |
| `StatsAPI`      | `getTeamSeasonStandings`         | `data/stats/season_team_standings`         |
| `StatsAPI`      | `getTimeTrialSeasonStandings`    | `data/stats/season_tt_results`             |
| `StatsAPI`      | `getQualifySeasonStandings`      | `data/stats/season_qualify_results`        |
| `StatsAPI`      | `getWorldRecords`                | `data/stats/world_records`                 |
| `TeamAPI`       | `getTeamData`                    | `data/team/get`                            |
| `TimeAttackAPI` | `getTimeAttackSeasonResults`     | `data/time_attack/member_season_results`   |
| `TrackAPI`      | `getTrackAssets`                 | `data/track/assets`                        |
| `TrackAPI`      | `getTracks`                      | `data/track/get`                           |

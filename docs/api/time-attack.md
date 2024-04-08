# Time Attack API

All methods in the `Time Attack` API are available through the `timeAttack` property of the `iRacingAPI` instance.

## Season Results

Get the time attack season results.

* Results for the authenticated member, if any.

```ts
const seasonResults = await ir.timeAttack.getTimeAttackSeasonResults(params);
```

Available parameters:
* `seasonId: number` - The season ID to get the results for.

<sub>https://members-ng.iracing.com/data/time_attack/member_season_results</sub>
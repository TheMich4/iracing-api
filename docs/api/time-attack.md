# Time Attack API

All methods in the `Time Attack` API are available through the `timeAttack` property of the `iRacingAPI` instance.

## Season Results

Get the time attack season results.

```ts
const seasonResults = await ir.timeAttack.getTimeAttackSeasonResults();
```
<sub>https://members-ng.iracing.com/data/time_attack/member_season_results</sub>
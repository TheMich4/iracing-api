# Member API

All methods in the `Member` API are available through the `member` property of the `iRacingAPI` instance.

## Awards

Get the awards.

```ts
const awards = await ir.member.getAwards();
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the awards for.
  * Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/member/awards</sub>

## Chart Data

Get the chart data.

```ts
const chartData = await ir.member.getChartData();
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the chart data for.
  * Defaults to the authenticated member.
* `categoryId: number` - The category ID
  * `1` - Oval
  * `2` - Road
  * `3` - Dirt Oval
  * `4` - Dirt Road
* `chartType: number` - The chart type
  * `1` - iRating
  * `2` - TT Rating
  * `3` - License/SR

<sub>https://members-ng.iracing.com/data/member/chart_data</sub>

## Data

Get the member data.

```ts
const memberData = await ir.member.getMemberData(params);
```

Available parameters:
* `customerIds: number[]` - The customer IDs of the members to get the data for.
* `includeLicenses?: boolean` - Include the licenses in the data.

<sub>https://members-ng.iracing.com/data/member/get</sub>

## Info

Get the member info.

* Always the authenticated member.

```ts
const memberInfo = await ir.member.getMemberInfo();
```
<sub>https://members-ng.iracing.com/data/member/info</sub>

## Participation Credits

Get the participation credits.

* Always the authenticated member.

```ts
const participationCredits = await ir.member.getParticipationCredits();
```
<sub>https://members-ng.iracing.com/data/member/participation_credits</sub>

## Profile

Get the member profile.


```ts
const memberProfile = await ir.member.getMemberProfile(params);
```

Available parameters:
* `customerId?: number` - The customer ID of the member to get the profile for.
  * Defaults to the authenticated member.
  
<sub>https://members-ng.iracing.com/data/member/profile</sub>
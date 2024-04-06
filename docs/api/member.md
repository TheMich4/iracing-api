# Member API

All methods in the `Member` API are available through the `member` property of the `iRacingAPI` instance.

## Awards

Get the awards.

```ts
const awards = await ir.member.getAwards();
```
<sub>https://members-ng.iracing.com/data/member/awards</sub>

## Chart Data

Get the chart data.

```ts
const chartData = await ir.member.getChartData();
```
<sub>https://members-ng.iracing.com/data/member/chart_data</sub>

## Data

Get the member data.

```ts
const memberData = await ir.member.getMemberData();
```
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

```ts
const participationCredits = await ir.member.getParticipationCredits();
```
<sub>https://members-ng.iracing.com/data/member/participation_credits</sub>

## Profile

Get the member profile.

```ts
const memberProfile = await ir.member.getMemberProfile();
```
<sub>https://members-ng.iracing.com/data/member/profile</sub>
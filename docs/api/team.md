# Team API

All methods in the `Team` API are available through the `team` property of the `iRacingAPI` instance.

## Data

Get the team data.

```ts
const teamData = await ir.team.getTeamData(params);
```

Available parameters:
* `teamId: number` - The team ID of the team to get the data for.
* `includeMembers?: boolean` - Include the members in the data.
    * For faster responses, only request when necessary.

<sub>https://members-ng.iracing.com/data/team/get</sub>
# Constants API

All methods in the `Constants` API are available through the `constants` property of the `iRacingAPI` instance.

## Categories

Get the categories.

```ts
const categories = await ir.constants.getCategories();
```
<sub>https://members-ng.iracing.com/data/constants/categories</sub>

## Divisions

Get the divisions.

```ts
const divisions = await ir.constants.getDivisions();
```
<sub>https://members-ng.iracing.com/data/constants/divisions</sub>

## Event Types

Get the event types.

```ts
const eventTypes = await ir.constants.getEventTypes();
```
<sub>https://members-ng.iracing.com/data/constants/eventtypes</sub>
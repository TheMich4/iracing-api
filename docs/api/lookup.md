# Lookup API

All methods in the `Lookup` API are available through the `lookup` property of the `iRacingAPI` instance.

## Club History

Get the club history.

* Returns an earlier history if requested quarter does not have a club history. 

```ts
const clubHistory = await ir.lookup.getClubHistory(params);
```

Available parameters:
* `seasonYear: number` - The season year to get the club history for.
* `seasonQuarter: number` - The season quarter to get the club history for.

<sub>https://members-ng.iracing.com/data/lookup/club_history</sub>

## Countries

Get the countries.

```ts
const countries = await ir.lookup.getCountries();
```

<sub>https://members-ng.iracing.com/data/lookup/countries</sub>

## Drivers

Get the drivers.

```ts
const drivers = await ir.lookup.getDrivers(params);
```

Available parameters:
* `searchTerm: string` - The search string to filter the drivers by.
  * A customer ID or partial name for which to search.
* `leagueId?: number` - The league id to filter the drivers by.
    * Narrow the search to the roster of the given league.

<sub>https://members-ng.iracing.com/data/lookup/drivers</sub>

## Licenses

Get the licenses.

```ts
const licenses = await ir.lookup.getLicenses();
```
<sub>https://members-ng.iracing.com/data/lookup/licenses</sub>
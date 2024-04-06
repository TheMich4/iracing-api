# Lookup API

All methods in the `Lookup` API are available through the `lookup` property of the `iRacingAPI` instance.

## Club History

Get the club history.

* Returns an earlier history if requested quarter does not have a club history. 

```ts
const clubHistory = await ir.lookup.getClubHistory();
```
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
const drivers = await ir.lookup.getDrivers();
```
<sub>https://members-ng.iracing.com/data/lookup/drivers</sub>

## Licenses

Get the licenses.

```ts
const licenses = await ir.lookup.getLicenses();
```
<sub>https://members-ng.iracing.com/data/lookup/licenses</sub>
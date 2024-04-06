# Car API

All methods in the `Car` API are available through the `car` property of the `iRacingAPI` instance.

## Cars

Get the cars.

```ts
const cars = await ir.car.getCars();
```
<sub>https://members-ng.iracing.com/data/car/get</sub>

## Car Assets

Get the car assets.

* Image paths are relative to https://images-static.iracing.com/

```ts
const carAssets = await ir.car.getCarAssets();
```
<sub>https://members-ng.iracing.com/data/car/assets</sub>


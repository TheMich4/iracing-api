# Track API

All methods in the `Track` API are available through the `track` property of the `iRacingAPI` instance.

## Assets

Get the track assets.

* Image paths are relative to https://images-static.iracing.com/

```ts
const trackAssets = await ir.track.getTrackAssets();
```
<sub>https://members-ng.iracing.com/data/track/assets</sub>

## Tracks

Get the tracks.

```ts
const tracks = await ir.track.getTracks();
```
<sub>https://members-ng.iracing.com/data/track/get</sub>
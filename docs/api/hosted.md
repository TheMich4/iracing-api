# Hosted API

All methods in the `Hosted` API are available through the `hosted` property of the `iRacingAPI` instance.

## Hosted Sessions

Get the hosted sessions.

* Sessions that can be joined as a driver. Without spectator and non-league pending sessions for the user.

```ts
const hostedSessions = await ir.hosted.getHostedSessions();
```
<sub>https://members-ng.iracing.com/data/hosted/sessions</sub>

## Combined Sessions

Get the combined sessions.

* Sessions that can be joined as a driver or spectator, and also includes non-league pending sessions for the user. 

```ts
const combinedSessions = await ir.hosted.getCombinedSessions();
```

<sub>https://members-ng.iracing.com/data/hosted/combined_sessions</sub>
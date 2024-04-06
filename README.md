# iracing-api

## This is a work in progress!

This is a work in progress. The goal of this project is to create a javascript wrapper around official iRacing API that will also provide all typings. The API is documented [here](https://forums.iracing.com/discussion/15068/general-availability-of-data-api/p1).

### _Full docs coming soon. You can look into the source code in the mean time_

## Installation

```bash
npm install iracing-api
yarn add iracing-api
pnpm i iracing-api
bun i iracing-api
```

## Basic Usage

// First you have to login to iracing using your credentials in order to be able to use the API.

```typescript
import IracingAPI from 'iracing-api'

const irUser = 'FOO@gmail.com'
const irPass = 'BAR'

const main = async () => {
    const ir = new IracingAPI()

    console.log(cars)
    await ir.login(irUser, irPass)

    // Now you can use any endpoint, e.g. getCars
    const cars = await ir.car.getCars()
}

main().then(() => 'Done')
```

### Note that since this is a work in progress, the API is not stable and may change in the future.

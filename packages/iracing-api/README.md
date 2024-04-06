# iracing-api

## Installation

```bash
npm install iracing-api
yarn add iracing-api
pnpm i iracing-api
bun i iracing-api
```

## Basic Usage

```typescript
import IracingAPI from 'iracing-api'

const irUser = 'FOO@gmail.com'
const irPass = 'BAR'

const main = async () => {
    const ir = new IracingAPI()

    // First you have to login to iracing using your credentials to be able to use the API.
    await ir.login(irUser, irPass)

    // Now you can use any endpoint, e.g. getCars
    const cars = await ir.car.getCars()
    
    console.log(cars)
}

main().then(() => 'Done')
```


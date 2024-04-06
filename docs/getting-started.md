# Getting Started

## Installation

Add **iracing-api** to your project by running the following command:

::: code-group

```sh [npm]
$ npm add iracing-api
```

```sh [pnpm]
$ pnpm add iracing-api
```

```sh [yarn]
$ yarn add iracing-api
```

```sh [bun]
$ bun add iracing-api
```

:::

## Basic usage

To use the iRacing API, you have to log in first, and then you can request data. Here is a basic example:

```ts
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
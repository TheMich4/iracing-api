# How to use

## API Client

```ts
    import { iRacingAPI } from 'iracing-api';

    const ir = new iRacingAPI(options);
```

### Options

* logger: `boolean` - Enable logging of requests and responses. Default is `false`. 
* manageRateLimits: `boolean` - Enable rate limit management. Default is `false`.
* rateLimitPadding: `number` - Add a padding to the rate limit to avoid hitting the limit. Default is `5`.

### Login

```ts
    const email = 'email@domain.com';
    const password = 'password';

    await ir.login(email, password);
```



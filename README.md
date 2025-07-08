# loyaltylion/headless-api-client

This is a lightweight (~4KB gzipped) TypeScript/JavaScript client that can be used to interact
with the [LoyaltyLion Headless API](https://developers.loyaltylion.com/headless-api).

All API requests and responses are fully typed based on our OpenAPI spec. You
can also import and use the types directly and make your own HTTP requests.

Note that this client is exclusively for server-side use, as it requires private
API keys which must not be exposed to the client.

# How to use

## Create and use a client

To use the client, you'll need your LoyaltyLion Site ID and an [API
key](https://developers.loyaltylion.com/api-reference/authentication/api-keys).

```ts
import { createHeadlessApiClient } from "@loyaltylion/headless-api-client";

const client = createHeadlessApiClient({
  siteId: parseInt(process.env.LOYALTYLION_SITE_ID),
  apiKey: process.env.LOYALTYLION_API_KEY,
  channel: "web",
});

// retrieve the full site configuration
const configuration = await client.getConfiguration();
```

## Use a custom fetch implementation

By default, API calls will use the global `fetch` implementation. You can
instead pass a custom fetch implementation when creating a client provided it
implements the `(input: Request) => Promise<Response>` type.

```ts
const client = createHeadlessApiClient({
  siteId: parseInt(process.env.LOYALTYLION_SITE_ID),
  apiKey: process.env.LOYALTYLION_API_KEY,
  channel: "web",
  customFetch: (input) => {
    // do request using your own HTTP client
  },
});
```

## Import and use types

All request and response types can be imported and used directly.

```ts
import type { SiteConfiguration } from "@loyaltylion/headless-api-client";

function renderConfiguration(configuration: SiteConfiguration) {}

renderConfiguration(await client.getConfiguration());
```

You can also import types from the underlying OpenAPI spec:

```ts
import type {
  components,
  operations,
  paths,
} from "@loyaltylion/headless-api-client";
```

If you wanted to make your own request to, for example, the `Initialize Session`
endpoint without using our client, you could do something like the following:

```ts
import type {
  CustomersInitializeSessionRequestBody,
  CustomersInitializeSessionResponseBody,
} from "@loyaltylion/headless-api-client";

const siteId = 1;
const apiKey = "key";
const merchantId = "1001";

const res = await fetch(
  "https://api.loyaltylion.com/headless/2025-06/${siteId}/customers/${merchantId}/sessions",
  {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-LoyaltyLion-Channel": "web",
    },
    body: JSON.stringify({
      customer: {
        email: "alice@example.com",
      },
      session: {
        page_url: "https://example.com/collections",
      },
    } satisfies CustomersInitializeSessionRequestBody),
  }
);

if (!res.ok) {
  throw new Error("API request failed");
}

const data: CustomersInitializeSessionResponseBody = await res.json();
```

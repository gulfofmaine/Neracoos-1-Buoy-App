// Shared `dataCollection` settings for the client, server, and edge Sentry configs.
//
// Sentry SDK v11 replaced `sendDefaultPii` with `dataCollection`, and an unset
// `dataCollection` collects everything (user info, cookies, request/response
// bodies, ...). We never set `sendDefaultPii`, so this pins the restrictive v10
// defaults to keep collecting the same data as before.
// https://docs.sentry.io/platforms/javascript/migration/v10-to-v11/#data-collection

import type * as Sentry from "@sentry/nextjs"

type DataCollection = NonNullable<NonNullable<Parameters<typeof Sentry.init>[0]>["dataCollection"]>

const sensitiveKeyDenylist = { deny: ["forwarded", "-ip", "remote-", "via", "-user"] }

export const dataCollection: DataCollection = {
  userInfo: false,
  cookies: false,
  httpHeaders: {
    request: sensitiveKeyDenylist,
    response: sensitiveKeyDenylist,
  },
  httpBodies: [],
  urlQueryParams: sensitiveKeyDenylist,
  genAI: { inputs: false, outputs: false },
  databaseQueryData: false,
  graphQL: { document: false, variables: false },
  // v10 captured 7 lines of source context; v11 defaults to 5
  frameContextLines: 7,
}

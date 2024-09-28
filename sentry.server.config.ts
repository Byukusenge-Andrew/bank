// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://bd10b1c0cd85e87af2fccf8bc8022362@o4508032192806912.ingest.us.sentry.io/4508032195821568",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.

  
  tracesSampleRate: 1,	

  debug: false,

});

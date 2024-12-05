# CHANGELOG

## Upcoming (unknown release)

Additions:

Changes:

Fixes:

Dependency updates:

## 1.0.5 - 12/5/2024

Additions:

Changes:

Fixes:

- Revert OpenLayers 10.3.0 [3265](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3265)

Dependency updates:

## 1.0.4 - 12/3/2024

Additions:

- Add forecast and prediction indicators to map and tide table to sensor page [3235](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3235)

Changes:

Fixes:

Dependency updates:

- Javascript/Frontend:
  - react-select from 5.8.1 to 5.8.3
  - next-nprogress-bar from 2.3.14 to 2.3.15
  - sass from 1.80.3 to 1.81.0
  - typescript from 5.6.3 to 5.7.2
  - font-awesome group
    - @fortawesome/fontawesome-svg-core from 6.6.0 to 6.7.1
    - @fortawesome/free-solid-svg-icons
  - cross-spawn from 7.0.3 to 7.0.6
  - storybook group from 8.4.2 to 8.4.6
    - eslint-plugin-storybook from 0.11.0 0.11.1
  - react-query group
    - @tanstack/react-query from 5.59.20 to 5.62.2
    - @tanstack/react-query-devtools from 5.59.20 to 5.62.2
  - ol from 10.2.1 to 10.3.0
  - @playwright/test from 1.48.2 to 1.49.0
  - sass from 1.81.0 to 1.81.1
  - @sentry/nextjs from 8.37.1 to 8.42.0
  - @reduxjs/toolkit from 2.3.0 to 2.4.0
  - @spotlightjs/spotlight from 2.5.0 to 2.6.3
  - Types:
    - @types/jest from 29.5.13 to 29.5.14
    - @types/node from 22.7.5 to 22.10.1
    - @types/react from 18.3.11 to 18.3.12
- Actions:
  - docker/build-push-action from 6.9.0 to 6.10.0

## 1.0.3 - 11/21/2024

Additions:

- Add timeframe selector to main platform observations [3194](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3194)

Changes:

Fixes:

- Fix lost invisible flood thresholds [3229](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3229)

Dependency updates:

## 1.0.2 - 11/8/2024

Additions:

- Add Global loading status [3139](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3139)
- Add quotes to Kustomize newTag [3195](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3195)
- Adds a banner for emergency nws link [3184](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3184)

Changes:

- Filter old and future forecasts [3155](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3155)
- Update station name format [3174](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3174)
- seperate sensors by region [3198](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3198)
- Decrease x axis timeframe and make map icons circles [3201](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3201)
- Adelle/default search params [3213](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3213)

Fixes:

- N/A

Dependency updates:s

- Github Actions:
  - docker/build-push-action from 6.7.0 to 6.9.0
  - docker/setup-buildx-action from 3.7.0 to 3.7.1
  - docker/setup-buildx-action from 3.6.1 to 3.7.0
- Javascript

  - @reduxjs/toolkit from 2.2.7 to 2.2.8
  - express from 4.21.0 to 4.21.1
  - typescript from 5.6.2 to 5.6.3
  - @sentry/nextjs from 8.32.0 to 8.37.1
  - query-string from 9.1.0 to 9.1.1

  - react-query group from 5.56.2 to 5.59.20
    - @tanstack/react-query
    - @tanstack/react-query-devtools
  - Next group from 14.2.13 to 14.2.15
    - next
    - eslint-plugin-next
    - @next/eslint-plugin-next
  - Types
    - @types/jest from 29.5.12 to 29.5.13
    - @types/react from 18.3.9 to 18.3.11
    - @types/node from 22.7.3 to 22.7.5
    - @types/react-dom from 18.3.0 to 18.3.1
  - Redux
    - @redux/toolkit from 2.2.8 to 2.3.0
    - redux-mock-store from 1.5.4 to 1.5.5
  - Testing
    - Storybook group with 9 updates from 8.3.3 t0 8.4.2
      - Addon a11y
      - Addon essentials
      - Addon interactions
      - Addon links
      - Addon onboarding
      - Blocks
      - Next JS
      - Test
    - @playwright/test from 1.47.2 to 1.48.2
    - @testing-library/jest-dom from 6.5.0 to 6.6.3

- sass from 1.79.3 to 1.80.3
- @spotlightjs/spotlight from 2.4.1 to 2.5.0
- cookie from 0.6.0 to 0.7.1
- elliptic from 6.5.7 to 6.6.0

## 1.0.1 - 9/27/2024

Additions:

- Performace testing with Playwright [#3107](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3107) to try to get a handle on slow loading [#3083](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/3083)

Changes:

- Added accessibility helper to Highcharts [#3130](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3130)

Fixes:

- Get source maps to be uploaded to Sentry again, to make it more reasonable to debug errors [#3117](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3117)
- Show an error when a global (500 level) error occurs [#3117](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3117)
- Remove old OpenLayers CSS links [#3141](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3141)
- Adjust queryClient init so that `useState` doesn't cause failures with Suspense [#3138](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3138)
- Disable SSR rendering for Redux store to avoid session storage issues [#3116](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3116)
- Move redux provider to use `useRef` pattern [#3136](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3136)
- Fix critical build dependency error thrown from web-worker [#3126](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3126)
- Update container memory requests (which were set in Create React App era and starving it) [#3108](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3108)
- Test wind speed in knots correctly [#3074](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3074)
- Skipping M01 tests while it's not functioning
- added wait till current conditions tests aren't fetching data before counting cards displayed
- Removed `yarn.lock` to prevent some confusion

Dependency updates:

- Docker build push action from 6.5.0 to 6.7.0
- Prettier pre-commit hook from 3.0.3 to 3.3.3
- Node from 22.5.1 to 22.9.0
- Redux toolkit from 1.9.7 to 2.2.7
- Sentry Next JS from 7.114.0 to 8.32.0
- Spotlight from 2.3.1 to 2.4.1
- Tanstack React Query and devtools from 5.51.23 to 5.58.0
- Turf from 6.5.0 to 7.1.0
  - Bbox polygon
  - Boolean contains
  - Helpers
- Highcharts from 11.4.6 to 11.4.8
- Next from 14.2.5 to 14.2.13
- OpenLayers from 10.0.0 to 10.2.1
- React Redux from 8.1.3 to 9.1.2
- React Slect from 5.8.0 to 5.8.1
- RLayers from 3.1.0 to 3.2.0
- Sass from 1.77.8 to 1.9.3
- Sharp from 0.33.4 to 0.33.5
- Github Actions reporter from 1.9.0 to 1.9.2
- Eslint plugin next from 14.2.5 to 14.2.13
- Playwright from 1.46.0 to 1.47.2
- Storybook from 8.2.9 to 8.3.3
  - Addon a11y
  - Addon essentials
  - Addon interactions
  - Addon links
  - Addon onboarding
  - Blocks
  - Next JS
  - Test
- React testing libray from 16.0.0 to 16.0.1
- Types
  - Node from 22.2.0 to 22.7.3
  - React from 18.3.3 to 18.3.9
- Eslint config next from 14.2.5 to 14.2.3
- Eslint plugin storybook from 0.8.0 to 0.9.0
- Typescript from 5.5.4 to 5.6.2
- Wait on from 7.2.0 to 8.0.1

## 1.0.0 - 8/14/24

Additions:

- Adds sea level to current conditions table.
- Add tide level standards and conversions [2501](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2501)
- Set up Prettier with Pre-commit and GHA [2594](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2594)
- Set up Sentry for Next and add error handling to app [2599](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2599)
- add dynamic menu items [2738](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2738)
- Setup Spotlight to capture dev exceptions [2749](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2749)
- Highlighted timeseries [2880](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2880)
- Water level page:
  - Set up [2719](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2719) and [2792(https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2792)]
  - Predicted tides [2789](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2789) and [2793](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2793)
  - get working model of color changing map up [2798](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2798)
  - persist unit selection on page refresh and new platform/sensor selection [2899](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2899)
  - Fix slow loading PredWL dataset loading [2846](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2946)
  - make y-axis dynamic for min and max [2987](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2987)
  - refactor with search params [2999](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2999)
  - Add redirects for tide gauges [3012](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3012)

Changes:

- Remove Cypress and replace with Playwright [2662](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2662)
- Remove React-router-dom
- Remove redux-first-history [2846](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2846)
- Convert from Yarn to NPM [2836](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2836)
- Update wind to take knots [3061](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/3061)
- Migrated to Next.js
  - [2488](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2488)
  - Migrate about page to App Router [2596](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2596)
  - Platform pages using Next.js app router [2627](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2627)
  - Refactor Model Viewer to work with Next app router [2639](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2639)
  - transfer models page to next [2645](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2645)
- Dependency Updates:
  - @adobe/css-tools from 4.3.1 to 4.3.3
  - @babel/traverse from 7.22.8 to 7.23.2
  - @estruyf/github-actions-reporter from 1.3.0 to 1.9.0
  - @playwright/test from 1.39.0 to 1.46.0
  - Sentry:
    - @sentry/nextjs from 7.74.1 to 7.114.0
    - @sentry/react from 7.59.2 to 7.114.0
  - @spotlightjs/spotlight from 1.2.7 to 2.3.1
  - Testing:
    - @testing-library/dom from 9.3.1 to 9.3.4
    - @testing-library/jest-dom from 5.17.0 to 6.4.2
    - @testing-library/user-event from 14.4.3 to 14.5.1
  - Types:
    - @types/jest from 29.5.3 to 29.5.5
    - @types/node from 20.4.2 to 22.2.0
    - @types/react from 18.2.15 to 18.3.3
    - @types/react-dom from 18.2.7 to 18.2.15
    - @types/react-test-renderer from 18.0.0 to 18.0.7
  - cypress from 12.17.1 to 13.2.0
  - Docker:
    - docker/build-push-action from 4.1.1 to 6.5.0
    - docker/login-action from 2.2.0 to 3.3.0
    - docker/setup-buildx-action from 2.9.1 to 3.6.1
  - eslint from 8.51.0 to 8.57.0
  - eslint-config-next from 13.5.4 to 14.0.0
  - express from 4.18.2 to 4.19.2
  - highcharts from 11.1.0 to 11.4.6
  - jest-environment-jsdom from 29.6.1 to 29.7.0
  - nginx from 2d19418 to 4c93a3b
  - next from 13.5.4 to 14.0.1
  - node from 20.4.0-alpine to 22.5.1-alpine
  - ol from 7.4.0 to 8.1.0
  - react-redux from 8.1.1 to 8.1.3
  - react-router-dom from 6.14.2 to 6.17.0
  - react-use from 17.4.0 to 17.5.1
  - sass from 1.63.6 to 1.77.8
  - sharp from 0.32.6 to 0.33.4
  - typescript from 4.9.5 to 5.5.4
  - undici from 5.27.2 to 5.28.4
  - webpack from 5.88.2 to 5.89.0
  - @reduxjs/toolkit from 1.9.5 to 1.9.7
  - @turf/boolean-contains from 6.5.0 to 7.0.0
  - Font-awesome core from 5.3.0 to 6.6.0
  - Storybook group from 7.1.0 to 8.2.9
  - React-query from 4.29.25 to 5.51.23

Fixes:

- fix reload loop [2652](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2652)
- Fix modeling page 304 [2655](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2655)
- Group Next and related Dependabot updates [2664](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2664)
- Fix zoom bugs on regional map [2661](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2661) and [2685](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2685)
- fix sensor tests [2786](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/2786)

## 0.10.7 - 07/19/2023

Changes:

- Update with new Google Analytics 4 tag. Closes [#2372](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/2372).
- Upgraded to React 18 and replaced Enzyme with React Testing Library.
- Set up dependabot groups for Font Awesome, Sentry, Storybook, and React.
- Dependency Updates:
  - Github Actions
    - Docker setup buildx from 2.2.1 to 2.9.1
    - Docker login from 2.1.0 to 2.2.0
    - Docker build push from 3.2.0 to 4.1.1
    - Github pages deploy from 4.4.1 to 4.4.3
    - Sentry release from 1.2.1 to 1.4.1
  - Node from 19.2 to 20.4
  - Nginx from 1.23.2 to 1.25.1
  - Javascript
    - Font Awesome core from 6.2.1 to 5.3.0
    - Sentry react from 7.23.0 to 7.59.2
    - Highcharts from 10 to 11.1.0
    - Moment Timezone from 0.5.39 to 0.5.43
    - React from 16.14.0 to 18.2.0
    - React DOM from 16.14.0 to 18.2.0
    - React JSX Highcharts from 4.3.2 to 5.0.1
    - React Redux from 8.0.5 to 8.1.1
    - React Router DOM from 6.4.4. to 6.14.2
    - Reactstrap from 9.1.5 to 9.2.0
    - RLayers from 1.4.5 to 1.4.8
    - Storybook from 6.5.14 to 7.1.0
      - Addon A11y
      - Addon Essentials
      - Addon Storyshots
      - Preset create react app
    - Types
      - Jest from 29.2.4 to 29.5.3
      - Node from 18.11.11 to 20.4.2
      - React from 18.0.21 to 18.2.15
      - React DOM From 18.0.6 to 18.2.7
    - React Test Renderer from 16.14.0 to 18.2.0
    - Wait on from 6.0.1 to 7.0.1
    - Cypress from 11.2.0 to 12.17.1

Fixes:

- Model WMS layers are silently selected by URL time, rather than picker time. closes https://github.com/gulfofmaine/NERACOOS_ModelViewer/issues/11

## 0.10.6 - 01/20/2023

Changes:

- Redirect requests to platforms with NDBC ID in path. Closes [#2171](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/2171)
- Show NDBC ID in platform info. Closes [#2171](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/2171)
- Use Redux Toolkit.
- Dependency Updates:
  - Github Actions
    - CodeQL Init from 1 to 2
    - CodeQL Analyze from 1 to 2
    - Docker Setup Buildx from 1.6.0 to 2.2.1
    - Cache from 2.1.7 to 3
    - Docker login from 1.14.1 to 2.1.0
    - Docker build push from 2.9.0 to 3.2.0
    - Github pages deploy from 4.2.5 to 4.4.1
    - Sentry release from 1.1.6 to 1.2.1
  - Docker
    - Node from 16.14 to 19.2
    - Nginx from 1.21.6 to 1.23.2
  - Javascript
    - Font Awesome
      - SVG core from 1.3.0 to 6.2.1
      - Solid from 6.0.0 to 6.2.1
      - React from 0.1.18 to 0.2.0
    - Sentry from 6.18.1 to 7.23.0
      - React
      - Tracing
    - Bootstrap from 5.1.3 to 5.2.3
    - Highcharts from 9 to 10
    - Moment from 2.29.1 to 2.29.4
    - Moment timezone from 0.5.34 to 0.5.39
    - OpenLayers from 6.13.0 to 7.1.0
    - React GA from 3.3.0 to 3.3.1
    - React JSX Highcharts from 4.3.1 to 4.3.2
    - React Query from 3.34.16 to 3.39.2
    - React Redux from 7.2.6 to 8.0.5
    - React Router Dom from 6.6.2 to 6.4.4
    - React Scripts from 5.0.0 to 5.0.1
    - React use from 17.3.2 to 17.4.0
    - Reactstrap from 9.0.1 to 9.1.5
    - Redux first history from 5.0.8 to 5.1.1
    - Rlayers from 1.3.1 to 1.4.5
    - Sass from 1.49.9 to 1.56.1
    - Storybook from 6.4.19 to 6.5.14
      - A11y
      - Essentials
      - Storyshots
      - Builder Webpack 5
      - Manager Webpack 5
      - Preset Create React App 4.1.0 to 4.1.2
      - React
    - Types
      - Enzyme from 3.10.11 to 3.10.12
      - Jest from 27.4.1 to 29.2.4
      - Node from 17.0.21 to 18.11.11
      - React from 17.0.39 to 18.0.21
      - React DOM from 17.0.12 to 18.0.6
      - React Test Render from 17.0.1 to 18.0.0
    - Enzyme adapter React 16 from 1.15.6 to 1.15.7
    - Redux Devtools extension from 2.13.5 to 2.13.9
    - Typescript from 4.6.2 to 4.8.4
    - Cypress fro 9.5.1 to 11.2.0

Fixes:

- Limit Github Actions concurrency

## 0.10.5 - 03/22/2022

Changes:

- Update ingress manifest to v1.
- Increase Sentry sampling from 1% to 5%.
- Dependency Updates:
  - Github Actions
    - Checkout from 2.4.0 to 3.0
    - Docker login from 1.14.0 to 1.14.1
    - Upload artifact from 2.3.1 to 3.0
  - Javascript
    - React FontAwesome from 0.1.17 to 0.1.18
    - Storybook Create React App preset from 4.0.1 to 4.1.0
    - Types
      - React DOM from 17.0.11 to 17.0.12

## 0.10.4 - 03/01/2022

Changes:

- Migrate Storybook to use Webpack 5/Create React App 5
- Dependency Updates:
  - Github Actions
    - Docker login from 1.12.0 to 1.14.0
    - Docker build push from 2.7.0 to 2.9.0
    - Setup Node from 2 to 3
    - Github Pages Deploy from 4.2.0 to 4.2.5
  - Node from 15.13.0 to 16.14.0
  - Nginx from 1.21.5 to 1.21.6
  - Javascript
    - FontAwesome SVG Core from 1.2.36 to 1.3.0
    - FontAwesome Solid SVG icons from 5.15.4 to 6.0.0
    - React FontAwesome from 0.1.6 to 0.1.7
    - OpenLayers from 6.9.0 to 6.13.0
    - React Query from 3.34.7 to 3.34.16
    - React Router DOM from 6.2.1 to 6.2.2
    - React Scripts from 4.0.3 to 5.0.0
    - RLayers from 1.1.1 to 1.3.1
    - SASS from 1.46.0 to 1.49.9
    - Sentry from 6.16.1 to 6.18.1
      - React
      - Tracing
    - Storybook from 6.4.9 to 6.4.19
      - Addon A11y
      - Addon Essentials
      - Addon Storyshots
      - Preset Create React App from 4.0.0 to 4.0.1
      - React
    - Types
      - History from 4.7.9 to 5.0.0
      - Jest from 27.4.0 to 27.4.1
      - Node from 17.0.8 to 17.0.21
      - React from 17.0.38 to 17.0.39
    - Typescript from 4.2.4 to 4.6.2
    - Wait On from 6.0.0 to 6.0.1
    - Cypress from 9.2.0 to 9.5.1

Fixes:

- Use geometry for RFeature rather than feature to connect events properly. [#1766](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1766)

## 0.10.3 - 01/09/2022

Changes:

- Add RLayers to take over for custom React/OpenLayers code for managing maps.
- Add JSURL for encoding state in search params.
- Switch basemap tiles to load via HTTPS.
- Dependency Updates:
  - Github Actions
    - Cache from 2.1.6 to 2.1.7
    - Docker login from 1.10.0 to 1.12.0
    - Upload artifact from 2.2.4 to 2.3.1
    - Github pages deploy fro, 4.1.5 to 4.2.0
  - Nginx from 1.21.4 to 1.21.5
  - Javascript
    - Cypress from 9.0.0 to 9.2.0
    - Prop-types from 15.0.0 to 15.8.1
    - React app polyfill from 2.0.0 to 3.0.0
    - React Query from 3.32.1 to 3.34.7
    - React Router DOM from 5.3.0 to 6.2.1
    - React Use from 17.3.1 to 17.3.2
    - Reactstrap from 9.0.0 to 9.0.1
    - Sentry from 6.14.1 to 6.16.1
      - React
      - Tracing
    - Storybook from 6.3.12 to 6.4.9
      - Addon a11y
      - Addon essentials
      - Addon storyshots
      - React
    - Types
      - Enzyme from 3.10.10 to 3.10.11
      - Jest from 27.0.2 to 27.4.0
      - Node from 16.11.7 to 17.0.8
      - React from 17.0.34 to 17.0.38
      - React Response from 8.0.4 to 8.0.5

Fixes:

- Pin Node on actions to v14 as the [upgrade of the base image to v16](https://github.com/actions/virtual-environments/blob/ubuntu20/20211129.1/images/linux/Ubuntu2004-README.md) manages to break some Cypress dependencies.
- Fixed issue when only a single reading is passed to a TableItem that should be filtering by data types. Closes [gulfofmaine/NERACOOS-operations#44](https://github.com/gulfofmaine/NERACOOS-operations/issues/44) and [gulfofmaine/NERACOOS-operations#53](https://github.com/gulfofmaine/NERACOOS-operations/issues/53)
- Removed deprecated Node Sass and replaced with Dart Sass.
- Fix RLayers styling and lack of linkability (may be an issue with 1.2.0).

## 0.10.2 - 11/11/2021

Changes:

- Dependency Updates:
  - Nginx from 1.21.1 to 1.21.4
  - Javascript
    - Moment timezone from 0.5.33 to 0.5.34
    - Cypress from 8.7.0 to 9.0.0

Fixes:

- Reverting styling changes due to differences between Bootstrap 4 & 5.
  - On platform pages map and platform info were reversed due to [removal of extra `.order-*`](https://getbootstrap.com/docs/5.1/migration/#grid-updates).
  - Navbar links lost left justification.
  - Closes #1590

## 0.10.1 - 11/9/2021

Changes:

- Remove arrow from map tooltips/popups as it does not receive click handlers and causes confusion.
  - Closes [gulfofmaine/NERACOOS-operations#47](https://github.com/gulfofmaine/NERACOOS-operations/issues/47)
- Dependency Updates:
  - Github Actions
    - Checkout from 2.3.4 to 2.4.0
    - Setup Docker Buildx from 1.5.1 to 1.6.0
    - Docker login from 1.9.0 to 1.10.0
    - Github pages deploy action from 4.1.4 to 4.1.5
  - Javascript
    - React Fontawesome from 0.1.15 to 0.1.16
    - Sentry from 6.11.0 to 6.14.1
      - React
      - Tracing
    - Types
      - React Responsive from 8.0.3 to 8.0.4
      - React Router DOM from 5.1.8 to 5.3.2
      - Enzyme from 3.10.9 to 3.10.10
      - Jest from 27.0.1 to 27.0.2
      - Node from 16.6.2 to 16.11.7
      - React from 17.0.19 to 17.0.34
      - React DOM from 17.0.9 to 17.0.11
    - Bootstrap from 4.6.0 to 5.1.3
    - OpenLayers from 6.6.1 to 6.9.0
    - React Query from 3.19.6 to 3.32.1
    - React Redux from 7.2.4 to 7.2.6
    - React Router DOM from 5.2.0 to 5.3.0
    - React Use from 17.2.4 to 17.3.1
    - Reactstrap from 8.9.0 to 9.0.0
    - Redux from 4.1.1 to 4.1.2
    - Storybook from 6.3.7 to 6.3.12
      - Addon A11y
      - Addon Essentials
      - Addon Storyshots
      - Preset Create React App from 3.2.0 to 4.0.0
    - Cypress from 8.3.0 to 8.7.0

## 0.10.0 - 8/22/2021

Additions:

- Add [Sentry ErrorBoundaries](https://docs.sentry.io/platforms/javascript/guides/react/components/errorboundary/) so that failures in certain components don't bring down the whole Mariner's Dashboard. [#1441](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1441)

## 0.9.0 - 8/20/2021

Additions:

- Keep the center and zoom of the map view between the home and other pages.

Changes:

- Dependency Updates:
  - Javascript
    - Types
      - Node from 16.6.1 to 16.6.2
      - React from 17.0.18 to 17.0.19
      - Cypress from 7.7.0 to 8.3.0
  - Github Actions
    - Docker Build Push Action from 2.6.1 to 2.7.0

## 0.8.0 - 8/16/2021

Additions:

- Smart CORS proxying.
  - Buoy Barn can specify and proxy CORS requests to ERDDAP servers.
  - If Buoy Barn includes CORS proxy URL, then Mariners will use that to request data, otherwise it will request data directly from the source ERDDAP server (instead of proxying all requests).

Changes:

- Tweak the initial bounding box that the map displays to include Long Island Sound.
- Dependency Updates:
  - Javascript
    - FontAwesome
      - SVG Core from 1.2.35 to 1.2.36
      - Solid SVG Icons from 5.15.3 to 5.15.4
      - React from 0.1.14 to 0.1.15
    - Sentry from 6.9.0 to 6.11.0
      - React
      - Tracing
    - OpenLayers from 6.5.0 to 6.6.1
    - React JSX Highcharts from 4.2.1 to 4.3.1
    - React Query from 3.18.1 to 3.19.6
    - Redux from 4.1.0 to 4.1.1
    - StoryBook from 6.3.4 to 6.3.7
      - Addon A11y
      - Addon Essentials
      - Addon StoryShots
      - React
    - Types
      - Jest from 26.0.24 to 27.0.1
      - Node from 16.3.2 to 16.6.1
      - React from 17.0.14 yo 17.0.18
  - Docker
  - GitHub Actions
    - Sentry release from 1.1.5 to 1.1.6

Fixes:

- Include things like `.git/` in Dockerignore.

## 0.7.1 - 7/14/2021

Changes:

- Dependency Updates:
  - Javascript
    - Cypress from 7.3.0 to 7.7.0
    - React Query from 3.16.0 to 3.18.1
    - Wait on from 5.3.0 to 6.0.0
    - Sentry from 6.3.6 to 6.9.0
      - React
      - Tracing
    - Storybook from 6.2.9 to 6.3.4
      - Addon A11y
      - Addon Essentials
      - Addon Storyshots
      - Preset Create React App from 3.1.7 to 3.2.0
      - React
    - Turf from 6.3.0 to 6.5.0
      - Bbox polygon
      - Boolean contains
      - Helpers
    - Types
      - Enzyme from 3.10.8 to 3.10.9
      - History from 4.7.8 to 4.7.9
      - Jest from 26.0.23 to 26.0.24
      - Node from 15.0.2 to 16.3.2
      - React from 17.0.5 to 17.0.14
      - React DOM from 17.0.4 to 17.0.9
      - React Responsive from 8.0.2 to 8.0.3
      - React Router DOM from 5.1.7 to 5.1.8
  - Docker:
    - Nginx from 1.19.10 to 1.21.1
  - Actions:
    - Checkout from 2 to 2.3.4
    - Docker setup buildx from 1 to 1.5.1
    - Cache from 2.1.5 to 2.1.6
    - Docker login from 1 to 1.9.0
    - Docker build push from 2 to 2.6.1
    - Upload artifact from 2.2.3 to 2.2.4
    - Github pages deploy from 4.1.2 to 4.1.4
    - Sentry release from 1 to 1.1.5

Fixes:

- Fix all observation list showing the same values for different depths. [#1362](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/1362)

## 0.7.0 - 5/11/2021

Additions:

- Adjust styles to match up better with the NERACOOS visual guide.
  - Update chart line colors to use NERACOOS colors.
  - Update map colors to use NERACOOS 'What Orange'.
  - Use SASS to build custom stylesheet.
  - Use dashed line to indicate observations in forecast chart.
  - Display color of data in multi-line chart tooltips.

Changes:

- Map now will expand in height to match sidebar element.
- Order platform names on region pages.
- Add UNH non-CF data types.
- Switch Makefile to use new native `docker compose` (Github Actions is not there yet).
- Dependency Updates:
  - Github Pages Deploy Action to 4.1.2
  - Sentry React and tracing from 6.2.5 to 6.3.6
  - Open Layers from 5.3.3 to 6.5.0
  - React Query from 3.13.7 to 3.16.0
  - React Redux from 7.2.3 to 7.2.4
  - Redux from 4.0.5 to 5.1.0
  - Storybook from 6.2.8 to 6.2.9
  - Cypress from 6.8.0 to 7.3.0
  - Types
    - Jest from 26.0.22 to 26.0.23
    - Node from 14.14.37 to 15.0.2
    - React from 16.14.5 to 17.0.5
    - React DOM from 17.0.3 to 17.0.4

Fixes:

- Keep chart colors from shifting by using a color cycle from NERACOOS visual guide.
- Fix deprecation warnings for map component, and inconsistent rendering by moving from class based to functional component.
- Close nav on mobile when a region is selected.

## 0.6.11 - 4/14/2021

Fixes:

- Match Sentry version to Github Release version.

## 0.6.10 - 4/14/2021

Changes:

- Automate Sentry Release
- Dependency Updates
  - Actions
    - Cache from 2.1.4 to 2.1.5
  - Nginx from 1.19.9 to 1.19.10
  - React Query from 3.13.6 to 3.13.7
  - React is from 16.13.1 to 17.0.2
  - Storybook from 6.2.7 to 6.2.8
    - Addon A11y
    - Addon Essentials
    - Addon Storyshots
    - React

## 0.6.9 - 4/12/2021

Changes:

- Switch logo to link to neracoos.org. [#1195](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1195)
- Update footer copyright to 2021. [#1198](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1198)
- Use Sentry to trace 1% of views. [#1200](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1200)
- Dependency Updates
  - Actions
    - Upload Artifact from 2.2.2 to 2.2.3
    - Github Pages Deploy from 4.1.0 to 4.1.1
  - Node from 15.11.0 to 15.13.0
  - Nginx from 1.19.7 to 1.19.9
  - Sentry React from 6.2.2 to 6.2.5
  - React Query from 3.12.3 to 3.13.6
  - React Redux from 7.2.2. to 7.2.3
  - Storybook from 6.1.21 to 6.2.7
    - Addon A11y
    - Addon Essentials
    - Addon Storyshots
    - React
  - Types
    - Jest from 26.0.21 to 26.0.22
    - Node from 14.14.32 to 14.14.37
    - React DOM from 17.0.2 to 17.0.3
  - Typescript from 4.2.3 to 4.2.4

Fixes:

- Wind scale was converting unit systems twice in the tooltip (the data was converted once for display, then converted again to display in the tooltip), which made the tooltip show a ~70 knots when it should be ~ 38. [#1196](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1196)

## 0.6.8 - 3/18/2021

Changes:

- Dependency Updates:
  - Font Awesome
    - SVG Core from 1.2.34 to 1.2.35
    - Free Solid SVG Icons from 5.15.2 to 5.15.3
  - Sentry React from 6.2.1 to 6.2.2
  - Highcharts from 8. to 9.0.1
  - React JSX Highcharts from 4.2.0 to 4.2.1
  - React Query from 3.12.1 to 3.12.3
  - Types
    - Jest from 26.0.20 to 26.0.21
  - Wait On from 5.2.1 to 5.3.0
  - Cypress from 6.6.0 to 6.8.0

Fixes:

- Adjust Github Actions workflows so that PRs from Dependabot [can run without secrets](https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/).
- Update Google Analytics tracking method from [ReactGA#122](https://github.com/react-ga/react-ga/issues/122#issuecomment-702230428). Closes [#1135](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/1135)

## 0.6.7 - 3/9/2021

Changes:

- Add expand icon to current conditions to show that they are linked to a larger chart. [#1118](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1118)
- Add outbound link icon to **More Info** links. [#1118](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1118)
- Hide dataset links on chart pages. [#1119](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1119)
- Show observations/forecast next to data types on forecasts. [#1119](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/pull/1119)
- Dependency Updates:
  - Update Node from 15.8.0 to 15.11.0
  - React-Query from 3.12.0 to 3.12.1
  - Storybook
    - Preset Create React App from 3.1.6 to 3.1.7
  - Types
    - React DOM from 17.0.1 to 17.0.2

## 0.6.6 - 3/8/2021

Changes:

- Use buildkit to speed up Docker builds with better caching.
- Update Readme to include deployment with Argo CD.
- Update Browerslist (CanIUse) to adjust Javascript build targets.
- Tweak the order of current conditions to be: wind data, wave height, wave period, wave direction, barometric pressure, air temp, water temp.
- Dependency Updates:
  - Removed Typedoc
  - Types
    - Node from 14.14.31
    - React from 16.14.4 to 16.4.5

Fixes:

- Wind speeds should only display a single value, not a double value.
- Pushing development image target to Docker Hub rather than the production target.

## 0.6.5 - 3/7/2021

Fixes:

- Push when the production image builds.
- Include GitOps token when cloning.

## 0.6.4 - 3/7/2021

Fixes:

- Make directory for cloning GitOps repo into.

## 0.6.3 - 3/7/2021

Fixes:

- Use expressions reference rather than environment variables.

## 0.6.2 - 3/7/2021

Fixes:

- Tags mean that the Github ref isn't the master or main branch.

## 0.6.1 - 3/7/2021

Changes:

- Migrate configs to work with Argo CD:
  - Remove `imagePullSecret` from deployment and Kustomize config.
  - Remove ingress host and patch.
  - Remove common labels from `kustomization.yaml`.
- Build and push production Docker image on release tags.
- Update GitOps repo on release tags.
- Dependency Updates:
  - Github Pages Deploy Action from 4.0.0 to 4.1.0
  - Sentry React from 6.2.0 to 6.2.1
  - Storybook
    - Addon A11y from 6.1.20 to 6.1.21
    - Addon Storyshots from 6.1.20 to 6.1.21
    - React from 6.1.20 to 6.1.21
  - Typedoc from 0.20.28 to 0.20.29
  - Typescript from 4.1.5 to 4.2.3
  - Cypress from 6.5.0 to 6.6.0

## 0.6.0 - 2/24/2021

Changes:

- Show the current time on the forecast plots.
- Support loading multiple forecasts via `useQueries()`.
- Show forecast data sources.
- Dependency Updates:
  - Test on Ubuntu 20.04
  - Actions/checkout from 1 to 2.3.4
  - Actions/upload-artifact from 1 to 2.2.2
  - Nginx from 1.19.4 to 1.19.7
  - Sentry react from 6.1.0 to 6.2.0
  - Connected React Router from 6.6.1 to 6.9.1
  - React Query from 3.8.3 to 3.12.0
  - React Scripts from 4.0.2 to 4.0.3
  - Storybook
    - Addon A11y from 6.1.17 to 6.1.20
    - Addon Storyshots from 6.1.17 to 6.1.20
    - Preset Create React App from 3.1.5 to 3.1.6
    - React from 6.1.17 to 6.1.20
  - Types
    - Node from 14.14.27 to 14.14.31
    - React from 16.14.3 to 16.14.4
    - React DOM from 17.0.0 to 17.0.1
    - React test renderer from 17.0.0 to 17.0.1
  - Typedoc from 0.20.24 to 0.20.28

Fixes:

- Use Buildx and Github Actions caching.
- Use Dependabot to update Github Actions.
- Remove separate Storybook deployment workflow.

## 0.5.9 - 2/14/2021

Changes:

- Use the same definition of old data (24 hours) for the map and the platform pages.
- Update Highcharts and use native types.
- Dependency Updates:
  - Bootstrap from 4.5.3 to 4.6.0
  - Cypress from 6.2.1 to 6.4.0
  - Enzyme adapter React 16 from 1.15.5 to 1.15.6
  - Highcharts from 7.2.2 to <9.0.0
  - Moment Timezone from 0.5.32 to 0.5.33
  - Node from 15.3.0 to 15.8.0
  - React JSX Highcharts from 3.5.1 to 4.2.0
  - React Query from 3.5.12 to 3.8.3
  - React Scripts from 3.4.3 to 4.0.2
  - Reactstrap from 8.8.1 to 8.9.0
  - Sentry React from 5.30.0 to 6.1.0
  - Storybook
    - Addon A11y from 6.1.14
    - Addon Storyshots from 6.1.14 to 6.1.17
    - React from 6.1.14 to 6.1.17
  - Turf
    - BBox Polygon from 6.2.0 to 6.3.0
    - Boolean Contains from 6.2.0 to 6.3.0
    - Helpers from 6.2.0 to 6.3.0
  - Types
    - Node from 14.14.20 to 14.14.27
    - React from 16.14.2 to 16.14.3
    - React Redux from 7.1.15 to 7.1.16
  - Typedoc from 0.18.0 to 0.20.24
  - Typescript from 3.8.3 to 4.1.5

Fixes:

- Sort loaded ERDDAP data by time, otherwise Highcharts may explode.

## 0.5.8 - 1/13/2021

Changes:

- Update favicon.
- Update React-Query to v3 and use native multi-query support.
- Dependency Updates
  - Node from 15.2.0 to 15.3.0
  - Sentry React from 5.27.2 to 5.30.0
  - Moment Timezone from 0.5.31 too 0.5.32
  - React Google Analytics from 3.2.1 to 3.3.0
  - React Query from 2.26.2 to 3.5.1
  - Reactstrap from 8.7.1 to 8.8.1
  - Wait on from 5.2.0 to 5.2.1
  - Cypress from 5.6.0 to 6.2.1
  - Storybook
    - Addon A11y from 6.0.28 to 6.1.14
    - Addon Storyshots from 6.0.28 to 6.1.14
    - React from 6.0.28 to 6.1.14
  - Turf
    - BBox-Polygon from 6.0.1 to 6.2.0
    - Boolean Contains from 6.0.1 to 6.2.0
    - Helpers from 6.1.4 to 6.2.0
  - Types
    - React Redux from 7.1.11 to 7.1.15
    - React Router DOM from 5.1.6 to 5.1.7
    - Jest from 26.015 to 26.0.20
    - Node from 14.14.7 to 14.14.20
    - React from 16.9.56 to 16.14.2
    - React DOM from 16.9.9 to 17.0.0
    - React Test Renderer from 16.9.3 to 17.0.0

Fixes:

- Use appropriate URI encoding for constraints to better support ERDDAP 2.x.
- Tests for current conditions to deal with timing of data loading.
- Added test for a simpler ERDDAP data load.
- Update app manifest to allow users to clip specific pages.
- Use a local CORS proxy for testing.
- Archive Cypress screenshots and videos if there are test failures.

## 0.5.7 - 11/12/2020

Changes:

- Dependency Updates:
  - Node from 14.11.0 to 15.2.0
  - Nginx from 1.19.2 to 1.19.4
  - React-GA from 3.2.0 to 3.2.1
  - React Query from 2.26.1 to 2.26.2
  - React Query Devtools from 2.6.1 to 2.6.3
  - Cypress from 5.5.0 to 5.6.0
  - Storybook
    - Preset Create React App from 3.1.4 to 3.1.5
  - Types
    - Node from 14.14.6 to 14.14.7
    - React from 16.9.55 to 16.9.56

Fixes:

- Catch when there is an invalid data type and send a message to Sentry.

## 0.5.6 - 11/4/2020

Changes:

- Dependency Updates
  - Sentry react from 5.24.2 to 5.27.2
  - Moment from 2.29.0 to 2.29.1
  - React from 16.13.1 to 16.14.0
  - React app polyfill from 1.0.6 to 2.0.0
  - React DOM from 16.13.1 to 16.14.0
  - React GA from 3.1.2 to 3.2.0
  - React Query from 2.23.0 to 2.26.1
  - React Redux from 7.21 to 7.2.2
  - Reactstrap from 8.6.0 to 8.7.1
  - React Query Devtools from 2.5.1 to 2.6.1
  - React Test Render from 16.13.1 to 16.14.0
  - Cypress from 5.3.0 to 5.5.0
  - Storybook
    - Addon A11y from 6.0.22 to 6.0.28
    - Addon Essentials from 6.0.22 to 6.0.28
    - Addon Storyshots from 6.0.22 to 6.0.28
    - React from 6.0.22 to 6.0.28
  - Types
    - Ol frm 6.4.1 to 6.4.2
    - React Redux from 7.1.9 to 7.1.11
    - React-router from 5.1.5 to 5.1.6
    - Removed Reactstrap types as they are now included
    - Enzyme from 3.10.7 to 3.10.8
    - Jest from 26.0.14 to 26.0.15
    - Node from 14.11.2 to 14.14.6
    - React from 16.9.50 to 16.9.55
    - React DOM from 16.9.8 to 16.9.9

Fixes:

- Filter recent conditions table by date.
- Filter nulls on the client side from ERDDAP requests rather than using constraints to remove them.
- Update tests to use new method for setting environment variables in Github Actions.

## 0.5.5 - 10/2/2020

Changes:

- Increase number of wind barbs per day for current conditions.
- Dependency Updates:
  - Types
    - React

Fixes:

- Unit converter in table items now uses the actual data type used rather than
  the first one of similar types.

## 0.5.4 - 10/1/2020

Changes:

- Update Google Analytics tracker.

Fixes:

- At the beginning of a month, `.getDate()` comparisons produce negatives,
  which turns out to be rather confusing to things that expect positives,
  so don't do that. Now those comparisons are using `.valueOf()`.

Testing:

- Added CodeQL analysis Github Action.

## 0.5.3 - 9/30/2020

Changes:

- Match the time extents of current conditions loaded.

Fixes:

- Get the map to zoom to a region's bounding box.

## 0.5.2 - 9/30/2020

Fixes:

- Issue loading significant wave height forecasts due to error in string replacement.

## 0.5.1 - 9/30/2020

Changes:

- Remove redux-thunk since Redux is no longer being used for loading data.
- Added Cypress test for interaction with unit switcher.
- Added Sentry Redux integration.
- Add oxygen_concentration_in_sea_water data type.
- Dependency updates
  - Storybook
    - Addon-a11y from 6.0.21 to 6.0.22
    - Addon-essentials from 6.0.21 to 6.0.22
    - Addon-storyshots from 6.0.21 to 6.0.22
    - React from 6.0.21 to 6.0.22
  - React-query devtools from 2.5.0 to 2.5.1
  - Cypress from 5.2.0 to 5.3.0
- Change 'last updated around' to 'last updated at'.
- Change table items text when no information is available recently.
- Add link to feedback form.
- Add significant wave height forecast type.

Fixes:

- Wind datasets and time series were getting their names muddled by `pickWindDatasets`.
  Changed `pickWindDatasets` to not alter existing data.
- Update Cypress tests for new home content.

## 0.5.0 - 9/25/2020

Additions:

- Superlatives! Highest wind and wave speed widget for the home page.

Changes:

- Added link to ERDDAP datasets on observation pages.
- Add Mayflower data types.
- Bake NERACOOS logos in.
- Dependency updates
  - Moment from 2.28.0 to 2.29.0
  - Enzyme adapter react 16 from 1.15.4 to 1.15.5
  - Types
    - Enzyme from 3.10.6 to 3.10.7
    - Node from 14.11.1 to 14.11.2

Fixes:

- Errors showing and loading wind data.
- Group ERDDAP dataset requests better to avoid getting 403'd by Bob.

## 0.4.5 - 9/21/2020

Changes:

- Increases time window for recent updates from 15 minutes to an hour.
- Dependency updates:
  - Cypress from 5.0.0 to 5.2.0

Fixes:

- Deployment issue, consolidated onto a single multi-stage build dockerfile as it was caching the wrong data.
- Some typing of PlatformFeatures that didn't match what the API was actually returning.

## 0.4.4 - 9/21/2020

Changes:

- Only use Redux to keep track of selected units and routed location.
  Use React-Query instead to manage remote data. React-Query cleans up,
  simplifies, caches, and auto-reloads remote data instead of trying to
  manage those things manually with Redux.
- Dependency Updates
  - Node from 14.8.0 to 14.11.0
  - Sentry/react from 5.22.2 to 5.24.2
  - HighCharts from 7.2.1 to 7.2.2
  - Moment from 2.27.0 to 2.28.0
  - Reactstrap from 8.5.1 to 8.6.0
  - Enzyme adapter react 16 from 1.15.3 to 1.15.4
  - Storybook
    - Addon A11y from 6.0.20 to 6.0.21
    - Addon essentials from 6.0.20 to 6.0.21
    - Addon storyshots from 6.0.20 to 6.0.21
    - React from 6.0.20 to 6.0.21
  - Types
    - History from 4.7.7 to 4.7.8
    - OpenLayers from 6.3.1 to 6.4.1
    - Jest from 26.0.10 to 26.0.14
    - Node from 15.6.1 to 14.11.1
    - React from 16.9.48 to 16.9.49
    - Enzyme from 3.10.5 to 3.10.6

Fixes:

- Some spelling of available.
- React.SFC has been deprecated as it isn't an accurate name, so using React.FunctionalComponent.

## 0.4.3 - 8/28/2020

Fixes:

- Stop trying to plot cardinal directions, when raw degrees would do better.

## 0.4.2 - 8/28/2020

Changes:

- Remove signal flags.
- Allow multiple data types to be specified in current conditions table and show only the first one matched.
- Show only one of a group of data types in the current (latest) conditions view.
- Show only a 15 min range of time in the current conditions table.
- Adds a tooltip popup for condition tables with the time of reading.
- Remove old NERACOOS links from More Info.
- Remove logos and update GMRI/ODP url in footer.
- Tracking page visits with Google Analytics.
- Dependency updates:
  - Cypress from 4.5.0 to 5.0.0
  - Node from 14.3.0 to 14.8.0
  - Nginx from 1.17.9 to 1.19.2
  - Types
    - History from 4.7.5 to 4.7.7
    - OpenLayers fro 6.1.0 to 6.3.0
    - React Redux from 7.1.7 to 7.1.9
    - Reactstrap from 8.4.2 to 8.5.1
    - Jest from 25.2.1 to 26.0.10
    - Node from 13.13.5 to 14.6.1
    - React from 16.9.34 to 16.9.48
    - React test loader from 16.9.2 to 16.9.3
  - Bootstrap from 4.4.1 to 4.5.2
  - Moment from 2.25.3 to 2.27.0
  - Moment-timezone from 0.5.28 to 0.5.31
  - React Redux from 7.2.0 to 7.2.1
  - React Scripts from 3.4.0 to 3.4.3
  - Reactstrap from 8.4.1 to 8.5.1
  - Storybook
    - A11y from 5.3.18 to 6.0.20
    - Storyshots from 5.3.18 to 6.0.20
    - Preset Create React App from 2.1.1 to 3.1.4
    - React from 5.3.18 to 6.0.20
  - Typedoc from 0.17.7 to 0.18.0
  - Wait on from 5.0.0 to 5.2.0

Fixes:

- A little extra breathing space within the footer.
- Return null from the wind card early before throwing exceptions.

Testing:

- Test A01 and skip M01 wind test.
- Separate push actions from those only supposed to run on master/main branch.
- Update Storybook to 6.0.
  - Disable links addon, enable a11y.
  - Use Storybook essentials package rather than seperate actions, controls, docs...
- Switch sentry browers for react specific package

## 0.4.1 - 5/31/2020

Changes:

- Setup Storybook docs.
- Deploy Storybook docs to Github Pages.
- Style updates.
  - Add space after Lat in platform info panel.
  - Hide depth on current conditions for near surface.
  - Rename Current Conditions tab to Latest Conditions.
  - Add home to navbar.
  - Use light style on un-selected unit button.
  - Disable active highlighting on region dropdown links.
  - Update footer to remove other RAs.
- Add storybook build test before merging to master.
- Update dependencies
  - Cypress from 3.8.3 to 4.5.0
  - Node from 13.8.0 to 14.3.0
  - Nginx from 1.17.8 to 1.17.9
  - Sentry
    - Browser 5.12.1 to 5.13.2
  - Types
    - React router DOM from 5.1.3 to 5.1.5
    - Reactstrap from 8.4.1 to 8.4.2
    - Enzyme from 3.10.4 to 3.10.5
    - Jest from 25.1.1 to 25.2.1
    - Node from 13.7.1 to 13.13.5
    - React from 16.9.19 to 16.9.34
    - React DOM from 16.9.5 to 16.9.8
  - Moment from 2.24.0 to 2.25.3
  - Moment timezone from 0.5.27 to 0.5.28
  - React from 16.12.0 to 16.13.1
  - React DOM from 16.12.0 to 16.13.1
  - React Redux from 7.1.3 to 7.2.0
  - React Router DOM from 5.1.2 to 5.2.0
  - React Scripts from 3.3.1 to 3.4.0
  - Storybook
    - Addon A11y from 5.3.10 to 5.3.18
    - Addon actions 5.3.13 to 5.3.19
    - Addon docs from 5.3.10 to 5.3.18
    - Addon knobs from 5.3.13 to 5.3.19
    - Addon links from 5.3.13 to 5.3.18
    - Addon storyshots from 5.3.13 to 5.3.18
    - Addons from 5.3.10 to 5.3.14
    - Preset create react app from 1.5.2. to 2.1.1
    - React from 5.3.13 to 5.3.18
  - Jest fetch mock from 3.0.1 to 3.0.3
  - React test render from 16.12.0 to 16.13.1
  - Typedoc from 0.16.9 to 0.17.7
  - Typescript from 3.7.5 to 3.8.3
  - Wait on 4.0.0 to 5.0.0

Fixes:

- Less strict checks on number of buoys in the Long Island region in Cypress tests.
- Less strict checks on number of current conditions cards on M01.
- Add polyfill to support IE 11

## 0.4.0 - Narwhal Tinder - 2/14/2020

Additions:

- User selectable units!
- Storybook for visually testing components
- MIT license

Changes:

- Github actions for continuous integration instead of Semaphore
- Replace with new NERACOOS logo
- Update dependencies
  - Node from 12.9.1 to 13.8.0
  - Nginx from 1.17.3 to 1.17.8
  - @sentry/browser from 5.6.3 to 5.12.1
  - Bootstrap from 4.3.1 to 4.4.1
  - Connected-React-Router from 6.5.2 to 6.6.1
  - Highcharts from 7.1.3 to 7.2.1
  - History from 4.9.0 to 4.10.1
  - Moment-timezone from 0.5.26 to 0.5.27
  - React from 16.9.0 to 16.12.0
  - React-DOM from 16.9.0 to 16.12.0
  - React-Redux from 7.1.1 to 7.1.3
  - React-Router-DOM from 5.0.1 to 5.1.2
  - React-Scripts from 3.1.1 to 3.3.1
  - React-Sizeme from 2.6.7 to 2.6.12
  - Redux from 4.0.4 to 4.0.5
  - Types
    - Highcharts from 5.0.44 to 7.0.0
    - History from 4.7.3 to 4.7.5
    - Open Layers from 5.3.4 to 6.1.0
    - React-Redux from 7.1.2 to 7.1.7
    - React-Responsive from 3.0.3 to 8.0.2
    - React-Router-DOM from 4.3.5 to 5.1.3
    - Reactstrap from 8.0.4 to 8.4.1
  - Dev
    - Enzyme from 3.10.0 to 3.11.0
    - Enzyme Adapter React 16 from 1.14.0 to 1.15.2
    - Jest fetch mock from 2.1.2 to 3.0.1
    - React test render from 16.9.0 to 16.12.0
    - Redux mock store from 1.5.3 to 1.5.4
    - Typedoc from 0.15.0 to 0.16.9
    - Typescript from 3.4.5 to 3.7.5
    - Wait-on from 3.3.0 to 4.0.0
    - Types
      - Enzyme from 3.10.3 to 3.10.4
      - Enzyme Adapter React 16 from 1.0.5 to 1.0.6
      - Jest from 24.0.18 to 25.1.1
      - Node from 12.7.2 to 13.7.1
      - React from 16.9.2 to 16.9.19
      - React-DOM from 16.9.0 to 16.9.5
      - React-Test-Renderer from 16.9.0 to 16.9.2

Fixes:

- Issue with compass points very close to North (~355).
- Check for feature existance before changing URL.
- Observation table sorting dates as strings rather than natively.

## 0.3.3 - Hidden in fog - 9/5/19

Changes:

- Update Dependencies
  - Node from 12.4 to 12.9.1
  - Nginx from 1.17.0 to 1.17.3
  - @sentry/browser from 4.6.6 to 5.6.3
  - Connected-React-Router from 6.4.0 to 6.5.2
  - Highcharts from 7.1.2 to 7.1.3
  - Moment-timezone from 0.5.25 to 0.5.26
  - React from 16.8.6 to 16.9.0
  - React-DOM from 16.8.6 to 16.9.0
  - React-JSX-Highcharts from 3.5.0 to 3.6.1
  - React-Redux from 7.0.3 to 7.1.1
  - React-Scripts from 3.0.1 to 3.1.1
  - Reactstrap from 8.0.0 to 8.0.1
  - Redux from 4.0.1 to 4.0.4
  - React test render from 16.8.6 to 16.9.0
  - Typedoc from 0.14.2 to 0.15.0
  - Wait-on from 3.2.0 to 3.3.0
  - Types
    - Highcharts from 5.0.39 to 5.0.44
    - History from 4.7.2 to 4.7.3
    - OpenLayers from 5.3.0 to 5.3.4
    - React-Redux from 7.0.9 to 7.1.2
    - React-Router-DOM from 4.3.3 to 4.3.5
    - Reactstrap from 8.0.1 to 8.0.4
    - Enzyme from 3.9.3 to 3.10.3
    - Jest from 24.0.13 to 24.0.18
    - Node from 12.0.5 to 12.7.2
    - React from 16.8.19 to 16.9.0
    - React-DOM from 16.8.4 to 16.9.0
    - React test render from 16.8.1 to 16.9.0

Fixes:

- Text in Cypress tests
- Sentry typing

## 0.3.2 - The United States of Water - 6/6/19

Changes:

- Update Dependencies
  - Node from 12.3.1 to 12.4
  - Nginx to 1.17.0 (from a less specifc tag)
  - Highcharts from 7.1.1 to 7.1.2
  - React-router-dom from 5.0.0 to 5.0.1
  - @types/node from 12.0.3 to 12.0.5
  - Enzyme from 3.9.0 to 3.10.0
  - Enzyme-adapter-react-16 from 1.13.2 to 1.14.0

Fixes:

- Fix loaded data not displaying on Safari. Closes #171
- Fix formatting of Enzyme unit test.

## 0.3.1 - Going to sea with Kubernetes - 5/31/19

Additions:

- Migrate deployment to Kubernetes using Kustomize and Skaffold.

Changes:

Fixes:

- ERDDAP constraints so that both string and number values are formatted correctly. Closes #165
  - Adds test for platform 44007 to see if things are loading correctly from Coastwatch.

## 0.3.0 - All The Data - 5/30/19

Additions:

- Add all observations page. Closes #115
  - Adds link from small and all observation tables to observation pages.

Changes:

- Migrate to native Create React App from Create React App Typescript which was depricated.
  - Update OpenLayers from 5.2.0 to 5.3.3
  - Update React and React-Dom from 16.5.2 to 16.8.6
  - Update Connected-React-Router from 4.5.0 to 6.4.0
  - Update React-JSX-Highcharts from 3.2.1 to 3.5.0
- Hide radar map from the navigation. Closes #119
- Update Enzyme Test Adapter from 1.0.3 to 1.0.5
- Update Codacy-coverage from 3.3.0 to 3.4.0
- Update Bootstrap from 4.1.3 to 4.3.1
- Update Node image from 11.15.0 to 12.3.1
- Update typedoc from 0.13.0 to 0.14.2
- Update React-sizeme from 2.5.2 to 2.6.7
- Update Sentry from 4.0.5 to 4.6.6
- Update Highcharts from 6.1.4 to 7.1.1
- Update Moment from 2.22.2 to 2.22.4
- Update Moment-timezone from 0.5.23 to 0.5.25
- Update React-redux from 5.0.7 to 7.0.3
- Update Reactstrap from 6.4.0 to 8.0.0
- Update Redux from 4.0.0 to 4.0.1
- Update Enzyme from 3.7.0 to 3.9.0
- Update Jest-fetch-mock from 2.1.0 to 2.1.2
- Update React-test-render from 16.5.2 to 16.8.6
- Update Typedoc from 0.13.0 to 0.14.2
- Update Typescript from 3.0.3 to 3.4.5
- Remove unused React-responsive

Fixes:

- Fix `seconds`, `degree_C`, `degrees_true`, `millibars`, and `simens/m` being unknown units. Closes #162
- Crash when scrubbing over a direction chart. Closes #160
- Fix wrong units on forecast charts. Closes #95, #85
- Change buoy to station. Closes #87
- Add alternative preffered data types to current conditions to display things like wave period for NDBC stations. Fixes #94
- Fix constraint formatting. Works on #118

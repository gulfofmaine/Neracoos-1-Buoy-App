# CHANGELOG

## Upcoming (unknown release)

Additions:

Changes:

- Remove redux-thunk since Redux is no longer being used for loading data.
- Added Cypress test for interaction with unit switcher.
- Added Sentry Redux integration.
- Add oxygen_concentration_in_sea_water data type.

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

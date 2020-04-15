# CHANGELOG

## Upcoming (unknown release)

Additions:

Changes:

- Setup Storybook docs.
- Deploy Storybook docs to Github Pages.

Fixes:

- Less strict checks on number of buoys in the Long Island region in Cypress tests.
- Less strict checks on number of current conditions cards on M01.

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

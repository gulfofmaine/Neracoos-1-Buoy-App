# CHANGELOG

## Upcoming (unknown release)

## 0.3.2 - The United States of Water - 6/6/19

Additions:

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

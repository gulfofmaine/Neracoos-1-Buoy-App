# CHANGELOG

## Upcoming (unknown release)

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
- Update enzyme test adapter from 1.0.3 to 1.0.5
- Update Codacy-coverage from 3.3.0 to 3.4.0
- Update Bootstrap from 4.1.3 to 4.3.1
- Update Node image from 11.15.0 to 12.3.1
- Update typedoc from 0.13.0 to 0.14.2
- Update React-sizeme from 2.5.2 to 2.6.7
- Remove unused React-responsive

Fixes:

- Fix `seconds`, `degree_C`, `degrees_true`, `millibars`, and `simens/m` being unknown units. Closes #162
- Crash when scrubbing over a direction chart. Closes #160
- Fix wrong units on forecast charts. Closes #95, #85
- Change buoy to station. Closes #87
- Add alternative preffered data types to current conditions to display things like wave period for NDBC stations. Fixes #94
- Fix constraint formatting. Works on #118

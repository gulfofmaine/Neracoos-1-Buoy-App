# Neracoos Mariner's Dashboard

[![Github Actions CI](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/workflows/CI/badge.svg?branch=master)](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions?query=workflow%3ACI+branch%3Amaster)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com/gh/gulfofmaine/Neracoos-1-Buoy-App?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Coverage)
[![Storybook Docs](https://img.shields.io/badge/Storybook-Docs-informational)](https://gulfofmaine.github.io/Neracoos-1-Buoy-App/?path=/docs/mariner-s-dashboard--page)

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:8100](http://localhost:8100) to view.

When you're done making it more awesome run `make down`.

## Deploying and Versioning

The site is deployed to the NERACOOS Digital Ocean Kubernetes Cluster.

To update the site, tag a commit with a version (`v0.6.5`).
Github Actions will build and test the development image, then it will build the production image and push it to Docker Hub.
Then it will update the manifest and image spec used by [Argo CD](https://argo-cd.readthedocs.io/en/stable/) in the [`neracoos-do-cd`](https://github.com/gulfofmaine/neracoos-do-cd/) repo.

Once the Github Actions workflow completes for the tag, Argo CD will pick up the changes and sync the deployment (usually within 3 minutes).

## Exception Tracking

We're tracking exceptions with Sentry.

## Documentation

We're using Storybook for documentation.

Run `make storybook` to launch it locally,
or view [on Github Pages](https://gulfofmaine.github.io/Neracoos-1-Buoy-App/?path=/docs/mariner-s-dashboard--page) after a version tag builds.

## Testing

### Continuous Integration

[Github Actions](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) runs on each commit with unit, snapshot, and Playwright tests.

[Codacy](https://app.codacy.com/project/gmri/Neracoos-1-Buoy-App/dashboard) is also running code quality tests, along with collecting test coverage information.

### Unit Tests

The jest test runner will start when you run `make up` and run tests on changed files automatically.

You can also run `make cov` to generate code coverage, and `make cov-html` to view the coverage in a browser.

### Integration Tests

There are also integration tests that can be run with [Playwright](https://playwright.dev/). This is does a full browser based test to make sure that data can be loaded.

To run, first start the app with `make serve`, then `yarn test:e2e` for headless tests, or `yarn test:e2e:ui` to view the browser testing.

# Neracoos Mariner's Dashboard

[![Github Actions CI](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/workflows/CI/badge.svg?branch=master)](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions?query=workflow%3ACI+branch%3Amaster)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com/gh/gulfofmaine/Neracoos-1-Buoy-App?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Coverage)
[![Storybook Docs](https://img.shields.io/badge/Storybook-Docs-informational)](https://gulfofmaine.github.io/Neracoos-1-Buoy-App/?path=/docs/mariner-s-dashboard--page)

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:3000](http://localhost:3000) to view.
Changes will automatically update without the need to restart the server.

When you're done making it more awesome run `make down` to make sure Docker cleans itself up.

## Running locally without Docker

Run `npm run dev` to run a lightweight version locally. See changes at [localhost:3000](http://localhost:3000).
Changes will automatically update without the need to restart the server.

## Deploying and Versioning

The site is deployed to the NERACOOS Digital Ocean Kubernetes Cluster.

To update the site, tag a commit with a version (`v0.6.5`).
Github Actions will build and test the development image, then it will build the production image and push it to Docker Hub.
Then it will update the manifest and image spec used by [Argo CD](https://argo-cd.readthedocs.io/en/stable/) in the [`neracoos-do-cd`](https://github.com/gulfofmaine/neracoos-do-cd/) repo.

Once the Github Actions workflow completes for the tag, Argo CD will pick up the changes and sync the deployment (usually within 3 minutes).

Similarly for each commit that lands on main, Github Actions will run and publish to the development server.

See the [Release Template GitHub Issue](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/issues/new/choose) for more information and instructions.

## Exception Tracking

We're tracking exceptions and traces with [Sentry.io](https://sentry.io/) and have [Spotlight](https://spotlightjs.com/) configured for development.

Spotlight will run when `make up` is called, and is accessible from [http://localhost:8969](http://localhost:8969).

Sentry get's it's connection information from the `NEXT_PUBLIC_SENTRY_DSN` environment variable, which is included on build and in production.

## Documentation

We're using Storybook for (some) documentation, and isolated component design.

Run `make storybook` to launch it locally.

## History

In early 2024, the Mariner's Dashboard was migrated to Next.js after being intially built with Create-React-App and React-Router.

## Testing

### Continuous Integration

[Github Actions](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) runs on each commit with unit, Storybook, and Playwright tests.

[Codacy](https://app.codacy.com/project/gmri/Neracoos-1-Buoy-App/dashboard) is also running code quality tests, along with collecting test coverage information. It sometimes will go out to lunch and think the whole world is broken, so take it's suggestions with a grain of salt.

### Unit Tests

[Vitest](https://vitest.dev/) is used for running unit and storybook tests. Run it locally with `npm run test` (or `make test-watch`).

- To only run unit tests, run `npm run test:unit`
- To only run storybook tests, run `npm run test:storybook`. Storybook tests require some variety of server to be running, either the `make up` dev server, or `make serve` pre-built server.
- You can also run `npm run test:coverage` to generate code coverage.

### Integration Tests

There are also integration tests that can be run with [Playwright](https://playwright.dev/). This is does a full browser based test to make sure that data can be loaded.

To run, first start the app with `make serve` (to build the site first, rather than on demand), then `npm run test:e2e` for headless tests, or `npm run test:e2e:ui` to view the browser testing.

### Performance tests

Run `make serve` for a local test server, or `kubectl -n mariners-dashboard-dev port-forward svc/mariners-dashboard 3000:80` to test against the dev server. Then run `npm run test:speed` to run performance tests.

### Pre-commit Hooks

Pre-commit hooks are used to help manage code style, and are run in Github Actions, and are defined in [.pre-commit-config.yaml](./.pre-commit-config.yaml).

To run them locally use [prek](https://prek.j178.dev/) or [pre-commit](https://pre-commit.com/).

Run `prek/pre-commit install` to configure the hooks to run before commits.

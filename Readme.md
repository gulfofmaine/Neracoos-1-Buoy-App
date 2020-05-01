# Neracoos Mariner's Dashboard

[![Github Actions CI](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/workflows/CI/badge.svg?branch=master)](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions?query=workflow%3ACI+branch%3Amaster)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com/gh/gulfofmaine/Neracoos-1-Buoy-App?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/9e0e054bf41a40379ab44aa1dadc2bc8)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Coverage)
[![Storybook Docs](https://img.shields.io/badge/Storybook-Docs-informational)](https://gulfofmaine.github.io/Neracoos-1-Buoy-App/?path=/docs/mariner-s-dashboard--page)

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:8100](http://localhost:8100) to view.

When you're done making it more awesome run `make down`.

## Building

You can use `make build` to update the `www` directory with a production build.
You can run `make serve-build` to view the build locally before deploying.

## Deploying and Versioning

The site is deployed to the NERACOOS Digital Ocean Kubernetes Cluster.

When you're using the NERACOOS Kubernetes config, to update the deployment run `skaffold run -t VERSION_NUMBER --tail`.
You probably want to `npm version patch` (or `minor`/`major` depending on changes) first.

You will need to have `docker-hub-secret.yaml` in `/k8s/` for the deploy to work using an account with access to the GMRI Docker Hub repos.

```yaml
apiVersion: v1
data:
  .dockerconfigjson: Some string
kind: Secret
metadata:
  creationTimestamp: null
  name: docker-hub-secret
type: kubernetes.io/dockerconfigjson
```

## Exception Tracking

We're tracking exceptions with Sentry.

## Documention

We're using Storybook for documentation.

Run `make storybook` to launch it locally,
or view [on Github Pages](https://gulfofmaine.github.io/Neracoos-1-Buoy-App/?path=/docs/mariner-s-dashboard--page) after the master branch builds.

## Testing

### Continuous Integration

[Github Actions](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) runs on each commit with unit, snapshot, and Cypress tests.

[Cypress Dashboard](https://dashboard.cypress.io/#/projects/xhz4kt/runs) will display info about failed Cypress runs.

[Codacy](https://app.codacy.com/project/gmri/Neracoos-1-Buoy-App/dashboard) is also running code quality tests, along with collecting test coverage information.

### Unit Tests

The jest test runner will start when you run `make up` and run tests on changed files automatically.

You can also run `make cov` to generate code coverage, and `make cov-html` to view the coverage in a browser.

### Integration Tests

There are also integration tests that can be run with [Cypress](https://www.cypress.io). This is does a full browser based test to make sure that data can be loaded.

To run, make sure you have [downloaded](http://download.cypress.io/desktop) Cypress first. Once you have it downloaded, you can drag the project directory to the app to add it. Then select a specific test, or `Run all specs`.

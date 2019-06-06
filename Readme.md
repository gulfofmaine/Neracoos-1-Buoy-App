# Neracoos Mariner's Dashboard [![Semaphore Dashboard](https://img.shields.io/badge/Semaphore-Dashboard-lightgrey.svg)](https://gmri.semaphoreci.com/projects/Neracoos-1-Buoy-App) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-lightgrey.svg)](https://dashboard.cypress.io/#/projects/xhz4kt/runs) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6196b46b92eb4bdeac6e8b435fc82bc9)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/6196b46b92eb4bdeac6e8b435fc82bc9)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=gulfofmaine/Neracoos-1-Buoy-App&utm_campaign=Badge_Coverage)

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

## Generating Pages and Components

To create a new page run `docker-compose exec ionic ionic generate page <PAGENAME>`. Which will scaffold the page in the appropriate directory.

## Exception Tracking

We're tracking exceptions with Sentry.

## Documention

We're using [Typedoc](https://typedoc.org) for documentation. Run `make docs` to update the documentation folder and host it at [http://0.0.0.0:8000/](http://0.0.0.0:8000/).

## Testing

### Continuous Integration

Semaphore CI automatically runs both unit and integration tests. For more details on those test see below.

- [Semaphore Dashboard](https://gmri.semaphoreci.com/projects/Neracoos-1-Buoy-App)
- [Cypress Dashboard](https://dashboard.cypress.io/#/projects/xhz4kt/runs)

[Codacy](https://app.codacy.com/project/gmri/Neracoos-1-Buoy-App/dashboard) is also running code quality tests, along with collecting test coverage information.

### Unit Tests

The jest test runner will start when you run `make up` and run tests on changed files automatically.

You can also run `make cov` to generate code coverage, and `make cov-html` to view the coverage in a browser.

### Integration Tests

There are also integration tests that can be run with [Cypress](https://www.cypress.io). This is does a full browser based test to make sure that data can be loaded.

To run, make sure you have [downloaded](http://download.cypress.io/desktop) Cypress first. Once you have it downloaded, you can drag the project directory to the app to add it. Then select a specific test, or `Run all specs`.

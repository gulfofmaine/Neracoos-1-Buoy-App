# Neracoos Ionic App [![Semaphore Dashboard](https://img.shields.io/badge/Semaphore-Dashboard-lightgrey.svg)](https://gmri.semaphoreci.com/projects/Neracoos-1-Buoy-App) [![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-lightgrey.svg)](https://dashboard.cypress.io/#/projects/xhz4kt/runs)

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:8100](http://localhost:8100) to view.

When you're done making it more awesome run `make down`.

## Building

You can use `make build` to update the `www` directory with a production build.
You can run `make serve-build` to view the build locally before deploying.

## Deploying and Versioning

The site is currently deployed to http://neracoos.org/ionic/neracoos1/www/index.html 

To update the deployment run `make deploy`.
You probably want to `npm version patch` (or `minor`/`major` depending on changes) run it in the form 
`make down build deploy sentry` to make sure that you get a production
build and that there is no iterferance with the local test server and get source maps copied to sentry.

The deploy uses `scp` so you will need to have a `~/.ssh/config entry that looks something like this:

```
Host awsgmri
    HostName awsgmri.neracoos.org
    User great_user_name
    IdentityFile ~/.ssh/id_rsa
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

### Unit Tests

The jest test runner will start when you run `make up` and run tests on changed files automatically. 

You can also run `make cov` to generate code coverage.

### Integration Tests

There are also integration tests that can be run with [Cypress](https://www.cypress.io). This is does a full browser based test to make sure that data can be loaded. 

To run, make sure you have [downloaded](http://download.cypress.io/desktop) Cypress first. Once you have it downloaded, you can drag the project directory to the app to add it. Then select a specific test, or `Run all specs`.

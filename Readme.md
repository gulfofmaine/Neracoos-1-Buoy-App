# Neracoos Ionic App

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

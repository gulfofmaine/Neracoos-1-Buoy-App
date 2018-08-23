# Neracoos Ionic App

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:8100](http://localhost:8100) to view.

When you're done making it more awesome run `make down`.

## Building

You can use `make build` to update the `www` directory with a production build.

## Deploying

The site is currently deployed to http://neracoos.org/ionic/neracoos1/www/index.html 

To update the deployment run `make deploy`.
You probably want to run it in the form `make down build deploy` to make sure that you get a production
build and that there is no iterferance with the local test server.

The deploy uses `scp` so you will need to have a `~/.ssh/config entry that looks something like this:

```
Host awsgmri
    HostName awsgmri.neracoos.org
    User great_user_name
    IdentityFile ~/.ssh/id_rsa
```

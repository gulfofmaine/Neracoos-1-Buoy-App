# Neracoos Ionic App

## Using with Docker

If you have Docker installed and running, you can launch the app with `make up` and then access [localhost:8100](http://localhost:8100) to view.

When you're done making it more awesome run `make down`.

You can build a production version with `make build`.

To create a new page run `docker-compose exec ionic ionic generate page <PAGENAME>`. Which will scaffold the page in the appropriate directory.

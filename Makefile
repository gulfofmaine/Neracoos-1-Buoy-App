.PHONY: up, down, build, build-prod, deploy, serve-build, sentry, prune, patch, release-patch

VERSION := $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])")

up:
	docker-compose up -d --build
	docker-compose logs -f

down:
	docker-compose down

build:
	docker-compose run ionic ionic build --verbose

build-prod:
	docker-compose run ionic ionic build --prod --verbose

deploy:
	scp -r ./www awsgmri:/home2/ionic/neracoos1
	sentry-cli releases -o gulf-of-maine-research-institu deploys $(VERSION) new -e staging

serve-build:
	python3 -m http.server -d www

sentry:
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard new $(VERSION) --finalize
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard set-commits $(VERSION) --auto
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard files $(VERSION) upload-sourcemaps www/build

prune:
	docker volume rm $(docker volume ls -qf dangling=true)
	docker system prune -a

patch:
	npm version patch

release-patch: down patch build deploy sentry

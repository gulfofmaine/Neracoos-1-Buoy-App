.PHONY: up, down, build, build-prod, deploy, serve-build, sentry, prune, patch, release-patch

VERSION := $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])")

up: down
	docker-compose up -d --build
	docker-compose logs -f

down:
	docker-compose down

build: down
	docker-compose build
	docker-compose run client yarn build

deploy:
	scp -r ./build/* awsgmri:/home2/ionic/neracoos1/www/
	sentry-cli releases -o gulf-of-maine-research-institu deploys $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])") new -e staging

serve-build:
	python3 -m http.server -d build/

sentry:
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard new $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])") --finalize
	# sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard set-commits $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])") --auto
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard files $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])") upload-sourcemaps build

prune:
	docker volume rm $(shell docker volume ls -qf dangling=true)
	docker system prune -a

patch:
	npm version patch

release-patch: test down patch build sentry deploy

rm-docs:
	rm -r docs/ || true

docs: rm-docs
	docker-compose exec client yarn docs
	python3 -m http.server -d docs/

cov:
	docker-compose exec client yarn test --coverage

test:
	docker-compose exec -e CI=true client yarn test

cov-html:
	open coverage/lcov-report/index.html

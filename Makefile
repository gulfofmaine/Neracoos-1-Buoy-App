.PHONY: up, down, build, build-prod, deploy, serve-build, sentry, prune, patch, release-patch

VERSION := $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])")

up: down
	# rm -r node_modules/ || true
	# rm -r .eslintcache || true
	docker compose -f docker-compose.dev.yaml build
	docker compose -f docker-compose.dev.yaml up -d
	docker compose -f docker-compose.dev.yaml logs -f

serve: down
	docker compose build client
	docker compose up

down:
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml down

prune:
	docker volume rm $(shell docker volume ls -qf dangling=true)
	docker buildx prune -f
	docker system prune -a

patch:
	npm version patch

rm-docs:
	rm -r docs/ || true

docs: rm-docs
	docker-compose exec client npm run docs
	python3 -m http.server -d docs/

cov:
	docker compose exec client npm run test --coverage

test:
	docker compose run -e CI=true client npm run test-ci

test-watch:
	docker compose exec client npm run test

cov-html:
	open coverage/lcov-report/index.html


storybook:
	npm run storybook

build-storybook:
	docker compose run client npm run build-storybook

lint:
	docker compose exec client npm run lint

types:
	docker compose exec client npm run types

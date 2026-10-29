.PHONY: up, down, build, build-prod, deploy, serve-build, sentry, prune, patch, release-patch, update-screenshots, test-screenshots

VERSION := $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])")
PLAYWRIGHT_VERSION := $(shell python3 -c "import json; print(json.load(open('node_modules/@playwright/test/package.json'))['version'])" 2>/dev/null)
PLAYWRIGHT_IMAGE := mcr.microsoft.com/playwright:v$(PLAYWRIGHT_VERSION)-noble

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

test:
	docker compose run -e CI=true client npm run test-ci

test-watch:
	npm run test

cov:
	npm run test:coverage

storybook:
	npm run storybook

build-storybook:
	docker compose run client npm run build-storybook

lint:
	docker compose exec client npm run lint

types:
	docker compose exec client npm run types

# Screenshot baselines are OS specific, so they are generated and checked in the Playwright Docker image
# that CI also uses. The anonymous /work/node_modules volume keeps the Linux install off the host.
update-screenshots:
	docker run --rm -v $(PWD):/work -v /work/node_modules -w /work \
		$(PLAYWRIGHT_IMAGE) \
		sh -c "npm ci && npx vitest run --project=storybook --update"

test-screenshots:
	docker run --rm -v $(PWD):/work -v /work/node_modules -w /work \
		$(PLAYWRIGHT_IMAGE) \
		sh -c "npm ci && npx vitest run --project=storybook"

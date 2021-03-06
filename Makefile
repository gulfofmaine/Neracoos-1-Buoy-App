.PHONY: up, down, build, build-prod, deploy, serve-build, sentry, prune, patch, release-patch

VERSION := $(shell python3 -c "import json; print(json.load(open('package.json'))['version'])")

up: down
	rm -r node_modules/ || true
	rm -r .eslintcache || true
	docker buildx bake
	docker-compose up -d
	docker-compose logs -f

down:
	docker-compose down

prune:
	docker volume rm $(shell docker volume ls -qf dangling=true)
	docker buildx prune -f
	docker system prune -a

patch:
	npm version patch

rm-docs:
	rm -r docs/ || true

docs: rm-docs
	docker-compose exec client yarn docs
	python3 -m http.server -d docs/

cov:
	docker-compose exec client yarn test --coverage

test:
	docker-compose run -e CI=true client yarn test

test-watch:
	docker-compose exec client yarn test

cov-html:
	open coverage/lcov-report/index.html


storybook:
	docker-compose run -p 9009:9009 client yarn storybook

build-storybook:
	docker-compose run client yarn build-storybook

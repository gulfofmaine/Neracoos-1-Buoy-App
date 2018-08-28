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

serve-build:
	python3 -m http.server -d www

sentry:
	VERSION=$(python3 -c "import json; print(json.load(open('package.json'))['version'])")
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard new $VERSION
	sentry-cli releases -o gulf-of-maine-research-institu -p neracoos-mariners-dashboard files $VERSION upload-sourcemaps www/build

prune:
	docker volume rm $(docker volume ls -qf dangling=true)
	docker system prune -a

up:
	docker-compose up -d --build
	docker-compose logs -f

down:
	docker-compose down

build:
	docker-compose run ionic ionic build --prod --verbose

deploy:
	scp -r ./www awsgmri:/home2/ionic/neracoos1

serve-build:
	python3 -m http.server -d www

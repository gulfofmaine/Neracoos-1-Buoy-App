up:
	docker-compose up -d --build
	docker-compose logs -f

down:
	docker-compose down

build:
	docker-compose run ionic ionic build --prod
all: build compose run
build:
	docker compose build
compose:
	docker compose up -d --remove-orphans
run:
	npm start
rm:
	docker compose down
	docker compose rm
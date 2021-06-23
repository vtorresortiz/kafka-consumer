all: build compose run
build:
	docker compose build
compose:
	docker compose up -d
run:
	npm start
stop:
	docker compose down
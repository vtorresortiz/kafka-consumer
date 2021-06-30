all: eslint build compose run
eslint:
	npx eslint src/**.mjs
build:
	docker compose build
compose:
	docker compose up -d --remove-orphans
run:
	npm start
rm:
	docker compose down
	docker compose rm
logs:
	docker compose logs -f
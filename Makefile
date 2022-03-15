
build-dev:
	cd client && ${MAKE} build-dev
	docker build -t kmb-server .

run-dev:
	docker-compose -f docker-compose-dev.yml up

###

build-local:
	cd client && ${MAKE} build-local
	docker build -t kmb-server .

run-local:
	ENV=local docker-compose -f docker-compose-prod.yml up

### Prod build not ready, Needs domain

build-prod:
	cd client && ${MAKE} build-prod
	cd server && ${MAKE} build

run-prod:
	ENV=prod docker-compose -f docker-compose-prod.yml up

build:
	docker build -t kmb-server .
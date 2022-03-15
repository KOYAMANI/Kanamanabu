
build-dev:
	docker build \
		-t kmb-react-dev \
		-f dev.Dockerfile .

build-local:
	docker build \
		-t kmb-react-prod:local \
		--build-arg CADDYFILE=local.Caddyfile \
		--build-arg BASE_URL=http://127.0.0.1:8080/api \
		-f prod.Dockerfile .

build-prod:
	docker build \
		-t kmb-react-prod:prod\
		--build-arg CADDYFILE=prod.Caddyfile \
		--build-arg BASE_URL=https://kmb.com \
		-f prod.Dockerfile .
### first stage

FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ARG BASE_URL
ENV KMB_REACT_BASE_URL = ${BASE_URL}

RUN npm build

### second stage
FROM caddy:2.1.1-alpine

ARG CADDYFILE
COPY ${CADDYFILE} /etc/caddy/Caddyfile

COPY --from=builder /usr/src/app/build/ /srv

EXPOSE 80

EXPOSE 443
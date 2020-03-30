FROM node:13.12.0-alpine@sha256:ed06820d0fb6f4711e0a6f50c9f147fb2596399866319e1bb3b0a52393c5615f

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

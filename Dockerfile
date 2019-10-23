FROM node:13.0.0-alpine@sha256:fbdbf48749efcf4d02b0b16f16a5fc999c15c4c4102485d627401b06e4b001f9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

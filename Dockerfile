FROM node:14.4.0-alpine@sha256:796fbe3509bdd36aef0e62508379f84e32a172062b7a37cb3609dee1567893b9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

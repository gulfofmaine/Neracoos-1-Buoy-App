FROM node:14.8.0-alpine@sha256:95562acd0ed9398e21babe6b90fd8ac3974709c9338155e2b4ef1c0824e60be1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

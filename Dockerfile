FROM node:13.5.0-alpine@sha256:d4630a4d897f9c88905985555bcb1d43950152e06a3b2047e101aa5988289620

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

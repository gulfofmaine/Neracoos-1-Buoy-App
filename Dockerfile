FROM node:13.10.1-alpine@sha256:f91b7fd09ad637c5261bac56cecb1086d00488be2b17c724caa0471ac1dcf7d8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

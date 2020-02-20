FROM node:13.8.0-alpine@sha256:8f1a8097d2ad6a28e8ef2f0d8a50d16c3665f2d972b9ed85549208309ca9fc2d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM node:13.5.0-alpine@sha256:990e2a5ecd6419bfd1ae1af8dc585924712614e9cc79999d943c3b4e7d9c53cd

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

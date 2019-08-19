FROM node:12.8.1-alpine@sha256:9b4ef9aae0d8c9c7a4dbbff596acf98e7d7e6a1843ed7d751fabfc2d4680a5d5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

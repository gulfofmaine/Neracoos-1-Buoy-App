FROM node:13.1.0-alpine@sha256:6b20f3cb99f7bd87be6b4987e73ebf018fde14d49e15102c44f71c3c47d417ee

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

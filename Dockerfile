FROM node:14.10.1-alpine@sha256:cf4fbc268ed5118f97114d7bb3dd6dd01728c55ec9d7ec10bb1231b0084e0bba

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

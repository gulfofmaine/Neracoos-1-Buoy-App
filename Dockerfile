FROM node:12.7-alpine@sha256:300e3d2c19067c1aec9d9b2bd3acbd43d53797a5836d70a23e437a5634bcd33a

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

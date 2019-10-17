FROM node:12.12.0-alpine@sha256:949c17b87a998cb1d18f7ac88e4d416a3009e7eb675565860f68ffceb0b49878

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

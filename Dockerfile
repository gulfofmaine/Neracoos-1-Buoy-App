FROM node:14.0.0-alpine@sha256:97223d1e48b83cc224a16a09b236db4e7406846c7d3d5a2370dbfa56811daeb5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

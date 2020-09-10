FROM node:14.10.0-alpine@sha256:3d1bdb8c2d026003273dd229d6f1ac2252be4d6fb5676a15f987f7e761e254d2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM node:13.7.0-alpine@sha256:44ab5111b9cee99c46faca3d5db844983c8d9b6b604bd2a70a9a014c8a0298e0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

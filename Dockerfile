FROM node:14.6.0-alpine@sha256:1aa9089d948437ff5fe4076b543fd3a0146fe23ffcf35de715b9f234b46f40c6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

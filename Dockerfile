FROM node:12.3.1-alpine@sha256:67ca3b1ba6a0d8c52030d0e5d775ace600197371c56becf7e6e9ff8191850f58

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

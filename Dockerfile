FROM node:13.3.0-alpine@sha256:651ea3e88c99d53886790449d541ac54db4babd4a63e8bd480bed7ff9421f7aa

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

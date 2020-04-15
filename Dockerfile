FROM node:13.13.0-alpine@sha256:9c8c3768cfae03a1c55594c1b3797b8611eadc69f37fd46af470ff41837eb488

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

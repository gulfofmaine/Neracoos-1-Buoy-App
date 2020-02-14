FROM node:13.8.0-alpine@sha256:7fa90a7c0e7118aaa81fe3b00c708cc70dfc61961dcd8701042d816e14d9a0b3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

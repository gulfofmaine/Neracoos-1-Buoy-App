# FROM node:10.11@sha256:32d5d5435e5038028bd0c0871d256d5887b06c4315cb1a135bcf81e0735627c9
FROM node:11.14.0-alpine@sha256:2278992c11ebfba68ca40a56ac77de59f5669b9ce1bb479f89840c95ac1adae7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

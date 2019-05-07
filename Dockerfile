# FROM node:10.11@sha256:32d5d5435e5038028bd0c0871d256d5887b06c4315cb1a135bcf81e0735627c9
FROM node:11.15.0-alpine@sha256:303a2a3eaa60ffc8f8b8d102e881ec51b4c7fba5ae5056e6e5b8a6af52db3936

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

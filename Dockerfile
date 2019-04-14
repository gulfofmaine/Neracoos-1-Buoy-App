# FROM node:10.11@sha256:32d5d5435e5038028bd0c0871d256d5887b06c4315cb1a135bcf81e0735627c9
FROM node:11.8.0-alpine@sha256:fb9d1917c22edbf3275cf6ed6bcc439f0a62fd0c9b12c6b6a1625b87ccde9704

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

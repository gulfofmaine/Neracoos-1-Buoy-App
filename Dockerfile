FROM node:12.11.0-alpine@sha256:8b6b7613b71383b8dcd715624dead418a7343e031102c6d7c06ee35d970faf4a

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

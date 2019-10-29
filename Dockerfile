FROM node:13.0.1-alpine@sha256:d8af5dcf412bc70f1da709bbcd812389a377b42e99da298874f26be31a21a5f4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

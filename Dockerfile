FROM node:13.2.0-alpine@sha256:4f413a16316edba7dd29f1d50b93f440706c538865308f31d4ce2d7d29c7bda5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

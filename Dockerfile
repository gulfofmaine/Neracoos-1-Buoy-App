FROM node:14.1.0-alpine@sha256:7fadbe3adb5526b4c2a93a794d59ed729c075c81ac577fc60b9c18503dbc68d4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

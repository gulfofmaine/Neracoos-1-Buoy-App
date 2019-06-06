FROM node:12.3.1-alpine@sha256:6bed93a9950db2dc1517b6a87e76e6ba842316e440d2ed028302726f723b67be

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

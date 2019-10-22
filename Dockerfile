FROM node:12.13.0-alpine@sha256:2ecde718fd39a49d2515e197282ac87e8f1873492741f54a6a4e2240ce87ae00

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

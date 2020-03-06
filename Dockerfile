FROM node:13.10.1-alpine@sha256:a8949c12dc72eda5eb54df7d57f03b719bd81af4d902eb5f0e334373f421a21d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

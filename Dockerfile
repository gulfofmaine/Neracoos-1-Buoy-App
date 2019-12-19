FROM node:13.4.0-alpine@sha256:41847b21decb378c16c3cfd8b1236f7afd6fbbf7f965529e8c08514b92134696

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

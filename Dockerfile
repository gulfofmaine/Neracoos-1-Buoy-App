FROM node:12.9-alpine@sha256:b1a32805dbe3894722db93b7f1a3489a208ddf4e9b9341d1e8d3e366fcc0998d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

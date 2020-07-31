FROM node:14.7.0-alpine@sha256:2c67c1f5b8907b102920153927b5d7ef85e3f28c67ddf32a5392a4dce1842f61

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

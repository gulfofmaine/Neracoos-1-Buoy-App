FROM node:14.5.0-alpine@sha256:db9d074278b87089a6e8c7b36ae3e645ce783b8fababc28f5c35f7bef49553d2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

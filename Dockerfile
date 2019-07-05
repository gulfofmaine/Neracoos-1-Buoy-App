FROM node:12.6-alpine@sha256:182778091c2c27ffa76caa41e762b21a2555118bae00212c52b347bddbc058ba

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM node:14.3.0-alpine@sha256:c3f1683ce9d265e46a414cc2e4bc4e2076a8545e05a3ec2d127450830adccb1a

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

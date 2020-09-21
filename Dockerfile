FROM node:14.11.0-alpine@sha256:328f4041e9af2db8252b3266691dc095971fb03f9f6f9e9ffb45b0c9752cd903

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM node:14.2.0-alpine@sha256:fa653973ad8abe2690dc90d1f46a9e0c458b0ea1c069b46a686b3610dea8da9c

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

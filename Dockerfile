FROM node:13.11.0-alpine@sha256:5769ed0cbef82ecd0d3b9522a086da41927d09ed38a286ab3c76b36bfc5f4e7a

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

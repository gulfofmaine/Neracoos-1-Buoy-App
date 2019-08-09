FROM node:12.8-alpine@sha256:ee0ad356063b2e16458109cf009715dda84664b26481415cb009ee2b79b79441

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

FROM node:12.4-alpine@sha256:25d56cf8f21a33f61415bcde0dd7fb1e1d46ecdb9b3b6d39e4846570cc235a81

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

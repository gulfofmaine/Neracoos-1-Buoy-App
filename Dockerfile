FROM node:13.6.0-alpine@sha256:c739cb1867fc0c308ca674eff94d1b487f21277ba128f285afd7bbee728447f6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

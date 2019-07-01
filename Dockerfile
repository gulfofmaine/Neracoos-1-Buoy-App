FROM node:12.5-alpine@sha256:eb0e0412d130003354f8ab17e5832dc9eb0887c3010e642e285545dd8deb488f

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

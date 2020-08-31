FROM node:14.9.0-alpine@sha256:409946b83711e15abb0945da71b2d41b6f29f360c9a4fbca5db8d04953534285

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

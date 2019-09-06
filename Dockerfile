FROM node:12.10.0-alpine@sha256:7a1789ae7b16137af96748012c6175c0561709f830de29922b7355509f4f9175

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

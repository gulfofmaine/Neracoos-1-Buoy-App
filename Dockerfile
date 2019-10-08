FROM node:12.11.1-alpine@sha256:f9d9aafffa703739855d60c578f91db1042ae371dc37a04e64bc0b51ae966a3d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

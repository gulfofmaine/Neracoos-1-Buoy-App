# FROM node:10.11@sha256:32d5d5435e5038028bd0c0871d256d5887b06c4315cb1a135bcf81e0735627c9
FROM node:11.14.0-alpine@sha256:ca1695f514d5dc54b4812f8b9029b277f86b50e83870af47bfa4582af0ec695d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

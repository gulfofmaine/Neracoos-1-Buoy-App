FROM node:10.6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json

RUN yarn install

COPY . /usr/src/app

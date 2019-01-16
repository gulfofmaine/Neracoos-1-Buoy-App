FROM node:10.11@sha256:32d5d5435e5038028bd0c0871d256d5887b06c4315cb1a135bcf81e0735627c9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

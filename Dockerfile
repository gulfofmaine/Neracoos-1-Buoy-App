FROM node:13.0.1-alpine@sha256:84b6a906926668554bef6c97782bd67a799bec426ece9555330c543635cc4c98

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN apk add --no-cache git

COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock

RUN yarn install --ignore-optional

COPY . /usr/src/app

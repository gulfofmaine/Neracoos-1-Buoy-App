#syntax=docker/dockerfile:1.2
FROM node:18.11.0-alpine@sha256:aea4be182415998853c47176eba665e862bed067ee6986632c20764782dcdf96 as develop

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY ./yarn.lock ./package.json /usr/src/app/

RUN --mount=type=cache,id=yarn,target=/usr/local/share/.cache/yarn \
    yarn install --ignore-optional

COPY . /usr/src/app

FROM develop as buildstep

ARG REACT_APP_PROXY_ROOT
ARG REACT_APP_ERDDAP_SERVICE

RUN yarn build

FROM nginx:1.23.2-alpine@sha256:bffb4330be734e3268087e28ca51f6ae926f7d4406c7f5b5ab50c5e22570dc32

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf

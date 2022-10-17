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

FROM nginx:1.23.1-alpine@sha256:b87c350e6c69e0dc7069093dcda226c4430f3836682af4f649f2af9e9b5f1c74

COPY --from=buildstep /usr/src/app/build /usr/share/nginx/html

COPY ./nginx.production.conf /etc/nginx/conf.d/default.conf
